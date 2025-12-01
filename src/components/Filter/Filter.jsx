import './Filter.css';

/* 
    The filter component
*/
const Filter = ({ filterValue, employees, onFilterChange }) => {
    const teamList = [...new Set(employees?.reduce((acc, item) => {
        acc.push(item?.team);
        return acc;
    }, []))];

    return (
        <select value={filterValue} onChange={(e) => onFilterChange(e.target.value)} className='dropdown'>
            {<>
                <option value={''} key="All">All</option>
                {
                    teamList.map((item) => {
                        return <option value={item} key={item}>{item}</option>
                    })}
            </>

            }
        </select>
    );
}

export default Filter;