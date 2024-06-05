import * as github from '@actions/github';
import { Context } from '@actions/github/lib/context';

export const getBranchOfCurrentWorkflow = (gitHubContext: Context): string => {
  return gitHubContext.ref.replace('refs/heads/', '');
};

const getDefaultBranch = async (gitHubContext: Context, gitHubToken: string): Promise<string> => {
  const octokit = github.getOctokit(gitHubToken);
  const { data: repoData } = await octokit.rest.repos.get(gitHubContext.repo);
  return repoData.default_branch;
};

export const isDefaultBranch = async (
  branch: string,
  gitHubContext: Context,
  gitHubToken: string
): Promise<boolean> => {
  const defaultBranch = await getDefaultBranch(gitHubContext, gitHubToken);

  return branch === defaultBranch;
};

export const isHotfixBranch = (branch: string): boolean => {
  return branch.startsWith('hotfix/');
};
