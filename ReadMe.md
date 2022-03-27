# 설명

- Vanilla JS, HTML5, CSS3만을 사용하여 SPA 및 MVC 패턴을 적용하여 개인 블로그를 만들고 있습니다.

## 개념적 목표

- [x] SPA Routing 기능
  - [x] Routing with params
  - [x] Routing without Refresh
- [ ] 유기적인 Event Handler 등록
- [ ] Component 추상화
- [ ] MVC pattern
- [ ] Virtual DOM

## UI

- [ ] 포트폴리오 페이지
- [ ] 메인 페이지
- [ ] 이력서 페이지
- [ ] 게시글 페이지

  ## UX

  - [x] MD파일을 활용한 블로그
    - [x] MD파일 읽어오기
    - [x] CSS해주기

## Build

-[ ] server.js -> webpack을 통해 불필요한 작성파일 삭제

### Package Dependencies Explanation

1. babel
   ES6에서 표준으로 정의된 모듈을 **export** **import**키워드를 사용해서 작성하게 됨

```js
export function test() {}
export const test = function () {};
```

ES6 코드를 ES5코드로 ES6모듈을 Common JS로 트랜스파일 해주며 표준이 된 ES 모듈 개발환경을 기존의 **require** 문을 사용한 CommonJS모듈 방식을 사용치 않고 자동으로 바꿔주므로 Babel Loader + webpack을 사용하는 패턴으로 쓸 수 있게 해줌.

그래서 기존의 commit 에 보면 server.js에 있던 불필요한 코드들을 나는 webpack + babel-loader조합을 사용해서 없애 볼 생각임.

기존의 server.js가 작성된 이유는 webpack 과 babel-loader의 조합없이 그냥 import나 Require문을 브라우저에서 다이렉트로 돌아갈 js파일에다가 작성을 하게 되면 작동을 할 수 가 없게 되기 때문(이유를 좀 알아봐야겠네.)

- [MDN-Reference/Statements/import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
