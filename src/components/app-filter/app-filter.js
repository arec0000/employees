import './app-filter.css';

const AppFilter = ({onUpdateFilter, filter}) => {

    const btnsData = [
        {name: 'all', label: 'Все сотрудники'},
        {name: 'increase', label: 'На повышение'},
        {name: 'more1000', label: 'З/П больше 1000$'}
    ];

    const buttons = btnsData.map(({name, label}) => {
        const clazz = filter === name ? 'btn-light' : 'btn-outline-light';
        return (
            <button 
                className={`btn ${clazz}`}
                type="button"
                key={name}
                onClick={() => onUpdateFilter(name)}>
                    {label}
            </button>
        );
    });

    return (
        <div className="btn-group">
            {buttons}
        </div>
    );
};

export default AppFilter;