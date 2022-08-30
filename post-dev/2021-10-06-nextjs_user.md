---
slug: 2021-10-06-nextjs_user
title: Next JS를 공부해보자[2편-Auth]
author: Sanghun lee
date: 2021-10-06 11:33:00 +0800
folder: [post-dev]
categories: [FE, Next JS]
tags: [Next JS]
math: true
mermaid: true
image:
  src: https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcZDedj%2FbtraJzj53sn%2FHdUj1jQOUihHUy0oday6kK%2Fimg.png
  width: 850
  height: 585
---

# Next JS

# 사용하는 이유

1편을 통한 간단한 개념잡기 이후에 Next js, Apollo-client 조합으로 쿼리를 이용할 수 있는 훅(useQuery 등)을 활용하여 로그인 로그아웃을 구현해보자!

# 1. 세팅

일단 기본적으로 next-apollo 의 샘플 깃헙 코드를 통해 대부분의 세팅을 진행하였고 추가적으로 link를 설정해서 헤더만 잡아주었다.

물론 이걸 지금 활용을 거의 못하고 있긴한데.. 수정사항이나 더 좋은 것이 생기면 포스팅을 수정해봐야겠다.

일단 현재 진행중인 개인프로젝트에서 사용한 것이므로 간단한 앱의 구조부터 설명을 하면 좋을 것 같아 `\_app`의 코드 먼저보고 시작하겠다

```tsx
const App = ({ Component, pageProps }) => {
  const apolloClient = useApollo(pageProps);

  return (
    <ApolloProvider client={apolloClient}>
      <Wrapper>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Wrapper>
    </ApolloProvider>
  );
};

export default wrapper.withRedux(App);
```

별도로 생성한 useApollo를 통해 생성한 클라이언트를 ApolloProvider로 넣어주고 Wrapper를 통해 전역 스타일을 넣어주었다

LayOut을 통해 Header, Footer를 모든 컴포넌트 내에서 동일하게 보여주는 방식을 취한다

리액트로 진행할때는 loggedInRouter, loggedOutRouter를 나눠서 진행했던 라우팅방시에서 조금 차이를 둬야하는 부분이다.
그래서 useMe라는 별도의 HOC를 만들어 쿼리를 리턴시키는 용도로 사용하고있다.

# 2. 유저 인증을 위한 hook

사실 코드만 보면 진짜 별 것 없이 간단한 코드인데 next js에 별도로 apollo가 얹어있는 세팅을 진행하다보니 몇가지 문제가 발생했었다.

1번의 세팅에서 보이듯 아폴로서버가 최상단에 존재하므로 next js 기반에서 두가지 경우 localStorage의 값을 보고 업데이트가 되었다.

1.  앱이 최초 빌드될때
2.  refresh가 일어나서 처음부터 렌더가 되는 시점을 제외하고는 별도로 apollo를 위해 세팅해준 값이 apolloClient.ts내에서 변경되지 않는 문제가 있었다.

```tsx
import { useLazyQuery, useQuery } from "@apollo/client";
import { ME_QUERY } from "../graphql/queries";
import { meQuery } from "../src/__generated__/meQuery";

export const useMe = () => {
  return useQuery<meQuery>(ME_QUERY);
};
```

> UseMe.tsx

세팅을 조금 더 설명하자면 useReactiveVar는 typePolicies에 미리 설정해준 fields의 값에 해당하는 값이 들어간 query들을 다시 한번 refresh할 용도로 사용하려했다.
(그리고 추가적으로 apollo.ts의 변수값도 곧바로 변경이 될 줄 알았다 ㅎ...)

일단 여기까지는 작동을하였고 헤더에서 로그인이 되지않은 경우 로그인 버튼을, 로그인 된경우 로그인 된 유저의 프로필사진을 보여주는 기능을 구현하는 것에 문제가 없었다.

문제는 유저의 프로필 사진이 나타나는 시점이었다.

즉 초기 렌더시 서버사이드로 진행되는 경우 apollo.ts에 설정된 localStorage와 관련된 값인 isTokenVar또는 isLoggedInVar를 사용할 수 없게 되어 에러가 발생하였고 이걸 해결하는 것이 필요했다.

아래는 apollo.ts로 apollo-client를 설정하는 파일이다.

```ts
const token =
  typeof window !== "undefined" ? localStorage.getItem("folks-token") : "";

export const isLoggedInVar = makeVar(false);
export const authTokenVar = makeVar(token); //요주의 인물

const httpLink = createHttpLink({
  uri: "http://localhost:4000/graphql",
  headers: {
    "folks-token": authTokenVar() || "",
  },
});

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === "undefined",
    link: httpLink,
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            token: {
              read() {
                return authTokenVar();
              },
            },
            isLoggedIn: {
              read() {
                return isLoggedInVar();
              },
            },
            allPosts: concatPagination(),
          },
        },
      },
    }),
  });
}
```

