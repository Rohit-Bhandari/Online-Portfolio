// Everything the page says lives here. Edit this file to update the site;
// the component in src/components/ui/ only handles layout and behaviour.
import type { SidebarPortfolioTemplateProps } from "@/components/ui/sidebar-portfolio-template"
import profilePicture from "@/assets/profile-picture.png"

export const profile: SidebarPortfolioTemplateProps = {
  name: "Rohit Bhandari",
  role: "Machine Learning Engineer · TELUS Digital",
  bio: "Building and scaling production LLM systems, from fine-tuning to serving.",
  avatarSrc: profilePicture,
  signature: false,
  stats: [
    { value: "5.8M+", label: "resumes processed" },
    { value: "63→92%", label: "LLM-judge alignment on egocentric data" },
    { value: "20K", label: "Google raters served" },
  ],
  details: [
    { icon: "pin", label: "Bengaluru, India" },
    { icon: "briefcase", label: "4+ years in ML engineering" },
    { icon: "spark", label: "LLMs · RAG · Inference" },
    { icon: "cap", label: "B.Tech, UVCE · CGPA 9.3/10" },
  ],
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/bhandari-rohit/", icon: "linkedin" },
    { label: "GitHub", href: "https://github.com/Rohit-Bhandari", icon: "github" },
    { label: "Email", href: "mailto:bhandarirohit080@gmail.com", icon: "mail" },
  ],
  email: "bhandarirohit080@gmail.com",
  cvUrl: import.meta.env.BASE_URL + "Rohit-Bhandari-Resume.pdf",

  headline: "Machine Learning Engineer",
  tagline:
    "Building and scaling production LLM systems: knowledge-graph retrieval and RAG, LLM evaluation and guardrails, and inference optimization.",
  heroQuips: [
    "alignment 63% → 92%",
    "5.8M+ resumes parsed",
    "p95 latency −40%",
    "evals passing ✓",
    "p50 70s → 25s",
    "live for 20K raters",
  ],

  about: [
    "I'm a Machine Learning Engineer with 4+ years of building and scaling production LLM systems across knowledge-graph retrieval and RAG, LLM evaluation and guardrails, and inference optimization.",
    "I led the architecture of a Knowledge Graph (Graphiti, Kuzu) + RAG platform rolled out to 20,000 Google raters, scaled an LLM resume-intelligence pipeline from 300K to 5.8M+ resumes (70s+ → 4–7s latency), and raised an LLM-as-a-Judge system's alignment with human raters on egocentric robotics data from 63% to 92%. I'm hands-on from fine-tuning (SFT, LoRA) to production serving (vLLM, TensorRT-LLM), and I enjoy guiding junior engineers.",
  ],
  keySkills: [
    "RAG & GraphRAG",
    "Knowledge Graphs",
    "LLM Evaluation & Guardrails",
    "Inference Optimization",
    "Fine-tuning (SFT, LoRA)",
    "LangChain & LangGraph",
    "Generative AI",
    "Computer Vision",
    "Time Series Forecasting",
    "MLOps",
  ],

  experience: [
    {
      company: "TELUS Digital AI Data Solutions",
      logo: { color: "#4b286d", text: "T" },
      roles: [
        {
          title: "Software Development - Machine Learning Engineer",
          type: "Bengaluru",
          start: "Feb 2025",
          end: "Present",
          projects: [
            {
              name: "Google Search Raters Assistant",
              highlights: [
                "Led the end-to-end architecture and delivery of an enterprise Rater Assistance Platform combining Knowledge Graph retrieval (Graphiti), RAG for relevant examples retrieval, reranking, and LLM-based response generation; supported an initial rollout to 20,000 Google raters.",
                "Achieved 95% alignment with QC feedback on a 3,000-sample evaluation set.",
                "Architected the production migration from Amazon Neptune (paid, managed) to Kuzu (open-source), defining the graph ingestion and deployment architecture under file-based database constraints; eliminated graph-database licensing cost and, with pipeline optimizations, reduced p50 latency by 64% (70s → 25s).",
                "Built the serving stack on PostgreSQL (pgvector) for vector retrieval, RabbitMQ for asynchronous processing, and ArgoCD for GitOps-based deployments.",
                "Developed an LLM Evaluation and Guardrails framework to benchmark retrieval quality, answer grounding, and response reliability, catching quality regressions across pipeline versions.",
              ],
            },
            {
              name: "Resume Intelligence Platform",
              highlights: [
                "Redesigned the resume parser and the end-to-end pipeline, using LoRA fine-tuned parsing models for robust extraction from scanned and multilingual documents.",
                "Scaled the system from 300K to 5.8M+ resumes processed at a total infrastructure cost of $6,400, with LLM inference at $0.00015 per resume.",
                "Cut end-to-end latency from 70s+ to 4–7s per resume through batching, prompt compression, and fallback strategies.",
              ],
            },
            {
              name: "Robotics DataQC - Automation Quality Evaluation and Alignment",
              highlights: [
                "Took sole ownership of redesigning an existing LLM-as-a-Judge AutoQC system for egocentric data after its alignment with human raters dropped to 63%; guided a junior engineer through benchmarking and led the comparative analysis that traced the gap to rubric definitions and evaluation criteria.",
                "Planned and ran experiments on rubric redesign, prompt restructuring, few-shot calibration, and a Spikes-and-Valleys end-frame selection method for better judge evaluation, raising alignment with human raters on egocentric data from 63% to 92%.",
              ],
            },
            {
              name: "Applied Research (client engagements)",
              highlights: ["Researched PII detection techniques and Physical AI systems for client projects."],
            },
          ],
          skills: [
            "RAG & GraphRAG",
            "Knowledge Graphs",
            "LLM Evaluation & Guardrails",
            "Fine-tuning (SFT, LoRA)",
            "Inference Optimization",
            "MLOps",
          ],
        },
      ],
    },
    {
      company: "Quantiphi",
      logo: { color: "#1f6fb2", text: "Q" },
      roles: [
        {
          title: "Machine Learning Engineer",
          type: "Bengaluru",
          start: "Aug 2022",
          end: "Jan 2025",
          projects: [
            {
              name: "GenAI Digital Assistant and Document Generation",
              highlights: [
                "Built a GenAI Digital Assistant and Smart Document Generation system for a healthcare AI Innovation Platform, grounding Gemini responses in a knowledge base of platform documentation, research papers (PubMed), and project data to automate regulatory (GxP) document creation.",
                "Led development of the external source connector, ingesting websites, databases, and research repositories into a multi-tenant knowledge base, and of the Text-to-SQL connector for natural-language queries over structured application data.",
                "Implemented orchestration with LangChain and LangGraph on Vertex AI (Gemini models, datastores), applying prompt engineering for grounded, accurate responses.",
              ],
            },
            {
              name: "LLM Inference Optimization",
              highlights: [
                "Optimized production LLM inference for a major client, reducing p95 latency by 40%, increasing throughput 1.5x, and cutting GPU memory by ~50% while maintaining >99% accuracy recovery.",
                "Quantized open-source models such as Llama 3 8B using LLM Compressor and TensorRT-LLM, and served them with vLLM and NVIDIA Triton Inference Server with dynamic batching.",
                "Evaluated model quality using LLM-as-a-Judge, RAGAS, and DeepEval.",
              ],
            },
            {
              name: "Synthetic Human PoC",
              highlights: [
                "Developed generative models to synthesize brain and chest medical images from specifications, training models from scratch based on KCL research papers.",
                "Implemented ControlNet with latent diffusion for conditioned generation and ran brain-tumor inpainting experiments.",
                "Trained and fine-tuned AutoEncoder, Diffusion, and ControlNet models using Vertex AI custom training jobs.",
              ],
            },
            {
              name: "Time Series Forecasting",
              highlights: [
                "Led the implementation of demand forecasting with LightGBM, reducing sMAPE error by 50% compared with the team's previous solution.",
              ],
            },
          ],
          skills: [
            "RAG & GraphRAG",
            "LangChain & LangGraph",
            "Inference Optimization",
            "LLM Evaluation & Guardrails",
            "Generative AI",
            "Computer Vision",
            "Time Series Forecasting",
          ],
        },
        {
          title: "Intern - Machine Learning Engineer",
          type: "Bengaluru",
          start: "Feb 2022",
          end: "Jul 2022",
          highlights: [
            "Built models for time series forecasting, image classification, object detection, summarization, and sentiment analysis using Python, PyTorch, and TensorFlow.",
          ],
          skills: ["Time Series Forecasting", "Computer Vision"],
        },
      ],
    },
  ],

  education: [
    {
      school: "University Visvesvaraya College of Engineering (UVCE), Bengaluru",
      degree: "B.Tech in Information Science & Engineering",
      start: "Jul 2018",
      end: "Jul 2022",
      summary: "CGPA 9.3/10",
      logo: { color: "#1f7a5a", glyph: "cap" },
    },
  ],
  certifications: [
    {
      title: "Associate Cloud Engineer",
      issuer: "Google Cloud (GCP)",
      date: "Feb 2023",
      summary: "GCP certified - Associate Cloud Engineer",
      href: "https://google.accredible.com/0b79f0b1-e3b0-466b-8884-3845553da85d",
      logo: { color: "#d99a1e", glyph: "cube" },
    },
    {
      title: "Natural Language Processing",
      issuer: "Udemy",
      date: "Dec 2023",
      summary: "Advanced Natural Language Processing",
      href: "https://drive.google.com/file/d/1x-tqBX-TQyZt8LTsRrIOmQ-CtfY0O-Wd/view?usp=sharing",
      logo: { color: "#7b2fe0", glyph: "book" },
    },
  ],

  // Levels (0–100) drive the meters: Expert ≥ 90, Advanced ≥ 80, Proficient ≥ 65.
  skills: [
    {
      name: "ML Foundations",
      items: [
        { name: "Python", level: 95 },
        { name: "PyTorch", level: 90 },
        { name: "Hugging Face Transformers", level: 90 },
        { name: "NumPy & Pandas", level: 90 },
        { name: "SQL", level: 85 },
        { name: "LightGBM", level: 82 },
        { name: "Time Series Forecasting", level: 82 },
        { name: "TensorFlow", level: 78 },
      ],
    },
    {
      name: "RAG & Agents",
      items: [
        { name: "RAG & GraphRAG", level: 95 },
        { name: "Prompt Engineering & Compression", level: 92 },
        { name: "LangChain", level: 90 },
        { name: "Embeddings & Rerankers", level: 90 },
        { name: "LangGraph", level: 88 },
        { name: "Multi-Agent Systems & Tool Calling", level: 85 },
        { name: "SFT & LoRA", level: 85 },
        { name: "LlamaIndex", level: 75 },
      ],
    },
    {
      name: "Graphs & Data",
      items: [
        { name: "Graphiti", level: 90 },
        { name: "Kuzu", level: 88 },
        { name: "PostgreSQL (pgvector)", level: 85 },
        { name: "Amazon Neptune", level: 80 },
        { name: "Elasticsearch", level: 72 },
      ],
    },
    {
      name: "Inference",
      items: [
        { name: "Latency & Cost Optimization", level: 92 },
        { name: "vLLM", level: 90 },
        { name: "Quantization (LLM Compressor)", level: 85 },
        { name: "Dynamic Batching", level: 85 },
        { name: "TensorRT-LLM", level: 82 },
        { name: "NVIDIA Triton Inference Server", level: 82 },
        { name: "DeepSpeed", level: 70 },
      ],
    },
    {
      name: "Evaluation",
      items: [
        { name: "LLM-as-a-Judge", level: 95 },
        { name: "Human–AI Alignment Evaluation", level: 92 },
        { name: "Grounding & Hallucination Benchmarking", level: 90 },
        { name: "Guardrails Frameworks", level: 88 },
        { name: "RAGAS", level: 85 },
        { name: "DeepEval", level: 82 },
        { name: "PII Detection", level: 75 },
      ],
    },
    {
      name: "Cloud & MLOps",
      items: [
        { name: "GCP (Vertex AI)", level: 90 },
        { name: "Docker", level: 85 },
        { name: "CI/CD & Git", level: 85 },
        { name: "RabbitMQ", level: 80 },
        { name: "ArgoCD", level: 78 },
        { name: "AWS (S3)", level: 72 },
        { name: "Grafana", level: 70 },
        { name: "Azure", level: 65 },
      ],
    },
    {
      name: "Vision & GenAI",
      items: [
        { name: "Document OCR (scanned & multilingual)", level: 85 },
        { name: "AutoEncoders", level: 82 },
        { name: "Image Classification", level: 82 },
        { name: "Latent Diffusion", level: 80 },
        { name: "ControlNet", level: 80 },
        { name: "Object Detection", level: 78 },
      ],
    },
  ],

  contactTitle: "Let's build reliable AI systems",
  contactText:
    "Working on RAG, LLM evaluation, or inference at scale, or just want to talk shop about knowledge graphs and serving? My inbox is open.",
  available: true,
  availableText: "Open to connect",
  timeZone: "Asia/Kolkata",
  city: "Bengaluru",
  height: "100svh",
}
