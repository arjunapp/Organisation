import './employees.css';
import { TreeNode } from 'react-organizational-chart';

const Employees = ({ data, onDragStart, onDragOver, onDrop }) => {

    //add documentation
    function fetchEmployee(item) {
        return (
            <div id={item.id} draggable onDrag={(event) => onDragStart(event, item)}
                onDrop={event => onDrop(event, item)} onDragOver={(e) => onDragOver(e, item)}
                className="employeeCard">
                <div className="employee-pill">
                    <img src={item.pic} className='avatar' alt="Image-avatar"/>
                    <div className="employeeContainer">
                        <span className='employeeName'> {item.name} </span>
                        <span className='employeeDesignation'> {item.designation} </span>
                        <span> {item.team}    </span>
                    </div>

                </div>
            </div>
        )
    }


    return (
        data.map((item) => {
            return (
                <TreeNode label={fetchEmployee(item)}>
                    {item.children && <Employees data={item.children}
                        onDragStart={onDragStart} onDragOver={onDragOver} onDrop={onDrop} />}
                </TreeNode>
            );
        })
    )
};

// const Employees = ({ data }) => {
//     const number = useRef(0);

//     return data.map((item) => {
//             number.current++;
//             console.log(number.current);
//         return (
//             <div class="employeeContainer">
//                 <span style={{ left: `${number.current}px` }} className={item.children ? 'employeeParent' : 'employeeLabel'}>{item.name}</span>
//                 {item.children && <Employees data={item.children} />}
//             </div>
//         );
//     });
// };
export default Employees;