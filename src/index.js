import App from './app.js';

try {
  const $root = document.querySelector('#root');
  $root.innerHTML = '';

  new App({
    $target: $root,
  });
  // makeGA();
} catch (e) {
  alert(`인스턴스 에러발생 : ${e}`);
  console.error(e);
}

export default {};
