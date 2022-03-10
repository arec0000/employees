import './app-info.css';

const AppInfo = ({employeesCount, increaseCount}) => {
    return (
        <div className="app-info">
            <h1>Учёт сотрудников в какой-то компании</h1>
            <h2>Общее число сотрудников: {employeesCount}</h2>
            <h2>Премию получат: {increaseCount}</h2>
        </div>
    );
};

export default AppInfo;