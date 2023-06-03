import express from 'express';
import { TodoList } from './src-ssr/component.js';
import { render } from './src-ssr/serverRender.js';

const app = express();

//static file import등 처리를 위함
app.use('/src-ssr', express.static('./src-ssr'));

app.get('/', (req, res) => {
  console.log(req);
  res.send(render(TodoList())); // HTML문자열로 변경하여 서버 -> 브라우저로 전송
});

app.listen(3000, () => {
  console.log('listen to http://localhost:3000');
});
