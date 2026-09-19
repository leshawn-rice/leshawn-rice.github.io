import heroFiber from '../assets/hero/hero-fiber.jpg';

import ansible from '../assets/tools/ansible.svg';
import aws from '../assets/tools/aws.svg';
import azure from '../assets/tools/azure.svg';
import azureDevops from '../assets/tools/azure-devops.png';
import docker from '../assets/tools/docker.svg';
import kubernetes from '../assets/tools/kubernetes.svg';
import powershell from '../assets/tools/powershell.png';
import python from '../assets/tools/python.svg';
import terraform from '../assets/tools/terraform.svg';
import vmware from '../assets/tools/vmware.svg';

export const RESUME_URL = '/docs/RiceLeshawn_Resume.pdf';

export const contact = {
  name: 'Leshawn Rice',
  role: 'Platform Engineer',
  city: 'Vancouver, Washington',
  email: 'leshawn.rice@outlook.com',
  linkedin: 'https://www.linkedin.com/in/leshawn-rice/',
  github: 'https://www.github.com/leshawn-rice/',
};

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About Me' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'tools', label: 'Tools' },
  { id: 'education', label: 'Certifications' },
];

export const hero = {
  image: heroFiber,
  title: 'Leshawn Rice',
  role: 'Platform Engineer',
  tagline: 'Fewer tickets. Faster deploys.',
  cta: 'Get in Touch!',
};

export const about = {
  heading: 'Brief History',
  body: [
    "I'm a Platform Engineer with **5 years** of experience building CI/CD pipelines, automating cloud and on-prem systems, and improving **reliability**, **security**, and **delivery speed**.",
    'I work across the whole delivery path, from the infrastructure underneath to the pipelines that carry code into production. My background covers **Linux operations**, **Infrastructure as Code**, **containers**, **observability**, and **source control**, with regular PagerDuty-managed on-call coverage.',
  ],
  // rendered into a two-column grid, filling row by row
  highlights: [
    { text: 'Technical evaluation & cross-team coordination' },
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
      "I lead a project building an **internal developer platform**, giving development teams **self-service deployment** through pre-approved patterns. Work that used to wait weeks on tickets, approvals and hand-built pipelines now ships on demand.",
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
      'I rebuilt a legacy fleet health-check workflow in **Python**, parallelizing its checks to take a full run from **over 24 hours to roughly one** and turning it into something the team could act on.',
      'I delivered **multi-factor authentication** for a custom OpenVPN platform end to end — backend, frontend, data model and client installer.',
      'I wrote the **end-to-end testing framework**, exercising the full product stack on on-premise virtualized infrastructure, keeping heavy workloads off the cloud bill. I also automated environment setup across internal systems with **Ansible**.',
    ],
  },
];

// Public repos, described from what's actually in them. Nothing here touches
// employer work - these are all generic, self-owned artefacts.
export const projects = [
  {
    name: 'Azure Standard Naming',
    repo: 'terraform-azurerm-standard-naming',
    desc: "A Terraform module that builds Azure resource names from a resource type and a set of descriptors, validating each one against Microsoft's naming rules and failing the plan when a name wouldn't be legal. Covered by native `terraform test` suites across a dozen resource types.",
    tags: ['Terraform', 'Azure', 'Tested'],
  },
  {
    name: 'Private Terraform Agent',
    repo: 'terraform-agents',
    desc: 'Runs a self-hosted Terraform agent on Azure Container Instances inside its own virtual network, with remote state and a GitHub Actions workflow driving it, so plans and applies never traverse the public internet.',
    tags: ['Terraform', 'Azure', 'GitHub Actions'],
  },
  {
    name: 'Grabafone',
    repo: 'grabafone',
    desc: 'A REST API over scraped cellular device data, with API-key authentication, user management and a Swagger UI for exploring the endpoints. Express and PostgreSQL behind it, a Python seeder loading the data, and a React front end on top.',
    tags: ['Node.js', 'PostgreSQL', 'Swagger'],
  },
  {
    name: 'Azure Container Group',
    repo: 'terraform-azurerm-container-group',
    desc: 'Wraps Azure Container Instances with a typed `containers` input, so a group declares several containers with their own images, resource limits, commands, ports and secure environment variables. Joins a virtual network by subnet, and derives its own name and tags from the naming and tagging modules.',
    tags: ['Terraform', 'Azure', 'ACI'],
  },
  {
    name: 'FreeBooks',
    repo: 'freebooks',
    desc: 'A command-line tool that converts Audible AAX files into MP3, M4A, FLAC, WAV or Opus. Published to PyPI — `pip install freebooks`.',
    tags: ['Python', 'CLI', 'PyPI'],
  },
  {
    name: 'Jenkins Provisioning',
    repo: 'jenkins-setup',
    desc: 'An Ansible playbook that stands up a Jenkins controller from nothing: security realm, credentials, CLI access and API key bootstrapping, all templated rather than clicked through a setup wizard.',
    tags: ['Ansible', 'Jenkins', 'Python'],
  },
];

