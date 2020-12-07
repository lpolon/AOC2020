// https://leetcode.com/problems/3sum/
// TODO: melhorar: https://leetcode.com/problems/4sum/discuss/773256/nsum-general-solution-javascript-detailed-explanation-96ms
/*
- sort min -> max
- first pass:
da left --> right
fixar 2 ponteiros.
procurar o terceiro por binary search
1 iteração:
O(n) * Olog(n)
*/

// A + B + C = 0 ou C = -A - B + 0
const getDiffToTarget = (target: number, nums: number[]): number =>
  nums.reduce((diff, n) => diff - n, target);

export function threeSum({
  nums,
  target,
}: {
  nums: number[];
  target: number;
}): number[][] {
  if (nums.length === 0) return [];
  if (nums.length < 3) return [];

  nums.sort((a, b) => a - b);

  // TODO: trocar set por uma hashtable com [key: número]: id
  const tripletsSet: Set<string> = new Set();

  for (const [i, value] of nums.entries()) {
    for (let j = i + 1; j < nums.length; j += 1) {
      const diff = getDiffToTarget(target, [value, nums[j]]);
      const foundValue = binarySearch({
        numsArr: nums,
        target: diff,
        skipIndex: [i, j],
      });
      if (typeof foundValue === 'undefined') continue;
      else {
        const triplet = [value, nums[j], foundValue];
        // TODO: tirar esse sort lixo e achar uma forma de conferir se não estou adicionando o mesmo conjunto.
        triplet.sort((a, b) => a - b);
        tripletsSet.add(JSON.stringify({ ...triplet }));
      }
    }
  }
  const result: number[][] = [];
  for (const [stringTriplet] of tripletsSet.entries()) {
    const triplet: number[] = Array.from(
      Object.values(JSON.parse(stringTriplet)),
    );
    result.push(triplet);
  }
  return result;
}

function binarySearch({
  numsArr,
  target,
  skipIndex,
}: {
  numsArr: number[];
  target: number;
  skipIndex: number[];
}): number | undefined {
  let low = 0;
  let high = numsArr.length - 1;
  let mid;
  let midValue;
  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    midValue = numsArr[mid];
    if (midValue === target && !skipIndex.includes(mid)) return midValue;
    if (midValue < target) low = mid + 1;
    else high = mid - 1;
  }
  return undefined;
}
