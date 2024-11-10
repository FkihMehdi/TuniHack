import { Box, ListItem, ListItemText } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu"; // General icon for items
import { Link } from "react-router-dom";
import { ListItemMenuButton } from "./ListItemMenuButton";

const LeftSideBarLink = ({ path, text, selected, icon }) => {
  return (
    <Link
      to={path}
      style={{
        textDecoration: "none",
        color: "#d8c8f0",
      }}
    >
      <ListItem
        disablePadding
        sx={{
          px: 2,
          mb: 2,
          borderRadius: "8px",
          "&:hover": {
            backgroundColor: "#d8c8f0",
            transform: "scale(1.05)",
          },
        }}
      >
        <ListItemMenuButton
          selected={selected}
          sx={{
            "&:hover": {
              backgroundColor: "#d8c8f0",
            },
          }}
        >
          <Box
            sx={{
              width: 32,
              height: 32,
              m: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "50%",
              backgroundColor: "#705eaa",
              transition: "background-color 0.3s ease",
            }}
          >
            {icon} {/* Neutral icon for all items */}
          </Box>

          <ListItemText
            primary={text}
            sx={{
              ml: 2,
              color: "#705eaa",
              fontWeight: "500",
              fontSize: "16px",
              transition: "color 0.3s ease",
            }}
          />
        </ListItemMenuButton>
      </ListItem>
    </Link>
  );
};

export { LeftSideBarLink };
