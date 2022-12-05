import './App.css';
import Graph from './components/Graph';
import UnstructuredDataGraph from './components/UnstructuredDataGraph';

function App() {

  return (
    <div className="App">
      <h1>Line Chart</h1>
      <Graph />
      <hr />
      <UnstructuredDataGraph />
    </div>
  );
}

export default App;
