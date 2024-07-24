function MainInput({
  type,
  holder,
  id,
  label,
  name,
  val,
  blur,
  change,
  classes,
  invalidMessage,
  isInvalid,
}) {
  return (
    <div class="form-floating mb-3">
      <input
        type={type}
        className={`form-control  ${classes}`}
        id={id}
        placeholder={holder}
        name={name}
        onChange={change}
        value={val}
        onBlur={blur}
        isInvalid={isInvalid}
      />
      {invalidMessage && (
        <div className={invalidMessage ? "invalid-feedback" : "valid-feedback"}>
          {invalidMessage}
        </div>
      )}
      <label htmlFor={id}>{label}</label>
    </div>
  );
}

export default MainInput;
