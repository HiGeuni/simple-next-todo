import { Close } from '@mui/icons-material';
import { FC, useCallback } from 'react';
import { ModalWrapper } from './styles';

interface IProps {
  setShow: (e: any) => void;
  children: React.ReactNode;
}

const Modal = ({ setShow, children }: IProps) => {
  const stopPropagation = useCallback((e: any) => {
    e.stopPropagation();
  }, []);

  return (
    <ModalWrapper onClick={() => setShow(false)}>
      <div className="modal" onClick={stopPropagation}>
        <Close className="close" onClick={() => setShow(false)} />
        <div className="content">{children}</div>
      </div>
    </ModalWrapper>
  );
};

export default Modal;
