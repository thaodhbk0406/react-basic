import React from "react";

class ChildComponent extends React.Component {
  render() {
    let { name, arrJobs } = this.props;
    return (
      <>
        I am child {name}
        {arrJobs.map((item, index) => {
          return (
            <div key={item.id}>
              {item.title} - {item.salary}
            </div>
          );
        })}
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
