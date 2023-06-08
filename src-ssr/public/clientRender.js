import { store } from '/src-ssr/store.js';

const addTodoEventListeners = ($todoContainer, triggerRender) => {
  $todoContainer.querySelectorAll('li').forEach(($list) => {
    $list.addEventListener('click', () => {
      const id = $list?.dataset?.id;

      store.toggle(
        store.state.todoItems.findIndex((item) => item.id === Number(id))
      );

      triggerRender();
    });
  });
};

export const render = () => {
  const $app = document.querySelector('#app');

  addTodoEventListeners($app, render);
};

render();
