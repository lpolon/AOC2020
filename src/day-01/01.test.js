import { findTwo } from './01';
import input from './input';
const sampleInput = [1721, 979, 366, 299, 675, 1456];

describe('first star', () => {
  test('works with example', () => {
    const result = findTwo({ input: sampleInput, target: 2020 });
    expect(result).toEqual([1721, 299]);
  });

  test('works with input', () => {
    const result = findTwo({ target: 2020, input });
    expect(result).toEqual([788, 1232]);
  });
});
