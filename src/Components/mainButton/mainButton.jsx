function MainButton({ classes, content, img, ariaLabel }) {
  return (
    <button
      className={`btn w-100 py-3 mb-3 d-flex align-items-center justify-content-center ${classes}`}
      aria-label={ariaLabel}
    >
      {img}
      {content}
    </button>
  );
}

export default MainButton;
