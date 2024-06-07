import gitHubActionsLogo from '/github-actions.svg';
import './App.css';
import Concordion from './Concordion';
import { CodeBlock } from './CodeBlock';
import { codeString as exercise01CodeString } from './exercises/01-basic-workflow';
import { codeString as exercise02CodeString } from './exercises/02-basic-ci-pipeline';
import { codeString as exercise03CodeString } from './exercises/03-ci-cd-pipeline';
import {
  codeString_a as exercise04CodeString_a,
  codeString_b as exercise04CodeString_b
} from './exercises/04-matrix-job';
import { codeString as exercise05CodeString } from './exercises/05-composite-action';
import { codeString as exercise06CodeString } from './exercises/06-javascript-action';

function App() {
  return (
    <>
      <h1>
        <a href="https://github.com/features/actions" target="_blank">
          <img src={gitHubActionsLogo} className="logo" alt="GitHub Actions logo" />
        </a>
        GitHub Actions @ TNG – Workshop
      </h1>

      <div className="content">
        <Concordion title="Exercise 1: Basic Workflows">
          Create your first GitHub Actions Workflow:
          <ul>
            <li>
              In your fork, create the file <i>.github/workflows/hello.yaml</i> with this content (
              <a target="_blank" href="https://docs.github.com/en/actions/quickstart">
                Source
              </a>
              ):
              <CodeBlock language="yaml" value={exercise01CodeString} />
            </li>
            <li>
              Explore the GitHub Actions Tab in `./actions`.
              <ul>
                <li>Trigger a workflow</li>
                <li>Read the logs</li>
              </ul>
            </li>
            <li>Disable the workflow in the end</li>
          </ul>
        </Concordion>

        <Concordion title="Exercise 2: Basic CI Pipeline">
          Follow the docs on "
          <a
            href="https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions"
            target="_blank"
          >
            Workflow syntax for GitHub Actions
          </a>
          " and create a workflow which:
          <ul>
            <li>Is named ci-workflow</li>
            <li>
              Is triggered whenever
              <ul>
                <li>A push is performed</li>
                <li>It is manually triggered</li>
                <li>
                  Docs:{' '}
                  <a
                    href="https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows"
                    target="_blank"
                  >
                    Workflow Triggers
                  </a>
                </li>
              </ul>
            </li>
            <li>
              Contains a job called ci-pipeline
              <ul>
                <li>
                  Docs:{' '}
                  <a
                    href="https://docs.github.com/en/actions/using-jobs/using-jobs-in-a-workflow"
                    target="_blank"
                  >
                    Using jobs in a workflow
                  </a>
                </li>
              </ul>
            </li>
            <li>
              Runs on a GitHub hosted ubuntu runner
              <ul>
                <li>
                  Docs:{' '}
                  <a
                    href="https://docs.github.com/en/actions/using-github-hosted-runners/about-github-hosted-runners/about-github-hosted-runners"
                    target="_blank"
                  >
                    GitHub Runners
                  </a>
                </li>
              </ul>
            </li>
            <li>
              Runs the following steps:
              <ul>
                <li>Check out the source code</li>
                <li>Set up NodeJS 20</li>
                <li>
                  Runs the following npm scripts as commands in the shell:
                  <CodeBlock
                    language="bash"
                    value="npm ci
npm run prettier
npm run typecheck
npm run test
npm run build"
                  />
                </li>
                <li>
                  <a href="https://github.com/actions" target="_blank">
                    Actions provided by GitHub
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <Concordion title="Solution Exercise 2">
            <CodeBlock language="yaml" value={exercise02CodeString} />
            <ul>
              <li>
                Docs:{' '}
                <a
                  target="_blank"
                  href="https://docs.github.com/en/actions/using-github-hosted-runners/about-github-hosted-runners/about-github-hosted-runners#standard-github-hosted-runners-for-public-repositories"
                >
                  Standard GitHub-hosted runners for Public repositories
                </a>
              </li>
            </ul>
          </Concordion>
        </Concordion>

        <Concordion title="Exercise 3: CI/CD Pipeline">
          We did just build our application. Let's deploy it to GitHub Pages now!
          <br />
          <br />
          Extend your CI-Job from the previous exercise with a CD-Job.
          <ul>
            <li>
              Activate GitHub Pages in your repository:{' '}
              <i>Settings &#x3e; Pages &#x3e; Source: GitHub Actions</i>
            </li>
            <li>
              Extend the existing ci job and upload the build artifact using the{' '}
              <a target="_blank" href="https://github.com/actions/upload-pages-artifact">
                <i>actions/upload-pages-artifact@v3</i>
              </a>{' '}
              with the parameter <i>path: 'dist/'</i>
            </li>
            <li>
              Create a second job to deploy this artifact
              <ul>
                <li>
                  Call it <i>cd-pipeline</i>
                </li>
                <li>
                  Create a dependency to the <i>ci-pipeline</i> job
                </li>
                <li>
                  Provide the github.token with the additional permissions: <i>pages: write</i> next
                  to <i>id-token</i>
                  <ul>
                    <li>
                      Docs:{' '}
                      <a
                        href="https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#defining-access-for-the-github_token-scopes"
                        target="_blank"
                      >
                        Defining access for the GITHUB_TOKEN scopes
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a
                    href="https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idenvironment"
                    target="_blank"
                  >
                    Add an environment
                  </a>{' '}
                  with the name <i>github-pages</i>
                </li>
                <li>
                  Call it <i>cd-pipeline</i>
                </li>
                <li>
                  Create a dependency to the <i>ci-pipeline</i> job
                </li>
                <li>
                  Provide the github.token with the additional permissions: <i>pages: write</i>
                </li>
                <li>
                  <a
                    href="https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idenvironment"
                    target="_blank"
                  >
                    Add an environment
                  </a>{' '}
                  with the name <i>github-pages</i>
                </li>
                <li>
                  Deploy the GitHub Pages using the GitHub provided action{' '}
                  <a target="_blank" href="https://github.com/actions/deploy-pages">
                    <i>actions/deploy-pages@v4</i>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <Concordion title="Solution Exercise 3">
            <CodeBlock language="yaml" value={exercise03CodeString} />
            <ul>
              <li>
                After the successful CI/CD execution, go to your Repository:{' '}
                <i>Settings &#x3e; Environments</i> and inspect the{' '}
                <i>github-pages environment Settings</i>.
              </li>
            </ul>
          </Concordion>
        </Concordion>

        <Concordion title="Exercise 4: Matrix Jobs">
          After the successful deployment of your App to GitHub Pages, let's add a matrix job to
          test your App with different browsers.
          <ul>
            <li>
              Add the following code snippet to your <i>ci-cd-workflow</i> as a new job and complete
              the <i>TODO</i> statements as listed in the new code snippet
              <CodeBlock language="yaml" value={exercise04CodeString_a} />
            </li>
            <li>
              Docs:{' '}
              <a
                href="https://docs.github.com/en/actions/using-jobs/using-a-matrix-for-your-jobs"
                target="_blank"
              >
                Using a matrix for your jobs
              </a>
            </li>
            <li>
              Docs:{' '}
              <a
                href="https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idoutputs"
                target="_blank"
              >
                Job outputs
              </a>
            </li>
          </ul>
          <Concordion title="Solution Exercise 4">
            <CodeBlock language="yaml" value={exercise04CodeString_b} />
          </Concordion>
        </Concordion>

        <Concordion title="Exercise 5: Composite Action">
          Remove duplicated code with a{' '}
          <a
            href="https://docs.github.com/en/actions/creating-actions/creating-a-composite-action"
            target="_blank"
          >
            Composite Action
          </a>
          :
          <ul>
            <li>
              In both the ci-job as well as the matrix smoke test job we install node and the npm
              dependencies. These two steps are duplicated. Create a Composite Action to remove this
              duplication.
            </li>
            <li>
              Put the action inside this repo in <i>.github/actions/install/action.yaml</i>
            </li>
          </ul>
          <Concordion title="Solution Exercise 5">
            <CodeBlock language="yaml" value={exercise05CodeString} />
          </Concordion>
        </Concordion>

        <Concordion title="Exercise 6: JavaScript Action">
          Tag main branch commits with a{' '}
          <a
            href="https://docs.github.com/en/actions/creating-actions/creating-a-javascript-action"
            target="_blank"
          >
            JavaScript Action
          </a>
          :
          <ul>
            <li>
              Complete the TODOs in <i>.github/actions/semver/src/main.ts</i>{' '}
            </li>
            <li>Execute the tests of the action</li>
            <li>Compile the action</li>
            <li>
              Reference your action in your ci-pipeline and execute it only on the main branch
            </li>
            <li>Push the resulting semantic version as a git tag to your repository</li>
          </ul>
          <Concordion title="Solution Exercise 6">
            <CodeBlock language="typescript" value={exercise06CodeString} />
            <ul>
              <li>
                Discuss the check of the dist folder based on the{' '}
                <a href="https://github.com/actions/typescript-action">
                  TypeScript-Action Template
                </a>
                .
              </li>
              <li>Discuss sha-pinning when using publicly available actions</li>
              <li>
                Discuss{' '}
                <a
                  href="https://docs.github.com/en/actions/creating-actions/creating-a-docker-container-action"
                  target="_blank"
                >
                  Docker Actions
                </a>
                , e.g. via <a href="https://github.com/aquasecurity/trivy-action">Trivy</a>.
              </li>
            </ul>
          </Concordion>
        </Concordion>

        <Concordion title="Follow Ups">
          <Concordion title="Real World Example">
            <div>
              <ul>
                <li>
                  <a
                    target="_blank"
                    href="https://github.com/magma/magma/blob/master/.github/workflows/bazel.yml"
                  >
                    Magma
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://github.com/goharbor/go-client">
                    Harbor Go Client
                  </a>
                </li>
                <li>...</li>
              </ul>
            </div>
          </Concordion>
          <Concordion title="Relevant Topics">
            <div>
              <ul>
                <li>
                  Docs:{' '}
                  <a
                    target="_blank"
                    href="https://docs.github.com/en/actions/using-workflows/reusing-workflows"
                  >
                    Reusing workflows
                  </a>
                </li>
                <li>
                  Docs:{' '}
                  <a
                    target="_blank"
                    href="https://docs.github.com/en/actions/security-guides/using-secrets-in-github-actions"
                  >
                    Using secrets in GitHub Actions
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://github.com/TNG-GitHub-Actions-Workshop/empty-sample/settings/secrets/actions"
                  >
                    Secrets in Repos
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://github.com/organizations/TNG-GitHub-Actions-Workshop/settings/secrets/actions"
                  >
                    Secrets in Orgs
                  </a>
                </li>
                <li>
                  Docs:{' '}
                  <a
                    target="_blank"
                    href="https://docs.github.com/en/actions/deployment/targeting-different-environments/using-environments-for-deployment#creating-an-environment"
                  >
                    Creating an environment
                  </a>
                </li>
                <li>
                  Docs:{' '}
                  <a
                    target="_blank"
                    href="https://docs.github.com/en/actions/hosting-your-own-runners/managing-self-hosted-runners/about-self-hosted-runners"
                  >
                    About self-hosted runners
                  </a>
                </li>
                <li>
                  Docs:{' '}
                  <a
                    target="_blank"
                    href="https://docs.github.com/en/actions/hosting-your-own-runners/managing-self-hosted-runners/autoscaling-with-self-hosted-runners"
                  >
                    Autoscaling with self-hosted runners
                  </a>
                </li>
                <li>
                  Docs:{' '}
                  <a
                    target="_blank"
                    href="https://docs.github.com/en/actions/using-workflows/caching-dependencies-to-speed-up-workflows"
                  >
                    Caching dependencies to speed up workflows
                  </a>
                </li>
                <li>
                  Docs:{' '}
                  <a target="_blank" href="https://docs.github.com/en/packages/quickstart">
                    GitHub Packages
                  </a>
                </li>
                <li>
                  Docs:{' '}
                  <a
                    target="_blank"
                    href="https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry"
                  >
                    Working with the Container registry
                  </a>
                </li>
              </ul>
            </div>
          </Concordion>
        </Concordion>
      </div>
    </>
  );
}

export default App;
