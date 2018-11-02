import React, {Component} from 'react';
import Logo from '../logo'
import {NavBar,List,InputItem,WingBlank,WhiteSpace,Button} from 'antd-mobile';
import {reqLogin} from '../../api'
// const Item = List.Item;
class Login extends Component {
  state={
    username: '',
    password: ''
  }
  handleChange=(name,val)=> {
    this.setState({
      [name]: val
    })
  }
  register=async()=>{
    //获取数据
    const {username,password}=this.state
    console.log(username,password);
    //发送ajax请求
    const data= await reqLogin({username,password});
    console.log(data);
  }
  gologin=()=>{
    this.props.history.replace('./register')
  }
  render () {
    return (
      <div>
        <NavBar>硅 谷 直 聘</NavBar>
        <Logo/>
        <WingBlank>
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
              <Button type="primary" onClick={this.register}>登录</Button>
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