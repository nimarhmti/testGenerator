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
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";
import { useAtom } from "jotai";

import { Container } from "@mui/system";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Links, linksModel } from "../../../config/navigation";
import { isAuthentication } from "../../../store";
import { useUserLogout } from "../../../services/application_authentication/appAuthentication.query";
import { AlertInfo, AlertMessage } from "../Alert/Alert";
const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

export const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const [isAuthenticated, setIsAuthenticated] = useAtom(isAuthentication);
  const [openAlert, setOpenAlert] = useState<boolean>(false);
  const [alertInfo, setAlertInfo] = useState<AlertInfo>({
    message: "",
    result: false,
  });
  const { mutate: userLogout } = useUserLogout();

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

  const logoutHandler = () => {
    userLogout(null, {
      onSuccess() {
        setIsAuthenticated(false);
        setAlertInfo({ message: "ورود با موفقیت نجام شد", result: true });
        setOpenAlert(true);
        handleCloseUserMenu();
      },
    });
  };
  return (
    <>
      <AlertMessage
        message={alertInfo.message}
        result={alertInfo.result}
        isOpen={openAlert}
        onClose={() => setOpenAlert(false)}
      />
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
                {isAuthenticated ? (
                  <MenuItem
                    onClick={logoutHandler}
                    sx={{ justifyContent: "flex-start" }}
                  >
                    <Box
                      sx={{ display: "flex", alignItems: "center", gap: "5px" }}
                    >
                      <LogoutIcon color="error" />
                      <Typography fontFamily="iranSans" textAlign="center">
                        خروج
                      </Typography>
                    </Box>
                  </MenuItem>
                ) : (
                  <MenuItem
                    onClick={() => {
                      navigate("/register");
                      handleCloseUserMenu();
                    }}
                  >
                    <Box
                      sx={{ display: "flex", alignItems: "center", gap: "5px" }}
                    >
                      <LoginIcon color="success" />
                      <Typography fontFamily="iranSans" textAlign="center">
                        ورود
                      </Typography>
                    </Box>
                  </MenuItem>
                )}
                <MenuItem
                  onClick={() => {
                    navigate("/quizBuilder");
                    handleCloseUserMenu();
                  }}
                >
                  <Typography fontFamily="iranSans" textAlign="match-parent">
                    ساخت آزمون
                  </Typography>
                </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};
