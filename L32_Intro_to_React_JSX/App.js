// {
//   /*
// <div id parent>
//     div id child
//         h1 id heading1  THIS IS HEADING 1 /h1
//     /div
// </div>
// */
// }

// const heading = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child" },
//     React.createElement("h1", { id: "h1tag" }, "THIS IS MY REACT H1")
//   )
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

{
  /* 
<div id parent>
    div id child1
        h1 id heading1  THIS IS HEADING 1 /h1
    /div
    div id child2
        h1 id heading1  THIS IS HEADING 1 /h1
    /div

</div> 
*/
}

import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement(
//   "div",
//   { id: "parent", key: 1 },
//   React.createElement("div", { id: "child", key: 2 }, [
//     React.createElement("h1", { key: 3 }, "THIS IS H1 of CHILD"),
//     React.createElement("h2", { key: 4 }, "THIS IS H2 of CHILD"),
//   ])
// );

// console.log(heading);

// const jsxHeading1 = <h1>THIS IS MY JSX ELEMENT</h1>;

// const jsxHeading2 = (
//   <div>
//     <h1>THIS IS MY JSX ELEMENT</h1>
//     {/* {jsxHeading3} */}
//   </div>
// );

// const jsxHeading3 = <h1>THIS IS MY JSX ELEMENT</h1>;

// const students = 78;

// const HeaderComponent = () => {
//   return (
//     <div>
//       <h1> THIS IS MY HEADER COMPONENT DIV</h1>
//       <HeaderComponent2/>
//       {jsxHeading2}

//     </div>
//   );
// };

// const HeaderComponent2 = () => {
//   return (
//     <div>
//       <h1> THIS IS MY HEADER COMPONENT 2 DIV</h1>
//     </div>
//   );
// };

// console.log(jsxHeading1);
// console.log(HeaderComponent);



// FUNCTIONAL COMPONENT

const HeaderComponent = () => {
  return <div>
    <h1> THIS IS HEADER COMPONENT</h1>
    <h1> THIS IS HEADER COMPONENT</h1>
    <h1> THIS IS HEADER COMPONENT</h1>
    <h1> THIS IS HEADER COMPONENT</h1>
  </div>
}

const FooterComponent = () => (
  <div>
    <h1> THIS IS FOOTER COMPONENNT</h1>
    <h1> THIS IS FOOTER COMPONENNT</h1>
    <h1> THIS IS FOOTER COMPONENNT</h1>
    <HeaderComponent></HeaderComponent>
  </div>
)


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<FooterComponent/>);
