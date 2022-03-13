---
slug: 2021-09-29-nextjs_basic
title: Next JS를 공부해보자[1편]
author: Sanghun lee
date: 2021-09-29 11:33:00 +0800
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

개인 프로젝트로 재미있는 기능이 몇가지 존재하는 커뮤니티 사이트를 만들어볼 생각으로

백엔드는 Nest JS + TypeORM + Postgresql + Graphql/apollo

프론트는 CRA + Redux Toolkit + Redux Saga

로 진행하려 초기세팅을 마쳤었다.

Express로 간단하게 데모를 만들어본 뒤로는 NestJS만을 통해 필요한 서버를 구축하고 있는 상황이라 백엔드는 NestJS이외에 마땅한 대안이 떠오르지않았는데..(아무래 생각해도 최고다)

프론트의 경우 SEO와 SSR, CSR을 번갈아 쓸 수 있는 Next js의 유혹을 뿌리칠 수 없었고

무엇보다도 시장에서 수요가 꽤 있어 언젠가는 해야지 하는 생각을 가지고 있었다....

회사에서 쓰는 스택을 포기하고 NextJS와 SSR의 조합으로 진행하고 테스트 코드의 경우 Jest, MSW, Cypress, StoryBook을 가져가는게 맞는 것 같다고 판단을 내렸다.

- 사실 Cypress는 회사에서 직접 도입하며 문제를 해결해보아 그나마 괜찮으나 Storybook은 조금 걱정이다

여튼 커뮤니티의 유저를 늘리기 위해서는 SEO가 불가결할 것 같아 시도하게되는 Next JS이다 :) ...

아래부터는 내가 진행하면서 헷갈리는 개념을 몇가지 정리해놓기 위한 포스팅의 목적이 크다!

# 1. 개념

## 1.1 CSS, Router

일단 기본적으로 css in js 스타일링도 지원되고 scss, css등이 모두 정해진 위치(assets, pages, components 등)에 잘 두면 작동이 간편하게 된다.

이 맛에 프레임워크를 쓴다 ㅎㅎ...

공식문서에 있는 그대로 따라하면 좋은 것 같다. 나는 class toggle이 용이해보이는 classnames라는 패키지모듈을 별도로 설치해 사용하고

나머지는 scss와 css를 util화 하여 적절하게 사용하는 것이 좋다고 판단하고 있다.

## 1.2. Static Generation vs Server Side Rendering

Next js에서는 아래 두 컨셉을 페이지별로 필요에따라 마음대로 선택하여 사용할 수 있다.

## 1.2.1 Static Generation

- HTML을 빌드타임에 미리 렌더링시키는것(pre-rendering)
- 미리 렌더된 HTML은 각 요청마다 재사용되게 된다.
- 개발모드에서는 Static Generation이라 하더라도 Server-side Rendering와 같이 각 요청(Request)마다 새롭게 생성
- 유저의 요청전에 필요한 페이지인 경우

  - 마케팅 페이지
  - 블로그 게시물(이래서 쓴다)
  - E-commerce 제품 리스트
  - 문서나 문서

- 데이터를 미리 받아오는 등의 전처리가 필요한 경우 `getStaticProps` 라는 함수 안에서 필요한 로직을 실행하면 된다.

## 1.2.2 Server-side Rendering

- 각 요청마다 새로운 HTML을 생성해준다
- 별도 설정없이은 CDN캐시가 되지 않고 매 요청마다 서버에서 새로 계산을 해야하므로 시간이 `getStaticProps`에 비해 더 걸리게 된다.
- 매 요청에(request time)에 데이터를 가져와야 하는경우(빌드타임이아닌고 렌더 되기 전에 이미 완성이 되어있어야 하는 경우) `getServerSideProps` 를 사용하면 된다.
  > When you need to fetch data at request time instead of build time

> You should use getServerSideProps only if you need to pre-render a page whose data must be fetched at request time. Time to first byte (TTFB) will be slower than getStaticProps because the server must compute the result on every request, and the result cannot be cached by a CDN without extra configuration.

