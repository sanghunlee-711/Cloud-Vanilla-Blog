export const makeDisqus = function () {
  var disqus_shortname = "cloud-vanila-blog"; // required: replace example with your forum shortname

  /* * * DON'T EDIT BELOW THIS LINE * * */
  (function () {
    var dsq = document.createElement("script");
    dsq.type = "text/javascript";
    dsq.async = true;
    dsq.src = "//" + disqus_shortname + ".disqus.com/embed.js";

    (
      document.getElementsByTagName("head")[0] ||
      document.getElementsByTagName("body")[0]
    ).appendChild(dsq);
  })();
};
