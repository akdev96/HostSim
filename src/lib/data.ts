import {
  GitBranch,
  ShieldCheck,
  Cpu,
  Cloud,
  Network,
  Dna,
  Terminal,
  Server,
  FileCode,
  KeyRound,
  Lock,
  Route,
  Database,
  Container,
  GitPullRequest,
  Workflow,
  Globe,
  Waypoints,
  Scale,
  MemoryStick,
  FileLock,
  Bug,
  ShieldAlert,
  Key,
  ShieldQuestion,
  Users,
  Scan,
  CloudCog,
  Truck,
  DollarSign,
} from 'lucide-react';

export const navigationLinks = [
  {
    title: 'Simulations',
    isMega: true,
    categories: [
      {
        title: 'Networking',
        icon: Network,
        links: [
          { title: 'DHCP DORA Visualizer', href: '/simulations/dhcp' },
          { title: 'TCP Handshake Timeline', href: '/simulations/tcp-handshake' },
          { title: 'DNS Resolution', href: '/simulations/dns-resolution' },
          { title: 'BGP Route Propagation', href: '/simulations/bgp-propagation' },
          { title: 'Network Topology', href: '/simulations/network-topology' },
          { title: 'Load Balancing', href: '/simulations/load-balancing' },
        ],
      },
      {
        title: 'Systems',
        icon: Cpu,
        links: [
          { title: 'Process Scheduler', href: '/simulations/process-scheduler' },
          { title: 'Memory Management', href: '/simulations/memory-management' },
          { title: 'File System', href: '/simulations/file-system' },
          { title: 'CPU Pipeline', href: '/simulations/cpu-pipeline' },
          { title: 'Cache Hierarchy', href: '/simulations/cache-hierarchy' },
          { title: 'Deadlock Detection', href: '/simulations/deadlock-detection' },
        ],
      },
      {
        title: 'Security',
        icon: ShieldCheck,
        links: [
          { title: 'Firewall Rules Tester', href: '/simulations/firewall-rules' },
          { title: 'Encryption Algorithms', href: '/simulations/encryption-algorithms' },
          { title: 'PKI Certificate Chain', href: '/simulations/pki-chain' },
          { title: 'Attack Simulation', href: '/simulations/attack-simulation' },
          { title: 'Access Control', href: '/simulations/access-control' },
          { title: 'Vulnerability Scanner', href: '/simulations/vulnerability-scanner' },
        ],
      },
      {
        title: 'Cloud',
        icon: Cloud,
        links: [
          { title: 'Autoscaling Simulator', href: '/simulations/autoscaling' },
          { title: 'Container Orchestration', href: '/simulations/container-orchestration' },
          { title: 'Microservices', href: '/simulations/microservices' },
          { title: 'Service Mesh', href: '/simulations/service-mesh' },
          { title: 'CI/CD Pipeline', href: '/simulations/cicd-pipeline' },
          { title: 'Cost Optimization', href: '/simulations/cost-optimization' },
        ],
      },
    ],
  },
  { title: 'Documentation', href: '/documentation' },
  { title: 'Tutorials', href: '/tutorials' },
  { title: 'About', href: '/about' },
];

export const simulationCards = [
  {
    title: 'DHCP DORA Visualizer',
    description: 'See Discover → Offer → Request → ACK in a live timeline.',
    href: '/simulations/dhcp',
    icon: Route,
  },
  {
    title: 'TCP Handshake',
    description: 'Animate SYN/SYN-ACK/ACK with sequence & ack numbers.',
    href: '/simulations/tcp-handshake',
    icon: GitPullRequest,
  },
  {
    title: 'DNS Resolution',
    description: 'Iterative vs. recursive lookups and caching behavior.',
    href: '/simulations/dns-resolution',
    icon: Dna,
  },
  {
    title: 'Autoscaling Simulator',
    description: 'Scale up/down based on latency, QPS, or CPU targets.',
    href: '/simulations/autoscaling',
    icon: Server,
  },
  {
    title: 'Process Scheduler',
    description: 'Compare FCFS, SJF, and Round Robin scheduling algorithms.',
    href: '/simulations/process-scheduler',
    icon: Terminal,
  },
  {
    title: 'Encryption Algorithms',
    description: 'Visualize how AES and RSA encrypt and decrypt data.',
    href: '/simulations/encryption-algorithms',
    icon: KeyRound,
  },
  {
    title: 'File System',
    description: 'Explore how files are stored and managed in a file system.',
    href: '/simulations/file-system',
    icon: FileCode,
  },
    {
    title: 'Container Orchestration',
    description: 'Simulate pod scheduling and service discovery in Kubernetes.',
    href: '/simulations/container-orchestration',
    icon: Container,
  },
];

export const footerSections = [
  {
    title: 'Simulations',
    links: [
      { title: 'Networking Labs', href: '/simulations/networking' },
      { title: 'Systems Simulations', href: '/simulations/systems' },
      { title: 'Security Testing', href: '/simulations/security' },
      { title: 'Cloud Platforms', href: '/simulations/cloud' },
      { title: 'All Categories', href: '/simulations' },
    ],
  },
  {
    title: 'Learn',
    links: [
      { title: 'Getting Started', href: '/learn/getting-started' },
      { title: 'Documentation', href: '/documentation' },
      { title: 'Video Tutorials', href: '/learn/tutorials' },
      { title: 'Best Practices', href: '/learn/best-practices' },
      { title: 'FAQ', href: '/faq' },
    ],
  },
  {
    title: 'Community',
    links: [
      { title: 'Discussion Forums', href: '/community/forums' },
      { title: 'Discord Server', href: '/community/discord' },
      { title: 'GitHub Projects', href: '/community/github' },
      { title: 'Contributor Guide', href: '/community/contribute' },
      { title: 'Bug Reports', href: '/community/bugs' },
    ],
  },
  {
    title: 'Company',
    links: [
      { title: 'About Us', href: '/about' },
      { title: 'Contact', href: '/contact' },
      { title: 'Privacy Policy', href: '/privacy' },
      { title: 'Terms of Service', href: '/terms' },
      { title: 'Careers', href: '/careers' },
    ],
  },
];
