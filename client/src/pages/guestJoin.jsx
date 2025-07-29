import { useState } from "react";
import Modal from "../components/layouts/modal";
import Input from "../components/interactions/input";

function GuestJoin({ isOpen, close }) {
  const [name, setName] = useState("");
  const [code, setCode] = useState("");

  function submit(e) {
    if (!name || !code) {
      e.preventDefault();
      return;
    }
    console.log("submit join clicked :)");
    console.log("formdata:", {code: code, name: name});
  }

  return (
    <Modal title="Join as Guest" isOpen={isOpen} close={close} action={submit}>
        <Input label="Display Name" id="name" value={name} onChange={e => setName(e.target.value)}/>
        <Input label="Join Code" id="code" value={code} onChange={e => setCode(e.target.value)}/>
    </Modal>
  )
}

export default GuestJoin;