import React from "react";
import experienceData from "../data/experience.json";

const Experience = () => {
  const { header, experience, education } = experienceData;

  return (
    <div className="section-shell">
      {/* <div className="container lg:px-12 mx-auto text-center">
        <h3 className="text-yellow-500 text-sm font-semibold uppercase">
          {header.eyebrow}
        </h3>
        <h2 className="text-4xl font-bold mt-2 mb-[10px]">{header.title}</h2>
      </div> */}

      <div className="container lg:px-12 mx-auto md:mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 md:mt-6">
          {/* Experience Column */}
          <div className="space-y-4 sm:space-y-8">
            {experience.map((item, idx) => (
              <div
                key={`${item.role}-${idx}`}
                className="app-card p-4 sm:p-10 lg:p-12 rounded-[18px] sm:rounded-xl border-l-[2px] border-l-[var(--accent)] min-h-[140px] sm:min-h-[180px]"
              >
                <p className="text-xs app-text-secondary mb-2">{item.duration}</p>
                <h4 className="text-[18px] sm:text-lg leading-[1.35] font-semibold app-text-primary">{item.role}</h4>
                {item.company && (
                  <p className="text-[14px] sm:text-sm app-text-secondary mt-1">{item.company}</p>
                )}
                {item.summary && (
                  <p className="text-[14px] sm:text-sm leading-[1.45] app-text-secondary mt-2 sm:mt-3">{item.summary}</p>
                )}
              </div>
            ))}
          </div>

          {/* Education Column */}
          <div className="space-y-4 sm:space-y-8">
            {education.map((item, idx) => (
              <div
                key={`${item.degree}-${idx}`}
                className="app-card p-4 sm:p-10 lg:p-12 rounded-[18px] sm:rounded-xl border-l-[2px] border-l-[var(--accent)] min-h-[140px] sm:min-h-[180px]"
              >
                <p className="text-xs app-text-secondary mb-2">{item.duration}</p>
                <h4 className="text-[18px] sm:text-lg leading-[1.35] font-semibold app-text-primary">{item.degree}</h4>
                {item.school && (
                  <p className="text-[14px] sm:text-sm app-text-secondary mt-1">{item.school}</p>
                )}
                {item.notes && (
                  <p className="text-[14px] sm:text-sm leading-[1.45] app-text-secondary mt-2 sm:mt-3">{item.notes}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;

