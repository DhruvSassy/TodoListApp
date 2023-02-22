import React from "react";
import PropTypes from "prop-types";

import "./index.css";

const Button = (props) => {
  const { onClick } = props;

  return (
    <div>
      <button onClick={onClick}>Add</button>
    </div>
  );
};
Button.prototype = {
  onClick: PropTypes.func,
};

Button.defaultProps = {
  onClick: () => {},
};
export default Button;
