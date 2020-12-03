export const findTwo = ({
  input,
  target,
}: {
  input: number[];
  target: number;
}): [number, number] | void => {
  const ht = input.reduce((acc: { [key: number]: number }, value, i) => {
    acc[value] = i;
    return acc;
  }, {});

  for (const [i, value] of input.entries()) {
    const diff = target - value;
    if (diff in ht && ht[diff] !== i) {
      return [value, diff];
    }
  }
};
// https://paulrohan.medium.com/solving-the-classic-two-sum-and-three-sum-problem-in-javascript-7d5d1d47db03
export const findThree = ({
  input,
  target,
}: {
  input: number[];
  target: number;
}): any /*[number, number, number] | void */ => {
  const ht = input.reduce(
    (acc: { [key: number]: { value: number; diff: number } }, value, i) => {
      acc[i] = { value, diff: target - value };
      return acc;
    },
    {},
  );
  return ht;
};

// uma segunda ht com diff: index

// um terceiro pass;
/*

*/
