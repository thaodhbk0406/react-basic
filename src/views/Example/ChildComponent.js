import React from "react";

class ChildComponent extends React.Component {
  state = {
    showJobs: false,
  };

  handleShowHide = () => {
    this.setState({
      showJobs: !this.state.showJobs,
    });
  };

  render() {
    let { name, arrJobs } = this.props;
    let { showJobs } = this.state;
    return (
      <>
        I am child {name}
        {showJobs === false ? (
          <div>
            <button onClick={(event) => this.handleShowHide()}>Show</button>
          </div>
        ) : (
          <>
            <div className="job-lists">
              {arrJobs.map((item, index) => {
                return (
                  <div key={item.id}>
                    {item.title} - {item.salary}
                  </div>
                );
              })}
            </div>
            <div>
              <button onClick={(event) => this.handleShowHide()}>Hide</button>
            </div>
          </>
        )}
      </>
    );
  }
}

// const ChildComponent = (props) => {
//   let { name, arrJobs } = props;
//   return (
//     <>
//       I am {name}
//       {arrJobs.map((item, index) => {
//         if (item.salary >= 1200) {
//           return (
//             <div key={item.id}>
//               {item.title} - {item.salary} $
//             </div>
//           );
//         }
//       })}
//     </>
//   );
// };
export default ChildComponent;
