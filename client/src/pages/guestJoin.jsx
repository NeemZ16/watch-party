import { useState } from "react";
import Modal from "../components/layouts/modal";
import Input from "../components/interactions/input";

function GuestJoin({ isOpen, close }) {
  function submit() {
    console.log("submit join clicked :)");
  }

  return (
    <Modal title="Join as Guest" isOpen={isOpen} close={close} action={submit}>
        <Input label="Display Name" id="name"/>
    </Modal>
  )
}

export default GuestJoin;