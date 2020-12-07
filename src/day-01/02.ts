// https://paulrohan.medium.com/solving-the-classic-two-sum-and-three-sum-problem-in-javascript-7d5d1d47db03
export const findThree = ({
  input,
  target,
}: {
  input: number[];
  target: number;
}): any /*[number, number, number] | void */ => {
  /*
  para 2 números:
  1a iteração: criar uma Hashtable onde a chave é o número e o valor é o índice.
  2a iteração: calcular o diff.
    - procurar o diff no índice
    - ver se o diff é diferente do próprio número

  para 3 números:
  1a iteração:
    - 
  */
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
