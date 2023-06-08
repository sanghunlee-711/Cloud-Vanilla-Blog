class Posts {
  constructor(req) {
    this.req = req;

    this.render();
  }

  render = () => {
    const type = this.req.query.type ? this.req.query.type : 'post-dev';

    return /* html */ `
      <ul>
        <li>
        하하호호 ${this.req.test} 
        ${type}
        </li>
      </ul>
    `;
  };
}

export default Posts;
