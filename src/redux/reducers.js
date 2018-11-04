/**
 * Created by Flowers博爵 on 2018/10/31.
 */
/*
 reducers函数： 根据之前的状态和action来产生新的状态
 */
import {combineReducers} from 'redux';
import {AUTH_SUCCESS,ERR_MSG,UPDATE_USER,RESET_USER, UPDATE_USER_LIST, RESET_USER_LIST} from './action-types';
import {getRedirectPath} from '../utils';
const initUserState={
  username:'',
  type:'',
  mag:'',
  redirectTo:''
}
function user(preState=initUserState,action) {
    switch (action.type){
      case AUTH_SUCCESS:
        return {...action.data,msg:'',redirectTo: getRedirectPath(action.data.type,action.data.header)};
      case ERR_MSG:
        return action.data;
      case UPDATE_USER:
        return action.data;
      case RESET_USER:
        return action.data;
      default :
        return preState
    }
}

const initUserList=[];
function userList(preState=initUserList,action) {
  switch (action.type){
    case UPDATE_USER_LIST:
      return action.data;
    case RESET_USER_LIST:
      return action.data;
    default:
      return preState;
  }
}
export default combineReducers({
  user,
  userList
})