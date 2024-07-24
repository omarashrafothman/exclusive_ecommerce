function MainButton({ classes, content, img, ariaLabel, type, disable }) {
  return (
    <button
      className={`btn w-100 py-3 mb-3 d-flex align-items-center justify-content-center ${classes}`}
      aria-label={ariaLabel}
      type={type}
      disabled={disable}
    >
      {img}
      {content}
    </button>
  );
}

export default MainButton;
