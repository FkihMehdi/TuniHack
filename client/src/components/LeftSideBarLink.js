import { Box, ListItem, ListItemText } from "@mui/material";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import { Link } from "react-router-dom";
import { ListItemMenuButton } from "./ListItemMenuButton";

const LeftSideBarLink = ({ path, text }) => {
  return (
    <Link
      to={path}
      style={{
        textDecoration: "none",
        color: "inherit",
      }}
    >
      <ListItem
        disablePadding
        sx={{ px: 0, mb: 1 }}
        onClick={(e) => {
          //   handleMenuClick(e, "details");
        }}
      >
        <ListItemMenuButton selected={false}>
          <Box
            sx={{
              //  bgcolor: palette.acapulco.main,
              pr: 1,
              width: 24,
              height: 24,
              m: 0.5,
            }}
            display={"flex"}
            flex={"column"}
            justifyItems={"center"}
          >
            <AccessibilityIcon />
          </Box>
          <ListItemText
            primary={text}
            sx={
              {
                // color: palette.blackPearl.main
              }
            }
          />
        </ListItemMenuButton>
      </ListItem>
    </Link>
  );
};

export { LeftSideBarLink };
