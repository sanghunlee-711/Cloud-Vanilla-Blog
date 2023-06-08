export class Home {
  constructor(req) {
    this.render();
  }

  render = () => {
    return /* html */ `
    <div>Home 입니다!</div>
    `;
  };
}
