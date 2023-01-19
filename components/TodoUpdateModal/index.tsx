import Modal from 'components/Modal';

interface IProps {
  setShow: (e: any) => void;
}

const TodoUpdateModal = ({ setShow }: IProps) => {
  return (
    <Modal setShow={setShow}>
      <h1>Hi my name is Hyogeun</h1>
      <h3>Who are you?</h3>
    </Modal>
  );
};

export default TodoUpdateModal;
