import App from './App.js';

try {
  new App({
    $target: document.querySelector('#root'),
  });
} catch (e) {
  alert(`인스턴스 에러발생 : ${e}`);
  console.error(e);
}

export default {};
