// Component는 DOM을 사용할수 없는상태(SSR render를 위한 render메서드를 통해 렌더가 되기 때문이다 :))
import { store } from '../../store.js';
import { TodoItem } from './components/csr/TodoItem.js';

export class TodoList {
  constructor(req) {
    this.render();
  }

  render = () => {
    return /* html */ `
    <ul>
      ${store.state.todoItems.map(TodoItem).join('')}
    </ul>
  `;
  };
}
