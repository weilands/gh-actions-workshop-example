import * as _exec from '@actions/exec';
import * as semver from 'semver';

import { Version, VersionReader } from './Version';

const exec = async (command: string, args: string[] = []): Promise<string> => {
  let output = '';
  let error = '';

  const options = {
    listeners: {
      stdout: (data: Buffer) => {
        output += data.toString();
      },
      stderr: (data: Buffer) => {
        error += data.toString();
      }
    }
  };

  try {
    await _exec.exec(command, args, options);
  } catch (err) {
    throw new Error(`Command failed: ${command} ${args.join(' ')}\n${error}`);
  }

  return output.trim();
};

export const formatAndSortRawTags = (rawTags: string): string[] => {
  return rawTags
    .split('\n')
    .map((tag) => semver.valid(semver.coerce(tag)))
    .filter((tag): tag is string => tag !== null)
    .sort(semver.compare);
};

export class GitVersionReader implements VersionReader {
  static readonly DEEPEN_STEP_SIZE = '50';

  async getVersion(): Promise<Version> {
    let rawTags = '';
    let currentRoot: string | undefined = '';
    let lastRoot: string | undefined = undefined;

    while (currentRoot !== lastRoot && rawTags === '') {
      await exec('git', ['fetch', '--deepen', GitVersionReader.DEEPEN_STEP_SIZE]);
      rawTags = await exec('git', ['tag', '--no-column', '--merged']);

      lastRoot = currentRoot;
      currentRoot = await exec('git', ['rev-list', '--max-parents=0', 'HEAD']);
    }

    const tags = formatAndSortRawTags(rawTags);
    return tags.length > 0 ? new Version(tags[tags.length - 1]) : new Version('0.0.0');
  }
}
