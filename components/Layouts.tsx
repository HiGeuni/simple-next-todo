import { Header } from './Header';

interface IProps {
  children: React.ReactNode;
}

const Layout = ({ children }: IProps) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Layout;
