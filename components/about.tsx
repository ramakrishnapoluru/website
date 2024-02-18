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
       
        <span className="font-medium">  With nearly 3 years of full-time experience and 3 internships under my belt, I'm deeply invested in building and enhancing robust data systems and analytics 🔍. My journey has equipped me with a strong foundation in data engineering, from developing sophisticated ETL pipelines and optimizing data storage and retrieval 🛠, to crafting impactful data visualizations and collaborating with cross-functional teams 🤝. My skill set spans Python, SQL, Spark, Dimensional Modeling, Data Warehousing, and Power BI, complemented by expertise in AWS and Azure cloud services ☁.
         Beyond my technical abilities, I'm an exceptional leader and a committed team player, eager to join a team that ignites my thirst for continuous learning and innovation 🔥.</span>
      </p>
    </motion.section>
  );
}
