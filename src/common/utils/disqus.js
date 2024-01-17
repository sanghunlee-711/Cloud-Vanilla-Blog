// Do Not use
export const resetDisqus = function (title) {
  if (DISQUS) {
    DISQUS.reset({
      reload: true,
      config: function () {
        this.page.identifier = title;
        this.page.url = `https://blog.cloud-sanghun.com/${title}`;
        this.page.title = title;
        this.language = 'ko';
      },
    });
  }
};

export const makeDisqus = function () {
  // return null;
  var disqus_shortname = 'cloud-vanila-blog'; // required: replace example with your forum shortname

  /* * * DON'T EDIT BELOW THIS LINE * * */
  (function () {
    var dsq = document.createElement('script');
    dsq.type = 'text/javascript';
    dsq.async = true;
    dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';

    (
      document.getElementsByTagName('head')[0] ||
      document.getElementsByTagName('body')[0]
    ).appendChild(dsq);
  })();
};
