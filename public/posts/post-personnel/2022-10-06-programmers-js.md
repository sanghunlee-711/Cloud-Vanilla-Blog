---
slug: 2022-12-22-next-step-tdd
title: 프로그래머스 JS 스터디 참여 후기
summary: 바닐라 자바스크립트? 제가 한번 해볼게요.
author: Sanghun lee
date: 2022-12-22 11:33:00 +0800
categories: [TDD, Javascript]
folder: [post-personnel]
tags: [TDD]
math: true
mermaid: true
image:
  src: 'static/images/posts/programmers-js/programmers.jpeg'
  height: 585
---

# 참가 이유 ?

이제껏 2가지의 회사를 다니면서 React, Next.js 의 주 스택으로 개발을 진행하며 이렇게까지 많은 옵션들을 가진 라이브러리나 프레임워크로 개발을 진행해야하는지에 대한 의문이 항상 들었다.

그래서 간단한 기능 요구사항이 있는 경우 익숙한 기존의 상태관리 방식으로의 개발을 낮은 수준에서 구현해보면 좋을 것 같다는 생각을 가지고 있었다.

리뷰를 이것저것 찾아보니 참가자들은 바닐라 자바스크립트를 통한 기본적인 앱 개발에 대한 개념과 약간의 코드리뷰를 받았다는 후기를 보게 되었고 갈증이 있었던지라 주저없이 참가해보았다.

아래는 주차별 겪은 경험 및 개인적의견이 담겨있는 글이다.

---

# 0주차

JS로 진행되는 몇가지 사전질문을 구글폼을 통해서 받게된다.

특정코드의 실제 작동방식은 어떻게될까요?? 와 같은 질문이며 var, clousre, 객체 내부변수의 변경에 대한 결과값등에 대해 묻는 질문이다

한가지의 예만 들면 아래와 같다.

위 코드를 실행하면 무엇이 출력되나요? 그리고, 그것이 출력되는 이유는 무엇인지 최대한 자세히 서술해주세요. (주관식)

```javascript
var blog = {
  name: 'blog',
  members: {
    cloud: {
      memberName: 'cloud-vanila',,
      play: function() {
        console.log(`band ${this.name} ${this.memberName} yo-yo`)
      }
    }
  }
}

blog.members.cloud.play();
```

위 질문은 `function scope`에 관한 문제이며 `this.name`은 scope을 넘어서게 되어 undefined가 뜨게 될 것이다. 차라리 `blog.name` 을 호출한다면 원하는 결과를 받게 될 것이다.

이렇게 제출한 사전 답변을 토대로 적절한 수준의 스터디를 진행하신다고 한다.

# 1주차

첫 주차로 스터디가 시작되면 리뷰는 어떻게 진행되는지 과제는 어떤식으로 진행되는지 알려주신다.

앞으로 과제가 어떤식으로 진행되는지 알려주시고

참여했던 차수의 스터디 기수에서는 매주 수요일 8시에 세션이 진행되었고 리뷰는 최소 3명이상 받아야 했으며 매주 과제가 제출되어 재미있게 스터디를 진행할 수 있었다.

# 2주차

2주차 세션에서는 1주차 과제를 간략하게 라이브코딩으로 보여주셔 다양한 인사이트를 얻을 수 있었다.

그 과정에서 알게 된 점은 아래 `1주차 과제를 통해 배운점`에서 요약하겠다.

2주차에 진행될 과제는 1주차에 간단히 만들어본 TodoApp을 추가,삭제가 되도록 만들고 새로운 js파일들로 분리하여 프로젝트를 진행했다.

그리고 var의 사용제약이라던가.. 간단한 삭선처리는 `<s></s>`태그를 사용한다던가에 대한 사전 설명을 해준다.

커스텀이벤트와 브라우저 스토리지를 사용하는것도 보너스 구현사항으로서 하면 좋을 것이라고 추천도 해주셨다.

## 코드리뷰

아래와 같이 멍청한 코드가 보이시면 리뷰를 잘해주신다 ㅎㅎ..

![1stweek-review](static/images/posts/programmers-js/1stweek-review.png)

