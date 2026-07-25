# Profile Content — Source of Truth

> This file is the **single source of truth** for every piece of text displayed on the site.
> Copilot must pull all names, dates, numbers and descriptions from here — never invent or
> approximate facts. Written in English to match the CV (Adam is targeting international/Swiss
> roles); ask Copilot to translate the whole file if a French version of the site is wanted instead.

## Identity

- **Name:** Adam Hachicha
- **Current title:** Software Engineer at Cartier Horlogerie
- **Tagline (hero subtitle):** Software Engineer building backend APIs and AI-powered tooling in Python and TypeScript, deployed on Docker and GCP in production.
- **Location:** La Chaux-de-Fonds, Switzerland
- **Email:** adam.hachicha@student-cs.fr
- **Phone:** 06 21 56 39 92 — ⚠️ **do not display publicly on the site**, see `docs/site-structure.md`
- **LinkedIn:** https://www.linkedin.com/in/adam-hachicha/
- **GitHub:** https://github.com/AdamHPro

## About / Summary

Software Engineer at Cartier Horlogerie since April 2026, building backend APIs and AI-powered
tooling in Python and TypeScript, deployed on Docker and GCP in production. Currently exploring
Software Engineer / Data Engineer roles to keep solving real-world Data/AI problems at scale.
Master's student at CentraleSupélec, specializing in Machine Learning & Data Engineering.

## Experience

### Software Engineer — Cartier Horlogerie
- **Period:** April 2026 – Present
- **Contract:** CDD
- **Location:** La Chaux-de-Fonds, Neuchâtel, Switzerland (On-site)
- **Highlights:**
  - Designed and built a full-stack admin platform (Django, HTMX, Alpine.js) letting business
    users manage suppliers and configure supplier-specific extraction rules (prompts).
  - This platform feeds a FastAPI service powering an agentic AI pipeline for automated invoice
    processing at goods-receipt stations: operators upload supplier invoices, which are parsed
    and structured via AI extraction for ingestion into the ERP.
  - Built a daily ETL pipeline moving operator correction data from Cloud SQL into BigQuery, with
    a Looker Studio dashboard monitoring extraction quality and correction trends.
  - Adapted an open-source workflow automation platform (n8n-like) for internal use, developing
    custom add-ons in TypeScript.
  - Containerized and deployed all services on GCP (Cloud Run, Cloud SQL, GCS) using Docker.
- **Stack:** Python, Django, FastAPI, TypeScript, Docker, GCP (Cloud Run, BigQuery, Cloud SQL, GCS), Looker Studio, HTMX, Alpine.js

### AI Engineer — Illuin Technology / Paris Digital Lab
- **Period:** September 2025 – February 2026
- **Highlights:**
  - Delivered end-to-end AI MVPs for major corporations in 7-week cycles, combining Design
    Thinking with robust deployment and user-adoption strategy.
- **Stack:** Python, Docker, Django, FastAPI, ReactJS, RAG, Agentic AI

#### Featured mission — Agentic AI Workflow & RAG System, Caisse des Dépôts
- **Period:** January 2026 – February 2026
- **Highlights:**
  - Engineered an autonomous agent (Mistral AI LLMs + LangGraph) to parse complex event data
    from emails and attachments (PDF/images via OCR).
  - Designed a multi-modal reasoning pipeline that autonomously decides to run a web search or
    scan documents when data is ambiguous.
  - Integrated a RAG system (MistralEmbeddings) to match events with the right collaborators.
- **Stack:** Python, LangGraph, Mistral AI LLM, MistralEmbeddings, PostgreSQL, Docker, Pydantic

### Data Engineering Project — Singapore Public Transport Analytics Dashboard
- **Context:** National University of Singapore (academic exchange)
- **Period:** February 2025 – May 2025
- **Highlights:**
  - Built a real-time analytics system processing data from 5,000+ bus stops with an automated
    data orchestration pipeline.
  - Implemented Airflow-based processing workflows with Redis caching for performance.
  - Integrated AI-powered insights (OpenAI GPT + RAG) for intelligent recommendations.
- **Stack:** Apache Airflow, Redis, SQL, Python, Dash, Plotly, OpenAI GPT

## Projects (for the "Projects" section — reuse the 3 missions above as case-study cards)
1. **Agentic Invoice Extraction Platform** — Cartier Horlogerie mission (see Experience above)
2. **Agentic RAG Event-Matching Agent** — Caisse des Dépôts mission (see Experience above)
3. **Singapore Transit Analytics Dashboard** — NUS project (see Experience above)

## Education

### CentraleSupélec, Paris, France
- **Program:** Master of Engineering — Machine Learning & Data Engineering specialization
- **Period:** September 2023 – Present
- **Coursework:** Deep Learning, Statistics & Learning, Advanced Probabilities, Information Retrieval
- **Academic exchange:** National University of Singapore (NUS) — Data Engineering focus

### Lycée Saint-Louis, Paris, France
- **Program:** Preparatory Classes for Engineering Schools — Mathematics, Computer Science, Physics
- **Period:** September 2021 – July 2023

## Certifications
- **Data Engineering Professional Certificate** — Snowflake, issued May 2026 (Skills: Snowflake, Data Pipelines)
- **Training on Disability and Compensation** — Sopra Steria, issued October 2023

## Skills

- **Programming:** Python, TypeScript, SQL, Git
- **Cloud & Deployment:** Docker, Linux, Google Cloud Run
- **AI:** Agentic AI, RAG, scikit-learn, Keras, pandas, NumPy, matplotlib
- **Data Engineering:** Apache Airflow, Redis, PostgreSQL, Google BigQuery, Looker Studio

## Leadership & Volunteering
- **Disability Tutor, Hagir Association** (Dec 2023 – June 2024): Mathematics tutoring for a
  first-year high-school student with a disability at Lycée Camille Claudel, Palaiseau.
- **Field Hockey Association:** Team collaboration, strategic thinking, performance optimization.
- **Private Mathematics Tutor:** Teaching advanced mathematics; developed strong communication skills.

## Languages
- French — Native
- English — Fluent (C1)
- Arabic — C1
- German — School level
