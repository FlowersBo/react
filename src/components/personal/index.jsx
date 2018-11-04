import React from 'react'
import {Result, List, WhiteSpace, Button,Modal} from 'antd-mobile';
import PropTypes from 'prop-types';
import Cookie from 'js-cookie';
const Item = List.Item
const Brief = Item.Brief
const alert = Modal.alert;
export default class Personal extends React.Component {
  static propTypes={
    user:PropTypes.object.isRequired
  }
  logout=()=>{
    alert('退出登录', '你确定退出登录吗?', [
      { text: '取消'},
      { text: '确认', onPress: () => {
        //清除Cookie
        Cookie.remove('userid');
        //跳转到登录页面
        this.props.history.replace('/login');
      } },
    ])
  }
  render() {
    const {user}=this.props;
    return (
      <div>
        <Result
          img={<img src={require(`../../assets/imgs/${user.header}.png`)} style={{width: 50}} alt="header"/>}
          title={user.username}
          message={user.company}
        />
        
        <List renderHeader={() => '相关信息'}>
          <Item multipleLine>
            <Brief>职位: {user.post}</Brief>
            <Brief>简介: {user.info}</Brief>
            {user.salary?<Brief>薪资: {user.salary}</Brief>:null}
          </Item>
        </List>
        <WhiteSpace/>
        <List>
          <Button type='warning' onClick={this.logout}>退出登录</Button>
        </List>
      </div>
    )
  }
}
