# 링크

[Cloud Sanghun Blog With Vanila JS](https://blog.cloud-sanghun.com/)

# 설명

- Vanilla JS, HTML5, CSS3만을 사용하여 state기반 rerendering, routing을 통한 SPA 개념을 적용하여 개인 블로그를 만들고 있습니다.

## 개념적 목표

- [x] SPA Routing 기능
  - [x] Routing with params
  - [x] Routing without Refresh
- [x] 유기적인 Event Handler 등록
- [x] Component 추상화
- [x] Webpack
  - [x] Build Setting
  - [x] Dev Setting
- [x] Nginx Web server
  - [x] 포트포워딩을 통해 하나의 폴더에 서버와 프론트 띄우기
    - 443 -> api.xxx.com -> 4000
    - 443 -> blog.xxx.com -> dist/index.html
- [x] https setting with AWS load balance, Route 53

## UI

- [x] 레이아웃
  - [x]GNB
- [x] 포트폴리오 페이지
- [x] 메인 페이지
- [x] 이력서 페이지
- [x] 게시글 페이지

  ## UX

  - [x] MD파일을 활용한 블로그
    - [x] MD파일 읽어오기
    - [x] CSS해주기
  - [x] Pagination
  - [x] 카테고리별 글 보기
  - [x] 외부 플랫폼을 이용한 댓글
    - [x] Disqus

## Build

- [x] FE: Webpack build

# Front-End

## 1. 컴포넌트 생성

- 생성자 함수를 이용하여 state 기반으로 컴포넌트 생성
- 렌더함수를 통해 리렌더를 유발시키는 구조
- setStating을 하는 경우 render함수를 다시 호출함으로서 state기반으로 리렌더가 발생하게 됨.

```js
const Component = function ({ $target }) {
  this.$target = $target;
  const wrapper = document.createElement('div');
  wrapper.setAttribute('class', 'component-wrapper');
  this.$target.appendChild(wrapper);

  this.state = false;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.toggle = () => {
    this.setState(!this.state);
  };

  this.render = () => {
    this.wrapper.innerHTML = `
      <button class="toggle-button"></button>
      ${this.state ? '<div>Fun Vanila js!</div>' : '<div>Fun Coding!</div>'}
    `;
  };

  this.wrapper.addEventListener('click', (e) => {
    if (e.target.className !== 'toggle-button') return;
    this.toggle();
  });

  this.render();
};
```

## 2. 라우터

- hashchange이벤트를 기반으로한 라우터 구축
- window.onload 를 활용하여 새로고침 대응
- 생성자 키워드를 통해 컴포넌트 인스턴스 생성

```js
//받은 컴포넌트를 렌더해주는 역할을 하는 함수
function renderHTML(el, route) {
  el.innerHTML = '';

  const Component = route.components;

  new Component({
    $target: el,
  });
}

//hash 값을 읽어 필요한 컴포넌트를 반환해주는 함수
function getHashRoute() {
  let route = ROUTES[0];

  ROUTES.forEach((hashRoute) => {
    const hashLocation = window.location.hash;

    //id별로 값을 다르게 받아와야하는 컴포넌트인 경우 Content를 따로 불러와주기
    //정규식으로 리팩토링하면 좋으련만 아직은 ..
    if (getContentId()) {
      route = ROUTES.filter((el) => el.name === 'Content')[0];
      return route;
    }

    if (hashLocation === hashRoute.path) {
      route = hashRoute;
    }
  });
  return route;
}

export function initialRoutes({ el }) {
  // hashchange 이벤트를 활용한 라우터 진행
  window.addEventListener('hashchange', () => {
    return renderHTML(el, getHashRoute());
  });

  // 새로고침 시 의도한대로 주소를 찾아가기 위해 onload에 renderHTML을 불러놓기
  window.onload = () => {
    return renderHTML(el, getHashRoute());
  };
}
```
