import * as actionTypes from '../constants/number.js'
import { combineReducers } from 'redux'

const text =  function (state = actionTypes.TEXT, action){
    switch(action.type) {
        case actionTypes.TEXT :
            return action.data.text
        default:
            return state
    }
}

const count =  function (state = actionTypes.COUNT, action){
    switch(action.type) {
        case actionTypes.COUNT :
            return action.data.count
        default:
            return state
    }
}


export default combineReducers({
    text,
    count
})
