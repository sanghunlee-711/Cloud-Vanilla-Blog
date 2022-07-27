import { navigateTo, router } from './routes.js';

window.addEventListener('popstate', router);

//Vanila js생명주기라고 생각하면 됨 (처음 DOM이 로드되는 시점)
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
