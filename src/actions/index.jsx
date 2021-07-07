
const ADD_ELEM = 'ADD_ELEM';
const CLEAR = 'CLEAR';
const EQUAL = 'EQUAL';


export const addElement = (text) => { 
    return {
     type: ADD_ELEM,
     text
    }
}

export const clear = () => {
    return {
        type: CLEAR,
    }
}

export const equal = (value) => { 
    return {
        type: EQUAL,
        value: value
    }
}