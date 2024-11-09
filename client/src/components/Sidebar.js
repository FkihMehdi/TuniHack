import { Stack } from "@mui/material";
import TopPosts from "./TopPosts";
import FindUsers from "./FindUsers";
import Findassociations from "./Findassociations";

const Sidebar = () => {
  return (
    <Stack spacing={2}>
      <TopPosts />
      <Findassociations />
      <FindUsers />
    </Stack>
  );
};

export default Sidebar;
