function Home() {

  const AcctBtns = () => {
    let loggedIn = false;
    if (loggedIn) {
      return (
        <>
          <button className='btn primary'>create room</button>
          <button className='btn secondary'>join room</button>
        </>
      )
    }

    return (
      <>
        <button className='btn secondary'>login</button>
        <button className='btn secondary'>register</button>
        <button className='btn secondary'>join room</button>
      </>
    )
  }

  return (
    <div className='pg-wrapper'>
      <h1>Watch Party!</h1>
      <AcctBtns/>
    </div>
  )
}

export default Home
