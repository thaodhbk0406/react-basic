import React from "react";
// import { withRouter } from "react-router";
import Color from "../HOC/Color.js";
import DevLogo from '../../assets/images/DevLogo.jpg';
import { connect } from 'react-redux'

class Home extends React.Component {
  componentDidMount() {
    // setTimeout(() => {
    //     // Redirect to todos
    //     this.props.history.push('/todos');
    // }, 3000)
  }

  handleDeleteUser = (user) => {
    this.props.deleteReduxUser(user);
  }

  handleCreateNewUser = () => {
    this.props.createNewUser();
  }
  render() {

    let reduxUsers = this.props.reduxUsers;
    console.log('check props: ', reduxUsers);
    return (<>
      <div>Hello from Home page!</div>
      <div><img src={DevLogo} style={{ width: '200px', height: '200px', marginTop: '20px' }} alt={DevLogo} /></div>
      <div>
        {reduxUsers && reduxUsers.length > 0 &&
          reduxUsers.map((user, index) => {
            return (
              <div key={user.id}>{index + 1} - {user.name} <button onClick={() => this.handleDeleteUser(user)}>Delete</button></div>
            )
          })
        }
      </div>
      <div><button onClick={() => this.handleCreateNewUser()}>Create new User</button></div>
    </>);
  }
}

const mapStateToProps = (state) => {
  return {
    reduxUsers: state.users
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteReduxUser: (userDelete) => dispatch({
      type: 'USER_DELETE', payload: userDelete,
    }),
    createNewUser: () => dispatch({
      type: 'CREATE_USER',
    })
  }
}

// export default withRouter(Home);
export default connect(mapStateToProps, mapDispatchToProps)(Color(Home));
