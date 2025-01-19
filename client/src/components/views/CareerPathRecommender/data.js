import { Business, Chat, Group, School } from "@mui/icons-material";

const questions = [
  {
    id: "business_experience",
    question: "What is your business experience level?",
    options: [
      { value: "none", label: "No experience" },
      { value: "beginner", label: "Beginner (some basics)" },
      {
        value: "intermediate",
        label: "Intermediate (comfortable with business concepts)",
      },
      {
        value: "advanced",
        label: "Advanced (proficient in business management)",
      },
    ],
  },
  {
    id: "interest_area",
    question: "Which areas interest you the most?",
    options: [
      { value: "marketing", label: "Marketing & Sales" },
      { value: "strategy", label: "Business Strategy & Planning" },
      { value: "communication", label: "Communication & Public Relations" },
      { value: "finance", label: "Finance & Accounting" },
    ],
  },
  {
    id: "work_preference",
    question: "What type of work appeals to you most?",
    options: [
      { value: "leadership", label: "Leadership & Management" },
      { value: "creative", label: "Creative & Content Creation" },
      { value: "networking", label: "Networking & Relationship Building" },
      { value: "analysis", label: "Market Analysis & Research" },
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
  entrepreneur: {
    title: "Entrepreneur",
    description: "Start and manage your own business",
    icon: <Business />,
    skills: ["Business Planning", "Marketing", "Finance", "Leadership"],
    timeToComplete: "6-12 months",
    difficulty: "Advanced",
  },
  marketingSpecialist: {
    title: "Marketing Specialist",
    description: "Focus on promoting products and services",
    icon: <Chat />,
    skills: ["SEO", "Content Creation", "Social Media", "Analytics"],
    timeToComplete: "3-6 months",
    difficulty: "Beginner-Friendly",
  },
  publicRelations: {
    title: "Public Relations Specialist",
    description: "Manage public image and communications",
    icon: <Group />,
    skills: [
      "Communication",
      "Media Relations",
      "Writing",
      "Crisis Management",
    ],
    timeToComplete: "6-9 months",
    difficulty: "Intermediate",
  },
  businessConsultant: {
    title: "Business Consultant",
    description: "Provide expert advice to improve business performance",
    icon: <School />,
    skills: [
      "Business Analysis",
      "Strategy",
      "Problem Solving",
      "Communication",
    ],
    timeToComplete: "9-12 months",
    difficulty: "Advanced",
  },
};

export { questions, careerPaths };
