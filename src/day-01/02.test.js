import input from './input';
const sampleInput = [1721, 979, 366, 299, 675, 1456];
import { threeSum } from './leetcode-3sum';

test('case 1', () => {
  const result = threeSum({ nums: [-1, 0, 1, 2, -1, -4], target: 0 });
  expect(result).toEqual([
    [-1, -1, 2],
    [-1, 0, 1],
  ]);
});

test('case 2', () => {
  const result = threeSum({ nums: [0, 0, 0], target: 0 });
  console.log(result);
  expect(result).toEqual([[0, 0, 0]]);
});

test('case shitton of zeroes - case 3', () => {
  const result = threeSum({
    nums: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    target: 0,
  });
  expect(result).toEqual([[0, 0, 0]]);
});

test('case 4', () => {
  const result = threeSum({ nums: [1, 1, -2], target: 0 });
  expect(result).toEqual([[-2, 1, 1]]);
});

test('case 5', () => {
  const result = threeSum({ nums: [-1, 0, 1, 0], target: 0 });
  expect(result).toEqual([[-1, 0, 1]]);
});

test('case 6', () => {
  const result = threeSum({ nums: [3, 0, -2, -1, 1, 2], target: 0 });
  console.log(result);
  expect(result).toEqual([
    [-2, -1, 3],
    [-2, 0, 2], // falta esse
    [-1, 0, 1],
  ]);
  // [3, 0, -2, -1, 1, 2] => -2, -1, 0, 1, 2, 3
});

// test('AOC', () => {
//   const result = threeSum({ nums: input, target: 2020 });
// });
