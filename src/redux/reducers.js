/**
 * Created by Flowers博爵 on 2018/10/31.
 */
/*
 reducers函数： 根据之前的状态和action来产生新的状态
 */
import Cookise from 'js-cookie';
import {combineReducers} from 'redux';
import {AUTH_SUCCESS,ERR_MSG,UPDATE_USER,RESET_USER, UPDATE_USER_LIST, RESET_USER_LIST, UPDATE_CHAT_MSGS, RESET_CHAT_MSGS, UPDATE_CHAT_LIST,UPDATE_UNREADCOUNT, RESET_CUNREADCOUNT} from './action-types';
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

const initChatListState = {
  chatMsgs: [],
  users: {},
  unReadCount:0
};
function chatList(preState = initChatListState, action) {
  switch (action.type) {
    case UPDATE_CHAT_MSGS :
      const userid=Cookise.get('userid');
      return {
        ...action.data,
        unReadCount:action.data.chatMsgs.reduce((prev,curr)=>{
          return prev+(!curr.read&&curr.to===userid?1:0);
        },0)
      };
      
    case RESET_CHAT_MSGS :
      return action.data;
    case UPDATE_CHAT_LIST :
      return {
        chatMsgs:[...preState.chatMsgs,action.data],
        users:preState.users
      }
    case UPDATE_UNREADCOUNT :
      var userid = Cookise.get('userid');
      return {
        chatMsgs: preState.chatMsgs.map(chatMsg => {
          if (chatMsg.from === action.data.from && chatMsg.to === userid && !chatMsg.read) {
            return {...chatMsg, read: true}
          } else {
            return chatMsg;
          }
        }),
        users: preState.users,
        unReadCount: preState.unReadCount - action.data.count
      }
    default :
      return preState;
  }
}

export default combineReducers({
  user,
  userList,
  chatList
})