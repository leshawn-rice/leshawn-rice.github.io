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
import linux from '../assets/tools/linux.svg';
import pagerduty from '../assets/tools/pagerduty.svg';
import powershell from '../assets/tools/powershell.png';
import python from '../assets/tools/python.svg';
import terraform from '../assets/tools/terraform.svg';
import vmware from '../assets/tools/vmware.svg';

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
    image: sliderGrey,
    title: 'Leshawn Rice',
    tagline: 'I build the platforms other engineers ship on.',
    cta: 'Get in Touch!',
  },
  {
    image: sliderTl,
    lead: 'Experienced',
    title: 'Platform Engineer',
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
      "I build and own BBSI's **internal developer platform**, which lets developers deploy their own applications into our internal cloud infrastructure through **pre-approved patterns**, instead of waiting on someone else to do it for them.",
      'The old path was a ticket: weeks of queueing and approvals while DevOps stood up the infrastructure by hand and wrote a CI/CD pipeline to match. Now a developer clicks a button and the platform provisions the **infrastructure**, deploys the **application**, and wires up **CI/CD** behind it. Because the patterns are vetted up front, self-service doesn\'t mean giving up security or compliance review.',
      'On the AI side, I brought **AI-assisted test generation** into our SDLC and built the pipelines that vet and onboard proposed **skills and MCP servers** into our agentic environments, so new capabilities arrive through a reviewed path instead of ad hoc.',
      'I work with engineering and security to define the **governance patterns for responsible AI use** — an approved tool and model allowlist, rules for what data may reach a model, a security review before anything is adopted, and usage logging that holds up to audit.',
    ],
  },
  {
    company: 'Barrett Business Services Inc',
    title: 'DevOps Engineer',
    period: 'August 2022 – March 2026',
    icon: 'cloud',
    body: [
      'I wrote the **Terraform** Infrastructure as Code behind **15+ development and production environments** across multiple regions — Azure-primary on **AKS**, with on-premise **VMware/vSphere** as the secondary — which raised deployment consistency and cut manual infrastructure setup.',
      'I built and maintained the **Kubernetes CI/CD pipelines**, with Azure Pipelines driving **Helm** releases to promote services between environments, improving release reliability while satisfying audit and security requirements.',
      'I designed an **internal systems API** in **Node.js** exposing host and service health, infrastructure inventory, and secret and certificate expiry — with alarms that opened tickets automatically before anything lapsed. It gave us real platform visibility and cut troubleshooting time during outages.',
      'I also **led the technical due diligence** on a major platform investment, and supported production in a **PagerDuty on-call rotation**, responding to incidents and coordinating resolution across infrastructure and application teams.',
    ],
  },
  {
    company: 'Uplevel Systems',
    title: 'DevOps Support Developer',
    period: 'August 2021 – August 2022',
    icon: 'monitor',
    body: [
      'I rewrote the **health-check workflow** covering every cloud VM behind our networking fleet: database health, backup presence, CPU, memory and storage headroom, SSH reachability. The original ran serially; I rebuilt it, added checks, and parallelised the SSH work with **Python threading**, taking a full run from **over 24 hours to roughly one**.',
      'I owned **multi-factor authentication** for our custom OpenVPN platform end to end — the backend service, the frontend toggles, the database schema, and a PowerShell-built **client installer** that set up the connection for the user.',
      'I built an **end-to-end testing framework** for the whole product stack, running on a virtualised environment of VMs that simulated the cloud servers and on-site hardware wired together the way a real deployment would be. It exercised cloud-to-hardware communication, **Snort** detection and blocking, allow/deny listing, and MSP sub-client onboarding — and hosting it that way avoided an estimated **$10k a year** against what the same workloads would have cost us in AWS.',
      'I used **Ansible** to automate environment setup and configuration tasks across internal systems.',
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
  { id: 'os-virt', label: 'Operating Systems & Virtualization' },
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
  { name: 'Linux', desc: 'Ubuntu, Fedora, CentOS', logo: linux, tags: ['os-virt'] },
  { name: 'VMware', desc: 'Virtualization', logo: vmware, tags: ['os-virt'] },
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
