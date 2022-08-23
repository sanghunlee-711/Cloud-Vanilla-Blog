const Modal = function ({ isVisible, Component, handleModal }) {
  this.$target = document.querySelector('#modal');
  this.state = isVisible;
  const container = document.createElement('div');
  container.setAttribute('class', 'modal-container');

  const wrapper = document.createElement('div');
  const button = document.createElement('button');
  button.textContent = 'X';
  button.className = 'quit-modal-button';
  wrapper.className = 'modal-wrapper';
  wrapper.appendChild(button);
  container.appendChild(wrapper);
  this.$target.appendChild(container);

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    console.log('in modal', this.state);
    this.$target.appendChild(container);
    this.state
      ? new Component({ $target: wrapper })
      : (this.$target.innerHTML = '');
  };

  this.render();

  wrapper.addEventListener('click', (e) => {
    if (!e.target.classList.contains('quit-modal-button')) return;
    handleModal();
  });
};
export default Modal;
