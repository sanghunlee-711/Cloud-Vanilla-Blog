export const makeGA = () => {
  const ga = document.createElement("script");
  ga.setAttribute("async", "");
  ga.setAttribute("id", "ga-script");
  ga.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.GA_ID}`;
  const script = document.createElement("script");

  script.id = "ga";
  script.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', '${process.env.GA_ID}');
  `;

  if (!document.getElementById("ga-script")) document.body.appendChild(ga);
  if (!document.getElementById("ga")) document.body.appendChild(script);
};
