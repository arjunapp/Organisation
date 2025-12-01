import OrgChart from '../OrgChart/OrgChart';
import Organisation from '../Organisation/Organisation';
import { convertToHierarchical } from '../../utils/DataConvertor';
import { useState, useEffect } from 'react';
import mockData from '../../utils/mockData';

/* 
    The container to display the page.
*/
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
        setData(dupData);
    }

    /* 
        To modify the data after a drag n drop.
        @params source Source employee node.
        @params target TArget employee node
    */
    function handleDataUpdate(source, target) {
        const idx = data.findIndex(item => {
            return item.id === source.id;
        });
        let dupData = [...data]
        dupData[idx] = { ...dupData[idx], manager: target.id };
        
        if (source.id === target.manager) {
            const tIdx = data.findIndex(item => {
                return item.id === target.id;
            });
            dupData[tIdx] = { ...dupData[tIdx], manager: source.manager };
        }
        modifyDataSource(dupData)
    }


    return (
        <div className="container">
            <div className="sidebar">
                <Organisation data={data} onFilterChange={(val) => setFilter(val)} />
            </div>
            <div className="main">
                <OrgChart data={hierarchicalData} modifyData={handleDataUpdate} filter={filter} />
            </div>
        </div>
    )
}

export default Dashboard;