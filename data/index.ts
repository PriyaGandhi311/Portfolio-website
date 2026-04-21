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
    schoolName: "North Carolina State University, Raleigh, NC",
    CGPA: "CGPA: 3.94 / 4.00",
    duration: "August 2024 - May 2026",
    coursework:
      "Design and Analysis of Algorithm, Automated Learning and Data Analytics, Software Engineering, Object Oriented Design and Development, Computer and Network Security, Neural Networks",
    className: "lg:col-span-5 md:col-span-5 md:row-span-2",
    titleClassName: "justify-start",
  },
  {
    id: 2,
    degree: "Bachelor of Technology, Computer Engineering",
    schoolName: "Dwarkadas J. Sanghvi College of Engineering, Mumbai, India",
    CGPA: "CGPA: 9.14 / 10.00",
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
    title: "Software Developer ",
    company: "LexisNexis",
    duration: "June 2025 - Present",
    desc: "Working on Lexis+ AI, a generative AI product that enhances legal research. I contribute across the frontend and backend, using Angular with microfrontend architecture (module federation) for scalable, high-performance UIs, and C# with a Model-View architecture on the backend to build robust, maintainable services — all to deliver a seamless, responsive user experience.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
  {
    id: 2,
    title: "Business Technology Solution Associates",
    company: "ZS Associates",
    duration: "September 2023 - July 2024",
    desc: "Leveraged Salesforce Management Cloud, AWS S3, Zaidyn(internal software), and HDFS to generate key insights, enhancing operations of 6 brands across 5 European countries by 63% for a multinational pharmaceutical client. Automated the Data Quality Management (DQM) process with Python, PySpark, Hive, HDFS and SQL, achieving a 27% reduction in overall runtime saving 4 hours of team effort per week.Collaborated with Accenture and other cross-functional teams to streamline data processing and engaged in User Acceptance Testing (UAT), achieving 100% sign-off indicating client satisfaction.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 3,
    title: "Software Developer",
    company: "ICICI Lombard",
    duration: "June 2023 - August 2023",
    desc: "Created APIs for NYSA, a motor insurance product, utilizing .NET to retrieve data from the government's motor database, and architected a user-friendly front end using TypeScript and AngularJS, resulting in a 24% increase in revenue generated.",
    className: "md:col-span-2", 
    thumbnail: "/exp2.svg",
  },
  {
    id: 4,
    title: "Software Developer",
    company: "JP Morgan Chase & Co",
    duration: "June 2022 - July 2022",
    desc: "Utilizing cloud technologies like AWS's Apache Kafka and Kubernetes orchestration to implement checkpointing on data streams significantly enhanced the speed and efficiency of real-time data transfer by 30%. Developed unit test cases using Java programming language's JUnit and Mockito frameworks to assess the functionality of the code implemented in Spring Boot, a data streaming application attaining above 90% test case coverage",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  }
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

export const projects = [
  {
    id: 1,
    title: "Prompter - AI Meeting Copilot",
    description:
      "Full-stack Next.js 14 meeting assistant that transcribes live audio via Groq Whisper and streams structured LLM suggestions (questions, fact-checks, talking points) token-by-token using LLaMA 3.3 70B.",
    categories: ["Full-Stack", "AI/ML"],
    technologies: [
      "Next.js",
      "TypeScript",
      "React",
      "Groq API",
      "Whisper",
      "LLaMA 3.3",
      "Tailwind CSS",
      "MediaRecorder API",
    ],
    githubLink: "https://github.com/PriyaGandhi311/prompter",
  },
  {
    id: 2,
    title: "PaperStack - Production-Ready RAG Platform",
    description:
      "Production-grade RAG platform with FastAPI microservices (Backend, Embedding, RAG) enabling scalable document retrieval and LLM inference, with a full CI/CD pipeline including security scanning (Gitleaks, CodeQL) and Docker image signing via Cosign.",
    categories: ["AI/ML", "DevOps"],
    technologies: [
      "FastAPI",
      "Python",
      "Docker",
      "PostgreSQL",
      "GitHub Actions",
      "Ansible",
      "Pytest",
      "Cosign",
      "CodeQL",
    ],
    githubLink: null,
  },
  {
    id: 3,
    title: "Leetcode Chrome Extension",
    description:
      "Chrome extension with a React + TypeScript frontend and FastAPI backend that reinforces problem-solving retention through spaced-repetition email reminders, backed by Celery/Redis async task processing and a cloud-hosted PostgreSQL database.",
    categories: ["Full-Stack", "DevOps"],
    technologies: ["React", "TypeScript", "FastAPI", "Celery", "Redis", "PostgreSQL", "Python"],
    githubLink: "https://github.com/PriyaGandhi311/leetcode-chrome-extension",
  },
  {
    id: 4,
    title: "Gamified Donation Platform for Social Impact",
    description:
      "Full-stack donation platform built with React, Node.js, and MongoDB, featuring a dynamic leaderboard system that gamifies donor engagement and a Gemini API-powered support agent providing real-time assistance.",
    categories: ["Full-Stack", "AI/ML"],
    technologies: ["React", "JavaScript", "Node.js", "MongoDB", "Gemini API"],
    githubLink: "https://github.com/PriyaGandhi311/PhantomPack",
  },
  {
    id: 5,
    title: "TrendTube Microservices Platform",
    description:
      "Modular video analytics platform in Java Spring Boot with RESTful APIs, RabbitMQ event-driven async processing, and gRPC for low-latency binary communication between upload and processing services.",
    categories: ["Full-Stack", "Systems"],
    technologies: ["Java", "Spring Boot", "RabbitMQ", "gRPC", "MySQL", "REST APIs", "Swagger UI"],
    githubLink: "https://github.com/PriyaGandhi311/TrendTube",
  },
  {
    id: 6,
    title: "Movie Ticketing System",
    description:
      "MVC-based movie ticketing app in Ruby on Rails with role-based authentication for admins and regular users, and a Cucumber + Capybara automated test suite covering end-to-end user flows.",
    categories: ["Full-Stack"],
    technologies: ["Ruby on Rails", "MVC", "Cucumber", "Capybara", "Authentication"],
    githubLink: null,
  },
  {
    id: 7,
    title: "Sparkify Music Data Warehouse ETL",
    description:
      "Apache Airflow pipeline for hourly ingestion of music event logs from Amazon S3 into a Redshift data warehouse, modeled as a dimensional star schema with optimized fact and dimension tables for large-scale analytical queries.",
    categories: ["Data Engineering", "DevOps"],
    technologies: ["Apache Airflow", "Amazon S3", "Amazon Redshift", "Python", "SQL", "Star Schema"],
    githubLink: null,
  },
  {
    id: 8,
    title: "Log Forge",
    description:
      "Python-based Linux system inspection and logging pipeline using psutil and SQLite to simulate automated test environments, with a Streamlit dashboard for real-time metric visualization and reproducible test reporting across containerized setups.",
    categories: ["Data Engineering", "DevOps"],
    technologies: ["Python", "psutil", "SQLite", "Streamlit", "Linux", "Docker"],
    githubLink: "https://github.com/PriyaGandhi311/LogForge",
  },
  {
    id: 9,
    title: "DistLogZip - Distributed Log Compression",
    description:
      "C++ distributed log compression system using dictionary-based and cluster-guided parsing to reduce storage overhead, with selective decompression enabling fast, targeted log retrieval across worker nodes at scale.",
    categories: ["Data Engineering", "Systems"],
    technologies: ["C++", "Distributed Systems", "Dictionary Encoding", "Cluster Parsing"],
    githubLink: null,
  },
  {
    id: 10,
    title: "AI Web Scraper",
    description:
      "Web scraper using Python, BeautifulSoup, and Selenium to extract structured data from dynamic websites, integrated with LangChain and a local LLaMA model to automatically summarize and classify scraped content.",
    categories: ["AI/ML"],
    technologies: ["Python", "BeautifulSoup", "Selenium", "LangChain", "LLaMA"],
    githubLink: "https://github.com/PriyaGandhi311/AI-webScraper",
  },
  {
    id: 11,
    title: "Banking System in C++",
    description:
      "Command-line banking system in C++ with encryption-backed user authentication, file-based persistence, and full transaction logic including deposits, withdrawals, transfers, input validation, and error handling.",
    categories: ["Systems"],
    technologies: ["C++", "File I/O", "Encryption", "Data Structures"],
    githubLink: "https://github.com/PriyaGandhi311/Banking-System",
  },
  {
    id: 12,
    title: "Multimodal Single Cell Integration",
    description:
      "Neural network pipeline for cross-modal consistency validation across DNA, RNA, and protein data at the single-cell level, evaluating SVD dimensionality reduction and activation functions on high-dimensional biological datasets.",
    categories: ["AI/ML"],
    technologies: ["Python", "Neural Networks", "SVD", "Keras", "Bioinformatics"],
    githubLink: null,
  },
];
