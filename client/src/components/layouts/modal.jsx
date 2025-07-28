import closeIcon from "../../assets/close.svg";
import "./modal.css";
// TODO: differentiate between action (form) and info modals
// as of now only have form modals so info modal later
function Modal({title, action, children, isOpen, close}) {
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
        <form className="modal-content" onSubmit={action}>
          {children}
          <button type="submit" title="submit" className="primary">{title}</button>
        </form>
      </div>
    </div>
  )
}

export default Modal;
