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
  render() {
    console.log('check props: ', this.props);
    return (<>
      <div>Hello from Home page!</div>
      <div><img src={DevLogo} style={{ width: '200px', height: '200px', marginTop: '20px' }} /></div>
    </>);
  }
}

const mapStateToProps = (state) => {
  return {
    reduxUsers: state.users
  }
}

// export default withRouter(Home);
export default connect(mapStateToProps)(Color(Home));
