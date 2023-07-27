import { useReducer } from "react";

const reducer = (state, action) => {
  return action["type"] && action["value"]
    ? { ...state, [action.type]: action.value }
    : state;
};

const ColorModel = () => {
  const [state, dispatch] = useReducer(reducer, {
    color: "black",
    subject: "red",
  });

  const setColor = (color) => {
    dispatch({ type: "color", value: color });
  };

  const setSubject = (subject) => {
    dispatch({ type: "subject", value: subject });
  };

  return { state, setColor, setSubject };
};

export default ColorModel;
