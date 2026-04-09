import React from "react";
import projectsData from "../data/projects.json";

const cvData = {
    name: "Sonu Kumar Saini",
    role: "MERN Stack Developer",
    photo: "/images/right_image.png",
    logo: "/images/right_image.png",
    location: "Dausa - Rajasthan",
    contacts: {
        phone: "+91 81075 45771",
        email: "sonusaini81075@gmail.com",
        linkedin: "https://www.linkedin.com/in/sonu-kumar-saini-618a29261",
        github: "https://github.com/sonukumar81075",
        website: "https://github.com/sonukumar81075",
    },
    about:
        "MERN Stack Developer with 2+ years of experience building scalable web applications. Strong in React, Next.js, Node.js, Express, and MongoDB, with a focus on clean architecture, secure APIs, and business-focused user experiences.",
    experience: [
        {
            role: "MERN Stack Developer",
            company: "kytech digital pvt. ltd",
            duration: "July 2024 – Present working",
            summary:
                "Developing scalable MERN products and production-grade portals using engineering best practices. Collaborating across product, design, and backend teams to deliver reliable releases. Designing Node.js and Next.js architecture, building secure APIs, and integrating authentication, payments, and third-party services.",
        },
        {
            role: "Internship · MERN Stack Developer",
            company: "Aladdin digital solutions",
            duration: "April 2024 – June 2024",
            summary:
                "Built and maintained MERN applications with reusable UI modules and robust REST APIs. Improved response times, reduced UI defects, and implemented secure authentication and user management. Worked on real-time workflows, payment integrations, and database optimization.",
        },
    ],
    projects: [
        {
            title: "Portal · inwood Product App",
            description:
                "Built a scalable commerce platform with product discovery, filtering, and conversion-focused flows. Delivered secure authentication, admin controls, payment integration, order tracking, and SEO/performance optimization.",
        },
        {
            title: "Nested Logistics · Inwood Product App",
            description:
                "Designed a logistics management system for inventory and delivery operations. Built dashboards for shipment tracking, order control, and reporting, with role-based access and optimized query performance for high-volume data.",
        },
        {
            title: "Stop Delay App",
            description:
                "Developed a multilingual claims product for flight-delay compensation with conversion-focused UX and clear CTAs. Improved intake quality and call-center efficiency through structured claim workflows.",
        },
    ],
    skills: {
        frontend: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"],
        backend: ["Node.js", "Express.js"],
        database: ["MongoDB"],
        tools: ["GitHub"],
    },
    education: [
        {
            degree: "Bachelor of Arts",
            school: "Maharaja Surajmal Brij University (MSBU)",
            location: "Bharatpur",
            year: "2023",
            percentage: "60%",
        },
        {
            degree: "RBSE | 12th",
            school: "BBN.Sen.Sec.School, Ballabhgarh— 12th",
            location: "Bharatpur, Rajasthan",
            year: "2019",
            percentage: "81.80%",
        },
        {
            degree: "RBSE | 10th",
            school: "Amar Jyoti Sen.Sec.School, Ballabhgarh— 10th",
            location: "Bharatpur, Rajasthan",
            year: "2017",
            percentage: "63.80%",
        },
    ],
    languages: [
        { name: "Hindi", level: "Native" },
        { name: "English", level: "Conversational" },
    ],
    hobbies:
        "Cricket, fitness, and continuous learning.",
    cvLink: "/downloads/sonu.pdf.pdf",
};

