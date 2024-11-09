import { List, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { LeftSideBarLink } from "./LeftSideBarLink";

const LeftSideBar = () => {
  const [selectedMenu, setSelectedMenu] = useState("Home");

  const handleMenuClick = (e, details) => {
    setSelectedMenu(details.text);
  };

  return (
    <Stack spacing={2}>
      <List>
        <Typography sx={{ m: 1 }}>Main Menu</Typography>
        <LeftSideBarLink path={"/event"} text={"Event"} />
        <LeftSideBarLink path={"/calendar"} text={"My Calendar"} />
        <LeftSideBarLink path={"/generate-website"} text={"Generate Website"} />
        <LeftSideBarLink path={"/connections"} text={"Connections"} />
        <LeftSideBarLink path={"/mentors"} text={"Mentors"} />
        <LeftSideBarLink path={"/promote-event"} text={"Promote Event"} />
      </List>
    </Stack>
  );
};

export { LeftSideBar };
