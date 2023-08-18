import { Outlet } from 'react-router-dom';
import { Header } from './Header/Header';
import { Container, Stack } from '@mui/material';
import { Menu } from '../components/menu/Menu';
import { useAppSelector } from '../store/hooks/hooks';
import Box from '@mui/material/Box';

export const Layout = () => {
  const { menuWidth } = useAppSelector((state) => state.menu);

  return (
    <Stack>
      <Menu />
      <Header />
      <Box
        component='main'
        sx={{
          width: { sm: `calc(100% - ${menuWidth}px)` },
          ml: { sm: `${menuWidth}px` },
          mt: '20px',
          mb: '20px',
        }}
      >
        <Container maxWidth={'xl'}>
          <Outlet />
        </Container>
      </Box>
    </Stack>
  );
};
