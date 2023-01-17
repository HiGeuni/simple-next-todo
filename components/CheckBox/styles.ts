import styled from 'styled-components';

export const CheckBoxWraper = styled.div`
  display: flex;
  justify-content: center;
  input {
    appearance: none;
    margin-right: 50px;
    width: 24px;
    height: 24px;
    border: 1px solid ${({ theme }) => theme.color.DeepSpaceSparkle};
  }
  input:checked {
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    background-color: ${({ theme }) => theme.color.DeepSpaceSparkle};
  }
  font-size: 18px;
`;

export const ActiveDiv = styled.div`
  color: gray;
  text-decoration: line-through;
`;
