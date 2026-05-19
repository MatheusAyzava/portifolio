export const site = {
  name: "Matheus Ayzava",
  brand: "MATHEUS.DEV",
  title: "Matheus Ayzava | Portfolio",
  email: "matheusayzava100@gmail.com",
  phone: "11984865067",
  whatsapp: "https://wa.me/5511984865067",
  linkedin: "https://www.linkedin.com/in/matheus-ayzava/",
  github: "https://github.com/MatheusAyzava",
  githubUser: "MatheusAyzava",
  location: "Votorantim - SP",
  cvPath: "/cv_MatheusAyzava.pdf",
  avatar: "/foto-matheus.png",
  greeting: "Olá, eu sou o Matheus.",
  tagline:
    "Formado em Ciências da Computação pela Faculdade das Américas, em fase final de TCC. Transformo dados e processos em aplicações web do zero ao deploy. Criador do DashFlow e produtos SaaS.",
  typewriterWords: ["Full-Stack", "Dados & BI", "Python & Node"],
  techScroller: [
    "PYTHON",
    "NODE.JS",
    "TYPESCRIPT",
    "REACT",
    "NEXT.JS",
    "SQL",
    "DATABRICKS",
    "POWER BI",
    "SAP",
    "JAVASCRIPT",
    "EXCEL",
    "GIT",
    "N8N",
  ],
  radar: {
    adopt: {
      title: "Adopt",
      desc: "Tecnologias que domino e utilizo em produção com confiança.",
      tags: [
        "Python",
        "Node.js",
        "SQL",
        "JavaScript / TypeScript",
        "React / Next.js",
        "Power BI",
        "Databricks",
        "SAP",
        "Excel",
      ],
    },
    trial: {
      title: "Trial",
      desc: "Em fase de testes e projetos paralelos.",
      tags: ["N8N", "Docker", "ETL"],
    },
    assess: {
      title: "Assess",
      desc: "No radar para aprendizado futuro e experimentação.",
      tags: ["Kotlin", "AWS", "Kubernetes", "Kafka", "Redis"],
    },
  },
  timeline: [
    {
      date: "Fevereiro 2019",
      title: "Primeiro contato com TI",
      side: "left" as const,
      body: "Atuei como vendedor de informática na <strong>Kalunga S.A.</strong>, desenvolvendo comunicação com clientes e base técnica sobre hardware e software.",
    },
    {
      date: "Agosto 2022",
      title: "Fundação Acadêmica",
      side: "right" as const,
      body: "Início do Bacharelado em <strong>Ciências da Computação</strong> na Faculdade das Américas, com foco em algoritmos, banco de dados e engenharia de software.",
    },
    {
      date: "Junho 2023",
      title: "Análise de Dados",
      side: "left" as const,
      body: "Analista de Dados na <strong>Vista-me</strong>: dashboards Power BI, base de assinaturas, fluxo de caixa e integração com Vindi para faturamento e pedidos.",
    },
    {
      date: "Abril 2024",
      title: "Experiência Corporativa",
      side: "right" as const,
      body: "Desenvolvedor Full Stack Jr na <strong>G-Wind Soluções Eólicas</strong>: sistemas web de materiais, estoque, solicitações e passagens com SQL, APIs e deploy em produção.",
    },
    {
      date: "2025 – 2026",
      title: "Visão de Produto",
      side: "left" as const,
      body: "Lançamento de produtos próprios: <strong>DashFlow</strong> (planilhas para dashboards), <strong>NEXO</strong> (IA operacional), landing pages BetaMind e apps em produção no Netlify.",
    },
    {
      date: "Atualmente",
      title: "Formado & TCC",
      side: "right" as const,
      body: "Graduado em <strong>Ciências da Computação</strong>, com disciplinas concluídas e TCC em andamento. Foco em pipelines de dados, automação com N8N e arquitetura de aplicações escaláveis.",
    },
  ],
  mainProject: {
    name: "DashFlow",
    subtitle: "De planilhas a dashboards, em segundos.",
    url: "https://dashauto.netlify.app/",
    description:
      "SaaS que transforma CSV e Excel em KPIs, gráficos e filtros automaticamente. Processamento local no navegador, sem SQL e sem configuração complexa.",
    backend: [
      "Lógica de parsing e detecção de tipos em <strong>TypeScript</strong>.",
      "Processamento de arquivos no cliente para privacidade dos dados.",
      "Arquitetura preparada para evolução com APIs e persistência.",
    ],
    frontend: [
      "Interface em <strong>React</strong> com dashboards interativos.",
      "Gráficos de barras, linhas e pizza com filtros em tempo real.",
      "Design responsivo e experiência focada em velocidade.",
    ],
    stack: [
      "TypeScript",
      "React",
      "Next.js",
      "Chart.js",
      "Netlify",
    ],
  },
  projects: [
    {
      name: "NEXO",
      description:
        "IA operacional para gestão de projetos: atualize tarefas falando, importe cronogramas e receba alertas com próximo passo.",
      url: "https://nexayz.netlify.app/",
      stack: ["React", "TypeScript", "IA"],
    },
    {
      name: "G-Wind Passagens",
      description:
        "Sistema de solicitações de passagens aéreas, rodoviárias e hotéis para a empresa G-Wind.",
      url: "https://gwindapp-passagen.netlify.app/dashboard",
      stack: ["JavaScript", "SQL", "Netlify"],
    },
    {
      name: "Controle Financeiro",
      description:
        "Aplicação web para separação e controle de gastos pessoais com interface simples.",
      url: "https://controle-financeiro12.netlify.app/",
      stack: ["JavaScript", "HTML", "CSS"],
    },
    {
      name: "BetaMind Link",
      description:
        "Landing page de captura para guia gratuito de otimização de LinkedIn com formulário e quiz.",
      url: "https://betamindlink.netlify.app/",
      stack: ["JavaScript", "Landing Page"],
    },
    {
      name: "Diagnóstico NR-1",
      description:
        "Ferramenta de diagnóstico organizacional em saúde mental e riscos psicossociais (BetaMind).",
      url: "https://nlt-1.netlify.app/",
      stack: ["JavaScript", "Quiz"],
    },
    {
      name: "GitHub",
      description:
        "Mais repositórios, experimentos e código aberto no perfil MatheusAyzava.",
      url: "https://github.com/MatheusAyzava",
      stack: ["Python", "Node.js", "TypeScript"],
    },
  ],
  about: {
    experience: {
      period: "2024 - Presente",
      role: "Desenvolvedor Full Stack Jr",
      company: "G-Wind Soluções Eólicas",
      text: "Desenvolvimento de aplicações web para controle de materiais, estoque e solicitações internas. Modelagem SQL, integração com APIs, dashboards e publicação em produção na maior empresa de pás eólicas da América Latina.",
    },
    education: {
      period: "Formado · TCC em andamento",
      role: "Bacharelado em Ciências da Computação",
      company: "Faculdade das Américas",
      text: "Graduação concluída na grade curricular; atualmente desenvolvendo o Trabalho de Conclusão de Curso (TCC). Formação com foco em estruturas de dados, banco de dados, desenvolvimento web e análise de dados.",
    },
    skills: [
      "Python",
      "Node.js",
      "SQL",
      "TypeScript",
      "React",
      "Next.js",
      "Power BI",
      "Databricks",
      "SAP",
      "Excel",
      "N8N",
      "Git",
      "JavaScript",
    ],
    hardSkillsText:
      "Minha stack combina Python, Node.js e React/Next.js no desenvolvimento web, com forte atuação em SQL, Power BI, Databricks, SAP e automação de processos.",
    interests: [
      {
        icon: "chart" as const,
        title: "Análise de Dados",
        text: "Dashboards no Power BI, ETL e tratamento de dados. Transformo planilhas e bases SQL em insights para tomada de decisão.",
      },
      {
        icon: "cloud" as const,
        title: "Arquitetura SaaS",
        text: "Fascinado por levar ideias do protótipo ao deploy. Estudo produtos web escaláveis com foco em entrega rápida e código limpo.",
      },
      {
        icon: "code" as const,
        title: "Automação",
        text: "Automatizo processos com N8N, Excel e integrações via API, reduzindo retrabalho manual em operações e rotinas corporativas.",
      },
      {
        icon: "translate" as const,
        title: "Idiomas",
        text: "Inglês intermediário (leitura e escrita) e básico em conversação. Disponibilidade para mudança para São Paulo.",
      },
    ],
  },
  contact: {
    headline: "Vamos conversar?",
    subtext:
      "Disponível para oportunidades como Desenvolvedor Full-Stack, Analista de Dados ou Back-End.",
  },
};

