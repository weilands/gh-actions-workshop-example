import * as fs from 'fs';

import { Version, VersionFileFinder, VersionReader } from './Version';

export class NpmVersionReader implements VersionReader {
  private filePath: string;

  constructor(filePath: string) {
    this.filePath = filePath;
  }

  async getVersion(): Promise<Version> {
    const packageJson = JSON.parse(fs.readFileSync(this.filePath, 'utf8'));

    const version = packageJson.version;

    if (version === undefined || version === '') {
      throw new Error(`Npm package file does not contain a version. File: ${this.filePath}`);
    }

    return new Version(version);
  }
}

export class NpmVersionFileFinder implements VersionFileFinder {
  static readonly FILENAME = 'package.json';

  getFilePaths(): string | undefined {
    const filePath = `./${NpmVersionFileFinder.FILENAME}`;
    if (fs.existsSync(filePath)) {
      return filePath;
    } else {
      return undefined;
    }
  }
}
