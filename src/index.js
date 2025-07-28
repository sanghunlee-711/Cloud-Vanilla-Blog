import App from "./app.js";

import { makeGA } from "./common/utils/ga.js";

try {
  const $root = document.querySelector("#root");
  $root.innerHTML = "";

  new App({
    $target: $root,
  });

  if (process.env.NODE_ENV === "production") makeGA();
} catch (e) {
  alert(`인스턴스 에러발생 : ${e}`);
  console.error(e);
}

export default {
  App,
};
