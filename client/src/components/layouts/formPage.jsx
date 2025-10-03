import closeIcon from "../../assets/close.svg";
import "./modal.css";

function FormPage({ title, children, action }) {
  return (
    <div className="modal">
      <div className="modal-header">
        <h2>{title}</h2>
      </div>
      <div className="modal-content">
        {children}
        <button type="submit" onClick={action}>{title}</button>
      </div>
    </div>
  )
}

export default FormPage;