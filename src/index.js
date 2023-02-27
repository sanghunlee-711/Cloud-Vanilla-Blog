import App from './app.js';

try {
  const $root = document.querySelectorAll('#root');
  $root.innerHTML = '';

  new App({
    $target: $root,
  });
} catch (e) {
  alert(`인스턴스 에러발생 : ${e}`);
  console.error(e);
}

export default {};
