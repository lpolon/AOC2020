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

  // return isTwoSumEqualTarget({ arr: input, ht, target });

  for (const [i, value] of input.entries()) {
    const diff = target - value;
    if (diff in ht && ht[diff] !== i) {
      return [value, diff];
    }
  }
};

// function isTwoSumEqualTarget({
//   target,
//   arr,
//   ht,
// }: {
//   target: number;
//   arr: number[];
//   ht: { [key: number]: number };
// }): [number, number] | void {
//   for (const [i, value] of arr.entries()) {
//     const diff = target - value;

//     const isDiffInHtIndex = diff in ht;

//     const isFoundDiffInIndexNotTheCurrentNumber = ht[diff] !== i;

//     if (isDiffInHtIndex && isFoundDiffInIndexNotTheCurrentNumber) {
//       return [value, diff];
//     }
//   }
// }
