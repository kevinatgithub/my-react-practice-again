import { useState } from "react";
import { connect } from "react-redux";
import { addEmployee, setCurrent, updateEmployee } from "../../actions";

const ConnectedForm = ({addEmployee, updateEmployee, current, setCurrent}) => {
    
    const [id] = useState(current.id);
    const [name,setName] = useState(current.name);
    const [position,setPosition] = useState(current.position);
    const [company,setCompany] = useState(current.company);

    const handleCancel = () => {
        setCurrent(null);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (id) {
            updateEmployee({id, name, position, company});
            setCurrent(null);
            return;
        }
        const newRecord = {
            name, position, company
        };

        addEmployee(newRecord);
        setCurrent(null);
    };

    return (
        <div className="form">
            <form autoComplete="off" onSubmit={e => handleSubmit(e)}>
                <table>
                    <tbody>
                        {id ? <tr>
                            <td>ID</td>
                            <td>{id}</td>
                        </tr> : null}
                        <tr>
                            <td>Name</td>
                            <td><input value={name} onChange={e => setName(e.target.value)} type="text"/></td>
                        </tr>
                        <tr>
                            <td>Position</td>
                            <td><input value={position} onChange={e => setPosition(e.target.value)} type="text"/></td>
                        </tr>
                        <tr>
                            <td>Company</td>
                            <td><input value={company} onChange={e => setCompany(e.target.value)} type="text"/></td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                <input type="submit"/>
                                <button onClick={handleCancel}>Cancel</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
}

const mapStateToProps = ({current}) => {
    return {
        current
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addEmployee : employee => dispatch(addEmployee(employee)),
        updateEmployee : employee => dispatch(updateEmployee(employee)),
        setCurrent : current => dispatch(setCurrent(current))
    };
};

const Form = connect(mapStateToProps,mapDispatchToProps)(ConnectedForm);

export default Form;