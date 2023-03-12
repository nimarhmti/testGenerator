import {
  AppBar,
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
  withStyles,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
// import MenuIcon from "@mui/icons-material/Menu";
import { Container } from "@mui/system";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Links, linksModel } from "../../../config/navigation";
const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

export const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const navigate = useNavigate();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <AppBar component="nav">
      <Container>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box
            display="flex"
            alignItems="center"
            gap={1}
            onClick={() => navigate("/")}
            sx={{ cursor: "pointer" }}
          >
            <img src="./icons/logo.png" height={50} />
            <Typography fontFamily="iranSans">آزمون ساز آنلاین</Typography>
          </Box>
          <Box>
            <ul
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "5rem",
              }}
            >
              {Links.map((item: linksModel) => (
                <li key={item.id}>
                  <Link style={{ color: "#fff" }} to={item.to}>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
              open={!!anchorElUser}
              onClose={handleCloseUserMenu}
            >
              <MenuItem
                onClick={() => {
                  navigate("/");
                  handleCloseUserMenu();
                }}
                sx={{ justifyContent: "flex-start" }}
              >
                <Typography fontFamily="iranSans" textAlign="center">
                  خروج
                </Typography>
              </MenuItem>
              <MenuItem
                onClick={() => {
                  navigate("/register");
                  handleCloseUserMenu();
                }}
              >
                <Typography fontFamily="iranSans" textAlign="match-parent">
                  ورود
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
