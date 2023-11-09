import { useTheme } from "@/hooks/use_theme";
import {
  AccountCircleOutlined,
  Close,
  DarkMode,
  DragHandle,
  LightMode,
  LinkedIn,
  Menu as MenuIcon,
  OpenInNewOutlined,
  Twitter,
  WebStoriesOutlined,
  Webhook,
} from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const pages = [
  {
    id: 1,
    name: "About me",
    href: "/about",
    icon: <AccountCircleOutlined />,
  },
  {
    id: 2,
    name: "Projects",
    href: "/projects",
    icon: <Webhook />,
  },
  {
    id: 3,
    name: "Gallery",
    href: "/gallery",
    icon: <WebStoriesOutlined />,
  },
];

const socials = [
  {
    id: 1,
    name: "LinkedIn",
    href: "https://linkedin.com/in/michel-btompe-3a0bb3234/",
    icon: <LinkedIn />,
    color: "",
  },
  {
    id: 2,
    name: "Twitter",
    href: "https://twitter.com/michelbtompe",
    icon: <Twitter />,
    color: "",
  },
];

export default function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const [showIcon, setShowIcon] = useState(false);
  // const resizeWindow = () => {
  //   if (
  //     document.documentElement.scrollTop > 99 ||
  //     document.body.scrollTop > 99
  //   ) {
  //     setShowIcon(true);
  //   } else {
  //     setShowIcon(false);
  //   }
  // };
  // resizeWindow();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setShowIcon(true);
      } else {
        setShowIcon(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const btnMenuStyle = {
    backgroundColor: !Boolean(anchorElNav)
      ? "var(--cardBgColor)"
      : "var(--backgroundColor)",

    border: !Boolean(anchorElNav)
      ? "1px solid var(--cardBgColor)"
      : "1px solid var(--backgroundColor)",
    ":hover": {
      backgroundColor: "var(--primaryColorOp)",
      border: "1px solid var(--primaryColor)",
      backdropFilter: "blur(2px)",
    },
    transform: Boolean(anchorElNav) ? "rotate(-50deg)" : "none",
    transition: "0.3s",
  };

  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "transparent",
          boxShadow: "none",
          // py: 0.315,
          py: 1,
        }}
      >
        <Container>
          <Container sx={{ px: { xs: 0, sm: "24px" } }}>
            <Toolbar
              disableGutters
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                "& a": { fontSize: "20px" },
              }}
            >
              <Link
                href="/"
                style={{
                  marginRight: 2,
                }}
                className="brand"
              >
                <span style={{ fontWeight: 700 }}>TOM• </span>{" "}
                <span className="portfolio">Portfolio</span>
              </Link>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  {socials.map((social) => (
                    <IconButton
                      key={social.id}
                      size="small"
                      sx={{ py: 0.7, mx: 0.3 }}
                    >
                      <Typography
                        component="a"
                        href={social.href}
                        target="_blank"
                        sx={{ display: "flex", alignItems: "center" }}
                      >
                        {social.icon}
                      </Typography>
                    </IconButton>
                  ))}
                </Box>

                <Box
                  sx={{ flexGrow: 0, display: "flex", alignItems: "center" }}
                >
                  <IconButton
                    size="small"
                    aria-label={"Toggle theme"}
                    onClick={() => toggleTheme()}
                    className="icon-hover"
                    sx={{ ml: 0.3, mr: 2 }}
                  >
                    {theme === "light" ? <DarkMode /> : <LightMode />}
                  </IconButton>

                  <IconButton
                    // size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    sx={{
                      display: { xs: "flex", md: "none" },
                      "&&": btnMenuStyle,
                    }}
                  >
                    <DragHandle />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{
                      display: {
                        a: { fontSize: "17px" },
                        span: { fontSize: "20px" },
                      },
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        px: 2,
                        py: 1,
                      }}
                    >
                      <span
                        style={{
                          color: "var(--primaryColor)",
                          fontWeight: 700,
                        }}
                      >
                        TOM•Portfolio
                      </span>
                      {!showIcon && (
                        <IconButton
                          onClick={handleCloseNavMenu}
                          sx={btnMenuStyle}
                        >
                          <DragHandle />
                        </IconButton>
                      )}
                    </Box>

                    <Divider />
                    {socials.map((social) => (
                      <MenuItem key={social.id} onClick={handleCloseNavMenu}>
                        <Typography
                          style={{
                            width: "100%",
                            display: "flex",
                            alignItems: "center",
                            gap: "15px",
                          }}
                          component="a"
                          href={social.href}
                        >
                          {social.icon} {social.name}
                        </Typography>
                      </MenuItem>
                    ))}

                    <Divider />
                    {pages.map((page) => (
                      <MenuItem key={page.id} onClick={handleCloseNavMenu}>
                        <Link
                          style={{
                            width: "100%",
                            display: "flex",
                            alignItems: "center",
                            gap: "15px",
                          }}
                          href={page.href}
                        >
                          {page.icon} {page.name}
                        </Link>
                      </MenuItem>
                    ))}
                    <Divider />
                    <Box
                      sx={{
                        px: 1.9,
                        py: 0.3,
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Link
                        target="_blank"
                        href="https://v1-michelbtompe.vercel.app/"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "15px",
                          color: "var(--primaryColor)",
                        }}
                      >
                        <OpenInNewOutlined
                          sx={{ fill: "var(--primaryColor)" }}
                        />{" "}
                        V1 version
                      </Link>
                      <IconButton
                        size="small"
                        aria-label={"Toggle theme"}
                        onClick={() => toggleTheme()}
                        className="icon-hover"
                      >
                        {theme === "light" ? <DarkMode /> : <LightMode />}
                      </IconButton>
                    </Box>
                  </Menu>
                </Box>

                <Box
                  sx={{
                    flexGrow: 0,
                    display: { xs: "none", md: "flex" },
                    alignItems: "center",
                  }}
                >
                  {pages.map((page) => (
                    <Link
                      key={page.id}
                      href={page.href}
                      style={{ margin: "0 0.75rem" }}
                    >
                      {page.name}
                    </Link>
                  ))}
                  <Tooltip title="v1 version" arrow>
                    <Link
                      target="_blank"
                      href="https://v1-michelbtompe.vercel.app/"
                      style={{
                        margin: "0 0.75rem",
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                        color: "var(--primaryColor)",
                      }}
                    >
                      <OpenInNewOutlined
                        fontSize="small"
                        sx={{ fill: "var(--primaryColor)" }}
                      />{" "}
                      v1
                    </Link>
                  </Tooltip>

                  <IconButton
                    size="small"
                    aria-label={"Toggle theme"}
                    onClick={() => toggleTheme()}
                    className="icon-hover"
                  >
                    {theme === "light" ? <DarkMode /> : <LightMode />}
                  </IconButton>
                </Box>
              </Box>
            </Toolbar>
          </Container>
        </Container>
      </AppBar>

      {showIcon && (
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={(e) => {
            if (!Boolean(anchorElNav)) {
              handleOpenNavMenu(e);
            } else {
              handleCloseNavMenu();
            }
          }}
          sx={{
            "&&": btnMenuStyle,
            position: "fixed",
            right: 20,
            top: 15,
            zIndex: 9999,
          }}
        >
          <DragHandle fontSize="large" />
        </IconButton>
      )}
    </>
  );
}
