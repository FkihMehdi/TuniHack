import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Menu,
  MenuItem,
  InputBase,
  Button,
} from "@mui/material";
import { Search } from "@mui/icons-material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useNavigate } from "react-router-dom";
import Logo from "./assets/logo.png";

const NavBar = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="static"
      color="transparent"
      elevation={0}
      sx={{
        backgroundColor: "#ffffff", // Fond blanc
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)", // Effet 3D léger
        padding: "10px 0",
        borderBottom: "1px solid #E0E0E0",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Logo */}
        <Box
          sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
          onClick={() => navigate("/")}
        >
          <img
            src={Logo}
            alt="logo"
            style={{ width: "40px", height: "40px", marginRight: "8px" }}
          />
        </Box>

        {/* Découvrir Dropdown */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            "&:hover": { color: "#7933ff" },
          }}
          onClick={handleMenuOpen}
        >
          <Typography
            variant="body1"
            sx={{
              fontWeight: "500",
              marginRight: "4px",
              color: "#05192d",
            }}
          >
            Découvrir
          </Typography>
          <ArrowDropDownIcon sx={{ color: "#05192d" }} />
        </Box>

        {/* Simple Menu */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          PaperProps={{
            sx: {
              backgroundColor: "#f9f9f9",
              color: "#2D4D78",
              borderRadius: "8px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            },
          }}
        >
          <MenuItem
            onClick={() => {
              navigate("/communication");
              handleMenuClose();
            }}
            sx={{
              "&:hover": {
                backgroundColor: "#e6f4f1",
                color: "#00796b",
              },
            }}
          >
            Communication
          </MenuItem>
          <MenuItem
            onClick={() => {
              navigate("/entrepreneurship");
              handleMenuClose();
            }}
            sx={{
              "&:hover": {
                backgroundColor: "#e6f4f1",
                color: "#00796b",
              },
            }}
          >
            Entrepreneuriat
          </MenuItem>
        </Menu>

        {/* Search Bar */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            border: "1px solid #C4C4C4",
            borderRadius: "50px",
            padding: "0 12px",
            width: "30%",
          }}
        >
          <Search sx={{ color: "#C4C4C4", marginRight: "8px" }} />
          <InputBase
            placeholder="Rechercher"
            sx={{
              flex: 1,
              fontFamily: "Roboto",
              fontSize: "14px",
            }}
          />
        </Box>

        {/* Right Section */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Typography
            variant="body2"
            onClick={() => navigate("/udemy-business")}
            sx={{
              fontWeight: "500",
              cursor: "pointer",
              color: "text.primary",
              "&:hover": { color: "#7933ff" },
            }}
          >
            Affilify Business
          </Typography>
          <Typography
            variant="body2"
            onClick={() => navigate("/teach")}
            sx={{
              fontWeight: "500",
              cursor: "pointer",
              color: "text.primary",
              "&:hover": { color: "#7933ff" },
            }}
          >
            Enseigner sur Affilify
          </Typography>
          <Button
            variant="outlined"
            sx={{
              borderColor: "#7933ff",
              color: "#7933ff",
              textTransform: "none",
              "&:hover": { backgroundColor: "rgba(121, 51, 255, 0.1)" },
            }}
          >
            Se connecter
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#7933ff",
              color: "white",
              textTransform: "none",
              "&:hover": { backgroundColor: "#5e1bc0" },
            }}
          >
            S'inscrire
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
