import './Organisation.css'
import { useState, useEffect } from 'react';
import Search from '../Search/Search';
import Filter from '../Filter/Filter';

/* 
    Component to render the list of employees
*/
const Organisation = ({ data, onFilterChange }) => {

    const [employees, setEmployees] = useState(data);
    const [searchValue, setSearchValue] = useState('');
    const [filterValue, setFilterValue] = useState('');
    const searchKeys = ['name', 'designation', 'team']

    /* 
        To find if a search criteria matches.
        @param employee An employee    
    */
    function findMatches(employee){
        for(var i=0; i < searchKeys.length; i++){
            if(employee[searchKeys[i]].toLowerCase().includes(searchValue.toLowerCase())){
                return true;
            }
        } 
        return false
    }

    useEffect(() => {
        const result = data?.filter((employee) => {
            return findMatches(employee)
                && (filterValue ? employee.team === filterValue : true);
        });
        setEmployees(result);
    }, [searchValue, filterValue, data])

    function handleFilterChange(val) {
        setFilterValue(val);
        onFilterChange(val);
    }

    return (
        <div className="sidebarContainer">
            <Search searchValue={searchValue} handleChange={(val) => setSearchValue(val)} />
            <Filter filterValue={filterValue} employees={data} onFilterChange={(val) => handleFilterChange(val)} />
            {employees?.length > 0 ? <ul className='employeeList'>
                {employees?.map(item => {
                    return (
                        <li className='employeeListElement' key={item.id}>
                            <span>{item.name}</span>
                            <div className="employeeMeta">
                                <span>{item.designation}</span>
                                <span>{item.team}</span>
                            </div>
                        </li>
                    )
                })}</ul>
                :<h5>No items to display</h5>}
        </div>
    )
}

export default Organisation;