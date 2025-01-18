import { Stack } from "@mui/material";
import TopPosts from "./TopPosts";
import Findassociations from "./FindUsers";
import Calendar from "./Calendar";
import FindUsers from "./Findassociations";

const Sidebar = () => {
  return (
    <Stack spacing={2}>
      <TopPosts />
      <Calendar />
      <FindUsers />
      <Findassociations />
    </Stack>
  );
};

export default Sidebar;
