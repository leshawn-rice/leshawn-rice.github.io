import sliderGrey from '../assets/hero/slider-grey.jpg';
import sliderTl from '../assets/hero/slider-tl.jpg';

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
import javascript from '../assets/tools/javascript.svg';
import jenkins from '../assets/tools/jenkins.svg';
import kubernetes from '../assets/tools/kubernetes.svg';
import pagerduty from '../assets/tools/pagerduty.svg';
import powershell from '../assets/tools/powershell.png';
import python from '../assets/tools/python.svg';
import terraform from '../assets/tools/terraform.svg';

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

export const slides = [
  {
    image: sliderGrey,
    lead: 'Experienced',
    title: 'Platform Engineer',
    cta: 'Get in Touch!',
  },
  {
    image: sliderTl,
    lead: 'Skilled',
    title: 'Technical Coordinator',
    cta: 'Get in Touch!',
  },
];

export const about = {
  eyebrow: 'Brief History',
  heading: 'A Platform Engineer with a passion for automating everything',
  body: [
    "I'm a **results-oriented** Platform Engineer with **4+ years** of experience building CI/CD pipelines, automating cloud and on-prem systems, and improving **reliability**, **security**, and **delivery speed**.",
    'These days I spend most of my time on the **internal developer platform** — the paved paths, tooling, and guardrails that let engineering teams ship without fighting their infrastructure. I have a strong background in **Linux operations**, **Infrastructure as Code**, **containers**, **observability**, and **source control**, with regular PagerDuty-managed on-call coverage.',
  ],
  highlights: [
    { text: 'Skilled Technical Coordinator' },
    { text: 'CI/CD, GitOps & release automation' },
    { text: 'Infrastructure as Code with Terraform & Ansible' },
    { text: 'Kubernetes & Helm-based delivery' },
    { text: 'Observability & production on-call' },
    { text: 'Coin Collector' },
  ],
};

export const experience = [
  {
    company: 'Barrett Business Services Inc',
    title: 'Platform Engineer',
    period: 'March 2026 – Present',
    icon: 'platform',
    body: [
      'I led the build of the **internal Developer Platform** that streamlined our SDLC and took the friction out of getting code from a branch into production.',
      'I integrated **AI-assisted tooling** into our development workflows to improve developer productivity and accelerate code delivery, and I partner with the engineering and security teams to establish **governance patterns for responsible AI use** that line up with our security and compliance requirements.',
    ],
  },
  {
    company: 'Barrett Business Services Inc',
    title: 'DevOps Engineer',
    period: 'August 2022 – March 2026',
    icon: 'cloud',
    body: [
      'I wrote the **Terraform-based Infrastructure as Code** that provisions and manages our **15+ development and production environments** across multiple regions, improving deployment consistency and cutting manual infrastructure setup.',
      'I built and maintained **Kubernetes-based CI/CD pipelines** using Helm charts to deploy and promote services across environments, improving release reliability while satisfying audit and security requirements. I also designed an **internal systems API** exposing operational and monitoring data, which improved platform visibility and reduced outage troubleshooting time.',
      ' I led the **technical evaluation** of a multi-million dollar project.',
      'Throughout, I supported production services in a **PagerDuty on-call rotation**, responding to incidents and coordinating resolution across infrastructure and application teams.',
    ],
  },
  {
    company: 'Uplevel Systems',
    title: 'DevOps Support Developer',
    period: 'August 2021 – August 2022',
    icon: 'monitor',
    body: [
      'I refactored a **legacy monitoring workflow**, taking its runtime from over 24 hours down to under an hour and enabling near real-time operational insight through automation.',
      'I implemented **multi-factor authentication** for a custom OpenVPN platform, coordinating the backend and frontend changes and delivering a dedicated client installer.',
      'I designed the infrastructure for internal development environments in a hybrid cloud/on-prem setup, **reducing cloud-hosting costs by roughly $10k a year**, and used **Ansible** to automate environment setup and configuration tasks across internal systems.',
    ],
  },
];

export const toolCategories = [
  { id: 'all', label: 'All' },
  { id: 'scripting', label: 'Scripting & Automation' },
  { id: 'iac', label: 'Infrastructure as Code' },
  { id: 'containers', label: 'Containers & Orchestration' },
  { id: 'pipelines', label: 'Pipelines & CI/CD' },
  { id: 'observability', label: 'Observability & Operations' },
  { id: 'vcs', label: 'Version Control' },
  { id: 'cloud', label: 'Cloud Platforms' },
];

export const tools = [
  { name: 'Bash', desc: 'Linux Scripting', logo: bash, tags: ['scripting'] },
  { name: 'PowerShell', desc: 'Windows Scripting', logo: powershell, tags: ['scripting'] },
  { name: 'Python', desc: 'Scripting & Automation', logo: python, tags: ['scripting'] },
  { name: 'JavaScript', desc: 'Tooling & Services', logo: javascript, tags: ['scripting'] },
  { name: 'Terraform', desc: 'Infrastructure as Code', logo: terraform, tags: ['iac'] },
  { name: 'Ansible', desc: 'Configuration Management', logo: ansible, tags: ['iac'] },
  { name: 'Docker', desc: 'Containerization', logo: docker, tags: ['containers'] },
  { name: 'Kubernetes', desc: 'Container Orchestration', logo: kubernetes, tags: ['containers'] },
  { name: 'Helm', desc: 'Kubernetes Packaging', logo: helm, tags: ['containers', 'pipelines'] },
  { name: 'Jenkins', desc: 'Automation / CI-CD', logo: jenkins, tags: ['pipelines'] },
  { name: 'GitHub Actions', desc: 'Automation / CI-CD', logo: githubActions, tags: ['pipelines'] },
  { name: 'Azure DevOps', desc: 'Pipelines & Boards', logo: azureDevops, tags: ['pipelines', 'vcs'] },
  { name: 'Datadog', desc: 'Metrics & Monitoring', logo: datadog, tags: ['observability'] },
  { name: 'PagerDuty', desc: 'On-Call & Incidents', logo: pagerduty, tags: ['observability'] },
  { name: 'Git', desc: 'Version Control', logo: git, tags: ['vcs'] },
  { name: 'GitHub', desc: 'Version Control', logo: github, tags: ['vcs'] },
  { name: 'Azure', desc: 'Cloud Platform', logo: azure, tags: ['cloud'] },
  { name: 'AWS', desc: 'Cloud Platform', logo: aws, tags: ['cloud'] },
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
  'Hobbyist Coin Collector',
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
