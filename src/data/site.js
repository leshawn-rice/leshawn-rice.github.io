import heroDashboard from '../assets/hero/hero-dashboard.jpg';
import heroFiber from '../assets/hero/hero-fiber.jpg';

import ansible from '../assets/tools/ansible.svg';
import aws from '../assets/tools/aws.svg';
import azure from '../assets/tools/azure.svg';
import azureDevops from '../assets/tools/azure-devops.png';
import bash from '../assets/tools/bash.svg';
import datadog from '../assets/tools/datadog.svg';
import docker from '../assets/tools/docker.svg';
import git from '../assets/tools/git.svg';
import github from '../assets/tools/github.svg';
import githubActions from '../assets/tools/github-actions.svg';
import helm from '../assets/tools/helm.svg';
import jenkins from '../assets/tools/jenkins.svg';
import kubernetes from '../assets/tools/kubernetes.svg';
import linux from '../assets/tools/linux.svg';
import nginx from '../assets/tools/nginx.svg';
import nodejs from '../assets/tools/nodejs.svg';
import pagerduty from '../assets/tools/pagerduty.svg';
import powershell from '../assets/tools/powershell.png';
import python from '../assets/tools/python.svg';
import snyk from '../assets/tools/snyk.svg';
import sonarqube from '../assets/tools/sonarqube.svg';
import terraform from '../assets/tools/terraform.svg';
import vmware from '../assets/tools/vmware.svg';
import windows from '../assets/tools/windows.svg';

export const RESUME_URL = '/docs/RiceLeshawn_Resume.pdf';

export const contact = {
  name: 'Leshawn Rice',
  role: 'Platform Engineer',
  city: 'Vancouver, Washington',
  phone: '+1 (425) 314-0862',
  phoneHref: 'tel:+14253140862',
  email: 'leshawn.rice@outlook.com',
  linkedin: 'https://www.linkedin.com/in/leshawn-rice/',
  github: 'https://www.github.com/leshawn-rice/',
};

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About Me' },
  { id: 'experience', label: 'Experience' },
  { id: 'tools', label: 'Tools' },
  { id: 'education', label: 'Education & Certifications' },
];

// `lead` sits above the title (small, spaced, uppercase); `tagline` sits below
// it as a full sentence. A slide uses one or the other, not both.
export const slides = [
  {
    image: heroDashboard,
    title: 'Leshawn Rice',
    tagline: 'Fewer tickets. Faster deploys.',
    cta: 'Get in Touch!',
  },
  {
    image: heroFiber,
    lead: 'Experienced',
    title: 'Platform Engineer',
    cta: 'Get in Touch!',
  },
];

export const about = {
  eyebrow: 'Brief History',
  heading: 'A Platform Engineer with a passion for automating everything',
  body: [
    "I'm a **results-oriented** Platform Engineer with **5 years** of experience building CI/CD pipelines, automating cloud and on-prem systems, and improving **reliability**, **security**, and **delivery speed**.",
    'I work across the whole delivery path, from the infrastructure underneath to the pipelines that carry code into production. My background covers **Linux operations**, **Infrastructure as Code**, **containers**, **observability**, and **source control**, with regular PagerDuty-managed on-call coverage.',
  ],
  // rendered into a two-column grid, filling row by row
  highlights: [
    { text: 'Skilled Technical Coordinator' },
    { text: 'Self-service internal developer platforms' },
    { text: 'CI/CD, GitOps & release automation' },
    { text: 'Infrastructure as Code with Terraform & Ansible' },
    { text: 'Kubernetes & Helm-based delivery' },
    { text: 'Observability & production on-call' },
    { text: 'AI enablement & governance' },
  ],
};

export const experience = [
  {
    company: 'Barrett Business Services Inc',
    title: 'Platform Engineer',
    period: 'March 2026 – Present',
    icon: 'platform',
    body: [
      "I build BBSI's **internal developer platform**, giving development teams **self-service deployment** through pre-approved patterns. Work that used to wait weeks on tickets, approvals and hand-built pipelines now ships on demand.",
      'Day to day, I build, maintain and support the **platforms and workflows** developers rely on — streamlining delivery into staging and production while keeping it aligned with our **security and compliance standards**.',
    ],
  },
  {
    company: 'Barrett Business Services Inc',
    title: 'DevOps Engineer',
    period: 'August 2022 – March 2026',
    icon: 'cloud',
    body: [
      'I managed a fleet of on-premise **vSphere** development environments, automated largely in **PowerShell**, and wrote the **Terraform** behind our cloud environments — including rebuilding the on-premise estate as code during a datacenter migration.',
      'I built and maintained **Kubernetes** delivery pipelines using **Helm** and Azure Pipelines, and designed an internal monitoring API that gave the team one view of platform health and caught problems before they became outages.',
      'I led the technical due diligence on a major platform investment and carried **PagerDuty on-call** for production services.',
    ],
  },
  {
    company: 'Uplevel Systems',
    title: 'DevOps Support Developer',
    period: 'August 2021 – August 2022',
    icon: 'monitor',
    body: [
      'I rebuilt a legacy fleet health-check workflow in **Python**, parallelising its checks to take a full run from **over 24 hours to roughly one** and turning it into something the team could act on.',
      'I delivered **multi-factor authentication** for a custom OpenVPN platform end to end — backend, frontend, data model and client installer.',
      'I built an **end-to-end test environment** that simulated the full product stack on virtualised infrastructure, avoiding an estimated **$10k a year** in cloud spend, and automated environment setup across internal systems with **Ansible**.',
    ],
  },
];

