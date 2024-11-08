import { useTheme } from "@emotion/react";
import { Stack, TextField, IconButton, Box, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { AiFillHome, AiFillMessage, AiOutlineSearch } from "react-icons/ai";
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

  return (
    <Stack mb={2} spacing={1}>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          padding: 2,
          backgroundColor: "#0D1B2A", // Dark Navy
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
                backgroundColor: "#102542",
                color: "#FFD700", // Gold text
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
                borderRadius: "5px",
                "& fieldset": { borderColor: "#FFD700" },
              },
              "& .MuiInputLabel-root": {
                color: "#FFD700",
              },
            }}
          />
        </Box>

        {/* Icon and Button Section */}
        <Stack direction="row" spacing={1} alignItems="center">
          {isMobile && (
            <IconButton onClick={toggleSearch} sx={{ color: "#FFD700" }}>
              <AiOutlineSearch />
            </IconButton>
          )}
          <IconButton
            component={Link}
            to="/"
            sx={{
              color: "#FFD700",
              transition: "color 0.3s",
              "&:hover": { color: "#DAA520" }, // Goldenrod hover
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
                  color: "#FFD700",
                  transition: "color 0.3s",
                  "&:hover": { color: "#DAA520" },
                }}
              >
                <AiFillMessage />
              </IconButton>
              <IconButton component={Link} to={`/users/${username}`}>
                <UserAvatar width={30} height={30} username={username} />
              </IconButton>
              <Button
                onClick={handleLogout}
                sx={{
                  minWidth: 80,
                  color: "#FFD700",
                  borderColor: "#FFD700",
                  "&:hover": {
                    backgroundColor: "rgba(218, 165, 32, 0.2)", // Goldenrod hover
                  },
                }}
                variant="outlined"
              >
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button
                variant="contained"
                sx={{
                  minWidth: 80,
                  backgroundColor: "#FFD700",
                  color: "#0D1B2A",
                  fontWeight: "bold",
                  boxShadow: "0 4px 8px rgba(255, 215, 0, 0.3)", // Gold shadow
                  borderRadius: "20px",
                  "&:hover": {
                    backgroundColor: "#DAA520",
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
                  color: "#FFD700",
                  borderColor: "#FFD700",
                  "&:hover": {
                    backgroundColor: "rgba(218, 165, 32, 0.2)", // Goldenrod hover
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
                backgroundColor: "#102542",
                color: "#FFD700",
                "& fieldset": { borderColor: "#FFD700" },
              },
            }}
          />
        </Box>
      )}
    </Stack>
  );
};

export default Navbar;
