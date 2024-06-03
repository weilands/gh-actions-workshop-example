import gitHubActionsLogo from '/github-actions.svg';
import './App.css';
import Concordion from './Concordion';
import { CodeBlock } from './CodeBlock';
import { codeString as excercise01CodeString } from './excercises/01-basic-workflow';
import { codeString as excercise02CodeString } from './excercises/02-basic-ci-pipeline';
import { codeString as excercise03CodeString } from './excercises/03-ci-cd-pipeline';

function App() {
  return (
    <>
      <h1>
        GitHub
        <a href="https://github.com/features/actions" target="_blank">
          <img src={gitHubActionsLogo} className="logo" alt="GitHub Actions logo" />
        </a>
        Workshop
      </h1>

      <div className="content">
        <Concordion title="Teminology">
          Edit <code>src/App.tsx</code> and save to test HMR niuare niareun diaenr duinaed niuart
          nida enrdaine rdaniueianeaediunetdiuan rdiuan eri drnatire nuiarte dan raeuinar edinart
          eundae rtuianed ned uniare nuidae rna unaeuidna etrdn rein ein reiu nre
        </Concordion>

        <Concordion title="Excercise 1: Basic Workflows">
          <CodeBlock language="yaml" value={excercise01CodeString} />
          (todo: source https://docs.github.com/en/actions/quickstart) * Where to put it * Explore
          the Actions tab * Restart one run * Disable the workflow
        </Concordion>

        <Concordion title="Excercise 2: Basic CI Pipeline">
          Create a workflow which:
          <ul>
            <li>is called ci-workflow</li>
            <li>is triggered whenever a push is performed</li>
            <li>enable the workflow to be triggered manually</li>
            <li>contains a job called ci-pipeline</li>
            <li>runs on a GitHub hosted ubuntu runner</li>
            <li>checks out the code</li>
            <li>sets up node 20</li>
            <li>
              performs the steps `npm ci`, `npm run prettier`, `npm run typecheck`, `npm run test`,
              `npm run build`
            </li>
          </ul>
          <Concordion title="Helpful Links">
            <a
              href="https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows"
              target="_blank"
            >
              Workflow Triggers
            </a>
            <a
              href="https://docs.github.com/en/actions/using-github-hosted-runners/about-github-hosted-runners/about-github-hosted-runners"
              target="_blank"
            >
              GitHub Runners
            </a>
            <a href="https://github.com/actions" target="_blank">
              GitHub provided Actions
            </a>
          </Concordion>
          <Concordion title="Solution Excercise 2">
            <CodeBlock language="yaml" value={excercise02CodeString} />
            <p>* Hier noch über GitHub Runners und Self Hosted Runners sprechen</p>
          </Concordion>
        </Concordion>

        <Concordion title="Control over Workflow">* needs * github.token</Concordion>

        <Concordion title="Storing Data">
          artefacts (bound to workflow, shortlived), cache (bound to repo/branch, shortlived),
          releases (bound to repo), ghcr
        </Concordion>

        <Concordion title="Environment">Deployment Targets like prod/nonprod</Concordion>

        <Concordion title="Excercise 3: CI/CD Pipeline">
          todo: activate github pages: settings -{'>'} pages -{'>'} source: GitHub Actions
          <ul>
            <li>Rename the workflow created in Excercise 2 to ci-cd</li>
            <li>
              Upload an artifact of the build using the GitHub provided action
              `actions/upload-pages-artifact@v3` with the parameter `path: 'dist/'`
            </li>
            <li>
              create a second job called cd-pipeline, which requires the ci-pipeline to successfully
              finish
            </li>
            <li>provide the github.token with the additional permissions: `pages: write`</li>
            <li>add an environment with the name github-pages</li>
            <li>
              deploy the GitHub Pages using the GitHub provided action `actions/deploy-pages@v4`
            </li>
            <li>
              after the successful CI/CD execution, go to your repository settings -{'>'}{' '}
              Environments and inspect the github-pages environment settings
            </li>
          </ul>
          <Concordion title="Solution Excercise 3">
            <CodeBlock language="yaml" value={excercise03CodeString} />
          </Concordion>
        </Concordion>

        <Concordion title="Alternatives">
          <Concordion title="Alternative 1: Real World Example">
            <div></div>
          </Concordion>
          <Concordion title="Alternative 2: Open End Questions">
            <div></div>
          </Concordion>
          <Concordion title="Alternative 3: Other prepared topics">
            <div></div>
          </Concordion>
        </Concordion>
      </div>
    </>
  );
}

export default App;
