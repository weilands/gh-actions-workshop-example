export const codeString = `
# .github/actions/install/action.yaml
name: 'Install prerequisites and dependencies'
description: 'Sets up all requirements.'

runs:
  using: composite
  steps:
    - name: Set up node 20
      uses: actions/setup-node@v4
      with:
        node-version: 20

    - name: Install dependencies
      shell: bash
      run: npm ci

# Reference in existing workflow
- name: Install prerequisites and dependencies
  uses: ./.github/actions/install
`.trim();
