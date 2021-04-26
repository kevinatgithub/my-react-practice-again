import _ from "lodash";
import { useState } from "react";
import { GetNewAnswers, GetNewRows} from './Utils';


export const useGameState = () => {
    const [lives,setLives] = useState(3);
    const [answers] = useState(GetNewAnswers());
    const defaultRows = GetNewRows(answers);
    const [rows,setRows] = useState(defaultRows);
    const [key,setKey] = useState(Math.random());
    const [won,setWon] = useState(false);
    const [greens,setGreens] = useState(0);
    const handleClick = (c,i,j) => {
        if (lives <= 0){
            return;
        }

        const newRows = rows;
        const index = (i*5) + (j+1);
        if (c !== 0){
            return;
        }
        if (_.includes(answers,index) === true){
            newRows[i][j] = 1;
            setGreens(greens+1);
            if (greens >= answers.length -1){
                setWon(true);
            }
        }else{
            
            newRows[i][j] = 2;
            setLives(lives-1);
        }
        setRows(newRows);
        setKey(Math.random);
    }

    return {won, setWon, lives, rows, setRows, key, handleClick};
};