[1주차 과제 및 받은 리뷰](https://github.com/learn-programmers/prgrms-fejs/pull/910)는 여전히 보존 되고 있으니 관심이 있으신분들은 스윽 보셔도 좋을 것 같다

## 1주차 과제를 통해 배운 점

`Array.isArray(state)` 와 같은 언어 내장 API의 활용법 및 생성자 함수를 컴포넌트로 취급하고 그 내부 메서드들을 선언하여 일관된 render, setState를 하는 팁들을 얻은 것 같다. 큰틀에서 머리에 렌더링에 대한 도식화가 된 느낌이다.

# 3주차

3주차 세션에서는 똑같이 2주차에 진행된 과제를 라이브코드로서 조금 더 개선된 방향으로 보여주신다. 그 이외에 다음 주차에 진행 될 과제에 대해 설명을 해주신다.

API를 제공해주시고 해당 API를 활용하여 검색을 진행, 이 과정에서 디바운스를 걸어보고 하는 등의 행위를 하게 된다.

[2차 과제 및 받은 리뷰](https://github.com/learn-programmers/prgrms-fejs/pull/937)는 또 여전히 보존되고 있다.

관심있으신분은 한번 봐보시면 스터디의 큰흐름이 이해가 가실 것 같다.

모든 과제를 이행하였고 재미있게 진행한 것 같다.

## 2주차 과제를 통해 배운점

아래의 사진과 같은 구조로 모든게 컴포넌트 및 렌더가 구현, 진행되며 간단하게 나마 무슨 앱을 구현할 때 도식화하면 좋을 것 같다는 생각을 가지게 되었다.

![app-flow](static/images/posts/programmers-js/app-flow.png)

이벤트리스너를 적용할 때 바닐라 JS의 경우 Props로 받는 타겟을 통해 진행하거나 별도의 엘리먼트를 잡아쓸게 되는데 이때, 이벤트 위임을 적절히 이용하고 이벤트 타겟의 `tagName` 또는 `class` 등으로 잘 분기해서 처리하면 원하는 작동방식을 얻을 수 있게 된다.

사실 개념으로서는 잘 인지하고 있었으나 매일 라이브러리나 프레임워크로 개발을 하다보니 너무 익숙하지 않아 잠깐 혼선이 있기도 했던 부분이다. 기본개념은 항상 머리속에서 잘 살아있으면 좋을 것 같다.

그 외에 `JSON.parse, stringify`메서드 활용시 에러가 터지게 되는 경우 전체 JS가 멈춰버리는 경우가 있으므로 `try,catch`구문을 통해 잘 감싸주어 에러처리를 하면 좋은 것 같은 팁을 알게 되었고

생성자 함수 적용 시 함수로서의 역할을 하지 않고 생성자의 역할만을 하도록 제약을 두고 싶다면 인스턴스를 위해 사용되어야만 하도록 한가지 제약을 거는 팁도 얻게 되었다.

아래와 같이 해볼 수 있을 것이다.

```javascript
const isInstance = function ({ _this, instanceName }) {
  if (!(_this instanceof instanceName)) throw new Error('생성자를 붙여주세요.');
};

const App = function ({...}) {
  isInstance({_this:this, instanceName:App});
  ...
```

# 4주차

4주차 세션에서는 똑같이 3주차에 진행된 과제를 라이브코드로서 조금 더 개선된 방향으로 보여주신다. 그 이외에 다음 주차에 진행 될 과제에 대해 설명을 해주신다.

주어진 과제와 추가 구현등을 이떄까지 다 구현하고 있어 이번에도 열심히 진행해보았다.
[3주차 과제 및 받은 리뷰](https://github.com/learn-programmers/prgrms-fejs/pull/951)는 또 여전히 잘 보존되어있다 ㅎㅎ;;

4주차에 주어지는 미션은 기존에 만든 TodoApp에 제공되는 API를 붙이고 로더도 붙여보는 .. 생각보다 간단한 미션이다.

## 코드리뷰

받은 리뷰중에 재미있는 내용이 있었는데 이벤트 위임의 그 범위에 관한 내용이다.

![event-range](static/images/posts/programmers-js/3rdweek-review.png)

역시 다양한 사람들과 많은 교류를 해야 생각의 범위가 넓어지는 것 같다. 해당 리뷰를 보고 컴포넌트라는 범위에 한정해서 생각해본다면 해당 컴포넌트가 가지고 있는, 있을만한 리스너들을 뭉쳐놓는게 오히려 더 의미적으로는 이해하기 쉬울 것 같다는 생각이 들었다.

## 4주차에 배운 것들

### 싱글스레드 언어

더러운 코드 이야기와 함께 JS는 싱글스레드언어, 그래서 콜백패턴 생기게 되고 이로인해 읽기힘든 콜백 패턴이 생기게 되는데, 이 상황에서 JS를 활용하는 개발자라면 `Promise` 객체의 `all` `allSetteled` 와 같은 메서드 또는 `async, await` 를 잘 사용하여 이를 가독성이 좋도록 깔끔하게 변화 시킬 수 있어야 한다는 이야기였다.

### Ajax

또한, Ajax요청에서 `fetch`와 관련하여 에러처리, 방어코드 ,데이터 검사는 반드시 있어야하고 이를 위해 `try, catch` 의 활용 및 **fetch의 경우 http 에러가 발생해도 catch로 떨어지지 않으므로** response의 ok값을 반드시 검사해야한다 와 같은 팁도 얻게 되었다.(200대로 응답보내면 ok뜨는데 아니면 ok안뜰수도 있음)

[AbortController - Web API | MDN](https://developer.mozilla.org/ko/docs/Web/API/AbortController) 를 통해 중간에 API호출을 끊어주고 싶을 때 사용하여 불필요한 요청 지속을 끊는 팁도 알게 되었다.

### Rerender

만약 렌더링 최적화를 vanila js에서 하고 싶다면 JSON.stringify(this.state) ≠= nextState 등으로 비교해서 렌더를 막는 조건문을 짜주면 된다는 짧은 팁을 주셨다.
실제로 조금 더 우아하게 풀고 싶다면 재귀를 잘 활용하여 객체를 비교해주는 로직을 짜주는 것도 좋을 것 같다는 개인적 생각도 하였다. 하지만 공수가 너무 들 것 같아서 패스 ..

### Router

이 부분은 궁금해서 여쭤봤던 것인데 실제 SPA와 같은 라우팅 구성 시 아래와 같은 크게 두가지 방식이 있다고 하셨다.

1. 해쉬뱅
2. history.pushState

[JavaScript History pushState](https://www.javascripttutorial.net/web-apis/javascript-history-pushstate/) 이 문서를 참고해보라고 하셨고 여담이지만 이 글이 담긴 블로그는 두가지 방식을 모두 적용해본 블로그이다 ㅋㅋ..

# 5주차

5주차 세션에서는 4주차의 과제에 대한 리뷰와 프론트엔드와 관련된 Q&A시간을 진행하셨다.

뭔가 4주차 과제가 흐지부지된 느낌이지만.. 그리 복잡한 과제는 아니었으므로 별로 여의치 않았다.

내가 드렸던 질문은 크게 두가지였다.

1. 프론트엔드로서 성장하자면 어떤 공부순위를 가지는게 좋은지?

- 알고리즘은 스크리닝 용도니 기본이상의 수준만 가지고 오히려 CS의 네트워크, OS쪽을 빠삭하게 아는게 실무에서는 더 중요한 것 같다고 해주셨다.

2. 해야할 공부들이 많은 경우 어떤 방식으로 일정을 잡으셔서 공부를 하셨는지?

- 오히려 하나의 어플리케이션을 온전히 모두 만들어보며 webpack, serverless, edge computing, Docker같은 것을 하나씩 접목시키며 공부해보라고 하셨다. 그러면 특정 기술의 컨셉이 보이고 필요한 이유를 알게되고 그 때 필요 우선순위에 따라 먼저 하나씩 공부해보는 편이라고 한다.

# 개인 참고를 위한 링크

프라이빗 레포라 수강생들만이 접근 가능하므로.. 현재 등록하여 진행중이신분들은 참고하면 좋을 것 같아 PR링크 남겨봅니다

- [1주차 과제 및 받은 리뷰](https://github.com/learn-programmers/prgrms-fejs/pull/910)
- [2주차 과제 및 받은 리뷰](https://github.com/learn-programmers/prgrms-fejs/pull/910)
- [3주차 과제 및 받은 리뷰](https://github.com/learn-programmers/prgrms-fejs/pull/910)
- [4주차 과제 및 받은 리뷰](https://github.com/learn-programmers/prgrms-fejs/pull/961)

# 지원 사이트

- [프로그래머스-스터디 신청 사이트](https://school.programmers.co.kr/learn/courses/16199/16199-%EB%9D%BC%EC%9D%B4%EB%B8%8C19%EA%B8%B0-%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C-%EA%B0%9C%EB%B0%9C%EC%9D%84-%EC%9C%84%ED%95%9C-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8feat-vanillajs)
