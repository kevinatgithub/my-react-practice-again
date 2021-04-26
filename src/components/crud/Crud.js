import { connect } from 'react-redux';

import './Crud.css';
import List from './List';
import Form from './Form';

const mapStateToProps = ({current}) => {
    return {
        current
    };
};

const ConnectedCrud = ({current}) => {
    return (current == null ? <List /> : <Form />);
};


const Crud = connect(mapStateToProps)(ConnectedCrud);

export default Crud;