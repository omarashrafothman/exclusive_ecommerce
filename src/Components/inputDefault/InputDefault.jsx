function InputDefault({ type, holder, label, id, required }) {
  return (
    <div class="form-group mb-3">
      <label htmlFor={id} className=" text-secondary d-flex mb-2">
        {label}
        {required ? <p className="text-danger ms-1 m-0">*</p> : ""}
      </label>
      <input
        type={type}
        className="form-control"
        id={id}
        placeholder={holder}
      />
      {/**    <small id="emailHelp" class="form-text text-muted">
        We'll never share your email with anyone else.
      </small> */}
    </div>
  );
}

export default InputDefault;
