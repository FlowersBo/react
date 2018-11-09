import React, {Component} from 'react';
import UserList from '../../containers/user-list';
import PropTypes from 'prop-types';
class Laoaban extends Component {
  static propTypes={
    userList:PropTypes.array.isRequired,
    getUserList:PropTypes.func.isRequired
  }
  componentDidMount(){
    this.props.getUserList('dashen');
  }
  render () {
    const {userList}=this.props;
    return (
      <div>
        {
          userList.map((item, index) => <UserList key={index} item={item} />)
        }
      </div>
    )
  }
}

export default Laoaban;