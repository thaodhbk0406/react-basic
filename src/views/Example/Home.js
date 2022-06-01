import React from "react";
// import { withRouter } from "react-router";
import Color from "../HOC/Color.js";

class Home extends React.Component {
  componentDidMount() {
    // setTimeout(() => {
    //     // Redirect to todos
    //     this.props.history.push('/todos');
    // }, 3000)
  }
  render() {
    return <div>Hello from Home page!</div>;
  }
}

// export default withRouter(Home);
export default Color(Home);
