import { useTheme } from "@emotion/react";
import {
  Stack,
  TextField,
  IconButton,
  Box,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  AiFillHome,
  AiFillMessage,
  AiOutlineSearch,
  AiOutlineSetting,
} from "react-icons/ai";
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
  const [anchorEl, setAnchorEl] = useState(null); // State for dropdown menu anchor
  const openMenu = Boolean(anchorEl);

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

  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget); // Open dropdown menu
  const handleMenuClose = () => setAnchorEl(null); // Close dropdown menu

  return (
    <Stack mb={2} spacing={1}>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          padding: 2,
          backgroundColor: "#705eaa", // Main background color
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          borderRadius: 2,
          position: "sticky",
          top: 0,
          zIndex: 1000,
        }}
      >
        {/* Logo Section */}
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
        </Stack>

        {/* Centered Search Field */}
        <Box
          component="form"
          onSubmit={handleSearchSubmit}
          sx={{
            display: !isNarrow || showSearch ? "flex" : "none",
            flexGrow: 1,
            maxWidth: isMobile ? "80%" : "60%",
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
                backgroundColor: "#ffffff", // White background
                color: "#705eaa", // Text color
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
                borderRadius: "5px",
                "& fieldset": { borderColor: "#705eaa" }, // Border color
              },
              "& .MuiInputLabel-root": {
                color: "#705eaa", // Label color
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
              "&:hover": { color: "#71a769" }, // Hover effect color
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
                  backgroundColor: "#71a769", // Green background
                  color: "#ffffff",
                  fontWeight: "bold",
                  boxShadow: "0 4px 8px rgba(113, 167, 105, 0.3)",
                  borderRadius: "20px",
                  "&:hover": {
                    backgroundColor: "#705eaa", // Purple hover color
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
                    backgroundColor: "#71a769", // Green hover
                  },
                  borderRadius: "20px",
                }}
                href="/login"
              >
                Login
              </Button>
            </>
          )}
        </Stack>

        {/* Mobile Search Field */}
        {isNarrow && showSearch && (
          <Box
            component="form"
            onSubmit={handleSearchSubmit}
            sx={{ mt: 1, px: 2 }}
          >
            <TextField
              size="small"
              label="Search..."
              value={search}
              onChange={handleSearchChange}
              fullWidth
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: 5,
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
                  backgroundColor: "#ffffff", // White background
                  color: "#705eaa", // Text color
                  "& fieldset": { borderColor: "#705eaa" },
                },
              }}
            />
          </Box>
        )}
      </Stack>
    </Stack>
  );
};

export default Navbar;
