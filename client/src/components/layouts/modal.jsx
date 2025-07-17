import closeIcon from "../../assets/close.svg";

function Modal(title, action, content, isOpen, close) {
  if (!isOpen) return null;

  return (
    <div className='modal'>
      <div className="modal-header">
        <h2>{title}</h2>
        <button title="close" onClick={close}>{closeIcon}</button>
      </div>
      <div className="modal-content">
        {content}
      </div>
      <button title="submit" onClick={close}>{title}</button>
    </div>
  )
}

export default Modal;
