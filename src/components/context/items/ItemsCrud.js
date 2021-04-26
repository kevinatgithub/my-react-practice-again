import _ from "lodash";
import { useState } from "react";
import AppContext from "../../../AppContext";
import Form from "./Form";
import List from "./List";

const Crud = () => {
    const [users,setUsers] = useState([]);
    const [current,setCurrent] = useState(null);
    const [stateId,setStateId] = useState(1);

    const newId = users => {
        if (users.length === 0){
            return 1;
        }

        return _.maxBy(users, "id").id + 1;
    };

    const addUser = name => {
        const user = {id : newId(users), name};
        users.push(user);
        setUsers(users);
    };

    const editUser = user => {
        const index = _.findIndex(users, {id : user.id});
        users[index] = user;
        setUsers(users);
    }

    const deleteUser = user => {
        const index = _.findIndex(users, {id : user.id});
        users.splice(index,1);
        setUsers(users);
        setStateId(stateId+1);
    }

    return <AppContext.Provider value={{users,current, setCurrent,newId,addUser,editUser,deleteUser,stateId}}>
            {current == null && <List />}
            {current != null && <Form />}
        </AppContext.Provider>;
};

export default Crud;