export const toolCategories = [
  { id: 'all', label: 'All' },
  { id: 'scripting', label: 'Scripting & Automation' },
  { id: 'iac', label: 'Infrastructure as Code' },
  { id: 'containers', label: 'Containers & Orchestration' },
  { id: 'pipelines', label: 'Pipelines & CI/CD' },
  { id: 'security', label: 'Security & Quality' },
  { id: 'observability', label: 'Observability & Operations' },
  { id: 'vcs', label: 'Version Control' },
  { id: 'cloud', label: 'Cloud Platforms' },
  { id: 'systems', label: 'Systems & Infrastructure' },
];

export const tools = [
  { name: 'Bash', desc: 'Linux Scripting', logo: bash, tags: ['scripting'] },
  { name: 'PowerShell', desc: 'Windows Scripting', logo: powershell, tags: ['scripting'] },
  { name: 'Python', desc: 'Scripting & Automation', logo: python, tags: ['scripting'] },
  { name: 'Node.js', desc: 'APIs & Services', logo: nodejs, tags: ['scripting'] },
  { name: 'Terraform', desc: 'Infrastructure as Code', logo: terraform, tags: ['iac'] },
  { name: 'Ansible', desc: 'Configuration Management', logo: ansible, tags: ['iac'] },
  { name: 'Docker', desc: 'Containerization', logo: docker, tags: ['containers'] },
  { name: 'Kubernetes', desc: 'Container Orchestration', logo: kubernetes, tags: ['containers'] },
  { name: 'Helm', desc: 'Kubernetes Packaging', logo: helm, tags: ['containers', 'pipelines'] },
  { name: 'Jenkins', desc: 'Automation / CI-CD', logo: jenkins, tags: ['pipelines'] },
  { name: 'GitHub Actions', desc: 'Automation / CI-CD', logo: githubActions, tags: ['pipelines'] },
  { name: 'Azure DevOps', desc: 'Pipelines & Boards', logo: azureDevops, tags: ['pipelines', 'vcs'] },
  { name: 'SonarQube', desc: 'Code Quality & Analysis', logo: sonarqube, tags: ['security', 'pipelines'] },
  { name: 'Snyk', desc: 'Vulnerability Scanning', logo: snyk, tags: ['security', 'pipelines'] },
  { name: 'Datadog', desc: 'Metrics & Monitoring', logo: datadog, tags: ['observability'] },
  { name: 'PagerDuty', desc: 'On-Call & Incidents', logo: pagerduty, tags: ['observability'] },
  { name: 'Git', desc: 'Version Control', logo: git, tags: ['vcs'] },
  { name: 'GitHub', desc: 'Version Control', logo: github, tags: ['vcs'] },
  { name: 'Azure', desc: 'Cloud Platform', logo: azure, tags: ['cloud'] },
  { name: 'AWS', desc: 'Cloud Platform', logo: aws, tags: ['cloud'] },
  { name: 'Linux', desc: 'Ubuntu, Fedora, CentOS', logo: linux, tags: ['systems'] },
  { name: 'Windows Server', desc: 'Server Administration', logo: windows, tags: ['systems'] },
  { name: 'VMware', desc: 'Virtualization', logo: vmware, tags: ['systems'] },
  { name: 'NGINX', desc: 'Reverse Proxy & Load Balancing', logo: nginx, tags: ['systems'] },
];

export const education = [
  {
    icon: 'toolbox',
    title: 'Software Engineering',
    org: 'Springboard — 2021',
    body: 'Intensive course in Software Engineering methodologies and technologies.',
    meta: [
      ['Certificate ID', '34785473'],
    ],
    note: '**700+ hours** of hands-on course material over nine months, with 1:1 industry expert mentor oversight.',
  },
  {
    icon: 'documents',
    title: 'Azure Fundamentals',
    org: 'Microsoft (AZ-900) — 2024',
    body: 'Microsoft Certified Azure Fundamentals.',
    meta: [
      ['Credential ID', '4E1157DF9E365CF'],
    ],
  },
  {
    icon: 'globe',
    title: 'Terraform Associate',
    org: 'HashiCorp (HCTA0-003) — 2025',
    body: 'HashiCorp Certified Terraform Associate.',
    meta: [
      ['Certificate ID', '8a10a73f-851f-41dc-aa77-1c1e3eaf5724'],
    ],
  },
];

export const skillSet = [
  'Team Leader',
  'Strong Communicator',
  'Automation Machine',
  'Cloud Wizard',
  'Incident Responder',
];

export const loaderPhrases = [
  'Pinging Skynet...',
  'Artificially Waiting...',
  'Downloading more RAM...',
  'Hacking into the mainframe...',
  'One does not simply load a page...',
  'Decrypting funny loading messages...',
  'Bribing the server for speed...',
  'Deploying to localhost...',
  'Aligning pixels for maximum precision...',
  'Waiting for AI to take over...',
  'Loading... but in a totally cool way',
  'Compressing reality into bytes...',
];
