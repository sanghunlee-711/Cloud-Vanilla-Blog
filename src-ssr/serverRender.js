export const render = ($rootComponent) => {
  return /* html */ `
    <!doctype html>
    <html lang="ko">
      <head>
        <meta charset="UTF-8">
        <title>Cloud Sanghun Server Side render Blog</title>
        <link rel="preload stylesheet" href="../src-ssr/ssr.css" as="style"></link>
      </head>
      <body>
        <div id="app">${$rootComponent}</div>

        <!-- 브라우저에서의 CSR을 위한 Script 태그-->
        <script src="../src-ssr/main-csr.js
        " type="module"></script>
      </body>
    </html>
  `;
};
