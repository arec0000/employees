import EmployeesListItem from '../employees-list-item/employees-list-item';

import './employees-list.css';

const Employeeslist = ({data}) => {

    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <EmployeesListItem key={id} {...itemProps}/>
        );
    });

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    );
};

export default Employeeslist;