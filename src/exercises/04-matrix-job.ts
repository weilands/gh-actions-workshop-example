export const codeString_a = `
  smoke-test:
    needs: cd-pipeline
    runs-on: ubuntu-latest
    timeout-minutes: 3
    <TODO: Execute the following steps with both firefox and chromium; use a matrix strategy>
    steps:
      - name: Check out repository
        uses: actions/checkout@v4

      - name: Set up node 20
        uses: actions/setup-node@v4
        with:
          node-version: 20
  
      - name: Install dependencies
        run: npm ci

      - name: Install Playwright Browsers
        run: npx playwright install <TODO: Install one of the specific browsers>

      - name: Run Playwright tests
        run: npx playwright test --project <TODO: Test with one of the specific browsers>
        env:
          PLAYWRIGHT_BASE_URL: <TODO: get the GitHub Pages url from the Deployment step of the previous job>

      - uses: actions/upload-artifact@v4
        if: always()
        with:
          name: playwright-report-<TODO: Upload the artefacts for the specific browser>
          path: playwright-report/
          retention-days: 1
`.trim();

export const codeString_b = `
name: ci-cd-workflow
on: [workflow_dispatch, push]
jobs:
  ci-pipeline:
    runs-on: ubuntu-latest
    steps:
      - name: Check out repository
        uses: actions/checkout@v4

      - name: Set up node 20
        uses: actions/setup-node@v4
        with:
          node-version: 20
  
      - name: Install dependencies
        run: npm ci

      - name: Check formatting
        run: npm run prettier

      - name: Check types
        run: npm run typecheck

      - name: Check linting
        run: npm run lint

      - name: Execute tests
        run: npm run test

      - name: Execute build
        run: npm run build

      - name: Upload dist as artefact
        uses: actions/upload-pages-artifact@v3
        with:
          path: 'dist/'

  cd-pipeline:
    needs: [ci-pipeline]
    runs-on: ubuntu-latest
    permissions:
      pages: write
      id-token: write
    environment:
      name: github-pages
      url: \${{ steps.deployment.outputs.page_url }}
    outputs:
      pages-url: \${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy pages
        id: deployment
        uses: actions/deploy-pages@v4

      - name: Output env url
        run: echo \${{ env.url }}

  smoke-test:
    needs: cd-pipeline
    runs-on: ubuntu-latest
    timeout-minutes: 3
    strategy:
      matrix:
        browser: [firefox, chromium]
    steps:
      - name: Check out repository
        uses: actions/checkout@v4

      - name: Set up node 20
        uses: actions/setup-node@v4
        with:
          node-version: 20
  
      - name: Install dependencies
        run: npm ci

      - name: Install Playwright Browsers
        run: npx playwright install \${{ matrix.browser }}

      - name: Run Playwright tests
        run: npx playwright test --project \${{ matrix.browser }}
        env:
          PLAYWRIGHT_BASE_URL: \${{ needs.cd-pipeline.outputs.pages-url }}

      - uses: actions/upload-artifact@v4
        if: always()
        with:
          name: playwright-report-\${{ matrix.browser }}
          path: playwright-report/
          retention-days: 1

`.trim();
