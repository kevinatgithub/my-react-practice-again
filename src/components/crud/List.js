import { useState } from 'react';
import { connect } from 'react-redux';
import { setCurrent } from '../../actions';
import Rows from './Rows';
import Search from './Search';

const ConnectedList = ({setCurrent}) => {
    const [filter, setFilter] = useState("");

    const handleFilter = (f) => {
        setFilter(f);
    };

    const handleAddNew = () => {
        setCurrent({id:"", name: "", position: "", company: ""});
    };

    return (
        <div className="list">
            <Search filter={filter} setFilter={handleFilter} />
            <div className="list-table">
                <table cellSpacing="5" cellPadding="5" border="1">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Position</th>
                            <th>Company</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <Rows filter={filter} />
                    </tbody>
                </table>
            </div>
            <button onClick={handleAddNew}>Add New Employee</button>
        </div>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        setCurrent : current => dispatch(setCurrent(current))
    };
};

const List = connect(null,mapDispatchToProps)(ConnectedList);

export default List;