export default function Pagination({ target, initialState, onNext, onPrev }) {
  this.target = target;
  this.state = initialState;
  this.totalPagesArr;

  const pageViewCount = 10;
  this.pages = {
    totalPages: Math.ceil(this.state.totalItemCount / this.pagePerItemCount), //총 페이지 수 = 전체아이템개수 / 한페이지당 아이템 개수
    pageGroup: Math.ceil(this.state.currentPage / pageViewCount), // 화면에 보여질 페이지 그룹 ex) 1그룹 : 1.-5, 2그룹: 6-10 ... = 올림(현재페이지/ 보여줄 페이지그룹당 페이지 개수)
    last: Math.ceil(this.state.currentPage / pageViewCount) * 10,
    start:
      Math.ceil(this.state.currentPage / pageViewCount) * 10 -
        (pageViewCount - 1) <=
      0
        ? 1
        : Math.ceil(this.state.currentPage / pageViewCount) * 10 - (10 - 1),
  };

  this.setState = (nextState) => {
    console.log('set state in comp', { nextState });
    this.state = nextState;
    this.render();
  };

  const wrapper = document.createElement('div');
  wrapper.setAttribute('class', 'pagination-container');
  wrapper.innerHTML = `
  <button id="decrease">&larr;</button>
    <div id="page-wrapper">
    </div>
  <button id="increase">&rarr;</button>`;

  this.target.appendChild(wrapper);

  this.render = () => {
    document.querySelector('#page-wrapper').innerHTML = `
        ${Array.from(
          { length: this.pages.last - this.pages.start },
          (_, i) => i + 1
        )
          .map(
            (el) => `
          <span class="${
            el === this.state.currentPage ? 'current-page' : ''
          }">${el}</span>
        `
          )
          .join(' ')}
    `;
  };

  document.querySelector('#decrease').addEventListener('click', (e) => {
    onPrev(e);
  });

  document.querySelector('#increase').addEventListener('click', (e) => {
    onNext(e);
  });

  this.render();
}
