import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Science and Technology Student",
    location: "Natal, Brazil",
    description:
      "I attended my bachelor's degree with emphasis in Computer Engineering at Federal University of Rio Grande do Norte",
    icon: React.createElement(LuGraduationCap),
    date: "2020-2023",
  },
  {
    title: "Full-stack Developer",
    location: "Natal, Brazil",
    description:
      "I worked in a university research to develop a platform for salesman during the pandemic, using React and Django rest",
    icon: React.createElement(CgWorkAlt),
    date: "2021",
  },
  {
    title: "Exchange Program",
    location: "Whitefish, United States",
    description:
      "Attendee of Work and Travel program offered by US government.",
    icon: React.createElement(FaReact),
    date: "2021",
  },
  {
    title: "Exchange Program",
    location: "Whitefish, United States",
    description:
      "Attendee again of Work and Travel program offered by US government.",
    icon: React.createElement(FaReact),
    date: "2022",
  },
  {
    title: "Sandwich undergradute",
    location: "Porto, Portugal",
    description:
      "Attended to Sandwich undergradute program to study Computer Engineering",
    icon: React.createElement(FaReact),
    date: "2023-2024",
  },
  {
    title: "Scrum Master/Front End Developer",
    location: "Natal, Brazil",
    description:
      "Worked as manager of IT teams using agile methodology and also develop website using Reactjs, Vitejs and apps using React Native.",
    icon: React.createElement(FaReact),
    date: "2023-present",
  },
  {
    title: "Microsoft Student Ambassador",
    location: "Remote",
    description:
      "Voluteering as global group of campus leaders who eager to help fellow students and create a tech community. ",
    icon: React.createElement(FaReact),
    date: "2023-present",
  },
  
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;