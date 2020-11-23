export const years = () => {
  const yearNum = [];
  for (let i = 1960; i <= 2020; i++) {
    yearNum.push(i);
  }
  return yearNum.reverse();
};
