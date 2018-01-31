import axios from 'axios';

const initialState = {
    event: {
    groom_name: "",
    bride_name: "",
    g_phone: "",
    b_phone: "",
    dates: "",
    time_frame: "",
    venue: "",
    auth_id: ""}
    , user: {}
}

const UPDATE_EVENT_BODY = "UPDATE_EVENT_BODY";
const GET_USER = "GET_USER";
const UPDATE_USER = "UPDATE_USER";


function reducer( state = initialState, action ) {
    switch(action.type) {
        case UPDATE_EVENT_BODY:
        return Object.assign( {}, state, { event: action.payload } );

        case GET_USER+"_FULFILLED":
        return Object.assign( {}, state, {user: action.payload});

        case UPDATE_USER:
        return Object.assign({}, state, {user: action.payload});


        default: return state;
    }

}

export function updateEvent( body ){
    return{
        type: UPDATE_EVENT_BODY,
        payload: body
    }
}

export function getUser(){
   var user = axios.get('/auth/me')
    .then( user => {
        return user.data
    })
    return {
        type: GET_USER,
        payload: user 
    }
}

export function updateUser(){

}
export default reducer;