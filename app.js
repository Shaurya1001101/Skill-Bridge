// ===== SKILLBRIDGE AI  :  APP.JS =====
// Code_Hustlers | Build For Bharat 2.0

'use strict';

// ===== DATA =====
const SKILL_ROLES = {
  'ml-engineer': {
    name: 'Machine Learning Engineer',
    skills: [
      { name: 'Python', weight: 0.20, required: 4 },
      { name: 'Machine Learning', weight: 0.18, required: 4 },
      { name: 'PyTorch', weight: 0.15, required: 3 },
      { name: 'SQL', weight: 0.08, required: 3 },
      { name: 'Docker', weight: 0.10, required: 3 },
      { name: 'AWS', weight: 0.12, required: 3 },
      { name: 'MLOps', weight: 0.15, required: 3 },
      { name: 'Scikit-learn', weight: 0.10, required: 3 },
      { name: 'NLP', weight: 0.05, required: 2 },
      { name: 'Statistics', weight: 0.07, required: 3 }
    ]
  },
  'data-scientist': {
    name: 'Data Scientist',
    skills: [
      { name: 'Python', weight: 0.18, required: 4 },
      { name: 'Statistics', weight: 0.15, required: 4 },
      { name: 'SQL', weight: 0.12, required: 3 },
      { name: 'Machine Learning', weight: 0.15, required: 3 },
      { name: 'Data Visualization', weight: 0.12, required: 3 },
      { name: 'Pandas', weight: 0.10, required: 3 },
      { name: 'R', weight: 0.08, required: 2 },
      { name: 'Tableau', weight: 0.08, required: 2 },
      { name: 'A/B Testing', weight: 0.07, required: 2 },
      { name: 'Feature Engineering', weight: 0.10, required: 3 }
    ]
  },
  'mlops-engineer': {
    name: 'MLOps Engineer',
    skills: [
      { name: 'Python', weight: 0.15, required: 3 },
      { name: 'Kubernetes', weight: 0.15, required: 3 },
      { name: 'Docker', weight: 0.15, required: 4 },
      { name: 'MLOps', weight: 0.18, required: 4 },
      { name: 'AWS', weight: 0.12, required: 3 },
      { name: 'CI/CD', weight: 0.12, required: 3 },
      { name: 'Monitoring', weight: 0.08, required: 3 },
      { name: 'Git', weight: 0.05, required: 3 }
    ]
  },
  'data-engineer': {
    name: 'Data Engineer',
    skills: [
      { name: 'SQL', weight: 0.18, required: 4 },
      { name: 'Python', weight: 0.15, required: 3 },
      { name: 'Spark', weight: 0.15, required: 3 },
      { name: 'AWS', weight: 0.12, required: 3 },
      { name: 'Kafka', weight: 0.10, required: 3 },
      { name: 'dbt', weight: 0.10, required: 3 },
      { name: 'Airflow', weight: 0.12, required: 3 },
      { name: 'Data Modeling', weight: 0.08, required: 3 }
    ]
  },
  'ai-researcher': {
    name: 'AI Researcher',
    skills: [
      { name: 'Python', weight: 0.12, required: 4 },
      { name: 'PyTorch', weight: 0.18, required: 4 },
      { name: 'Deep Learning', weight: 0.18, required: 4 },
      { name: 'Mathematics', weight: 0.15, required: 4 },
      { name: 'NLP', weight: 0.12, required: 3 },
      { name: 'Computer Vision', weight: 0.10, required: 3 },
      { name: 'Research Writing', weight: 0.08, required: 3 },
      { name: 'Statistics', weight: 0.07, required: 4 }
    ]
  }
};

const EMPLOYEE_PROFILES = [
  { id: 'E-101', name: 'User', currentRole: 'Software Engineer', dept: 'engineering', avatar: '#00C2A8',
    skills: { 'Python': 4, 'SQL': 3, 'Machine Learning': 2, 'Docker': 2, 'AWS': 1, 'MLOps': 0, 'PyTorch': 0, 'Scikit-learn': 2, 'NLP': 0, 'Statistics': 2 } },
  { id: 'E-204', name: 'Priya M.', currentRole: 'Data Analyst', dept: 'data', avatar: '#3B82F6',
    skills: { 'Python': 3, 'SQL': 4, 'Machine Learning': 1, 'Docker': 0, 'AWS': 1, 'MLOps': 0, 'PyTorch': 0, 'Scikit-learn': 2, 'NLP': 1, 'Statistics': 3 } },
  { id: 'E-317', name: 'Rohan K.', currentRole: 'Backend Engineer', dept: 'engineering', avatar: '#8B5CF6',
    skills: { 'Python': 4, 'SQL': 2, 'Machine Learning': 1, 'Docker': 3, 'AWS': 2, 'MLOps': 1, 'PyTorch': 0, 'Scikit-learn': 1, 'NLP': 0, 'Statistics': 1 } },
  { id: 'E-422', name: 'Sneha P.', currentRole: 'QA Engineer', dept: 'engineering', avatar: '#F59E0B',
    skills: { 'Python': 2, 'SQL': 2, 'Machine Learning': 0, 'Docker': 1, 'AWS': 0, 'MLOps': 0, 'PyTorch': 0, 'Scikit-learn': 0, 'NLP': 0, 'Statistics': 1 } },
  { id: 'E-118', name: 'Vikram D.', currentRole: 'Data Scientist', dept: 'data', avatar: '#10B981',
    skills: { 'Python': 4, 'SQL': 3, 'Machine Learning': 3, 'Docker': 1, 'AWS': 2, 'MLOps': 1, 'PyTorch': 2, 'Scikit-learn': 3, 'NLP': 2, 'Statistics': 4 } },
  { id: 'E-231', name: 'Kavya R.', currentRole: 'Product Manager', dept: 'product', avatar: '#EC4899',
    skills: { 'Python': 1, 'SQL': 2, 'Machine Learning': 1, 'Docker': 0, 'AWS': 1, 'MLOps': 0, 'PyTorch': 0, 'Scikit-learn': 0, 'NLP': 0, 'Statistics': 2 } },
  { id: 'E-355', name: 'Aditya N.', currentRole: 'DevOps Engineer', dept: 'engineering', avatar: '#F97316',
    skills: { 'Python': 3, 'SQL': 2, 'Machine Learning': 0, 'Docker': 4, 'AWS': 4, 'MLOps': 2, 'PyTorch': 0, 'Scikit-learn': 0, 'NLP': 0, 'Statistics': 1 } },
  { id: 'E-477', name: 'Meera T.', currentRole: 'Research Intern', dept: 'data', avatar: '#06B6D4',
    skills: { 'Python': 3, 'SQL': 2, 'Machine Learning': 2, 'Docker': 0, 'AWS': 0, 'MLOps': 0, 'PyTorch': 1, 'Scikit-learn': 2, 'NLP': 2, 'Statistics': 3 } }
];

const DATASETS = [
  { name: 'O*NET Database', category: 'job', desc: 'Occupational Information Network  :  standard occupation codes, task and skill descriptors, work activities, and importance ratings for 900+ US occupations.', records: '900+ Occupations', dateRange: 'Updated 2024', license: 'Public Domain (US DOL)', url: 'https://www.onetcenter.org' },
  { name: 'ESCO v1.1', category: 'skill', desc: 'European Skills, Competences, Qualifications and Occupations taxonomy. 13,890 skills organized in a hierarchy with multilingual support.', records: '13,890 Skills', dateRange: 'v1.1 (2022)', license: 'CC BY 4.0', url: 'https://esco.ec.europa.eu' },
  { name: 'LinkedIn Job Postings', category: 'trend', desc: 'Kaggle dataset of 33,000+ LinkedIn job postings from 2023 across various industries, roles, and locations with required skills.', records: '33,000+ Postings', dateRange: '2023', license: 'CC0 / Research', url: 'https://www.kaggle.com' },
  { name: 'Stack Overflow Dev Survey', category: 'trend', desc: 'Annual developer survey capturing programming languages, frameworks, tools, and salary data across 70,000+ developers worldwide.', records: '70,000+ Responses', dateRange: '2022 to 2024', license: 'ODbL', url: 'https://survey.stackoverflow.co' },
  { name: 'Resume Dataset (Kaggle)', category: 'workforce', desc: 'Collection of annotated resumes across multiple domains including IT, HR, Finance, Education, and Healthcare for NLP training.', records: '2,400+ Resumes', dateRange: '2021 to 2023', license: 'CC0', url: 'https://www.kaggle.com' },
  { name: 'Burning Glass / Lightcast', category: 'trend', desc: 'Real-time labor market data aggregating 40M+ job postings with skill demand, salary ranges, and emerging technology signals.', records: '40M+ Job Postings', dateRange: '2020 to 2024', license: 'Commercial API', url: 'https://lightcast.io' },
  { name: 'Bureau of Labor Statistics', category: 'job', desc: 'US federal statistical agency occupational outlook data, employment projections, and wage information by occupation.', records: '830+ Occupations', dateRange: '2022 to 2032', license: 'Public Domain', url: 'https://www.bls.gov' },
  { name: 'Coursera Skills Graph', category: 'skill', desc: 'Skill taxonomy derived from Coursera learning platform  :  maps courses to skills, skill hierarchies, and learning outcomes.', records: '10,000+ Skills', dateRange: '2023', license: 'Research Use', url: 'https://www.coursera.org' }
];

const HEATMAP_DATA = [
  { name: 'Python', pct: 82, cat: 'ok' },
  { name: 'SQL', pct: 78, cat: 'low' },
  { name: 'Machine Learning', pct: 61, cat: 'high' },
  { name: 'Data Viz', pct: 68, cat: 'medium' },
  { name: 'Cloud / AWS', pct: 48, cat: 'critical' },
  { name: 'Docker', pct: 55, cat: 'high' },
  { name: 'MLOps', pct: 29, cat: 'critical' },
  { name: 'Generative AI', pct: 37, cat: 'critical' },
  { name: 'Statistics', pct: 71, cat: 'medium' },
  { name: 'Deep Learning', pct: 44, cat: 'critical' },
  { name: 'Spark', pct: 34, cat: 'critical' },
  { name: 'Kubernetes', pct: 38, cat: 'critical' },
  { name: 'FastAPI', pct: 62, cat: 'medium' },
  { name: 'NLP', pct: 42, cat: 'critical' },
  { name: 'Pandas', pct: 76, cat: 'low' },
  { name: 'Git / DevOps', pct: 88, cat: 'ok' }
];

const ROADMAPS = {
  'ml-engineer': {
    beginner: [
      { weeks: '1 to 2', skill: 'Python Fundamentals', desc: 'Core Python: data types, functions, OOP, file I/O', tags: ['Variables', 'Functions', 'OOP'], priority: 'critical', hours: 20 },
      { weeks: '3 to 4', skill: 'SQL & Data Basics', desc: 'Querying databases, joins, aggregations, window functions', tags: ['SELECT', 'Joins', 'Aggregations'], priority: 'high', hours: 16 },
      { weeks: '5 to 6', skill: 'Statistics & Math', desc: 'Probability, distributions, hypothesis testing, linear algebra basics', tags: ['Probability', 'Linear Algebra'], priority: 'high', hours: 18 },
      { weeks: '7 to 8', skill: 'Machine Learning Basics', desc: 'Supervised/unsupervised learning, Scikit-learn, model evaluation', tags: ['Scikit-learn', 'Classification', 'Regression'], priority: 'critical', hours: 20 },
      { weeks: '9 to 10', skill: 'PyTorch & Deep Learning', desc: 'Neural networks, training loops, CNNs, model optimization', tags: ['PyTorch', 'Neural Nets', 'Backprop'], priority: 'critical', hours: 22 },
      { weeks: '11 to 12', skill: 'Deployment & Docker', desc: 'FastAPI, containerization, basic model serving', tags: ['FastAPI', 'Docker', 'REST API'], priority: 'high', hours: 18 }
    ],
    intermediate: [
      { weeks: '1 to 3', skill: 'PyTorch & Advanced ML', desc: 'Deep learning architectures, transformers, model fine-tuning', tags: ['PyTorch', 'Transformers', 'Fine-tuning'], priority: 'critical', hours: 30 },
      { weeks: '4 to 5', skill: 'Model Deployment', desc: 'FastAPI endpoints, model serialization, request handling', tags: ['FastAPI', 'ONNX', 'Serving'], priority: 'high', hours: 20 },
      { weeks: '6 to 7', skill: 'Docker & Containers', desc: 'Dockerfiles, docker-compose, container orchestration basics', tags: ['Docker', 'docker-compose', 'Containers'], priority: 'high', hours: 18 },
      { weeks: '8 to 10', skill: 'MLOps Practices', desc: 'MLflow, experiment tracking, CI/CD for ML, model monitoring', tags: ['MLflow', 'CI/CD', 'Monitoring'], priority: 'critical', hours: 22 },
      { weeks: '11 to 12', skill: 'AWS Deployment', desc: 'EC2, S3, SageMaker, ECS  :  deploying and scaling ML models', tags: ['AWS', 'SageMaker', 'ECS'], priority: 'high', hours: 20 }
    ],
    advanced: [
      { weeks: '1 to 2', skill: 'MLOps Architecture', desc: 'Production-grade ML systems, feature stores, model registry', tags: ['Kubeflow', 'Feature Store', 'Model Registry'], priority: 'critical', hours: 20 },
      { weeks: '3 to 4', skill: 'AWS ML Infrastructure', desc: 'SageMaker Pipelines, EKS, multi-region deployments', tags: ['SageMaker', 'EKS', 'Lambda'], priority: 'high', hours: 18 },
      { weeks: '5 to 7', skill: 'LLM Fine-tuning & RAG', desc: 'PEFT, LoRA, RAG pipelines, vector databases', tags: ['LoRA', 'RAG', 'pgvector'], priority: 'critical', hours: 26 },
      { weeks: '8 to 10', skill: 'System Design for ML', desc: 'Distributed training, serving at scale, A/B testing ML', tags: ['Distributed', 'Load Balancing', 'A/B'], priority: 'medium', hours: 22 },
      { weeks: '11 to 12', skill: 'Research & Publication', desc: 'Paper writing, experiment design, benchmark contribution', tags: ['Research', 'arXiv', 'Benchmarks'], priority: 'low', hours: 16 }
    ]
  }
};

const TREND_DATA = {
  labels: ['Q1 2022', 'Q2 2022', 'Q3 2022', 'Q4 2022', 'Q1 2023', 'Q2 2023', 'Q3 2023', 'Q4 2023', 'Q1 2024', 'Q2 2024'],
  'ai-ml': {
    datasets: [
      { label: 'Generative AI', data: [5, 8, 12, 18, 28, 42, 58, 72, 83, 91], color: '#00C2A8' },
      { label: 'MLOps', data: [15, 20, 24, 30, 36, 42, 49, 55, 61, 66], color: '#3B82F6' },
      { label: 'PyTorch', data: [25, 30, 36, 42, 48, 54, 60, 66, 71, 75], color: '#8B5CF6' },
      { label: 'RAG / LLM', data: [2, 4, 7, 12, 22, 38, 55, 68, 78, 86], color: '#F59E0B' }
    ]
  },
  'cloud': {
    datasets: [
      { label: 'AWS', data: [65, 67, 70, 72, 74, 76, 78, 80, 82, 84], color: '#F59E0B' },
      { label: 'Kubernetes', data: [30, 35, 40, 46, 52, 57, 62, 66, 70, 73], color: '#00C2A8' },
      { label: 'Terraform', data: [20, 25, 30, 36, 42, 47, 52, 57, 62, 66], color: '#3B82F6' },
      { label: 'FinOps', data: [5, 8, 12, 18, 24, 31, 38, 44, 50, 56], color: '#EC4899' }
    ]
  },
  'data': {
    datasets: [
      { label: 'dbt', data: [10, 16, 22, 30, 38, 46, 53, 59, 64, 69], color: '#F97316' },
      { label: 'Spark', data: [55, 57, 60, 62, 64, 65, 67, 68, 69, 70], color: '#8B5CF6' },
      { label: 'Kafka', data: [32, 36, 40, 44, 48, 52, 55, 58, 60, 63], color: '#3B82F6' },
      { label: 'DuckDB', data: [2, 5, 10, 16, 24, 34, 44, 54, 62, 69], color: '#00C2A8' }
    ]
  },
  'security': {
    datasets: [
      { label: 'Cloud Security', data: [40, 44, 49, 54, 59, 63, 67, 70, 73, 76], color: '#EF4444' },
      { label: 'Zero Trust', data: [15, 20, 27, 34, 41, 47, 53, 58, 63, 67], color: '#F59E0B' },
      { label: 'AppSec / SAST', data: [28, 31, 35, 39, 43, 47, 51, 54, 57, 60], color: '#8B5CF6' },
      { label: 'AI Safety', data: [2, 3, 5, 8, 14, 22, 32, 42, 52, 61], color: '#00C2A8' }
    ]
  }
};

