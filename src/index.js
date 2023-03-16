import App from './app.js';

console.log('call index.js');
try {
  const $root = document.querySelector('#root');
  $root.innerHTML = '';

  new App({
    $target: $root,
  });
} catch (e) {
  alert(`인스턴스 에러발생 : ${e}`);
  console.error(e);
}

export default {};
