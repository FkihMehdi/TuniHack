const technologies = [
  "All",
  "Python",
  "SQL",
  "R",
  "Power BI",
  "Tableau",
  "Alteryx",
  "Excel",
  "Google Sheets",
  "ChatGPT",
  "PyTorch",
  "OpenAI",
  "AWS",
  "Azure",
  "Snowflake",
];

const additionalTech = [
  "Databricks",
  "Git",
  "Docker",
  "Shell",
  "Kubernetes",
  "Airflow",
  "Spark",
  "Dbt",
];

const courses = [
  {
    title: "Introduction to Python",
    type: "COURSE",
    level: "Beginner",
    description:
      "Master the basics of data analysis with Python in just four hours. This online course will introduce the Python interface and explore popular packages.",
    instructor: {
      name: "Hugo Bowne-Anderson",
      role: "Data Scientist",
      avatar: "/api/placeholder/40/40",
    },
    duration: "4h",
    icon: "🐍",
  },
  {
    title: "Introduction to SQL",
    type: "COURSE",
    level: "Beginner",
    description:
      "Learn how to create and query relational databases using SQL in just two hours.",
    instructor: {
      name: "Izzy Weber",
      role: "Data Coach at iO-Sphere",
      avatar: "/api/placeholder/40/40",
    },
    duration: "2h",
    icon: "💾",
  },
  {
    title: "Introduction to R",
    type: "COURSE",
    level: "Beginner",
    description:
      "Master the basics of data analysis in R, including vectors, lists, and data frames, and practice R with real data sets.",
    instructor: {
      name: "Jonathan Cornelissen",
      role: "Co-founder of DataCamp",
      avatar: "/api/placeholder/40/40",
    },
    duration: "4h",
    icon: "📊",
  },
];

export { technologies, additionalTech, courses };
