import './Filter.css';

const Filter = ({ filterValue, employees, onFilterChange }) => {
    const teamList = [...new Set(employees?.reduce((acc, item) => {
        acc.push(item?.team);
        return acc;
    }, []))];

    return (
        <select value={filterValue} onChange={(e) => onFilterChange(e.target.value)} className='dropdown'>
            {<>
                <option value={''}>All</option>
                {
                    teamList.map((item) => {
                        return <option value={item}>{item}</option>
                    })}
            </>

            }
        </select>
    );
}

export default Filter;