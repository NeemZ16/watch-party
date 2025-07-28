import { useState } from "react";
import Modal from "../components/layouts/modal";
import Input from "../components/interactions/input";

function Login({ isOpen, close }) {
  function submit() {
    console.log("submit login clicked :)");
  }

  return (
    <Modal title="Login" isOpen={isOpen} close={close} action={submit}>
        <Input label="username/email" id="user"/>
        <Input label="password" id="pwd" type="password"/>
    </Modal>
  )
}

export default Login;
