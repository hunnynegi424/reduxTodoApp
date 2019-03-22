import { combineReducers } from 'redux';

const flag = (LFlag=false, action) => {
    if (action.type === 'LOGIN_FLAG'){
        return action.payload;
    }
    if (action.type === 'CHANGE_FLAG') {
        return action.payload;
    }
    return LFlag;
}

const taskList = (initialList=[], action) => {
    if (action.type === 'NEW_TASK') {
        return [...initialList, action.payload]
    }
    return initialList;
}

export default combineReducers({
    flag,
    taskList,
});