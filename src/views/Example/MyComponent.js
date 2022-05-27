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
    lastName='',
    arrJobs=[{id:'acb1', title: 'Developer', salary: '1200 $'},
    {id:'acb2', title: 'Tester', salary: '1000 $'},
    {id:'acb3', title: 'Architect', salary: '1500 $'},
  ]
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

        <ChildComponent name={'child one'} arrJobs={this.state.arrJobs} />

      </>
    );``
  }
}
export default MyComponent;
