import { Code, Analytics, Storage, Psychology } from "@mui/icons-material";

const questions = [
  {
    id: "programming_experience",
    question: "What is your programming experience level?",
    options: [
      { value: "none", label: "No experience" },
      { value: "beginner", label: "Beginner (some basics)" },
      {
        value: "intermediate",
        label: "Intermediate (comfortable with 1-2 languages)",
      },
      {
        value: "advanced",
        label: "Advanced (proficient in multiple languages)",
      },
    ],
  },
  {
    id: "interest_area",
    question: "Which areas interest you the most?",
    options: [
      { value: "analysis", label: "Data Analysis & Visualization" },
      { value: "ml", label: "Machine Learning & AI" },
      { value: "engineering", label: "Data Engineering & Infrastructure" },
      { value: "statistics", label: "Statistics & Mathematical Modeling" },
    ],
  },
  {
    id: "work_preference",
    question: "What type of work appeals to you most?",
    options: [
      { value: "business", label: "Business Analysis & Reporting" },
      { value: "research", label: "Research & Development" },
      { value: "infrastructure", label: "Building Data Infrastructure" },
      { value: "products", label: "Developing Data Products" },
    ],
  },
  {
    id: "time_commitment",
    question: "How much time can you dedicate to learning?",
    options: [
      { value: "minimal", label: "1-2 hours per week" },
      { value: "moderate", label: "5-10 hours per week" },
      { value: "substantial", label: "10-20 hours per week" },
      { value: "intensive", label: "20+ hours per week" },
    ],
  },
];

const careerPaths = {
  dataAnalyst: {
    title: "Data Analyst",
    description: "Focus on analyzing data to provide business insights",
    icon: <Analytics />,
    skills: ["SQL", "Python", "Data Visualization", "Statistics"],
    timeToComplete: "3-6 months",
    difficulty: "Beginner-Friendly",
  },
  dataScientist: {
    title: "Data Scientist",
    description: "Combine statistics, ML, and business knowledge",
    icon: <Psychology />,
    skills: ["Python", "Machine Learning", "Statistics", "Deep Learning"],
    timeToComplete: "6-12 months",
    difficulty: "Intermediate",
  },
  dataEngineer: {
    title: "Data Engineer",
    description: "Build and maintain data infrastructure",
    icon: <Storage />,
    skills: ["Python", "SQL", "Big Data", "Data Warehousing"],
    timeToComplete: "6-9 months",
    difficulty: "Intermediate",
  },
  mlEngineer: {
    title: "ML Engineer",
    description: "Develop and deploy machine learning systems",
    icon: <Code />,
    skills: ["Python", "ML Ops", "Software Engineering", "Deep Learning"],
    timeToComplete: "9-12 months",
    difficulty: "Advanced",
  },
};

export { questions, careerPaths };