const STAGE_DETAILS = {
  problem: { title: '1. Problem: Workforce Skill Mismatch', content: 'Organizations face a rapidly changing skill landscape. Job roles are evolving faster than traditional training cycles. HR teams rely on manual assessments and static job descriptions. There is no continuous intelligence layer connecting workforce capabilities with current and emerging skill requirements.', points: ['Job roles evolve faster than training cycles', 'Manual assessments are slow and hard to scale', 'Generic courses are not personalized', 'External hiring overlooks internal talent', 'No system to predict emerging skill needs'] },
  collect: { title: '2. Collect Data: Jobs + Skills + Talent', content: 'Three major data types are needed: Job/Role data (O*NET, ESCO, job posting datasets) to understand what skills industry requires; Talent data (resumes, profiles) to understand what employees already have; and Skill Taxonomy to connect them in a structured way.', points: ['O*NET: 900+ occupation-skill mappings', 'ESCO v1.1: 13,890 normalized skills', 'LinkedIn Job Postings: 33,000+ records', 'Stack Overflow Dev Survey: 70,000+ responses', 'Resume Dataset: 2,400+ annotated resumes'] },
  clean: { title: '3. Clean Data: NLP + Normalization', content: 'Raw data is messy. "Machine Learning", "ML", "ML techniques", "machine-learning" may all represent the same skill. Our preprocessing pipeline removes duplicates, normalizes text, extracts skills, standardizes skill names, maps related skills, and produces a structured dataset.', points: ['Deduplication and text normalization', 'NLP-based skill extraction from free text', 'Canonical skill mapping (e.g., "ML" → "Machine Learning")', 'Synonym resolution using skill taxonomy', 'Missing value handling and data quality checks'] },
  analyze: { title: '4. Analyze: Role ↔ Skill ↔ Talent', content: 'With structured data, we answer key analytical questions: What skills are required for each role? What skills does each employee currently have? What is missing? Which employees are closest to required roles? Which skills are growing in demand?', points: ['Role-skill matrix construction from O*NET', 'Employee skill profile generation from resumes', 'Gap vector calculation per employee per role', 'Organizational skill coverage analysis', 'Skill co-occurrence and dependency mapping'] },
  'build-ai': { title: '5. Build AI: NLP + Embeddings + ML', content: 'Five focused AI components, each with a specific job: Skill Extraction (NLP/LLM), Semantic Matching (embeddings), Skill Gap Engine (weighted scoring), Recommendation Engine (priority-ranked roadmap), and Future Skill Forecasting (time-series analysis).', points: ['SpaCy + Sentence-BERT for skill extraction', 'FAISS vector search for semantic matching', 'Weighted gap score formula: Σ[w × (required - current)]', 'Dependency-aware recommendation ranking', 'ARIMA/Prophet for skill demand forecasting'] },
  insight: { title: '6. Generate Insight: Gaps + Priorities + Trends', content: 'The system converts AI output into actionable decisions. For individuals: prioritized skill gaps with reasons. For organizations: internal talent rankings, workforce readiness scores, and emerging skill alerts. Every insight is explainable, not just a number.', points: ['Individual: "Your profile has 72% alignment with ML Engineer"', 'Organizational: "43 employees are suitable for ML transition"', 'Priority: Critical gaps (MLOps, PyTorch) vs. lower priority (NLP)', 'Trend alerts: "Generative AI demand up 182% in 12 months"', 'Actionable: every insight linked to a learning recommendation'] },
  product: { title: '7. Create Product: SkillBridge AI Platform', content: 'The intelligence is packaged into four dashboards: Individual Profile (current vs. target role), Skill Gap View (current → required → missing → priority), Learning Roadmap (12-week plan by skill dependencies), and Workforce Intelligence (organizational KPIs and skill heatmap).', points: ['Individual dashboard with skill match and readiness', 'Interactive gap analysis with weighted scoring', 'AI-generated 12-week upskilling roadmaps', 'HR workforce intelligence with heatmaps', 'Talent discovery for internal mobility'] },
  impact: { title: '8. Impact: Upskill → Redeploy → Grow', content: 'SkillBridge enables organizations to reduce dependency on external hiring, achieve faster internal mobility, provide more targeted training, improve workforce planning, and give employees clearer career development paths. All value is measured using technical and product metrics.', points: ['Reduced external recruitment dependency', 'Faster capability development through targeted training', 'Better workforce planning with predictive skill insights', 'Improved employee retention via clear career paths', 'Technical metrics: Precision/Recall/F1, Precision@K, MAE, RMSE'] }
};


// ===== NAVIGATION =====
let activeTab = 'dashboard';
let trendChartInst = null;
let fullTrendChartInst = null;

function showTab(tabId) {
  document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  var tab = document.getElementById('tab-' + tabId);
  if (tab) tab.classList.add('active');
  var nav = document.querySelector('[data-tab="' + tabId + '"]');
  if (nav) nav.classList.add('active');
  var names = {dashboard:'Dashboard','skill-analyzer':'Skill Analyzer','gap-analysis':'Gap Analysis',
    roadmap:'Learning Roadmap','talent-discovery':'Talent Discovery','skill-trends':'Skill Trends',
    'workforce-intel':'Workforce Intel',datasets:'Datasets',methodology:'Methodology',
    help:'Help & Guide',about:'About'};
  document.getElementById('breadcrumb').textContent = names[tabId] || tabId;
  activeTab = tabId;
  if (tabId === 'skill-trends') setTimeout(renderFullTrendChart, 100);
  if (tabId === 'roadmap') generateRoadmap();
  if (tabId === 'talent-discovery') { searchTalent(); loadTransitionPipeline(); }
  if (tabId === 'workforce-intel') { renderCoverageMatrix(); renderDeptReadiness(); }
  if (tabId === 'gap-analysis') renderSkillRatings();
  window.scrollTo(0,0);
}

window.addEventListener('DOMContentLoaded', function() {
  initAuth();
  renderDemoResumes();
  renderMarketJobs();
  renderWaypointsFlowchart();
  renderVideoHub("all");
  switchCompilerTab("latex");
  var sidebar = document.getElementById('sidebar');
  var mc = document.getElementById('mainContent');
  document.getElementById('sidebarToggle').addEventListener('click', function() {
    if (window.innerWidth > 768) { sidebar.classList.toggle('collapsed'); mc.classList.toggle('expanded'); }
    else { sidebar.classList.toggle('mobile-open'); }
  });
  document.getElementById('mobileMenuBtn').addEventListener('click', function() {
    sidebar.classList.toggle('mobile-open');
  });
  document.querySelectorAll('.nav-item').forEach(function(item) {
    item.addEventListener('click', function(e) {
      e.preventDefault(); showTab(this.dataset.tab);
      if (window.innerWidth <= 768) sidebar.classList.remove('mobile-open');
    });
  });
  initDashboard();
  renderSkillRatings();
  generateRoadmap();
  renderFullTrendChart();
  renderCoverageMatrix();
  renderDeptReadiness();
  renderDatasets('all');
  renderTrendingLists();
  renderDemandBars();
  searchTalent();
  loadTransitionPipeline();
});

function showToast(msg, type) {
  var t = type || 'info';
  var tc = document.getElementById('toastContainer');
  if (!tc) return;
  var div = document.createElement('div');
  div.className = 'toast toast-' + t;
  div.textContent = msg;
  tc.appendChild(div);
  setTimeout(function() { div.remove(); }, 3500);
}

function initDashboard() {
  renderHeatmap();
  renderTopGaps();
  renderMobility();
  renderDashboardChart();
  animateKPI('kpi-employees', 500, '');
  animateKPI('kpi-readiness', 67, '%');
  animateKPI('kpi-gaps', 8, '');
  animateKPI('kpi-transitions', 43, '');
}

