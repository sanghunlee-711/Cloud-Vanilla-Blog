const Modal = function ({ isVisible, Component, handleModal }) {
  this.$target = document.querySelector('#modal');
  this.state = isVisible;

  const createWrapper = () => {
    const container = document.createElement('div');
    container.setAttribute('class', 'modal-container');
    const wrapper = document.createElement('div');
    const button = document.createElement('button');
    button.textContent = 'X';
    button.className = 'quit-modal-button';
    wrapper.className = 'modal-wrapper';
    wrapper.appendChild(button);
    container.appendChild(wrapper);
    return { wrapper, button, container };
  };

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    if (this.state) {
      const { wrapper, button, container } = createWrapper();

      this.$target.appendChild(container);
      document.body.style.overflow = 'hidden';
      new Component({ $target: wrapper, handleModal });
    } else {
      this.$target.innerHTML = '';
      document.body.style.overflow = 'unset';
    }
  };

  this.render();

  this.$target.addEventListener('click', (e) => {
    if (!e.target.classList.contains('quit-modal-button')) return;
    handleModal();
  });
};
export default Modal;