export const toolCategories = [
  { id: 'all', label: 'All' },
  { id: 'iac', label: 'Infrastructure as Code' },
  { id: 'delivery', label: 'Containers & Delivery' },
  { id: 'cloud', label: 'Cloud & Virtualization' },
  { id: 'scripting', label: 'Scripting & Automation' },
];

// Ten tools, each with a line tying it to actual work rather than asserting
// familiarity. Everything here traces to the experience cards or the repos.
export const tools = [
  {
    name: 'Terraform',
    logo: terraform,
    tags: ['iac'],
    note: 'Most of the infrastructure I own lives here — web services, on-premise VMs, load balancer config. I publish modules to a private registry and gate them with their own tests and Sentinel policies.',
  },
  {
    name: 'Ansible',
    logo: ansible,
    tags: ['iac'],
    note: 'This is where the unglamorous fleet work happens. I\'ve rolled domain-joining out across production Linux boxes, and configured security tooling, web servers and the management servers behind client onboarding.',
  },
  {
    name: 'Kubernetes',
    logo: kubernetes,
    tags: ['delivery'],
    note: 'I write the Helm charts and services, deploy the AKS underneath them, and I\'m the one working out what went wrong when something breaks in production.',
  },
  {
    name: 'Docker',
    logo: docker,
    tags: ['delivery'],
    note: 'I write the Dockerfiles and the services inside them, then own the pipeline that builds, scans, tests and ships each image.',
  },
  {
    name: 'Azure DevOps',
    logo: azureDevops,
    tags: ['delivery'],
    note: 'Pipelines are most of it — writing them, running them, working out why they broke. I also look after org access, boards, repositories and the self-hosted agent pools.',
  },
  {
    name: 'Azure',
    logo: azure,
    tags: ['cloud'],
    note: 'My daily environment. Application gateways, virtual networks, Key Vault, SQL Server, storage accounts, Functions, Service Bus, private DNS — provisioned, configured and kept running.',
  },
  {
    name: 'AWS',
    logo: aws,
    tags: ['cloud'],
    note: 'Not my primary cloud, but I\'ve written a Boto3 wrapper for standing up EC2 instances to spec, and handled the cost side of an AWS estate.',
  },
  {
    name: 'VMware',
    logo: vmware,
    tags: ['cloud'],
    note: 'I\'ve deployed 40+ VM environments programmatically, and spent plenty of time debugging hosts, datastores and guests — along with the NSX and Pure Storage sitting behind them.',
  },
  {
    name: 'Python',
    logo: python,
    tags: ['scripting'],
    note: 'Five years of it. APIs, database tooling, GUIs, automation — including rewriting a fleet health check that used to take a full day into one that finished in about an hour.',
  },
  {
    name: 'PowerShell',
    logo: powershell,
    tags: ['scripting'],
    note: 'How I manage Windows estates and drive VMware configuration day to day. It\'s also what the OpenVPN client program was built in.',
  },
];

export const education = [
  {
    icon: 'globe',
    title: 'Terraform Associate',
    org: 'HashiCorp',
    year: '2025',
    note: 'HCTA0-003.',
  },
  {
    icon: 'documents',
    title: 'Azure Fundamentals',
    org: 'Microsoft',
    year: '2024',
    note: 'AZ-900.',
  },
  {
    icon: 'toolbox',
    title: 'Software Engineering',
    org: 'Springboard',
    year: '2021',
    note: '700+ hours over nine months, with 1:1 industry mentorship.',
  },
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
