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
    title: "Data Engineer",
    location: "ECC, Burlingame, California",
    description:
    `
 • Implemented a BI solution on Azure, utilizing ADLS, Lakehouse, Azure Active Directory, ADB, and ADF, achieving
99% uptime and ensuring 96% of data integrity for reports and dashboards.
• Engineered a data warehousing solution with star and snowflake schemas, reducing data retrieval times by 30% and
providing actionable insights, substantially aiding services and marketing departments.
• Drove the strategic data architecture evaluation for the development of a NLQ chatbot across Azure Synapse,
Microsoft Fabric, AWS, and GCP, guiding cost-effective and compatible solutions.
    `,
    icon: React.createElement(CgWorkAlt),
    date: "May 2023 - present",
  },
  {
    title: "Data Engineer II",
    location: "Microsoft, Hyderabad, India.",
    description:
    `
• Migrated on-premises business intelligence system to Azure, developing 40+ databricks notebooks (PySpark, SQL)
with zero pipeline failures and data discrepancies on the production environment on pilot deployment.
• Optimized execution time of 3 big data batch pipelines by 60% by employing Spark techniques, efficient coding
standards, and refining data transformation logic to meet business needs and minimizing data redundancy.
• Maintained data platform integrity and performance through daily and weekly testing, peer code reviews, and
continuous optimization of notebook execution times, significantly reducing Azure costs by nearly $0.2M annually.
• Coordinated a team of 6 and addressed cross functional teams in an Agile environment owning product backlogs by
gathering requirements from DataOps, Stakeholders and demoing incremental builds (CI/ CD) on Azure DevOps.
    `,
    icon: React.createElement(CgWorkAlt),
    date: "Jul 2021 - Jul 2022",
  },
  {
    title: "Data Engineer I",
    location: "Microsoft, Hyderabad, India.",
    description: `
• Streamlined ELT pipelines using Azure Data Factory and 150+ Azure Databricks notebooks for 5 dependent
systems to process upward 20M + transactional records every 6 hours to enhance business intelligence processes.
• Initiated a Python, Scala, Spark SQL based validation framework to automate data validation across the data
engineering lifecycle, reducing error rates by 85% and saving 9 hours of daily manual effort for 6 teams.
• Independently enhanced data pipelines through efficient ETL process design, actively optimizing and maintaining
production environments for uninterrupted data flow to downstream teams and systems.
  `,
    icon: React.createElement(CgWorkAlt),
    date: "Jun 2020 - Jun 2021",
  },
  {
    title: "Associate Data Engineer",
    location: "MAQ Software, Hyderabad, India.",
    description: `
• Elevated user experience and reduced report load time to 9 seconds, streamlined analytics in Power BI along with
RLS thereby enhancing data accessibility and security, developed DAX measures for 5 reports and dashboards.
• Designed and executed SSIS ETL packages, cutting data processing time by 11% over multiple terabytes, and
utilized SSAS for advanced data analytics through tabular models, bolstering data-driven decision-making.
• Optimized data analysis time by developing advanced SQL queries an
    `,
    icon: React.createElement(CgWorkAlt),
    date: "Dec 2019 - May 2020",
  }, 

    {
    title: "Junior Data Engineer",
    location: "Fratello Innotech, Hyderabad, India",
    description: `
      • Enhanced billing automation for major retailers (Amazon, Flipkart, Snapdeal) using APIs, Selenium, and Airflow,
        boosting efficiency by 40% and cutting labor by 60%.
      • Streamlined custom ETL process for a finance client using AWS Glue and ingested in AWS RedShift.
      • Performed auditing, inspecting and visualizing S3 server access logs using AWS Lambda, and AWS Athena.    
    `,
    icon: React.createElement(CgWorkAlt),
    date: "May 2019 - Nov 2019",
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
