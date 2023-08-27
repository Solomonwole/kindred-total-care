import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Toolbar,
} from "@mui/material";
import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { headerStyle, mobileMenu, mobileMenuNav, ulStyle } from "./style";
import { FiMenu } from "react-icons/fi";
import { VscClose } from "react-icons/vsc";
import theme from "../../mui/theme";
import Logo from "../../assets/logo.svg";

function Header() {
  const navigate = useNavigate();
  const [menu, setMenu] = useState(false);

  const handleClose = () => setMenu(false);
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          data-aos="fade-down"
          position="fixed"
          sx={{
            minHeight: "70px",
            height: "10vh",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Toolbar>
            <Container maxWidth="lg">
              <Box sx={headerStyle}>
                <Box>
                  <Link to="/">
                    <img
                      src={Logo}
                      alt="Kindred Total Care"
                      className="logo"
                      onClick={() => window.scrollTo(0, 0)}
                    />
                  </Link>
                </Box>

                <Box component="ul" sx={ulStyle}>
                  <li>
                    <NavLink to="/" onClick={() => window.scrollTo(0, 0)}>
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/about-us"
                      onClick={() => window.scrollTo(0, 0)}
                    >
                      About us
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/services"
                      onClick={() => window.scrollTo(0, 0)}
                    >
                      Services
                    </NavLink>
                  </li>
                  <li>
                    <Button
                      variant="contained"
                      onClick={() => {
                        navigate("/contact-us");
                        window.scrollTo(0, 0);
                      }}
                      sx={{ maxWidth: "150px" }}
                    >
                      Contact us
                    </Button>
                  </li>
                </Box>

                <Box sx={{ display: { sm: "none" } }}>
                  {!menu ? (
                    <IconButton onClick={() => setMenu(true)}>
                      <FiMenu size={25} color={theme.palette.secondary.main} />
                    </IconButton>
                  ) : (
                    <IconButton onClick={() => setMenu(false)}>
                      <VscClose
                        size={28}
                        color={theme.palette.secondary.main}
                      />
                    </IconButton>
                  )}
                </Box>
              </Box>
            </Container>
          </Toolbar>
        </AppBar>

        {menu && (
          <Box sx={mobileMenu}>
            <Box component="ul" sx={mobileMenuNav}>
              <li>
                <NavLink
                  to="/"
                  onClick={() => {
                    handleClose();
                    window.scrollTo(0, 0);
                  }}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about-us"
                  onClick={() => {
                    handleClose();
                    window.scrollTo(0, 0);
                  }}
                >
                  About us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services"
                  onClick={() => {
                    handleClose();
                    window.scrollTo(0, 0);
                  }}
                >
                  Services
                </NavLink>
              </li>
              <li>
                <Button
                  variant="contained"
                  onClick={() => {
                    navigate("/contact-us");
                    handleClose();
                  }}
                >
                  Contact us
                </Button>
              </li>
            </Box>
          </Box>
        )}
      </Box>
    </>
  );
}

export default Header;
