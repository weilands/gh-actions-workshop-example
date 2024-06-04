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
              Create a file with the following content (source:
              https://docs.github.com/en/actions/quickstart) in `.github/workflows/hello.yaml`
            </li>
            <li>
              Explore the GitHub Actions Tab. Especially, how to restart a run, how to retrieve
              logs, ...
            </li>
            <li>Disable the workflow in the end</li>
          </ul>
          <CodeBlock language="yaml" value={excercise01CodeString} />
        </Concordion>

        <Concordion title="Excercise 2: Basic CI Pipeline">
          Create a workflow which:
          <ul>
            <li>is called ci-workflow</li>
            <li>is triggered whenever a push is performed</li>
            <li>
              enable the workflow to be triggered manually{' '}
              <a
                href="https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows"
                target="_blank"
              >
                Workflow Triggers
              </a>
            </li>
            <li>contains a job called ci-pipeline</li>
            <li>
              runs on a GitHub hosted ubuntu runner{' '}
              <a
                href="https://docs.github.com/en/actions/using-github-hosted-runners/about-github-hosted-runners/about-github-hosted-runners"
                target="_blank"
              >
                GitHub Runners
              </a>
            </li>
            <li>
              checks out the code{' '}
              <a href="https://github.com/actions" target="_blank">
                GitHub provided Actions
              </a>
            </li>
            <li>
              sets up node 20{' '}
              <a href="https://github.com/actions" target="_blank">
                GitHub provided Actions
              </a>
            </li>
            <li>
              performs the steps `npm ci`, `npm run prettier`, `npm run typecheck`, `npm run test`,
              `npm run build`
            </li>
          </ul>
          <Concordion title="Solution Excercise 2">
            <CodeBlock language="yaml" value={excercise02CodeString} />
            <ul>
              <li>
                Discuss different GitHub Runner possibilities. E.g. Windows, Linux, MacOS or
                selfhosted
              </li>
            </ul>
          </Concordion>
        </Concordion>

        <Concordion title="Excercise 3: CI/CD Pipeline">
          Extend your CI-Job from the previous excercise with a CD-Job
          <ul>
            <li>
              Activate GitHub Pages in your repository: Settings -{'>'} Pages -{'>'} Source: GitHub
              Actions
            </li>
            <li>Rename the workflow created in Excercise 2 to ci-cd</li>
            <li>
              Upload an artifact of the build using the GitHub provided action
              `actions/upload-pages-artifact@v3` with the parameter `path: 'dist/'`
            </li>
            <li>
              Create a second job in the same Workflow called cd-pipeline, which requires the
              ci-pipeline to successfully finish
            </li>
            <li>Provide the github.token with the additional permissions: `pages: write`</li>
            <li>Add an environment with the name `github-pages`</li>
            <li>
              Deploy the GitHub Pages using the GitHub provided action `actions/deploy-pages@v4`
            </li>
          </ul>
          <Concordion title="Solution Excercise 3">
            <CodeBlock language="yaml" value={excercise03CodeString} />
            <ul>
              <li>
                After the successful CI/CD execution, go to your Repository: Settings -{'>'}
                Environments and inspect the github-pages environment Settings
              </li>
            </ul>
          </Concordion>
        </Concordion>

        <Concordion title="Excercise 4: Matrix Jobs">
          Test your deployed App with both Firefox and Chromium
          <ul>
            <li>
              Add the following code snippet to your ci-cd-workflow as a new job
              <CodeBlock language="yaml" value={excercise04CodeString_a} />
            </li>
            <li>Complete the TODO statements as listed in the new code snippet</li>
          </ul>
          <Concordion title="Solution Excercise 4">
            <CodeBlock language="yaml" value={excercise04CodeString_b} />
          </Concordion>
        </Concordion>

        <Concordion title="Excercise 5: Composite Action">
          Remove duplicated code with a Composite Action:
          <ul>
            <li>
              In both the ci-job as well as the matrix smoke test job we install node and the npm
              dependencies. These two steps are duplicated. Create a Composite Action to remove this
              duplication.
            </li>
          </ul>
          <Concordion title="Solution Excercise 5">
            <CodeBlock language="yaml" value={excercise05CodeString} />
          </Concordion>
        </Concordion>

        <Concordion title="Follow Ups">
          <Concordion title="Real World Example">
            <div>
              <ul>
                <li><a href="https://github.com/magma/magma/blob/master/.github/workflows/bazel.yml">Magma</a></li>
                <li><a href="https://github.com/goharbor/go-client">Harbor Go Client</a></li>
                <li>...</li>
              </ul>
            </div>
          </Concordion>
          <Concordion title="Relevant Topics">
            <div>
              <ul>
                <li><a href="https://docs.github.com/en/actions/using-workflows/reusing-workflows">Reusing workflows</a></li>
                <li><a href="https://docs.github.com/en/actions/security-guides/using-secrets-in-github-actions">Using secrets in GitHub Actions</a></li>
                <li><a href="https://github.com/TNG-GitHub-Actions-Workshop/empty-sample/settings/secrets/actions">Secrets in Repos</a></li>
                <li><a href="https://github.com/organizations/TNG-GitHub-Actions-Workshop/settings/secrets/actions">Secrets in Orgs</a></li>
                <li><a href="https://docs.github.com/en/actions/deployment/targeting-different-environments/using-environments-for-deployment#creating-an-environment">Creating an environment</a></li>
                <li><a href="https://docs.github.com/en/actions/hosting-your-own-runners/managing-self-hosted-runners/about-self-hosted-runners">About self-hosted runners</a></li>
                <li><a href="https://docs.github.com/en/actions/hosting-your-own-runners/managing-self-hosted-runners/autoscaling-with-self-hosted-runners">Autoscaling with self-hosted runners</a></li>
                <li><a href="https://docs.github.com/en/actions/using-workflows/caching-dependencies-to-speed-up-workflows">Caching dependencies to speed up workflows</a></li>
                <li><a href="https://docs.github.com/en/packages/quickstart">GitHub Packages</a></li>
                <li><a href="https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry">Working with the Container registry</a></li>
              </ul>
            </div>
          </Concordion>
        </Concordion>
      </div>
    </>
  );
}

export default App;
