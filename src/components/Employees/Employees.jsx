import './employees.css';
import { TreeNode } from 'react-organizational-chart';

const Employees = ({ data, onDragStart, onDragOver, onDrop, filter }) => {
    console.log("Rerender", filter)
    //add documentation
    function fetchEmployee(item) {
        return (
            <div className="employeeHolder">
                <div id={item.id} draggable={item.manager > 0} onDrag={(event) => onDragStart(event, item)}
                    onDrop={event => onDrop(event, item)} onDragOver={(e) => onDragOver(e, item)}
                    className="employeeCard">
                    <div className="employee-pill">
                        <img src={item.pic} className='avatar' alt="Image-avatar" />
                        <div className="employeeContainer">
                            <span className='employeeName'> {item.name} </span>
                            <span className='employeeDesignation'> {item.designation} </span>
                        </div>

                    </div>
                </div>

                {filter && filter !== item.team && <div className="overlay"></div>}
            </div>
        )
    }


    return (
        data?.map((item) => {
            return (
                <TreeNode label={fetchEmployee(item)}>
                    {item.children?.length > 0 ? <Employees data={item.children} filter={filter}
                        onDragStart={onDragStart} onDragOver={onDragOver} onDrop={onDrop} /> : null}
                </TreeNode>
            );
        })
    )
};

export default Employees;