import Link from 'next/link';
import { StyledDiv, NavArea, StyledLink } from './style';
import { Icon } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ChatBubble from '@mui/icons-material/ChatBubble';
import { Home, Window, Logout, Map } from '@mui/icons-material';

export const NavBar = () => {
  return (
    <StyledDiv>
      <NavArea>
        <StyledLink href="/">
          <Icon component={Home} />
        </StyledLink>
        <StyledLink href="/today">
          <Icon component={ChatBubble} />
        </StyledLink>
        <StyledLink href="/calendar">
          <Icon component={Window} />
        </StyledLink>
        <StyledLink href="/map">
          <Icon component={Map} />
        </StyledLink>
      </NavArea>
      <StyledLink href="/week">
        <Icon component={Logout} />
      </StyledLink>
    </StyledDiv>
  );
};
