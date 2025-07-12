function Home() {

  const isLoggedIn = true;

  return (
    <div className='pg-wrapper'>
      <h1>Watch Party!</h1>
      {isLoggedIn ? (
        <div>
          <a className='btn primary' href='room'>create room</a>
          <button className='btn secondary'>join room</button>
        </div>
      ) : (
        <div>
          <a className='btn secondary' href='room'>login</a>
          <a className='btn secondary' href='room'>register</a>
          <button className='btn primary'>join room</button>
        </div>
      )}
    </div>
  )
}

export default Home
