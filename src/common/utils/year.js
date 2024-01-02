export const caculateYears = (jobStart) => {
  const startDate = new Date(jobStart);
  const today = new Date();

  const interval = today - startDate;

  if (interval < 0) {
    throw new Error("초기 날짜가 오늘보다 과거입니다. 입력이 잘못 되었습니다.");
  }

  const day = 1000 * 60 * 60 * 24;
  const month = day * 30;
  const year = month * 12;

  //년차 계산용이므로 + 1
  return parseInt(interval / year) + 1;
};
