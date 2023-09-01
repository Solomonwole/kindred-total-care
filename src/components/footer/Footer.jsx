import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { footerStyle } from "./style";
import Logo from "../../assets/logo.svg";
import { NavLink } from "react-router-dom";
import theme from "../../mui/theme";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { BiLogoFacebook } from "react-icons/bi";
import { BsLinkedin, BsTwitter, BsYoutube } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import InstagramPosts from "./Instagram";

function Footer() {
  const [email, setEmail] = useState("");
  return (
    <>
      <Box component="footer" pt={5} pb={5} sx={footerStyle}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, 1fr)",
                md: "repeat(4, 1fr)",
              },
              columnGap: 4,
              rowGap: 4,
            }}
          >
            <Box>
              <Stack spacing={2}>
                <img src={Logo} alt="Kindred Total Care" className="logo" />
                <Typography variant="body1" color="primary">
                  Our mission is to offer compassionate and personalized care
                  for your loved ones, creating a comfortable and supportive
                  environment tailored to the unique needs of elderly
                  individuals.
                </Typography>

                <Box>
                  <Stack spacing={2}>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      variant="outlined"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      style={textStyle}
                      required
                    />
                    <Button variant="contained">Subscribe</Button>
                  </Stack>
                </Box>
              </Stack>
            </Box>

            <Box component="ul" sx={ulStyle}>
              <li>
                <NavLink to="/" onClick={() => window.scrollTo(0, 0)}>
                  <MdKeyboardDoubleArrowRight color="#30B832" /> Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/services">
                  <MdKeyboardDoubleArrowRight color="#30B832" /> Services
                </NavLink>
              </li>
              <li>
                <a href="#contact">
                  <MdKeyboardDoubleArrowRight color="#30B832" /> Help Center
                </a>
              </li>
            </Box>

            <Box component="ul" sx={ulStyle}>
              <li>
                <NavLink to="/about-us">
                  <MdKeyboardDoubleArrowRight color="#30B832" /> About Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact-us">
                  <MdKeyboardDoubleArrowRight color="#30B832" /> Contact Us
                </NavLink>
              </li>
              {/* <li>
                <a href="#contact">
                  <MdKeyboardDoubleArrowRight color="#30B832" /> Legal
                </a>
              </li> */}
            </Box>

            <Box>
              <Typography variant="h3" color="secondary" align="center" mb={2}>
                Follow on Instagram
              </Typography>
              <InstagramPosts />
            </Box>
          </Box>

          <Box mt={5} pt={5} sx={{ borderTop: "1px solid #D4D2E3" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                justifyContent: { xs: "center", sm: "space-between" },
                alignItems: "center",
                rowGap: 2,
              }}
            >
              <Typography variant="body1" color="primary">
                Copyright © 2023 Kindred Care | All Rights Reserved
              </Typography>

              <Stack direction="row" alignItems="center" spacing={2}>
                <SocialIcon
                  icon={<BiLogoFacebook size={20} className="social" />}
                  link="https://facebook.com/"
                />
                <SocialIcon
                  icon={<BsTwitter size={20} className="social" />}
                  link="https://twitter.com/"
                />
                <SocialIcon
                  icon={<AiFillInstagram size={20} className="social" />}
                  link="https://instagram.com/"
                />
                <SocialIcon
                  icon={<BsLinkedin size={20} className="social" />}
                  link="https://linkedin.com/"
                />
                <SocialIcon
                  icon={<BsYoutube size={20} className="social" />}
                  link="https://youtube.com/"
                />
              </Stack>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default Footer;

const textStyle = {
  height: "45px",
  borderRadius: "10px",
  border: "none",
  width: "100%",
  padding: "10px",
};

const ulStyle = {
  li: {
    listStyle: "none",
    margin: "20px 10px",

    a: {
      color: theme.palette.primary.main,
      textDecoration: "none",
      display: "flex",
      alignItems: "center",
    },
    "& a.active": {
      color: theme.palette.secondary.main,
    },
  },
};

const SocialIcon = ({ icon, link }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <Box
        sx={{
          background: "rgba(231, 230, 242, 1)",
          height: "40px",
          width: "40px",
          borderRadius: "5px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",

          "&:hover": {
            background:
              "linear-gradient(180deg, #0DBBB4 0%, rgba(48, 184, 50, 0.44) 100%)",
          },
        }}
      >
        {icon}
      </Box>
    </a>
  );
};
