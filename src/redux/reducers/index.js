import _ from 'lodash';
import {ADD_ARTICLE, DATA_LOADED} from '../constants/action-type';
import {ADD_EMPLOYEE, EDIT_EMPLOYEE, DELETE_EMPLOYEE} from '../constants/action-type';
import {SET_CURRENT} from '../constants/action-type';

const initialState = {
    articles: [
        {id:1, title:"test"}
    ],
    employees: [
        {id:1, name: 'Kevin Porferio D. Cainday', position: 'Developer', company: 'Magenic'},
        {id:2, name: '2Kevin Porferio D. Cainday', position: 'Developer', company: 'Magenic'},
        {id:3, name: '3Kevin Porferio D. Cainday', position: 'Developer', company: 'Magenic'},
    ],
    current: null,
    theData: null
};

function rootReducer(state = initialState, action) {
    if (action.type === ADD_ARTICLE){
        return Object.assign({}, state, {
            articles: state.articles.concat(action.payload)
        });
    }
    if (action.type === ADD_EMPLOYEE){
        return Object.assign({}, state, {
            employees: state.employees.concat(action.payload)
        }); 
    }
    if (action.type === EDIT_EMPLOYEE){
        const employees = [...state.employees];
        const emp = _.find(employees, {id : action.payload.id});
        const index = _.findIndex(employees, {id : action.payload.id});
        const {name, position, company} = action.payload;
        const updated = {...emp, name, position, company};
        employees[index] = updated;
        return {...state, employees};
    }
    if (action.type === DELETE_EMPLOYEE){
        const employees = [...state.employees];
        employees.splice(action.payload.index, 1);
        return {...state, employees};
    }
    if (action.type === SET_CURRENT){
        return {...state, current : action.payload};
    }
    if (action.type === DATA_LOADED){
        return {...state, theData : action.payload};
    }
    return state;
};

export default rootReducer;