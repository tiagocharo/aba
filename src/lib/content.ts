export const siteConfig = {
  name: "ABA",
  tagline: "Construindo produtos premium através de processos, pessoas e propósito.",
  email: "contato@aba.com.br",
  whatsapp: "(XX) XXXXX-XXXX",
  address: "Cidade / Estado",
  url: "https://aba.com.br",
} as const;

export const navLinks = [
  { href: "#historia", label: "História" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#esg", label: "ESG" },
  { href: "#certificacoes", label: "Certificações" },
  { href: "#clientes", label: "Clientes" },
  { href: "#contato", label: "Contato" },
] as const;

export const hero = {
  headline: "Excelência têxtil premium para grandes marcas.",
  subheadline:
    "Rastreabilidade, certificações e qualidade em toda a cadeia produtiva.",
  primaryCta: { label: "Conheça nossa história", href: "#historia" },
  secondaryCta: { label: "Fale com um especialista", href: "#contato" },
} as const;

export const story = {
  title: "Toda grande empresa nasce de décadas de experiência.",
  paragraphs: [
    "A história começa muito antes da ABA.",
    "Durante mais de 30 anos, Juliano dedicou sua carreira ao desenvolvimento de produtos têxteis para algumas das marcas mais exigentes do mercado brasileiro.",
    "Foram décadas aprendendo que qualidade não acontece por acaso.",
    "Ela é construída fio por fio, processo por processo, inspeção após inspeção.",
    "Após uma trajetória consolidada na indústria, nasceu a ABA.",
    "Uma empresa criada para unir conhecimento técnico, inovação e excelência operacional em uma única estrutura.",
    "Hoje, a ABA entra em seu sexto ano de operação levando ao mercado tudo aquilo que foi construído ao longo de três décadas de experiência.",
  ],
} as const;

export const about = {
  title: "Especialistas em desenvolvimento e produção de artigos premium.",
  text: "Desenvolvemos produtos para marcas que não aceitam compromissos com qualidade. Nossa operação integra engenharia têxtil, controle de processos, rastreabilidade, certificações e uma equipe especializada para garantir excelência em cada etapa produtiva.",
} as const;

export const differentiators = {
  title: "O que nos torna diferentes.",
  subtitle:
    "Cada etapa da nossa operação foi desenhada para marcas que não aceitam compromissos com qualidade.",
  items: [
    {
      title: "Fios Premium",
      description:
        "Trabalhamos com matérias-primas selecionadas, incluindo fios egípcios e Pima, reconhecidos mundialmente por sua qualidade superior.",
      role: "Matéria-prima",
    },
    {
      title: "Rastreabilidade",
      description:
        "Controle completo da origem da matéria-prima até a entrega final.",
      role: "Processos",
    },
    {
      title: "Certificado de Origem",
      description:
        "Garantia de procedência e conformidade em toda cadeia produtiva.",
      role: "Conformidade",
    },
    {
      title: "Desenvolvimento Especializado",
      description:
        "Décadas de experiência aplicadas ao desenvolvimento de artigos de alta performance.",
      role: "Engenharia têxtil",
    },
    {
      title: "Qualidade Premium",
      description: "Processos rigorosos de inspeção e controle.",
      role: "Inspeção",
    },
    {
      title: "Produção Responsável",
      description:
        "Compromisso com práticas sustentáveis e governança corporativa.",
      role: "ESG",
    },
  ],
} as const;

export const esg = {
  title: "Compromisso com o futuro da indústria.",
  subheadline:
    "Excelência operacional também significa responsabilidade ambiental, social e de governança.",
  pillars: [
    {
      title: "Ambiental",
      description: "Redução de impactos e práticas sustentáveis.",
      icon: "leaf" as const,
    },
    {
      title: "Social",
      description: "Valorização das pessoas e relações éticas.",
      icon: "people" as const,
    },
    {
      title: "Governança",
      description: "Transparência, conformidade e gestão responsável.",
      icon: "shield" as const,
    },
  ],
} as const;

export const certifications = {
  title: "Qualidade reconhecida pelo mercado.",
  highlight: {
    title: "Selo Ouro ABVTEX",
    description:
      "A certificação que valida nossos processos, conformidade e compromisso com as melhores práticas da indústria.",
  },
  categories: ["Certificados", "Selos", "Auditorias", "Homologações"],
} as const;

export const processSteps = [
  { id: "algodao", label: "Algodão" },
  { id: "fiacao", label: "Fiação" },
  { id: "tecelagem", label: "Tecelagem" },
  { id: "tinturaria", label: "Tinturaria" },
  { id: "laboratorio", label: "Laboratório" },
  { id: "corte", label: "Corte" },
  { id: "costura", label: "Costura" },
  { id: "acabamento", label: "Acabamento" },
  { id: "qualidade", label: "Controle de Qualidade" },
  { id: "entrega", label: "Entrega" },
] as const;

export const partners = {
  title: "Parceiros que compartilham nosso padrão de excelência.",
  groups: [
    {
      label: "Marcas atendidas",
      logos: ["Marca A", "Marca B", "Marca C", "Marca D", "Marca E", "Marca F"],
    },
    {
      label: "Projetos desenvolvidos",
      logos: ["Projeto 1", "Projeto 2", "Projeto 3", "Projeto 4", "Projeto 5"],
    },
    {
      label: "Parceiros estratégicos",
      logos: ["Parceiro 1", "Parceiro 2", "Parceiro 3", "Parceiro 4"],
    },
  ],
  testimonials: [
    {
      quote:
        "A ABA entrega consistência e rastreabilidade em cada lote — exatamente o que nossa marca exige.",
      name: "Diretor de Produto",
      designation: "Marca parceira",
      src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&h=1000&fit=crop",
    },
    {
      quote:
        "Parceria técnica de alto nível, com processos claros do desenvolvimento à entrega final.",
      name: "Gerente de Supply",
      designation: "Cliente estratégico",
      src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=1000&fit=crop",
    },
    {
      quote:
        "Qualidade premium com prazos cumpridos. A ABA entende o que marcas exigentes precisam.",
      name: "Head de Compras",
      designation: "Grupo de moda",
      src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&h=1000&fit=crop",
    },
  ],
} as const;

export const stats = {
  title: "Números que contam nossa história",
  items: [
    { value: "30+", label: "Anos de experiência acumulada" },
    { value: "5+", label: "Anos de ABA" },
    { value: "2M+", label: "Peças produzidas" },
    { value: "98%", label: "Índice de aprovação" },
    { value: "40+", label: "Marcas atendidas" },
    { value: "Ouro", label: "Classificação ABVTEX" },
  ],
} as const;

export const finalCta = {
  headline: "Quando qualidade é inegociável, cada detalhe importa.",
  text: "A ABA foi construída para atender marcas que valorizam excelência, rastreabilidade e confiabilidade em cada etapa da produção.",
  cta: { label: "Fale com um especialista", href: "#contato" },
} as const;

export const contact = {
  title: "Fale conosco",
  subtitle:
    "Entre em contato com nossa equipe comercial para discutir seu projeto.",
  fields: {
    name: "Nome",
    company: "Empresa",
    role: "Cargo",
    email: "E-mail",
    phone: "Telefone",
    message: "Mensagem",
  },
  sidebar: {
    commercial: { label: "Comercial", value: siteConfig.email },
    whatsapp: { label: "WhatsApp", value: siteConfig.whatsapp },
    address: { label: "Endereço", value: siteConfig.address },
  },
} as const;

export const footer = {
  tagline: siteConfig.tagline,
  links: navLinks,
} as const;
