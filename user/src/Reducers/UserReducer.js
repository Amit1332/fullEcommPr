import {

    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL,

    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,

    LOGOUT_SUCCESS,
    LOGOUT_FAIL,

    LOAD_USER_REQUEST,
    LOAD_USER_SUCCESS,
    LOAD_USER_FAIL,




    CLEAR_ERRORS } from "../Constants/UserConstant"

//Login

export const UserReducer = (state = {user:{}}, action)=>{
   switch (action.type) {
       case LOGIN_REQUEST:
        case   REGISTER_USER_REQUEST:
           case LOAD_USER_REQUEST:
           return{
               loading:true,
               isAuthenticatedUser:false,
           }
           case LOGIN_SUCCESS:
           case REGISTER_USER_SUCCESS:
           case LOAD_USER_SUCCESS:

               return{
                   ...state,
                   loading:false,
                   isAuthenticatedUser:true,
                   user:action.payload,

               }
               case LOGOUT_SUCCESS:
                       return{
                           loading:false,
                           user:null,
                           isAuthenticatedUser:false
                       }
               case LOGIN_FAIL:
                case REGISTER_USER_FAIL:
                   return{
                       ...state,
                       loading:false,
                       isAuthenticatedUser:false,
                       user:null,
                       error:action.payload
                   }

                   case LOAD_USER_FAIL:
                       return{
                           loading:false,
                           isAuthenticatedUser:false,
                           user:null,
                           error:action.payload
                       }

                       case LOGOUT_FAIL:
                           return{
                               ...state, 
                               loading:false,                              
                               error:action.payload
                           }


                   case CLEAR_ERRORS:
                       return{
                           ...state,
                           error:null
                       }

       default:
         return state;
   }
 
   }




