import axios from "axios"
import {

    
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL, 

  LOGIN_REQUEST,
    LOGIN_SUCCESS ,
    LOGIN_FAIL,

    LOGOUT_SUCCESS,
    LOGOUT_FAIL,

    LOAD_USER_REQUEST,
    LOAD_USER_SUCCESS,
    LOAD_USER_FAIL,



    CLEAR_ERRORS


} from "../Constants/UserConstant";





// registerUser
export const registerUser = (UserData) => async (dispatch) => {
    try {
      dispatch({ type: REGISTER_USER_REQUEST });
  
      const config = { headers: { "Content-Type": "application/json" } };
  
      const { data } = await axios.post(`/api/flippy/v1/signup`, UserData, config);
  
      dispatch({ type: REGISTER_USER_SUCCESS, payload: data.user });
    } catch (error) {
      dispatch({
        type: REGISTER_USER_FAIL,
        payload: error.response.data.error,
      });
    }
  };


    





// login 
export const login =(phone)=> async (dispatch) =>{
try {
    dispatch({
        type:LOGIN_REQUEST
    })

        const config = { headers:{"Content-Type":"application/json"}}
        
        const {data} =await axios.post('/api/flippy/v1/signup',
        {phone},
        config,
       {
        withCredentials:true
       }
        )
        dispatch({
        type:LOGIN_SUCCESS,
        payload:data.seller,
        
    })

    
} catch (error) {
    dispatch({
        type:LOGIN_FAIL,
        payload:error.response.data.error
    
    })
}

}





// load user
export const loadUser =()=> async (dispatch) =>{
    try {
        dispatch({
            type:LOAD_USER_REQUEST
        })
    
            const {data} =await axios.get('/api/flippy/v1/me')
            dispatch({
            type:LOAD_USER_SUCCESS,
            payload:data.user,
            
        })
    
        
    } catch (error) {
        dispatch({
            type:LOAD_USER_FAIL,
            payload:error.response.data.error
        
        })
    }
    
    }



//     export const logout =()=> async (dispatch) =>{
//         try {     
//         await axios.get('/api/flippy/v1/seller/logout')
//                 dispatch({
//                 type: LOGOUT_SUCCESS             
//             })                
//         } catch (error) {
//             dispatch({
//                 type:LOGOUT_FAIL,
//                 payload:error.response.data.error
            
//             })
//         }
        
//         }





// export const clearErrors = ()=> async (dispatch)=>{
//     dispatch({
//         type:CLEAR_ERRORS
//     })
// }




export const clearErrors = ()=> async (dispatch)=>{
  dispatch({
      type:CLEAR_ERRORS
  })
}
