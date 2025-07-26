import closeIcon from "../../assets/close.svg";
import "./modal.css";

function Modal({title, action, children, isOpen, close}) {
  if (!isOpen) {
    return null;
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h2>{title}</h2>
          <button title="close" className="delete" onClick={close}><img src={closeIcon} alt="close" /></button>
        </div>
        <div className="modal-content">
          {children}
        </div>
        <button title="submit" className="primary" onClick={action}>{title}</button>
      </div>
    </div>
  )
}

export default Modal;
