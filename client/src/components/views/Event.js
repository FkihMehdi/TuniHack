import {
  Card,
  Divider,
  Stack,
  Typography,
  IconButton,
  Chip,
  Button,
} from "@mui/material";
import { Box } from "@mui/system";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillInstagram,
} from "react-icons/ai";
import { isLoggedIn } from "../../helpers/authHelper";
import Loading from "../Loading";
import UserAvatar from "../UserAvatar";
import HorizontalStack from "../util/HorizontalStack";
import { RelatedEventPosts } from "../RelatedEventPosts";
import { AuthLayoutWithoutRightSidebar } from "../AuthLayoutWithoutRightSidebar";
import { Link } from "react-router-dom";

const association = {
  username: "IEEE",
  email: "ieee@gmail.com",
  tags: ["web development", "app development", "machine learning"],
  age: 25,
  phone: "12345678",
  password: "12345678",
  biography:
    "IEEE is a student branch of the Institute of Electrical and Electronics Engineers.",
  isAdmin: false,
  role: "Association",
  events_created: [],
  events_attending: [],
  associations_enrolled: [],
  members: [],
};

const event = {
  title: "Hackathon",
  type: "hackathon",
  tags: [
    "web development",
    "mobile development",
    "data science",
    "web development",
    "mobile development",
    "data science",
  ],
  description:
    "A hackathon is a design sprint-like event in which computer programmers and others involved in software development, including graphic designers, interface designers, project managers, domain experts, and others collaborate intensively on software projects.",
  date: new Date(),
  location: "INSAT",
  image: "https://www.aeroday.tn/assets/pdp-BZKnssaS.png",
  creator: association,
  participants: ["60b9d9f8f9e7e41d6c2d6c3d"],
  posts: ["60b9d9f8f9e7e41d6c2d6c3d"],
};

const Event = () => {
  // const [event, setEvent] = useState(null);
  const currentUser = isLoggedIn();

  return (
    <AuthLayoutWithoutRightSidebar>
      <Card sx={{ backgroundColor: "white", padding: 3 }}>
        {event ? (
          <>
            <Stack direction="column" spacing={2}>
              <Stack direction="row" spacing={2}>
                <Stack direction="column" spacing={2}>
                  <img
                    src={event.image}
                    alt={event.title}
                    style={{ width: 200 }}
                  />
                  <HorizontalStack
                    sx={{
                      justifyContent: "center",
                      gap: 0.5,
                    }}
                  >
                    <IconButton>
                      <AiFillFacebook />
                    </IconButton>
                    <IconButton>
                      <AiFillTwitterSquare />
                    </IconButton>
                    <IconButton>
                      <AiFillInstagram />
                    </IconButton>
                  </HorizontalStack>
                </Stack>
                <Box>
                  <Typography variant="h4">{event.title}</Typography>
                  <Typography variant="body1">{event.description}</Typography>
                  <Typography variant="body2">
                    {event.date.toLocaleDateString()} at {event.location}
                  </Typography>
                  <Divider sx={{ marginY: 1.5 }} />
                  {/* loop over all the tags and put each one in a chip 
                add margin between chips when they wrap*/}
                  <Stack
                    direction="row"
                    spacing={1}
                    sx={{
                      flexWrap: "wrap",
                      gap: 1,
                      marginY: 1,
                    }}
                  >
                    {event.tags.map((tag) => (
                      <Chip key={tag} label={tag} />
                    ))}
                  </Stack>
                </Box>
              </Stack>
              <Box>
                {/* <Divider sx={{ marginY: 1.5 }} /> */}
                {/* add participate and interested buttons */}
                <Stack
                  direction="row"
                  spacing={2}
                  sx={{
                    justifyContent: "flex-end",
                  }}
                >
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#705eaa",
                      color: "white",
                      "&:hover": {
                        backgroundColor: "#705eaa",
                        color: "white",
                      },
                    }}
                  >
                    Participate
                  </Button>
                  <Button
                    variant="outlined"
                    sx={{
                      backgroundColor: "#fff",
                      color: "black",
                      "&:hover": {
                        backgroundColor: "#fff",
                        color: "black",
                      },
                    }}
                  >
                    Interested
                  </Button>
                </Stack>
                <Divider sx={{ marginY: 2 }} />
                <Typography variant="h6">Creator</Typography>
                <HorizontalStack sx={{}}>
                  <UserAvatar
                    width={30}
                    height={30}
                    username={event.creator.username}
                  />
                  <Typography
                    variant="subtitle2"
                    color="text.secondary"
                    gutterBottom
                  >
                    <Link
                      color="inherit"
                      underline="hover"
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                      to={"/users/" + event.creator.username}
                    >
                      {event.creator.username}
                    </Link>
                  </Typography>
                </HorizontalStack>
                <Divider sx={{ marginY: 1.5 }} />
                <Typography variant="h6">Participants</Typography>
                <HorizontalStack>
                  {event.participants.map((participant) => (
                    <UserAvatar key={participant} userId={participant} />
                  ))}
                </HorizontalStack>
              </Box>
            </Stack>
            <Divider sx={{ marginY: 2 }} />

            {/* <RelatedEventPosts /> */}
            <Typography variant="h6">Related Posts</Typography>
            <RelatedEventPosts />
          </>
        ) : (
          <Loading label="Loading profile" />
        )}
      </Card>
    </AuthLayoutWithoutRightSidebar>
  );
};

export { Event };
