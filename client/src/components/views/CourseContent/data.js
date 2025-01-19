const courseData = {
  id: "entrepreneurship-101",
  title: "Entrepreneurship and Business Communication",
  modules: [
    {
      id: "module-1",
      title: "Fundamentals of Entrepreneurship",
      lessons: [
        {
          id: "lesson-1",
          title: "Understanding Entrepreneurial Mindset",
          content: `An entrepreneurial mindset is characterized by:
          - Innovation and creativity
          - Risk-taking and resilience
          - Opportunity recognition
          - Strategic thinking
          
          In this lesson, we'll explore how successful entrepreneurs think and make decisions...`,
          questions: [
            {
              id: "q1",
              type: "multiple-choice",
              question:
                "Which of the following best describes entrepreneurial thinking?",
              options: [
                "Following established business models exactly",
                "Taking calculated risks and innovating",
                "Avoiding all types of risk",
                "Waiting for perfect conditions",
              ],
              correctAnswer: 1,
              explanation:
                "Entrepreneurial thinking involves calculated risk-taking and innovation while identifying opportunities in the market.",
            },
            {
              id: "q2",
              type: "multiple-choice",
              question:
                "What is a key characteristic of successful entrepreneurs?",
              options: [
                "Avoiding all challenges",
                "Following the crowd",
                "Resilience in face of setbacks",
                "Never changing their plans",
              ],
              correctAnswer: 2,
              explanation:
                "Resilience is crucial as entrepreneurs often face multiple setbacks before achieving success.",
            },
          ],
        },
        {
          id: "lesson-2",
          title: "Business Communication Essentials",
          content: `Effective business communication involves:
          - Clear and concise messaging
          - Active listening
          - Non-verbal communication
          - Stakeholder management
          
          This lesson covers key communication strategies for entrepreneurs...`,
          questions: [
            {
              id: "q3",
              type: "multiple-choice",
              question:
                "What is the most important aspect of business communication?",
              options: [
                "Using complex vocabulary",
                "Speaking loudly",
                "Clear and concise messaging",
                "Avoiding feedback",
              ],
              correctAnswer: 2,
              explanation:
                "Clear and concise messaging ensures your audience understands your message effectively.",
            },
          ],
        },
      ],
    },
    {
      id: "module-2",
      title: "Market Research and Analysis",
      lessons: [
        {
          id: "lesson-3",
          title: "Understanding Your Market",
          content: `Effective market research includes:
          - Customer segmentation
          - Competitor analysis
          - Market trends
          - Value proposition development`,
          questions: [
            {
              id: "q4",
              type: "multiple-choice",
              question: "Why is market research important for entrepreneurs?",
              options: [
                "To copy competitors exactly",
                "To understand customer needs and market opportunities",
                "To avoid planning",
                "To spend more money",
              ],
              correctAnswer: 1,
              explanation:
                "Market research helps entrepreneurs understand their target audience and identify opportunities.",
            },
          ],
        },
      ],
    },
  ],
};

export { courseData };
