export const navItems = [
  { name: "About", link: "#about" },
  { name: "Education", link: "#education" },
  { name: "Experience", link: "#experience" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    degree: "Master of Computer Science",
    schoolName: "North Carolina State University",
    location: "Raleigh, NC",
    duration: "August 2024 - May 2026",
    coursework:
      "Design and Analysis of Algorithm, Automated Learning and Data Analytics, Software Engineering, Object Oriented Design and Development, Computer and Network Security, Neural Networks",
    className: "lg:col-span-5 md:col-span-5 md:row-span-2",
    titleClassName: "justify-start",
  },
  {
    id: 2,
    degree: "Bachelor of Technology, Computer Engineering",
    schoolName: "Dwarkadas J. Sanghvi College of Engineering",
    location: "Mumbai, India",
    duration: "August 2019 - May 2023",
    coursework:
      "Discrete Structures, Data Structures, Computer Organisation and Architecture, Computer Graphics, Operating System, Database Management System, Computer Network, Theory of Computer Science, Advance Algorithm, Data Warehousing and Mining, Machine Learning, Artificial Intelligence",
    className: "lg:col-span-5 md:col-span-5 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Business Technology Solution Associates",
    company: "ZS Associates",
    duration: "September 2023 - July 2024",
    desc: "Leveraged Salesforce Management Cloud, AWS S3, Zaidyn(internal software), and HDFS to generate key insights, enhancing operations of 6 brands across 5 European countries by 63% for a multinational pharmaceutical client. Automated the Data Quality Management (DQM) process with Python, PySpark, Hive, HDFS and SQL, achieving a 27% reduction in overall runtime saving 4 hours of team effort per week.Collaborated with Accenture and other cross-functional teams to streamline data processing and engaged in User Acceptance Testing (UAT), achieving 100% sign-off indicating client satisfaction.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Software Developer",
    company: "ICICI Lombard",
    duration: "June 2023 - August 2023",
    desc: "Created APIs for NYSA, a motor insurance product, utilizing .NET to retrieve data from the government's motor database, and architected a user-friendly front end using TypeScript and AngularJS, resulting in a 24% increase in revenue generated.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Software Developer",
    company: "JP Morgan Chase & Co",
    duration: "June 2022 - July 2022",
    desc: "Utilizing cloud technologies like AWS's Apache Kafka and Kubernetes orchestration to implement checkpointing on data streams significantly enhanced the speed and efficiency of real-time data transfer by 30%. Developed unit test cases using Java programming language's JUnit and Mockito frameworks to assess the functionality of the code implemented in Spring Boot, a data streaming application attaining above 90% test case coverage",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Blockchain Developer ",
    company: "MasterBridge",
    duration: "June 2021 - Auguat 2021",
    desc: "Built a Decentralized application (dapp) using Truffle that could keep track of the product in supply chain. Composed contracts using Solidity language for Ethereum network in Ganache development environment",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/email.svg",
    link: "mailto:priyagandhi4688@gmail.com",
  },
  {
    id: 2,
    img: "/git.svg",
    link: "https://github.com/PriyaGandhi311",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/priya-gandhi-1a54751b2/",
  },
];
