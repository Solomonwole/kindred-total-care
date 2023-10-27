import {
	AppBar,
	Box,
	Button,
	Container,
	IconButton,
	Stack,
	Toolbar,
	Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { headerStyle, mobileMenu, mobileMenuNav, ulStyle } from "./style";
import { FiMenu } from "react-icons/fi";
import { VscClose } from "react-icons/vsc";
import theme from "../../mui/theme";
import Logo from "../../assets/logo.svg";
import { BsInstagram, BsPhoneFill, BsTwitter } from "react-icons/bs";
import { BiLogoFacebook } from "react-icons/bi";

function Header() {
	const navigate = useNavigate();
	const [menu, setMenu] = useState(false);

	const handleClose = () => setMenu(false);
	return (
		<>
			<Box sx={{ flexGrow: 1 }}>
				<AppBar
					position="static"
					sx={{
						height: "5vh",
						background: "#000",
						display: "flex",
						justifyContent: "center",
					}}>
					<Toolbar>
						<Container>
							<Stack
								direction="row"
								justifyContent="space-between"
								alignItems="center">
								<Stack direction="row" alignItems="center" spacing={1}>
									<BsPhoneFill color="#fff" />
									<a href="tel:+18324063380">
										<Typography variant="body1" color="primary">
											+1 (832) 406 3380
										</Typography>
									</a>
								</Stack>

								<Stack direction="row" alignItems="center" spacing={1}>
									<a
										href="https://facebook.com/profile.php?id=61551937095425&mibextid=LQQJ4d"
										target="_blank"
										rel="noreferrer">
										<BiLogoFacebook color="#fff" />
									</a>
									<a
										href="https://instagram.com/kindredtc.c"
										target="_blank"
										rel="noreferrer">
										<BsInstagram color="#fff" />
									</a>
									<a
										href="https://twitter.com/kindredtc.c"
										target="_blank"
										rel="noreferrer">
										<BsTwitter color="#fff" />
									</a>
								</Stack>
							</Stack>
						</Container>
					</Toolbar>
				</AppBar>
				<AppBar
					data-aos="fade-down"
					position="static"
					sx={{
						minHeight: "70px",
						height: "10vh",
						display: "flex",
						justifyContent: "center",
					}}>
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
											onClick={() => window.scrollTo(0, 0)}>
											About us
										</NavLink>
									</li>
									<li>
										<NavLink
											to="/services"
											onClick={() => window.scrollTo(0, 0)}>
											Services
										</NavLink>
									</li>
									<li>
										<NavLink
											to="/care-giver"
											onClick={() => window.scrollTo(0, 0)}>
											Care Giver
										</NavLink>
									</li>
									<li>
										<Button
											variant="contained"
											onClick={() => {
												navigate("/contact-us");
												window.scrollTo(0, 0);
											}}
											sx={{ maxWidth: "150px" }}>
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
									}}>
									Home
								</NavLink>
							</li>
							<li>
								<NavLink
									to="/about-us"
									onClick={() => {
										handleClose();
										window.scrollTo(0, 0);
									}}>
									About us
								</NavLink>
							</li>
							<li>
								<NavLink
									to="/services"
									onClick={() => {
										handleClose();
										window.scrollTo(0, 0);
									}}>
									Services
								</NavLink>
							</li>
							<li>
								<NavLink
									to="/care-giver"
									onClick={() => {
										handleClose();
										window.scrollTo(0, 0);
									}}>
									Care Giver
								</NavLink>
							</li>
							<li>
								<Button
									variant="contained"
									onClick={() => {
										navigate("/contact-us");
										handleClose();
									}}>
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
