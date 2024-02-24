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
          
          
          With nearly 3 years of full-time experience and 3 internships under my belt, I'm deeply invested in building and enhancing robust data systems and analytics 🔍. My journey has equipped me with a strong foundation in data engineering, from developing sophisticated ETL pipelines and optimizing data storage and retrieval 🛠, to crafting impactful data visualizations and collaborating with cross-functional teams 🤝. My skill set spans Python, SQL, Spark, Dimensional Modeling, Data Warehousing, and Power BI, complemented by expertise in AWS and Azure cloud services ☁.
         Beyond my technical abilities, I'm an exceptional leader and a committed team player, eager to join a team that ignites my thirst for continuous learning and innovation 🔥.



          I'm a passionate Data Engineer with a Master's in Data Science & Analytics from San Jose State University. I specialize in turning data chaos into insightful, scalable solutions with my knowledge, constant learnings, experince. 📊

👷 **What I Do:**
- **Data Engineering Wizardry:** From Azure to AWS, my magic lies in architecting and optimizing data pipelines that fuel analytics and decision-making. 🧙‍♂️
- **Big Data Enthusiast:** I thrive on handling datasets of all sizes, employing technologies like Hadoop, Spark, and Kafka to uncover hidden insights. 🌌
- **Cloud Architect:** Leveraging cloud platforms (AWS, Azure, GCP) to build resilient, scalable data infrastructures is my forte. ☁️
- **ETL Maestro:** Whether it's Airflow or Azure Data Factory, I design ETL processes that ensure data is not just collected, but also meaningful. 🛠️

💡 **Tech Stack:**
- **Languages & Libraries:** Python 🐍, Java, C, Pandas, NumPy
- **Big Data & Cloud:** Apache Spark, HDFS, AWS Glue, Azure Databricks, Snowflake ☃️
- **Databases:** MySQL, MS SQL Server, MongoDB, Cosmos DB, Postgres
- **Visualization & ETL:** Power BI, Tableau, SSIS, SSAS, QuickSight

📈 **My Goals:** To contribute to innovative projects, continuously learn, and share knowledge with the community.
        
        
        
        </span>
      </p>
    </motion.section>
  );
}
