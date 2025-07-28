import { useState } from "react";
import Modal from "../components/layouts/modal";
import Input from "../components/interactions/input";

function GuestJoin({ isOpen, close }) {
  function submit() {
    console.log("submit join clicked :)");
  }

  return (
    <Modal title="Login" isOpen={isOpen} close={close} action={submit}>
        <Input label="username" id="user"/>
        <Input label="password" id="pwd" type="password"/>
    </Modal>
  )
}

export default GuestJoin;