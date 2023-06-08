import express from 'express';
import { App } from './src-ssr/App.js';
import { serverRender } from './src-ssr/common/utils/serverRender.js';
import { store } from './src-ssr/store.js';

const app = express();

app.use(express.json()); // Server, Client 상태 동기화를 위함
app.use('/public', express.static('./src-ssr/public')); //static file import등 처리를 위함

app.put('/api/state', (req, res) => {
  store.hydration(req.body);
  res.status(204).send(store.state);
});

app.get('/*', (req, res) => {
  res.send(serverRender(App({ req }), store.state)); // HTML문자열로 변경하여 + 서버의 State를 서버에서 브라우저로 전송
});

app.listen(3000, () => {
  console.log('listen to http://localhost:3000');
});
