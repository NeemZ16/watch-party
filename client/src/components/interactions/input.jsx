function Input({ label, id, type="text", value=null, onChange=null }) {
  return (
    <label htmlFor={id} className="input-field">
      {label}:
      <input type={type} id={id} value={value} onChange={onChange}/>
    </label>
  )
}

export default Input;