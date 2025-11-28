import { Tree } from 'react-organizational-chart';
import Employees from './Employees/Employees';
import {useState} from 'react';

const OrgChart = ({data, modifyData})=>{
    const [draggedItem, setDraggedItem] = useState(null);

    function handleDragStart(ev, item) {
        setDraggedItem(item);
    }

    function handleDrop(ev, item) {
       ev.preventDefault();
       modifyData(draggedItem, item);
    }

    function handleDragOver (ev, item){
        ev.preventDefault();
    }

    return (
         <Tree
            lineWidth={'5px'}
            lineColor={'grey'}
            lineBorderRadius={'10px'}
            label={<div>Organisation</div>}
          >
            <Employees data={data} onDragStart={handleDragStart} onDragOver={handleDragOver} onDrop={handleDrop}/>
          </Tree>
    )
}

export default OrgChart;