import React from "react";

const Details = ({ details, setDetails }) => {
  return (
    <div>
      <h1>{details.title}</h1>
      <p>{details.description}</p>
      <button
        onClick={() =>
          setDetails((prev) => {
            return { ...prev, title: "New title" };
          })
        }
      >
        {details.btnText}
      </button>
    </div>
  );
};

export default Details;
