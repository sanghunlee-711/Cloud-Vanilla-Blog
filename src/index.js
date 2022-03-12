import Main from './pages/Main.js';
import Portfolio from './pages/Portfolio.js';
import Posts from './pages/posts/Posts.js';
import PostView from './pages/posts/PostView.js';
import Resume from './pages/Resume.js';

const pathToRegex = (path) =>
  new RegExp('^' + path.replace(/\//g, '\\/').replace(/:\w+/g, '(.+)') + '$');

const navigateTo = (url) => {
  history.pushState(null, null, url);
  router();
};

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

const router = async () => {
  const routes = [
    { path: '/', view: Main },
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

window.addEventListener('popstate', router);

//Vanila js생명주기라고 생각하면 됨
document.addEventListener('DOMContentLoaded', () => {
  //초반에 nav 태그에 존재하는 a 태그의 이벤트를 변경해줌(디폴트는 새로고침 시키므로)
  document.body.addEventListener('click', (e) => {
    if (e.target.matches('[data-link]')) {
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });

  router();
});
