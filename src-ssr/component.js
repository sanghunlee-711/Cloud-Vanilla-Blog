// Component는 DOM을 사용할수 없는상태(SSR render를 위한 render메서드를 통해 렌더가 되기 때문이다 :))
import { store } from './store.js';

export const TodoItem = ({ id, content, activation }) => {
  return /* html */ `
    <li data-id=${id}>
      <input type="checkbox" ${activation ? 'checked' : ''}>
      <span class=${activation ? 'checked' : ''}>
        ${content}
      </span>
    </li>
  `;
};

export const TodoList = () => {
  return /* html */ `
    <ul>
      ${store.state.todoItems.map(TodoItem).join('')}
    </ul>
  `;
};

export const NavigationBar = () => {
  return /* html */ `
    <nav>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/todo-list">Todo List</a>
        </li>
      </ul>
    </nav>
  `;
};

const Router = (path) => {
  if (path === '/todo-list') return TodoList();
  return '404 NotFound';
};

export const App = ({ req }) => {
  const path = req.path;
  return /* html */ `
    <header>
      <a href="/">SSR Blog!!</a>
      ${NavigationBar()}
    </header>
    ${Router(path)}
    <footer>
      Test SSR Blog with SSR Sample by 황준일
    </footer>
  `;
};
