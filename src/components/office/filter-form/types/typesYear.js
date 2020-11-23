export const years = (on, of) => {
  const yearNum = [];
  const onYear = Boolean(on) ? on : 1960;
  const ofYear = Boolean(of) ? of : 2020;

  for (let i = onYear; i <= ofYear; i++) {
    yearNum.push(i);
  }

  return yearNum.reverse();
};
