import React from "react";

export const PinItems = React.forwardRef(
  ({ value, max, onChange, onKeyDown }, ref) => {
    return (
      <input
        ref={ref}
        value={value}
        type="text"
        maxLength={max}
        onChange={onChange}
        onKeyDown={onKeyDown}
        style={{
          width: "45px",
          height: "45px",
          textAlign: "center",
          fontSize: "20px",
          border: "2px solid gray",
          borderRadius: "6px",
          outline: "none",
        }}
        onFocus={(e) => (e.target.style.border = "2px solid blue")}
        onBlur={(e) => (e.target.style.border = "2px solid gray")}
      />
    );
  }
);