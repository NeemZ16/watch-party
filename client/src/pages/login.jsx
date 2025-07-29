import { useState } from "react";
import Modal from "../components/layouts/modal";
import Input from "../components/interactions/input";

function Login({ isOpen, close }) {
  const [username, setUsername] = useState("");
  const [pwd, setPwd] = useState("");

  function submit(e) {
    if (!username || !pwd || !confPwd) {
      e.preventDefault();
      return;
    }
    console.log("submit login clicked :)");
  }

  return (
    <Modal title="Log In" isOpen={isOpen} close={close} action={submit}>
        <Input label="username" id="user" value={username} onChange={e => setUsername(e.target.value)}/>
        <Input label="password" id="pwd" type="password" value={pwd} onChange={e => setPwd(e.target.value)}/>
    </Modal>
  )
}

export default Login;
