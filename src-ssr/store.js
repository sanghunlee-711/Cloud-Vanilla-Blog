export const store = {
  state: {
    todoItems: [
      {
        id: 1,
        content: 'CSR',
        activation: true,
      },
      {
        id: 2,
        content: 'SSR',
        activation: false,
      },
      {
        id: 3,
        content: 'Hydration',
        activation: false,
      },
    ],
  },
  setState(newState) {
    this.state = { ...this.state, newState };
  },
  toggle(index) {
    const todoItems = [...this.state.todoItems];
    todoItems[index].activation = !todoItems[index].activation;
    this.setState({ todoItems });
  },
};
