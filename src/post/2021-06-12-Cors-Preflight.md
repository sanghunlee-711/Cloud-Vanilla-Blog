---
slug: 2021-06-12-Cors-Preflight
title: Cors와 Preflight
author: Sanghun Lee
date: 2021-06-12 11:33:00 +0800
categories: [BE, Resource]
tags: [Cors, Prefilght]
math: true
mermaid: true
image:
  src: '../static/images/posts/google.png'
  width: 850
  height: 585
---

# <span>참고!</span>

이 포스팅은 <a href ="https://www.youtube.com/watch?v=-2TgkKYmJt4">우아한Tech</a> 유튜브 채널의** [10분 테코톡] 🌳 나봄의 CORS** 포스팅을 보고 개인공부를 위해 정리한 내용입니다 :)
추가적으로 참고한 포스팅은 아래와 같습니다

- [다른 도메인간 쿠키 전송하기(axios와 express 예제)
  ](https://www.zerocho.com/category/NodeJS/post/5e9bf5b18dcb9c001f36b275)

# CORS는 왜 존재하나

존재의 이유를 알기 위해 필요한 몇가지 개념과 예시를 보자

## SOP(Same Origin Policy)

다른 출처의 리소스를 사용하는 것에 제한을 거는 보안 방식이다.

### SOP를 사용해야하는 예시

1. 어떤 유저가 Facebook에 로그인을 하고 토큰을 받아 로그인 과정을 완료햇다.

2. 유저는 로그인한 상태로 재미있는 메일을 **해커(http://hacker.com)**
   로 부터 받았다(너무 재미있어서 클릭을 안할 수 없을 정도)

3. 해커는 재미있는 메일 안에 임의로 **페이스북(http://facebook.com)**
   에 무엇인가를 작성할 수 있게 해버리는 script코드를 적어 보냈다.

4. 이때 페이스북에 **유저의 토큰**을 가지고 **해커의 출처(origin)을 통해 글을 작성**하려고 하게 된다.

5. 이때 SOP 정책에 의해 요청을 확인하고 **다른 출처(origin)을 가지게 되므로** 페이스북에서 자신의 출처와 다른출처를 가지므로 SOP정책에 의해 해당 요청을 거부하게 된다.

## 그래서 CORS란 ?

Cross-Origin Resource Sharing으로서 다른 출처(origin)의 자원을 공유하는 것이다.

추가 Http 헤더를 사용하여, 한 출처에서 실행 중인 웹 어플리케이션이 다른 출처의 선택한 자원에 접근할 수 있는 권한을 부여하도록 브라우저에 알려주는 체제이다.

### CORS의 접근제어 시나리오

### 1. 단순 요청(Simple Request)

Preflight의 요청없이 바로 서버로 요청을 날리게 된다.

GET, POST, HEAD 메서드가 들어있고 Content-Type이 들어있다.

### 2. 프리플라이트 요청(Prefilght Request)

### prefilght란?

![](https://images.velog.io/images/cloudlee711/post/cf3dd9ed-372b-432e-9f5b-4ad8d7cd0cf2/image.png)

출처:[https://livebook.manning.com/](https://livebook.manning.com/book/cors-in-action/chapter-4/15)

덧글 중에 너무 잘 설명을 해놓으신게 있어 인용을 해보겠다..(따라치는거지 뭐..)
![](https://images.velog.io/images/cloudlee711/post/b0408967-b34e-45af-8f69-1a29e3e8bb3f/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-06-12%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%204.00.45.png)

- CROS spec이 생기기 이전에 만들어진 서버들은 브라우저의 SOP Request만 가능하다는 가정하에 만들어졌다.

- 그런데, cross-site request가 CORS로 인해 가능해졌기 때문에 이러한 서버들은 cross-site request에 대한 보안 메커니즘(security mechanism)이 없다보니 보안적으로 문제가 생길 수 있었다.

- 이런 보안적인 문제들을 보호하기 위해 CORS spec에다가 preflight request를 포함하여 prefilght request를 통해 서버가 CORS를 인식하고 핸들링할 수 있는지 먼저 확인을 하게 한 뒤 , CORS를 인식하지 못하는 서버들을 보호하게 된다.

- 만약 preflight request가 서버로 전송을 하였을 때 CORS를 인식하지 못하는 서버라면 제대로 된 응답(response)를 보내지 못하게 되고 그렇게 되면 실제 client로 부터의 요청(request)도 전송되지 않게 되어 preflight 가 cross-origin 요청(request)에 대비 되지 않은 서버를 보호해주게 된다.

### 3. 인증정보 포함 요청(Credential Request)

인증관련 헤더를 포함할때 사용하는 요청이다.

- 클라이언트 측에서는 credentials: "include" (이외에도 same origin 등의 옵션이 더 있다.)
- origin이 다른 http 통신에서는 request header에 쿠키가 자동으로 들어가지 않는다.
- 다른 출처의 경우 로그인 유지를 위한 쿠키가 서로 전송되지 않는 문제가 있어 해당 옵션을 주는 것으로 사용하는 것 같다.

설정은 서버측에서는 Acess-Control-Allow-Credential: true
이때 와일드카드(\*)는 안된다.

### 4. CORS 해결하기!

1. 프론트 프록시 서버설정(개발 환경)
   개발 환경에서 api 요청을 하는 target을 동일한 포트로 설정하고 개발하기
2. 직접 헤더에 설정해주기
3. 스프링부트를 이용하기(?)
   -> 나봄님은 spring에 맞춰서 데코레이터에 origin 값을 설정해주고 CORS를 해결하신 것을 보여주신 다음 configuration 파일을 따로 만들어서 origins와 관련된 메서드를 통해 해결하셨다.

   나는 node를 사용하고 있어서 이부분은 node에 맞춰서 다시 적어보겠다 ..

### 5. Node에 맞춰서 해결해보자.

노드에서는 cors 모듈을 import하여 사용하면 편하게 할 수 있는데 use메서드를 통해 미들웨어로 적용해주면 된다.

내가 작성한 코드는 origin을 request가 들어오는 origin과 동일하게 사용하고 있다.(사실 상 wild card이다)

그리고 credential true설정을 통해 프론트에서는 헤더에 withCredential: true를 헤더에 담아 사용하고 있다.

#### 백엔드 코드

![](https://images.velog.io/images/cloudlee711/post/0d56ee86-07e1-4550-8fb7-5a7575634c6b/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-06-12%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%204.38.51.png)

그렇다면 cors 모듈에 대해 조금 더 파보자.

![](https://images.velog.io/images/cloudlee711/post/e451a694-8ec7-4233-9129-fb1db3b95652/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-06-12%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%204.40.46.png)

출처:[Express cors middleware](http://expressjs.com/en/resources/middleware/cors.html)

캡쳐본의 설명에도 있듯이 origin 옵션을 통해 실제로 필요한 출처(origin)만 허용해줄 수도 있다.
