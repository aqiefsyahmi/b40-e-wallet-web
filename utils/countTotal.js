export const countTotal = arr => {
  let temp = 0;
  console.log(arr);
  arr?.forEach(({ amount }) => {
    temp += parseInt(amount);
  });

  return temp;
};
