import { useTheme } from "@emotion/react";
import {
  Stack,
  TextField,
  IconButton,
  Box,
  Button,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  AiFillHome,
  AiFillMessage,
  AiOutlineSearch,
  AiOutlineSetting,
} from "react-icons/ai";
import { FaGlobe } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { isLoggedIn, logoutUser } from "../helpers/authHelper";
import UserAvatar from "./UserAvatar";
import LogoImage from "../assests/logo.png";

const Navbar = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const user = isLoggedIn();
  const username = user?.username;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [anchorEl, setAnchorEl] = useState(null);
  const [langAnchorEl, setLangAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);
  const openLangMenu = Boolean(langAnchorEl);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth < 500;
  const isNarrow = windowWidth < 600;

  const handleLogout = () => {
    logoutUser();
    navigate("/login");
  };

  const handleSearchChange = (e) => setSearch(e.target.value);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    navigate("/search?" + new URLSearchParams({ search }));
  };

  const toggleSearch = () => setShowSearch((prev) => !prev);

  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  const handleLangMenuOpen = (event) => setLangAnchorEl(event.currentTarget);
  const handleLangMenuClose = () => setLangAnchorEl(null);

  return (
    <Stack mb={2} spacing={1}>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          padding: 2,
          backgroundColor: "#705eaa",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          borderRadius: 2,
          position: "sticky",
          top: 0,
          zIndex: 1000,
        }}
      >
        {/* Logo and Title Section */}
        <Stack direction="row" alignItems="center" spacing={1}>
          <Box
            component="img"
            src={LogoImage}
            alt="Logo"
            sx={{
              width: 40,
              height: 40,
              cursor: "pointer",
              transition: "transform 0.3s",
              "&:hover": { transform: "scale(1.1)" },
            }}
            onClick={() => navigate("/")}
          />
          <Typography
            variant="h6"
            sx={{
              color: "#ffff",
              fontFamily: "Nexa Heavy, sans-serif", // Apply Nexa Heavy font
              fontWeight: "bold", // Apply bold weight
            }}
          >
            Affilify
          </Typography>
        </Stack>

        {/* Centered Search Field */}
        <Box
          component="form"
          onSubmit={handleSearchSubmit}
          sx={{
            display: !isNarrow || showSearch ? "flex" : "none",
            flexGrow: 1,
            maxWidth: isMobile ? "70%" : "30%", // Reduced width
            justifyContent: "center",
          }}
        >
          <TextField
            size="small"
            label="Search..."
            value={search}
            onChange={handleSearchChange}
            fullWidth
            sx={{
              "& .MuiOutlinedInput-root": {
                backgroundColor: "#ffffff",
                color: "#705eaa",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
                borderRadius: "5px",
                "& fieldset": { borderColor: "#705eaa" },
              },
              "& .MuiInputLabel-root": {
                color: "#705eaa",
              },
            }}
          />
        </Box>

        {/* Icon and Button Section */}
        <Stack direction="row" spacing={1} alignItems="center">
          {isMobile && (
            <IconButton onClick={toggleSearch} sx={{ color: "#ffffff" }}>
              <AiOutlineSearch />
            </IconButton>
          )}
          <IconButton
            component={Link}
            to="/"
            sx={{
              color: "#ffffff",
              transition: "color 0.3s",
              "&:hover": { color: "#71a769" },
            }}
          >
            <AiFillHome />
          </IconButton>
          {user ? (
            <>
              <IconButton
                component={Link}
                to="/messenger"
                sx={{
                  color: "#ffffff",
                  transition: "color 0.3s",
                  "&:hover": { color: "#71a769" },
                }}
              >
                <AiFillMessage />
              </IconButton>
              <IconButton component={Link} to={`/users/${username}`}>
                <UserAvatar width={30} height={30} username={username} />
              </IconButton>
              <IconButton onClick={handleMenuOpen} sx={{ color: "#ffffff" }}>
                <AiOutlineSetting />
              </IconButton>

              {/* Account Settings Dropdown Menu */}
              <Menu
                anchorEl={anchorEl}
                open={openMenu}
                onClose={handleMenuClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem
                  component={Link}
                  to={`/account`}
                  onClick={handleMenuClose}
                >
                  Account Settings
                </MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </>
          ) : (
            <>
              <Button
                variant="contained"
                sx={{
                  minWidth: 80,
                  backgroundColor: "#71a769",
                  color: "#ffffff",
                  fontWeight: "bold",
                  boxShadow: "0 4px 8px rgba(113, 167, 105, 0.3)",
                  borderRadius: "20px",
                  "&:hover": {
                    backgroundColor: "#705eaa",
                  },
                }}
                href="/signup"
              >
                Sign Up
              </Button>
              <Button
                variant="outlined"
                sx={{
                  minWidth: 65,
                  color: "#705eaa",
                  borderColor: "#705eaa",
                  "&:hover": {
                    backgroundColor: "#71a769",
                  },
                  borderRadius: "20px",
                }}
                href="/login"
              >
                Login
              </Button>
            </>
          )}

          {/* Language Selection Dropdown */}
          <IconButton onClick={handleLangMenuOpen} sx={{ color: "#ffffff" }}>
            <FaGlobe />
          </IconButton>
          <Menu
            anchorEl={langAnchorEl}
            open={openLangMenu}
            onClose={handleLangMenuClose}
          >
            <MenuItem onClick={handleLangMenuClose}>🇫🇷 Français</MenuItem>
            <MenuItem onClick={handleLangMenuClose}>🇬🇧 English</MenuItem>
            <MenuItem onClick={handleLangMenuClose}>🇸🇦 العربية</MenuItem>
          </Menu>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Navbar;
