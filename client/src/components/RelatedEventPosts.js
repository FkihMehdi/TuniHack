import { Stack } from "@mui/material";
import PostCard from "./PostCard";

const posts = [
  {
    _id: "672f81f3fec3cfc94fbea7a1",
    poster: {
      _id: "672dd44de8bf9c7955395974",
      username: "houssem",
      email: "sahnoun.houssem05@gmail.com",
      biography: "",
      isAdmin: false,
      createdAt: "2024-11-08T09:05:17.809Z",
      updatedAt: "2024-11-08T09:05:17.809Z",
      __v: 0,
    },
    title: "teeeee",
    content: "eeeeee",
    likeCount: 0,
    commentCount: 0,
    edited: false,
    for_event: null,
    createdAt: "2024-11-09T15:38:27.691Z",
    updatedAt: "2024-11-09T15:38:27.691Z",
    __v: 0,
  },
  {
    _id: "672f81cfb3b746f385d06213",
    poster: {
      _id: "672dd44de8bf9c7955395974",
      username: "houssem",
      email: "sahnoun.houssem05@gmail.com",
      biography: "",
      isAdmin: false,
      createdAt: "2024-11-08T09:05:17.809Z",
      updatedAt: "2024-11-08T09:05:17.809Z",
      __v: 0,
    },
    title: "eeee",
    content: "eeee",
    likeCount: 0,
    commentCount: 0,
    edited: false,
    for_event: null,
    createdAt: "2024-11-09T15:37:51.162Z",
    updatedAt: "2024-11-09T15:37:51.162Z",
    __v: 0,
  },
  {
    _id: "672dd6c3e8bf9c7955395a99",
    poster: {
      _id: "672dd4b8e8bf9c79553959da",
      username: "mahdichaaben",
      email: "mahdi@gmail.com",
      biography: "siiii",
      isAdmin: false,
      createdAt: "2024-11-08T09:07:04.780Z",
      updatedAt: "2024-11-08T09:07:47.728Z",
      __v: 0,
    },
    title: "aaaa",
    content: "aaa",
    likeCount: 1,
    commentCount: 3,
    edited: false,
    createdAt: "2024-11-08T09:15:47.931Z",
    updatedAt: "2024-11-09T15:00:40.831Z",
    __v: 0,
    liked: true,
    userLikePreview: [
      {
        _id: "672dd44de8bf9c7955395974",
        username: "houssem",
      },
    ],
  },
  {
    _id: "672dd460e8bf9c795539598a",
    poster: {
      _id: "672dd44de8bf9c7955395974",
      username: "houssem",
      email: "sahnoun.houssem05@gmail.com",
      biography: "",
      isAdmin: false,
      createdAt: "2024-11-08T09:05:17.809Z",
      updatedAt: "2024-11-08T09:05:17.809Z",
      __v: 0,
    },
    title: "test",
    content: "testzzz",
    likeCount: 1,
    commentCount: 1,
    edited: true,
    createdAt: "2024-11-08T09:05:36.756Z",
    updatedAt: "2024-11-09T15:23:07.230Z",
    __v: 0,
    liked: true,
    userLikePreview: [
      {
        _id: "672dd44de8bf9c7955395974",
        username: "houssem",
      },
    ],
  },
];

const RelatedEventPosts = () => {
  return (
    <Stack spacing={2}>
      {posts.map((post) => (
        <PostCard key={post.title} post={post} preview="secondary" />
      ))}
    </Stack>
  );
};

export { RelatedEventPosts };
