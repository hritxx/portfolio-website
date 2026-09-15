"use client";

import { FaReact, FaNodeJs, FaPython, FaGitAlt, FaAws } from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiRedis,
  SiDocker,
  SiExpress,
  SiPostgresql,
  SiPrisma,
  SiMongodb,
  SiGo,
  SiNestjs,
  SiSocketdotio,
  SiRazorpay,
  SiLinux,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

const about = {
  title: "About Me",
  description:
    "Full-stack and AI engineer who ships products end-to-end. Founding engineer at a fintech startup, co-founder of a SaaS for wedding studios, and building LLM agents, RAG pipelines and evaluation systems at Aganitha. Comfortable owning everything from payment flows and Play Store releases to agent tooling and infrastructure.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Hriteek Roy",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+91)825 694 3297",
    },
    {
      fieldName: "Experience",
      fieldValue: "2 Years",
    },
    {
      fieldName: "LinkedIn",
      fieldValue: "Hriteek Roy",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indian",
    },
    {
      fieldName: "Email",
      fieldValue: "hriteekroy1869@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Hindi, Bengali",
    },
  ],
};

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description:
    "Production agentic and RAG systems at Aganitha, the full product stack at a fintech startup, and a SaaS I co-founded. Before that, research internships in machine learning and computer vision.",
  items: [
    {
      company: "Aganitha Cognitive Solutions",
      position: "Junior Full Stack Developer",
      duration: "July 2025 - Present",
    },
    {
      company: "Ortus Finance",
      position: "Founding Engineer (Part-Time)",
      duration: "Oct 2024 - Present",
    },
    {
      company: "WedTrack",
      position: "Co-founder",
      duration: "2025 - Present",
    },
    {
      company: "Icfai University Tripura",
      position: "Frontend Developer Intern",
      duration: "Aug - Sep 2024",
    },
    {
      company: "National Institute of Technology, Durgapur",
      position: "ML and AI Research Intern",
      duration: "May - July 2024",
    },
    {
      company: "Tripura Institute of Technology",
      position: "Machine Learning Intern",
      duration: "May - June 2023",
    },
  ],
};

const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description:
    "B.Tech in Computer Science and Engineering from ICFAI University Tripura, graduated with a CGPA of 9.4.",
  items: [
    {
      institution: "ICFAI University Tripura",
      degree: "B.Tech, Computer Science (CGPA 9.4)",
      duration: "2021 - 2025",
    },
    {
      institution: "Bhagat Public School",
      degree: "Higher Secondary",
      duration: "2018 - 2020",
    },
  ],
};

const skills = {
  title: "My Skills",
  description:
    "Full-stack TypeScript and Python, from web and mobile to payments and infrastructure, plus LLM agents, RAG, prompt engineering and evals.",
  skillList: [
    {
      name: "TypeScript",
      icon: <SiTypescript />,
    },
    {
      name: "Python",
      icon: <FaPython />,
    },
    {
      name: "Go",
      icon: <SiGo />,
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs />,
    },
    {
      name: "React",
      icon: <FaReact />,
    },
    {
      name: "React Native",
      icon: <TbBrandReactNative />,
    },
    {
      name: "Node.js",
      icon: <FaNodeJs />,
    },
    {
      name: "NestJS",
      icon: <SiNestjs />,
    },
    {
      name: "Express.js",
      icon: <SiExpress />,
    },
    {
      name: "PostgreSQL",
      icon: <SiPostgresql />,
    },
    {
      name: "Prisma",
      icon: <SiPrisma />,
    },
    {
      name: "MongoDB",
      icon: <SiMongodb />,
    },
    {
      name: "Redis",
      icon: <SiRedis />,
    },
    {
      name: "Socket.IO",
      icon: <SiSocketdotio />,
    },
    {
      name: "Razorpay",
      icon: <SiRazorpay />,
    },
    {
      name: "Docker",
      icon: <SiDocker />,
    },
    {
      name: "AWS",
      icon: <FaAws />,
    },
    {
      name: "Linux",
      icon: <SiLinux />,
    },
    {
      name: "Git",
      icon: <FaGitAlt />,
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss />,
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            {/* Experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left ">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left ">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize"> {skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            {/* about me */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName} </span>
                        <span className="text-xl">{item.fieldValue} </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
