import { useContext } from "react";
import AppContext, { FilterContext } from "../../../AppContext";
import DataRows from "../DataRows";

const DataTable = () => {
    const {users, setCurrent, deleteUser} = useContext(AppContext);
    const {filter} = useContext(FilterContext);
    const filtered = filter ? users.filter(u => u.name.toUpperCase().startsWith(filter.toUpperCase())) : users;
    
    return <DataRows items={filtered} deleteItem={deleteUser} fields={['id','name']} setCurrent={setCurrent} />;
};

export default DataTable;