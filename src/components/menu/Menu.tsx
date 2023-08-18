import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';
import { changeOpen } from '../../store/reducers/menuSlice';
import { useNavigate } from 'react-router-dom';

interface Props {
  window?: () => Window;
}

export const Menu = (props: Props) => {
  const { window } = props;
  const { open, menuWidth } = useAppSelector((state) => state.menu);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handlerOnToggleMenu = () => {
    dispatch(changeOpen());
  };

  const handlerOnClickNavigateTo = (path: string) => () => {
    navigate(`/${path}`);
  };

  const drawer = (
    <div>
      <Toolbar />
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={handlerOnClickNavigateTo('')}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary={'react'} />
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box component='nav'>
      <Drawer
        container={container}
        variant='temporary'
        open={open}
        onClose={handlerOnToggleMenu}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: menuWidth,
          },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant='permanent'
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: menuWidth,
          },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
};
