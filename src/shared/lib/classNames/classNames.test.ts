import { classNames } from './classNames';

describe('classNames', () => {
  test('with only first param', () => {
    const expected = 'testClass';

    expect(classNames('testClass')).toBe(expected);
  });

  test('with cls and additinal', () => {
    const expected = 'testClass additinal';

    expect(classNames('testClass', {}, ['additinal'])).toBe(expected);
  });

  test('with all params', () => {
    const expected = 'testClass additinal mod1';

    expect(classNames('testClass', { mod1: true, mod2: false, }, ['additinal'])).toBe(expected);
  });
});
