import React from "react";
import LeftNav from "./LeftNavigation";
import Content from "./Content";

class Main extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <LeftNav />
        <Content />
      </div>
    );
  }
}

export default Main;
