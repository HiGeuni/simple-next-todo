import { StyledDiv } from './styles';

interface IProps {
  children: React.ReactNode;
}

const DetailLayout = ({ children }: IProps) => {
  return <StyledDiv>{children}</StyledDiv>;
};

export default DetailLayout;
