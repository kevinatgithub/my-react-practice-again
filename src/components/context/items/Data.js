import { useContext } from "react";
import AppContext, { FilterContext } from "../../../AppContext";
import { Table, Th } from "../Graphics";
import Row from "../Row";

const Data = () => {
    const {users, setCurrent, deleteUser} = useContext(AppContext);
    const {filter} = useContext(FilterContext);
    const filtered = filter ? users.filter(u => u.name.toUpperCase().startsWith(filter.toUpperCase())) : users;
    
    const handleDelete = user => {
        if (window.confirm("Are you sure?")){
            deleteUser(user);
        }
    }
    
    return (
        <Table cellPadding={2} cellSpacing={2} border={1}>
            <thead>
                <tr>
                    <Th>ID</Th>
                    <Th>Name</Th>
                    <Th></Th>
                </tr>
            </thead>
            <tbody>
                {filtered.length === 0 && <tr>
                    <td colSpan={3}>No Records Found</td>
                </tr>}
                {filtered.length > 0 && 
                    filtered.map(u => 
                        <Row 
                        key={u.id} 
                        item={u} 
                        fields={['id','name']} 
                        setCurrent={setCurrent} 
                        handleDelete={handleDelete} />
                    )}
            </tbody>
        </Table>
    );
};

export default Data;