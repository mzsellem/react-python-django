{
   /* <Link to="/patients">Patients</Link>
<Link to="/">Home</Link> */
}

import * as React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
// import AdbIcon from "@mui/icons-material/Adb";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";

const pages = ["Home", "Patients"];
// const settings = ["Profile", "Account", "Dashboard", "Logout"];

export default function ResponsiveAppBar() {
   const [anchorElNav, setAnchorElNav] = React.useState(null);
   const [anchorElUser, setAnchorElUser] = React.useState(null);

   const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
   };
   const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
   };

   const handleCloseNavMenu = () => {
      setAnchorElNav(null);
   };

   const handleCloseUserMenu = () => {
      setAnchorElUser(null);
   };

   return (
      <AppBar position="static">
         <Container maxWidth="xl">
            <Toolbar disableGutters>
               <AddCircleOutlineOutlinedIcon
                  sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
               />
               <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  href="https://beyondmd.care/"
                  sx={{
                     mr: 2,
                     display: { xs: "none", md: "flex" },
                     fontFamily: "monospace",
                     fontWeight: 700,
                     letterSpacing: ".3rem",
                     color: "inherit",
                     textDecoration: "none",
                  }}
               >
                  BeyondMD
               </Typography>

               <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                  <IconButton
                     size="large"
                     aria-label="account of current user"
                     aria-controls="menu-appbar"
                     aria-haspopup="true"
                     onClick={handleOpenNavMenu}
                     color="inherit"
                  >
                     <MenuIcon />
                  </IconButton>
                  <Menu
                     id="menu-appbar"
                     anchorEl={anchorElNav}
                     anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left",
                     }}
                     keepMounted
                     transformOrigin={{
                        vertical: "top",
                        horizontal: "left",
                     }}
                     open={Boolean(anchorElNav)}
                     onClose={handleCloseNavMenu}
                     sx={{
                        display: { xs: "block", md: "none" },
                     }}
                  >
                     {pages.map((page) => (
                        <MenuItem key={page} onClick={handleCloseNavMenu}>
                           <Typography textAlign="center">{page}</Typography>
                        </MenuItem>
                     ))}
                  </Menu>
               </Box>
               <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                  {pages.map((page) => (
                     <Link
                        key={page}
                        to={page === "Home" ? "/" : `/${page.toLowerCase()}`}
                        style={{ textDecoration: "none", color: "inherit" }}
                     >
                        <Button
                           onClick={handleCloseNavMenu}
                           sx={{ my: 2, color: "white", display: "block" }}
                        >
                           {page}
                        </Button>
                     </Link>
                  ))}
               </Box>

               <Box sx={{ flexGrow: 0 }}>
                  <Tooltip>
                     <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                        <Avatar alt="Marley's Avatar" src="/flower.jpg" />
                     </IconButton>
                  </Tooltip>
               </Box>
            </Toolbar>
         </Container>
      </AppBar>
   );
}
