import {  REGISTER_SUCCESS, 
    REGISTER_FAIL ,
    LOGIN_SUCCESS ,
    LOGIN_FAIL ,
    LOAD_USER_SUCCESS ,
    LOAD_USER_FAIL

} from "./types" ;

import axios from  'axios'

export const registerUser = user => dispatch => {
    axios.post('/register', user )
    .then(res=> dispatch({
        type : REGISTER_SUCCESS,
        payload: res.data
    }))

.catch((err ) => 
dispatch({
    type: REGISTER_FAIL ,
    payload : err.response.data.msg,
}));
};
