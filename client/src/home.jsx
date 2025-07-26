import { useState } from "react";
import Login from "./pages/login";

function Home() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isOpenLogin, setOpenLogin] = useState(false);

  const closeLogin = () => {
    console.log("close clicked", isOpenLogin);
    setOpenLogin(!isOpenLogin);
  }

  return (
    <div className='pg-wrapper'>
      <h1>Watch Party!</h1>
      {isLoggedIn ? (
        <button className='btn primary'>create room</button>
      ):(
        <div>
          <button className='btn secondary' onClick={() => setOpenLogin(true)}>login</button>
          <button className='btn secondary'>register</button>
        </div>
      )}
      <button className='btn secondary'>join room</button>
      <Login isOpen={isOpenLogin} close={closeLogin}/>
    </div>
  )
}

export default Home;
