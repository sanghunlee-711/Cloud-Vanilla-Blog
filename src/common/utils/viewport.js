export const setVhVWForIOS = () => {
  const setVhVW = () => {
    document.documentElement.style.setProperty(
      "--vh",
      `${window.innerHeight}px`
    );

    document.documentElement.style.setProperty(
      "--vw",
      `${window.innerWidth}px`
    );
  };

  window.addEventListener("resize", setVhVW);
  setVhVW();
};
