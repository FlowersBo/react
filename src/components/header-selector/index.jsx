import React, {Component} from 'react';
import {Grid,List} from 'antd-mobile';
import PropTypes from 'prop-types';
class HeaderSelector extends Component {
 static propTypes={
    setHeader:PropTypes.func.isRequired
  }
  state={
    icon:null
  }
  handleClick=({icon,text})=>{
  this.setState({
    icon
  })
    this.props.setHeader(text)
  }
  render () {
    const {icon}=this.state;
    const headerUI=icon ? <div>已选头像<img src={icon}/></div>:'请选择头像';
    const data = Array.from(new Array(20)).map((item,index) => ({
      icon: require(`../../assets/imgs/头像${index+1}.png`),
      text: `头像${index+1}`,
    }));
    
    return (
      <List renderHeader={() => headerUI}>
      <Grid data={data} columnNum={5} onClick={this.handleClick}/>
      </List>
    )
  }
}

export default HeaderSelector;