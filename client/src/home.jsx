import { useState } from "react";
import Login from "./pages/login";
import Register from "./pages/register";

function Home() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isOpenLogin, setOpenLogin] = useState(false);
  const [isOpenRegister, setOpenRegister] = useState(false);

  const closeLogin = () => {
    setOpenLogin(false);
  }

  const closeRegister = () => {
    setOpenRegister(false);
  }

  const openLogin = () => {
    setOpenLogin(true);
    setOpenRegister(false);
  }

  const openRegister = () => {
    setOpenRegister(true);
    setOpenLogin(false);
  }

  return (
    <div className='pg-wrapper'>
      <h1>Watch Party!</h1>
      {isLoggedIn ? (
        <div className="stack">
          <button className='btn primary'>create room</button>
          <button className='btn secondary'>join room</button>
        </div>
      ) : (
        <div className="stack">
          <button className='btn secondary' onClick={openLogin}>login</button>
          <button className='btn secondary' onClick={openRegister}>register</button>
          <button className='btn secondary'>join room</button>
          <Login isOpen={isOpenLogin} close={closeLogin} />
          <Register isOpen={isOpenRegister} close={closeRegister} />
        </div>
      )}
    </div>
  )
}

export default Home;
