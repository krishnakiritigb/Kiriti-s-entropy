/**
 * Resume Data - Hardcoded from Kiriti's PDF
 * This will be replaced with PDF parsing in Week 2
 */

export interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  technologies: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  details?: string;
}

export interface ResumeData {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  summary: string;
  techStack: string[];
  experiences: ExperienceItem[];
  education: EducationItem[];
  skillCategories: SkillCategory[];
}

export const resumeData: ResumeData = {
  name: "Kiriti Gunukuntla Bhasker",
  title: "Full Stack Developer",
  location: "Mississauga, Ontario",
  email: "kiritigb07@gmail.com",
  phone: "+1 (437) 799-3425",
  linkedin: "https://linkedin.com/in/kiritigb",
  github: "https://github.com/kiritigb",

  summary: "Full-Stack Developer with 3+ years of experience building scalable SaaS platforms, AI-powered solutions, and enterprise applications. Skilled in React, FastAPI, .NET, SQL Server, and cloud platforms with hands-on experience delivering production-ready LLM/RAG-powered features. Completed Masters in Big Data Analytics from Trent University.",

  techStack: ["React", "FastAPI", ".NET", "SQL Server", "Generative AI", "TypeScript"],

  education: [
    {
      degree: "Masters of Science (Applied Modelling and Quantitative Methods – Big Data Analytics)",
      institution: "Trent University",
      location: "Canada",
      period: "Jan 2023 - Apr 2024",
      details: "CGPA: 8.6"
    },
    {
      degree: "B.Tech (Computer Science with AI Specialization)",
      institution: "Koneru Lakshmaiah Education Foundation",
      location: "India",
      period: "Jul 2017 - Jun 2021",
      details: "CGPA: 7.9"
    }
  ],

  experiences: [
    {
      title: "Full Stack Engineer",
      company: "Lucid Data Hub",
      location: "Toronto, ON",
      period: "2022 - Aug 2025",
      description: "Built multi-tenant SaaS data integration platform serving healthcare, finance, retail, and mining industries. Developed interactive dashboards with React and TypeScript. Designed FastAPI endpoints and integrated Celery + Redis for long-running LLM tasks. Implemented confidence scoring for code conversion using ML techniques.",
      technologies: ["React", "TypeScript", "FastAPI", ".NET", "SQL Server", "Generative AI", "RAG", "Celery", "Redis"]
    },
    {
      title: "Software Developer",
      company: "Vtiger Systems",
      location: "Hyderabad, India",
      period: "2021 - 2022",
      description: "Developed CRM extensions using VTAP framework (built on Vue.js), enabling clients to extend SaaS CRM with custom apps and connectors. Built interactive UI components and integrations. Improved client onboarding and mentored junior developers on production-ready development practices.",
      technologies: ["VTAP", "Vue.js", "JavaScript", "CRM Development", "Integration"]
    },
    {
      title: "Software Development Intern",
      company: "SenSen Networks",
      location: "Hyderabad, India",
      period: "2020",
      description: "Developed real-time file broadcast systems for automated processing pipelines, supporting continuous integration and delivery workflows.",
      technologies: ["Python", "Real-time Systems", "CI/CD"]
    }
  ],

  skillCategories: [
    {
      title: "Languages & Frameworks",
      skills: [
        "Python",
        "C#",
        "JavaScript / TypeScript",
        "React",
        "Vue.js",
        ".NET",
        "FastAPI",
        "Flask",
        "Node.js"
      ]
    },
    {
      title: "AI/ML & Data Science",
      skills: [
        "Generative AI",
        "RAG Systems",
        "LangChain",
        "NLP",
        "Machine Learning",
        "Deep Learning",
        "Hugging Face"
      ]
    },
    {
      title: "Databases & DevOps",
      skills: [
        "Microsoft SQL Server",
        "PostgreSQL",
        "Redis",
        "Celery",
        "Docker",
        "Azure",
        "Databricks",
        "Git / CI/CD"
      ]
    }
  ]
};
