import {
  BarChart3,
  Box,
  BrainCircuit,
  Cloud,
  Code2,
  Cpu,
  Database,
  GitBranch,
  Network,
  ScanSearch,
  ServerCog,
  Sparkles,
  TerminalSquare,
  Workflow
} from 'lucide-react';

const iconMap = {
  python: TerminalSquare,
  typescript: Code2,
  sql: Database,
  git: GitBranch,
  docker: Box,
  linux: Cpu,
  'google cloud run': Cloud,
  gcp: Cloud,
  'google bigquery': Database,
  'cloud sql': Database,
  'looker studio': BarChart3,
  'apache airflow': Workflow,
  redis: Network,
  postgresql: Database,
  'agentic ai': BrainCircuit,
  rag: ScanSearch,
  'scikit-learn': Cpu,
  keras: BrainCircuit,
  pandas: Database,
  numpy: Cpu,
  matplotlib: BarChart3,
  fastapi: ServerCog,
  django: ServerCog,
  reactjs: Code2,
  langgraph: Workflow,
  'mistral ai': Sparkles,
  mistralembeddings: ScanSearch,
  pydantic: Cpu,
  htmx: Code2,
  'alpine.js': Code2,
  'openai gpt': Sparkles,
  plotly: BarChart3,
  dash: BarChart3,
  bigquery: Database,
  'gcs': Cloud
};

function normalizeLabel(label) {
  return label.toLowerCase();
}

export function TagPill({ label }) {
  const Icon = iconMap[normalizeLabel(label)] || Cpu;

  return (
    <span className="chip inline-flex items-center gap-2">
      <Icon size={12} className="shrink-0 text-accent-2" />
      <span>{label}</span>
    </span>
  );
}
