import React from "react";
// import { withRouter } from "react-router";
import Color from "../HOC/Color.js";
import DevLogo from '../../assets/images/DevLogo.jpg';

class Home extends React.Component {
  componentDidMount() {
    // setTimeout(() => {
    //     // Redirect to todos
    //     this.props.history.push('/todos');
    // }, 3000)
  }
  render() {
    return (<>
      <div>Hello from Home page!</div>
      <div><img src={DevLogo} style={{ width: '200px', height: '200px', marginTop: '20px' }} /></div>
    </>);
  }
}

// export default withRouter(Home);
export default Color(Home);
