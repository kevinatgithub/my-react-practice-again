import { useEffect, useState } from "react";
import { GetNewRows, Colors, Table} from './Utils';
import {useGameState} from './Core';
import { Button } from "../../context/Graphics";

const TheGame = ({handleReset}) => {

    const {won, lives, rows, setRows, key, handleClick} = useGameState();

    
    useEffect(() => {
        const timerId = setTimeout(() => {
            setRows(GetNewRows([]));
        }, 2000);
        return () => {clearTimeout(timerId)}
    },[]);

    return (
        <>
            <Table key={key}>
                <tbody>
                    {rows.map((r,i) => (
                        <tr key={i}>
                            {r.map((c,j) => <td onClick={() => handleClick(c,i,j)} key={j} style={{background: Colors[c]}}></td>)}
                        </tr>
                    ))}
                </tbody>
            </Table>
            <p>Lives : {lives} {won && <b style={{color:'green'}}>You Won!</b>} {(lives <= 0 || won) && <Button onClick={handleReset}>Reset</Button>}</p>
        </>
    );
};

const Game = () => {
    const [key,setKey] = useState(Math.random());
    return <TheGame key={key} handleReset={() => setKey(Math.random())} />;
}

export default Game;