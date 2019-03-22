const LOGIN_FLAG = 'LOGIN_FLAG';
const CHANGE_FLAG = 'CHANGE_FLAG';
const NEW_TASK = 'NEW_TASK';

export const loggedIn = () => {
    return {
        type: LOGIN_FLAG,
        payload: false
    }
}

export const changeflag = (status) => {
    return {
        type: CHANGE_FLAG,
        payload: status
    }
}

export const addTask = (task) => {
    return {
        type: NEW_TASK,
        payload: task
    }
}