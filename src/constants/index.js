import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  nextJs,
  redux,
  tailwind,
  angular,
  nodejs,
  mongodb,
  mysql,
  git,
  SQL,
  monster,
  crmnext,
  nickelfox,
  newgen,
  skillrisers,
  proximus,
  aptihealthWeb,
  aptihealthApp,
  zealWeb,
  zealApp,
  rollWeb,
  Python,
  Django,
  PHP,
  Flutter,
  Figma,
  Java,
  rollApp,
  linkedIn,
  github,
  Titanic,
} from "../assets";

const navigationPaths = {
  home: "/",
  about: "about",
  work: "work",
  contact: "contact",
};

export const navLinks = [
  {
    id: navigationPaths.about,
    title: "About",
  },
  {
    id: navigationPaths.work,
    title: "Work",
  },
  {
    id: navigationPaths.contact,
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "MERN Stack Developer",
    icon: creator,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Python Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "PHP",
    icon: PHP,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Python",
    icon: Python,
  },
  {
    name: "Java",
    icon: Java,
  },
  {
    name: "Django",
    icon: Django,
  },
  {
    name: "Flutter",
    icon: Flutter,
  },
  {
    name: "SQL",
    icon: SQL,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Figma",
    icon: Figma,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Git",
    icon: git,
  },
];

const experiences = [
  /*{
    title: "Software Engineer II",
    company_name: "Monster + CareerBuilder",
    company_website: "https://www.linkedin.com/company/monster/about/",
    icon: monster,
    iconBg: "#E6DEDD",
    date: "Feb 2025 - Present",
    points: [
      "Enhanced the employer job portal with job posting, applicant tracking, multi-user access, and subscription model.",
      "Integrated AI-Agents for job posting, applicant insights, job-candidate matching reducing recruiter effort by 80%.",
      "Worked on AI Interview Agent to schedule automated interviews, targeting a 50% reduction in recruiter efforts.",
      "Worked across AWS (Lambda, SQS, SNS, S3, KDS, DynamoDB, Elasticsearch) and monitoring tools like Splunk.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Crmnext",
    company_website: "https://www.businessnext.com/crm",
    icon: crmnext,
    iconBg: "#E6DEDD",
    date: "Nov 2023 - Dec 2024",
    points: [
      "Developed Flow and Layout Designers for HDFC, PNB, IOB, and Utkarsh Bank.",
      "Boosted team efficiency by 50% by implementing monorepo architecture and reusable Design-System.",
      "Integrated GenAI models to automate flow creation from user prompts, eliminating manual configuration efforts.",
      "Integrated unit testing with 80% code coverage, enhancing code reliability and reducing bugs.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Nickelfox Technologies",
    company_website: "https://www.nickelfox.com/",
    icon: nickelfox,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - Nov 2023",
    points: [
      "Developing and maintaining web and mobile applications using React.js, React-native and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Newgen Software",
    company_website: "https://newgensoft.com/home-india/",
    icon: newgen,
    iconBg: "#E6DEDD",
    date: "Mar 2021 - Dec 2021",
    points: [
      "Developed a groundbreaking banking product for a Singapore-based firm, improved transaction management.",
      "Developed a dynamic dashboard for efficient transaction management, resulting in a 30% increase in productivity.",
      "Optimized frontend performance by achieving 20% reduction in page loading time and make it responsive.",
      "Created a transaction report generator, reducing report generation time by 50% and enhancing data analysis.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "Skillrisers",
    company_website: "https://www.skillrisers.com/",
    icon: skillrisers,
    iconBg: "#E6DEDD",
    date: "Jan 2020 - Jul 2020",
    points: [
      "Contributed to the development of a Test Engine Application, empowering users to create and conduct tests seamlessly.",
      "Built three essential modules: Teacher, Student, and Admin, ensuring comprehensive functionality for all user roles.",
      "Collaborated effectively with the development team, actively participating in code reviews and resolving technical challenges.",
      "Demonstrated strong problem-solving skills, consistently delivering high-quality code and meeting project deadlines.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Self-employed",
    company_website: "https://proximus.surge.sh/index.html",
    icon: proximus,
    iconBg: "#E6DEDD",
    date: "Jan 2018 - Jan 2021",
    points: [
      "Spearheaded the development of a fully responsive website for the college coding society.",
      "Led coding sessions, actively sharing knowledge and insights to enrich members' programming skills and understanding.",
      "Organized informative sessions on cutting-edge technologies, including JavaScript and ReactJs.",
      "Curated and designed challenging coding problems for college competitions.",
    ],
  },*/
];

