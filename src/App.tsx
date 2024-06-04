import gitHubActionsLogo from '/github-actions.svg';
import './App.css';
import Concordion from './Concordion';
import { CodeBlock } from './CodeBlock';
import { codeString as excercise01CodeString } from './excercises/01-basic-workflow';
import { codeString as excercise02CodeString } from './excercises/02-basic-ci-pipeline';
import { codeString as excercise03CodeString } from './excercises/03-ci-cd-pipeline';
import {
  codeString_a as excercise04CodeString_a,
  codeString_b as excercise04CodeString_b
} from './excercises/04-matrix-job';
import { codeString as excercise05CodeString } from './excercises/05-composite-action';

function App() {
  return (
    <>
      <h1>
        <a href="https://github.com/features/actions" target="_blank">
          <img src={gitHubActionsLogo} className="logo" alt="GitHub Actions logo" />
        </a>
        GitHub @ TNG
        –
        Workshop
      </h1>

      <div className="content">
        <Concordion title="Excercise 1: Basic Workflows">
          Create your first GitHub Actions Workflow:
          <ul>
            <li>
              In your fork, create the file <i>.github/workflows/hello.yaml</i> with this content (<a target="_blank" href="https://docs.github.com/en/actions/quickstart">Source</a>):
              <CodeBlock language="yaml" value={excercise01CodeString} />
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

        <Concordion title="Excercise 2: Basic CI Pipeline">
          Create a workflow which:
          <ul>
            <li>Is named ci-workflow</li>
            <li>Is triggered whenever
              <ul>
                <li>A push is performed</li>
                <li>It is manually triggered</li>
                <li><a
                    href="https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows"
                    target="_blank"
                >
                  Docs: Workflow Triggers
                </a></li>
              </ul>
            </li>
            <li>Contains a job called ci-pipeline</li>
            <li>
              Runs on a GitHub hosted ubuntu runner
              <ul>
                <li>
                  <a
                    href="https://docs.github.com/en/actions/using-github-hosted-runners/about-github-hosted-runners/about-github-hosted-runners"
                    target="_blank"
                  >
                    Docs: GitHub Runners
                  </a>
                </li>
              </ul>
            </li>
            <li>Runs the following steps:
              <ul>
                <li>Check out the source code</li>
                <li>Set up NodeJS 20</li>
                <li>
                  Runs the following npm scripts:
                  <CodeBlock language="bash" value="npm ci
npm run prettier
npm run typecheck
npm run test
npm run build" />
                </li>
                <li>
                  <a href="https://github.com/actions" target="_blank">
                    Actions provided by GitHub
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <Concordion title="Solution Excercise 2">
            <CodeBlock language="yaml" value={excercise02CodeString} />
            <ul>
              <li>
                Docs: <a target="_blank" href="https://docs.github.com/en/actions/using-github-hosted-runners/about-github-hosted-runners/about-github-hosted-runners#standard-github-hosted-runners-for-public-repositories">Standard GitHub-hosted runners for Public repositories</a>
              </li>
            </ul>
          </Concordion>
        </Concordion>

        <Concordion title="Excercise 3: CI/CD Pipeline">
          Extend your CI-Job from the previous exercise with a CD-Job.
          Let's deploy our application to GitHub Pages.

          <ul>
            <li>
              Activate GitHub Pages in your repository: <i>Settings &#x3e; Pages &#x3e; Source: GitHub Actions</i>
            </li>
            <li>Rename the workflow created in Exercise 2 to <i>ci-cd</i></li>
            <li>
              Upload the built artifact using the <a target="_blank" href="https://github.com/actions/upload-pages-artifact">
                <i>actions/upload-pages-artifact@v3</i></a> with the parameter <i>path: 'dist/'</i>
            </li>
            <li>Create a second job to deploy this artifact
              <ul>
                <li>Called it <i>cd-pipeline</i></li>
                <li>Create a dependency to the <i>ci-pipeline</i> job</li>
                <li>Provide the github.token with the additional permissions: <i>pages: write</i></li>
                <li><a href="https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idenvironment" target="_blank">Add an environment</a> with the name <i>github-pages</i></li>
                <li>
                  Deploy the GitHub Pages using the GitHub provided action <a
                    target="_blank" href="https://github.com/actions/deploy-pages"><i>actions/deploy-pages@v4</i></a>
                </li>
              </ul>
            </li>

          </ul>
          <Concordion title="Solution Excercise 3">
            <CodeBlock language="yaml" value={excercise03CodeString} />
            <ul>
              <li>
                After the successful CI/CD execution, go to your Repository: <i>Settings &#x3e;
                Environments</i> and inspect the <i>github-pages environment Settings</i>.
              </li>
            </ul>
          </Concordion>
        </Concordion>

        <Concordion title="Excercise 4: Matrix Jobs">
          After the successful deployment of your App to GitHub Pages, let's add a matrix job to test your App with different browsers.

          <ul>
            <li>
              Add the following code snippet to your <i>ci-cd-workflow</i> as a new job and omplete the <i>TODO</i> statements as listed in the new code snippet
              <CodeBlock language="yaml" value={excercise04CodeString_a} />
            </li>
            <li>Docs: <a href="https://docs.github.com/en/actions/using-jobs/using-a-matrix-for-your-jobs" target="_blank">Using a matrix for your jobs</a></li>
          </ul>
          <Concordion title="Solution Excercise 4">
            <CodeBlock language="yaml" value={excercise04CodeString_b} />
          </Concordion>
        </Concordion>

        <Concordion title="Excercise 5: Composite Action">
          Remove duplicated code with a <a href="https://docs.github.com/en/actions/creating-actions/creating-a-composite-action" target="_blank">Composite Action</a>:
          <ul>
            <li>
              In both the ci-job as well as the matrix smoke test job we install node and the npm
              dependencies. These two steps are duplicated. Create a Composite Action to remove this
              duplication.
            </li>
            <li>Put the action inside this repo in <i>.github/actions/install/action.yaml</i></li>
          </ul>
          <Concordion title="Solution Excercise 5">
            <CodeBlock language="yaml" value={excercise05CodeString} />
          </Concordion>
        </Concordion>

        <Concordion title="Follow Ups">
          <Concordion title="Real World Example">
            <div>
              <ul>
                <li><a target="_blank" href="https://github.com/magma/magma/blob/master/.github/workflows/bazel.yml">Magma</a></li>
                <li><a target="_blank" href="https://github.com/goharbor/go-client">Harbor Go Client</a></li>
                <li>...</li>
              </ul>
            </div>
          </Concordion>
          <Concordion title="Relevant Topics">
            <div>
              <ul>
                <li>Docs: <a target="_blank" href="https://docs.github.com/en/actions/using-workflows/reusing-workflows">Reusing workflows</a></li>
                <li>Docs: <a target="_blank" href="https://docs.github.com/en/actions/security-guides/using-secrets-in-github-actions">Using secrets in GitHub Actions</a></li>
                <li><a target="_blank" href="https://github.com/TNG-GitHub-Actions-Workshop/empty-sample/settings/secrets/actions">Secrets in Repos</a></li>
                <li><a target="_blank" href="https://github.com/organizations/TNG-GitHub-Actions-Workshop/settings/secrets/actions">Secrets in Orgs</a></li>
                <li>Docs: <a target="_blank" href="https://docs.github.com/en/actions/deployment/targeting-different-environments/using-environments-for-deployment#creating-an-environment">Creating an environment</a></li>
                <li>Docs: <a target="_blank" href="https://docs.github.com/en/actions/hosting-your-own-runners/managing-self-hosted-runners/about-self-hosted-runners">About self-hosted runners</a></li>
                <li>Docs: <a target="_blank" href="https://docs.github.com/en/actions/hosting-your-own-runners/managing-self-hosted-runners/autoscaling-with-self-hosted-runners">Autoscaling with self-hosted runners</a></li>
                <li>Docs: <a target="_blank" href="https://docs.github.com/en/actions/using-workflows/caching-dependencies-to-speed-up-workflows">Caching dependencies to speed up workflows</a></li>
                <li>Docs: <a target="_blank" href="https://docs.github.com/en/packages/quickstart">GitHub Packages</a></li>
                <li>Docs: <a target="_blank" href="https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry">Working with the Container registry</a></li>
              </ul>
            </div>
          </Concordion>
        </Concordion>
      </div>
    </>
  );
}

export default App;
