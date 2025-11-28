import './Organisation.css'
import { useState, useEffect } from 'react';
import Search from '../Search/Search';
import Filter from '../Filter/Filter';

const Organisation = ({ data }) => {

    const [employees, setEmployees] = useState(data);
    const [searchValue, setSearchValue] = useState('');
    const [filterValue, setFilterValue] = useState('');


    useEffect(() => {
        const result = data.filter((employee) => {
            return employee.name.toLowerCase().includes(searchValue.toLowerCase())
             && (filterValue ? employee.team === filterValue:true);
        });
        setEmployees(result);
    }, [searchValue, filterValue, data])

    return (
        <div className="sidebarContainer">
            <Search searchValue={searchValue} handleChange={(val) => setSearchValue(val)} />
            <Filter filterValue={filterValue} employees={data} onFilterChange={(val) => setFilterValue(val)} />
            <ul className='employeeList'>
                {employees.map(item => {
                    return (
                        <li className='employeeListElement'>
                            {item.name}
                        </li>
                    )
                })}</ul>
        </div>
    )
}

export default Organisation;