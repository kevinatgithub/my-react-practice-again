import styled from 'styled-components';
import _ from "lodash";

export const Random = (max = 20) => {
    return Math.floor(Math.random() * max);
};

export const GetNewAnswers = () => {
    const answers = [];
    while (answers.length < 7){
        while(true){
            let rand = Random();
            if (rand === 0){
                rand = 1;
            }
            if (_.includes(answers,rand) === false){
                answers.push(rand);
                break;
            }
        }
    }
    return _.sortBy(answers);
}

export const GetNewRows = answers => {
    const defaultRows = [];
    let a = 1;
    for (let i = 0; i <5; i++){
        let row = [];
        for (let j = 0; j <5; j++){
            if (_.includes(answers,a) !== false){
                row.push(1);
            }else{
                row.push(0);
            }
            a++;
        }
        defaultRows.push(row);
    }
    return defaultRows;
}
export const Colors = ['grey', 'green', 'red'];

export const Table = styled.table`
    border-spacing: 5px;
    border-collapse: separate;
    width: 600px;
    height: 300px;
    border:1px solod #fff;
`;