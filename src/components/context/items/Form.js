import { useContext, useState } from "react";
import AppContext from "../../../AppContext";
import {ItemsBox, Table, Td, Button, Input} from '../Graphics';

const Form = () => {

    const {addUser, editUser, current, setCurrent} = useContext(AppContext);
    const [id] = useState(current.id);
    const [name,setName] = useState(current.name);
    const saveForm = () => {
        if (id !== ""){
            editUser({id,name});
        }else{
            addUser(name);
        }
        setCurrent(null);
    }
    const handleSubmit = e => {
        e.prevenTdefault();
        saveForm();
    };
    return (
        <form action="" onSubmit={handleSubmit}>
            <ItemsBox>
                <Table>
                    <tbody>
                        {id !== "" && 
                        <tr>
                            <Td>ID</Td>
                            <Td>{id}</Td>
                        </tr>}
                        <tr>
                            <Td>Name</Td>
                            <Td><Input type="text" value={name} onChange={e => setName(e.target.value)} /></Td>
                        </tr>
                        <tr>
                            <Td colSpan={2}>
                                <Button onClick={saveForm}>Save</Button>
                                <Button onClick={() => { setCurrent(null) }}>Cancel</Button>
                            </Td>
                        </tr>
                    </tbody>
                </Table>
            </ItemsBox>
        </form>
    )
};

export default Form;