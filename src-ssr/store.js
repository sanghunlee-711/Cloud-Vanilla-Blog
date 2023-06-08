export const store = {
  //서버에서 This는 Window가 아닌 {}로 module.exports를 가리키게 된다고 함
  //따라서 런타임시점에서 제대로 가져오기 위해 globalThis를 사용한다
  state: globalThis.state || {
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

  hydration(state) {
    this.state = state;
  },

  setState(newState) {
    this.state = { ...this.state, newState };
    //아래 작업은 굳이 매번 setState에서 안해줘도 될 것  같음.
    //onbeforeUnload, popState같은 이벤트 리스닝해서 그떄 서버로 보내고 동기화하면 될 것 같음.
    fetch('/api/state', {
      method: 'put',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(this.state),
    });
  },

  toggle(index) {
    const todoItems = [...this.state.todoItems];
    todoItems[index].activation = !todoItems[index].activation;
    this.setState({ todoItems });
  },
};
