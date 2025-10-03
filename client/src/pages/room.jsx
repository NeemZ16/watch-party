function Room() {

  return (
    <div className='pg-wrapper'>
      <h1>room name</h1>
      <div className="call-container"></div>
      <div className="call-controls">
        <button>toggle mic</button>
        <button>toggle vid</button>
        <button>chat</button>
        <button>end call</button>
        <button>toggle share</button>
      </div>
    </div>
  )
}

export default Room
