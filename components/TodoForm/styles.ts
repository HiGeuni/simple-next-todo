import { Button, ListItem } from '@mui/material';
import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  & > h1 {
    color: #000;
    margin-left: auto;
    margin-right: auto;
  }
  & > form {
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

export const TodoItem = styled(ListItem)`
  margin-top: 0px;
  /* justify-content: center; */
`;

export const ColoredButton = styled(Button)`
  color: ${({ theme }) => theme.color.DeepSpaceSparkle};
  /* justify-content: center; */
`;
