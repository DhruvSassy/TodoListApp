import React from "react";
import PropTypes from "prop-types";
import "./index.css";

const Input = (props) => {
  const { name, value, onChange, placeholder, type } = props;
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

Input.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
};

Input.defaultProps = {
  type: "text",
};

export default Input;
