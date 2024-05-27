import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { increment } from './increment';
import Concordion from './Concordion';
import { CodeBlock } from './CodeBlock';
import { codeString } from './excercises/01-hello-world';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => increment(count))}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>

      <div>
        <Concordion title="Teminology">
          <div className="card">
            <button onClick={() => setCount((count) => increment(count))}>count is {count}</button>
            <p>
              Edit <code>src/App.tsx</code> and save to test HMR niuare niareun diaenr duinaed
              niuart nida enrdaine rdaniueianeaediunetdiuan rdiuan eri drnatire nuiarte dan raeuinar
              edinart eundae rtuianed ned uniare nuidae rna unaeuidna etrdn rein ein reiu nre
            </p>
          </div>
          <Concordion title="Subsection 1.1">
            <div className="card">
              <button onClick={() => setCount((count) => increment(count))}>
                count is {count}
              </button>
              <p>
                Edit <code>src/App.tsx</code> and save to test HMR
              </p>
            </div>
            <CodeBlock language="yaml" value={codeString} />
          </Concordion>
        </Concordion>
        <Concordion title="Basic Workflows">
          {' '}
          <Concordion title="Subsection 1.1">
            <div className="card">
              <button onClick={() => setCount((count) => increment(count))}>
                count is {count}
              </button>
              <p>
                Edit <code>src/App.tsx</code> and save to test HMR
              </p>
            </div>
          </Concordion>
        </Concordion>
      </div>

      <div className="card">
        <button onClick={() => setCount((count) => increment(count))}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => increment(count))}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => increment(count))}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => increment(count))}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => increment(count))}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => increment(count))}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        <div className="card">
          <button onClick={() => setCount((count) => increment(count))}>count is {count}</button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <div className="card">
          <button onClick={() => setCount((count) => increment(count))}>count is {count}</button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <div className="card">
          <button onClick={() => setCount((count) => increment(count))}>count is {count}</button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;
