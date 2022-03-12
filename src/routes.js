import Main from './pages/Main.js';
import Portfolio from './pages/Portfolio.js';
import Posts from './pages/posts/Posts.js';
import PostView from './pages/posts/PostView.js';
import Resume from './pages/Resume.js';

export const pathToRegex = (path) =>
  new RegExp('^' + path.replace(/\//g, '\\/').replace(/:\w+/g, '(.+)') + '$');

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
    { path: '/', view: Main },
    { path: '/resume', view: Resume },
    { path: '/portfolio', view: Portfolio },
    { path: '/posts', view: Posts },
    { path: '/posts/:id', view: PostView },
  ];

  const potentialMatches = routes.map((route) => {
    console.log(location.pathname, route.path);
    return {
      route,
      result: location.pathname.match(pathToRegex(route.path)), //매칭되는 라우터의 뷰를 보여주기 위한 속성
    };
  });
  console.log('potentialMatchespotentialMatches', potentialMatches);

  let match = potentialMatches.find(
    (potentialMatch) => potentialMatch.result !== null
  ); // 매치된것 찾아냄

  if (!match) {
    // 매치 안된 경우 404 대신 resume으로 보낸다.
    match = {
      route: routes[1],
      result: true,
    };
  }

  //뷰 인스턴스를 불러옴
  const view = new match.route.view();
  //뷰 인스턴스의 getHtml 메서드를 사용해서 바꿔 끼워 넣어줌
  document.getElementById(' app').innerHTML = await view.getHtml();
};

export const navigateTo = (url) => {
  history.pushState(null, null, url);
  router();
};
