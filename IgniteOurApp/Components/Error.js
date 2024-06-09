import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();

  // Custom styling for error message
  const errorStyle = {
    fontSize: "2rem",
    fontWeight: "bold",
    color: "#ff6347", // Tomato color
    textTransform: "uppercase",
    marginBottom: "20px",
  };

  // Custom styling for error details
  const detailStyle = {
    fontSize: "1.5rem",
    color: "#888",
    marginTop: "10px",
  };

  return (
    <div className="container text-center">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqI3lHFjBbLelg5rGnkZVukHUI2cd9cnEGOQ&s" // You can use your custom error image
        alt="Error"
        style={{ width: "300px", marginBottom: "30px" }}
      />
      <h1 style={errorStyle}>{error.data}</h1>
      <h3 style={detailStyle} className="text-info">
        Error {error.status}: {error.statusText}
      </h3>
    </div>
  );
};

export default Error;