export const repoDescriptions: Record<string, string> = {
  Dashauto: "Dashboard automático a partir de planilhas - base do DashFlow.",
  dashflow: "Versão do produto DashFlow em desenvolvimento.",
  aplicativodietanamorada111: "Aplicativo de dieta personalizado.",
  appdietatest: "Versao de testes do app de dieta.",
  "controle-financeiro": "Controle financeiro pessoal com separacao de gastos.",
  Solicitacao: "Solicitações de passagens aéreas, rodoviárias e hotéis (G-Wind).",
  "-gwindapp-passagens": "Frontend do sistema de passagens G-Wind.",
  "gwindapp-passagens-backend": "API e backend do sistema de passagens G-Wind.",
  Assistente: "Assistente automatizado com integrações e fluxos de dados.",
  "Sistema-Login": "Sistema de autenticação e controle de acesso.",
  MatheusAyzava: "Perfil e README do GitHub.",
  nexo: "IA operacional para gestão de projetos.",
  betamind: "Landing pages e ferramentas BetaMind.",
};

/** Linguagens quando o repositório está vazio no GitHub (espelha o stack real do projeto). */
export const repoLanguages: Record<string, string[]> = {
  dashflow: ["TypeScript", "CSS"],
  Solicitacao: ["JavaScript", "HTML", "CSS"],
  Assistente: ["Python", "JavaScript"],
  MatheusAyzava: ["Markdown"],
  "controle-financeiro": ["TypeScript", "JavaScript", "CSS"],
};
