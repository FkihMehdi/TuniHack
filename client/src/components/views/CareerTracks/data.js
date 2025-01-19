import LayersIcon from "@mui/icons-material/Layers";
import CodeIcon from "@mui/icons-material/Code";
import WorkspacesIcon from "@mui/icons-material/Workspaces";

const tracks = [
  {
    id: "1",
    category: "CAREER TRACK",
    title: "Associate Data Scientist in Python",
    description:
      "Learn data science in Python, from data manipulation to machine learning. This track provides the skills needed to succeed as a data scientist!",
    courses: 34,
    icon: <CodeIcon />,
    tags: ["Fundamentals", "Certification available"],
  },
  {
    id: "1",
    category: "CAREER TRACK",
    title: "Associate Data Analyst in SQL",
    description:
      "Gain the SQL skills you need to query a database, analyze the results, and become a SQL proficient Data Analyst. No prior coding experience required!",
    courses: 13,
    icon: <WorkspacesIcon />,
    tags: ["Fundamentals", "Certification available"],
  },
  {
    id: "1",
    category: "CAREER TRACK",
    title: "Data Analyst in Python",
    description:
      "Develop your data analytics skills in Python. Gain the data analyst skills to manipulate, analyze, and visualize data. No coding experience required!",
    courses: 34,
    icon: <CodeIcon />,
    tags: ["Fundamentals", "Certification available"],
  },
  {
    id: "1",
    category: "CAREER TRACK",
    title: "Data Analyst in Power BI",
    description:
      "Co-created with Microsoft—gain the Power BI skills you need to prepare, model, and visualize data for the PL-300 Data Analyst certification.",
    courses: 17,
    icon: <LayersIcon />,
    tags: ["Fundamentals", "Certification available"],
  },
];

const careerTypes = [
  "All",
  "Data Analyst",
  "Data Engineer",
  "Data Scientist",
  "ML Scientist",
  "ML Engineer",
  "AI Engineer",
  "Developer",
  "Statistician",
];

export { tracks, careerTypes };
