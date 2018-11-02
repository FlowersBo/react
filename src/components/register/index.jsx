import React, {Component} from 'react';
import Logo from '../logo';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom'
import {NavBar,List,InputItem,WingBlank,WhiteSpace,Radio,Button} from 'antd-mobile';
// import {reqRegister} from '../../api';
const Item = List.Item;
class Register extends Component {
  static propTypes={
    user : PropTypes.object.isRequired,
    register:PropTypes.func.isRequired
  }
  state={
    username: '',
    password: '',
    rePassword: '',
    type : 'laoban'
  }
  handleChange=(name,val)=> {
    this.setState({
      [name]: val
    })
  }
  register=async()=>{
    //获取数据
    const {username,password,rePassword,type}=this.state
    console.log(username,password,rePassword,type);
    //发送ajax请求
    this.props.register({username,password,rePassword,type})
  }
  goLogin=()=>{
    this.props.history.replace('./login')
  }
  render () {
    const {type} = this.state;
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
              <InputItem
                placeholder="请输入确认密码"
                type="password"
                onChange={val=>this.handleChange('rePassword',val)}
              >确认密码：
              </InputItem>
              <Item>
                用户类型：
                <Radio
                  className="my-radio"
                  checked={type === 'dashen'}
                  onClick={() => this.handleChange('type', 'dashen')}
                >大神</Radio> &nbsp;&nbsp;&nbsp;&nbsp;
                <Radio
                  className="my-radio"
                  checked={type === 'laoban'}
                  onClick={() => this.handleChange('type', 'laoban')}
                >老板</Radio>
              </Item>
              <WhiteSpace/>
              <Button type="primary" onClick={this.register}>注册</Button>
              <WhiteSpace/>
              <Button onClick={this.goLogin}>已有账户</Button>
            </List>
          </form>
        </WingBlank>
        
      </div>
    )
  }
}

export default Register;