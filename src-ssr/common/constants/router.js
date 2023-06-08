import { Home } from '../../pages/Home.js';
import Posts from '../../pages/Posts/Posts.js';
import { TodoList } from '../../pages/TodoList/TodoList.js';

export const ROUTE_MAP = new Map([
  ['/', Home],
  ['/todo-list', TodoList],
  ['/post-list', Posts],
  ['/unknown', null],
]);
