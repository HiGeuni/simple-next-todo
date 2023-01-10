import { NavBar } from '../NavBar';
import { StyledDiv } from './styles';

interface IProps {
  children: React.ReactNode;
}

const Layout = ({ children }: IProps) => {
  return (
    <StyledDiv>
      <NavBar />
      {children}
    </StyledDiv>
  );
};

export default Layout;
