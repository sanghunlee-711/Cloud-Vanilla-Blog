import Portfolio from './pages/Portfolio.js';
import Posts from './pages/posts/Posts.js';
import PostView from './pages/posts/PostView.js';
import Resume from './pages/Resume.js';

//path를 찾기 위한 정규표현식이 들어있는 함수
const pathToRegex = (path) =>
  new RegExp('^' + path.replace(/\//g, '\\/').replace(/:\w+/g, '(.+)') + '$');

//파라미터를 찾아서 사용할 수 있는 형태로 반환하기 위한 함수
const getParams = (match) => {
  const values = match.result.slice(1);
  const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(
    (result) => result[1]
  );

  return Object.fromEntries(
    keys.map((key, i) => {
      return [key, values[i]];
    })
  );
};

export const router = async () => {
  const routes = [
    { path: '/', view: Posts },
    { path: '/resume', view: Resume },
    { path: '/portfolio', view: Portfolio },
    { path: '/posts', view: Posts },
    { path: '/posts/:id', view: PostView },
  ];

  const potentialMatches = routes.map((route) => {
    return {
      route,
      result: location.pathname.match(pathToRegex(route.path)), //매칭되는 라우터의 뷰를 보여주기 위한 속성
    };
  });

  let match = potentialMatches.find(
    (potentialMatch) => potentialMatch.result !== null
  ); // 매치된것 찾아냄

  if (!match) {
    // 매치 안된 경우 404 대신 Main으로 보낸다.
    match = {
      route: routes[0],
      result: [location.pathname],
    };
  }

  //뷰 인스턴스를 불러옴
  // getParams 메서드를 통해 찾아낸 params값을 props로 넘겨줌
  const view = new match.route.view(getParams(match));
  //뷰 인스턴스의 getHtml 메서드를 사용해서 바꿔 끼워 넣어줌
  document.getElementById(' app').innerHTML = await view.getHtml();
};

//a link 의 새로고침과 동시의 이동이 아닌 history 객체를 이용해서 url만 변화시켜주고 router함수를 사용
export const navigateTo = (url) => {
  history.pushState(null, null, url);
  router();
};
