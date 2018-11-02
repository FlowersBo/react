import React, {Component} from 'react';
import {Button,NavBar,InputItem,TextareaItem} from 'antd-mobile';
import HeaderSelector from '../header-selector';
class DashenInfo extends Component {
  render () {
    return (
     <div>
       <NavBar>大神信息完善界面</NavBar>
       <HeaderSelector/>
       <InputItem>求职岗位：</InputItem>
       <TextareaItem title="个人介绍：" rows={4}></TextareaItem>
       <Button type="primary">保存</Button>
     </div>
    )
  }
}

export default DashenInfo;