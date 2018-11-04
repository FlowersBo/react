import React, {Component} from 'react';
import {NavBar,Button,InputItem,TextareaItem} from 'antd-mobile';
import HeaderSelector from '../header-selector';
import PropTypes from 'prop-types';
class LaobanInfo extends Component {
  static propTypes={
    user:PropTypes.object.isRequired,
    updateUserInfo:PropTypes.func.isRequired
  }
    state = {
      header: '', // 头像名称
      info: '', // 职位简介
      post: '', // 职位名称
      company: '', // 公司名称
      salary: '' // 工资
    }
  handleChange=(name ,val)=>{
      this.setState({
        [name]:val
      })
  }
  handleClick=()=>{
  this.props.updateUserInfo({...this.state,type:'laoban'})
  }
  setHeader=header=>{
    this.setState({
    header
    })
  }
  render () {
    const {msg}=this.props.user;
    return (
    <div>
      <NavBar>老板信息完善</NavBar>
      <HeaderSelector setHeader={this.setHeader}/>
      {msg? <p className="err-msg">{msg}</p>:''}
      <InputItem onChange={val=>this.handleChange('post',val)}>招聘职位：</InputItem>
      <InputItem onChange={val=>this.handleChange('company',val)}>公司名称：</InputItem>
      <InputItem onChange={val=>this.handleChange('salary',val)}>职位薪资：</InputItem>
      <TextareaItem title="职位要求:" rows={3} onChange={val=>this.handleChange('info',val)}/>
      <Button type="primary" onClick={this.handleClick}>保存</Button>
    </div>
    )
  }
}

export default LaobanInfo;