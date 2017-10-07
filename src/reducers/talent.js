import * as Types from '../constants/actionType'

const initialState = {
    techs: [],
    subRoles: { "role": "Engineering" },    
}

const talent_reducer = (state = initialState, action) => {
    switch(action.type){
        case Types.GET_ROLES_TECH:
            console.log('GET_ROLES_TECH');
            return Object.assign({}, state, { techs: action.techs, subRoles: action.subRoles});
        default:
            return state;
    }   
}

export default talent_reducer;