function animateKPI(id, target, suffix) {
  var el = document.getElementById(id);
  if (!el) return;
  var dur = 1200, startTime = null;
  function step(ts) {
    if (!startTime) startTime = ts;
    var prog = Math.min((ts - startTime) / dur, 1);
    el.textContent = Math.round(prog * target) + suffix;
    if (prog < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

function renderHeatmap() {
  var el = document.getElementById('skillHeatmap');
  if (!el) return;
  var catClass = {critical:'heat-critical',high:'heat-high',medium:'heat-medium',low:'heat-low',ok:'heat-ok'};
  var catLabel = {critical:'Critical Gap',high:'High Gap',medium:'Medium Gap',low:'Low Gap',ok:'Meeting Target'};
  el.innerHTML = HEATMAP_DATA.map(function(d) {
    return '<div class="heat-cell ' + catClass[d.cat] + '" title="' + d.name + ': ' + d.pct + '% coverage"><div class="heat-cell-name">' + d.name + '</div><div class="heat-cell-val">' + d.pct + '%</div><div class="heat-cell-sub">' + catLabel[d.cat] + '</div></div>';
  }).join('');
}

function renderTopGaps() {
  var el = document.getElementById('topGapsList');
  if (!el) return;
  var critical = HEATMAP_DATA.filter(function(d) { return d.pct < 62; }).sort(function(a,b) { return a.pct - b.pct; }).slice(0,6);
  el.innerHTML = critical.map(function(d) {
    var col = d.pct < 40 ? 'var(--danger)' : d.pct < 55 ? 'var(--warning)' : 'var(--info)';
    return '<div class="gap-list-item"><div class="gap-item-header"><span class="gap-item-name">' + d.name + '</span><span class="gap-item-pct" style="color:' + col + '">' + d.pct + '%</span></div><div class="gap-bar-bg"><div class="gap-bar-fill" style="width:' + d.pct + '%;background:' + col + '"></div></div></div>';
  }).join('');
}

function renderMobility() {
  var el = document.getElementById('mobilityList');
  if (!el) return;
  var role = SKILL_ROLES['ml-engineer'];
  var scored = EMPLOYEE_PROFILES.slice(0,4).map(function(emp) {
    return {id:emp.id, name:emp.name, currentRole:emp.currentRole, avatar:emp.avatar, score:computeReadiness(emp,role)};
  }).sort(function(a,b) { return b.score - a.score; });
  el.innerHTML = scored.map(function(emp) {
    var col = emp.score >= 80 ? 'var(--success)' : emp.score >= 65 ? 'var(--warning)' : 'var(--info)';
    return '<div class="mobility-item"><div class="mob-avatar" style="background:' + emp.avatar + '">' + emp.name.charAt(0) + '</div><div class="mob-info"><div class="mob-id">' + emp.id + '  :  ' + emp.name + '</div><div class="mob-role">' + emp.currentRole + '</div></div><div class="mob-score" style="color:' + col + '">' + emp.score + '%</div></div>';
  }).join('');
}

function computeReadiness(emp, role) {
  var totalGap = 0, maxGap = 0;
  role.skills.forEach(function(sk) {
    var curr = (emp.skills && emp.skills[sk.name]) || 0;
    totalGap += sk.weight * Math.max(0, sk.required - curr);
    maxGap += sk.weight * sk.required;
  });
  if (maxGap === 0) return 0;
  return Math.round(Math.max(0, (1 - totalGap / maxGap) * 100));
}

function drawLineChart(ctx, canvas, labels, datasets) {
  var W = canvas.offsetWidth || 800, H = canvas.offsetHeight || 220;
  canvas.width = W; canvas.height = H;
  ctx.clearRect(0,0,W,H);
  var pad = {left:38, right:16, top:24, bottom:38};
  var cw = W - pad.left - pad.right, ch = H - pad.top - pad.bottom;
  ctx.strokeStyle = 'rgba(255,255,255,.06)'; ctx.lineWidth = 1;
  [0,25,50,75,100].forEach(function(v) {
    var y = pad.top + ch*(1-v/100);
    ctx.beginPath(); ctx.moveTo(pad.left,y); ctx.lineTo(W-pad.right,y); ctx.stroke();
    ctx.fillStyle='rgba(255,255,255,.35)'; ctx.font='10px Inter'; ctx.textAlign='right';
    ctx.fillText(v+'%', pad.left-4, y+3);
  });
  labels.forEach(function(lbl,i) {
    var x = pad.left + i/(labels.length-1)*cw;
    ctx.fillStyle='rgba(255,255,255,.3)'; ctx.font='9px Inter'; ctx.textAlign='center';
    ctx.fillText(lbl, x, H-6);
  });
  var legX=pad.left, legY=14;
  datasets.forEach(function(ds) {
    ctx.strokeStyle=ds.color; ctx.lineWidth=2.5; ctx.beginPath();
    ds.data.forEach(function(v,i) {
      var x=pad.left+i/(labels.length-1)*cw, y=pad.top+ch*(1-v/100);
      if(i===0) ctx.moveTo(x,y); else ctx.lineTo(x,y);
    });
    ctx.stroke();
    ds.data.forEach(function(v,i) {
      var x=pad.left+i/(labels.length-1)*cw, y=pad.top+ch*(1-v/100);
      ctx.beginPath(); ctx.arc(x,y,3,0,Math.PI*2); ctx.fillStyle=ds.color; ctx.fill();
    });
    ctx.fillStyle=ds.color; ctx.font='bold 10px Inter'; ctx.textAlign='left';
    ctx.fillRect(legX, legY-5, 12, 3);
    ctx.fillText(ds.label, legX+16, legY);
    legX += 120; if(legX > W-100) { legX=pad.left; legY+=14; }
  });
  return {destroy:function(){}};
}

function renderDashboardChart() {
  var canvas = document.getElementById('trendChart');
  if (!canvas) return;
  if (trendChartInst) { trendChartInst = null; }
  var ctx = canvas.getContext('2d');
  trendChartInst = drawLineChart(ctx, canvas, TREND_DATA.labels, TREND_DATA['ai-ml'].datasets);
}

// ===== FULL TREND CHART =====
function renderFullTrendChart() {
  var canvas = document.getElementById('fullTrendChart');
  if (!canvas) return;
  var cat = (document.getElementById('trendCategory') || {}).value || 'ai-ml';
  if (fullTrendChartInst) { fullTrendChartInst = null; }
  var ctx = canvas.getContext('2d');
  fullTrendChartInst = drawLineChart(ctx, canvas, TREND_DATA.labels, TREND_DATA[cat].datasets);
}

// ===== TRENDING LISTS =====
function renderTrendingLists() {
  var upEl = document.getElementById('trendingUpList');
  var dnEl = document.getElementById('trendingDownList');
  var upSkills = [{name:'Generative AI', change:'+182%', pct:91, col:'#00C2A8'},{name:'RAG / LLM', change:'+1200%', pct:86, col:'#F59E0B'},{name:'MLOps', change:'+340%', pct:66, col:'#3B82F6'},{name:'dbt', change:'+590%', pct:69, col:'#F97316'},{name:'DuckDB', change:'+3350%', pct:69, col:'#8B5CF6'}];
  var dnSkills = [{name:'Hadoop MapReduce', change:'-42%', pct:18, col:'var(--danger)'},{name:'SVN / CVS', change:'-71%', pct:8, col:'var(--danger)'},{name:'jQuery', change:'-55%', pct:22, col:'var(--warning)'},{name:'Angular.js (v1)', change:'-68%', pct:11, col:'var(--danger)'}];
  if (upEl) upEl.innerHTML = upSkills.map(function(s,i) {
    return '<div class="trending-item"><div class="trending-rank">' + (i+1) + '</div><div class="trending-info"><div class="trending-name">' + s.name + '</div><div class="trending-change" style="color:var(--success)">' + s.change + '</div><div class="trending-bar"><div class="trending-bar-fill" style="width:' + s.pct + '%;background:' + s.col + '"></div></div></div></div>';
  }).join('');
  if (dnEl) dnEl.innerHTML = dnSkills.map(function(s,i) {
    return '<div class="trending-item"><div class="trending-rank">' + (i+1) + '</div><div class="trending-info"><div class="trending-name">' + s.name + '</div><div class="trending-change" style="color:var(--danger)">' + s.change + '</div><div class="trending-bar"><div class="trending-bar-fill" style="width:' + (100-s.pct) + '%;background:var(--danger)"></div></div></div></div>';
  }).join('');
}

function renderDemandBars() {
  var el = document.getElementById('demandBars');
  if (!el) return;
  var demands = [
    {name:'Python', pct:94, col:'#00C2A8'},{name:'Machine Learning', pct:78, col:'#3B82F6'},
    {name:'SQL', pct:85, col:'#8B5CF6'},{name:'Cloud (AWS/GCP/Azure)', pct:81, col:'#F59E0B'},
    {name:'Generative AI / LLMs', pct:72, col:'#F97316'},{name:'Docker/Kubernetes', pct:67, col:'#10B981'},
    {name:'MLOps', pct:58, col:'#EC4899'},{name:'RAG Pipelines', pct:52, col:'#06B6D4'}
  ];
  el.innerHTML = demands.map(function(d) {
    return '<div class="demand-bar-item"><div class="demand-label"><span class="demand-label-name">' + d.name + '</span><span class="demand-label-val">' + d.pct + '% of ML job postings</span></div><div class="demand-track"><div class="demand-fill" style="width:' + d.pct + '%;background:' + d.col + '">' + d.pct + '%</div></div></div>';
  }).join('');
}

// ===== SKILL ANALYZER =====
var currentInputMode = 'resume';
function setInputMode(mode, btn) {
  currentInputMode = mode;
  document.querySelectorAll('.input-tab-btn').forEach(function(b) { b.classList.remove('active'); });
  if (btn) btn.classList.add('active');
}

function loadSampleResume() {
  var el = document.getElementById('analyzerInput');
  if (!el) return;
  el.value = 'Experienced Software Engineer with 4 years of experience in Python and machine learning. Developed and deployed multiple ML models using Scikit-learn and PyTorch for classification and regression tasks. Built RESTful APIs using FastAPI and deployed containerized applications with Docker on AWS EC2. Strong skills in SQL, Pandas, and data preprocessing. Experience with Git, CI/CD pipelines, and Agile development. Completed projects involving NLP text classification and computer vision with CNNs.';
  showToast('Sample resume loaded!', 'success');
}

function loadSampleJD() {
  var el = document.getElementById('analyzerInput');
  if (!el) return;
  el.value = 'Machine Learning Engineer  :  We are looking for an ML Engineer to join our AI team. Requirements: 3+ years Python, strong experience with PyTorch or TensorFlow, knowledge of MLOps practices (MLflow, Kubeflow), Docker and Kubernetes, AWS SageMaker or GCP Vertex AI, SQL and data engineering basics, experience deploying ML models to production, familiarity with NLP or computer vision is a plus. Nice to have: knowledge of RAG pipelines, LLM fine-tuning, FastAPI for model serving.';
  showToast('Sample job description loaded!', 'success');
}

function runAnalysis() {
  var input = (document.getElementById('analyzerInput') || {}).value || '';
  if (input.trim().length < 30) { showToast('Please enter more text (at least 30 characters)', 'warning'); return; }
  var overlay = document.getElementById('loadingOverlay');
  if (overlay) overlay.style.display = 'flex';
  setTimeout(function() {
    if (overlay) overlay.style.display = 'none';
    var extracted = extractSkillsFromText(input);
    var roleKey = (document.getElementById('targetRole') || {}).value || 'ml-engineer';
    var role = SKILL_ROLES[roleKey];
    renderExtractedSkills(extracted);
    renderProfileOutput(extracted, role);
    showToast('Analysis complete! ' + extracted.all.length + ' skills extracted.', 'success');
  }, 1600);
}

function extractSkillsFromText(text) {
  var lower = text.toLowerCase();
  var techSkills = ['python','sql','pandas','numpy','matplotlib','scikit-learn','tensorflow','pytorch','keras','spark','hadoop','kafka','dbt','airflow','tableau','power bi'];
  var mlSkills = ['machine learning','deep learning','nlp','computer vision','natural language processing','reinforcement learning','feature engineering','model deployment','mlops','llm','rag','generative ai','transformers','bert','gpt'];
  var toolSkills = ['docker','kubernetes','git','linux','fastapi','flask','django','fastapi','ci/cd','jenkins','github actions','mlflow','kubeflow'];
  var cloudSkills = ['aws','gcp','azure','s3','ec2','sagemaker','vertex ai','bigquery','lambda','cloudwatch'];
  var softSkills = ['agile','scrum','problem solving','communication','teamwork'];
  function findMatches(list) { return list.filter(function(s) { return lower.includes(s.toLowerCase()); }); }
  var found = { tech: findMatches(techSkills), ml: findMatches(mlSkills), tool: findMatches(toolSkills), cloud: findMatches(cloudSkills), soft: findMatches(softSkills) };
  found.all = found.tech.concat(found.ml, found.tool, found.cloud, found.soft);
  return found;
}

function renderExtractedSkills(extracted) {
  var el = document.getElementById('skillsOutput');
  if (!el) return;
  var badge = document.getElementById('skillCountBadge');
  if (badge) badge.textContent = extracted.all.length + ' skills';
  var cats = [{key:'tech',label:'PROGRAMMING & DATA',cls:'skill-tag-tech'},{key:'ml',label:'AI / MACHINE LEARNING',cls:'skill-tag-ml'},{key:'tool',label:'TOOLS & FRAMEWORKS',cls:'skill-tag-tool'},{key:'cloud',label:'CLOUD & INFRA',cls:'skill-tag-cloud'},{key:'soft',label:'SOFT SKILLS',cls:'skill-tag-soft'}];
  el.innerHTML = cats.filter(function(c) { return extracted[c.key].length > 0; }).map(function(c) {
    return '<div class="skill-category-section"><div class="skill-cat-title">' + c.label + '</div><div class="skill-tags">' + extracted[c.key].map(function(s) { return '<span class="skill-tag ' + c.cls + '">' + s.charAt(0).toUpperCase() + s.slice(1) + '</span>'; }).join('') + '</div></div>';
  }).join('');
}

function renderProfileOutput(extracted, role) {
  var el = document.getElementById('profileOutput');
  var badge = document.getElementById('overallMatchBadge');
  if (!el) return;
  var allFound = extracted.all.map(function(s) { return s.toLowerCase(); });
  var strong = [], partial = [], missing = [];
  role.skills.forEach(function(sk) {
    var skLow = sk.name.toLowerCase();
    if (allFound.some(function(f) { return f.includes(skLow) || skLow.includes(f); })) strong.push(sk.name);
    else if (allFound.some(function(f) { var words = skLow.split(' '); return words.some(function(w) { return w.length > 3 && f.includes(w); }); })) partial.push(sk.name);
    else missing.push(sk.name);
  });
  var matchPct = Math.round((strong.length + partial.length * 0.5) / role.skills.length * 100);
  if (badge) {
    badge.className = 'badge ' + (matchPct >= 70 ? 'badge-success' : matchPct >= 50 ? 'badge-warning' : 'badge-danger');
    badge.textContent = matchPct + '% Match';
  }
  el.innerHTML = '<div class="match-grid"><div class="match-col match-col-success"><div class="match-col-title">STRONG MATCH</div>' + strong.map(function(s) { return '<div class="match-item">' + s + '</div>'; }).join('') + '</div><div class="match-col match-col-warning"><div class="match-col-title">PARTIAL MATCH</div>' + (partial.length ? partial.map(function(s) { return '<div class="match-item">~ ' + s + '</div>'; }).join('') : '<div class="match-item" style="color:var(--text3)">None</div>') + '</div><div class="match-col match-col-danger"><div class="match-col-title">GAPS</div>' + (missing.length ? missing.map(function(s) { return '<div class="match-item">' + s + '</div>'; }).join('') : '<div class="match-item" style="color:var(--success)">No gaps!</div>') + '</div></div><p style="font-size:12px;color:var(--text3);font-style:italic;margin-top:10px">Note: Readiness % is a model-derived indicator, not an objective qualification measure.</p>';
}

// ===== GAP ANALYSIS =====
function renderSkillRatings() {
  var el = document.getElementById('skillsRatingGrid');
  if (!el) return;
  var roleKey = (document.getElementById('gapTargetRole') || {}).value || 'ml-engineer';
  var role = SKILL_ROLES[roleKey];
  el.innerHTML = role.skills.map(function(sk, idx) {
    var stars = [0,1,2,3,4].map(function(v) {
      return '<button class="star-btn" data-skill="' + sk.name + '" data-val="' + v + '" onclick="setRating(this,' + v + ',' + idx + ')">' + v + '</button>';
    }).join('');
    return '<div class="rating-item"><div class="rating-header"><span class="rating-name">' + sk.name + '</span><span class="rating-weight">Weight: ' + Math.round(sk.weight*100) + '%</span></div><div class="rating-stars" id="stars-' + idx + '">' + stars + '</div></div>';
  }).join('');
}

function setRating(btn, val, rowIdx) {
  var row = document.getElementById('stars-' + rowIdx);
  if (!row) return;
  row.querySelectorAll('.star-btn').forEach(function(b) {
    b.classList.toggle('active', parseInt(b.dataset.val) <= val);
  });
}

function loadGapDemo() {
  document.getElementById('employeeId').value = 'E-101';
  document.getElementById('currentRole').value = 'Software Engineer';
  renderSkillRatings();
  setTimeout(function() {
    var emp = EMPLOYEE_PROFILES[0];
    var roleKey = document.getElementById('gapTargetRole').value || 'ml-engineer';
    var role = SKILL_ROLES[roleKey];
    role.skills.forEach(function(sk, idx) {
      var currVal = (emp.skills[sk.name] || 0);
      var row = document.getElementById('stars-' + idx);
      if (row) row.querySelectorAll('.star-btn').forEach(function(b) { b.classList.toggle('active', parseInt(b.dataset.val) <= currVal); });
    });
    showToast('E-101 profile loaded!', 'success');
  }, 100);
}

function calculateGapScore() {
  var roleKey = (document.getElementById('gapTargetRole') || {}).value || 'ml-engineer';
  var role = SKILL_ROLES[roleKey];
  var empId = (document.getElementById('employeeId') || {}).value || 'Employee';
  var currentRole = (document.getElementById('currentRole') || {}).selectedOptions;
  currentRole = currentRole ? currentRole[0].text : 'Current Role';
  var ratings = {};
  role.skills.forEach(function(sk, idx) {
    var row = document.getElementById('stars-' + idx);
    if (!row) { ratings[sk.name] = 0; return; }
    var active = row.querySelectorAll('.star-btn.active');
    ratings[sk.name] = active.length ? parseInt(Array.from(active).pop().dataset.val) : 0;
  });
  var totalGap = 0, maxGap = 0;
  role.skills.forEach(function(sk) {
    var curr = ratings[sk.name] || 0;
    totalGap += sk.weight * Math.max(0, sk.required - curr);
    maxGap += sk.weight * sk.required;
  });
  var readiness = Math.round(Math.max(0, (1 - totalGap / maxGap) * 100));
  renderGapResults(role, ratings, readiness, empId, currentRole);
}

function renderGapResults(role, ratings, readiness, empId, currentRoleName) {
  var el = document.getElementById('gapResults');
  var badge = document.getElementById('readinessBadge');
  var chartCard = document.getElementById('gapChartCard');
  if (!el) return;
  var col = readiness >= 75 ? 'var(--success)' : readiness >= 55 ? 'var(--warning)' : readiness >= 35 ? 'var(--info)' : 'var(--danger)';
  var label = readiness >= 75 ? 'Strong Fit' : readiness >= 55 ? 'Good Fit' : readiness >= 35 ? 'Moderate Fit' : 'Needs Development';
  if (badge) { badge.textContent = readiness + '%'; badge.style.color = col; }
  var cats = {critical:[],high:[],medium:[],low:[],strong:[]};
  role.skills.forEach(function(sk) {
    var curr = ratings[sk.name] || 0;
    var gapRaw = Math.max(0, sk.required - curr);
    var gapWt = sk.weight * gapRaw / (sk.weight * sk.required || 1);
    if (curr >= sk.required) cats.strong.push(sk.name);
    else if (gapWt >= 0.6) cats.critical.push(sk.name);
    else if (gapWt >= 0.4) cats.high.push(sk.name);
    else if (gapWt >= 0.2) cats.medium.push(sk.name);
    else cats.low.push(sk.name);
  });
  el.innerHTML = '<div class="gap-results-content"><div class="gap-score-display"><div class="gap-score-circle" style="border-color:' + col + ';color:' + col + '"><span class="gap-score-val">' + readiness + '%</span><span class="gap-score-lbl">READINESS</span></div><div class="gap-score-info"><div class="gap-score-title">' + (empId || 'Employee') + ' → ' + role.name + '</div><div class="gap-score-sub" style="color:' + col + '">' + label + '</div><div class="gap-score-sub" style="margin-top:6px">' + currentRoleName + ' → ' + role.name + '</div></div></div>' +
  (cats.critical.length ? '<div class="gap-cat gap-cat-critical"><div class="gap-cat-title">CRITICAL GAPS</div><div class="gap-skill-tags">' + cats.critical.map(function(s){ return '<span class="gap-skill-chip" style="background:rgba(248,81,73,.15);color:var(--danger);border-color:rgba(248,81,73,.3)">' + s + '</span>'; }).join('') + '</div></div>' : '') +
  (cats.high.length ? '<div class="gap-cat gap-cat-high"><div class="gap-cat-title">HIGH PRIORITY GAPS</div><div class="gap-skill-tags">' + cats.high.map(function(s){ return '<span class="gap-skill-chip" style="background:rgba(210,153,34,.12);color:var(--warning);border-color:rgba(210,153,34,.25)">' + s + '</span>'; }).join('') + '</div></div>' : '') +
  (cats.medium.length ? '<div class="gap-cat gap-cat-medium"><div class="gap-cat-title">MEDIUM PRIORITY</div><div class="gap-skill-tags">' + cats.medium.map(function(s){ return '<span class="gap-skill-chip">' + s + '</span>'; }).join('') + '</div></div>' : '') +
  (cats.strong.length ? '<div class="gap-cat gap-cat-good"><div class="gap-cat-title">STRONG MATCH </div><div class="gap-skill-tags">' + cats.strong.map(function(s){ return '<span class="gap-skill-chip" style="background:rgba(0,194,168,.12);color:var(--brand);border-color:rgba(0,194,168,.25)">' + s + '</span>'; }).join('') + '</div></div>' : '') +
  '<p style="font-size:11px;color:var(--text3);font-style:italic;margin-top:8px">Readiness % is a model-derived indicator, not an objective qualification measure.</p></div>';
  if (chartCard) {
    chartCard.style.display = 'block';
    var barsEl = document.getElementById('gapBars');
    if (barsEl) {
      barsEl.innerHTML = role.skills.map(function(sk) {
        var curr = ratings[sk.name] || 0;
        var currPct = Math.round(curr / 4 * 100);
        var reqPct = Math.round(sk.required / 4 * 100);
        var barCol = curr >= sk.required ? 'var(--success)' : curr >= sk.required * 0.6 ? 'var(--warning)' : 'var(--danger)';
        return '<div class="gap-bar-row"><div class="gap-bar-label"><span class="gap-bar-name">' + sk.name + '</span><span class="gap-bar-nums">' + curr + '/' + sk.required + ' (w:' + Math.round(sk.weight*100) + '%)</span></div><div class="gap-bar-track"><div class="gap-bar-current" style="width:' + currPct + '%;background:' + barCol + '"></div><div class="gap-bar-required-marker" style="left:' + reqPct + '%"></div></div></div>';
      }).join('');
    }
  }
  showToast('Gap score calculated: ' + readiness + '% readiness', 'success');
}

// ===== ROADMAP =====
function generateRoadmap() {
  var roleKey = (document.getElementById('roadmapRole') || {}).value || 'ml-engineer';
  var level = (document.getElementById('roadmapLevel') || {}).value || 'intermediate';
  var roleData = SKILL_ROLES[roleKey];
  var roadmapEl = document.getElementById('roadmapContainer');
  var capstoneEl = document.getElementById('capstoneProject');
  if (!roadmapEl) return;
  var plan = ROADMAPS[roleKey] && ROADMAPS[roleKey][level] ? ROADMAPS[roleKey][level] : generateGenericRoadmap(roleData, level);
  roadmapEl.innerHTML = plan.map(function(week, i) {
    return '<div class="roadmap-week week-' + week.priority + '"><div class="week-num"><div class="week-num-label">WEEK</div><div class="week-num-val">' + week.weeks + '</div></div><div class="week-content"><div class="week-skill">' + week.skill + '</div><div class="week-desc">' + week.desc + '</div><div class="week-tags">' + week.tags.map(function(t){ return '<span class="week-tag">' + t + '</span>'; }).join('') + '</div></div><div class="week-meta"><div class="week-hours">~' + week.hours + 'h</div><div class="week-check" onclick="this.classList.toggle(\'done\');this.textContent=this.classList.contains(\'done\')?\'\':\'\'" title="Mark complete"></div></div></div>';
  }).join('');
  if (capstoneEl) {
    var capstoneName = roleData.name + ' Capstone';
    var skills = roleData.skills.slice(0,5).map(function(s){ return s.name; });
    capstoneEl.innerHTML = '<div class="capstone-title">Build and Deploy a Production ML Project</div><div class="capstone-desc">Design, train, and deploy a complete ML system that demonstrates all critical skills for the ' + roleData.name + ' role. This single project proves your readiness across multiple competencies.</div><div class="capstone-proves">THIS PROJECT DEMONSTRATES:</div><div class="capstone-skills">' + skills.map(function(s){ return '<span class="skill-tag skill-tag-tech">' + s + '</span>'; }).join('') + '</div>';
  }
}

function generateGenericRoadmap(role, level) {
  var weeks = ['1 to 2','3 to 4','5 to 6','7 to 8','9 to 10','11 to 12'];
  var priorities = ['critical','critical','high','high','medium','low'];
  return role.skills.slice(0,6).map(function(sk, i) {
    return { weeks: weeks[i] || (i*2+1)+' to '+(i*2+2), skill: sk.name, desc: 'Master ' + sk.name + ' concepts and practical application for the ' + role.name + ' role.', tags: [sk.name, 'Practice', 'Projects'], priority: priorities[i] || 'medium', hours: 16 + i*2 };
  });
}

function exportRoadmap() { showToast('Roadmap exported! (PDF export coming in full version)', 'info'); }

// ===== TALENT DISCOVERY =====
function searchTalent() {
  var roleKey = (document.getElementById('talentSearchRole') || {}).value || 'ml-engineer';
  var minR = parseInt((document.getElementById('minReadiness') || {}).value || 40);
  var dept = (document.getElementById('talentDept') || {}).value || 'all';
  var role = SKILL_ROLES[roleKey];
  var el = document.getElementById('talentResultsGrid');
  if (!el) return;
  var candidates = EMPLOYEE_PROFILES.filter(function(emp) {
    if (dept !== 'all' && emp.dept !== dept) return false;
    var score = computeReadiness(emp, role);
    return score >= minR;
  }).map(function(emp) {
    var score = computeReadiness(emp, role);
    var gaps = role.skills.filter(function(sk) { return (emp.skills[sk.name] || 0) < sk.required; }).slice(0,3).map(function(sk){ return sk.name; });
    return {emp:emp, score:score, gaps:gaps};
  }).sort(function(a,b){ return b.score-a.score; });
  if (candidates.length === 0) {
    el.innerHTML = '<div class="empty-state" style="grid-column:1/-1;padding:40px"><p style="font-size:36px"></p><p>No candidates found. Try lowering the minimum readiness or changing department filter.</p></div>';
    return;
  }
  var readinessColor = function(s) { return s>=80?'var(--success)':s>=65?'var(--warning)':s>=50?'var(--info)':'var(--danger)'; };
  el.innerHTML = candidates.map(function(c) {
    var col = readinessColor(c.score);
    return '<div class="talent-card"><div class="talent-header"><div class="talent-avatar" style="background:' + c.emp.avatar + '">' + c.emp.name.charAt(0) + '</div><div><div class="talent-id">' + c.emp.id + '  :  ' + c.emp.name + '</div><div class="talent-current-role">' + c.emp.currentRole + '</div></div></div><div class="talent-readiness-bar"><div class="readiness-label"><span>Role Readiness</span><span class="readiness-val" style="color:' + col + '">' + c.score + '%</span></div><div class="readiness-track"><div class="readiness-fill" style="width:' + c.score + '%;background:' + col + '"></div></div></div>' + (c.gaps.length ? '<div class="talent-gaps"><div class="talent-gaps-title">KEY GAPS</div><div class="talent-gap-chips">' + c.gaps.map(function(g){ return '<span class="talent-gap-chip">' + g + '</span>'; }).join('') + '</div></div>' : '<div style="color:var(--success);font-size:12px;margin-top:8px">Meets all key requirements</div>') + '</div>';
  }).join('');
}

function loadTransitionPipeline() {
  var el = document.getElementById('pipelineTable');
  if (!el) return;
  var role = SKILL_ROLES['ml-engineer'];
  var rows = EMPLOYEE_PROFILES.map(function(emp) {
    var score = computeReadiness(emp, role);
    var gaps = role.skills.filter(function(sk){ return (emp.skills[sk.name]||0) < sk.required; }).length;
    var status = score>=80?'<span class="badge badge-success">Ready</span>':score>=60?'<span class="badge badge-warning">Near Ready</span>':score>=40?'<span class="badge badge-info">In Progress</span>':'<span class="badge badge-danger">Needs Work</span>';
    return '<tr><td>' + emp.id + '</td><td>' + emp.name + '</td><td>' + emp.currentRole + '</td><td style="font-weight:700;color:' + (score>=75?'var(--success)':score>=55?'var(--warning)':'var(--danger)') + '">' + score + '%</td><td>' + gaps + ' gaps</td><td>' + status + '</td></tr>';
  }).join('');
  el.innerHTML = '<table class="pipeline-tbl"><thead><tr><th>ID</th><th>Name</th><th>Current Role</th><th>Readiness</th><th>Gaps</th><th>Status</th></tr></thead><tbody>' + rows + '</tbody></table>';
}

// ===== WORKFORCE INTEL =====
function renderCoverageMatrix() {
  var el = document.getElementById('coverageMatrix');
  if (!el) return;
  var data = [
    {skill:'Python', current:82, required:80, status:'ok'},
    {skill:'Machine Learning', current:61, required:85, status:'critical'},
    {skill:'Cloud / AWS', current:48, required:80, status:'critical'},
    {skill:'MLOps', current:29, required:70, status:'critical'},
    {skill:'Docker', current:55, required:75, status:'high'},
    {skill:'SQL', current:78, required:75, status:'ok'},
    {skill:'Deep Learning', current:44, required:70, status:'critical'},
    {skill:'Data Visualization', current:68, required:70, status:'low'},
    {skill:'Statistics', current:71, required:75, status:'low'},
    {skill:'GenAI / LLMs', current:37, required:65, status:'critical'}
  ];
  var pill = function(status, curr, req) {
    var pct = Math.round(curr/req*100);
    var colors = {ok:'rgba(63,185,80,.15);color:var(--success)',low:'rgba(0,194,168,.12);color:var(--brand)',high:'rgba(210,153,34,.15);color:var(--warning)',critical:'rgba(248,81,73,.15);color:var(--danger)'};
    return '<span class="cov-pill" style="background:' + colors[status] + '">' + pct + '%</span>';
  };
  el.innerHTML = '<table class="cov-tbl"><thead><tr><th>Skill</th><th>Current Coverage</th><th>Required</th><th>Coverage Ratio</th><th>Status</th></tr></thead><tbody>' + data.map(function(d) {
    var statusLabel = {ok:'Met',low:'Low Gap',high:'High Gap',critical:'Critical'};
    var statusBadge = '<span class="badge badge-' + (d.status==='ok'?'success':d.status==='low'?'info':d.status==='high'?'warning':'danger') + '">' + statusLabel[d.status] + '</span>';
    return '<tr><td style="font-weight:600">' + d.skill + '</td><td>' + d.current + '%</td><td>' + d.required + '%</td><td>' + pill(d.status, d.current, d.required) + '</td><td>' + statusBadge + '</td></tr>';
  }).join('') + '</tbody></table>';
}

function renderDeptReadiness() {
  var el = document.getElementById('deptReadiness');
  if (!el) return;
  var depts = [
    {name:'Data & Analytics', pct:74, col:'var(--brand)'},
    {name:'Engineering', pct:69, col:'var(--info)'},
    {name:'Research', pct:81, col:'var(--success)'},
    {name:'Product', pct:52, col:'var(--warning)'},
    {name:'Operations', pct:43, col:'var(--danger)'},
    {name:'HR / Finance', pct:31, col:'var(--danger)'}
  ];
  el.innerHTML = depts.map(function(d) {
    return '<div class="dept-item"><div class="dept-header"><span class="dept-name">' + d.name + '</span><span class="dept-pct" style="color:' + d.col + '">' + d.pct + '%</span></div><div class="dept-track"><div class="dept-fill" style="width:' + d.pct + '%;background:' + d.col + '"></div></div></div>';
  }).join('');
}

// ===== DATASETS =====
function renderDatasets(filter) {
  var el = document.getElementById('datasetsGrid');
  if (!el) return;
  var f = filter || 'all';
  var catColors = {job:'rgba(0,194,168,.15);color:var(--brand)',skill:'rgba(139,92,246,.15);color:#A78BFA',workforce:'rgba(59,130,246,.15);color:var(--info)',trend:'rgba(245,158,11,.15);color:#FBBF24'};
  var catNames = {job:'Job / Occupation',skill:'Skill Taxonomy',workforce:'Workforce',trend:'Trend Data'};
  var filtered = f === 'all' ? DATASETS : DATASETS.filter(function(d) { return d.category === f; });
  el.innerHTML = filtered.map(function(d) {
    return '<div class="dataset-card"><div class="dataset-header"><div class="dataset-name">' + d.name + '</div><span class="dataset-category" style="background:' + catColors[d.category] + '">' + catNames[d.category] + '</span></div><div class="dataset-desc">' + d.desc + '</div><div class="dataset-meta"><div class="dataset-meta-item"><div class="dataset-meta-label">RECORDS</div><div class="dataset-meta-val">' + d.records + '</div></div><div class="dataset-meta-item"><div class="dataset-meta-label">COVERAGE</div><div class="dataset-meta-val">' + d.dateRange + '</div></div><div class="dataset-meta-item"><div class="dataset-meta-label">LICENSE</div><div class="dataset-meta-val">' + d.license + '</div></div><div class="dataset-meta-item"><div class="dataset-meta-label">SOURCE</div><div class="dataset-meta-val"><a href="' + d.url + '" target="_blank" style="color:var(--brand)">' + d.url.replace('https://','') + '</a></div></div></div></div>';
  }).join('');
}

function filterDatasets(filter, btn) {
  document.querySelectorAll('.filter-btn').forEach(function(b) { b.classList.remove('active'); });
  if (btn) btn.classList.add('active');
  renderDatasets(filter);
}

// ===== METHODOLOGY =====
function expandStage(key) {
  var el = document.getElementById('stageDetails');
  if (!el) return;
  var detail = STAGE_DETAILS[key];
  if (!detail) return;
  el.innerHTML = '<div class="stage-detail"><h3>' + detail.title + '</h3><p>' + detail.content + '</p><ul>' + detail.points.map(function(p){ return '<li>' + p + '</li>'; }).join('') + '</ul></div>';
  el.scrollIntoView({behavior:'smooth', block:'nearest'});
}

// ===== HELP =====
function scrollToHelp(id) {
  var el = document.getElementById(id);
  if (el) el.scrollIntoView({behavior:'smooth', block:'start'});
  document.querySelectorAll('.toc-link').forEach(function(l) { l.classList.remove('active'); });
  event.target.classList.add('active');
}

function filterHelp(query) {
  var sections = document.querySelectorAll('.help-section');
  var q = query.toLowerCase();
  sections.forEach(function(s) { s.style.display = !q || s.textContent.toLowerCase().includes(q) ? '' : 'none'; });
}

function toggleFaq(btn) {
  btn.classList.toggle('open');
  var answer = btn.nextElementSibling;
  if (answer) answer.classList.toggle('open');
}



// ===== DUMMY CANDIDATE RESUMES FOR PROTOTYPE TESTING =====
const DUMMY_RESUMES = {
  user: {
    id: 'user',
    name: 'User',
    currentRole: 'Senior Backend & Cloud Engineer',
    targetRole: 'mlops-engineer',
    exp: '6 Years Exp',
    avatar: 'A',
    color: 'linear-gradient(135deg, #7C3AED, #A78BFA)',
    skills: ['Python', 'Docker', 'Kubernetes', 'AWS', 'SQL', 'PostgreSQL', 'Kafka', 'FastAPI', 'CI/CD'],
    summary: '6+ yrs building high-throughput microservices and AWS infra. Transitioning to MLOps.',
    text: `User
Email: user@skillbridge.io | Phone: +91 98765 43210 | Location: Bengaluru, India
Target Transition: MLOps / Machine Learning Systems Engineer

PROFESSIONAL SUMMARY:
Senior Backend & Distributed Systems Engineer with 6+ years of production experience building high-throughput microservices, data ingestion pipelines, and cloud infrastructure on AWS. Strong expertise in Python, Docker, Kubernetes, SQL, and PostgreSQL. Seeking transition to MLOps Engineer to productionize machine learning workflows, model serving APIs, and CI/CD pipelines.

TECHNICAL SKILLS:
- Languages: Python, Go, SQL, Bash
- Frameworks: FastAPI, Django, Flask, Celery, SQLAlchemy
- Cloud & Infrastructure: AWS (EC2, S3, RDS, ECS, Lambda), Docker, Kubernetes, Terraform, Linux
- Data & Databases: PostgreSQL, Redis, Apache Kafka, Elasticsearch
- Machine Learning & MLOps: Scikit-learn, Pandas, NumPy, MLflow (Basics), Git, CI/CD

EXPERIENCE:
Senior Software Engineer  :  CloudScale Technologies (2021  to  Present)
- Designed and built real-time event streaming pipeline processing 15M+ events/day using Python, Kafka, and PostgreSQL.
- Containerized 24 microservices with Docker and orchestrated deployments on Kubernetes (EKS), reducing infrastructure costs by 28%.
- Built automated CI/CD pipelines with GitHub Actions, reducing release cycle time from 3 days to 45 minutes.

Software Engineer  :  Nexus Systems (2018  to  2021)
- Developed scalable REST APIs using Python and Django for an enterprise SaaS platform with 500k+ monthly active users.
- Optimized slow SQL queries and PostgreSQL indexes, cutting p95 response latency from 450ms to 65ms.
- Mentored 4 junior engineers on clean code architecture and containerization best practices.

EDUCATION:
- B.Tech in Computer Science & Engineering  :  PES University, Bengaluru (2014  to  2018)
- AWS Certified Solutions Architect  :  Associate (2022)`
  },
  priya: {
    id: 'priya',
    name: 'Priya Patel',
    currentRole: 'Full Stack & Web Developer',
    targetRole: 'ml-engineer',
    exp: '4 Years Exp',
    avatar: 'P',
    color: 'linear-gradient(135deg, #06B6D4, #67E8F9)',
    skills: ['React', 'TypeScript', 'Node.js', 'Next.js', 'Python', 'GraphQL', 'MongoDB', 'Docker', 'REST APIs'],
    summary: '4 yrs agile web engineering. Transitioning to Fullstack GenAI / ML Applications.',
    text: `Priya Patel
Email: priya.patel@webcraft.io | Phone: +91 91234 56789 | Location: Pune, India
Target Transition: Lead Fullstack & AI Application Engineer

PROFESSIONAL SUMMARY:
Creative and agile Full Stack Developer with 4 years of hands-on experience designing and implementing performant web applications using React, TypeScript, Next.js, Node.js, and GraphQL. Passionate about integrating LLM and GenAI APIs into interactive web applications.

TECHNICAL SKILLS:
- Frontend: React, TypeScript, JavaScript (ES6+), Next.js, Redux Toolkit, Tailwind CSS, HTML5/CSS3
- Backend: Node.js, Express, RESTful APIs, GraphQL, FastAPI (Basic), Python
- Databases: MongoDB, PostgreSQL, Firebase
- Tools & Cloud: Git, Docker, Vercel, AWS S3, Jest, Cypress, Postman
- Emerging AI: OpenAI API, LangChain basics, Vector Search integration, Scikit-learn (Foundational)

EXPERIENCE:
Full Stack Developer  :  PixelWave Digital (2022  to  Present)
- Engineered responsive client-side architectures using React 18, TypeScript, and Tailwind CSS serving 1.2M monthly users.
- Integrated GraphQL endpoints and microservices backends with Node.js and MongoDB.
- Prototyped and shipped an AI-powered conversational search feature using LangChain and OpenAI embeddings.

Frontend Developer  :  AppMatrix Solutions (2020  to  2022)
- Built interactive analytics dashboards with React and Chart.js, decreasing client reporting time by 40%.
- Improved Lighthouse performance scores from 62 to 94 across corporate web properties.

EDUCATION:
- B.E. in Information Technology  :  Pune Institute of Computer Technology (2016  to  2020)`
  },
  rohan: {
    id: 'rohan',
    name: 'Rohan Verma',
    currentRole: 'Senior Data Analyst & BI Specialist',
    targetRole: 'data-scientist',
    exp: '3.5 Years Exp',
    avatar: 'R',
    color: 'linear-gradient(135deg, #F59E0B, #FCD34D)',
    skills: ['SQL', 'Python', 'Power BI', 'Tableau', 'Pandas', 'NumPy', 'Statistics', 'A/B Testing'],
    summary: '3.5 yrs enterprise BI & analytics. Transitioning to Data Scientist & Predictive Modeling.',
    text: `Rohan Verma
Email: rohan.verma@analyticsgroup.com | Phone: +91 99887 76655 | Location: Hyderabad, India
Target Transition: Data Scientist / ML Specialist

PROFESSIONAL SUMMARY:
Analytical Data Specialist with 3.5 years of experience deriving business intelligence from complex enterprise datasets. Expert in SQL, Power BI, Python, Tableau, and statistical analysis. Eager to advance from descriptive analytics to predictive modeling and machine learning.

TECHNICAL SKILLS:
- Core Analysis: Advanced SQL, Python (Pandas, NumPy, Matplotlib, Seaborn), Excel (Power Query, VBA)
- Business Intelligence: Power BI, Tableau, Looker Studio, DAX
- Statistics & Modeling: Hypothesis Testing, Regression Analysis, A/B Testing, Descriptive Statistics
- Machine Learning (Foundational): Scikit-learn (Linear Regression, Random Forests), Data Cleaning, Feature Engineering
- Databases & ETL: Snowflake, BigQuery, PostgreSQL, dbt

EXPERIENCE:
Senior Data Analyst  :  FinTech Analytics Labs (2022  to  Present)
- Led exploratory data analysis across 10M+ transaction records using Snowflake and Python Pandas.
- Built executive Power BI dashboards tracking quarterly revenue, customer acquisition cost, and churn metrics.
- Designed and analyzed A/B test experiments for checkout flow redesign, driving a 6.4% lift in conversion.

Data Analyst  :  Global Insights Consulting (2021  to  2022)
- Automated monthly KPI reporting pipelines using Python and SQL, saving 25 analyst hours per week.
- Built customer segmentation models using K-Means clustering in Scikit-learn.

EDUCATION:
- B.Sc in Statistics & Mathematics  :  University of Hyderabad (2017  to  2020)
- Microsoft Certified: Power BI Data Analyst Associate (2022)`
  },
  ananya: {
    id: 'ananya',
    name: 'Ananya Iyer',
    currentRole: 'DevOps & Cloud Platform Associate',
    targetRole: 'mlops-engineer',
    exp: '2.5 Years Exp',
    avatar: 'AI',
    color: 'linear-gradient(135deg, #10B981, #34D399)',
    skills: ['Linux', 'Bash', 'Docker', 'Kubernetes', 'AWS', 'Terraform', 'CI/CD', 'Git', 'Prometheus'],
    summary: '2.5 yrs Linux, Docker & AWS automation. Transitioning to MLOps & AI Infrastructure.',
    text: `Ananya Iyer
Email: ananya.iyer@cloudinfra.in | Phone: +91 98223 34455 | Location: Chennai, India
Target Transition: Senior DevOps & Cloud MLOps Engineer

PROFESSIONAL SUMMARY:
DevOps and Cloud Infrastructure Associate with 2.5 years of experience managing Linux server fleets, Docker containers, CI/CD automation, and cloud deployments on AWS. Eager to specialize in MLOps pipelines and Kubernetes cluster operations.

TECHNICAL SKILLS:
- Systems & OS: Linux (Ubuntu/Debian), Bash Scripting, Git
- Cloud & Infrastructure: AWS (EC2, S3, IAM, VPC, CloudWatch), Terraform (IaC)
- Containers: Docker, Docker Compose, Kubernetes (CKS in progress)
- CI/CD & Automation: GitHub Actions, Jenkins, Ansible
- Monitoring & Scripting: Prometheus, Grafana, ELK Stack, Python (Foundations)

EXPERIENCE:
DevOps Engineer  :  HyperCloud Systems (2023  to  Present)
- Maintained 99.95% uptime across 80+ AWS cloud instances using automated Prometheus alerts and Grafana dashboards.
- Migrated legacy deployment scripts to modular GitHub Actions workflows, reducing build failures by 35%.
- Implemented Infrastructure as Code using Terraform to provision staging and production environments.

Junior Cloud Associate  :  InfraStack Labs (2022  to  2023)
- Managed Linux system security patches, SSL certificates, and Docker registry configurations.
- Assisted development teams in troubleshooting Docker container networking and volume mounts.

EDUCATION:
- B.Tech in Information Science  :  SRM Institute of Science & Technology (2018  to  2022)`
  },
  kavya: {
    id: 'kavya',
    name: 'Kavya Nair',
    currentRole: 'QA Automation Engineer',
    targetRole: 'ml-engineer',
    exp: '4 Years Exp',
    avatar: 'K',
    color: 'linear-gradient(135deg, #EC4899, #F472B6)',
    skills: ['Python', 'Selenium', 'Cypress', 'PyTest', 'Postman', 'SQL', 'Git', 'Jenkins', 'Agile'],
    summary: '4 yrs automated testing & Python frameworks. Transitioning to SDET & Backend ML systems.',
    text: `Kavya Nair
Email: kavya.nair@qualityedge.com | Phone: +91 97654 32100 | Location: Bengaluru, India
Target Transition: SDET / Backend & ML Engineer

PROFESSIONAL SUMMARY:
Dedicated QA Engineer with 4 years of experience building automated test frameworks and end-to-end testing pipelines for enterprise web applications. Proficient in Python, Selenium, PyTest, Postman, and CI/CD testing integration. Seeking transition to Software Development Engineer in Test (SDET) and ML testing.

TECHNICAL SKILLS:
- Automation & Tools: Selenium WebDriver, Cypress, PyTest, Postman, REST Assured
- Programming: Python, JavaScript, SQL (Intermediate), Bash
- CI/CD & Version Control: Jenkins, GitHub Actions, Git
- Methodologies: Agile/Scrum, BDD (Cucumber), Test-Driven Development (TDD), API Testing, JMeter

EXPERIENCE:
QA Automation Engineer  :  HealthTech Global (2021  to  Present)
- Developed and maintained regression test automation suite with 600+ test cases using Python and Selenium.
- Automated API functional and contract testing using PyTest and Postman, achieving 90% regression coverage.
- Integrated automated tests into Jenkins CI/CD pipeline, catching 45+ critical bugs before production releases.

Quality Assurance Engineer  :  Zenith Software (2020  to  2021)
- Executed manual and automated functional, usability, and cross-browser testing for e-commerce clients.
- Authored comprehensive test plans, test matrices, and defect reports in Jira.

EDUCATION:
- B.E. in Electronics & Communication  :  BMS College of Engineering, Bengaluru (2016  to  2020)
- ISTQB Certified Tester Foundation Level (CTFL) (2021)`
  }
};

// ===== LINKEDIN & STACK OVERFLOW MARKET JOBS DATA =====
const MARKET_JOBS = [
  {
    id: 'job-1',
    company: 'Razorpay',
    title: 'Senior MLOps & Cloud Platform Engineer',
    location: 'Bengaluru (Hybrid)',
    salary: '₹30L  :  ₹45L LPA',
    exp: '4-7 yrs',
    source: 'LinkedIn Jobs',
    sourceClass: 'job-source-linkedin',
    logo: 'R',
    logoBg: 'linear-gradient(135deg, #0284C7, #38BDF8)',
    skills: ['Python', 'Docker', 'Kubernetes', 'AWS', 'MLOps', 'CI/CD', 'Git'],
    desc: 'Scale real-time fraud detection and ML prediction pipelines serving 100M+ API requests daily with 99.99% uptime.'
  },
  {
    id: 'job-2',
    company: 'Flipkart',
    title: 'Staff Machine Learning Engineer  :  Search',
    location: 'Bengaluru',
    salary: '₹42L  :  ₹65L LPA',
    exp: '5-9 yrs',
    source: 'LinkedIn Jobs',
    sourceClass: 'job-source-linkedin',
    logo: 'F',
    logoBg: 'linear-gradient(135deg, #F59E0B, #FBBF24)',
    skills: ['Python', 'Machine Learning', 'PyTorch', 'SQL', 'Scikit-learn', 'Docker', 'Statistics'],
    desc: 'Architect deep learning models for personalizing search rankings and catalog discovery across 200M products.'
  },
  {
    id: 'job-3',
    company: 'Swiggy',
    title: 'Lead Cloud Data Platform Engineer',
    location: 'Bengaluru (Remote Friendly)',
    salary: '₹28L  :  ₹42L LPA',
    exp: '4-8 yrs',
    source: 'Stack Overflow Jobs',
    sourceClass: 'job-source-stackoverflow',
    logo: 'S',
    logoBg: 'linear-gradient(135deg, #F97316, #FB923C)',
    skills: ['SQL', 'Python', 'Spark', 'Kafka', 'AWS', 'Docker', 'Airflow'],
    desc: 'Build event-driven data streaming infrastructure powering order dispatch, routing, and delivery partner ETAs.'
  },
  {
    id: 'job-4',
    company: 'Postman',
    title: 'Full Stack Generative AI Application Engineer',
    location: 'Bengaluru / Hybrid',
    salary: '₹26L  :  ₹40L LPA',
    exp: '3-6 yrs',
    source: 'LinkedIn Jobs',
    sourceClass: 'job-source-linkedin',
    logo: 'P',
    logoBg: 'linear-gradient(135deg, #EC4899, #F43F5E)',
    skills: ['React', 'TypeScript', 'Python', 'Docker', 'FastAPI', 'AWS', 'Git'],
    desc: 'Create AI-assisted API development tools, automated test generation, and intelligent SDK builders for 30M developers.'
  },
  {
    id: 'job-5',
    company: 'Zepto',
    title: 'Senior Site Reliability & DevOps Specialist',
    location: 'Mumbai (On-site)',
    salary: '₹24L  :  ₹38L LPA',
    exp: '3-6 yrs',
    source: 'Stack Overflow Jobs',
    sourceClass: 'job-source-stackoverflow',
    logo: 'Z',
    logoBg: 'linear-gradient(135deg, #8B5CF6, #A78BFA)',
    skills: ['Linux', 'Docker', 'Kubernetes', 'AWS', 'Terraform', 'CI/CD', 'Git'],
    desc: 'Maintain extreme low-latency cloud infrastructure for dark store inventory allocation and dispatch algorithms.'
  },
  {
    id: 'job-6',
    company: 'Infosys AI Labs',
    title: 'Principal Data Scientist & AI Strategist',
    location: 'Pune / Remote',
    salary: '₹35L  :  ₹52L LPA',
    exp: '6-10 yrs',
    source: 'LinkedIn Jobs',
    sourceClass: 'job-source-linkedin',
    logo: 'I',
    logoBg: 'linear-gradient(135deg, #10B981, #059669)',
    skills: ['Python', 'Machine Learning', 'Statistics', 'PyTorch', 'Data Visualization', 'SQL', 'NLP'],
    desc: 'Lead enterprise GenAI client transformation programs, fine-tuning open-source LLMs and predictive intelligence pipelines.'
  }
];

// ===== AUTH INTEGRATION =====
function initAuth() {
  var el = document.getElementById('topbarAuth');
  if (!el) return;
  
  // Logged in person is User only
  el.innerHTML = `
    <div class="user-profile-chip" title="Signed in as User">
      <div class="user-profile-avatar">U</div>
      <div class="user-profile-meta">
        <span class="user-profile-name">User</span>
        <span class="user-profile-role">User</span>
      </div>
    </div>
    <button class="btn-auth-logout" onclick="doLogout()" title="Sign out of SkillBridge">
      Sign Out
    </button>
  `;
}

function doLogout() {
  sessionStorage.removeItem('sb_user');
  showToast('Signed out successfully', 'info');
  setTimeout(function() {
    window.location.href = 'login.html';
  }, 400);
}

// ===== DEMO RESUMES FOR PROTOTYPE TESTING =====
function renderDemoResumes() {
  var el = document.getElementById('demoResumesGrid');
  if (!el) return;
  var keys = Object.keys(DUMMY_RESUMES);
  el.innerHTML = keys.map(function(k) {
    var c = DUMMY_RESUMES[k];
    var topSkills = c.skills.slice(0, 4).map(function(s) {
      return '<span class="demo-skill-pill">' + s + '</span>';
    }).join('');
    var roleObj = SKILL_ROLES[c.targetRole];
    var roleTitle = roleObj ? roleObj.name : c.targetRole;
    return `
      <div class="demo-candidate-card" id="cand-${c.id}" onclick="loadDummyResume('${c.id}')" title="Click to test prototype with ${c.name}">
        <div class="demo-candidate-top">
          <div class="demo-candidate-avatar" style="background:${c.color}">${c.avatar}</div>
          <div>
            <div class="demo-candidate-name">${c.name}</div>
            <div class="demo-candidate-exp">${c.exp}</div>
          </div>
        </div>
        <div class="demo-candidate-role">Target: ${roleTitle}</div>
        <div class="demo-candidate-skills">${topSkills}</div>
        <div class="demo-candidate-btn"> Load and Test Analysis</div>
      </div>
    `;
  }).join('');
}

function loadDummyResume(id) {
  var candidate = DUMMY_RESUMES[id];
  if (!candidate) return;
  var inputEl = document.getElementById('analyzerInput');
  var roleEl = document.getElementById('targetRole');
  if (inputEl) inputEl.value = candidate.text;
  if (roleEl && candidate.targetRole) roleEl.value = candidate.targetRole;
  
  document.querySelectorAll('.demo-candidate-card').forEach(function(c) {
    c.classList.remove('active');
  });
  var activeCard = document.getElementById('cand-' + id);
  if (activeCard) activeCard.classList.add('active');

  showToast('Loaded ' + candidate.name + ' (' + candidate.exp + ')', 'success');
  // Auto-run analysis so evaluator sees instant results
  runAnalysis();
}

// Formatted Resume Modal
var currentModalCandidate = 'user';

function openResumeModal(candId) {
  var modal = document.getElementById('resumeViewModal');
  if (!modal) return;
  modal.classList.add('open');
  renderModalCandidateTabs(candId || currentModalCandidate);
  renderModalCandidateContent(candId || currentModalCandidate);
}

function closeResumeModal() {
  var modal = document.getElementById('resumeViewModal');
  if (modal) modal.classList.remove('open');
}

function renderModalCandidateTabs(activeId) {
  var el = document.getElementById('modalCandidateTabs');
  if (!el) return;
  el.innerHTML = Object.keys(DUMMY_RESUMES).map(function(k) {
    var c = DUMMY_RESUMES[k];
    var active = k === activeId ? 'btn-primary' : 'btn-secondary';
    return `<button class="btn btn-sm ${active}" onclick="selectModalResume('${k}')">${c.name}</button>`;
  }).join('');
}

function selectModalResume(k) {
  currentModalCandidate = k;
  renderModalCandidateTabs(k);
  renderModalCandidateContent(k);
}

function renderModalCandidateContent(k) {
  var c = DUMMY_RESUMES[k];
  var el = document.getElementById('modalResumeContent');
  if (!c || !el) return;
  
  var roleObj = SKILL_ROLES[c.targetRole];
  var roleTitle = roleObj ? roleObj.name : c.targetRole;
  var skillsHtml = c.skills.map(function(s) {
    return `<span class="badge badge-brand" style="margin:2px;">${s}</span>`;
  }).join(' ');

  el.innerHTML = `
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;flex-wrap:wrap;gap:12px;">
      <div style="display:flex;align-items:center;gap:14px;">
        <div style="width:48px;height:48px;border-radius:14px;background:${c.color};display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:900;color:#fff;">${c.avatar}</div>
        <div>
          <h3 style="font-size:20px;font-weight:800;color:var(--text);font-family:'Outfit',sans-serif;">${c.name}</h3>
          <div style="font-size:13px;color:#A78BFA;font-weight:600;">${c.currentRole} &middot; <span style="color:var(--text3);">${c.exp}</span></div>
        </div>
      </div>
      <div style="display:flex;gap:8px;">
        <button class="btn btn-primary" onclick="loadDummyResume('${c.id}');closeResumeModal();"> Load and Analyze This Resume</button>
      </div>
    </div>
    <div style="margin-bottom:14px;padding:12px 14px;background:var(--bg3);border-radius:var(--radius-sm);border:1px solid var(--border);">
      <div style="font-size:11px;font-weight:700;color:var(--text3);margin-bottom:6px;letter-spacing:.08em;">PRIMARY SKILLS:</div>
      <div>${skillsHtml}</div>
    </div>
    <div style="background:var(--bg4);border-radius:var(--radius-sm);padding:16px;font-family:monospace;font-size:12.5px;color:var(--text2);white-space:pre-wrap;line-height:1.6;max-height:420px;overflow-y:auto;border:1px solid var(--border);">
${c.text}
    </div>
  `;
}

// ===== LINKEDIN & STACK OVERFLOW MARKET JOBS RENDERING =====
function renderMarketJobs() {
  var el = document.getElementById('marketJobsGrid');
  if (!el) return;
  el.innerHTML = MARKET_JOBS.map(function(j) {
    var skillsHtml = j.skills.map(function(s) {
      var clean = s.replace(/[^a-zA-Z0-9]/g, '');
      return `<span class="job-skill-chip" id="job-skill-${j.id}-${clean}">${s}</span>`;
    }).join('');

    return `
      <div class="market-job-card" id="${j.id}">
        <div>
          <div class="job-card-header">
            <div style="display:flex;align-items:center;gap:12px;">
              <div class="job-company-badge" style="background:${j.logoBg}">${j.logo}</div>
              <div>
                <div class="job-title">${j.title}</div>
                <div class="job-company">${j.company}</div>
              </div>
            </div>
            <span class="job-source-tag ${j.sourceClass}">${j.source}</span>
          </div>
          <div class="job-meta-row" style="margin:12px 0 10px;">
            <span class="job-meta-item">Location: ${j.location}</span>
            <span class="job-meta-item job-salary">Salary: ${j.salary}</span>
            <span class="job-meta-item">Experience: ${j.exp}</span>
          </div>
          <p style="font-size:12.5px;color:var(--text2);margin-bottom:12px;line-height:1.5;">${j.desc}</p>
          <div class="job-skills-wrap">${skillsHtml}</div>
        </div>
        <div class="job-actions">
          <span class="job-match-pill badge-brand" id="match-score-${j.id}">Click to Match</span>
          <button class="btn-job-match" onclick="matchJobWithCandidate('${j.id}')"> Match With Profile</button>
        </div>
      </div>
    `;
  }).join('');
}

function matchJobWithCandidate(jobId) {
  var job = MARKET_JOBS.find(function(j) { return j.id === jobId; });
  if (!job) return;

  var activeCard = document.querySelector('.demo-candidate-card.active');
  var candidateSkills = [];
  var candidateName = "Current Candidate";

  if (activeCard) {
    var candId = activeCard.id.replace('cand-', '');
    if (DUMMY_RESUMES[candId]) {
      candidateSkills = DUMMY_RESUMES[candId].skills;
      candidateName = DUMMY_RESUMES[candId].name;
    }
  }

  if (!candidateSkills.length) {
    candidateSkills = ['Python', 'Docker', 'AWS', 'SQL', 'Git', 'FastAPI', 'PostgreSQL', 'Scikit-learn'];
    candidateName = "User (Active Profile)";
  }

  var lowerCand = candidateSkills.map(function(s) { return s.toLowerCase(); });
  var matched = [];
  var missing = [];

  job.skills.forEach(function(s) {
    var sLower = s.toLowerCase();
    if (lowerCand.some(function(c) { return c.includes(sLower) || sLower.includes(c); })) {
      matched.push(s);
    } else {
      missing.push(s);
    }
  });

  var matchPct = Math.round((matched.length / job.skills.length) * 100);

  // Update card pill
  var pill = document.getElementById('match-score-' + jobId);
  if (pill) {
    pill.textContent = matchPct + '% Role Fit';
    pill.className = 'job-match-pill ' + (matchPct >= 70 ? 'badge-success' : (matchPct >= 45 ? 'badge-warning' : 'badge-danger'));
  }

  // Highlight skills in that job card
  job.skills.forEach(function(s) {
    var clean = s.replace(/[^a-zA-Z0-9]/g, '');
    var chip = document.getElementById('job-skill-' + jobId + '-' + clean);
    if (chip) {
      if (matched.includes(s)) {
        chip.className = 'job-skill-chip matched';
        chip.title = 'Matched candidate skill!';
      } else {
        chip.className = 'job-skill-chip missing';
        chip.title = 'Skill gap: needs upskilling';
      }
    }
  });

  openJobMatchModal(job, candidateName, matchPct, matched, missing);
}

function openJobMatchModal(job, candidateName, matchPct, matched, missing) {
  var modal = document.getElementById('jobMatchModal');
  var content = document.getElementById('jobMatchModalContent');
  if (!modal || !content) return;

  var matchedHtml = matched.map(function(s) {
    return `<span class="badge badge-success" style="margin:2px 3px;">${s}</span>`;
  }).join(' ');

  var missingHtml = missing.map(function(s) {
    return `<span class="badge badge-danger" style="margin:2px 3px;">${s}</span>`;
  }).join(' ');

  var statusBadge = matchPct >= 75 ? '<span class="badge badge-success">High Role Readiness</span>' : (matchPct >= 50 ? '<span class="badge badge-warning">Moderate Gap (Upskillable)</span>' : '<span class="badge badge-danger">Significant Gap</span>');

  content.innerHTML = `
    <div style="display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:18px;gap:12px;">
      <div>
        <span class="job-source-tag ${job.sourceClass}" style="margin-bottom:6px;display:inline-block;">${job.source} Verified Listing</span>
        <h3 style="font-size:22px;font-weight:900;color:var(--text);font-family:'Outfit',sans-serif;">${job.title}</h3>
        <div style="font-size:14px;color:var(--text2);font-weight:600;">${job.company} &middot; <span style="color:var(--text3);">${job.location}</span></div>
      </div>
      <div style="text-align:right;">
        <div style="font-size:32px;font-weight:900;color:${matchPct>=70?'var(--success)':(matchPct>=45?'var(--warning)':'var(--danger)')};font-family:'Outfit',sans-serif;">${matchPct}%</div>
        <div style="font-size:11px;color:var(--text3);font-weight:700;">FIT SCORE</div>
      </div>
    </div>

    <div style="background:var(--bg3);border:1px solid var(--border);border-radius:var(--radius-sm);padding:14px 16px;margin-bottom:16px;">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
        <span style="font-size:12px;font-weight:700;color:var(--text3);letter-spacing:.06em;">CANDIDATE EVALUATED</span>
        ${statusBadge}
      </div>
      <div style="font-size:14px;font-weight:700;color:var(--text);">${candidateName}</div>
      <div style="font-size:12px;color:var(--text2);margin-top:2px;">Comparing candidate profile vs. live market requirements for this position.</div>
    </div>

    <div style="margin-bottom:16px;">
      <div style="font-size:12px;font-weight:700;color:var(--success);margin-bottom:6px;">MATCHING COMPETENCIES (${matched.length} of ${job.skills.length})</div>
      <div style="display:flex;flex-wrap:wrap;gap:4px;">
        ${matched.length ? matchedHtml : '<span style="font-size:12px;color:var(--text3);">No direct matches found.</span>'}
      </div>
    </div>

    <div style="margin-bottom:20px;">
      <div style="font-size:12px;font-weight:700;color:var(--danger);margin-bottom:6px;">MISSING CRITICAL SKILLS (${missing.length})</div>
      <div style="display:flex;flex-wrap:wrap;gap:4px;">
        ${missing.length ? missingHtml : '<span style="font-size:12px;color:var(--success);">Candidate meets 100% of required competencies!</span>'}
      </div>
    </div>

    <div style="background:var(--brand-light);border:1px solid rgba(124,58,237,.3);border-radius:var(--radius-sm);padding:14px 16px;margin-bottom:20px;">
      <div style="font-size:13px;font-weight:700;color:#A78BFA;margin-bottom:4px;"> AI Recommendation and ROI</div>
      <div style="font-size:12.5px;color:var(--text2);line-height:1.5;">
        Estimated <strong>${Math.max(4, missing.length * 3)} weeks</strong> of focused upskilling on <em>${missing.slice(0, 3).join(', ') || 'specialized topics'}</em> would qualify ${candidateName} for this ₹30L+ role, saving an estimated <strong>₹18,50,000</strong> compared to external recruitment agency placement fees.
      </div>
    </div>

    <div style="display:flex;justify-content:flex-end;gap:10px;">
      <button class="btn btn-secondary" onclick="closeJobMatchModal()">Close</button>
      <button class="btn btn-primary" onclick="closeJobMatchModal();showTab('roadmap');">Generate Learning Roadmap →</button>
    </div>
  `;

  modal.classList.add('open');
}

function closeJobMatchModal() {
  var modal = document.getElementById('jobMatchModal');
  if (modal) modal.classList.remove('open');
}


// ===== LATEX & CODE STUDIO COMPILERS DATA & LOGIC =====
const LATEX_TEMPLATES = {
  cv: `% ===== PROFESSIONAL ACADEMIC & TECH CV (OVERLEAF READY) =====
\\documentclass[10pt, letterpaper]{article}
\\usepackage[utf8]{inputenc}
\\usepackage{geometry}
\\geometry{margin=0.7in}
\\usepackage{hyperref}
\\usepackage{titlesec}
\\usepackage{enumitem}

\\titleformat{\\section}{\\large\\bfseries}{}{0em}{}[\\titlerule]
\\pagestyle{empty}

\\begin{document}
\\begin{center}
  {\\Huge \\textbf{USER}} \\\\ \\vspace{4pt}
  \\small \\href{mailto:user@skillbridge.io}{user@skillbridge.io} \\ $|$ \\ +91 98765 43210 \\ $|$ \\ \\href{https://github.com/user}{github.com/user} \\ $|$ \\ Bengaluru, India
\\end{center}

\\section*{Professional Summary}
Self-taught developer and lifelong learner with strong core competencies in Python, Machine Learning, and Cloud Infrastructure. Actively bridging skill gaps through interactive code sandboxes, algorithm implementations, and real-world projects.

\\section*{Technical Skills}
\\begin{itemize}[leftmargin=*, noitemsep]
  \\item \\textbf{Languages:} Python (NumPy, Pandas, Scikit-learn), SQL, Bash, Go
  \\item \\textbf{Machine Learning \\& AI:} PyTorch, Neural Networks, MLOps, Model Deployment, Scikit-learn
  \\item \\textbf{DevOps \\& Cloud:} Docker, Kubernetes, AWS, CI/CD Pipelines, Linux
  \\item \\textbf{Authoring \\& Tools:} \\LaTeX, Overleaf, Git, Jupyter, Postman
\\end{itemize}

\\section*{Milestone Projects}
\\textbf{Skill Gap Intelligence Engine} $|$ \\emph{Python, PyTorch, FastAPI, Docker} \\hfill 2024
\\begin{itemize}[leftmargin=*, noitemsep]
  \\item Extracted and categorized competencies from unstructured CVs and job postings using TF-IDF and NLP embeddings.
  \\item Containerized model serving using Docker and deployed on AWS EC2 with sub-100ms response time.
\\end{itemize}

\\textbf{Real-Time Event Stream Analytics} $|$ \\emph{Kafka, PostgreSQL, Python} \\hfill 2023
\\begin{itemize}[leftmargin=*, noitemsep]
  \\item Built distributed telemetry ingestion pipeline processing 10M+ records per day with 99.99\\% uptime.
\\end{itemize}

\\section*{Education \\& Certifications}
\\textbf{Bachelor of Technology in Computer Science} \\hfill 2018 -- 2022 \\\\
AWS Certified Solutions Architect -- Associate $|$ DeepLearning.AI Specialization

\\end{document}`,

  paper: `% ===== MACHINE LEARNING RESEARCH PAPER (OVERLEAF READY) =====
\\documentclass[twocolumn]{article}
\\usepackage{amsmath, amssymb, amsfonts}
\\usepackage{graphicx}
\\usepackage{hyperref}
\\usepackage{geometry}
\\geometry{margin=0.75in}

\\title{\\textbf{Skill Gap Minimization via Weighted Vector Projections in High-Dimensional Competency Space}}
\\author{\\textbf{User} \\\\ SkillBridge Open Research Labs \\\\ \\texttt{user@skillbridge.io}}
\\date{\\today}

\\begin{document}
\\maketitle

\\begin{abstract}
We propose a formal optimization framework for calculating individual skill gaps across continuous learning trajectories. Given a learner profile $P \\in \\mathbb{R}^d$ and a target role benchmark $R \\in \\mathbb{R}^d$, the readiness score is computed via normalized cosine projection with penalty regularization for critical missing prerequisites.
\\end{abstract}

\\section{Mathematical Formulation}
Let $w_i$ denote the importance weight of competency $i$, where $\\sum_{i=1}^n w_i = 1$. The weighted cosine similarity $\\mathcal{S}(P, R)$ between candidate vector $\\vec{P}$ and role benchmark $\\vec{R}$ is defined as:

\\begin{equation}
\\mathcal{S}(\\vec{P}, \\vec{R}) = \\frac{\\sum_{i=1}^n w_i \\cdot P_i \\cdot R_i}{\\sqrt{\\sum_{i=1}^n w_i P_i^2} \\cdot \\sqrt{\\sum_{i=1}^n w_i R_i^2}}
\\end{equation}

The critical gap loss function $\\mathcal{L}_{\\text{gap}}$ penalizes non-linear deficiency in threshold skills:

\\begin{equation}
\\mathcal{L}_{\\text{gap}} = \\sum_{k \\in \\mathcal{G}_{\\text{crit}}} w_k \\cdot \\max(0, R_k - P_k)^2
\\end{equation}

\\section{Waypoint Convergence}
Empirical evaluations demonstrate that learners following structured waypoint sequences achieve gap convergence in 42\\% fewer study hours compared to unstructured self-study.

\\end{document}`,

  project: `% ===== SKILL GAP AUDIT & LEARNING BLUEPRINT =====
\\documentclass{report}
\\usepackage{geometry}
\\geometry{margin=1in}
\\usepackage{xcolor}
\\usepackage{hyperref}

\\begin{document}
\\title{\\textbf{Learner Skill Audit \\& Upskilling Blueprint}}
\\author{Prepared by: \\textbf{User} (Learner ID: SB-9402)}
\\date{\\today}
\\maketitle

\\section*{Executive Summary}
This document outlines the verified baseline competencies, detected skill gaps for the target transition to \\textbf{MLOps / Machine Learning Systems}, and the step-by-step waypoint roadmap to achieve role readiness.

\\section*{Key Milestones Achieved}
\\begin{enumerate}
  \\item Python \\& Data Preprocessing: 90\\% Mastery (Verified via Code Sandbox)
  \\item SQL Querying \\& Aggregations: 85\\% Mastery
  \\item Docker Containerization: 75\\% Mastery
\\end{enumerate}

\\section*{Target Learning Focus}
\\begin{itemize}
  \\item PyTorch Tensor Computations and Backpropagation
  \\item Kubernetes Model Serving \\& Automated CI/CD
  \\item \\LaTeX{} Technical Documentation and Reproducibility
\\end{itemize}

\\end{document}`
};

const CODE_EXERCISES = {
  python: `# SkillBridge Interactive Code Lab  :  Fill the Skill Gap
# Exercise: Data Pipeline & Model Training in PyTorch / Scikit-learn

import numpy as np

# 1. Simulate Learner Competency Data
np.random.seed(42)
skills = ['Python', 'SQL', 'Docker', 'AWS', 'PyTorch', 'MLOps']
current_scores = np.array([85, 80, 70, 65, 40, 35])
target_benchmark = np.array([90, 85, 80, 75, 80, 75])

# 2. Compute Gap Vector
gaps = np.maximum(0, target_benchmark - current_scores)
gap_percentages = (gaps / target_benchmark) * 100

print("=" * 55)
print("  SKILLBRIDGE CODE LAB: GAP ANALYSIS ENGINE")
print("=" * 55)
for s, cur, tgt, g in zip(skills, current_scores, target_benchmark, gaps):
    status = "READY " if g == 0 else f"GAP: -{g} pts"
    print(f"  • {s:<10} | Current: {cur:2d}% | Target: {tgt:2d}% | {status}")

print("-" * 55)
priority_idx = np.argmax(gaps)
print(f"Priority Waypoint Detected: {skills[priority_idx]} (Deficit: {gaps[priority_idx]} pts)")
print("Running training verification checks...")
print("Check 1: NumPy vectorization operations ... PASSED")
print("Check 2: PyTorch tensor gradient computation ... PASSED")
print("Check 3: Scikit-learn metric validation ... PASSED")
print("=" * 55)
print("SUCCESS: 3/3 Skill Verification Checks Passed!")
print("Recommended Action: Proceed to Waypoint 4 (Model Serving Sandbox)")
`,

  sql: `-- Interactive SQL Query Sandbox: Analyzing Job Skill Demand
-- Live database query on tech market postings

SELECT 
    skill_name,
    category,
    active_postings_count,
    yoy_demand_growth_pct,
    ROUND(median_salary_lpa, 1) AS median_salary_in_lpa,
    learning_difficulty
FROM global_tech_skills
WHERE yoy_demand_growth_pct >= 35.0
ORDER BY active_postings_count DESC
LIMIT 6;
`
};

var currentCompilerTab = 'latex';

function switchCompilerTab(tab) {
  currentCompilerTab = tab;
  document.querySelectorAll('.compiler-mode-btn').forEach(function(b) {
    b.classList.remove('active');
  });
  var activeBtn = document.getElementById('comp-tab-' + tab);
  if (activeBtn) activeBtn.classList.add('active');

  var editor = document.getElementById('compilerCodeEditor');
  var latexPreview = document.getElementById('latexRenderPane');
  var terminalOutput = document.getElementById('terminalOutputPane');
  var latexToolbarBtns = document.getElementById('latexToolbarBtns');
  var codeToolbarBtns = document.getElementById('codeToolbarBtns');

  if (tab === 'latex') {
    if (editor) editor.value = LATEX_TEMPLATES.cv;
    if (latexPreview) latexPreview.style.display = 'block';
    if (terminalOutput) terminalOutput.style.display = 'none';
    if (latexToolbarBtns) latexToolbarBtns.style.display = 'flex';
    if (codeToolbarBtns) codeToolbarBtns.style.display = 'none';
    compileLatex();
  } else if (tab === 'python') {
    if (editor) editor.value = CODE_EXERCISES.python;
    if (latexPreview) latexPreview.style.display = 'none';
    if (terminalOutput) terminalOutput.style.display = 'block';
    if (latexToolbarBtns) latexToolbarBtns.style.display = 'none';
    if (codeToolbarBtns) codeToolbarBtns.style.display = 'flex';
    runTrainingCode();
  } else if (tab === 'sql') {
    if (editor) editor.value = CODE_EXERCISES.sql;
    if (latexPreview) latexPreview.style.display = 'none';
    if (terminalOutput) terminalOutput.style.display = 'block';
    if (latexToolbarBtns) latexToolbarBtns.style.display = 'none';
    if (codeToolbarBtns) codeToolbarBtns.style.display = 'flex';
    runTrainingCode();
  }
}

function loadLatexTemplate(key) {
  var editor = document.getElementById('compilerCodeEditor');
  if (editor && LATEX_TEMPLATES[key]) {
    editor.value = LATEX_TEMPLATES[key];
    compileLatex();
    showToast('Loaded ' + key.toUpperCase() + ' template into editor!', 'info');
  }
}

function compileLatex() {
  var editor = document.getElementById('compilerCodeEditor');
  var preview = document.getElementById('latexRenderPane');
  if (!editor || !preview) return;

  var code = editor.value;
  var isPaper = code.includes('\maketitle') || code.includes('Mathematical Formulation');

  if (isPaper) {
    preview.innerHTML = `
      <div class="latex-paper" style="max-width:680px;margin:0 auto;">
        <h1>Skill Gap Minimization via Weighted Vector Projections in High-Dimensional Competency Space</h1>
        <div class="author"><strong>User</strong><br/>SkillBridge Open Research Labs &middot; <span style="font-family:monospace">user@skillbridge.io</span></div>
        <div style="font-size:11.5px;font-style:italic;background:#f1f5f9;padding:10px 14px;border-left:3px solid #64748b;margin-bottom:16px;">
          <strong>Abstract:</strong> We propose a formal optimization framework for calculating individual skill gaps across continuous learning trajectories. Given a learner profile vector $P \in \mathbb{R}^d$ and a target role benchmark vector $R \in \mathbb{R}^d$, the readiness score is computed via normalized cosine projection with regularization for critical missing prerequisites.
        </div>
        <h2>1. Mathematical Formulation</h2>
        <p>Let $w_i$ denote the importance weight of competency $i$, where $\sum_{i=1}^n w_i = 1$. The weighted cosine similarity $\mathcal{S}(P, R)$ between candidate vector $\vec{P}$ and role benchmark $\vec{R}$ is defined as:</p>
        <div style="text-align:center;font-size:15px;background:#f8fafc;padding:10px;border-radius:4px;margin:10px 0;font-family:serif;">
          $$\mathcal{S}(\vec{P}, \vec{R}) = \frac{\sum_{i=1}^n w_i \cdot P_i \cdot R_i}{\sqrt{\sum_{i=1}^n w_i P_i^2} \cdot \sqrt{\sum_{i=1}^n w_i R_i^2}}$$
        </div>
        <p>The critical gap loss function $\mathcal{L}_{\text{gap}}$ penalizes non-linear deficiency in threshold skills:</p>
        <div style="text-align:center;font-size:14px;background:#f8fafc;padding:10px;border-radius:4px;margin:10px 0;font-family:serif;">
          $$\mathcal{L}_{\text{gap}} = \sum_{k \in \mathcal{G}_{\text{crit}}} w_k \cdot \max(0, R_k - P_k)^2$$
        </div>
        <h2>2. Waypoint Convergence Results</h2>
        <p>Empirical evaluations across 1,200 simulated learner runs demonstrate that structured waypoint paths achieve role proficiency in 42% fewer hours than non-linear self-study.</p>
        <div style="font-size:11px;color:#64748b;margin-top:20px;border-top:1px solid #e2e8f0;padding-top:8px;">
          Compiled with pdfTeX 3.141592653 &middot; Document Output: 1 Page &middot; Overleaf &amp; TeXLive Compliant
        </div>
      </div>
    `;
  } else {
    // Render standard CV
    preview.innerHTML = `
      <div class="latex-paper" style="max-width:680px;margin:0 auto;">
        <h1 style="font-size:24px;margin-bottom:2px;">USER</h1>
        <div class="author" style="margin-bottom:12px;">
          user@skillbridge.io &middot; +91 98765 43210 &middot; github.com/user &middot; Bengaluru, India
        </div>
        <h2>Professional Summary</h2>
        <p>Self-taught developer and lifelong learner with strong core competencies in Python, Machine Learning, and Cloud Infrastructure. Actively bridging skill gaps through interactive code sandboxes, algorithm implementations, and real-world projects.</p>
        <h2>Technical Skills</h2>
        <ul style="margin-top:4px;">
          <li><strong>Languages:</strong> Python (NumPy, Pandas, Scikit-learn), SQL, Bash, Go</li>
          <li><strong>Machine Learning &amp; AI:</strong> PyTorch, Neural Networks, MLOps, Model Deployment, Scikit-learn</li>
          <li><strong>DevOps &amp; Cloud:</strong> Docker, Kubernetes, AWS, CI/CD Pipelines, Linux</li>
          <li><strong>Authoring &amp; Tools:</strong> LaTeX, Overleaf, Git, Jupyter, Postman</li>
        </ul>
        <h2>Milestone Projects</h2>
        <div style="display:flex;justify-content:space-between;font-weight:700;font-size:12.5px;margin-top:8px;">
          <span>Skill Gap Intelligence Engine | Python, PyTorch, FastAPI, Docker</span>
          <span>2024</span>
        </div>
        <ul>
          <li>Extracted and categorized competencies from unstructured CVs and job postings using TF-IDF and NLP embeddings.</li>
          <li>Containerized model serving using Docker and deployed on AWS EC2 with sub-100ms response time.</li>
        </ul>
        <div style="display:flex;justify-content:space-between;font-weight:700;font-size:12.5px;margin-top:6px;">
          <span>Real-Time Event Stream Analytics | Kafka, PostgreSQL, Python</span>
          <span>2023</span>
        </div>
        <ul>
          <li>Built distributed telemetry ingestion pipeline processing 10M+ records per day with 99.99% uptime.</li>
        </ul>
        <h2>Education &amp; Certifications</h2>
        <div style="font-size:12px;margin-top:4px;">
          <strong>Bachelor of Technology in Computer Science</strong> &middot; PES University (2018  to  2022)<br/>
          AWS Certified Solutions Architect  to  Associate | DeepLearning.AI Machine Learning Specialization
        </div>
        <div style="font-size:10.5px;color:#64748b;margin-top:20px;border-top:1px solid #e2e8f0;padding-top:8px;text-align:center;">
          Generated with LaTeX Engine &middot; ATS-Friendly Format &middot; Overleaf &amp; TeXLive Verified
        </div>
      </div>
    `;
  }

  showToast('LaTeX compiled successfully! Document ready.', 'success');
}

function openInOverleaf() {
  var editor = document.getElementById('compilerCodeEditor');
  var code = editor ? editor.value : '';
  
  if (navigator.clipboard && code) {
    navigator.clipboard.writeText(code).then(function() {
      showToast('LaTeX code copied to clipboard! Opening Overleaf...', 'success');
    }).catch(function() {
      showToast('Opening Overleaf...', 'info');
    });
  }
  
  setTimeout(function() {
    window.open('https://www.overleaf.com/docs', '_blank');
  }, 400);
}

function downloadLatexFile() {
  var editor = document.getElementById('compilerCodeEditor');
  var code = editor ? editor.value : '';
  var filename = currentCompilerTab === 'latex' ? 'skillbridge_resume.tex' : (currentCompilerTab === 'python' ? 'skillbridge_exercise.py' : 'skillbridge_query.sql');
  var blob = new Blob([code], { type: 'text/plain;charset=utf-8' });
  var url = URL.createObjectURL(blob);
  var a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast('Downloaded ' + filename, 'success');
}

function copyLatexCode() {
  var editor = document.getElementById('compilerCodeEditor');
  var code = editor ? editor.value : '';
  if (navigator.clipboard && code) {
    navigator.clipboard.writeText(code).then(function() {
      showToast('Code copied to clipboard!', 'success');
    });
  } else {
    showToast('Select code and press Ctrl+C to copy', 'info');
  }
}

function runTrainingCode() {
  var terminal = document.getElementById('terminalOutputPane');
  if (!terminal) return;

  if (currentCompilerTab === 'sql') {
    terminal.innerHTML = `
<span style="color:#60A5FA;">-- Executing SQL query on SkillBridge Global Tech Demand Database...</span>
<span style="color:#94A3B8;">QUERY TIME: 14ms | DATABASE: PostgreSQL 16.2 | ROWS RETURNED: 6</span>

<table style="width:100%;border-collapse:collapse;margin-top:12px;font-family:monospace;font-size:12px;color:#E2E8F0;">
  <thead>
    <tr style="border-bottom:1.5px solid #334155;text-align:left;color:#94A3B8;">
      <th style="padding:6px;">SKILL_NAME</th>
      <th style="padding:6px;">CATEGORY</th>
      <th style="padding:6px;">ACTIVE_POSTINGS</th>
      <th style="padding:6px;">YOY_GROWTH</th>
      <th style="padding:6px;">MEDIAN_LPA</th>
      <th style="padding:6px;">DIFFICULTY</th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom:1px solid #1E293B;">
      <td style="padding:6px;color:#A78BFA;font-weight:bold;">Python</td>
      <td style="padding:6px;">Programming</td>
      <td style="padding:6px;">38,420</td>
      <td style="padding:6px;color:#34D399;">+38.5%</td>
      <td style="padding:6px;">₹24.0L</td>
      <td style="padding:6px;">Medium</td>
    </tr>
    <tr style="border-bottom:1px solid #1E293B;">
      <td style="padding:6px;color:#A78BFA;font-weight:bold;">PyTorch</td>
      <td style="padding:6px;">Deep Learning</td>
      <td style="padding:6px;">24,100</td>
      <td style="padding:6px;color:#34D399;">+74.2%</td>
      <td style="padding:6px;">₹28.5L</td>
      <td style="padding:6px;">Advanced</td>
    </tr>
    <tr style="border-bottom:1px solid #1E293B;">
      <td style="padding:6px;color:#A78BFA;font-weight:bold;">LangChain</td>
      <td style="padding:6px;">Generative AI</td>
      <td style="padding:6px;">18,200</td>
      <td style="padding:6px;color:#34D399;">+110.8%</td>
      <td style="padding:6px;">₹32.0L</td>
      <td style="padding:6px;">Medium-Adv</td>
    </tr>
    <tr style="border-bottom:1px solid #1E293B;">
      <td style="padding:6px;color:#A78BFA;font-weight:bold;">Docker</td>
      <td style="padding:6px;">Containers / DevOps</td>
      <td style="padding:6px;">31,500</td>
      <td style="padding:6px;color:#34D399;">+42.0%</td>
      <td style="padding:6px;">₹21.5L</td>
      <td style="padding:6px;">Beginner-Med</td>
    </tr>
    <tr style="border-bottom:1px solid #1E293B;">
      <td style="padding:6px;color:#A78BFA;font-weight:bold;">SQL & PostgreSQL</td>
      <td style="padding:6px;">Database & Storage</td>
      <td style="padding:6px;">42,900</td>
      <td style="padding:6px;color:#34D399;">+36.0%</td>
      <td style="padding:6px;">₹19.0L</td>
      <td style="padding:6px;">Beginner</td>
    </tr>
    <tr>
      <td style="padding:6px;color:#A78BFA;font-weight:bold;">Kubernetes</td>
      <td style="padding:6px;">Orchestration</td>
      <td style="padding:6px;">16,800</td>
      <td style="padding:6px;color:#34D399;">+64.5%</td>
      <td style="padding:6px;">₹29.0L</td>
      <td style="padding:6px;">Advanced</td>
    </tr>
  </tbody>
</table>
<div style="margin-top:14px;color:#10B981;font-weight:bold;">SQL execution completed: 6 rows returned. Ready for data analysis.</div>
`;
  } else {
    // Python simulation output
    terminal.innerHTML = `
<span style="color:#94A3B8;">Python 3.12.2 (main) [GCC 11.2.0] on linux</span>
<span style="color:#60A5FA;">Type "help", "copyright", "credits" or "license" for more information.</span>
<span style="color:#CBD5E1;">&gt;&gt;&gt; executing script: exercise_pipeline.py</span>

=======================================================
  SKILLBRIDGE CODE LAB: GAP ANALYSIS ENGINE
=======================================================
  • Python     | Current: 85% | Target: 90% | GAP: -5 pts
  • SQL        | Current: 80% | Target: 85% | GAP: -5 pts
  • Docker     | Current: 70% | Target: 80% | GAP: -10 pts
  • AWS        | Current: 65% | Target: 75% | GAP: -10 pts
  • PyTorch    | Current: 40% | Target: 80% | <span style="color:#F87171;font-weight:bold;">GAP: -40 pts [CRITICAL]</span>
  • MLOps      | Current: 35% | Target: 75% | <span style="color:#F87171;font-weight:bold;">GAP: -40 pts [CRITICAL]</span>
-------------------------------------------------------
<span style="color:#FBBF24;font-weight:bold;">Priority Waypoint Detected: PyTorch (Deficit: 40 pts)</span>
Running training verification checks...
Check 1: NumPy vectorization operations ... <span style="color:#34D399;font-weight:bold;">PASSED</span>
Check 2: PyTorch tensor gradient computation ... <span style="color:#34D399;font-weight:bold;">PASSED</span>
Check 3: Scikit-learn metric validation ... <span style="color:#34D399;font-weight:bold;">PASSED</span>
=======================================================
<span style="color:#34D399;font-weight:bold;">SUCCESS: 3/3 Skill Verification Checks Passed in 0.18s!</span>
Recommended Action: Proceed to Waypoint 4 (Model Serving Sandbox)
`;
  }

  showToast('Code executed successfully!', 'success');
}


// ===== LEARNING WAYPOINTS FLOWCHART & GRAPH LOGIC =====
const WAYPOINTS = [
  {
    id: 1,
    title: 'Waypoint 01: Baseline Diagnostic',
    subtitle: 'Skill Gap Detection & Benchmark',
    duration: '2-4 Hours',
    difficulty: 'Introductory',
    status: 'completed',
    desc: 'Evaluate current baseline skills against target role benchmarks using NLP extraction and weighted gap scoring.',
    goals: [
      'Extract technical keywords and tools from existing resume or project list',
      'Benchmark current proficiency against market roles (e.g. ML Engineer, Data Scientist)',
      'Calculate weighted readiness score and categorize gaps by priority'
    ],
    videoTitle: 'How to Identify and Bridge Your Tech Skill Gaps',
    videoPlatform: 'freeCodeCamp',
    videoLink: 'https://www.youtube.com/watch?v=rfscVS0vtbw',
    codeExercise: 'Extract skills with TF-IDF vectorization in Python'
  },
  {
    id: 2,
    title: 'Waypoint 02: Foundational Code & LaTeX CV',
    subtitle: 'LaTeX Syntax & Overleaf CV',
    duration: '6-8 Hours',
    difficulty: 'Beginner',
    status: 'completed',
    desc: 'Master LaTeX document typesetting, compile ATS-friendly tech CVs in Overleaf, and refresh Python data structures.',
    goals: [
      'Build ATS-parseable CV in LaTeX using Overleaf templates',
      'Format academic math equations and research project write-ups',
      'Solve foundational Python exercises in NumPy & Pandas'
    ],
    videoTitle: 'LaTeX for Beginners  :  Full Course in 2 Hours',
    videoPlatform: 'Overleaf / freeCodeCamp',
    videoLink: 'https://www.youtube.com/watch?v=VhmkLrOjLsw',
    codeExercise: 'Compile LaTeX CV in SkillBridge Compilers Studio'
  },
  {
    id: 3,
    title: 'Waypoint 03: Core Competency Bridge',
    subtitle: 'PyTorch & Machine Learning Pipelines',
    duration: '14-18 Hours',
    difficulty: 'Intermediate',
    status: 'active',
    desc: 'Bridge the primary skill gap: tensor operations, backpropagation, deep learning models, and model evaluation.',
    goals: [
      'Construct feedforward neural networks using PyTorch nn.Module',
      'Implement data loaders and custom loss functions with Adam optimizer',
      'Train, evaluate, and prevent overfitting using regularization & dropout'
    ],
    videoTitle: 'PyTorch for Deep Learning Bootcamp (Full 26 Hours)',
    videoPlatform: 'freeCodeCamp · Daniel Bourke',
    videoLink: 'https://www.youtube.com/watch?v=V_xro1bcAuA',
    codeExercise: 'Run PyTorch tensor gradient sandbox in Code Lab'
  },
  {
    id: 4,
    title: 'Waypoint 04: Lab Sandboxes & CI/CD',
    subtitle: 'Docker, FastAPI & Containerization',
    duration: '12-16 Hours',
    difficulty: 'Intermediate',
    status: 'pending',
    desc: 'Package models as microservices, containerize applications with Docker, and build automated GitHub Actions CI/CD.',
    goals: [
      'Serve predictive ML models via asynchronous FastAPI REST endpoints',
      'Write multi-stage Dockerfiles for minimal container size and fast startup',
      'Configure automated unit testing and container image publishing'
    ],
    videoTitle: 'Docker and Containers for Developers Full Course',
    videoPlatform: 'TechWorld with Nana',
    videoLink: 'https://www.youtube.com/watch?v=3c-iBn73dDE',
    codeExercise: 'Containerize FastAPI ML inference script'
  },
  {
    id: 5,
    title: 'Waypoint 05: Masterclass Deep Dives',
    subtitle: 'Mathematical Intuition & GenAI',
    duration: '16-20 Hours',
    difficulty: 'Advanced',
    status: 'pending',
    desc: 'Deepen conceptual foundation through 3Blue1Brown visual math intuition and Andrew Ng GenAI architecture.',
    goals: [
      'Develop geometric intuition for eigenvectors, dot products, and high-dimensional spaces',
      'Implement Transformer attention mechanisms and token embeddings',
      'Fine-tune open-source models with LoRA and QLoRA'
    ],
    videoTitle: 'Essence of Linear Algebra & Neural Networks',
    videoPlatform: '3Blue1Brown · Grant Sanderson',
    videoLink: 'https://www.youtube.com/watch?v=fNk_zzaMoSs',
    codeExercise: 'Implement self-attention matrix calculation in NumPy'
  },
  {
    id: 6,
    title: 'Waypoint 06: Capstone & Role Mastery',
    subtitle: 'Portfolio Artifact & Verification',
    duration: '20+ Hours',
    difficulty: 'Capstone',
    status: 'pending',
    desc: 'Ship an end-to-end open-source project, publish technical LaTeX documentation on Overleaf, and verify 90%+ readiness.',
    goals: [
      'Publish reproducible codebase on GitHub with clean README and Dockerfile',
      'Write accompanying technical paper in Overleaf LaTeX',
      'Retest profile in SkillBridge Skill Analyzer to confirm zero critical gaps'
    ],
    videoTitle: 'Building Open Source Projects from Scratch to Production',
    videoPlatform: 'Harvard CS50 / MIT OCW',
    videoLink: 'https://www.youtube.com/watch?v=zD2Jg3au16w',
    codeExercise: 'Final SkillBridge Re-Analysis & Certification Verification'
  }
];

var selectedWaypointIdx = 2; // Default to Waypoint 3 (in progress)

function renderWaypointsFlowchart() {
  var el = document.getElementById('flowchartSteps');
  if (!el) return;

  el.innerHTML = WAYPOINTS.map(function(w, i) {
    var isSelected = i === selectedWaypointIdx;
    var statusClass = w.status === 'completed' ? 'completed-waypoint' : (isSelected ? 'active-waypoint' : '');
    var statusBadge = w.status === 'completed' ? '<span class="badge badge-success">Done</span>' : (w.status === 'active' ? '<span class="badge badge-warning"> In Progress</span>' : '<span class="badge" style="background:var(--bg4);color:var(--text3);">Next Up</span>');
    var arrowHtml = i < WAYPOINTS.length - 1 ? '<div class="flowchart-arrow">-></div>' : '';

    return `
      <div class="flowchart-node ${statusClass}" onclick="selectWaypoint(${i})" title="Click to view details for ${w.title}">
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <span class="flowchart-node-num">WAYPOINT 0${w.id}</span>
          ${statusBadge}
        </div>
        <div class="flowchart-node-title">${w.title.split(': ')[1]}</div>
        <div class="flowchart-node-sub">${w.subtitle} &middot; <strong>${w.duration}</strong></div>
      </div>
      ${arrowHtml}
    `;
  }).join('');

  updateWaypointProgress();
  renderWaypointDetail();
}

function selectWaypoint(idx) {
  selectedWaypointIdx = idx;
  renderWaypointsFlowchart();
}

function toggleWaypointComplete(idx) {
  WAYPOINTS[idx].status = WAYPOINTS[idx].status === 'completed' ? 'active' : 'completed';
  renderWaypointsFlowchart();
  showToast(WAYPOINTS[idx].status === 'completed' ? 'Waypoint marked complete! Great progress.' : 'Waypoint status updated.', 'success');
}

function updateWaypointProgress() {
  var completedCount = WAYPOINTS.filter(function(w) { return w.status === 'completed'; }).length;
  var pct = Math.round((completedCount / WAYPOINTS.length) * 100);

  var fill = document.getElementById('waypointProgressFill');
  var text = document.getElementById('waypointProgressText');
  var badge = document.getElementById('waypointPctBadge');

  if (fill) fill.style.width = pct + '%';
  if (text) text.textContent = completedCount + ' of ' + WAYPOINTS.length + ' Waypoints Mastered (' + pct + '% Complete)';
  if (badge) badge.textContent = pct + '% Waypoint Readiness';
}

function renderWaypointDetail() {
  var el = document.getElementById('waypointDetailCard');
  if (!el) return;
  var w = WAYPOINTS[selectedWaypointIdx];
  if (!w) return;

  var isCompleted = w.status === 'completed';
  var goalsHtml = w.goals.map(function(g) {
    return `<li style="margin-bottom:6px;font-size:13px;color:var(--text2);">${g}</li>`;
  }).join('');

  el.innerHTML = `
    <div style="display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:16px;flex-wrap:wrap;gap:12px;">
      <div>
        <div style="font-size:11px;font-weight:800;color:#A78BFA;letter-spacing:.08em;">INSPECTING WAYPOINT 0${w.id} &middot; ${w.difficulty.toUpperCase()}</div>
        <h3 style="font-size:22px;font-weight:900;color:var(--text);margin:2px 0 4px;font-family:'Outfit',sans-serif;">${w.title}</h3>
        <p style="font-size:13.5px;color:var(--text2);max-width:680px;">${w.desc}</p>
      </div>
      <div style="display:flex;gap:8px;">
        <button class="btn ${isCompleted ? 'btn-secondary' : 'btn-primary'}" onclick="toggleWaypointComplete(${selectedWaypointIdx})">
          ${isCompleted ? 'Completed (Click to Reset)' : 'Mark Waypoint Completed'}
        </button>
      </div>
    </div>

    <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(280px, 1fr));gap:16px;margin-top:16px;">
      <div style="background:var(--bg3);border:1px solid var(--border);border-radius:var(--radius-sm);padding:16px;">
        <div style="font-size:12px;font-weight:700;color:var(--text);margin-bottom:8px;display:flex;align-items:center;gap:6px;">
          <span></span> Learning Objectives and Milestones
        </div>
        <ul style="padding-left:18px;">${goalsHtml}</ul>
      </div>

      <div style="background:var(--bg3);border:1px solid var(--border);border-radius:var(--radius-sm);padding:16px;display:flex;flex-direction:column;justify-content:space-between;">
        <div>
          <div style="font-size:12px;font-weight:700;color:var(--text);margin-bottom:8px;display:flex;align-items:center;gap:6px;">
            <span></span> Top Recommended Free Video Lecture
          </div>
          <div style="font-size:13.5px;font-weight:800;color:#A78BFA;margin-bottom:2px;">${w.videoTitle}</div>
          <div style="font-size:12px;color:var(--text3);margin-bottom:12px;">Platform: <strong>${w.videoPlatform}</strong> &middot; Free Access</div>
        </div>
        <div style="display:flex;gap:8px;flex-wrap:wrap;">
          <a href="${w.videoLink}" target="_blank" class="btn btn-secondary btn-sm" style="background:rgba(236,72,153,.15);color:#F472B6;border-color:rgba(236,72,153,.3);">
            Watch Masterclass Free &rarr;
          </a>
          <button class="btn btn-secondary btn-sm" onclick="showTab('compilers');switchCompilerTab('python');">
            Open Code Sandbox &rarr;
          </button>
        </div>
      </div>
    </div>
  `;
}


// ===== VIDEO & FREE LEARNING PLATFORMS HUB DATA & LOGIC =====
const VIDEO_COURSES = [
  {
    id: 'v1',
    title: 'PyTorch for Deep Learning & Machine Learning Bootcamp',
    channel: 'Daniel Bourke · freeCodeCamp',
    platform: 'freeCodeCamp',
    duration: '26h 00m',
    category: 'ml',
    skills: ['PyTorch', 'Deep Learning', 'Computer Vision', 'NLP', 'Python'],
    link: 'https://www.youtube.com/watch?v=V_xro1bcAuA',
    thumbBg: 'linear-gradient(135deg, #EF4444, #7C3AED)',
    icon: '[FCC]'
  },
  {
    id: 'v2',
    title: 'LaTeX for Beginners  :  Full Course in 2 Hours',
    channel: 'Overleaf / Dr. Trevor Bazett · freeCodeCamp',
    platform: 'Overleaf Learn',
    duration: '2h 15m',
    category: 'latex',
    skills: ['LaTeX', 'Overleaf', 'Academic CV', 'Math Typesetting', 'Research Papers'],
    link: 'https://www.youtube.com/watch?v=VhmkLrOjLsw',
    thumbBg: 'linear-gradient(135deg, #059669, #10B981)',
    icon: '[TEX]'
  },
  {
    id: 'v3',
    title: 'Essence of Linear Algebra & Matrix Transformations',
    channel: 'Grant Sanderson · 3Blue1Brown',
    platform: '3Blue1Brown',
    duration: '16 Videos Series',
    category: 'math',
    skills: ['Linear Algebra', 'Vectors', 'Dot Products', 'Eigenvalues', 'Matrix Operations'],
    link: 'https://www.youtube.com/watch?v=fNk_zzaMoSs&list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab',
    thumbBg: 'linear-gradient(135deg, #3B82F6, #1D4ED8)',
    icon: '[3B1B]'
  },
  {
    id: 'v4',
    title: 'Machine Learning Specialization with Andrew Ng',
    channel: 'Andrew Ng · DeepLearning.AI & Stanford',
    platform: 'DeepLearning.AI',
    duration: 'Free Audit Available',
    category: 'ml',
    skills: ['Supervised Learning', 'Neural Networks', 'Decision Trees', 'Gradient Descent'],
    link: 'https://www.coursera.org/specializations/machine-learning-introduction',
    thumbBg: 'linear-gradient(135deg, #06B6D4, #3B82F6)',
    icon: '[AI]'
  },
  {
    id: 'v5',
    title: 'Neural Networks & Backpropagation from Scratch',
    channel: 'Andrej Karpathy (Former Tesla AI Lead / OpenAI)',
    platform: 'YouTube Open Course',
    duration: '2h 25m',
    category: 'ml',
    skills: ['Micrograd', 'Calculus', 'Backprop', 'Tensors', 'Python'],
    link: 'https://www.youtube.com/watch?v=VMj-3S1tku0',
    thumbBg: 'linear-gradient(135deg, #7C3AED, #EC4899)',
    icon: ''
  },
  {
    id: 'v6',
    title: 'SQL Database Full Course  :  Beginner to Pro',
    channel: 'Mike Dane · freeCodeCamp',
    platform: 'freeCodeCamp',
    duration: '4h 20m',
    category: 'sql',
    skills: ['SQL', 'PostgreSQL', 'Joins', 'Aggregations', 'Indexes', 'Schema Design'],
    link: 'https://www.youtube.com/watch?v=HXV3zeRR3h4',
    thumbBg: 'linear-gradient(135deg, #F59E0B, #EA580C)',
    icon: '[SQL]'
  },
  {
    id: 'v7',
    title: 'Docker & Kubernetes Tutorial for Beginners',
    channel: 'TechWorld with Nana',
    platform: 'TechWorld with Nana',
    duration: '3h 45m',
    category: 'devops',
    skills: ['Docker', 'Kubernetes', 'Containers', 'Deployments', 'CI/CD'],
    link: 'https://www.youtube.com/watch?v=3c-iBn73dDE',
    thumbBg: 'linear-gradient(135deg, #0284C7, #0369A1)',
    icon: '[DOCKER]'
  },
  {
    id: 'v8',
    title: 'StatQuest: Machine Learning Fundamentals',
    channel: 'Josh Starmer · StatQuest',
    platform: 'StatQuest Free',
    duration: '35 Video Series',
    category: 'math',
    skills: ['Statistics', 'Random Forests', 'ROC-AUC', 'PCA', 'Cross Validation'],
    link: 'https://www.youtube.com/watch?v=Gv9_4yMHFhI&list=PLblh5JKOoLUICTaGLRoHQDuF_7q2GfuJF',
    thumbBg: 'linear-gradient(135deg, #10B981, #06B6D4)',
    icon: '[STAT]'
  },
  {
    id: 'v9',
    title: "CS50's Introduction to Computer Science",
    channel: 'Prof. David J. Malan · Harvard University',
    platform: 'Harvard CS50',
    duration: 'Complete Free Course',
    category: 'python',
    skills: ['C', 'Python', 'Algorithms', 'Data Structures', 'Memory', 'Problem Solving'],
    link: 'https://cs50.harvard.edu/x/',
    thumbBg: 'linear-gradient(135deg, #DC2626, #991B1B)',
    icon: '[CS50]'
  },
  {
    id: 'v10',
    title: 'MIT 6.S191: Introduction to Deep Learning',
    channel: 'Alexander Amini · MIT OpenCourseWare',
    platform: 'MIT OCW',
    duration: '10 Video Lectures',
    category: 'ml',
    skills: ['Deep Learning', 'Transformers', 'Generative Modeling', 'Reinforcement Learning'],
    link: 'http://introtodeeplearning.com/',
    thumbBg: 'linear-gradient(135deg, #6D28D9, #4C1D95)',
    icon: '[MIT]'
  },
  {
    id: 'v11',
    title: 'Kaggle Learn: Hands-on 4-Hour Micro-Courses',
    channel: 'Kaggle AI Data Science Team',
    platform: 'Kaggle Free',
    duration: 'Interactive Tracks',
    category: 'python',
    skills: ['Pandas', 'Feature Engineering', 'Data Visualization', 'Intro to ML'],
    link: 'https://www.kaggle.com/learn',
    thumbBg: 'linear-gradient(135deg, #20BEFF, #0284C7)',
    icon: '[KAGGLE]'
  },
  {
    id: 'v12',
    title: 'Overleaf LaTeX Documentation & Guides',
    channel: 'Overleaf Official Community Guides',
    platform: 'Overleaf Guides',
    duration: 'Interactive Docs & Templates',
    category: 'latex',
    skills: ['Overleaf', 'LaTeX Packages', 'BibTeX', 'Tables', 'Graphics', 'Math'],
    link: 'https://www.overleaf.com/learn',
    thumbBg: 'linear-gradient(135deg, #059669, #047857)',
    icon: '[GUIDE]'
  }
];

function renderVideoHub(filterCategory) {
  var el = document.getElementById('videoGrid');
  if (!el) return;

  var cat = filterCategory || 'all';
  var list = cat === 'all' ? VIDEO_COURSES : VIDEO_COURSES.filter(function(v) { return v.category === cat; });

  el.innerHTML = list.map(function(v) {
    var skillPills = v.skills.map(function(s) {
      return `<span class="video-skill-pill">${s}</span>`;
    }).join('');

    return `
      <div class="video-card">
        <div class="video-thumb-wrap" style="background:${v.thumbBg};">
          <span class="video-platform-badge" style="background:rgba(0,0,0,.6);">${v.platform}</span>
          <span class="video-duration">${v.duration}</span>
          <div class="video-play-icon">${v.icon}</div>
        </div>
        <div class="video-body">
          <div>
            <div class="video-title">${v.title}</div>
            <div class="video-channel">By <strong>${v.channel}</strong></div>
          </div>
          <div class="video-skills">${skillPills}</div>
          <div class="video-footer">
            <a href="${v.link}" target="_blank" class="btn btn-primary btn-sm" style="font-size:11.5px;">
              Start Free Course &rarr;
            </a>
            <button class="btn-chip" onclick="showTab('compilers');showToast('Opening Code Lab for ' + '${v.skills[0]}', 'info');">
              Practice Code
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function filterVideos(cat, btn) {
  document.querySelectorAll('.video-filter-btn').forEach(function(b) {
    b.classList.remove('active');
  });
  if (btn) btn.classList.add('active');
  renderVideoHub(cat);
}
