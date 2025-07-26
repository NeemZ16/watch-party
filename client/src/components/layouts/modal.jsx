import closeIcon from "../../assets/close.svg";

function Modal({title, action, children, isOpen, close}) {
  if (!isOpen) {
    console.log("is open false", isOpen);
    return null;
  };

  return (
    <div className='modal'>
      <div className="modal-header">
        <h2>{title}</h2>
        <button title="close" onClick={close}><img src={closeIcon} alt="close" /></button>
      </div>
      <div className="modal-content">
        {children}
      </div>
      <button title="submit" onClick={action}>{title}</button>
    </div>
  )
}

export default Modal;
