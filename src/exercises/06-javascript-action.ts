export const codeString = `
//.github/actions/semver/src/main.ts
const githubToken = core.getInput('token');
const devVersionSuffix = core.getInput('dev-version-suffix');

// ...

core.setOutput('semver', semver);

/*
# Reference in existing workflow
permissions:
  contents: write

# ...

- name: Get next Semantic Version
  id: next-semver
  uses: ./.github/actions/semver

- name: Tag
  if: github.ref == 'refs/heads/main'
  run: |
    git tag \${{ steps.next-semver.outputs.semver }}
    git push origin \${{ steps.next-semver.outputs.semver }}
*/
`.trim();
