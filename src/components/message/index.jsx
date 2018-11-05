/*
 对话消息列表组件
 */
import React, {Component} from 'react'
import {List, Badge} from 'antd-mobile'
import PropTypes from 'prop-types';
const Item = List.Item
const Brief = Item.Brief

class Message extends Component {
  static propTypes={
    chatList:PropTypes.object.isRequired,
    getChatMsgs:PropTypes.func.isRequired
  }
  //发送请求 获取数据
  componentDidMount(){
    this.props.getChatMsgs();
  }
  render() {
    return (
      <List>
        <Item
          extra={<Badge text={3}/>}
          thumb={require(`../../assets/imgs/头像1.png`)}
          arrow='horizontal'
        >
          你好
          <Brief>nr1</Brief>
        </Item>
        <Item
          extra={<Badge text={0}/>}
          thumb={require(`../../assets/imgs/头像2.png`)}
          arrow='horizontal'
        >
          你好2
          <Brief>nr2</Brief>
        </Item>
      </List>
    )
  }
}

export default Message
