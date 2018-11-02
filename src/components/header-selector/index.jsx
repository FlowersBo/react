import React, {Component} from 'react';
import {Grid,List} from 'antd-mobile';
class HeaderSelector extends Component {
  render () {
    const data = Array.from(new Array(20)).map((item,index) => ({
      icon: require(`./avatars/头像${index+1}.png`),
      text: `头像${index+1}`,
    }));
    return (
      <List renderHeader={() => '请选择头像：'}>
      <Grid data={data} columnNum={5} />
      </List>
    )
  }
}

export default HeaderSelector;