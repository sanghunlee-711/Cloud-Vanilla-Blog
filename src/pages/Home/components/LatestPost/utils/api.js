export const getLatestPostData = async ({ onSuccess, onError }) => {
  try {
    const res = await fetch(`/test-post-latest`);
    const resJson = await res.json();

    const data = await resJson.data;
    onSuccess(data);
  } catch (e) {
    onError(e);
  }
};
