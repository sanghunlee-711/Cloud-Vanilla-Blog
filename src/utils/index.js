import { GA_ID, PAGE_ADDRESS } from '../constants/config.js';

//path를 찾기 위한 정규표현식이 들어있는 함수
export const pathToRegex = (path) =>
  new RegExp('^' + path.replace(/\//g, '\\/').replace(/:\w+/g, '(.+)') + '$');

//파라미터를 찾아서 사용할 수 있는 형태로 반환하기 위한 함수
export const getParams = (match) => {
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

export const navigateTo = (pathName) => {
  history.pushState(null, pathName, window.location.origin + pathName);
};

export const loadCommentBox = (contentId) => {
  // contentId = contentId.split('-').join('_');
  console.log('@?@#?@#?@#?@#?', PAGE_ADDRESS, contentId);

  /* * * Disqus Reset Function * * */
};

export const resetDisqus = function (
  newIdentifier,
  newUrl,
  newTitle,
  newLanguage
) {
  DISQUS.reset({
    reload: true,
    config: function () {
      this.page.identifier = newIdentifier;
      this.page.url = newUrl;
      this.page.title = newTitle;
      this.language = newLanguage;
    },
  });
};

export const makeGA = () => {
  const ga = document.createElement('script');
  ga.setAttribute('async', '');
  ga.setAttribute('id', 'ga-script');
  ga.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  const script = document.createElement('script');

  script.id = 'ga';
  script.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', '${GA_ID}');
  `;

  if (!document.getElementById('ga-script')) document.body.appendChild(ga);
  if (!document.getElementById('ga')) document.body.appendChild(script);
};

export const getContentId = () => {
  const hashLocation = window.location.hash;

  if (!hashLocation.includes('#contentId=')) return null;

  const [contentId, type] = hashLocation.split('&');
  return { contentId: contentId.split('=')[1], type: type.split('=')[1] };
};

export const setPreview = (html) => {
  const regEx = /(<([^>]+)>)/gi;
  return html.replace(regEx, '').slice(0, 200) + '...';
};
