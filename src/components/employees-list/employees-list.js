import EmployeesListItem from '../employees-list-item/employees-list-item';

import './employees-list.css';

const Employeeslist = ({data, onDelete, onToggleProp, onChangeSalary}) => {

    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <EmployeesListItem 
                key={id} 
                {...itemProps}
                onDelete={() => onDelete(id)}
                onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}
                onChangeSalary={(salary) => onChangeSalary(id, salary)}/>
        );
    });

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    );
};

export default Employeeslist;