import { AppBar, Container, Stack, Toolbar } from '@mui/material';
import { ThemeButton } from '../../components/ThemeButton/ThemeButton';
import { Menu } from '../../components/menu/Menu';
import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { changeOpen } from '../../store/reducers/menuSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';

export const Header = () => {
  const { menuWidth } = useAppSelector((state) => state.menu);
  const dispatch = useAppDispatch();

  const handlerOnToggleMenu = () => {
    dispatch(changeOpen());
  };

  return (
    <AppBar
      position={'static'}
      sx={{
        p: '10px',
        width: { sm: `calc(100% - ${menuWidth}px)` },
        ml: { sm: `${menuWidth}px` },
      }}
    >
      <Container maxWidth='xl'>
        <Toolbar>
          <Stack
            direction='row'
            spacing={2}
            alignItems='center'
            justifyContent='space-between'
            minWidth='100%'
          >
            <IconButton
              edge='start'
              color='inherit'
              aria-label='menu'
              onClick={handlerOnToggleMenu}
              sx={{ display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <ThemeButton />
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
