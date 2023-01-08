import Link from 'next/link';
import { Div, StyledLink } from './style';
export const Header = () => {
  return (
    <Div>
      <StyledLink href="/">Home</StyledLink>
      <StyledLink href="/today">Today</StyledLink>
      <StyledLink href="/week">Week</StyledLink>
    </Div>
  );
};
