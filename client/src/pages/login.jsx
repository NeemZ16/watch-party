import { useState } from "react";
import Modal from "../components/layouts/modal";

function Login({isOpen, close}) {
  function submit() {
    console.log("submit login clicked :)");
  }

  return (
    <Modal title="Login" isOpen={isOpen} close={close} action={submit}>
      <input type="text" />
      <input type="text" />
    </Modal>
  )
}

export default Login;
