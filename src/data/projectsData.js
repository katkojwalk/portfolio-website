export const projectCategories = [
  "All",
  "React Apps",
  "Databases",
  "Web Development",
  "WordPress",
  "PHP",
  "AWS",
  "DevOps",
  "Graphic Design",
  "SEO",
  "AEO",
  "GEO",
  "CMR"
];

export const projects = [
  {
    id: "react-supabase-task-app",
    title: "React & Supabase Full-Stack App",
    shortDescription: "Modern React web application featuring PostgreSQL backend, authentication, and real-time database syncing with Supabase.",
    fullDescription: "A full-stack Single Page Application (SPA) built using React.js and Supabase (PostgreSQL). Implements secure user authentication, row-level security (RLS), real-time database subscriptions, and responsive UI components.",
    category: "React Apps",
    secondaryCategories: ["React Apps", "Databases", "Web Development"],
    technologies: ["React.js", "Supabase", "PostgreSQL", "Tailwind CSS", "JavaScript ES6"],
    featured: true,
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
    githubUrl: "[ADD GITHUB URL]",
    liveUrl: "[ADD LIVE DEMO URL]",
    status: "Full-Stack React App",
    features: [
      "PostgreSQL database integration via Supabase",
      "Real-time data synchronization & state management",
      "Secure user authentication (JWT / OAuth)",
      "Responsive glassmorphism dashboard UI"
    ],
    architecture: "React SPA + Supabase (PostgreSQL BaaS)"
  },
  {
    id: "mongodb-firebase-auth-suite",
    title: "Multi-Database Cloud Sync Suite",
    shortDescription: "Database architecture lab comparing NoSQL document storage (MongoDB) with Google Firebase Firestore real-time sync.",
    fullDescription: "A dual database exploration suite demonstrating document modeling in MongoDB, real-time Firestore synchronization in Firebase, and relational SQL query optimization.",
    category: "Databases",
    secondaryCategories: ["Databases", "React Apps"],
    technologies: ["MongoDB", "Firebase", "PostgreSQL", "MySQL", "React.js"],
    featured: true,
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=800&auto=format&fit=crop",
    githubUrl: "[ADD GITHUB URL]",
    liveUrl: "[ADD DEMO URL]",
    status: "Database Infrastructure Project",
    features: [
      "MongoDB Mongoose schema & aggregation pipelines",
      "Firebase Auth & Cloud Firestore live listener setup",
      "PostgreSQL & MySQL relational schema design",
      "API data mapping and caching strategies"
    ],
    architecture: "React Frontend + MongoDB NoSQL + Firebase Firestore + PostgreSQL"
  },
  {
    id: "quadra-tuitions",
    title: "Quadra Home Tuitions",
    shortDescription: "A modern, professional home tuition business platform connecting students with qualified tutors.",
    fullDescription: "Quadra Home Tuitions is a dedicated web platform designed for home tutoring services. Built to streamline tutor search, subject selection, and contact inquiries with optimized page load speeds and clean layout.",
    category: "Web Development",
    secondaryCategories: ["PHP", "WordPress", "SEO", "Databases"],
    technologies: ["PHP", "WordPress", "MySQL", "HTML5", "CSS3", "JavaScript", "SEO"],
    featured: true,
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop",
    githubUrl: "[ADD GITHUB URL]",
    liveUrl: "[ADD LIVE WEBSITE URL]",
    status: "Live Business Site",
    features: [
      "Responsive service listing pages",
      "Interactive inquiry form",
      "Optimized for local search engine visibility",
      "Fast loading speed & mobile optimization"
    ],
    architecture: "LAMP Architecture (Linux, Apache, MySQL, PHP / WordPress)"
  },
  {
    id: "3d-calculator",
    title: "3D Glassmorphism Calculator",
    shortDescription: "Interactive, modern 3D glassmorphism calculator with smooth animations and calculation history.",
    fullDescription: "A sleek frontend application showcasing 3D visual styling, glassmorphism UI effects, keyboard navigation support, dark/light ambient lighting, and dynamic calculation history stack.",
    category: "React Apps",
    secondaryCategories: ["React Apps", "Graphic Design"],
    technologies: ["React.js", "Tailwind CSS", "JavaScript ES6", "CSS 3D Transforms"],
    featured: true,
    isInteractiveDemo: true, // Triggers built-in 3D calculator modal!
    image: "https://images.unsplash.com/photo-1587145820266-a5951ee6f620?q=80&w=800&auto=format&fit=crop",
    githubUrl: "[ADD GITHUB URL]",
    liveUrl: "[ADD LIVE DEMO URL]",
    status: "Interactive Web App",
    features: [
      "Realistic 3D glassmorphism depth effects",
      "Calculation history stack",
      "Keyboard input support (NumPad & Operators)",
      "Responsive fluid layout"
    ],
    architecture: "Single Page Application (React / Component State)"
  },
  {
    id: "aws-static-website",
    title: "AWS Static Website Hosting",
    shortDescription: "High-availability static web hosting architecture on AWS EC2 & S3 with Nginx reverse proxy.",
    fullDescription: "Cloud deployment project showcasing server setup, Linux administration, Nginx web server configuration, S3 bucket storage integration, and SSL security configuration.",
    category: "AWS",
    secondaryCategories: ["AWS", "DevOps"],
    technologies: ["AWS EC2", "AWS S3", "Linux (Ubuntu)", "Nginx", "Git"],
    featured: true,
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
    githubUrl: "[ADD GITHUB URL]",
    liveUrl: "[ADD LIVE DEMO URL]",
    status: "Cloud Infrastructure Project",
    features: [
      "Configured Ubuntu EC2 instance on AWS",
      "Nginx web server setup & virtual host routing",
      "AWS S3 bucket setup for static assets",
      "Linux command line administration & firewall setup"
    ],
    architecture: "AWS EC2 + S3 + Nginx Reverse Proxy"
  },
  {
    id: "aws-cloud-experiments",
    title: "AWS Multi-Tier Infrastructure Lab",
    shortDescription: "Cloud architecture setup involving EC2 compute instances, S3 object storage, and RDS relational databases.",
    fullDescription: "A hands-on cloud environment exploring multi-tier deployment patterns, database connection security, S3 bucket policy management, and Linux server management.",
    category: "AWS",
    secondaryCategories: ["AWS", "Databases", "PHP"],
    technologies: ["AWS EC2", "AWS S3", "AWS RDS (MySQL/PostgreSQL)", "Linux", "Nginx"],
    featured: true,
    image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=800&auto=format&fit=crop",
    githubUrl: "[ADD GITHUB URL]",
    liveUrl: "[ADD ARCHITECTURE DOCS URL]",
    status: "Cloud Experiment / Lab",
    features: [
      "EC2 instance provisioning and security group rules",
      "RDS PostgreSQL / MySQL database setup",
      "S3 storage bucket integration for backup & media assets",
      "Basic IAM role & policy permissions setup"
    ],
    architecture: "AWS VPC + EC2 Web Server + RDS Database + S3 Storage"
  },
  {
    id: "devops-cicd-pipeline",
    title: "DevOps Automated CI/CD Pipeline",
    shortDescription: "End-to-end continuous integration and continuous deployment pipeline using Git, Jenkins, Docker, and Kubernetes.",
    fullDescription: "An architectural DevOps pipeline model demonstrating code commit automation, build testing, containerization with Docker, container registry pushes, and deployment orchestration onto Kubernetes & AWS.",
    category: "DevOps",
    secondaryCategories: ["DevOps", "AWS"],
    technologies: ["Git", "GitHub", "Jenkins", "Docker", "Kubernetes", "AWS"],
    featured: true,
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=800&auto=format&fit=crop",
    githubUrl: "[ADD GITHUB URL]",
    liveUrl: "[ADD PIPELINE DEMO URL]",
    status: "Pipeline Prototype / In Progress",
    features: [
      "Automated Git commit triggers to Jenkins server",
      "Containerization using Dockerfile builds",
      "Kubernetes pod deployment configuration",
      "Visual pipeline status and stage logging"
    ],
    architecture: "Git → Jenkins → Docker → Docker Registry → Kubernetes (K8s) → AWS"
  }
];
