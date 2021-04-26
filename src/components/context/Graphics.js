import styled from "styled-components";

export const ItemsBox = styled.div`
    width : 400px;
    margin : 1em;
`;

export const Button = styled.button`
    background: #3e8989;
    border-radius: 3px;
    border: 2px solid #3e8989;
    color: #fff;
    margin-top:1em;
    padding: 0.25em 1em;
`;

export const InputButton = styled.input`
    background: #3e8989;
    border-radius: 3px;
    border: 2px solid #3e8989;
    color: #fff;
    margin-top:1em;
    padding: 0.25em 1em;
`;

export const Submit = styled.button`
    background: #3e8989;
    border-radius: 3px;
    border: 2px solid #3e8989;
    color: #fff;
    margin-top:1em;
    padding: 0.25em 1em;
`;

export const Table = styled.table`
    border-spacing: 0px;
    border-collapse: collapse;
    width: 100%;
    max-width: 100%;
    margin-bottom: 15px;
    background-color: transparent; /* Change the background-color of table here */
    text-align: left; /* Change the text-alignment of table here */
`;

export const Th = styled.th
`
    font-weight: bold;
    border: 1px solid #cccccc; /* Change the border-color of heading here */
    padding: 8px;
`;

export const Td = styled.td
`
    border: 1px solid #cccccc; /* Change the border-color of cells here */
    padding: 8px;
`;

export const Input = styled.input
`
    -webkit-writing-mode: horizontal-tb !important;
    text-rendering: auto;
    color: -internal-light-dark(black, white);
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: start;
    appearance: textfield;
    background-color: -internal-light-dark(rgb(255, 255, 255), rgb(59, 59, 59));
    -webkit-rtl-ordering: logical;
    cursor: text;
    margin: 0em;
    font: 400 13.3333px Arial;
    padding: 1px 2px;
    border-width: 2px;
    border-style: inset;
    border-color: -internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133));
    border-image: initial;
    border-radius: 2px;
`;