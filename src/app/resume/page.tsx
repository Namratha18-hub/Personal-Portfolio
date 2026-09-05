import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const skills = [
  ["Programming Languages", "Java, Python, C"],
  ["Web Technologies", "HTML, CSS, JavaScript, ReactJS, ExpressJS, NodeJS"],
  ["Databases", "MySQL"],
  ["Tools", "GitHub, jupiter Notebook, VS Code, Google Colab"],
  ["Core Concepts", "Object-Oriented Programming, Data Structures, Advanced Data Structures and Algorithms Analysis, DBMS, Operating Systems, Software Engineering, Artificial Intelligence, Computer Networks"],
] as const;

const projects = [
  ["SocialPilot", "Built SocialPilot, a full-stack social media platform (Next.js, FastAPI, PostgreSQL, Celery) with OAuth-based publishing across Instagram, LinkedIn, and YouTube.", "Implemented Campaign, Analytics, and Reports modules with role-based access for 4 user roles."],
  ["ExamGuard-AI-Proctoring-System", "Developed an AI-based online proctoring system with real-time face detection, activity monitoring, and integrity scoring.", "Built a Streamlit dashboard for risk analytics, AI reports, visualizations, and JSON/CSV exports."],
  ["AI-Interview", "Built InterviewAI with Next.js, FastAPI, PostgreSQL and Gemini for AI interviews and evaluation.", "Added AI proctoring with face, tab-switch, and interaction monitoring."],
  ["Bluewave-Cafe-Web", "Developed a full-stack BlueWave Web Cafe application with responsive UI and backend functionality.", "Implemented frontend, backend, database integration, and core web functionalities for a seamless user experience."],
] as const;

const certifications = [
  "Programming Essentials in Python 1 and 2, Programming Essentials in C++ - Cisco",
  "Data Base Management System - NPTEL",
  "Introduction To Python, Python For Data Science - Infosys, OOP Using Python Springboard",
  "Cambridge English Qualification (Level-1,2,3)",
  "Introduction to Generative AI Studio - SimpliLearn",
];

function ContactLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>{children}<span>{label}</span></a>;
}

export default function ResumePage() {
  return (
    <main className="resume-page">
      <div className="resume-toolbar"><Link className="back-to-portfolio" href="/">&larr; Back to Portfolio</Link></div>
      <article className="resume-sheet">
        <header className="resume-header">
          <h1>Namratha Sanapala</h1>
          <div className="resume-contact">
            <ContactLink href="https://github.com/Namratha18-hub" label="Namratha18-hub"><FaGithub aria-hidden="true" /></ContactLink>
            <span className="resume-separator">|</span>
            <ContactLink href="https://www.linkedin.com/in/namratha-sanapala" label="Namratha Sanapala"><FaLinkedin aria-hidden="true" /></ContactLink>
            <span className="resume-separator">|</span>
            <ContactLink href="mailto:sanapalanamratha79@gmail.com" label="sanapalanamratha79@gmail.com"><Mail aria-hidden="true" /></ContactLink>
            <span className="resume-separator">|</span>
            <ContactLink href="tel:9490694589" label="9490694589"><Phone aria-hidden="true" /></ContactLink>
          </div>
        </header>

        <section className="resume-block"><h2>About Me</h2><p>Computer Science and Engineering undergraduate with skills in Java, Python, Data Structures and Algorithms, DBMS, Computer Networks, and Software Development. Experienced in developing academic and software projects using programming and problem-solving skills. Seeking a Software Development Internship to apply technical knowledge and contribute to real-world applications.</p></section>
        <section className="resume-block"><h2>Technical Skills</h2>{skills.map(([category, values]) => <p className="skill-line" key={category}><strong>{category}:</strong><span>{values}</span></p>)}</section>
        <section className="resume-block"><h2>Experience</h2>
          <ResumeEntry title="Infosys SpringBoard Internship 7.0" meta="June 2026 – August 2026 (Remote)"><li>Completed the Infosys SpringBoard Internship 7.0, gaining hands-on experience in software development and emerging technologies.</li><li>Applied programming and problem-solving skills through practical learning, projects, and industry-oriented tasks.</li></ResumeEntry>
          <ResumeEntry title="Future Interns" meta="March 2026 – April 2026 (Remote)"><li>Worked on full stack web development involving both frontend and backend technologies.</li><li>Gained hands-on experience in building and deploying web applications while improving problem-solving skills.</li></ResumeEntry>
        </section>
        <section className="resume-block"><h2>Projects</h2>{projects.map(([name, first, second]) => <div className="resume-project" key={name}><h3>{name}</h3><ul><li>{first}</li><li>{second}</li></ul></div>)}</section>
        <section className="resume-block"><h2>Education</h2>
          <EducationEntry title="Sagi Rama Krishnam Raju Engineering College" qualification="B.Tech in Computer Science and Engineering (CGPA: 9.62)" years="2024 – 2028" location="Bhimavaram, AP" />
          <EducationEntry title="Sri Chaitanya Junior College" qualification="Intermediate in Mathematics, Physics, Chemistry (M.P.C) (96.5%)" years="2022 – 2024" location="Srikakulam, AP" />
        </section>
        <section className="resume-block"><h2>Achievements</h2><p>Solved 60+ DSA problems on GFG, Completed multiple AICTE virtual internships (AWS Generative AI Virtual Internship, Google AI-ML Virtual Internship), Maintained a CGPA above 9.6, Built multiple academic and full-stack projects, Multiple Infosys Certification.</p></section>
        <section className="resume-block"><h2>Certifications</h2><ul>{certifications.map((certification) => <li key={certification}>{certification}</li>)}</ul></section>
      </article>
    </main>
  );
}

function ResumeEntry({ title, meta, children }: { title: string; meta: string; children: React.ReactNode }) {
  return <div className="resume-entry"><div className="resume-entry-heading"><h3>{title}</h3><span>{meta}</span></div><ul>{children}</ul></div>;
}

function EducationEntry({ title, qualification, years, location }: { title: string; qualification: string; years: string; location: string }) {
  return <div className="education-entry"><div><h3>{title}</h3><p>{qualification}</p></div><div className="education-meta"><span>{years}</span><span>{location}</span></div></div>;
}
