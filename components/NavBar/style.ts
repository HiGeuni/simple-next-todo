import styled from 'styled-components';
import Link from 'next/link';

export const NavArea = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.color.firefly};
  border-radius: 10px;
  margin: 2%;
`;

export const StyledLink = styled(Link)`
  padding: 20px;
  text-decoration: none;
  color: ${({ theme }) => theme.color.opal};
  :active {
    color: ${({ theme }) => theme.color.aquaHaze};
  }
`;
