import React from "react";

class MyComponent extends React.Component {
  /*
  JSX
  React.Fragment
  <></>: fragment
  State: update data without reload page
  */
  state = {
    name: "Torres",
    role: "FullStack JS",
  };

  handleChangeState = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleClickButton = () => {
    alert("Pls, click me");
  };

  render() {
    let name = "Torres";
    return (
      <>
        <div className="first">
          <input
            value={this.state.name}
            type="text"
            onChange={(event) => this.handleChangeState(event)}
          ></input>
          {console.log(name)}
          Hello My Component from {this.state.name}
        </div>
        <div className="second">My role in project is {this.state.role}</div>
        <div className="third">
          <button onClick={() => this.handleClickButton()}>Click Me</button>
        </div>
      </>
    );
  }
}
export default MyComponent;
