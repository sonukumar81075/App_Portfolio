import React from "react";
import { motion } from "framer-motion";
import experienceData from "../data/experience.json";

const Experience = () => {
  const { header, experience, education } = experienceData;

  return (
    <div className="section-shell">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45 }}
        className="container lg:px-12 mx-auto"
      >
        <p className="text-[var(--accent)] text-sm font-medium uppercase tracking-[0.18em]">
          {header.eyebrow}
        </p>
        <h2 className="premium-section-title mt-2">{header.title}</h2>
      </motion.div>

      <div className="container lg:px-12 mx-auto md:mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 md:mt-6">
          {/* Experience Column */}
          <div className="space-y-4 sm:space-y-8">
            {experience.map((item, idx) => (
              <motion.article
                key={`${item.role}-${idx}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                whileHover={{ y: -4 }}
                className="app-card glass-card p-4 sm:p-10 lg:p-12 rounded-[18px] sm:rounded-xl border-l-[2px] border-l-[var(--accent)] min-h-[140px] sm:min-h-[180px]"
              >
                <p className="text-xs app-text-secondary mb-2">{item.duration}</p>
                <h4 className="text-[18px] sm:text-lg leading-[1.35] font-semibold app-text-primary">{item.role}</h4>
                {item.company && (
                  <p className="text-[14px] sm:text-sm app-text-secondary mt-1">{item.company}</p>
                )}
                {item.summary && (
                  <p className="text-[14px] sm:text-sm leading-[1.45] app-text-secondary mt-2 sm:mt-3">{item.summary}</p>
                )}
              </motion.article>
            ))}
          </div>

          {/* Education Column */}
          <div className="space-y-4 sm:space-y-8">
            {education.map((item, idx) => (
              <motion.article
                key={`${item.degree}-${idx}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                whileHover={{ y: -4 }}
                className="app-card glass-card p-4 sm:p-10 lg:p-12 rounded-[18px] sm:rounded-xl border-l-[2px] border-l-[var(--accent)] min-h-[140px] sm:min-h-[180px]"
              >
                <p className="text-xs app-text-secondary mb-2">{item.duration}</p>
                <h4 className="text-[18px] sm:text-lg leading-[1.35] font-semibold app-text-primary">{item.degree}</h4>
                {item.school && (
                  <p className="text-[14px] sm:text-sm app-text-secondary mt-1">{item.school}</p>
                )}
                {item.notes && (
                  <p className="text-[14px] sm:text-sm leading-[1.45] app-text-secondary mt-2 sm:mt-3">{item.notes}</p>
                )}
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;

