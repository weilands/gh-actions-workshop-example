import { Version, getNextSemVer } from '../../src/version/Version';

describe('getNextSemVer', () => {
  [
    {
      currentVersion: new Version('1.0.0'),
      supposedMajorVersion: new Version('1.0.0'),
      isPatchBranch: false,
      expectation: '1.1.0',
      description:
        'bumps minor version, when the support major version is not greater than the current version'
    },
    {
      currentVersion: new Version('1.0.0'),
      supposedMajorVersion: new Version('2.1.0'),
      isPatchBranch: false,
      expectation: '2.1.0',
      description: 'takes supposed major version, if it is greater than the current version'
    },
    {
      currentVersion: new Version('1.0.0'),
      supposedMajorVersion: new Version('2.1.0'),
      isPatchBranch: true,
      expectation: '2.1.0',
      description:
        'takes supposed major version, if it is greater than the current version, even for a patch branch'
    },
    {
      currentVersion: new Version('1.3.0'),
      supposedMajorVersion: new Version('1.0.0'),
      isPatchBranch: true,
      expectation: '1.3.1',
      description: 'bumps the patch version on a patch branch'
    }
  ].forEach(({ currentVersion, supposedMajorVersion, isPatchBranch, expectation, description }) => {
    it(description, () => {
      expect(getNextSemVer(currentVersion, supposedMajorVersion, isPatchBranch)).toBe(expectation);
    });
  });
});
