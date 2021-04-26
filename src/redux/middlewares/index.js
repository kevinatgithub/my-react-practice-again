import _ from 'lodash';
import {ADD_ARTICLE, ADD_EMPLOYEE, DELETE_EMPLOYEE} from '../constants/action-type';

export const assignIdMiddleware = ({getState, dispatch}) => next => action =>{
    if (action.type === ADD_ARTICLE)
    {
        const {articles} = getState();
        action.payload = {
            id : articles.length + 1,
            title : action.payload
        };
    }
    if (action.type === ADD_EMPLOYEE)
    {
        const {employees} = getState();
        const newId = _.maxBy(employees, 'id').id + 1;
        action.payload.id = newId;
    }
    if (action.type === DELETE_EMPLOYEE)
    {
        const {employees} = getState();
        const index = _.findIndex(employees,{id:action.payload.id});
        action.payload = {
            index : index, employee: action.payload
        };
    }
    return next(action);
};