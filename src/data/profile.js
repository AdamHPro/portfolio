export const profile = {
  identity: {
    name: 'Adam Hachicha',
    title: 'Software Engineer at Cartier Horlogerie',
    tagline: 'Full-stack Software Engineer building APIs, admin tools, and AI-powered tooling in Python and TypeScript, containerized with Docker and deployed on GCP in production.',
    location: 'La Chaux-de-Fonds, Switzerland',
    email: 'adam.hachicha@student-cs.fr',
    linkedin: 'https://www.linkedin.com/in/adam-hachicha/',
    github: 'https://github.com/AdamHPro'
  },
  about: {
    summary:
      'A technical profile grounded in production systems, paired with an ongoing commitment to mentoring and community engagement.',
    languages: [
      { name: 'French', level: 'Native' },
      { name: 'English', level: 'C1' },
      { name: 'Arabic', level: 'C1' },
      { name: 'German', level: 'School level' }
    ]
  },
  experience: [
    {
      role: 'Software Engineer',
      company: 'Cartier Horlogerie',
      period: 'April 2026 – Present',
      contract: 'CDD',
      location: 'La Chaux-de-Fonds, Neuchâtel, Switzerland (On-site)',
      highlights: [
        'Designed and built a full-stack admin platform (Django, HTMX, Alpine.js) letting business users manage suppliers and configure supplier-specific extraction rules (prompts).',
        'This platform feeds a FastAPI service powering an agentic AI pipeline for automated invoice processing at goods-receipt stations: operators upload supplier invoices, which are parsed and structured via AI extraction for ingestion into the ERP.',
        'Built a daily ETL pipeline moving operator correction data from Cloud SQL into BigQuery, with a Looker Studio dashboard monitoring extraction quality and correction trends.',
        'Adapted an open-source workflow automation platform (n8n-like) for internal use, developing custom add-ons in TypeScript.',
        'Containerized and deployed all services on GCP (Cloud Run, Cloud SQL, GCS) using Docker.'
      ],
      stack: ['Python', 'Django', 'FastAPI', 'TypeScript', 'Docker', 'GCP', 'BigQuery', 'Cloud SQL', 'Looker Studio', 'HTMX', 'Alpine.js']
    },
    {
      role: 'AI Engineer',
      company: 'Illuin Technology / Paris Digital Lab',
      period: 'September 2025 – February 2026',
      highlights: [
        'Delivered end-to-end AI MVPs for major corporations in 7-week cycles, combining Design Thinking with robust deployment and user-adoption strategy.'
      ],
      stack: ['Python', 'Docker', 'Django', 'FastAPI', 'ReactJS', 'RAG', 'Agentic AI']
    },
    {
      role: 'Featured mission — Agentic AI Workflow & RAG System',
      company: 'Caisse des Dépôts',
      period: 'January 2026 – February 2026',
      highlights: [
        'Engineered an autonomous agent (Mistral AI LLMs + LangGraph) to parse complex event data from emails and attachments (PDF/images via OCR).',
        'Designed a multi-modal reasoning pipeline that autonomously decides to run a web search or scan documents when data is ambiguous.',
        'Integrated a RAG system (MistralEmbeddings) to match events with the right collaborators.'
      ],
      stack: ['Python', 'LangGraph', 'Mistral AI', 'MistralEmbeddings', 'PostgreSQL', 'Docker', 'Pydantic']
    },
    {
      role: 'Data Engineering Project',
      company: 'Singapore Public Transport Analytics Dashboard',
      context: 'National University of Singapore (academic exchange)',
      period: 'February 2025 – May 2025',
      highlights: [
        'Built a real-time analytics system processing data from 5,000+ bus stops with an automated data orchestration pipeline.',
        'Implemented Airflow-based processing workflows with Redis caching for performance.',
        'Integrated AI-powered insights (OpenAI GPT + RAG) for intelligent recommendations.'
      ],
      stack: ['Apache Airflow', 'Redis', 'SQL', 'Python', 'Dash', 'Plotly', 'OpenAI GPT']
    }
  ],
  projects: [
    {
      title: 'Singapore Transit Analytics Dashboard',
      summary: 'A transit intelligence dashboard built around orchestration and real-time analytics to surface patterns across a national bus network.',
      stack: ['Apache Airflow', 'Redis', 'Python', 'Dash', 'Plotly']
    },
    {
      title: 'Agentic RAG Event-Matching Agent',
      summary: 'An autonomous assistant that parses event data from emails and documents, then matches them to collaborators via multi-step reasoning and retrieval.',
      stack: ['Python', 'LangGraph', 'Mistral AI', 'PostgreSQL', 'Docker']
    },
  ],
  skills: [
    {
      category: 'Programming',
      items: ['Python', 'TypeScript', 'SQL', 'Git']
    },
    {
      category: 'Cloud & Deployment',
      items: ['Docker', 'Linux', 'Google Cloud Run']
    },
    {
      category: 'AI',
      items: ['Agentic AI', 'RAG', 'scikit-learn', 'Keras', 'pandas', 'NumPy', 'matplotlib']
    },
    {
      category: 'Data Engineering',
      items: ['Apache Airflow', 'Redis', 'PostgreSQL', 'Google BigQuery', 'Looker Studio']
    }
  ],
  education: [
    {
      school: 'CentraleSupélec',
      location: 'Paris, France',
      program: 'Master of Engineering — Machine Learning & Data Engineering specialization',
      period: 'September 2023 – April 2027',
      coursework: ['Algorithms and Complexity', 'Statistics & Learning', 'Advanced Probabilities', 'Information Retrieval'],
    },
    {
      school: 'National University of Singapore',
      location: 'Singapore',
      program: 'Exchange Program — Data Engineering focus',
      period: 'January 2025 – May 2025',
      coursework: ['Deep Engineering', 'Feature Engineering', 'Machine Learning'],
    },
    {
      school: 'Lycée Saint-Louis',
      location: 'Paris, France',
      program: 'Preparatory Classes for Engineering Schools',
      period: 'September 2021 – July 2023',
      coursework: ['Mathematics', 'Computer Science', 'Physics'],
    }
  ],
  certifications: [
    {
      name: 'Data Engineering Professional Certificate',
      issuer: 'Snowflake',
      issued: 'May 2026',
      logo: '/portfolio/logos/snowflake.svg',
      skills: ['Snowflake', 'Data Pipelines']
    },
    {
      name: 'Training on Disability and Compensation',
      issuer: 'Sopra Steria',
      issued: 'October 2023',
      logo: '/portfolio/logos/soprasteria.svg'
    }
  ],
  leadership: [
    {
      title: 'Disability Tutor, Hagir Association',
      period: 'Dec 2023 – June 2024',
      detail: 'Mathematics tutoring for a first-year high-school student with a disability at Lycée Camille Claudel, Palaiseau.'
    },
    {
      title: 'Field Hockey Association',
      period: '',
      detail: 'Team collaboration, strategic thinking, performance optimization.'
    },
    {
      title: 'Private Mathematics Tutor',
      period: '',
      detail: 'Teaching advanced mathematics; developed strong communication skills.'
    }
  ],
  languages: [
    { name: 'French', level: 'Native' },
    { name: 'English', level: 'C1' },
    { name: 'Arabic', level: 'C1' },
    { name: 'German', level: 'School level' }
  ]
};
