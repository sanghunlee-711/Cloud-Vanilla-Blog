# 링크

[Cloud Sanghun Blog With Vanila JS](https://blog.cloud-sanghun.com/)

## 설명

- Vanilla JS, HTML5, CSS3만을 사용하여 state기반 rerendering, routing을 통한 SPA 개념을 적용하여 개인 블로그입니다.

## CSR with Vercel 작동 방식

- CSR과 Vercel의 serverless api funtion으로 제공되는 api를 조합한 것입니다.
- 개발서버는 `npm run dev`를 통해 실행할 수 있습니다.
- vercel에서는 other framework로서 제공하기에 별도의 실행코드가 필요 없는 상태입니다.
- CSR라우팅에서 404인경우 index.html로 리다이렉트를 하기 위한 설정은 vercel.json에 있습니다.

## UI/UX

### Main page

<img src="./static/gif/blog-main.gif" alt="Main page preview of Cloud Sanghun Blog">

## Burger Navigation

<img src="./static/gif/blog-burger.gif" alt="GNB page preview of Cloud Sanghun Blog">

## Categorized Post

<img src="./static/gif/blog-category.gif" alt="Cateorizing UX preview of Cloud Sanghun Blog">

## Infinite Scroll

<img src="./static/gif/blog-infinitescroll.gif" alt="Scroll UX preview of Cloud Sanghun Blog">

## Resume with printing

<img src="./static/gif/blog-resume.gif" alt="Resume page preview of Cloud Sanghun Blog">

## 개념적 목표

### 2022

- \[x] SPA Routing 기능
  - \[x] Routing with params
  - \[x] Routing without Refresh
- \[x] 유기적인 Event Handler 등록
- \[x] Component 추상화
- \[x] Webpack
  - \[x] Build Setting
  - \[x] Dev Setting
- \[x] Nginx Web server
  - \[x] 포트포워딩을 통해 하나의 폴더에 서버와 프론트 띄우기
    - 443 -> api.xxx.com -> 4000
    - 443 -> blog.xxx.com -> dist/index.html
- \[x] https setting with AWS load balance, Route 53

### 2023

- \[x] Hash Routing -> History Routing for google adsense 👀 and ready for server side
  - \[x] apply custom event for a tag and popstate
  - \[x] do nginx 404 redirect setting in blog subpath
- \[x] client side -> server side with state manange and component structure

## UI

### 2022

- \[x] 레이아웃
  - \[x]GNB
- \[x] 포트폴리오 페이지
- \[x] 메인 페이지
- \[x] 이력서 페이지
- \[x] 게시글 페이지

### 2023

- \[x] 이력서 페이지 개선
- \[x] 게시글 타입 선택박스 UI 개선

## UX

### 2022

- \[x] MD파일을 활용한 블로그
  - \[x] MD파일 읽어오기
  - \[x] CSS해주기
- \[x] Pagination
- \[x] 카테고리별 글 보기
- \[x] 외부 플랫폼을 이용한 댓글
  - \[x] Disqus
