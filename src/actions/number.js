import * as actionTypes from '../constants/number.js'

export function addNumber(data){
    data.count ++;
    return {
        type: actionTypes.COUNT,
        data
    }
}
export function subtractNumber(data){
    data.count --;
    return {
        type: actionTypes.COUNT,
        data
    }
}

export function changeText(data){
    return {
        type: actionTypes.TEXT,
        data
    }
}
