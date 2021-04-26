import api from '../api';
import {ADD_ARTICLE, ADD_EMPLOYEE, DELETE_EMPLOYEE, EDIT_EMPLOYEE, SET_CURRENT, DATA_LOADED} from '../constants/action-type';

export const addArticle = payload => {
    return { type: ADD_ARTICLE, payload };
};

export const addEmployee = payload => {
    return {type: ADD_EMPLOYEE, payload};
};

export const updateEmployee = payload => {
    return {type: EDIT_EMPLOYEE, payload};
};

export const deleteEmployee = payload => {
    return {type: DELETE_EMPLOYEE, payload};
};

export const setCurrent = payload => {
    return {type: SET_CURRENT, payload};
}

export const getData = () => {
    return dispatch => {
        return api.get("posts")
        .then(json => {
            dispatch({ type : DATA_LOADED, payload : json});
        });
    };
};