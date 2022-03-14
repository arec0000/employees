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
                {name: 'Jhon S.', salary: 500, increase: false, like: false, id: 1},
                {name: 'Ivan M.', salary: 3000, increase: true, like: true, id: 2},
                {name: 'Alex T.', salary: 1500, increase: false, like: false, id: 3}
            ],
            term: '',
            filter: 'all'
        }
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter((elem) => elem.id !== id),
            }
        });
    }

    addItem = (name, salary) => {
        this.setState(({data}) => {
            const newItem = {
                name,
                salary,
                increase: false,
                like: false,
                id: data.length + 1
            }
            return {
                data: [...data, newItem],
            }
        });
    }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => item.id === id ? {...item, [prop]: !item[prop]} : item)
        }));
    }

    searchEmp = (items, term) => {
        if (term.length === 0) {
            return items;
        }
        return items.filter(item => {
            return item.name.toLowerCase().indexOf(term.toLowerCase()) > -1
        });
    }

    filterEmp = (items, filter) => {
        if (filter === 'increase') {
            return items.filter(item => item.increase);
        }
        if (filter === 'more1000') {
            return items.filter(item => +item.salary > 1000);
        }
        return items;
    }

    onUpdateSearch = (term) => {
        this.setState({
            term
        });
    }

    onUpdateFilter = (filter) => {
        this.setState({
            filter
        });
    }

    render() {
        const {data, term, filter} = this.state,
              employeesCount = data.length,
              increaseCount = data.reduce((count, item) => item.increase ? count + 1 : count, 0),
              visibleData = this.filterEmp(this.searchEmp(data, term), filter);
        return (
            <div className="app">
                <AppInfo employeesCount={employeesCount} increaseCount={increaseCount}/>
    
                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter onUpdateFilter={this.onUpdateFilter} filter={filter}/>
                </div>
    
                <EmployeesList 
                    data={visibleData} 
                    onDelete={this.deleteItem} 
                    onToggleProp={this.onToggleProp}/>
                <EmployeesAddForm onAdd={this.addItem}/>
            </div>
        );
    }
}

export default App;