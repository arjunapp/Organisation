import OrgChart from '../OrgChart/OrgChart';
import Organisation from '../Organisation/Organisation';
import { convertToHierarchical } from '../../utils/DataConvertor';
import { useState, useEffect } from 'react';
import mockData from '../../utils/mockData';

const Dashboard = () => {
    const [data, setData] = useState(null);
    const [filter, setFilter] = useState(null);

    const hierarchicalData = convertToHierarchical(data);

    async function fetchData() {
        const result = await fetch('/api/employees');
        const value = await result.json();
        setData(value);
    }

    useEffect(() => {
        fetchData();
    }, [])

    function modifyDataSource(dupData) {
        // Ideally an api call to write data has to be sent.
        mockData(dupData);
    }

    function handleDataUpdate(source, target) {
        const idx = data.findIndex(item => {
            return item.id === source.id;
        });
        // change this
        const dupData = [...data]
        dupData[idx] = { ...dupData[idx], manager: target.id }
        modifyDataSource(dupData)
        setData(dupData);
    }


    return (
        <div class="container">
            <div class="sidebar">
                <Organisation data={data} onFilterChange={(val)=>setFilter(val)}/>
            </div>
            <div class="main">
                <OrgChart data={hierarchicalData} modifyData={handleDataUpdate} filter={filter}/>
            </div>
        </div>
    )
}

export default Dashboard;