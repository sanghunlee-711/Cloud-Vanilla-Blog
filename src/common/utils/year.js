/**
 *
 * @param jobStart Date String
 * @returns Int
 */
export const calculateYears = (jobStart) => {
  const startDate = new Date(jobStart);
  const today = new Date();

  if (today < startDate) {
    throw new Error("초기 날짜가 오늘보다 과거입니다. 입력이 잘못되었습니다.");
  }

  let years = today.getFullYear() - startDate.getFullYear();
  const startMonth = startDate.getMonth();
  const currentMonth = today.getMonth();

  // 아직 시작 월에 도달하지 않은 경우, 1년을 빼야 함
  if (
    currentMonth < startMonth ||
    (currentMonth === startMonth && today.getDate() < startDate.getDate())
  ) {
    years--;
  }

  // 년차 계산이므로 +1
  return years + 1;
};
