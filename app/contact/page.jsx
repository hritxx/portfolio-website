"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Social from "@/components/Social";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectLabel,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+91) 825 694 3297",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "hriteekroy1869@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Agartala , Tripura",
  },
];

import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px] ">
          {/*form*/}
          <div className="xl:h-[54%] order-2 xl:order-none ">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl ">
              <h3 className="text-4xl text-accent"> Let's work together</h3>
              <p>
                {/*some random text*/}I am a paragraph. Click here to add your
                own text and edit me.I am a paragraph. Click here to add your
                own text and edit me.
              </p>
              {/*input fields*/}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                <Input type="firstname " placeholder="FirstName" />
                <Input type="lastname " placeholder="LastName" />
                <Input type="email " placeholder="Email" />
                <Input type="phone " placeholder="Phone Nunber" />
              </div>
              {/*select*/}
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service </SelectLabel>
                    <SelectItem value="est">Web Development</SelectItem>
                    <SelectItem value="cst">Data Analyst</SelectItem>
                    <SelectItem value="mst">Full Stack Development</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/*textarea*/}
              <Textarea
                className="h-[200px] "
                placeholder="Type your message here."
              />
              {/*button*/}
              <Button size="md" className="max-w-40">
                Send Message
              </Button>
            </form>
          </div>

          {/*info*/}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0 ">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px]  bg-[#27272c] text-accent rounded-md flex items-center justify-center ">
                      <div className="text-[28px] ">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60"> {item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
              <div className="mb-8 xl:mb-0">
                <Social
                  contsinerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500 "
                />
              </div>
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
