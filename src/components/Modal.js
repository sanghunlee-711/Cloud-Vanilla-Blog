class Modal {
  constructor({ isVisible, Component, handleModal }) {
    this.$target = document.querySelector('#modal');
    this.props = {
      handleModal,
      Component,
      isVisible,
    };
    this.render();
    this.addListeners();
  }

  createWrapper = () => {
    const container = document.createElement('div');
    container.setAttribute('class', 'modal-container');
    const wrapper = document.createElement('div');
    const button = document.createElement('button');
    button.innerHTML = `
    <i class="fa fa-times" aria-hidden="true"></i>
    `;
    button.className = 'quit-modal-button';
    wrapper.className = 'modal-wrapper';
    wrapper.appendChild(button);
    container.appendChild(wrapper);
    return { wrapper, button, container };
  };

  render = () => {
    if (this.props.isVisible) {
      const { wrapper, button, container } = this.createWrapper();

      this.$target.appendChild(container);
      document.body.style.overflow = 'hidden';
      new this.props.Component({
        $target: wrapper,
        handleModal: this.props.handleModal.bind(this),
      });
    } else {
      this.$target.innerHTML = '';
      document.body.style.overflow = 'unset';
    }
  };

  addListeners = () => {
    this.$target.addEventListener('click', (e) => {
      if (
        e.target.classList.contains('quit-modal-button') ||
        e.target.classList.contains('fa-times')
      ) {
        this.props.handleModal(false);
      }
    });
  };
}

// const Modal = function ({ isVisible, Component, handleModal }) {
//   this.$target = document.querySelector('#modal');
//   this.state = isVisible;

//   const createWrapper = () => {
//     const container = document.createElement('div');
//     container.setAttribute('class', 'modal-container');
//     const wrapper = document.createElement('div');
//     const button = document.createElement('button');
//     button.innerHTML = `
//     <i class="fa fa-times" aria-hidden="true"></i>
//     `;
//     button.className = 'quit-modal-button';
//     wrapper.className = 'modal-wrapper';
//     wrapper.appendChild(button);
//     container.appendChild(wrapper);
//     return { wrapper, button, container };
//   };

//   this.setState = (nextState) => {
//     this.state = nextState;
//     this.render();
//   };

//   this.render = () => {
//     if (this.state) {
//       const { wrapper, button, container } = createWrapper();

//       this.$target.appendChild(container);
//       document.body.style.overflow = 'hidden';
//       new Component({ $target: wrapper, handleModal });
//     } else {
//       this.$target.innerHTML = '';
//       document.body.style.overflow = 'unset';
//     }
//   };

//   this.render();

//   this.$target.addEventListener('click', (e) => {
//     if (
//       !e.target.classList.contains('quit-modal-button') ||
//       !e.target.classList.contains('fa-times')
//     )
//       return;
//     handleModal();
//   });
// };
export default Modal;
