export const setPreview = (html) => {
  const regEx = /(<([^>]+)>)/gi;
  return html.replace(regEx, '').slice(0, 200) + '...';
};
