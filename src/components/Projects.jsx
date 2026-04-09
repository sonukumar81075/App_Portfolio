import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ProjectCard from "./helper/ProjectCard";
import projectsData from "../data/projects.json";

export default function Project() {
  const { header, items } = projectsData;

  return (
    <div className="section-shell w-full md:py-24">
      <div className="container lg:px-12 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
          className="mb-3 sm:mb-6"
        >
          <p className="text-[var(--accent)] text-sm font-medium uppercase tracking-[0.18em]">
            {header?.eyebrow}
          </p>
          <h2 className="premium-section-title mt-2">{header?.title}</h2>
          {header?.description && (
            <p className="premium-section-subtitle max-w-3xl mt-2">{header.description}</p>
          )}
        </motion.div>

        {items?.map((project, index) => (
          <ProjectCard
            key={project.id}
            {...project}
            isReversed={index % 2 === 1}
          />
        ))}

        <div className="mt-6 sm:mt-12 flex flex-wrap gap-3 sm:gap-4 items-center">
          <Link
            to="/cv"
            className="app-btn-primary px-4 py-2 rounded-xl sm:rounded-lg transition text-[14px] sm:text-sm font-semibold"
          >
            View Full CV
          </Link>
          <a
            href="/downloads/sonu-cv.pdf"
            download
            className="app-btn-primary px-4 py-2 rounded-xl sm:rounded-lg transition text-[14px] sm:text-sm font-semibold"
          >
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
}
