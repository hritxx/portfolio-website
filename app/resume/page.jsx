"use client";

import {
  FaHtml5,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaDatabase,
  FaGitAlt,
  FaCodeBranch,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiRust,
  SiRedis,
  SiPytorch,
  SiTensorflow,
  SiDocker,
  SiExpress,
  SiPostgresql,
  SiFirebase,
  SiKubernetes,
} from "react-icons/si";

const about = {
  title: "About Me",
  description:
    " I am a dedicated full-stack developer with expertise in modern web technologies like React, Node.js, and TypeScript, currently pursuing a Bachelor of Computer Science. Passionate about machine learning and innovative solutions, I strive to create user-friendly applications and contribute effectively to team projects.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Hriteek",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+91)825 694 3297",
    },
    {
      fieldName: "Experience",
      fieldValue: "5+ Years",
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
      fieldValue: "Avaialable",
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
    "I am a dedicated full-stack developer with expertise in modern web technologies like React, Node.js, and TypeScript, currently pursuing a Bachelor of Computer Science. Passionate about machine learning and innovative solutions, I strive to create user-friendly applications and contribute effectively to team projects.",
  items: [
    {
      company: "Tripura Institute of Technology",
      position: "Machine Learning Intern",
      duration: "May - June , 2023",
    },
    {
      company: "National Institute of Technology, Duragpur",
      position: "Ml and AI Research Intern",
      duration: "May - July , 2024",
    },
    {
      company: " ",
      position: "Research Intern",
      duration: "2022 - Present",
    },
    {
      company: "Icfai University Tripura",
      position: "Frontend Developer Intern",
      duration: "August - September , 2024",
    },
    {
      company: "Ortus Finance ",
      position: "Full Stack Developer",
      duration: "2024 - Present",
    },
  ],
};

const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description:
    "Aspiring programmer with a focus on full-stack development, holding a Higher Secondary degree from Bhagat Public School (2018-2020) and currently pursuing a Bachelor of Computer Science at ICFAI University Tripura (2021-Present).",
  items: [
    {
      institution: "Bhagat Public School",
      degree: "Higher Secondary",
      duration: "2018 - 1020",
    },
    {
      institution: "ICFAI University Tripura",
      degree: "Bachelor of Computer Science",
      duration: "2021 - Present",
    },
    {
      institution: "UDEMY",
      degree: "Machine Learning",
      duration: "2023 - 2024",
    },
  ],
};

const skills = {
  title: "My Skills",
  description:
    "“Proficient in a diverse range of programming languages and technologies, including full-stack development, machine learning, and modern web frameworks.”",
  skillList: [
    {
      name: "HTML",
      icon: <FaHtml5 />,
    },
    {
      name: "JavaScript",
      icon: <FaJs />,
    },
    {
      name: "TypeScript",
      icon: <SiTypescript />,
    },
    {
      name: "React",
      icon: <FaReact />,
    },
    {
      name: "Node.js",
      icon: <FaNodeJs />,
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss />,
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs />,
    },
    {
      name: "Python",
      icon: <FaPython />,
    },
    {
      name: "Rust",
      icon: <SiRust />,
    },
    {
      name: "MongoDB",
      icon: <FaDatabase />, // Replace with the appropriate MongoDB icon
    },
    {
      name: "Redis",
      icon: <SiRedis />,
    },
    {
      name: "Pytorch",
      icon: <SiPytorch />, // Replace with the appropriate ML icon or relevant framework
    },
    {
      name: "Deep Learning",
      icon: <SiTensorflow />, // Replace with the appropriate DL icon or relevant framework
    },
    {
      name: "Full Stack Development",
      icon: <FaCodeBranch />, // Replace with the appropriate icon
    },
    {
      name: "Git",
      icon: <FaGitAlt />,
    },
    {
      name: "Docker",
      icon: <SiDocker />,
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
      name: "Firebase",
      icon: <SiFirebase />,
    },
    {
      name: "Kubernetes",
      icon: <SiKubernetes />,
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
                <div className="flex flex-col gap-[30px] text-center al:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto al:mx-0">
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
                <p className="max-w-[s600px] text-white/60 mx-auto xl:mx-0">
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
