# 링크

[Cloud Sanghun Blog With Vanila JS](https://blog.cloud-sanghun.com/)

# 설명

- Vanilla JS, HTML5, CSS3만을 사용하여 SPA 및 MVC 패턴을 적용하여 개인 블로그를 만들고 있습니다.

## 개념적 목표

- [x] SPA Routing 기능
  - [x] Routing with params
  - [x] Routing without Refresh
- [x] 유기적인 Event Handler 등록
- [x] Component 추상화
- [ ] MVC pattern
- [ ] Virtual DOM
- [x] Webpack
  - [x] Build Setting
  - [x] Dev Setting
- [x] Nginx Web server
  - [x] 포트포워딩을 통해 하나의 폴더에 서버와 프론트 띄우기
    - 443 -> api.xxx.com -> 4000
    - 443 -> blog.xxx.com -> dist/index.html
- [x] https setting with AWS load balance, Route 53

## UI

- [ ] 레이아웃
  - [x]GNB
  - [ ]Pagination
- [ ] 포트폴리오 페이지
- [ ] 메인 페이지
- [ ] 이력서 페이지
- [x] 게시글 페이지

  ## UX

  - [x] MD파일을 활용한 블로그
    - [x] MD파일 읽어오기
    - [x] CSS해주기
  - [x] 외부 플랫폼을 이용한 댓글
    - Disqus

## Build

-[ ] server.js -> webpack을 통해 불필요한 작성파일 삭제

# Front-End

## 1. 컴포넌트 생성

- 생성자 함수를 이용하여 state 기반으로 컴포넌트 생성
- 렌더함수를 통해 리렌더를 유발시키는 구조
- setStating을 하는 경우 render함수를 다시 호출함으로서 state기반으로 리렌더가 발생하게 됨.

```js
const Component = new Component({$target}) {
  this.$target = $target;
  const wrapper = document.createElement("div");
  wrapper.setAttribute('class', 'component-wrapper');
  this.$target.appendChild(wrapper);

  this.state = false;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  }

  this.toggle = () => {
    this.setState(!this.state);
  }

  this.render = () => {
    this.wrapper.innerHTML=`
      <button class="toggle-button"></button>
      ${this.state ? '<div>Fun Vanila js!</div>' : '<div>Fun Coding!</div>'}
    `
  }

  this.wrapper.addEventListener('click', (e)=>{
    if(e.target.className !== 'toggle-button') return;
    this.toggle()
  });

  this.render();
}
```
