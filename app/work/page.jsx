"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsGithub, BsArrowUpRight } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

// `live` and `github` are optional: client and startup work lives in private
// repos, so those cards show only the live link.
const projects = [
  {
    num: "01",
    category: "SaaS · Co-founder",
    title: "WedTrack",
    description:
      "B2B SaaS for wedding photography studios: bookings, shoots, team assignments, client payments and deliveries in one place. Grew out of a studio CRM I built for photography businesses; 350+ commits with CI and automated tests.",
    stack: [
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "PostgreSQL" },
      { name: "Prisma" },
    ],
    image: "/assets/work/wedtrack.png",
    live: "https://wedtrack.in",
  },
  {
    num: "02",
    category: "Fintech · Founding Engineer",
    title: "Ortus Finance",
    description:
      "Production platform for a mutual fund distributor: customer web app, React Native app on the Google Play Store, and an admin dashboard for investment plans with audit logging. Razorpay payments, background jobs, AWS deployment.",
    stack: [
      { name: "Next.js" },
      { name: "React Native" },
      { name: "TypeScript" },
      { name: "Razorpay" },
    ],
    image: "/assets/work/ortus.png",
    live: "https://www.ortusfinance.in",
  },
  {
    num: "03",
    category: "AI Tooling · Open Source",
    title: "agent-tokens",
    description:
      "Local-first CLI that aggregates token usage and sessions across 12 AI coding agents (Claude Code, Codex, Cursor, Gemini CLI and more) into one terminal dashboard and JSON output. Reads each agent's local store read-only: no API keys, no network calls.",
    stack: [{ name: "Python" }, { name: "SQLite" }, { name: "CLI" }],
    image: "/assets/work/agent-tokens.png",
    github: "https://github.com/hritxx/agent-tokens",
  },
  {
    num: "04",
    category: "Research · Computer Vision",
    title: "KAZE Perceptual Hashing",
    description:
      "Video transition detection using KAZE feature descriptors and perceptual image hashing, compared against classic shot-boundary methods. Code accompanying a manuscript submitted to The Visual Computer.",
    stack: [{ name: "Python" }, { name: "OpenCV" }, { name: "scikit-image" }],
    image: "/assets/work/kaze.png",
    github:
      "https://github.com/hritxx/kaze-feature-descriptor-perceptual-image-hashing",
  },
  {
    num: "05",
    category: "Full Stack · Real-time",
    title: "Slack Clone",
    description:
      "Team chat with workspaces, invite codes, channels and rich-text messages with emoji, built on Convex for real-time sync and authentication.",
    stack: [
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Convex" },
      { name: "Tailwind" },
    ],
    image: "/assets/work/slackoff.png",
    github: "https://github.com/hritxx/slackoff",
  },
  {
    num: "06",
    category: "Full Stack",
    title: "Project Manager",
    description:
      "Jira-style project management with drag-and-drop Kanban boards, Gantt timelines and table views. Express REST API with Prisma on PostgreSQL; auth via AWS Cognito.",
    stack: [
      { name: "Next.js" },
      { name: "Redux" },
      { name: "Express" },
      { name: "Prisma" },
    ],
    image: "/assets/work/project-manager.png",
    github: "https://github.com/hritxx/project-manager",
  },
  {
    num: "07",
    category: "Full Stack · Real-time",
    title: "ChatWiz",
    description:
      "Real-time chat app with Socket.IO messaging, JWT authentication and persistent chat history in MongoDB.",
    stack: [
      { name: "React" },
      { name: "Socket.IO" },
      { name: "Node.js" },
      { name: "MongoDB" },
    ],
    image: "/assets/work/thumb1.png",
    live: "https://chatwiz-vw96.onrender.com/",
    github: "https://github.com/hritxx/ChatWiz",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    // update project state based on current slide index
    setProject(projects[currentIndex]);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0 "
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none ">
            <div className="flex flex-col gap-[30px] h-[50%] ">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline ">
                {project.num}
              </div>
              {/* category */}
              <div className="flex flex-col gap-2">
                <span className="text-white/60">{project.category}</span>
                <h2 className="text-[42px] font-bold leading-none text-white">
                  {project.title}
                </h2>
              </div>
              {/* project description */}
              <p className="text-white/60"> {project.description} </p>
              {/*stack */}
              <ul className="flex flex-wrap gap-x-4 gap-y-1">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {/*remove the last comma */}
                      {index !== project.stack.length - 1 && ", "}
                    </li>
                  );
                })}
              </ul>
              {/*border */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live project button */}
                {project.live && (
                  <Link
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group ">
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live Preview</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
                {/* github project button */}
                {project.github && (
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group ">
                          <BsGithub className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Github repository </p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%] ">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12 "
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full ">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20 ">
                      {/* overlay */}
                      <div className="absolute w-full h-full top-0 bottom-0 bg-black/10 z-10"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover object-top"
                          alt={`${project.title} screenshot`}
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/*slider buttons*/}
              <WorkSliderBtns
                containerStyles=" flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none "
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center rounded-full  transition all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
