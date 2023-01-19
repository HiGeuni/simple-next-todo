import styled from 'styled-components';

export const ModalWrapper = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  background-color: #03030333;
  .modal {
    position: absolute;
    border: 2px solid;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    padding: 30px;
    border-radius: 5px;
  }
  .close {
    position: absolute;
    right: 30px;
  }
`;
