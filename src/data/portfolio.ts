export type SectionId = "about" | "work" | "research" | "passions" | "contact";

export interface WorkItem {
  title: string;
  year: string;
  role: string;
  summary: string;
  details: string[];
  link?: string;
}

export interface ResearchItem {
  title: string;
  venue: string;
  year: string;
  summary: string;
  link?: string;
}

export const HERO_DATA = {
  name: "Anurag Angal",
  tagline: "Quantum Systems · Numerical Simulation · Software Architecture",
  affiliation: "School of Quantum Technology · DIAT Pune",
  statement:
    "Building simulators and high-craft computational tools.",
  location: "Pune, India",
  status: "M.Tech in Quantum Computing — Defence Institute of Advanced Technology (DIAT), Pune",
};

export const ABOUT_DATA = {
  lead: "I work at the intersection of quantum information science and low-level systems engineering: translating theoretical architectures into deterministic, high-throughput software.",
  paragraphs: [
    "Currently pursuing an M.Tech in Quantum Computing at the School of Quantum Technology, Defence Institute of Advanced Technology (DIAT), Pune.",
    "My engineering philosophy favors first-principles clarity: center-out system design, minimal abstractions, reproducible builds, and hardware-aware numerical computation.",
  ],
  highlights: [
    {
      label: "Academic Focus",
      value: "Neutral-Atom Arrays, Rydberg Blockade Dynamics, Quantum Error Correction",
    },
    {
      label: "Core Stack",
      value: "C, C++17/20, Python, CMake, Ninja, Pulser, Qiskit",
    },
    {
      label: "Leadership",
      value: "Placement Coordinator — School of Quantum Technology, DIAT Pune",
    },
  ],
};

export const WORK_ITEMS: WorkItem[] = [
  {
    title: "Neutral-Atom MPS Circuit Simulator",
    year: "2026",
    // role: "Creator & Systems Architect",
    summary:
      "A high-performance Matrix Product State (MPS) tensor network simulator tailored for low-entanglement neutral-atom quantum circuits.",
    details: [
      "Engineered core tensor contraction routines in C++17/20 backed by Eigen with clean Python bindings via pybind11.",
      "Designed for rapid experimentation with optical tweezer geometries and Rydberg blockade interactions.",
    ],
  },
    /*
  {
    title: "Steane Code Quantum Error Correction Engine",
    year: "2026",
    role: "Developer",
    summary:
      "From-scratch implementation of the [[7,1,3]] Steane CSS code for studying stabilizer measurements, syndrome extraction, and fault-tolerant logical operations.",
    details: [
      "Built incrementally from bare-metal state representations to noisy syndrome decoding benchmarks.",
    ],
    link: "https://github.com/yourusername/steane-qec",
  },
    */
    /*
  {
    title: "Neutral-Atom Optical Lattice Visualizer",
    year: "2026",
    role: "Developer",
    summary:
      "Real-time visual simulation engine built in C and raylib illustrating SLM/AOD atom trapping, qubit initialization, and two-qubit Rydberg entanglement.",
    details: [
      "Created to turn abstract atomic physics protocols into intuitive, frame-accurate visual animations.",
    ],
    link: "https://github.com/yourusername/neutral-atom-viz",
  },
    */
];

export const RESEARCH_ITEMS: ResearchItem[] = [
  {
    title: "Two-Qubit Rydberg Blockade",
    venue: "M.Tech Research · School of Quantum Technology, DIAT Pune",
    year: "2026",
    //summary:
     // "Investigating two-laser excitation schemes in Rubidium-87 neutral-atom arrays, analyzing blockade fidelity limits and tensor-network approximations for scalable gate architectures.",
  },
  {
    title: "Computer Vision & Real-Time Hand Gesture Control Architecture",
    venue: "International Journal of Artificial Intelligence Research and Development (IJAIRD)",
    year: "2025",
    summary:
      "Co-authored publication presenting low-latency vision pipelines for deterministic human-computer gesture interfaces.",
  },
  {
    title: "Functional Programming & Hardware Synthesis Explorations",
    venue: "NPTEL (OCaml) & NIELIT Calicut (FPGA Architecture)",
    year: "2024 — 2025",
    summary:
      "Completed specialized coursework in type-safe functional programming with OCaml and hardware-level digital design on FPGA architectures.",
  },
];

export const PASSIONS_DATA = {
  lead: "Outside formal research and code, I gravitate toward crafts built on structure, patience, and quiet intensity.",
  entries: [
    {
      title: "Visual & Generative Simulations",
      note: "Writing lightweight C and raylib sketches that just help me visualise fun stuff.",
    },
    {
      title: "Reading",
      note: "Reading about anything that interests me, Just an avid reader.",
    },
    {
      title: "Cinema",
      note: "Observing pacing, stillness, and understated presence across classic and contemporary cinema.",
    },
    {
      title: "Food",
      note: "I love to cook vegetarian dishes across the world, and also to eat food from everywhere",
    },
  ],
};

export const CONTACT_DATA = {
  lead: "Open to conversations around quantum architecture, research collaborations, PhD opportunities, and deep-tech engineering.",
  email: "anurag.angalcs@gmail.com",
  location: "Pune, Maharashtra, India",
  socials: [
    { label: "GitHub", handle: "@d1stinc8", url: "https://github.com/d1stinc8" },
    { label: "LinkedIn", handle: "/in/anurag-angal", url: "https://linkedin.com/in/anurag-angal/" },
    { label: "X / Twitter", handle: "@qc_anurag", url: "https://x.com/qc_anurag" },
  ],
};
