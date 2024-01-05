export const getLatestPostData = async ({ onSuccess, onError }) => {
  try {
    const res = await fetch(`/api/post-list?type=all&countPerPage=3&pageNo=1`);
    const resJson = await res.json();

    const data = await resJson.data;
    onSuccess(data);
  } catch (e) {
    onError(e);
  }
};
