import React from "react";
import addOnPlus from "../icons/addonPlus.png";
import { findByLabelText } from "@testing-library/react";

class Content extends React.Component {
  render() {
    return (
      <div className="ContentDiv">
        <div className="firstRow">
          <div className="firstColumn">
            <div
              style={{
                width: "fit-content",
                margin: "auto"
              }}
            >
              <h3 className="addOnsh3">Cardio</h3>
              <p style={{ textAlign: "center" }}>
                <img
                  src={addOnPlus}
                  style={{
                    width: 50,
                    height: 50,
                    margin: "auto",
                    cursor: "pointer"
                  }}
                />
              </p>
            </div>
          </div>
          <div className="secondColumn">
            <div style={{ width: "fit-content", margin: "auto" }}>
              <h3 className="addOnsh3">Resistance</h3>
              <p style={{ textAlign: "center" }}>
                <img
                  src={addOnPlus}
                  style={{
                    width: 50,
                    height: 50,
                    margin: "auto",
                    cursor: "pointer"
                  }}
                />
              </p>
            </div>
          </div>
          <div className="thirdColumn">
            <div style={{ width: "fit-content", margin: "auto" }}>
              <h3 className="addOnsh3">Yoga</h3>
              <p style={{ textAlign: "center" }}>
                <img
                  src={addOnPlus}
                  style={{
                    width: 50,
                    height: 50,
                    margin: "auto",
                    cursor: "pointer"
                  }}
                />
              </p>
            </div>
          </div>
        </div>
        <div className="SecondRow"></div>
        <div className="thirdRow">
          <div className="firstColumn rowNoBG"></div>
          <div className="secondColumn rowNoBG"></div>
          <div className="thirdColumn rowNoBG"></div>
        </div>
      </div>
    );
  }
}

export default Content;
