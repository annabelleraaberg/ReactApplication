import { useState } from "react";

const ColorToggle = () => {
  const [backgroundColor, setBackgroundColor] = useState("white");
  const [textColor, setTextColor] = useState("black");

  const toggleBackgroundColor = () => {
    setBackgroundColor((prevColor) =>
      prevColor === "white" ? "#333333" : "white"
    );
    setTextColor((prevColor) => (prevColor === "black" ? "white" : "black"));
  };

  return (
    <div>
      <button className="btn btn-light" onClick={toggleBackgroundColor}>
        Toggle Background Color
      </button>
      <style>{`
        body {
          background-color: ${backgroundColor};
          transition: background-color 0.5s ease;
          color: ${textColor};
        }
      `}</style>
    </div>
  );
};

export default ColorToggle;
