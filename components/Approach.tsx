"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLock } from "react-icons/fa";
import { projects } from "@/data";

type Category = "All" | "Full-Stack" | "AI/ML" | "DevOps" | "Data Engineering" | "Systems";

const FILTERS: Category[] = ["All", "Full-Stack", "AI/ML", "DevOps", "Data Engineering", "Systems"];

const CATEGORY_STYLES: Record<string, string> = {
  "Full-Stack":
    "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-700/50",
  "AI/ML":
    "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-700/50",
  DevOps:
    "bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 border-teal-200 dark:border-teal-700/50",
  "Data Engineering":
    "bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-700/50",
  Systems:
    "bg-slate-100 dark:bg-slate-700/30 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-600/50",
};

const Approach = () => {
  const [activeFilter, setActiveFilter] = useState<Category>("All");

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.categories.includes(activeFilter));

  return (
    <section id="projects" className="w-full py-12 md:py-16 lg:py-20">
      <h1 className="heading">
        My <span className="text-purple">Projects</span>
      </h1>

      {/* Filter Bar */}
      <div className="flex flex-wrap justify-center gap-2 mt-8 md:mt-10 mb-10 md:mb-12">
        {FILTERS.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 cursor-pointer ${
              activeFilter === filter
                ? "bg-purple-600 text-white border-purple-600 shadow-md shadow-purple-500/20"
                : "border-purple-300 dark:border-purple-700 text-purple-600 dark:text-purple-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 bg-transparent"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <motion.div
        layout
        className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="h-full"
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Approach;

const ProjectCard = ({ project }: { project: (typeof projects)[number] }) => {
  return (
    <div
      className="
        flex flex-col h-full p-5 md:p-6 rounded-2xl border
        bg-white dark:bg-gradient-to-br dark:from-[rgb(4,7,29)] dark:to-[rgb(12,14,35)]
        border-gray-200 dark:border-slate-800
        hover:border-purple-300 dark:hover:border-purple-700
        hover:shadow-lg hover:shadow-purple-500/10
        transition-all duration-300
      "
    >
      {/* Top row: category badges + github button */}
      <div className="flex items-start justify-between gap-3 mb-4">
        <div className="flex flex-wrap gap-1.5">
          {project.categories.map((cat) => (
            <span
              key={cat}
              className={`px-2.5 py-0.5 text-xs font-medium rounded-full border ${CATEGORY_STYLES[cat]}`}
            >
              {cat}
            </span>
          ))}
        </div>

        {project.githubLink ? (
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex items-center gap-1.5 px-3 py-1.5 shrink-0
              bg-gray-900 dark:bg-gray-800 hover:bg-gray-700 dark:hover:bg-gray-700
              text-white rounded-lg text-xs font-medium
              transition-colors duration-200
            "
          >
            <FaGithub className="w-3.5 h-3.5" />
            Code
          </a>
        ) : (
          <span
            className="
              flex items-center gap-1.5 px-3 py-1.5 shrink-0
              bg-gray-100 dark:bg-gray-800/40
              text-gray-400 dark:text-gray-500
              rounded-lg text-xs font-medium cursor-not-allowed
            "
            title="No public repository"
          >
            <FaLock className="w-3 h-3" />
            Private
          </span>
        )}
      </div>

      {/* Title */}
      <h3 className="text-base md:text-lg font-bold text-gray-900 dark:text-white mb-2 leading-snug">
        {project.title}
      </h3>

      {/* Description */}
      <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 leading-relaxed flex-grow mb-4">
        {project.description}
      </p>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-1.5 mt-auto pt-2 border-t border-gray-100 dark:border-slate-800/60">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="px-2 py-0.5 text-xs bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 rounded-full border border-purple-200 dark:border-purple-800/50"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};
