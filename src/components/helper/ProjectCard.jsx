import React, { useState } from "react";
import { motion } from "framer-motion";
import ImageModal from "../ImageModal";

export default function ProjectCard({
  images = [],
  title,
  description,
  techStack = [],
  projectUrl,
  githubUrl,
  isReversed = false,
}) {
  const [open, setOpen] = useState(false);
  const coverImage = images[0] || "/images/project1.jpg";
  const copy =
    description ||
    "I built a modern freelance marketplace web application that allows clients to post projects and freelancers to browse and place bids. The platform features a clean dashboard, structured project listings, and a responsive user interface focused on usability and performance. Built using modern frontend technologies with scalability in mind.";

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.42 }}
        className="grid px-2 sm:px-6 mx-auto pt-5 sm:pt-[5rem] grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-10 items-center"
      >
        {/* Main Image */}
        <motion.div
          onClick={() => setOpen(true)}
          whileHover={{ y: -4 }}
          className={`w-full p-2 sm:p-4 rounded-[18px] sm:rounded-xl cursor-pointer transition-transform duration-200 active:scale-[0.99] app-card glass-card ${isReversed ? "lg:order-2" : "lg:order-1"}`}
        >
          <img
            src={coverImage}
            alt={title}
            className="w-full h-44 sm:h-72 object-cover rounded-[14px] sm:rounded-xl"
          />
        </motion.div>

        {/* Content */}
        <div className={isReversed ? "lg:order-1" : "lg:order-2"}>
          <p className="app-text-primary text-[20px] sm:text-[25px] leading-[1.35]">{title}</p>
          <p className="app-text-secondary text-[14px] sm:text-[15px] leading-[1.45] mt-2 sm:mt-4">{copy}</p>

          <div className="mt-4 sm:mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {(techStack.length
              ? techStack
              : [
                { name: "React", url: "https://react.dev" },
                { name: "Node.js", url: "https://nodejs.org" },
                { name: "Tailwind CSS", url: "https://tailwindcss.com" },
                { name: "MongoDB", url: "https://www.mongodb.com" },
              ]
            ).map((tech, index) => {
              const techName = typeof tech === "string" ? tech : tech.name;
              const techUrl = typeof tech === "string" ? null : tech.url;
              return techUrl ? (
                <a
                  key={`${title}-${techName}-${index}`}
                  href={techUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="app-card-soft border-x-2 border-[var(--accent)] p-2.5 sm:p-3 rounded-xl sm:rounded-lg text-center text-[14px] sm:text-base hover:text-[var(--accent)] transition"
                >
                  {techName}
                </a>
              ) : (
                <span
                  key={`${title}-${techName}-${index}`}
                  className="app-card-soft border-x-2 border-[var(--accent)] p-2.5 sm:p-3 rounded-xl sm:rounded-lg text-center text-[14px] sm:text-base hover:text-[var(--accent)] transition"
                >
                  {techName}
                </span>
              );
            })}
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {projectUrl && (
              <a
                href={projectUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="app-btn-primary px-3 py-2 rounded-lg text-[13px] sm:text-sm font-medium flex items-center justify-between gap-2 relative overflow-hidden"
              >
                <span>Live Demo</span>

                {/* Animated Dot */}
                <span className="relative flex items-center justify-center">
                  <span className="absolute w-4 h-4 rounded-full bg-[var(--accent)] opacity-30 animate-ping"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent)] shadow-md"></span>
                </span>
              </a>
            )}

            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="app-card-soft px-3 py-2 rounded-lg text-[13px] sm:text-sm app-text-primary hover:text-[var(--accent)] transition-colors"
              >
                GitHub
              </a>
            )}
          </div>
        </div>
      </motion.div>

      {/* Modal */}
      {open && (
        <ImageModal
          images={images}
          title={title}
          description={copy}
          projectUrl={projectUrl}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}
