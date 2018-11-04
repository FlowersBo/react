import React, {Component} from 'react';
import {Button,NavBar,InputItem,TextareaItem} from 'antd-mobile';
import HeaderSelector from '../header-selector';
import PropTypes from 'prop-types';
class DashenInfo extends Component {
  static propTypes={
    user:PropTypes.object.isRequired,
    updateUserInfo:PropTypes.func.isRequired
  }
  state = {
    header: '', // 头像名称
    post: '', // 求职岗位
    info: '' // 个人简介
  }
  
  handleChange = (name, val) => {
    this.setState({
      [name]: val
    })
  }
  
  setHeader = (header) => {
    this.setState({
      header
    })
  }
  handleClick=()=>{
  this.props.updateUserInfo(this.state);
  }
  render () {
    const {msg}=this.props.user;
    return (
     <div>
       <NavBar>大神信息完善界面</NavBar>
       <HeaderSelector setHeader={this.setHeader}/>
       {msg?<p className="err-msg">{msg}</p>:''};
       <InputItem onChange={val=>this.handleChange('post',val)}>求职岗位：</InputItem>
       <TextareaItem title="个人介绍：" rows={4} onChange={val=>this.handleChange('info',val)}/>
       <Button type="primary" onClick={this.handleClick}>保存</Button>
     </div>
    )
  }
}

export default DashenInfo;