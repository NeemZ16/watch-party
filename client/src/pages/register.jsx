import Modal from "../components/layouts/modal";

function Register({isOpen, close}) {
  function submit() {
    console.log("submit register clicked :)");
  }

  return (
    <Modal title="Register" isOpen={isOpen} close={close} action={submit}>
      <input type="text" />
      <input type="text" />
      <input type="text" />
    </Modal>
  )
}

export default Register
