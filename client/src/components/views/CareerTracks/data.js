import LayersIcon from "@mui/icons-material/Layers";
import CodeIcon from "@mui/icons-material/Code";
import WorkspacesIcon from "@mui/icons-material/Workspaces";
import BusinessIcon from "@mui/icons-material/Business";
import ChatIcon from "@mui/icons-material/Chat";

const tracks = [
  {
    id: "1",
    category: "CAREER TRACK",
    title: "Entrepreneurship Fundamentals",
    description:
      "Learn the basics of entrepreneurship, from idea generation to business planning. This track provides the skills needed to start your own business!",
    courses: 20,
    icon: <BusinessIcon />,
    tags: ["Fundamentals", "Certification available"],
  },
  {
    id: "2",
    category: "CAREER TRACK",
    title: "Advanced Communication Skills",
    description:
      "Enhance your communication skills with advanced techniques in public speaking, negotiation, and interpersonal communication.",
    courses: 15,
    icon: <ChatIcon />,
    tags: ["Advanced", "Certification available"],
  },
  {
    id: "3",
    category: "CAREER TRACK",
    title: "Digital Marketing for Entrepreneurs",
    description:
      "Master digital marketing strategies to promote your business online. Learn SEO, social media marketing, and content creation.",
    courses: 25,
    icon: <LayersIcon />,
    tags: ["Marketing", "Certification available"],
  },
  {
    id: "4",
    category: "CAREER TRACK",
    title: "Leadership and Management",
    description:
      "Develop leadership and management skills to effectively lead teams and manage projects. Ideal for aspiring managers and team leaders.",
    courses: 18,
    icon: <WorkspacesIcon />,
    tags: ["Leadership", "Certification available"],
  },
];

const careerTypes = [
  "All",
  "Entrepreneur",
  "Marketing Specialist",
  "Communication Expert",
  "Business Manager",
  "Public Relations Specialist",
  "Sales Manager",
  "Consultant",
  "Project Manager",
];

export { tracks, careerTypes };
