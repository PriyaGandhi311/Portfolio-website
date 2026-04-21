import React from "react";
import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";

const Experience = () => {
  return (
    <div id="experience" className="py-20 w-full">
      <h1 className="heading">
        <span className="text-purple">Work Experience</span>
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: `calc(1.75rem * 0.96)`,
            }}
            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800 !items-start !justify-start"
          >
            <div className="flex flex-col p-5 md:p-6 gap-4 h-full text-left">
              {/* Top row: logo + title/company/duration */}
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-14 h-14 flex items-center justify-center">
                  <img
                    src={card.thumbnail}
                    alt={card.company}
                    className="max-h-14 max-w-[56px] w-auto object-contain"
                  />
                </div>
                <div className="flex flex-col">
                  <h1 className="text-base xl:text-lg 2xl:text-xl font-bold text-white leading-snug">
                    {card.title}
                  </h1>
                  <p className="text-purple font-semibold text-sm xl:text-base 2xl:text-lg mt-0.5">
                    {card.company}
                  </p>
                  <p className="text-white-100 text-xs xl:text-sm 2xl:text-base mt-0.5">{card.duration}</p>
                </div>
              </div>

              {/* Divider */}
              <div className="w-full h-px bg-slate-700/50" />

              {/* Highlights below both */}
              <ul className="flex flex-col gap-2">
                {card.highlights.map((point, i) => (
                  <li key={i} className="text-xs xl:text-sm 2xl:text-base text-white-100 leading-relaxed before:content-['•'] before:text-purple before:mr-1.5">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;
