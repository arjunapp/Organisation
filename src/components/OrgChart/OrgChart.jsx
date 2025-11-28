import { Tree } from 'react-organizational-chart';
import Employees from '../Employees/Employees';
import {useState} from 'react';
import './OrgChart.css';


const OrgChart = ({data, modifyData, filter})=>{
    const [draggedItem, setDraggedItem] = useState(null);

    function handleDragStart(ev, item) {
        setDraggedItem(item);
    }

    function handleDrop(ev, item) {
       ev.preventDefault();
       if(draggedItem.id !== item.id){
            modifyData(draggedItem, item);
       }
    }

    function handleDragOver (ev, item){
        ev.preventDefault();
    }

    function fetchOrgDetails(){
        return (
            <div className='orgContainer'>
                <span className='orgName'>Aspire Bloom Technologies</span>
            </div>
        );
    }

    return (
         <Tree
            lineWidth={'2px'}
            lineColor={'grey'}
            lineBorderRadius={'10px'}
            label={fetchOrgDetails()}
          >
            <Employees data={data} onDragStart={handleDragStart} onDragOver={handleDragOver} onDrop={handleDrop} filter={filter}/>
          </Tree>
    )
}

export default OrgChart;