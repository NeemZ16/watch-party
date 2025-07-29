import { useState } from "react";
import Modal from "../components/layouts/modal";
import Input from "../components/interactions/input";

function Register({isOpen, close}) {
  const [username, setUsername] = useState("");
  const [pwd, setPwd] = useState("");
  const [confPwd, setConfPwd] = useState("");

  function submit(e) {
    if (!username || !pwd || !confPwd) {
      e.preventDefault();
      return;
    }
    console.log("submit register clicked :)");
  }

  return (
    <Modal title="Register" isOpen={isOpen} close={close} action={submit}>
      <Input label="username" id="user"  value={username} onChange={e => setUsername(e.target.value)}/>
      <Input label="password" id="pwd" type="password" value={pwd} onChange={e => setPwd(e.target.value)}/>
      <Input label="confirm password" id="conf-pwd" type="password" value={confPwd} onChange={e => setConfPwd(e.target.value)}/>
    </Modal>
  )
}

export default Register;
