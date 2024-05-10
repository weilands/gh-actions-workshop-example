import { expect, test } from 'vitest';
import { increment } from './increment';

test('increment(0) = 1', () => {
  expect(increment(0)).toBe(1);
});
