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
import ReactDOM from "react-dom/client"

const heading = React.createElement("div", { id: "parent", key:1 }, [
  React.createElement(
    "div",
    { id: "child1", key:4 },
    React.createElement("h1", { id: "h1tag2", key:2  }, "THIS IS MY REACT H1")
  ),
  React.createElement(
    "div",
    { id: "child2", key: 5 },
    React.createElement("h1", { id: "h1tag", key:3  }, "THIS IS MY REACT H2")
  ),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
