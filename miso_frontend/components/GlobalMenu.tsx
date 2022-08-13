import React from "react"
import { useRouter } from "next/router";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';

import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';

const menus = [
  {label: "車", icon: () => (<DirectionsCarIcon />), path: "/cars"},
  {label: "ケータイ", icon: () => (<PhoneIphoneIcon />), path: "/cell_phones"},
]

const GlobalMenu: React.FC = () => {
  const router = useRouter()

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{'aria-labelledby': 'basic-button'}}
          >
            {menus.map(m => (
              <MenuItem key={m.label} onClick={() => router.push(m.path)}>
                <ListItemIcon>
                  {m.icon()}
                </ListItemIcon>
                <ListItemText>
                  {m.label}
                </ListItemText>
              </MenuItem>
            ))}
          </Menu>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            MISO
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default GlobalMenu
