import closeIcon from "../../assets/close.svg";
import "./modal.css";

function Modal({title, children, isOpen, close}) {
  if (!isOpen) {
    return null;
  };

  return (
    <div className="modal-overlay" onClick={close}>
      <div className="modal" onClick={(e) => {e.stopPropagation()}}>
        <div className="modal-header">
          <h2>{title}</h2>
          <button title="close" className="delete" onClick={close}><img src={closeIcon} alt="close" /></button>
        </div>
        <div className="modal-content">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Modal;
