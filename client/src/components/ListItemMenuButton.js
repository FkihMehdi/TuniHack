import { ListItemButton } from "@mui/material";

export const ListItemMenuButton = ({
  children,
  selected,
  onClick,
  onDoubleClick,
  sx,
}) => {
  return (
    <ListItemButton
      onClick={onClick}
      onDoubleClick={onDoubleClick}
      sx={{
        px: 1,
        borderRadius: 2,
        "&.Mui-selected": {
          backgroundColor: "gray",
          ":hover": {
            backgroundColor: (theme) => "gray",
          },
        },
        "&:hover": {
          backgroundColor: (theme) => "gray",
        },
        ...sx,
      }}
      selected={selected}
      alignItems={"center"}
    >
      {children}
    </ListItemButton>
  );
};
