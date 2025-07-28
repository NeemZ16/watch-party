import Modal from "../components/layouts/modal";
import Input from "../components/interactions/input";

function Register({isOpen, close}) {
  function submit() {
    console.log("submit register clicked :)");
  }

  return (
    <Modal title="Register" isOpen={isOpen} close={close} action={submit}>
      <Input label="username/email" id="user"/>
      <Input label="password" id="pwd" type="password"/>
      <Input label="confirm password" id="pwd" type="password"/>
    </Modal>
  )
}

export default Register
