import { render } from "@testing-library/react";
import ReactDOM from "react-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

const style = {
  color: "yellow",
  fontSize: "20px",
};
render(<p style={style}>Hello!</p>);
// render(<p style={{style}}>Hello!</p>); 이렇게 괄호 2개해서 써도 된다.
``;
