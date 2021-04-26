import { Table, Th, Td } from "./Graphics";
import Row from "./Row";

const DataRows = ({items,fields,setCurrent,deleteItem}) => {
    
    const handleDelete = item => {
        if (window.confirm("Are you sure?")){
            deleteItem(item);
        }
    }
    
    return (
        <Table>
            <thead>
                <tr>
                    {fields.map(f => <Th key={f}>{f}</Th>)}
                    <Th key="options"></Th>
                </tr>
            </thead>
            <tbody>
                {items.length === 0 && <tr>
                    <Td colSpan={fields.length + 1}>No Records Found</Td>
                </tr>}
                {items.length > 0 && 
                    items.map(u => 
                        <Row 
                        key={u.id} 
                        item={u} 
                        fields={fields} 
                        setCurrent={setCurrent} 
                        handleDelete={handleDelete} />
                    )}
            </tbody>
        </Table>
    );
};

export default DataRows;