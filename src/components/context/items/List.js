import { useContext, useState } from "react";
import AppContext, { FilterContext } from "../../../AppContext";
import Search from "./Search";
import DataTable from "./DataTable";
import {ItemsBox, Button} from '../Graphics';

const List = () => {

    const [filter,setFilter] = useState("");
    const {setCurrent,stateId} = useContext(AppContext);

    return (
        <FilterContext.Provider value={{filter,setFilter}}>
            <ItemsBox>
                <Search />
                <DataTable key={stateId} />
                <Button onClick={()=>{ setCurrent({id:"",name:""}) }}>Add New</Button>
            </ItemsBox>
        </FilterContext.Provider>
    );
}

export default List;