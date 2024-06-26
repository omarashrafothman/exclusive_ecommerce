function MainInput({ type, holder, id, label, name }) {
  return (
    <div class="form-floating mb-3">
      <input
        type={type}
        className="form-control"
        id={id}
        placeholder={holder}
        name={name}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}

export default MainInput;