> apolloClient.ts

그래서 이런 설정을 활용하며 원하는 요구조건을 실행하기 위해서

문제와 해결방법의 정리를 위한 사고흐름을 정리 해보았다.

1. 로그아웃 후 다른 아이디로 로그인시 토큰은 변경되었으나 Header의 프로필은 그전의 아이디의 값이 존재했음
2. 중간에 redux toolkit을 다른 이유로 설치하고 편하게 관리하기 위해 user를 별도로 글로벌 State로 활용한것이 설마 문제가 있을까 하여 다 걷어냄
3. 현상이 유지가 되어서 next js의 문제 인지 apollo의 캐시인지 확인이 필요했음
4. apollo devtool 확인결과 애초에 최초로그인 시에는 cache에 저장되지도 않았음 -> 데이터가 안들어온 것. -> 네트워크 헤더에 토큰값 비어있음..
5. 조금 더 살펴보니 로그인 직 후 profile에서 변경된 makeVar로 만든 토큰값은 변경되어있지만 apollo client는 이미 세팅된 직후라 변경되지 않음 -> 그래서 요청때 비어있음.
6. 또다른 문제는 최초 로그인 후 다른 아이디로 로그인시 새롭게 query가 호출이 되지 않음
7. client.resetStore()를 하라는 공식문서 따라 해보려했으나 next js에서는 아폴로를 인스턴스로 가져와서 사용해야하기 때문에 쿼리가 그냥 다깨짐
   그래서 작동이 안되었음, 그래서 clearStore => resetStore로직이 편하게 먹질 못함
8. readQeury를 사용해 로그아웃일때 writeQuery를 사용해서 해당 쿼리의 유저값을 비워주려했음 -> 적절하게 사용할 곳이 아님 -> 공식문서 더 봐야함
   찾아보니 wrtieFragment와 readQuery의 조합으로 쓰면 될 것 같음 -> 생각해보면 무조건 관련 세팅이 있을 것 같음
9. 모두가 이렇게 긴 쿼리를 쓰며 시간을 낭비하지 않을 것 같음.
10. 역시 .. useQuery에 세팅을 할 수가 있음

위 사고흐름을 통해 공식문서를 찾아보니 ..

너무나도 당연하게 관련 세팅이 있었고

쿼리의 세팅은 이렇게 바뀌었다.

```tsx
const [getMeInfo, { data, error, loading }] = useLazyQuery<meQuery>(ME_QUERY, {
  context: {
    headers: {
      "folks-token":
        typeof window !== "undefined"
          ? localStorage.getItem("folks-token")
          : "",
    },
  },
  nextFetchPolicy: "network-only",
});
```

꽤 복잡(?)해졌으나 크게 두가지 문제를 모두 해결하게 된 방법이다

1번 문제였던 캐싱된 데이터가 업데이트 되지 않던 현상 => nextFetchPolicy를 통해서 캐시를 사용하지 않고 매번 네트워크 요청을 만드는 것
2번 문제였던 헤더에 localStorage에 있는 정보를 사용해야 할 경우 apollo.ts에서 설정해준것이 반영되지 않던 현상 -> context에 직접 주입

을 통해서 해결하였다.

어떻게보면 정말 간단하고 당연한(REST API 짱.. 익숙한게 최고.. 읍읍) 접근법일 수 있으나

SSR과 query방식의 데이터 호출을 제대로 사용해보려고 한 것은 처음이라 문제점을 찾는 과정까지도 시간이 좀 걸린 것 같다.

이 외에도 lazyQuery를 쓴 이유는 앱이 렌더되는 시점은 useEffect에서 해당 쿼리를 부르기 위해서이다.

# 3. 결론

기본적으로 프로젝트를 진행하는데에 있어 프론트 부분에서 중요하다고 생각한 유저의 데이터 활용 및 Auth 관련문제를 해결하게 되었다.
뭔가 어이없게 설정 몇개로 해결된 것에 있어 사고과정을 진행한 시간이 아깝다 생각이 들기도 하고 그렇다..

주니어를 벗어나기가 쉽지않다.
추가로 SSR은 유저들이 작성한 게시글을 뿌려줄때 쿼리를 이용해 받은 포스트번호를 써서 활용할 수 있을 것 같다.(이러면 애초에 보안상 큰 문제도 없을것 같다.)

다음편은 Toast UI를 통해 Editor를 가져오는 방법을 다른 멋진분의 블로그를 통해 구현한 일부분을 포스팅해보겠다.

끝

## 참고

- [Queries - Fetch data with the useQuery hook](https://www.apollographql.com/docs/react/data/queries/)
- [Nextjs Docs - Authentication](https://nextjs.org/docs/authentication)
