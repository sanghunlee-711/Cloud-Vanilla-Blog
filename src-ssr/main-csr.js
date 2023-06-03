import { TodoList } from './component.js';
import { store } from './store.js';

export const render = () => {
  const $app = document.querySelector('#app');
  $app.innerHTML = TodoList();

  $app.querySelectorAll('li').forEach(($list) => {
    $list.addEventListener('click', () => {
      const id = $list?.dataset?.id;
      store.toggle(
        store.state.todoItems.findIndex((item) => item.id === Number(id))
      );
      render();
    });
  });
};

render();
