import React from "react";

function RightArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        background: "white",
        color: "black",
        boxShadow: "2px 2px 12px black",
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "30px",
      }}
      onClick={onClick}
    />
  );
}

export default RightArrow;
