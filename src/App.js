import dataFlat from './data-flat';
import OrgChart from './components/OrgChart';
import Organisation from './components/Organisation/Organisation';
import { convertToHierarchical } from './utils/DataConvertor';
import {useState} from 'react';

function App() {
  const [data, setData] = useState(dataFlat);
  const hierarchicalData = convertToHierarchical(data);

  function handleDataUpdate(source, target){
    //source.manager = target.manager
    const idx = dataFlat.findIndex(item=>{
      return item.id === source.id;
    });
    const dupData = [...data]
    dupData[idx] = {...dupData[idx],manager:target.id}
    setData(dupData);
  }
  
  return (
    <div className="App">
      <div class="container">
        <div class="sidebar">
          <Organisation data={data} />
        </div>
        <div class="content">
          <OrgChart data={hierarchicalData} modifyData={handleDataUpdate}/>        
        </div>
      </div>
    </div>
  );
}

export default App;