const projects = [
  {
  name: "BookNest",
  description:
    "Designed and developed a full-stack web application named BookNest using the MERN stack (MongoDB, Express.js, React.js, Node.js). The platform allows users to browse, add, and manage books seamlessly. Implemented user authentication with JWT, CRUD operations for book records, and role-based access control for admins and regular users. Integrated responsive frontend using React, React Router, and context for state management. Built RESTful APIs with Node.js and Express, and managed data storage with MongoDB. Deployed the application to cloud platforms for public access. Key technologies: MongoDB, Express.js, React.js, Node.js, JWT, REST API, CSS, Vercel/Render.",
  tags: [
    {
      name: "reactjs",
      color: "blue-text-gradient",
    },
    {
      name: "nodejs",
      color: "green-text-gradient",
    },
    {
      name: "expressjs",
      color: "pink-text-gradient",
    },
    {
      name: "mongodb",
      color: "orange-text-gradient",
    },
    {
      name: "jwt",
      color: "purple-text-gradient",
    },
  ],
  image: aptihealthWeb,
  hosted_link: "https://book-nest-two-steel.vercel.app/"
},

  {
  name: "Titanic Survival Prediction",
  description:
    "Developed a machine learning model to predict passenger survival on the Titanic dataset from Kaggle. The project involved data cleaning, feature engineering, exploratory data analysis (EDA), and applying classification algorithms like Logistic Regression, Decision Tree, and Random Forest. Evaluated model performance using accuracy score, confusion matrix, and cross-validation. Visualized key insights and feature importance to understand survival factors such as age, gender, and passenger class. Built using Python and Scikit-learn.",
  tags: [
    {
      name: "python",
      color: "blue-text-gradient",
    },
    {
      name: "machine learning",
      color: "green-text-gradient",
    },
    {
      name: "scikit-learn",
      color: "pink-text-gradient",
    },
    {
      name: "eda",
      color: "orange-text-gradient",
    },
    {
      name: "data visualization",
      color: "purple-text-gradient",
    },
  ],
  image: Titanic,    // replace with your actual imported image variable
  hosted_link: "https://titanicsurvivalpro.streamlit.app/"
},

  /*{
    name: "Zeal Web",
    description:
      "The Zeal website elevates the experience of enjoying activities with trusted friends, fostering connections and making every interaction exciting.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: zealWeb,
    hosted_link: "https://getzeal.co/",
  },
  {
    name: "Zeal App",
    description:
      "Discover a world of activities with friends through Zeal, an engaging platform. Create events, post updates, chat, and enjoy in-person activities hassle-free. Boost your social life with Zeal!",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "sendgrid",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
    ],
    image: zealApp,
    hosted_link:
      "https://apps.apple.com/us/app/zeal-activities-with-friends/id6446917140",
  },
  {
    name: "Roll Web",
    description:
      "The Roll website is the gateway to the future of decentralized communities and digital assets. It allows users to seamlessly earn, redeem, send, and trade social tokens.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "formik",
        color: "pink-text-gradient",
      },
    ],
    image: rollWeb,
    hosted_link: "https://app.tryroll.com/",
  },
  {
    name: "Roll App",
    description:
      "Join the future of decentralized communities and digital assets with Roll. Earn, redeem, send, and trade social tokens on this innovative platform. Experience transparent transactions and captivating UI design.",
    tags: [
      {
        name: "react-native-web",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "storybook",
        color: "pink-text-gradient",
      },
    ],
    image: rollApp,
    hosted_link:
      "https://play.google.com/store/apps/details?id=com.roll&hl=en_GB",
  },*/
];

const personalInfo = {
  name: "Jameer",
  fullName: "Shaik Jameer Ahmadh",
  email: "jameershaik667@gmail.com",
  mobile: "8897198489",
  role: "Software Developer",
  about: `Shaik Jameer Ahmadh`,
  projectsIntro: `Following projects showcases my skills and experience through
  real-world examples of my work. Each project is briefly described with
  live demos. It reflects my ability to solve complex problems, work
  with different technologies, and manage projects effectively.`,
};

const publicUrls = {
  resume:
    "https://drive.google.com/file/d/1CQbVxgpa2trT7pZ28dHBP8VzF2xO-xZT/view?usp=drivesdk",
  socialProfiles: {
    linkedin: {
      title: "linkedin",
      link: "https://www.linkedin.com/in/jameer-shaik667?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      icon: linkedIn,
    },
    github: {
      title: "github",
      link: "https://github.com/Jameershake",
      icon: github,
    },
  },
};

export {
  services,
  technologies,
  experiences,
  projects,
  navigationPaths,
  personalInfo,
  publicUrls,
};
