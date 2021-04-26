import _ from 'lodash';
import {connect} from 'react-redux';
import {deleteEmployee, setCurrent} from '../../actions/index';

const mapStateToProps = state => {
    return {
        employees : state.employees
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setCurrent : current => dispatch(setCurrent(current)),
        deleteEmployee : employee => dispatch(deleteEmployee(employee))
    };
};

const ConnectedRows = ({employees, filter, setCurrent, deleteEmployee}) => {
    const local = filter === "" ? employees : _.filter(employees,e => e.name.toUpperCase().startsWith(filter.toUpperCase()));

    const handleDelete = employee => {
        if (window.confirm("Delete Record?")){
            deleteEmployee(employee);
        }
    };

    return (local.length > 0 
    ? local.map(e => (
        <tr key={e.id}>
            <td>{e.id}</td>
            <td>{e.name}</td>
            <td>{e.position}</td>
            <td>{e.company}</td>
            <td>
                <button onClick={() => setCurrent(e)}>Edit</button>
                <button onClick={() => handleDelete(e)}>Delete</button>
            </td>
        </tr>
    ))
    : <tr><td colSpan="5">No records found</td></tr>);
};


const Rows = connect(mapStateToProps,mapDispatchToProps)(ConnectedRows);

export default Rows;