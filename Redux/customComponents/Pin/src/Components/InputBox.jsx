import React from "react";
import PropTypes from "prop-types";
import { PinItems } from "./PinItems";

export const InputBox = ({ label, length, perBox, setValue }) => {
  const [pinValue, setPinValue] = React.useState(new Array(length).fill(""));
  const inputRefs = React.useRef([]);

  const handleChange = (e, index) => {
    const value = e.target.value;

    if (!/^[0-9]?$/.test(value)) return;

    const newArr = [...pinValue];
    newArr[index] = value;
    setPinValue(newArr);

    setValue(newArr.join(""));

    if (value && index < length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !pinValue[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <>
      <h2 style={{ textAlign: "center" }}>{label}</h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "12px",
        }}
      >
        {pinValue.map((val, i) => (
          <PinItems
            key={i}
            value={val}
            max={perBox}
            onChange={(e) => handleChange(e, i)}
            onKeyDown={(e) => handleKeyDown(e, i)}
            ref={(el) => (inputRefs.current[i] = el)}
          />
        ))}
      </div>
    </>
  );
};

InputBox.propTypes = {
  label: PropTypes.string.isRequired,
};

InputBox.defaultProps = {
  length: 4,
  perBox: 1,
};