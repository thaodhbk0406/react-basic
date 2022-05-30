import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";

class MyComponent extends React.Component {
  /*
  JSX
  React.Fragment
  <></>: fragment
  State: update data without reload page
  */
  state = {
    arrJobs: [
      { id: "acb1", title: "Developer", salary: "1200" },
      { id: "acb2", title: "Tester", salary: "1000" },
      { id: "acb3", title: "Architect", salary: "1500" },
    ],
  };

  addNewJob = (job) => {
    console.log(">>> Check new job from child: ", job);
    this.setState({
      arrJobs: [...this.state.arrJobs, job],
    });
  };

  render() {
    return (
      <>
        <AddComponent addNewJob={this.addNewJob} />
        <ChildComponent name={"child Component"} arrJobs={this.state.arrJobs} />
      </>
    );
  }
}
export default MyComponent;