const CV = () => {
    const projectItems = projectsData?.items || [];
    return (
        <div className="min-h-screen app-surface px-4 py-24 flex justify-center transition-colors duration-300">
            <div className="max-w-4xl w-full app-card rounded-xl overflow-hidden print:max-w-full print:shadow-none">
                <div className="grid grid-cols-1 sm:grid-cols-3 border-b app-border bg-[var(--surface-soft)]">
                    <div className="flex items-center justify-center py-6 px-6">
                        {/* Outer Ring */}
                        <div className="w-24 h-24 rounded-full  flex items-center justify-center">
                            {/* Inner Image Wrapper */}
                            <div className="w-24 h-24 rounded-full overflow-hidden app-card">
                                {cvData.logo ? (
                                    <img
                                        src={cvData.logo}
                                        alt="Logo"
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-xs text-[#1f2a3d] uppercase tracking-wide">
                                        Logo
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="sm:col-span-2 flex flex-col items-center justify-center py-6 px-6 app-text-primary bg-[var(--surface)]">
                        <h1 className="text-3xl font-bold tracking-wide uppercase text-center">
                            {cvData.name}
                        </h1>
                        <p className="text-sm font-semibold tracking-widest mt-1 uppercase text-center">
                            {cvData.role}
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3">
                    <div className="md:col-span-1 bg-[var(--surface-soft)] app-text-primary p-6 space-y-6 border-r app-border">
                        <section>
                            <h3 className="text-sm font-bold tracking-wide uppercase mb-2">
                                About Me
                            </h3>
                            <p className="text-xs leading-5 app-text-secondary">{cvData.about}</p>
                        </section>

                        <section>
                            <h3 className="text-sm font-bold tracking-wide uppercase mb-2">
                                Contact
                            </h3>
                            <ul className="text-xs leading-5 app-text-secondary space-y-1">
                                <li>{cvData.contacts.phone}</li>
                                <li>{cvData.contacts.email}</li>
                                <li>
                                    <a
                                        href={cvData.contacts.linkedin}
                                        className="hover:text-yellow-300"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        LinkedIn
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href={cvData.contacts.github}
                                        className="hover:text-yellow-300"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        GitHub
                                    </a>
                                </li>
                                <li>{cvData.location}</li>
                            </ul>
                        </section>

                        <section>
                            <h3 className="text-sm font-bold tracking-wide uppercase mb-2">
                                Skills
                            </h3>
                            <ul className="text-xs leading-5 app-text-secondary space-y-1">
                                <li>Frontend: {cvData.skills.frontend.join(", ")}</li>
                                <li>Backend: {cvData.skills.backend.join(", ")}</li>
                                <li>Database: {cvData.skills.database.join(", ")}</li>
                                <li>Tools: {cvData.skills.tools.join(", ")}</li>
                            </ul>
                        </section>

                        <section>
                            <h3 className="text-sm font-bold tracking-wide uppercase mb-2">
                                Language
                            </h3>
                            <ul className="text-xs leading-5 app-text-secondary space-y-1">
                                {cvData.languages.map((lang) => (
                                    <li key={lang.name}>
                                        {lang.name} · {lang.level}
                                    </li>
                                ))}
                            </ul>
                        </section>
                    </div>

                    <div className="md:col-span-2 p-6 space-y-6">
                        <section>
                            <h3 className="text-sm font-bold tracking-wide uppercase mb-3 app-text-primary">
                                Work Experience
                            </h3>
                            <div className="space-y-4">
                                {cvData.experience.map((exp) => (
                                    <div key={exp.role} className="border-b app-border pb-3">
                                        <div className="flex justify-between text-xs app-text-secondary">
                                            <span className="font-semibold app-text-primary">
                                                {exp.role}
                                            </span>
                                            <span>{exp.duration}</span>
                                        </div>
                                        <p className="text-xs app-text-primary">{exp.company}</p>
                                        <p className="text-xs app-text-secondary mt-1 leading-5">
                                            {exp.summary}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section>
                            <h3 className="text-sm font-bold tracking-wide uppercase mb-3 app-text-primary">
                                Projects
                            </h3>
                            <div className="space-y-4">
                                {projectItems.map((proj) => (
                                    <div
                                        key={proj.id}
                                        className="border-b app-border pb-3 space-y-1"
                                    >
                                        {proj.projectUrl ? (
                                            <a
                                                href={proj.projectUrl}
                                                target="_blank"
                                                rel="noreferrer noopener"
                                                className="text-xs font-semibold app-text-primary hover:underline"
                                            >
                                                {proj.title}
                                            </a>
                                        ) : (
                                            <p className="text-xs font-semibold app-text-primary">
                                                {proj.title}
                                            </p>
                                        )}
                                        <p className="text-xs app-text-secondary leading-5">
                                            {proj.description}
                                        </p>
                                        {proj.techStack && (
                                            <div className="flex flex-wrap gap-2 text-[11px] app-text-primary">
                                                {proj.techStack.map((tech, idx) => {
                                                    const techName =
                                                        typeof tech === "string" ? tech : tech.name;
                                                    const techUrl =
                                                        typeof tech === "string" ? null : tech.url;
                                                    return techUrl ? (
                                                        <a
                                                            key={`${proj.id}-tech-${idx}`}
                                                            href={techUrl}
                                                            target="_blank"
                                                            rel="noreferrer noopener"
                                                            className="hover:underline"
                                                        >
                                                            {techName}
                                                        </a>
                                                    ) : (
                                                        <span key={`${proj.id}-tech-${idx}`}>
                                                            {techName}
                                                        </span>
                                                    );
                                                })}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section>
                            <h3 className="text-sm font-bold tracking-wide uppercase mb-3 app-text-primary">
                                Education
                            </h3>
                            <div className="space-y-3">
                                {cvData.education.map((edu) => (
                                    <div
                                        key={edu.degree + edu.school}
                                        className="border-b app-border pb-2"
                                    >
                                        <div className="flex justify-between text-xs app-text-secondary">
                                            <span className="font-semibold app-text-primary">
                                                {edu.degree}
                                            </span>
                                            {edu.year && <span>{edu.year}</span>}
                                        </div>
                                        <p className="text-xs app-text-primary">{edu.school}</p>
                                        {edu.location && (
                                            <p className="text-xs app-text-secondary">{edu.location}</p>
                                        )}
                                        {edu.percentage && (
                                            <p className="text-xs app-text-secondary">
                                                Percentage: {edu.percentage}
                                            </p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* <section>
              <h3 className="text-sm font-bold tracking-wide uppercase mb-3 text-[#1f2a3d]">References</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-gray-700">
                <div>
                  <p className="font-semibold text-[#1f2a3d]">Harumi Kobayashi</p>
                  <p>Salford & Co. | CIO</p>
                  <p>Phone: +56 458-21520</p>
                  <p>Email: hello@reallygreatsite.com</p>
                </div>
                <div>
                  <p className="font-semibold text-[#1f2a3d]">Bailey Dupont</p>
                  <p>Arowwai Industries | CEO</p>
                  <p>Phone: +56 458-21520</p>
                  <p>Email: hello@reallygreatsite.com</p>
                </div>
              </div>
            </section> */}

                        <div className="pt-2">
                            <a
                                href={cvData.cvLink}
                                download
                                className="inline-flex border app-border app-text-primary px-4 py-2 rounded-md hover:bg-[var(--hover)] transition text-sm font-semibold"
                            >
                                Download CV
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CV;
