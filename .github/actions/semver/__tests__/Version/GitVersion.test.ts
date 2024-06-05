import { formatAndSortRawTags } from '../../src/version/GitVersion';

describe('formatAndSortRawTags', () => {
  it('returns a list of nicely formatted and sorted tags', () => {
    expect(
      formatAndSortRawTags(`
      v2
      28
      1.1.1
      v7
      1.0.0.5.1
    `)
    ).toEqual(['1.0.0', '1.1.1', '2.0.0', '7.0.0', '28.0.0']);
  });

  it('removes tags which do not have semantic versioning', () => {
    expect(
      formatAndSortRawTags(`
      v2
      abc
    `)
    ).toEqual(['2.0.0']);
  });
});
