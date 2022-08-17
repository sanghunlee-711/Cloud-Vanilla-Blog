import App from './app.js';
import { locationHandler } from './routes.js';
const app = new App({ $target: document.querySelector('#root') });

locationHandler();
window.addEventListener('hashchange', locationHandler);
