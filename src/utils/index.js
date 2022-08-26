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
  const dsq = document.querySelector('#dsq'),
    dsqId = document.querySelector('#dsq-count-scr');
  if (dsq || dsqId) return;
  const script = document.createElement('script');
  const dsqcount = document.createElement('script');
  dsqcount.src = '//cloud-vanila-blog.disqus.com/count.js';
  dsqcount.setAttribute('async', '');
  dsqcount.id = 'dsq-count-scr';
  script.id = 'dsq';
  script.innerHTML = `
    /**
     *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
     *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables    */
      /*
      var disqus_config = function () {
      this.page.url = ${PAGE_ADDRESS};  // Replace PAGE_URL with your page's canonical URL variable
      this.page.identifier = ${contentId}; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
      };
      */

        var disqus_config = () =>  {
          this.page.url = "${PAGE_ADDRESS}/#contentId"; 
          this.page.identifier = "${contentId}";
        };


      (function () { // DON'T EDIT BELOW THIS LINE
        var d = document, s = d.createElement('script')
        s.src = 'https://cloud-vanila-blog.disqus.com/embed.js'
        s.setAttribute('data-timestamp', +new Date());
        (d.head || d.body).appendChild(s)
      })();
  `;
  document.body.appendChild(script);
  document.body.appendChild(dsqcount);

  window.addEventListener('hashchange', () => {
    document.body.removeChild(dsq);
    document.body.removeChild(dsqId);
  });
};

export const makeGA = () => {
  const ga = document.createElement('script');
  ga.setAttribute('async', '');
  ga.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  const script = document.createElement('script');

  script.id = 'ga';
  script.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', '${GA_ID}');
  `;

  document.body.appendChild(ga);
  document.body.appendChild(script);
};
