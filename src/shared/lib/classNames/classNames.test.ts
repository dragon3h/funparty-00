import { classNames } from './classNames';

describe('classNames', () => {
  test('test', () => {
    expect(classNames('testClass')).toBe('testClass');
  });
});
