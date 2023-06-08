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
