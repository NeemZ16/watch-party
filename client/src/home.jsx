import { useState } from "react";
import { Link } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import GuestJoin from "./pages/guestJoin";

function Home() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isOpenJoin, setOpenJoin] = useState(false);

  const toggleJoin = () => {
    setOpenJoin(!isOpenJoin)
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
          <Link to='login' className='btn secondary'>log in</Link>
          <Link to='register' className='btn secondary'>register</Link>
          <button className='btn primary' onClick={toggleJoin}>join room</button>
          <GuestJoin isOpen={isOpenJoin} close={toggleJoin}/>
        </div>
      )}
    </div>
  )
}

export default Home;
