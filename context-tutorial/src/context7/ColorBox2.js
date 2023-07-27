import React, { Component } from "react";
import ColorContext from "./ColorContext";

class ColorBox2 extends Component {
  render() {
    return (
      <ColorContext.Consumer>
        {({ state }) => (
          <>
            <div
              style={{ width: "64px", height: "64px", background: state.color }}
            />
            <div
              style={{
                width: "32px",
                height: "32px",
                background: state.subject,
              }}
            />
          </>
        )}
      </ColorContext.Consumer>
    );
  }
}

export default ColorBox2;
