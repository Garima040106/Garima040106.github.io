export const projects = [
  {
    title: "Web Vulnerability Scanner",
    link: "https://github.com/Garima040106/web-vulnerability-scanner-django",
    stack: ["Python", "Django", "FastAPI", "Docker"],
    summary: "A containerized scanning pipeline that checks for XSS, SQLi, IDOR, and more, with automated PDF reporting.",
    bullets: [
      "Designed a modular, containerized scanning pipeline with a Django and FastAPI backend, isolating each detection module so it could be tested and extended independently.",
      "Implemented REST endpoints for common web vulnerability checks (XSS, SQLi, IDOR, open redirect, port scanning) and automated PDF reporting.",
    ],
  },
  {
    title: "Fraud Detection System",
    link: null,
    stack: ["Django REST Framework", "PostgreSQL", "React"],
    summary: "An ensemble ML model served over REST APIs, with a monitoring dashboard for predictions and transactions.",
    bullets: [
      "Built REST APIs with Django REST Framework backed by PostgreSQL to serve predictions from an ensemble ML model, using SMOTE to handle severe class imbalance in transaction data.",
      "Built a Streamlit dashboard for model and transaction monitoring, on top of a React front end consuming the DRF APIs.",
    ],
  },
  {
    title: "AI Phishing Simulation Platform (PhishGuard)",
    link: "https://github.com/Garima040106/phishing-training-platform",
    stack: ["Python", "Django", "Scikit-learn"],
    summary: "A full-stack platform that simulates phishing attacks and profiles user susceptibility with ML-driven risk reports.",
    bullets: [
      "Shipped a full-stack Django platform end to end — requirements, implementation, testing — to simulate phishing attacks and track user susceptibility with behavioral profiling.",
      "Implemented Random Forest for classification and Isolation Forest for anomaly detection, producing structured risk reports for adaptive training.",
    ],
  },
]
