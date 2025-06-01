/**
 * Home page of the app. Has create and join options  
 * which open auth modals if needed. Otherwise both  
 * options then lead to room page.
 */
function Login() {

  return (
    <div className='pg-wrapper'>
      <h1>login</h1>
      <a className='btn primary' href=''>create room</a>
      <button className='btn secondary'>join room</button>
    </div>
  )
}

export default Login
