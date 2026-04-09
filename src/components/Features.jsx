import React from "react";
import { motion } from "framer-motion";
import { FeaturesData, Feature } from "../DynamicData/Features";
const Features = () => {
  return (
    <>
      <section className="section-shell w-full">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.45 }}
          className="container lg:px-12 mx-auto mb-4 sm:mb-8"
        >
          <p className="text-[var(--accent)] text-sm font-medium uppercase tracking-[0.18em]">
            {FeaturesData.title}
          </p>
          <h2 className="premium-section-title mt-2">{FeaturesData.Heading}</h2>
          <p className="premium-section-subtitle mt-2 max-w-2xl">
            Services designed for performance, maintainability, and production reliability.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 lg:gap-12 container lg:px-12 mx-auto">
          {Feature.map((service, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -6 }}
              className="relative app-card glass-card accent-ring p-4 sm:p-8 lg:p-12 rounded-[18px] sm:rounded-lg border-l-[2px] border-l-[var(--accent)] hover:shadow-[0px_12px_24px_0px_rgba(0,0,0,0.14)]"
            >
              <div className="mb-4 sm:mb-6 text-[var(--accent)]">{service.icon}</div>
              <h3 className="text-[20px] sm:text-xl leading-[1.35] font-semibold mb-3 sm:mb-6 app-text-primary">{service.title}</h3>
              <p className="app-text-secondary text-[14px] sm:text-base leading-[1.45]">{service.description}</p>
            </motion.article>
          ))}
        </div>
      </section>
    </>
  );
};
export default Features;
