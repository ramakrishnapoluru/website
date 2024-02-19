import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/stack.png";
import rmtdevImg from "@/public/stock.jpeg";
import wordanalyticsImg from "@/public/sec.jpg";

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
    name: "Experience",
    hash: "#experience",
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
    name: "Contact",
    hash: "#contact",
  },
] as const;


export const experiencesData = [
  {
    title: "Data Engineer Intern",
    location: "ECC, Burlingame, California",
    description:
    `
    • Implemented a BI solution using Azure, including data lakes, Azure Active Directory, ADB, ADF resulting in a 0.33%
      revenue surge and 0.4% increase in customer retention.
    • Engineered a data warehousing solution with star and snowflake schemas, reducing data retrieval times by 30% and
      providing actionable insights, substantially aiding services and marketing departments.
    • Drove the strategic data architecture evaluation for the development of a NLQ chatbot across Azure Synapse,
      Microsoft Fabric, and other services, guiding cost-effective and compatible solutions.
    `,
    icon: React.createElement(CgWorkAlt),
    date: "May 2023 - present",
  },
  {
    title: "Data Engineer II",
    location: "Microsoft, Hyderabad, India.",
    description:
    `• Implemented and maintained large scale BI solution using Azure services, data lake, Azure Databricks, Integrating
    ADB with ADF pipelines and BI system resulting in 1.63% surge in revenue and 2% upsurge in customer retention
    • Coordinated a team of 6 and addressed cross functional teams in an Agile environment owning product backlogs
    including requirements gathering from DataOps and demoing incremental builds (CI/ CD) on Azure DevOps.
    • Enhanced data architecture, independently designing efficient ETL processes. Actively improved and maintained
    existing production environments, ensuring seamless data flow to downstream users and systems.`,
    icon: React.createElement(CgWorkAlt),
    date: "Jan 2022 - Jul 2022",
  },
  {
    title: "Data Engineer I",
    location: "Microsoft, Hyderabad, India.",
    description: `• Migrated on-premises data warehouse to azure cloud-based solution, developing 40+ notebooks (Python, Spark SQL) with zero pipelines failures and data discrepancies on the production environment on pilot deployment.
  • Streamlined ELT pipelines on Azure Data Factory and 150+ databricks notebooks for 5 dependent snapshot systems to process upwards of 20M + records every 6 hours to capture businesses past and current trends.
  • Initiated a validation framework utilizing Python and Scala to validate data across stages of data engineering lifecycle by automating manual process and reducing manual efforts of 6 teams by 9hrs daily.
  • Optimized the execution time of 5 big data batch pipelines by 10% by implementing spark techniques, efficient coding standards and aligning data transformation logic aligning to true business needs.
  • Maintained data platform robust against data quality issues by conducting daily, weekly tests and continuously optimizing performance by reducing time complexity and cost azure resources utilized.`,
    icon: React.createElement(CgWorkAlt),
    date: "Jun 2020 - Dec 2022",
  },
  {
    title: "Associate Data Engineer",
    location: "Microsoft, Hyderabad, India.",
    description: `• Elevated user experience by reducing report load time to 9 seconds, streamlined analytics by architecting Power BI
    reports with DAX measures for 5 KPI dashboards with RLS, and enhanced data accessibility and security.
    • Engineered a data warehousing solution with star and snowflake schemas, reducing data retrieval times by 30%
    and providing actionable insights, substantially aiding services and marketing departments.
    • Designed and executed SSIS ETL packages, cutting data processing time by 11% over multiple terabytes, and
    utilized SSAS for advanced data analytics through multidimensional cubes, bolstering data-driven decision-making.`,
    icon: React.createElement(CgWorkAlt),
    date: "Dec 2019 - May 2020",
  }, 
] as const;

export const projectsData = [
  {
    title: "United States H-1B Visa Data System for Operational Usage and Analytics",
    description:
      "",
    tags: ["AWS Lambda","AWS Glue", "Snowflake", "MySQL", "Tableau", "Python", "Pandas", "OLAP", "Kimball dimensional modeling", "ERD", "Star Schema"],
    imageUrl: corpcommentImg,
    link: "https://github.com/ramakrishnapoluru/Designing-OLTP-and-OLAP-for-H-1B-visa-data-Analyics-on-AWS",
  },
  {
    title: "Uncovering Coordinated Campaigns: Artificial Inflation of Trend Popularity on Twitter",
    description:
      "",
    tags: ["AWS EMR", "PySpark", "Python", "AWS Redshift", "QuickSight"],
    imageUrl: rmtdevImg,
    link: "https://github.com/ramakrishnapoluru/Uncovering-Coordinated-Twitter-Campaigns-Using-Spark-and-AWS",
  
  },
  {
    title: "Forecasting Drought Area Percentage in California using Machine Learning Algorithms ",
    description:
      "",
    tags: ["Decision Tree", "Random Forest", "LSTM", "ANN", "Jira", "CRISP-DM", "WBS", "Gantt & PERT chart"],
    imageUrl: wordanalyticsImg,
    link: "https://github.com/ramakrishnapoluru/Forecasting-Drought-Area-Percentage-in-California-using-Machine-Learning-Algorithms",
  },
  {
    title: "Real-Time Stock Market examination with Kafka",
    description:
      "",
    tags: ["EC2", "Athena", "Apache Kafka"],
    imageUrl: wordanalyticsImg,
    link: "https://github.com/ramakrishnapoluru/Apache-Kafka-Real-Time-Data-Stock-Market-Project",
  },
] as const;

export const skillsData = [
  "HTML",
  "C",
  "Python",
  "Pandas",
  "NumPy", 
  "MySQL",
  "MS SQL Server", 
  "MongoDB (NoSQL)",
  "Spark", 
  "HDFS", 
  "AWS Glue", 
  "AWS Lambda", 
  "Azure Synapse", 
  "Microsoft fabric", 
  "Snowflake", 
  "Google Big Query", 
  "Airflow", 
  "DBT", 
  "SSIS", 
  "SSAS", 
  "Power BI", 
  "Tableau", 
  "QuickSight",
] as const;
