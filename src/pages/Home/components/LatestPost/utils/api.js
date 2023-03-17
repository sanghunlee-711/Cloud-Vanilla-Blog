export const getLatestPostData = async ({ onSuccess, onError }) => {
  try {
    const res = await fetch(`${process.env.API_ADDRESS}/post-latest`);
    const resJson = await res.json();

    const data = await resJson.data;
    onSuccess(data);
  } catch (e) {
    onError(e);
  }
};
