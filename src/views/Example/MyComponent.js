import React from "react";
import ChildComponent from "ChildComponent.js" 

class MyComponent extends React.Component {
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
        <form>
          <label htmlFor="fname">First name:</label>
          <br />
          <input type="text" value={this.state.firstName} onChange={(event) => this.handleChangeFirstName(event)} />
          <br />
          <label htmlFor="lname">Last name:</label>
          <br />
          <input type="text" value={this.state.lastName} onChange={(event) => this.handleChangeLastName(event)} />
          <br />
          <br />
          <input type="submit" onClick={(event) => {this.handleSubmit(event)}} />
        </form>

        <ChildComponent name={'child one'} />
        <ChildComponent name={'child two'} />
        <ChildComponent name={'child three'} />

      </>
    );``
  }
}
export default MyComponent;
