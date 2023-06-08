import { Home } from '../../pages/Home.js';
import { TodoList } from '../../pages/TodoList/TodoList.js';

export const ROUTE_MAP = new Map([
  ['/', Home],
  ['/todo-list', TodoList],
  ['/unknown', null],
]);
