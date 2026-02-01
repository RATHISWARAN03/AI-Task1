export const programInfo = `
Iron Lady Leadership Programs Overview:

1.  **Leadership Accelerator (12 Weeks, $1,500)**
    *   **Description**: Empower women to become transformational leaders.
    *   **Ideal For**: Women aspiring to leadership roles.
    *   **Outcomes**: Enhanced leadership skills and a clear career path.

2.  **Confidence Bootcamp (8 Weeks, $1,000)**
    *   **Description**: Build unshakeable confidence and self-belief.
    *   **Ideal For**: Professionals seeking to boost their self-assurance.
    *   **Outcomes**: Increased confidence in personal and professional life.

3.  **Communication Mastery (10 Weeks, $1,200)**
    *   **Description**: Master the art of powerful communication.
    *   **Ideal For**: Anyone looking to improve their public speaking and interpersonal skills.
    *   **Outcomes**: The ability to communicate with impact and influence.

4.  **Transformational Coaching (12 Weeks, $2,000)**
    *   **Description**: Personalized 1-on-1 coaching for female leaders.
    *   **Ideal For**: Female leaders seeking personalized guidance and support.
    *   **Outcomes**: A tailored action plan for leadership growth.
`;

export type Program = {
  id: string;
  title: string;
  icon: string;
  description: string;
  duration: string;
  price: string;
  tag: string;
  idealFor: string;
  outcomes: string;
};

export const programs: Program[] = [
  {
    id: "leadership-accelerator",
    title: "Leadership Accelerator",
    icon: "Award",
    description: "Empower women to become transformational leaders.",
    duration: "12 weeks",
    price: "1,500",
    tag: "Leadership",
    idealFor: "Women aspiring to leadership roles.",
    outcomes: "Enhanced leadership skills and a clear career path.",
  },
  {
    id: "confidence-bootcamp",
    title: "Confidence Bootcamp",
    icon: "Sunrise",
    description: "Build unshakeable confidence and self-belief.",
    duration: "8 weeks",
    price: "1,000",
    tag: "Confidence",
    idealFor: "Professionals seeking to boost their self-assurance.",
    outcomes: "Increased confidence in personal and professional life.",
  },
  {
    id: "communication-mastery",
    title: "Communication Mastery",
    icon: "MessageSquare",
    description: "Master the art of powerful communication.",
    duration: "10 weeks",
    price: "1,200",
    tag: "Communication",
    idealFor:
      "Anyone looking to improve their public speaking and interpersonal skills.",
    outcomes: "The ability to communicate with impact and influence.",
  },
  {
    id: "transformational-coaching",
    title: "Transformational Coaching",
    icon: "Award",
    description: "Personalized 1-on-1 coaching for female leaders.",
    duration: "12 weeks",
    price: "2,000",
    tag: "Coaching",
    idealFor: "Female leaders seeking personalized guidance and support.",
    outcomes: "A tailored action plan for leadership growth.",
  },
];

export const faqs = [
  {
    question: "What is Iron Lady's mission?",
    answer:
      "Iron Lady is dedicated to empowering women to become transformational leaders. We provide high-impact coaching and training programs designed to build confidence, enhance skills, and accelerate career growth in leadership roles.",
  },
  {
    question: "Who are the leadership programs for?",
    answer:
      "Our programs are designed for women at all stages of their leadership journey—from aspiring leaders and new managers to seasoned executives looking to refine their impact. We welcome all who are driven to lead.",
  },
  {
    question: "Do I need prior leadership experience?",
    answer:
      "Not necessarily. Our 'New Manager Bootcamp' is perfect for beginners, while programs like the 'Transformational Leadership Program' are suited for those with some experience. We focus on your potential and ambition to grow.",
  },
  {
    question: "What is the format of the programs?",
    answer:
      "Our programs are delivered through a blend of live online workshops, one-on-one coaching sessions, peer group discussions, and practical, real-world assignments to ensure a flexible and deeply engaging learning experience.",
  },
  {
    question: "Do you offer career support after program completion?",
    answer:
      "Yes. Upon completion, you join the Iron Lady alumni network, a powerful community of women leaders. We offer continuous learning opportunities, networking events, and access to exclusive resources to support your ongoing journey.",
  },
];

export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  program: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    id: "mary-smith",
    quote:
      "Iron Lady's Leadership Accelerator transformed my confidence and helped me get a promotion. Highly recommend!",
    name: "Mary Smith",
    program: "Leadership Accelerator",
    rating: 5,
  },
  {
    id: "sarah-johnson",
    quote:
      "The Confidence Bootcamp was life-changing. I feel more empowered in my career and personal life.",
    name: "Sarah Johnson",
    program: "Confidence Bootcamp",
    rating: 5,
  },
  {
    id: "jessica-lee",
    quote:
      "Communication Mastery improved my public speaking skills immensely. Iron Lady's coaching is powerful!",
    name: "Jessica Lee",
    program: "Communication Mastery",
    rating: 5,
  },
  {
    id: "emily-williams",
    quote:
      "The personalized coaching I received was exceptional. Iron Lady truly delivers on their promises.",
    name: "Emily Williams",
    program: "Transformational Coaching",
    rating: 5,
  },
];

export type CoreValue = {
  id: string;
  title: string;
  icon: string;
  description: string;
};

export const coreValues: CoreValue[] = [
  {
    id: "empowerment",
    title: "Empowerment",
    icon: "Heart",
    description:
      "We believe every woman has the power to lead and inspire change.",
  },
  {
    id: "transformation",
    title: "Transformation",
    icon: "Target",
    description:
      "Our programs are designed to create lasting, meaningful change.",
  },
  {
    id: "community",
    title: "Community",
    icon: "Users",
    description: "Join a supportive network of ambitious women leaders.",
  },
  {
    id: "excellence",
    title: "Excellence",
    icon: "Sparkles",
    description:
      "We are committed to delivering world-class coaching experiences.",
  },
];
