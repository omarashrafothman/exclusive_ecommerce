import React from "react";

function MainButton({ classes, content, img }) {
  return (
    <button
      className={`btn w-100 py-3 mb-3 d-flex align-items-center justify-content-center ${classes}`}
    >
      {img}
      {content}
    </button>
  );
}

export default MainButton;
