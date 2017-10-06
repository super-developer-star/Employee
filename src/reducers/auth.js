import * as Types from '../constants/actionType'

const initialState = {
    isLoggedIn: false,
    user: null,
    type: 'talent'
}

const auth_reducer = (state = initialState, action) => {
    switch(action.type){
        case Types.SIGNUP_SUCCESS:
            console.log('SIGNUP_SUCCESS');
            return Object.assign({}, state, { isLoggedIn: true, user: action.data});
        case Types.SIGNUP_FAIL:
            console.log('SIGNUP_FAIL');
            return state;
        case Types.SIGNUP_TYPE:
            console.log('SIGNUP_TYPE');
            return Object.assign({}, state, { type: action.signUpType })
        default:
            return state;
    }   
}

export default auth_reducer;