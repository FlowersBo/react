import React, {Component} from 'react';
import {Route,Switch,Redirect} from 'react-router-dom';
import Cookies  from 'js-cookie';
import {NavBar} from 'antd-mobile';
import PropTypes from 'prop-types';
import {getRedirectPath} from '../../utils';

import DashenInfo from '../../containers/dashen-info';
import LaobanInfo from '../../containers/laoban-info';
import Laoban from '../../containers/laoban';
import Dashen from '../../containers/dashen';
import Message from '../../containers/message';
import Personal from '../../containers/personal';
import NavFooter from  '../nav-footer';
import Chat from  '../../containers/chat';
class Main extends Component {
  static propTypes={
    user:PropTypes.object.isRequired,
    getUserInfo:PropTypes.func.isRequired
  }
  navList = [
    {
      path: '/laoban', // 路由路径
      component: Laoban,
      title: '大神列表',
      icon: 'dashen',
      text: '大神',
    },
    {
      path: '/dashen', // 路由路径
      component: Dashen,
      title: '老板列表',
      icon: 'laoban',
      text: '老板',
    },
    {
      path: '/message', // 路由路径
      component: Message,
      title: '消息列表',
      icon: 'message',
      text: '消息',
    },
    {
      path: '/personal', // 路由路径
      component: Personal,
      title: '用户中心',
      icon: 'personal',
      text: '个人',
    }
  ]
  
  render () {
    //获取Cookies
    const userid=Cookies.get('userid');
    //本地没有Cookies
    if(!userid){
      return <Redirect to='/login'/>
    }
    //本地有Cookies
    const {user}=this.props;
    if(!user._id){
      this.props.getUserInfo();
      return <div>loading...</div>
    }
    //本地有Cookies,并且redux有数据，直接使用
    //获取当前路由路径
    const {pathname}=this.props.location;
    if(pathname==='/'){
      return <Redirect to={getRedirectPath(user.type,user.header)}/>
    }
    
    //如果当前页面为老板就显示是大神图标
    const {navList}=this;
    if(user.type==='laoban'){
      navList[1].hide=true;
    }else{
      navList[0].hide=true;
    }
   
    //当前路径对应显示的的nav对象
    const currentNav=navList.find(nav=>pathname===nav.path);
    return (
      <div>
        {currentNav?<NavBar>{currentNav.title}</NavBar>:''}
        <Switch>
          <Route path='/dashenInfo' component={DashenInfo}/>
          <Route path='/laobanInfo' component={LaobanInfo}/>
          <Route path='/laoban' component={Laoban}/>
          <Route path='/dashen' component={Dashen}/>
          <Route path='/message' component={Message}/>
          <Route path='/personal' component={Personal}/>
          <Route path='/chat/:userid' component={Chat}/>
        </Switch>
        {currentNav?<NavFooter navList={navList}/>:''}
      </div>
      
    )
  }
}

export default Main;