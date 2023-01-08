import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  & > * {
    margin-left: auto;
    margin-right: auto;
  }
  .todo {
    font-size: 30px;
    font-weight: 700;
  }
  .submit-btn {
    font-size: 24px;
    background: none;
    border-radius: 5px;
    transition: background-color 0.5s ease-out 100ms;
    :hover {
      background-color: lightgray;
    }
  }
`;
