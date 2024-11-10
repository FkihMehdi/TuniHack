import { List, Stack } from "@mui/material";
import { useState } from "react";
import EventIcon from "@mui/icons-material/Event";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import WebIcon from "@mui/icons-material/Web";
import PeopleIcon from "@mui/icons-material/People";
import SchoolIcon from "@mui/icons-material/School";
import CampaignIcon from "@mui/icons-material/Campaign";
import { LeftSideBarLink } from "./LeftSideBarLink";

const LeftSideBar = () => {
  const [selectedMenu, setSelectedMenu] = useState("Home");

  const handleMenuClick = (e, details) => {
    setSelectedMenu(details.text);
  };

  return (
    <Stack spacing={2}>
      <List>
        <LeftSideBarLink path="/event" text="Event" icon={<EventIcon />} />
        <LeftSideBarLink
          path="/calendar"
          text="My Calendar"
          icon={<CalendarTodayIcon />}
        />
        <LeftSideBarLink
          path="/generate-website"
          text="Generate Website"
          icon={<WebIcon />}
        />
        <LeftSideBarLink
          path="/connections"
          text="Connections"
          icon={<PeopleIcon />}
        />
        <LeftSideBarLink path="/mentors" text="Mentors" icon={<SchoolIcon />} />
        <LeftSideBarLink
          path="/promote-event"
          text="Promote Event"
          icon={<CampaignIcon />}
        />
      </List>
    </Stack>
  );
};

export { LeftSideBar };
