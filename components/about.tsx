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
       
        <span className="font-medium">  
          
   
Call me the Data Wizard 🧙‍♂️, Poluru Ramakrishna at your service! Armed with my spellbook of skills in SQL 📊, Python 🐍, Spark ⚡, Azure ☁️, and AWS 🌐, I don't just navigate through data chaos; I transform it into realms of insightful, scalable solutions. 🌟 From optimizing data workflows 🔧 to reducing operational costs 💸, my magic lies in turning complex datasets into actionable strategies that drive business growth 📈. Ready to embark on a quest to harness the true power of data together? Let’s make data dance to our tune! 💫✨
        
        
        
        </span>
      </p>
    </motion.section>
  );
}
