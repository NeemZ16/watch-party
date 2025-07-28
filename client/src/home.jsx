import { useState } from "react";
import Login from "./pages/login";
import Register from "./pages/register";
import GuestJoin from "./pages/guestJoin";

function Home() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isOpenLogin, setOpenLogin] = useState(false);
  const [isOpenRegister, setOpenRegister] = useState(false);
  const [isOpenJoin, setOpenJoin] = useState(false);

  const closeLogin = () => {
    setOpenLogin(false);
  }

  const closeRegister = () => {
    setOpenRegister(false);
  }

  const closeJoin = () => {
    setOpenJoin(false);
  }

  const openLogin = () => {
    setOpenLogin(true);
    setOpenRegister(false);
    setOpenJoin(false);
  }

  const openRegister = () => {
    setOpenRegister(true);
    setOpenLogin(false);
    setOpenJoin(false);
  }

  const openJoin = () => {
    setOpenJoin(true);
    setOpenRegister(false);
    setOpenLogin(false);
  }

  return (
    <div className='pg-wrapper'>
      <h1>Watch Party!</h1>
      {isLoggedIn ? (
        <div className="stack">
          <button className='btn secondary'>create room</button>
          <button className='btn primary'>join room</button>
        </div>
      ) : (
        <div className="stack">
          <button className='btn secondary' onClick={openLogin}>log in</button>
          <button className='btn secondary' onClick={openRegister}>register</button>
          <button className='btn primary' onClick={openJoin}>join room</button>
          <Login isOpen={isOpenLogin} close={closeLogin} />
          <Register isOpen={isOpenRegister} close={closeRegister} />
          <GuestJoin isOpen={isOpenJoin} close={closeJoin}/>
        </div>
      )}
    </div>
  )
}

export default Home;
