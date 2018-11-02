import React, {Component} from 'react';
import './logo.less';
import logo from './logo.png';
class Logo extends Component {
  render () {
    return (
      <div className="logos">
        <img className="logo" src={logo} alt=""/>
      </div>
    )
  }
}

export default Logo;