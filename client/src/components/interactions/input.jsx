function Input({ label, id, type="text" }) {
  return (
    <label htmlFor={id} className="input-field">
      {label}:
      <input type={type} id={id} />
    </label>
  )
}

export default Input;