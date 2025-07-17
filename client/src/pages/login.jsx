import { useState } from "react";
import Modal from "../components/layouts/modal";

function Login(isOpen, close) {
  function submitLogin() {
    console.log("submit login clicked :)");
  }

  return (
    <Modal title={"Login"} isOpen={isOpen} close={close} action={submitLogin}>
      <input type="text" />
      <input type="text" />
    </Modal>
  )
}

export default Login;
