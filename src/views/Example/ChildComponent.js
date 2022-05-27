import React from "react";

class ChildComponent extends React.Component {
  /*
  JSX
  React.Fragment
  <></>: fragment
  State: update data without reload page
  */
  state = {
    firstName='',
    lastName=''
  };

  handleChangeFirstName = (event) => {
    setState({
      firstName: event.target.value
    })
  }
  handleChangeLastName = (event) => {
    this.setState({
      lastName: event.target.value
    })
  }
  handleSubmit = () => {
    event.preventDefault();
    console.log('Value form: ', this.state)
  }

  render() {
    let name = "Torres";
    return (
      <>
        I am child {this.props.name}
      </>
    );``
  }
}
export default ChildComponent;
