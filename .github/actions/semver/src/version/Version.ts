import * as semver from 'semver';

export interface VersionReader {
  getVersion(): Promise<Version>;
}

export interface VersionFileFinder {
  getFilePaths(): string | undefined;
}

export class Version {
  private version: string;

  constructor(version: string) {
    this.version = version;
  }

  getVersion(): string {
    return semver.valid(semver.coerce(this.version)) || '0.0.0';
  }

  getMajorVersion(): number {
    return semver.parse(this.version)?.major || 0;
  }
}

export const getNextSemVer = (
  currentVersion: Version,
  supposedMajorVersion: Version,
  isPatchBranch: boolean
): string => {
  if (supposedMajorVersion.getMajorVersion() > currentVersion.getMajorVersion()) {
    return supposedMajorVersion.getVersion();
  } else if (isPatchBranch) {
    return semver.inc(currentVersion.getVersion(), 'patch') || '0.0.1';
  } else {
    return semver.inc(currentVersion.getVersion(), 'minor') || '0.1.0';
  }
};
