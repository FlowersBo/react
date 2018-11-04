import React, {Component} from 'react';
import Logo from '../logo';
import {Redirect} from 'react-router-dom';
import {NavBar,List,InputItem,WingBlank,WhiteSpace,Button} from 'antd-mobile';
import PropTypes from 'prop-types';
// import {reqLogin} from '../../api'
// const Item = List.Item;
class Login extends Component {
 static propTypes={
   user:PropTypes.object.isRequired,
   login:PropTypes.func.isRequired
 }
  state={
    username: '',
    password: ''
  }
  handleChange=(name,val)=> {
    this.setState({
      [name]: val
    })
  }
  login=async()=>{
    //获取数据
    // const {username,password}=this.state
    //发送ajax请求
    this.props.login(this.state)
  }
  gologin=()=>{
    this.props.history.replace('./register')
  }
  render () {
    const {msg,redirectTo}=this.props.user;
    if(redirectTo){
      //路由链接跳转
      return <Redirect to={redirectTo}/>
    }
    return (
      <div>
        <NavBar>硅 谷 直 聘</NavBar>
        <Logo/>
        <WingBlank>
          {msg ?<p className="err-msg">{msg}</p>:''}
          <form>
            <List>
              <WhiteSpace/>
              <InputItem
                placeholder="请输入用户名"
                onChange={val=>this.handleChange('username',val)}
              >用户名：
              </InputItem>
              <WhiteSpace/>
              <InputItem
                placeholder="请输入密码"
                type="password"
                onChange={val=>this.handleChange('password',val)}
              >密码：
              </InputItem>
              <WhiteSpace/>
              <WhiteSpace/>
              <Button type="primary" onClick={this.login}>登录</Button>
              <WhiteSpace/>
              <Button onClick={this.gologin}>还没有账户</Button>
            </List>
          </form>
        </WingBlank>
      </div>
    )
  }
}
export default Login;