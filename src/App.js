import dataFlat from './data-flat';
import mockData from './utils/mockData';
import Dashboard from './components/Dashboard/Dashboard';

mockData(dataFlat);
function App() {
  return (
    <div className="App">
      <Dashboard />    
    </div>
  );
}

export default App;
