"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I'm an undergraduate student in Science and Technology, specializing in <span className="font-medium">Computer Engineering</span>. I completed a sandwich degree program at the <span className="font-medium">University of Porto</span> in Portugal. My expertise lies in web development, with proficiency in <span className="font-medium">React.js</span>, <span className="font-medium">Vite.js</span>, and <span className="font-medium">Next.js</span> for the frontend, along with <span className="font-medium">Django REST and Laravel</span> for backend and database management. I'm also skilled in programming languages like <span className="font-medium">C++</span> and <span className="font-medium">Python</span>.
        Additionally, I have practical experience having worked as Front-end Developer in Include Engenharia which is an IT consulting junior company at <span className="font-medium">UFRN</span>. My experiences during exchange programs in the USA have honed my teamwork and autonomy skills. I have an insatiable thirst for knowledge and continuously seek opportunities to expand my skill set.
      </p>

      <p>
        <span className="italic">Outside of coding</span>, I find enjoyment in video games, movies, spending time with my family and cats.
      </p>
    </motion.section>
  );
}
