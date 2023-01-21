import Link from 'next/link';
import { StyledDiv, NavArea, StyledLink } from './style';
import { Icon } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ChatBubble from '@mui/icons-material/ChatBubble';
import { Home, Window, Logout, Map, Person, Login } from '@mui/icons-material';
import { useRouter } from 'next/router';

const menuData = [
  { id: 'Home', icon: Home, path: '/' },
  { id: 'todo', icon: ChatBubble, path: '/today' },
  { id: 'calendar', icon: Window, path: '/calendar' },
  { id: 'map', icon: Map, path: '/map' },
];

export const NavBar = () => {
  const router = useRouter();
  return (
    <StyledDiv>
      <NavArea>
        {menuData.map((obj) => (
          <StyledLink href={obj.path} key={obj.id}>
            <Icon
              sx={{
                color: router.pathname === obj.path ? 'white' : '#a6b7b9',
              }}
              component={obj.icon}
            />
          </StyledLink>
        ))}
      </NavArea>
      <div>
        <StyledLink href="/login">
          <Icon component={Login} />
        </StyledLink>
        <div style={{ height: '10px' }}></div>
        <StyledLink href="/week">
          <Icon component={Logout} />
        </StyledLink>
      </div>
    </StyledDiv>
  );
};
