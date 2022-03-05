import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'Jhon S.', salary: 500, increase: false, id: 1},
                {name: 'Ivan M.', salary: 3000, increase: true, id: 2},
                {name: 'Alex T.', salary: 1500, increase: false, id: 3}
            ]
        }
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter((elem) => elem.id !== id)
            }
        });
    }

    addItem = (name, salary) => {
        this.setState(({data}) => {
            const newItem = {
                name,
                salary,
                increase: false,
                id: data.length + 1
            }
            return {
                data: [...data, newItem]
            }
        });
    }

    render() {
        return (
            <div className="app">
                <AppInfo/>
    
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
    
                <EmployeesList data={this.state.data} onDelete={this.deleteItem}/>
                <EmployeesAddForm onAdd={this.addItem}/>
            </div>
        );
    }
}

export default App;