## 1.2.3 Client-side Rendering

- 데이터를 pre-rendering할 필요가 없고 정적으로 미리 만들어진 사이트가 외부데이터를 필요로 하지 않을때
- 정적페이지가 로딩 된 다음 외부 데이터를 client의 js사용으로 나머지 부분을 채우게 만드는 방법

- 게시판 페이지등에 활용
- dashboard는 유저의 개인 공간이기 때문에 SEO(검색엔진 최적화)가 필요가 없으므로 pre-render가 필요하지 않음
- 데이터가 수시로 업데이트되는 경우 활용하기

## 1.3 SWR

- Client side에서 데이터를 받아오기 위해 사용하는 Hook임
  > It handles caching, revalidation, focus tracking, refetching on interval, and more.

# 2. 활용

## 2.1 Static Generation

Static Generation의 샘플이다.

getStaticProps를 적용하고 간단하게 만든 REST API를 통해 데이터를 미리 받아온다.
HTML을 빌드타임에 렌더링시킨 뒤 보내게 된다.

재미있는 부분하나 utilStyle.headingMd등 약간 모듈같이 css를 활용할 수 있게 된 점이다.

```tsx
import axios, { AxiosResponse } from "axios";
import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
// 예시로 필요한 데이터를 보내기 위해 간단한 RESTAPI를 만들어 사용
interface DataTest {
  date: string;
  title: string;
  content: string;
}
interface TestData {
  returnData: DataTest[];
}

const Home = ({ returnData }: TestData) => {
  return (
    <Layout home={true}>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Link href="/posts/first-post">
        <a>To go first Post</a>
      </Link>
      <section className={utilStyles.headingMd}>
        <p>Hello There</p>
        <p>This is Sample Website</p>
        <p>
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.
        </p>
      </section>
      <section className={utilStyles.headingMd}>
        <ul>
          {returnData?.map((el) => (
            <li key={el.date}>
              {el.date} <br />
              {el.title} <br />
              {el.content}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
};

//https://nextjs.org/learn/basics/data-fetching/getstaticprops-details
export async function getStaticProps() {
  const { data }: AxiosResponse<{ data: TestData }> = await axios.get(
    "http://localhost:4000/images/test"
  );

  const returnData = data.data;

  return {
    props: {
      returnData,
    },
  };
}

export default Home;
```

> getStaticProps 예시

## 2.2 Server-side Rendering

```tsx
import axios, { AxiosResponse } from "axios";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";
import utilStyles from "../../styles/utils.module.css";

interface DataTest {
  date: string;
  title: string;
  content: string;
}
interface TestData {
  data: DataTest[];
}

const FirstPost = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <Layout home={false}>
      <Head>
        <title>First Post!</title>
      </Head>
      <h1>First Post!</h1>
      <h2>
        <Link href="/">
          <a> Back to HOme</a>
        </Link>
      </h2>
      <section className={utilStyles.headingMd}>
        <ul>
          {data?.map((el: DataTest) => (
            <li key={el.date}>
              {el.date} <br />
              {el.title} <br />
              {el.content}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res: AxiosResponse<{ data: TestData }> = await axios.get(
    "http://localhost:4000/images/test"
  );
  const data = res.data.data;

  if (!data) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { data },
  };
};

export default FirstPost;
```

# 3. 결론

기본적으로 필요한 CSS, REST-API 받는방식 및 관련 개념을 정리해보았다.

SWR같은경우는 세팅을하고 컴포넌트를 작성하면서 다시한번 샘플을 해당 포스팅에 남겨보아야겠다.

이제 다음편에 해야할 것은 [이 링크](https://github.com/vercel/next.js/tree/canary/examples)를 통해 apollo-client를 연결하여

graphql/ apollo/ apollo-client을 세팅하는 방법을 공부하며 포스팅해보겠다

## 참고

- [Fetching Data at Request Time](https://nextjs.org/learn/basics/data-fetching/request-time)
- [getStaticProps Details](https://nextjs.org/learn/basics/data-fetching/getstaticprops-details)
