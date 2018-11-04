/**
 * Created by Flowers博爵 on 2018/10/31.
 */
/*action creators 模块 用来创建工厂函数action*/
/*
同步返回action对象
 异步返回一个函数
*/

import {reqLogin,reqRegister,reqUpdateUserInfo,reqGetUserInfo ,reqGetUserList} from '../api';
import {ERR_MSG,AUTH_SUCCESS,UPDATE_USER,RESET_USER, UPDATE_USER_LIST, RESET_USER_LIST} from './action-types';
//同步action   注册成功   action-types有几个值，actions中就有几个同步action
export const authSuccess = user => ({type: AUTH_SUCCESS, data: user});

//同步action  注册失败
export const errMsg = msg => ({type: ERR_MSG, data: msg});

//同步action   更新数据成功   action-types有几个值，actions中就有几个同步action
export const updateUser = user => ({type: UPDATE_USER, data: user});

//同步action  更新数据失败
export const resetUser = msg => ({type: RESET_USER, data: msg});

//同步action  更新用户列表成功
export const updateUserList = userlist => ({type: UPDATE_USER_LIST, data: userlist});
//同步action  更新用户列表失败
export const resetUserList = msg => ({type: RESET_USER_LIST, data: msg});
//注册的异步的action
export const register = data => {
  //data 用户提交的请求参数
  //表单验证  同步方式
  const {username, password, rePassword, type} = data;
  if (!username) {
    return errMsg({username, password, msg: '请输入用户名'});
  } else if (!password) {
    return errMsg({username, password, msg: '请输入密码'});
  } else if (password !== rePassword) {
    return errMsg({username, password, msg: '两次密码输入不一致，请重新输入'});
  } else if (!type) {
    return errMsg({username, password, msg: '请选择账号类型'});
  }
  //异步的方法
  return dispatch => {
    //发送ajax
    reqRegister(data)
      .then(res => {
        //请求成功
        const result = res.data;
        if (result.code === 0) {
          //注册成功
          dispatch(authSuccess(result.data));  // result.data响应信息中的用户信息
        } else {
          //注册失败
          dispatch(errMsg({msg: result.msg, username: data.username, type: data.type}));
        }
      })
      .catch(err => {
        //请求失败
        //注册失败
        dispatch(errMsg({msg: '网络不稳定，请重新试试~', username: data.username, type: data.type}));
      })
  }
}

//登录的异步的action
export const login = data => {
  //data 用户提交的请求参数
  //表单验证  同步方式
  const {username, password} = data;
  if (!username) {
    return errMsg({username, password, msg: '请输入用户名'});
  } else if (!password) {
    return errMsg({username, password, msg: '请输入密码'});
  }
  //异步的方法
  return dispatch => {
    //发送ajax
    reqLogin(data)
      .then(res => {
        //请求成功
        const result = res.data;
        if (result.code === 0) {
          //登录成功
          dispatch(authSuccess(result.data));
        } else {
          //登录失败
          dispatch(errMsg({msg: result.msg}));
        }
      })
      .catch(err => {
        //请求失败
        dispatch(errMsg({msg: '网络不稳定，请重新试试~'}));
      })
  }
}

//更新用户数据
export const updateUserInfo = data => {
  //表单验证  同步方式
  const {header, post, company, salary, info,type} = data;
  if (!header) {
    return resetUser({msg: '请选择头像'});
  } else if (!post) {
    return resetUser({msg: type==='laoban'?'请输入招聘职位':'请输入应聘职位'});
  }else if (!info) {
    return resetUser({msg:type==='laoban'? '请输入公司简介':'请输入个人简介'});
  }
  if(type==='laoban'){
    if(!company){
      return resetUser({msg: '请输入公司名称'});
    }else if (!salary) {
      return resetUser({msg: '请输入薪资范围'});
    }
  }
    //异步的方法
    return dispatch => {
      //发送ajax
      reqUpdateUserInfo(data)
        .then(res => {
          //请求成功
          const result = res.data;
          if (result.code === 0) {
            //注册成功
            dispatch(updateUser(result.data));  // result.data响应信息中的用户信息
          } else {
            //注册失败
            dispatch(resetUser({msg: result.msg}));
          }
        })
        .catch(err => {
          //请求失败
          //注册失败
          dispatch(resetUser({msg: '网络不稳定，请重新试试~'}));
        })
    }
  }
  
//获取用户信息
export const getUserInfo=()=>{
  return dispatch=>{
    //发送ajax 请求
    reqGetUserInfo()
      .then(res=>{
        const result=res.data;
        if(result.code===0){//请求成功
        dispatch(updateUser(result.data))
        }else{//请求失败
         dispatch(resetUser({msg:result.msg}))
        }
      })
      .catch(err=>{
        dispatch(resetUser({msg:'网络不稳定，请重新试试~'}))
      })
  }
}

//获取用户列表
export const getUserList=type=>{
  return dispatch=>{
    reqGetUserList(type)
      .then(res=>{
      const result=res.data;
      if(result.code===0){
        dispatch(updateUserList(result.data))
      }else {
        dispatch(resetUserList({msg:result.msg}))
      }
      })
      .catch(err=>{
        dispatch(resetUserList({msg:'网络不稳定，请重新试试~'}))
      })
  }
}
/*
 修改步骤：
 1. actions / action-types
 2. reducers
 3. 容器组件
 4. 入口文件
 5. UI组件
 */