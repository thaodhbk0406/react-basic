import React from "react";

// class ChildComponent extends React.Component {
//   render() {
//     let { name, arrJobs } = this.props;
//     let name = "Torres";
//     return (
//       <>
//         I am child {name}
//         {arrJobs.map((item, index) => {
//           return (
//             <div key={item.id}>
//               {item.title} - {item.salary}
//             </div>
//           );
//         })}
//       </>
//     );
//     ``;
//   }
// }

const ChildComponent = (props) => {
  let { name, arrJobs } = props;
  let name = "Torres";
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
};
export default ChildComponent;
