import { Button, Td } from "./Graphics"

const Row = ({item, fields, setCurrent, handleDelete}) => (
    <tr>
        {fields.map(f => <Td key={f}>{item[f]}</Td>)}
        <Td>
            <Button onClick={() => setCurrent(item)}>Edit</Button>
            <Button onClick={() => { handleDelete(item); }} style={{marginLeft:10}}>Delete</Button>
        </Td>
    </tr>
);

export default Row;