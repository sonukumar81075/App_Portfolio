import React, { useState } from "react";

export default function ImageModal({
  images = [],
  title,
  description,
  projectUrl,
  onClose,
}) {
  const gallery = images.length ? images : ["/images/project1.jpg"];
  console.log(gallery);
  const [index, setIndex] = useState(0);

  const next = () => setIndex((index + 1) % gallery.length);
  const prev = () => setIndex((index - 1 + gallery.length) % gallery.length);

  return (
    <div
      className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-2 sm:px-4"
      onClick={onClose}
    >
      {/* Modal */}
      <div
        className="relative w-full max-w-5xl sm:max-w-6xl app-card rounded-xl shadow-2xl grid grid-cols-1 lg:grid-cols-2 overflow-hidden border"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 app-text-primary cursor-pointer text-2xl hover:text-[var(--accent)]"
        >
          ✕
        </button>

        {/* LEFT: Image */}
        <div className="relative bg-[var(--surface-soft)] flex items-center justify-center p-4 sm:p-6">
          <img
            src={gallery[index]}
            className="max-h-[320px] sm:max-h-[420px] w-full object-contain rounded-lg "
            alt={title || "project preview"}
          />

          {/* Prev / Next */}
          <button
            onClick={prev}
            className="absolute left-2 w-9 h-9 sm:w-10 sm:h-10 rounded-full items-center cursor-pointer text-center flex justify-center text-2xl sm:text-3xl app-card-soft"
          >
            <span className="-mt-1 sm:-mt-2 app-text-primary"> ‹</span>
          </button>
          <button
            onClick={next}
            className="absolute right-2 w-9 h-9 sm:w-10 sm:h-10 rounded-full items-center cursor-pointer text-center flex justify-center text-2xl sm:text-3xl app-card-soft"
          >
            <span className="-mt-1 sm:-mt-2 app-text-primary"> ›</span>
          </button>
        </div>

        {/* RIGHT: Content */}
        <div className="p-6 sm:p-8 app-text-primary flex flex-col justify-center">
          <span className="text-[var(--accent)] text-sm uppercase mb-2">
            Featured · Web Design
          </span>

          <h2 className="text-3xl font-semibold mb-4">{title}</h2>

          <p className="app-text-secondary leading-relaxed mb-6">
            {description ||
              "I built a modern freelance marketplace web application that allows clients to post projects and freelancers to browse and place bids. The platform features a clean dashboard, structured project listings, and a responsive user interface focused on usability and performance. Built using modern frontend technologies with scalability in mind."}
          </p>

          <div className="flex gap-4">
            <button className="app-btn-primary px-6 py-2.5 rounded-lg transition">
              Like This
            </button>
            <a
              href={projectUrl || "#"}
              target="_blank"
              rel="noreferrer noopener"
              className="app-btn-primary px-6 py-2.5 rounded-lg transition inline-flex items-center justify-center"
            >
              View Project
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
