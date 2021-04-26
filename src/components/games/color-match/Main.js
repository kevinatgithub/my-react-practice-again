import { useEffect, useState } from "react";
import { Button, ItemsBox } from "../../context/Graphics";
import { Label } from './Ui';

const Colors = ['red','green','blue','yellow','black','orange'];
const Random = (max = 6) => {
    return Math.floor(Math.random() * max);
};

const Main = () => {
    const [count, setCount] = useState(15);
    const [correct,setCorrect] = useState(0);
    const [wrong,setWrong] = useState(0);
    const [colorIndex, setSelectedColorIndex] = useState(Random());
    const [colorTextIndex, setSelectedColorTextIndex] = useState(Random());
    const [status,setStatus] = useState(null);
    const [secondTextColor,setSecondTextColor] = useState(Random(2) === 2 ? colorIndex : Random());

    useEffect(() => {
        const timerId = setTimeout(() => {
            if (count > 0){
                setCount(count-1);
            }
        },1000);
        return () => {clearTimeout(timerId)};
    },[]);

    const setState = () => {
        setSelectedColorIndex(Random());
        setSelectedColorTextIndex(Random());
        setSecondTextColor(Random(2) === 2 ? colorIndex : Random());
        var timerId = setTimeout(() => {
            setStatus(null);
            clearTimeout(timerId);
        },500);
    }

    const handleYes = () => {
        if (secondTextColor === colorIndex){
            setStatus("correct");
            setCorrect(correct+1);
        }else{
            setStatus("wrong");
            setWrong(wrong+1);
        }
        setState();
    };

    const handleNo = () => {
        if (secondTextColor !== colorIndex){
            setStatus("correct");
            setCorrect(correct+1);
        }else{
            setStatus("wrong");
            setWrong(wrong+1);
        }
        setState();
    }

    const handleReset = () => {
        setCount(15);
        setCorrect(null);
        setSecondTextColor(Random());
        setSelectedColorIndex(Random());
        setSelectedColorTextIndex(Random());
    }

    return (
        <ItemsBox style={{textAlign:'center', border:'1px solid', padding:15, height:250}}>
            <Label>{Colors[colorIndex].toUpperCase()}</Label>
            <Label style={{color:Colors[secondTextColor]}}>{Colors[colorTextIndex].toUpperCase()}</Label>
            <div>
                <Button disabled={count===0} onClick={handleYes}>Yes</Button>
                <Button disabled={count===0} onClick={handleNo} style={{marginLeft:10}}>No</Button>
                <br />
                <Button onClick={handleReset}>Reset Game</Button>
            </div>
            <Label style={{fontSize:25}}>Correct: {correct} Wrong: {wrong} Time: {count}</Label>
            {status === 'correct' && <Label style={{color:'green'}}>Correct</Label>}
            {status === 'wrong' && <Label style={{color:'red'}}>Wrong</Label>}
        </ItemsBox>
    );
};

export default Main;