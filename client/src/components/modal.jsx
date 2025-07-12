function Modal(title, action, content, isOpen, close) {

  return (
    <div className='modal'>
      <div className="modal-header">
        <h2>{title}</h2>
        <button title="close">❌</button>
      </div>
      <div className="modal-cocntent">
        {content}
      </div>
    </div>
  )
}

export default Modal
