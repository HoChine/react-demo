import * as actionTypes from '../constants/theaterid.js'
const initState = {
    theaterId: 50
}
export default function theaterid(state = initState, action){
    switch(action.type) {
        case actionTypes.THEATER_ID :
            return action.data;
        default:
            return state
    }
}