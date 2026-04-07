const CATEGORY_META = {
  all: {
    label: "Tudo",
    title: "Todos os produtos",
    summary:
      "Visão completa do catálogo, reunindo mesas, cadeiras, soluções em MDF, aço e linha escolar."
  },
  mesas: {
    label: "Mesas",
    title: "Mesas e superfícies",
    summary:
      "Linhas operacionais, executivas, home office, mesas gamer, divisórias, acessórios modulares e soluções de reunião."
  },
  cadeiras: {
    label: "Cadeiras",
    title: "Cadeiras e assentos",
    summary:
      "Modelos fixos, executivos, longarinas, banquetas e assentos de apoio."
  },
  mdf: {
    label: "Madeira MDF",
    title: "Armários e gaveteiros em MDF",
    summary:
      "Móveis de armazenamento e apoio em MDF/MDP, com armários, gaveteiros, estantes, torres e soluções administrativas."
  },
  aco: {
    label: "Aço",
    title: "Armazenamento em aço",
    summary:
      "Estantes, armários metálicos, arquivos e roupeiros com diferentes composições."
  },
  escolar: {
    label: "Escolar",
    title: "Linha escolar",
    summary:
      "Quadros, conjuntos escolares, baús pedagógicos e apoio para ambientes educacionais."
  }
};

const FEATURE_CHIPS = [
  { id: "all", label: "Tudo" },
  { id: "gavetas", label: "Com gavetas" },
  { id: "portas", label: "Com portas" },
  { id: "sob-encomenda", label: "Sob encomenda" },
  { id: "chave", label: "Com chave" },
  { id: "escolar", label: "Linha escolar" }
];

const PRODUCTS = [
  {
    id: "mesa-em-l",
    category: "mesas",
    section: "Mesas base e reunião",
    name: "Mesa em L",
    featured: true,
    specs: [
      ["Altura", "0,75m"],
      ["Largura", "1,40m"],
      ["Profundidade", "1,40m"]
    ],
    notes: [
      "Acessórios como gavetas, suporte para teclado e carrinho para CPU são opcionais."
    ],
    tags: ["Em L", "Acessórios opcionais"]
  },
  {
    id: "mesa-impressora",
    category: "mesas",
    section: "Mesas base e reunião",
    name: "Mesa Impressora",
    specs: [
      ["Altura", "0,75m"],
      ["Largura", "0,60m"],
      ["Profundidade", "0,45m"]
    ],
    tags: ["Apoio"]
  },
  {
    id: "mesa-reuniao-oval",
    category: "mesas",
    section: "Mesas base e reunião",
    name: "Mesa de Reunião Oval",
    specs: [
      ["Altura", "0,74m"],
      ["Comprimento", "1,80m ou 2,00m"],
      ["Largura", "0,90m"]
    ],
    notes: ["Produzimos tamanhos variados sob encomenda."],
    tags: ["Reunião", "Sob encomenda"]
  },
  {
    id: "mesa-reuniao-retangular-base",
    category: "mesas",
    section: "Mesas base e reunião",
    name: "Mesa de Reunião",
    specs: [
      ["Altura", "0,74m"],
      ["Comprimento", "1,80m ou 2,00m"],
      ["Profundidade", "0,90m"]
    ],
    notes: ["Produzimos tamanhos variados sob encomenda."],
    tags: ["Reunião", "Sob encomenda"]
  },
  {
    id: "mesa-redonda",
    category: "mesas",
    section: "Mesas base e reunião",
    name: "Mesa Redonda",
    specs: [
      ["Altura", "0,75m"],
      ["Largura", "1,20m ou 1,00m"]
    ],
    tags: ["Reunião"]
  },
  {
    id: "mesa-base",
    category: "mesas",
    section: "Mesas base e reunião",
    name: "Mesa Base",
    specs: [
      ["Altura", "0,75m"],
      ["Largura", "1,00m, 1,20m ou 1,50m"],
      ["Profundidade", "0,60m"]
    ],
    notes: [
      "Acessórios como gaveta, suporte para teclado e carrinho para CPU são opcionais.",
      "Produzimos tamanhos variados sob encomenda."
    ],
    tags: ["Operacional", "Sob encomenda", "Acessórios opcionais"]
  },
  {
    id: "conjunto-duas-gavetas",
    category: "mesas",
    section: "Acessórios e módulos",
    name: "Conjunto com Duas Gavetas",
    specs: [
      ["Altura", "0,22m"],
      ["Largura", "0,33m"],
      ["Profundidade", "0,36m"]
    ],
    tags: ["Gavetas", "Acessório"]
  },
  {
    id: "suporte-teclado",
    category: "mesas",
    section: "Acessórios e módulos",
    name: "Suporte para Teclado",
    specs: [
      ["Altura", "0,08m"],
      ["Largura", "0,50m"],
      ["Profundidade", "0,25m"]
    ],
    tags: ["Acessório"]
  },
  {
    id: "carrinho-cpu",
    category: "mesas",
    section: "Acessórios e módulos",
    name: "Carrinho para CPU",
    specs: [
      ["Altura", "0,42m"],
      ["Largura", "0,25m"],
      ["Profundidade", "0,42m"]
    ],
    tags: ["Acessório"]
  },
  {
    id: "conexao-90",
    category: "mesas",
    section: "Acessórios e módulos",
    name: "Conexão 90°",
    specs: [
      ["Altura", "0,60m"],
      ["Largura", "0,60m"],
      ["Profundidade", "0,01m"]
    ],
    tags: ["Acessório", "Conexão"]
  },
  {
    id: "estacao-conexao",
    category: "mesas",
    section: "Acessórios e módulos",
    name: "Estação de Conexão para Mesa em L",
    notes: [
      "Módulo opcional para transformar duas mesas em uma mesa em L."
    ],
    tags: ["Acessório", "Em L", "Modular"]
  },
  {
    id: "mesa-tecnomobili",
    category: "mesas",
    section: "Escrivaninhas e home office",
    name: "Mesa Escritório Tecnomobili",
    specs: [
      ["Altura", "74,5cm"],
      ["Largura", "1,27m"],
      ["Profundidade", "46,5cm"],
      ["Peso Produto", "16,7kg"],
      ["Quantidade de Pés", "não possui"],
      ["Quantidade de Portas", "não possui"],
      ["Quantidade de Gavetas", "não possui"],
      ["Quantidade de Prateleiras", "não possui"],
      ["Quantidade de Puxador", "não possui"],
      ["Peso máximo suportado", "30 Kg"],
      ["Material", "MDP 15mm"]
    ],
    tags: ["Home office", "MDP"]
  },
  {
    id: "escrivaninha-arbete-2gv",
    category: "mesas",
    section: "Escrivaninhas e home office",
    name: "Escrivaninha Arbete 2 GV Cinza 150 cm",
    specs: [
      ["Altura", "74cm"],
      ["Largura", "1,50m"],
      ["Profundidade", "60cm"],
      ["Peso Produto", "36,1kg"],
      ["Quantidade de Pés", "4"],
      ["Quantidade de Portas", "não possui"],
      ["Quantidade de Gavetas", "2"],
      ["Quantidade de Prateleiras", "não possui"],
      ["Quantidade de Puxador", "2"],
      ["Peso máximo suportado", "20 Kg"],
      ["Material", "MDP 25mm"]
    ],
    tags: ["Gavetas", "MDP"]
  },
  {
    id: "escrivaninha-computador-notebook",
    category: "mesas",
    section: "Escrivaninhas e home office",
    name: "Escrivaninha/Mesa p/Escritório Computador Notebook",
    specs: [
      ["Altura", "75cm"],
      ["Largura", "1m"],
      ["Profundidade", "60cm"],
      ["Peso Produto", "10kg"],
      ["Quantidade de Pés", "4"],
      ["Quantidade de Portas", "não possui"],
      ["Quantidade de Gavetas", "não possui"],
      ["Quantidade de Prateleiras", "não possui"],
      ["Quantidade de Puxador", "não possui"],
      ["Peso máximo suportado", "45 Kg"],
      ["Material", "MDF 14mm"]
    ],
    tags: ["Home office", "MDF"]
  },
  {
    id: "escrivaninha-4-gavetas",
    category: "mesas",
    section: "Escrivaninhas e home office",
    name: "Escrivaninha 4 Gavetas",
    specs: [
      ["Altura", "75,5cm"],
      ["Largura", "1,20m"],
      ["Profundidade", "46,5cm"],
      ["Peso Produto", "30,21kg"],
      ["Quantidade de Pés", "6"],
      ["Quantidade de Portas", "não possui"],
      ["Quantidade de Gavetas", "4"],
      ["Quantidade de Prateleiras", "não possui"],
      ["Quantidade de Puxador", "4"],
      ["Peso máximo suportado", "45 Kg"],
      ["Material", "MDP 14mm"]
    ],
    tags: ["Gavetas", "MDP"]
  },
  {
    id: "mesa-professor",
    category: "mesas",
    section: "Mesas funcionais",
    name: "Mesa professor",
    specs: [
      ["Altura", "75cm"],
      ["Largura", "1,30m"],
      ["Profundidade", "68cm"],
      ["Peso Produto", "16,7kg"],
      ["Quantidade de Pés", "não possui"],
      ["Quantidade de Portas", "não possui"],
      ["Quantidade de Gavetas", "não possui"],
      ["Quantidade de Prateleiras", "não possui"],
      ["Quantidade de Puxador", "não possui"],
      ["Peso máximo suportado", "42 Kg"],
      ["Material", "MDF 15mm"]
    ],
    tags: ["Funcional", "MDF"]
  },
  {
    id: "mesa-escritorio-angular",
    category: "mesas",
    section: "Mesas funcionais",
    name: "Mesa de escritório angular",
    specs: [
      ["Altura", "74cm"],
      ["Largura", "1,20 x 1,20m"],
      ["Profundidade", "60cm"],
      ["Peso Produto", "40kg"],
      ["Quantidade de Pés", "não possui"],
      ["Quantidade de Portas", "não possui"],
      ["Quantidade de Gavetas", "não possui"],
      ["Quantidade de Prateleiras", "não possui"],
      ["Quantidade de Puxador", "não possui"],
      ["Peso máximo suportado", "48 Kg"],
      ["Material", "MDP 25mm"]
    ],
    tags: ["Angular", "MDP"]
  },
  {
    id: "mesa-happy",
    category: "mesas",
    section: "Mesas funcionais",
    name: "Mesa happy",
    specs: [
      ["Altura", "77cm"],
      ["Largura", "1,20m"],
      ["Profundidade", "70cm"],
      ["Peso Produto", "18,6kg"],
      ["Quantidade de Pés", "4"],
      ["Quantidade de Portas", "não possui"],
      ["Quantidade de Gavetas", "não possui"],
      ["Quantidade de Prateleiras", "não possui"],
      ["Quantidade de Puxador", "não possui"],
      ["Peso máximo suportado", "50 Kg"],
      ["Material", "MDP 14mm"]
    ],
    tags: ["Funcional", "MDP"]
  },
  {
    id: "mesa-pratica",
    category: "mesas",
    section: "Mesas funcionais",
    name: "Mesa prática",
    specs: [
      ["Altura", "74cm"],
      ["Largura", "1,20m"],
      ["Profundidade", "60cm"],
      ["Peso Produto", "30,21kg"],
      ["Quantidade de Pés", "4"],
      ["Quantidade de Portas", "não possui"],
      ["Quantidade de Gavetas", "não possui"],
      ["Quantidade de Prateleiras", "não possui"],
      ["Quantidade de Puxador", "não possui"],
      ["Peso máximo suportado", "40 Kg"],
      ["Material", "MDP 40mm"]
    ],
    tags: ["Funcional", "MDP"]
  },
  {
    id: "mesa-happy-em-l",
    category: "mesas",
    section: "Mesas executivas e corporativas",
    name: "Mesa happy em L",
    specs: [
      ["Altura", "75cm"],
      ["Largura", "1,30m"],
      ["Profundidade", "50cm"],
      ["Peso Produto", "16,7kg"],
      ["Quantidade de Pés", "não possui"],
      ["Quantidade de Portas", "não possui"],
      ["Quantidade de Gavetas", "não possui"],
      ["Quantidade de Prateleiras", "não possui"],
      ["Quantidade de Puxador", "não possui"],
      ["Peso máximo suportado", "15 Kg"],
      ["Material", "madeira"]
    ],
    tags: ["Em L", "Executiva"]
  },
  {
    id: "mesa-diretor-em-l",
    category: "mesas",
    section: "Mesas executivas e corporativas",
    name: "Mesa diretor em L",
    specs: [
      ["Altura", "73,5cm"],
      ["Largura", "1,92m"],
      ["Profundidade", "1,60m"],
      ["Peso Produto", "85kg"],
      ["Quantidade de Pés", "8"],
      ["Quantidade de Portas", "3"],
      ["Quantidade de Gavetas", "3"],
      ["Quantidade de Prateleiras", "3"],
      ["Quantidade de Puxador", "3"],
      ["Peso máximo suportado", "92 Kg"],
      ["Material", "MDP 30mm"]
    ],
    tags: ["Executiva", "Em L", "Portas", "Gavetas"]
  },
  {
    id: "mesa-plataforma-dupla",
    category: "mesas",
    section: "Mesas executivas e corporativas",
    name: "Mesa plataforma dupla",
    specs: [
      ["Altura", "77cm"],
      ["Largura", "2,20m"],
      ["Profundidade", "1,20m"],
      ["Peso Produto", "10,6kg"],
      ["Quantidade de Pés", "não possui"],
      ["Quantidade de Portas", "não possui"],
      ["Quantidade de Gavetas", "não possui"],
      ["Quantidade de Prateleiras", "não possui"],
      ["Quantidade de Puxador", "não possui"],
      ["Peso máximo suportado", "75kg"],
      ["Material", "MDP 24mm"]
    ],
    tags: ["Corporativa", "Plataforma"]
  },
  {
    id: "mesa-reuniao-corporativa",
    category: "mesas",
    section: "Mesas executivas e corporativas",
    name: "Mesa de reunião",
    specs: [
      ["Altura", "77,5cm"],
      ["Largura", "2m"],
      ["Profundidade", "1m"],
      ["Peso Produto", "8,45kg"],
      ["Quantidade de Pés", "não possui"],
      ["Quantidade de Portas", "não possui"],
      ["Quantidade de Gavetas", "não possui"],
      ["Quantidade de Prateleiras", "não possui"],
      ["Quantidade de Puxador", "não possui"],
      ["Peso máximo suportado", "72 Kg"],
      ["Material", "MDP 40mm"]
    ],
    tags: ["Reunião", "Corporativa"]
  },
  {
    id: "guiche-atendimento",
    category: "mesas",
    section: "Atendimento e conjuntos",
    name: "Guichê atendimento",
    specs: [
      ["Altura", "1,20m"],
      ["Largura", "0,47m"],
      ["Profundidade", "1,65m"],
      ["Peso Produto", "16,7kg (por módulo)"],
      ["Quantidade de Pés", "não possui"],
      ["Quantidade de Portas", "não possui"],
      ["Quantidade de Gavetas", "não possui"],
      ["Quantidade de Prateleiras", "não possui"],
      ["Quantidade de Puxador", "não possui"],
      ["Peso máximo suportado", "15 Kg (por módulo)"],
      ["Material", "MDP"]
    ],
    tags: ["Atendimento", "Modular"]
  },
  {
    id: "smart-04-moveis-fortline",
    category: "mesas",
    section: "Atendimento e conjuntos",
    name: "Smart 04 Móveis Fortline",
    contents: [
      "Armário Executivo",
      "Armário Médio",
      "Armário Diretor",
      "Mesa de Trabalho Reta",
      "Gaveteiro Fixo 2 Gavetas"
    ],
    tags: ["Conjunto", "Executivo", "Gavetas", "Portas"]
  },
  {
    id: "escrivaninha-politorno",
    category: "mesas",
    section: "Atendimento e conjuntos",
    name: "Escrivaninha politorno",
    specs: [
      ["Altura", "75,5cm"],
      ["Largura", "1,51m"],
      ["Profundidade", "46,5cm"],
      ["Peso Produto", "49,32kg"],
      ["Quantidade de Pés", "não possui"],
      ["Quantidade de Portas", "2"],
      ["Quantidade de Gavetas", "3"],
      ["Quantidade de Prateleiras", "1"],
      ["Quantidade de Puxador", "5"],
      ["Peso máximo suportado", "92 Kg"],
      ["Material", "MDP 15mm"]
    ],
    tags: ["Conjunto", "Portas", "Gavetas", "MDP"]
  },
  {
    id: "conjunto-em-l-gm",
    category: "mesas",
    section: "Atendimento e conjuntos",
    name: "Conjunto em L GM",
    specs: [
      ["Altura", "77,5cm"],
      ["Largura", "2m"],
      ["Profundidade", "1m"],
      ["Peso Produto", "98,50kg"],
      ["Quantidade de Pés", "20"],
      ["Quantidade de Portas", "4"],
      ["Quantidade de Gavetas", "4"],
      ["Quantidade de Prateleiras", "4"],
      ["Quantidade de Puxador", "8"],
      ["Peso máximo suportado", "72 Kg"],
      ["Material", "MDP 30mm"]
    ],
    tags: ["Conjunto", "Em L", "Portas", "Gavetas"]
  },
  {
    id: "mesa-redonda-pratika",
    category: "mesas",
    section: "Linha Pratika",
    name: "Mesa Redonda Pratika",
    specs: [
      ["Medida", "0,90"],
      ["Espessura", "25MM"]
    ],
    colors: ["Cinza", "Nogal"],
    tags: ["Pratika", "Reunião"]
  },
  {
    id: "mesa-reuniao-retangular-pratika",
    category: "mesas",
    section: "Linha Pratika",
    name: "Mesa de Reunião Retangular Pratika",
    specs: [
      ["Medidas", "200 x 1,20 x 0,75"]
    ],
    colors: ["Cinza", "Nogal"],
    tags: ["Pratika", "Reunião"]
  },
  {
    id: "tomada-mesa-pratika",
    category: "mesas",
    section: "Linha Pratika",
    name: "Tomada da Mesa de Reunião Retangular Pratika",
    tags: ["Pratika", "Acessório"]
  },
  {
    id: "cadeira-fixa",
    category: "cadeiras",
    section: "Operacionais e fixas",
    name: "Cadeira Fixa",
    specs: [
      ["Altura", "0,90m"],
      ["Largura", "0,42m"],
      ["Profundidade", "0,49m"]
    ],
    notes: [
      "Com ou sem braço.",
      "Nas cores azul e preto.",
      "Disponível em tecido ou courino."
    ],
    colors: ["Azul", "Preto"],
    tags: ["Fixa"]
  },
  {
    id: "cadeira-fixa-iso",
    category: "cadeiras",
    section: "Operacionais e fixas",
    name: "Cadeira Fixa ISO",
    specs: [
      ["Altura", "0,81m"],
      ["Largura", "0,51m"],
      ["Profundidade", "0,44m"]
    ],
    notes: ["Consultar cores disponíveis."],
    tags: ["Fixa", "ISO"]
  },
  {
    id: "cadeira-secretaria",
    category: "cadeiras",
    section: "Operacionais e fixas",
    name: "Cadeira Secretária",
    specs: [
      ["Altura", "0,94m"],
      ["Largura", "0,56m"],
      ["Profundidade", "0,47m"]
    ],
    notes: [
      "Com ou sem braço.",
      "Nas cores azul e preto.",
      "Disponível em tecido ou courino."
    ],
    colors: ["Azul", "Preto"],
    tags: ["Operacional"]
  },
  {
    id: "cadeira-office",
    category: "cadeiras",
    section: "Operacionais e fixas",
    name: "Cadeira Office",
    specs: [
      ["Altura", "0,89m"],
      ["Largura", "0,45m"],
      ["Profundidade", "0,46m"]
    ],
    tags: ["Operacional"]
  },
  {
    id: "cadeira-plus",
    category: "cadeiras",
    section: "Operacionais e fixas",
    name: "Cadeira Plus",
    specs: [
      ["Altura", "0,95m"],
      ["Largura", "0,47m"],
      ["Profundidade", "0,47m"]
    ],
    tags: ["Operacional"]
  },
  {
    id: "cadeira-pp",
    category: "cadeiras",
    section: "Operacionais e fixas",
    name: "Cadeira PP",
    specs: [
      ["Altura", "1,00m"],
      ["Largura", "0,47m"],
      ["Profundidade", "0,46m"]
    ],
    tags: ["Operacional"]
  },
  {
    id: "cadeira-presidente",
    category: "cadeiras",
    section: "Executivas",
    name: "Cadeira Presidente",
    specs: [
      ["Altura", "1,20m"],
      ["Largura", "0,57m"],
      ["Profundidade", "0,53m"]
    ],
    notes: [
      "Com ou sem braço.",
      "Nas cores azul e preto.",
      "Disponível em tecido ou courino."
    ],
    colors: ["Azul", "Preto"],
    tags: ["Executiva", "Presidência"]
  },
  {
    id: "cadeira-diretor",
    category: "cadeiras",
    section: "Executivas",
    name: "Cadeira Diretor",
    specs: [
      ["Altura", "1,09m"],
      ["Largura", "0,49m"],
      ["Profundidade", "0,46m"]
    ],
    notes: [
      "Com ou sem braço.",
      "Nas cores azul e preto.",
      "Disponível em tecido ou courino."
    ],
    colors: ["Azul", "Preto"],
    tags: ["Executiva"]
  },
  {
    id: "cadeira-executiva",
    category: "cadeiras",
    section: "Executivas",
    name: "Cadeira Executiva",
    specs: [
      ["Altura", "1,09m"],
      ["Largura", "0,49m"],
      ["Profundidade", "0,46m"]
    ],
    notes: [
      "Com ou sem braço.",
      "Nas cores azul e preto.",
      "Disponível em tecido ou courino."
    ],
    colors: ["Azul", "Preto"],
    tags: ["Executiva"]
  },
  {
    id: "cadeira-confort",
    category: "cadeiras",
    section: "Executivas",
    name: "Cadeira Confort",
    specs: [
      ["Altura", "1,26m"],
      ["Largura", "0,52m"],
      ["Profundidade", "0,54m"]
    ],
    tags: ["Executiva", "Ergonômica"]
  },
  {
    id: "cadeira-executiva-alta",
    category: "cadeiras",
    section: "Executivas",
    name: "Cadeira Executiva Alta",
    specs: [
      ["Altura", "1,13m"],
      ["Largura", "0,43m"],
      ["Profundidade", "0,56m"]
    ],
    tags: ["Executiva"]
  },
  {
    id: "longarina-iso",
    category: "cadeiras",
    section: "Longarinas",
    name: "Longarina ISO",
    options: [
      "2 lugares: altura 0,75m, largura 1,00m, profundidade 0,44m",
      "3 lugares: altura 0,75m, largura 1,55m, profundidade 0,44m",
      "4 lugares: altura 0,75m, largura 1,76m, profundidade 0,44m",
      "5 lugares: altura 0,75m, largura 2,32m, profundidade 0,44m"
    ],
    tags: ["Longarina", "ISO"]
  },
  {
    id: "longarina-estofada",
    category: "cadeiras",
    section: "Longarinas",
    name: "Longarina estofada",
    notes: [
      "Produzimos longarina estofada para 2, 3, 4 e 5 lugares.",
      "Disponível nas cores azul e preto.",
      "Disponível em tecido ou courino."
    ],
    colors: ["Azul", "Preto"],
    tags: ["Longarina", "Sob encomenda"]
  },
  {
    id: "cadeira-mocho",
    category: "cadeiras",
    section: "Apoio e banquetas",
    name: "Cadeira Mocho",
    specs: [
      ["Altura", "0,83m"],
      ["Largura", "0,36m"],
      ["Profundidade", "0,36m"]
    ],
    tags: ["Apoio"]
  },
  {
    id: "mocho-sem-encosto",
    category: "cadeiras",
    section: "Apoio e banquetas",
    name: "Mocho sem encosto",
    specs: [
      ["Altura", "0,52m"],
      ["Largura", "0,36m"],
      ["Profundidade", "0,36m"]
    ],
    tags: ["Apoio"]
  },
  {
    id: "banqueta-alta-a",
    category: "cadeiras",
    section: "Apoio e banquetas",
    name: "Banqueta Alta A",
    specs: [
      ["Altura", "0,95m"],
      ["Diâmetro do assento", "0,32m"]
    ],
    tags: ["Banqueta"]
  },
  {
    id: "banqueta-alta-b",
    category: "cadeiras",
    section: "Apoio e banquetas",
    name: "Banqueta Alta B",
    specs: [
      ["Altura", "0,80m"],
      ["Diâmetro do assento", "0,32m"]
    ],
    tags: ["Banqueta"]
  },
  {
    id: "cadeira-pe-palito",
    category: "cadeiras",
    section: "Apoio e banquetas",
    name: "Cadeira Pé Palito",
    specs: [
      ["Altura", "0,82m"],
      ["Largura", "0,46m"],
      ["Profundidade", "50cm"]
    ],
    tags: ["Design"]
  },
  {
    id: "armario-baixo",
    category: "mdf",
    section: "Armários e gaveteiros",
    name: "Armário Baixo",
    specs: [
      ["Altura", "0,75m"],
      ["Largura", "0,80m"],
      ["Profundidade", "0,40m"]
    ],
    notes: ["Possui dois níveis.", "Acompanha chave."],
    tags: ["Armário", "Portas", "Chave"]
  },
  {
    id: "arquivo-4g-mdf",
    category: "mdf",
    section: "Armários e gaveteiros",
    name: "Arquivo 4G",
    specs: [
      ["Altura", "1,28m"],
      ["Largura", "0,45m"],
      ["Profundidade", "0,45m"]
    ],
    notes: ["Acompanha chave."],
    tags: ["Arquivo", "Gavetas", "Chave"]
  },
  {
    id: "armario-fechado",
    category: "mdf",
    section: "Armários e gaveteiros",
    name: "Armário fechado",
    specs: [
      ["Altura", "1,60m"],
      ["Largura", "0,80m"],
      ["Profundidade", "0,40m"]
    ],
    notes: ["Possui quatro níveis.", "Acompanha chave."],
    tags: ["Armário", "Portas", "Chave"]
  },
  {
    id: "armario-semi-aberto",
    category: "mdf",
    section: "Armários e gaveteiros",
    name: "Armário Semi Aberto",
    specs: [
      ["Altura", "1,60m"],
      ["Largura", "0,80m"],
      ["Profundidade", "0,40m"]
    ],
    notes: ["Possui quatro níveis.", "Acompanha chave."],
    tags: ["Armário", "Portas", "Chave"]
  },
  {
    id: "gaveteiro-volante-3g",
    category: "mdf",
    section: "Armários e gaveteiros",
    name: "Gaveteiro Volante 3G",
    specs: [
      ["Altura", "0,68m"],
      ["Largura", "0,45m"],
      ["Profundidade", "0,45m"]
    ],
    notes: ["Acompanha chave."],
    tags: ["Gaveteiro", "Gavetas", "Chave"]
  },
  {
    id: "gaveteiro-volante-4g",
    category: "mdf",
    section: "Armários e gaveteiros",
    name: "Gaveteiro Volante 4G",
    specs: [
      ["Altura", "0,68m"],
      ["Largura", "0,45m"],
      ["Profundidade", "0,45m"]
    ],
    notes: ["Acompanha chave."],
    tags: ["Gaveteiro", "Gavetas", "Chave"]
  },
  {
    id: "roupeiro-8-curta",
    category: "aco",
    section: "Roupeiros",
    name: "Roupeiro 8 Curta",
    code: "ROP1108",
    specs: [
      ["Altura", "1,98m"],
      ["Largura", "0,61m"],
      ["Profundidade", "0,40m"]
    ],
    notes: [
      "Com pitão para cadeado ou opção de fechadura.",
      "Acompanham pés."
    ],
    tags: ["Roupeiro", "Cadeado"]
  },
  {
    id: "roupeiro-8-longa",
    category: "aco",
    section: "Roupeiros",
    name: "Roupeiro 8 Longa",
    code: "ROP1208",
    specs: [
      ["Altura", "1,98m"],
      ["Largura", "1,23m"],
      ["Profundidade", "0,40m"]
    ],
    notes: [
      "Com pitão para cadeado ou opção de fechadura.",
      "Acompanham pés."
    ],
    tags: ["Roupeiro", "Cadeado"]
  },
  {
    id: "roupeiro-9-longa",
    category: "aco",
    section: "Roupeiros",
    name: "Roupeiro 9 Longa",
    code: "ROP1269",
    specs: [
      ["Altura", "1,98m"],
      ["Largura", "0,90m"],
      ["Profundidade", "0,40m"]
    ],
    notes: [
      "Com pitão para cadeado ou opção de fechadura.",
      "Acompanham pés."
    ],
    tags: ["Roupeiro", "Cadeado"]
  },
  {
    id: "roupeiro-12-curta",
    category: "aco",
    section: "Roupeiros",
    name: "Roupeiro 12 curta",
    code: "ROP1112",
    specs: [
      ["Altura", "1,98m"],
      ["Largura", "0,90m"],
      ["Profundidade", "0,40m"]
    ],
    notes: [
      "Com pitão para cadeado ou opção de fechadura.",
      "Acompanham pés."
    ],
    tags: ["Roupeiro", "Cadeado"]
  },
  {
    id: "roupeiro-16-curta",
    category: "aco",
    section: "Roupeiros",
    name: "Roupeiro 16 Curta",
    code: "ROP1116",
    specs: [
      ["Altura", "1,98m"],
      ["Largura", "1,23m"],
      ["Profundidade", "0,40m"]
    ],
    notes: [
      "Com pitão para cadeado ou opção de fechadura.",
      "Acompanham pés."
    ],
    tags: ["Roupeiro", "Cadeado"]
  },
  {
    id: "roupeiro-20-curta",
    category: "aco",
    section: "Roupeiros",
    name: "Roupeiro 20 curta",
    code: "ROP1120",
    specs: [
      ["Altura", "1,98m"],
      ["Largura", "1,23m"],
      ["Profundidade", "0,40m"]
    ],
    notes: [
      "Com pitão para cadeado ou opção de fechadura.",
      "Acompanham pés."
    ],
    tags: ["Roupeiro", "Cadeado"]
  },
  {
    id: "estante-aco",
    category: "aco",
    section: "Estantes e armários",
    name: "Estante Aço",
    code: "EST1001",
    specs: [
      ["Quantidade padrão", "6 bandejas com posição regulável e de fácil montagem"],
      ["Capacidade por bandeja", "25kg com peso bem distribuído"]
    ],
    notes: [
      "Bandeja excedente vendida separadamente.",
      "Reforço em X vendido separadamente.",
      "Fazemos estantes que suportam pesos maiores sob encomenda."
    ],
    options: [
      "1,98m altura / 0,92m largura / 0,22m profundidade",
      "1,98m altura / 0,92m largura / 0,28m profundidade",
      "1,98m altura / 0,92m largura / 0,30m profundidade",
      "1,98m altura / 0,92m largura / 0,40m profundidade",
      "1,98m altura / 0,92m largura / 0,50m profundidade",
      "1,98m altura / 0,92m largura / 0,60m profundidade"
    ],
    tags: ["Estante", "Sob encomenda"]
  },
  {
    id: "armario-aco-4b",
    category: "aco",
    section: "Estantes e armários",
    name: "Armário Aço 4B",
    code: "ARM1002",
    specs: [
      ["Bandejas", "4 bandejas"],
      ["Capacidade por bandeja", "25kg com peso bem distribuído"]
    ],
    notes: [
      "Acompanham pés com sapatas plásticas e chave.",
      "Possui bandejas com posição regulável."
    ],
    options: [
      "1,98m altura / 0,90m largura / 0,40m profundidade",
      "1,98m altura / 1,20m largura / 0,40m profundidade"
    ],
    tags: ["Armário", "Portas", "Chave"]
  },
  {
    id: "armario-aco-3b",
    category: "aco",
    section: "Estantes e armários",
    name: "Armário Aço 3B",
    code: "ARM1001",
    specs: [
      ["Bandejas", "3 bandejas"],
      ["Capacidade por bandeja", "25kg com peso bem distribuído"]
    ],
    notes: [
      "Acompanham pés com sapatas plásticas e chave.",
      "Possui bandejas com posição regulável."
    ],
    options: [
      "1,50m altura / 0,75m largura / 0,35m profundidade",
      "1,70m altura / 0,75m largura / 0,35m profundidade",
      "1,80m altura / 0,75m largura / 0,35m profundidade"
    ],
    tags: ["Armário", "Portas", "Chave"]
  },
  {
    id: "arquivo-aco-4g",
    category: "aco",
    section: "Estantes e armários",
    name: "Arquivo Aço 4G",
    code: "ARQ1001",
    specs: [
      ["Altura", "1,31m"],
      ["Largura", "0,46m"],
      ["Profundidade", "0,60m ou 0,50m"]
    ],
    notes: ["Acompanham pés."],
    tags: ["Arquivo", "Gavetas"]
  },
  {
    id: "roupeiro-2-longa",
    category: "aco",
    section: "Roupeiros",
    name: "Roupeiro 2 Longa",
    code: "ROP1202",
    specs: [
      ["Altura", "1,98m"],
      ["Largura", "0,33m"],
      ["Profundidade", "0,40m"]
    ],
    notes: ["Com pitão para cadeado.", "Acompanham pés."],
    tags: ["Roupeiro", "Cadeado"]
  },
  {
    id: "roupeiro-4-longa",
    category: "aco",
    section: "Roupeiros",
    name: "Roupeiro 4 Longa",
    code: "ROP1204",
    specs: [
      ["Altura", "1,98m"],
      ["Largura", "0,61m"],
      ["Profundidade", "0,40m"]
    ],
    notes: ["Com pitão para cadeado.", "Acompanham pés."],
    tags: ["Roupeiro", "Cadeado"]
  },
  {
    id: "roupeiro-4-curta",
    category: "aco",
    section: "Roupeiros",
    name: "Roupeiro 4 Curta",
    code: "ROP1104",
    specs: [
      ["Altura", "1,98m"],
      ["Largura", "0,33m"],
      ["Profundidade", "0,40m"]
    ],
    notes: ["Com pitão para cadeado.", "Acompanham pés."],
    tags: ["Roupeiro", "Cadeado"]
  },
  {
    id: "roupeiro-6-curta",
    category: "aco",
    section: "Roupeiros",
    name: "Roupeiro 6 Curta",
    code: "ROP1106",
    specs: [
      ["Altura", "1,98m"],
      ["Largura", "0,61m"],
      ["Profundidade", "0,40m"]
    ],
    notes: [
      "Com pitão para cadeado ou opção de fechadura.",
      "Acompanham pés."
    ],
    tags: ["Roupeiro", "Cadeado"]
  },
  {
    id: "roupeiro-6-longa",
    category: "aco",
    section: "Roupeiros",
    name: "Roupeiro 6 Longa",
    code: "ROP1206",
    specs: [
      ["Altura", "1,98m"],
      ["Largura", "0,90m"],
      ["Profundidade", "0,40m"]
    ],
    notes: [
      "Com pitão para cadeado ou opção de fechadura.",
      "Acompanham pés."
    ],
    tags: ["Roupeiro", "Cadeado"]
  },
  {
    id: "bau-pedagogico",
    category: "escolar",
    section: "Quadros e apoio",
    name: "Baú Pedagógico",
    code: "BAU2001",
    specs: [
      ["Altura", "0,90m"],
      ["Largura", "1,20m"],
      ["Profundidade", "0,40m"]
    ],
    tags: ["Escolar", "Apoio"]
  },
  {
    id: "quadro-branco",
    category: "escolar",
    section: "Quadros e apoio",
    name: "Quadro Branco",
    code: "QUA2002",
    options: [
      "0,45m altura / 0,60m largura",
      "0,60m altura / 0,90m largura",
      "0,90m altura / 1,20m largura",
      "1,20m altura / 1,50m largura",
      "1,20m altura / 2,00m largura",
      "1,20m altura / 3,00m largura"
    ],
    notes: ["Para quadros brancos, fabricamos todos os tamanhos."],
    tags: ["Escolar", "Quadro"]
  },
  {
    id: "quadro-cortica",
    category: "escolar",
    section: "Quadros e apoio",
    name: "Quadro Cortiça",
    code: "QUA2003",
    options: [
      "0,45m altura / 0,60m largura",
      "0,60m altura / 0,90m largura",
      "0,90m altura / 1,20m largura",
      "1,20m altura / 1,50m largura",
      "1,20m altura / 2,00m largura",
      "1,20m altura / 3,00m largura"
    ],
    notes: [
      "Para quadros de cortiça e de avisos, fabricamos nos tamanhos marcados no material."
    ],
    tags: ["Escolar", "Quadro"]
  },
  {
    id: "quadro-avisos",
    category: "escolar",
    section: "Quadros e apoio",
    name: "Quadro de Avisos",
    code: "QUA2004",
    options: [
      "0,45m altura / 0,60m largura",
      "0,60m altura / 0,90m largura",
      "0,90m altura / 1,20m largura",
      "1,20m altura / 1,50m largura",
      "1,20m altura / 2,00m largura",
      "1,20m altura / 3,00m largura"
    ],
    notes: [
      "Para quadros de cortiça e de avisos, fabricamos nos tamanhos marcados no material."
    ],
    tags: ["Escolar", "Quadro"]
  },
  {
    id: "conjunto-ensino-medio",
    category: "escolar",
    section: "Conjuntos escolares",
    name: "Conjunto Escolar Ensino Médio",
    code: "CJT1001",
    specs: [
      ["Mesa - altura", "0,75m"],
      ["Mesa - largura", "0,60m"],
      ["Mesa - profundidade", "0,45m"],
      ["Cadeira - altura", "0,81m"],
      ["Cadeira - largura", "0,51m"],
      ["Cadeira - profundidade", "0,44m"]
    ],
    tags: ["Escolar", "Conjunto"]
  },
  {
    id: "conjunto-educacao-infantil",
    category: "escolar",
    section: "Conjuntos escolares",
    name: "Conjunto Escolar Educação Infantil",
    code: "CJT1002",
    specs: [
      ["Mesa - altura", "0,50m"],
      ["Mesa - largura", "0,55m"],
      ["Mesa - profundidade", "0,35m"],
      ["Cadeira - altura", "0,63m"],
      ["Cadeira - largura", "0,33m"],
      ["Cadeira - profundidade", "0,39m"]
    ],
    tags: ["Escolar", "Conjunto"]
  },
  {
    id: "cadeira-universitaria",
    category: "escolar",
    section: "Cadeiras e apoio",
    name: "Cadeira Universitária",
    code: "CAD1002",
    specs: [
      ["Altura", "0,85m"],
      ["Largura", "0,62m"],
      ["Profundidade", "0,63m"]
    ],
    notes: [
      "Produzimos o modelo com material ISO e também estofado."
    ],
    tags: ["Escolar", "Cadeira", "Sob encomenda"]
  },
  {
    id: "conjunto-sextavado",
    category: "escolar",
    section: "Conjuntos escolares",
    name: "Conjunto Sextavado",
    code: "CJT1005",
    notes: ["Produto com medidas detalhadas não informadas."],
    tags: ["Escolar", "Conjunto"]
  },
  {
    id: "conjunto-oitavado",
    category: "escolar",
    section: "Conjuntos escolares",
    name: "Conjunto Oitavado",
    code: "CJT1004",
    specs: [
      ["Altura", "0,59m"],
      ["Largura", "1,45m"],
      ["Profundidade", "1,45m"]
    ],
    notes: [
      "Medidas informadas para a mesa completa.",
      "Produzimos conjunto sextavado sob encomenda."
    ],
    tags: ["Escolar", "Conjunto", "Sob encomenda"]
  },
  {
    id: "kit-longarina-florenca-3-lugares-com-braco-individual",
    category: "cadeiras",
    section: "Linha Floren?a",
    name: "Kit Longarina Florença 3 Lugares Com Braço Individual",
    code: "KLFBI003",
    summary: "A Longarina Florença é composta por múltiplos assentos em uma única estrutura, oferecendo praticidade e organização para ambientes coletivos.",
    specs: [
      ["Materiais", "Assento estofado e encosto em tela com estrutura longarina em metalon com braço Individual"],
      ["Ferragem", "Preto"]
    ],
    notes: [
      "Disponível em versões metálicas ou estofadas, é projetada para suportar o uso intenso e o peso de várias pessoas simultaneamente. É ideal para recepções, salas de espera, auditórios e outros espaços de grande circulação."
    ],
    colors: [
      "Courvin Denver Bege",
      "Courvin Denver Marrom",
      "Courvin Denver Preto",
      "Courvin Denver Verde",
      "Courvin Montevideo Preto",
      "Courvin New Veneta Bege",
      "Courvin New Veneta Marrom",
      "Courvin New Veneta Preto",
      "Courvin New Veneta Verde",
      "Courvin Viena Amarelo",
      "Courvin Viena Azul",
      "Courvin Viena Bege",
      "Courvin Viena Cinza",
      "Courvin Viena Laranja",
      "Courvin Viena Preto",
      "Courvin Viena Rosa",
      "Courvin Viena Turquesa",
      "Courvin Viena Verde Bandeira",
      "Courvin Viena Verde Limão",
      "Courvin Viena Vermelho",
      "Tecido Smart Office Laranja",
      "Tecido Smart Office Petroleo",
      "Tecido Smart Office Preto",
      "Tecido Tilbury Azul",
      "Tecido Tilbury Bege",
      "Tecido Tilbury Cinza com Preto",
      "Tecido Tilbury Marrom",
      "Tecido Tilbury Preto",
      "Tecido Tilbury Verde com Preto",
      "Tecido Tilbury Vermelho"
    ],
    tags: [
      "Florença",
      "Longarina"
    ]
  },
  {
    id: "kit-longarina-florenca-3-lugares-com-braco-compartilhado",
    category: "cadeiras",
    section: "Linha Floren?a",
    name: "Kit Longarina Florença 3 Lugares Com Braço Compartilhado",
    code: "KLFBC003",
    summary: "A Longarina Florença é composta por múltiplos assentos em uma única estrutura, oferecendo praticidade e organização para ambientes coletivos.",
    specs: [
      ["Materiais", "Assento estofado e encosto em tela com estrutura longarina em metalon com braço Compartilhado"],
      ["Ferragem", "Preto"]
    ],
    notes: [
      "Disponível em versões metálicas ou estofadas, é projetada para suportar o uso intenso e o peso de várias pessoas simultaneamente. É ideal para recepções, salas de espera, auditórios e outros espaços de grande circulação."
    ],
    colors: [
      "Courvin Denver Bege",
      "Courvin Denver Marrom",
      "Courvin Denver Preto",
      "Courvin Denver Verde",
      "Courvin Montevideo Preto",
      "Courvin New Veneta Bege",
      "Courvin New Veneta Marrom",
      "Courvin New Veneta Preto",
      "Courvin New Veneta Verde",
      "Courvin Viena Amarelo",
      "Courvin Viena Azul",
      "Courvin Viena Bege",
      "Courvin Viena Cinza",
      "Courvin Viena Laranja",
      "Courvin Viena Preto",
      "Courvin Viena Rosa",
      "Courvin Viena Turquesa",
      "Courvin Viena Verde Bandeira",
      "Courvin Viena Verde Limão",
      "Courvin Viena Vermelho",
      "Tecido Smart Office Laranja",
      "Tecido Smart Office Petroleo",
      "Tecido Smart Office Preto",
      "Tecido Tilbury Azul",
      "Tecido Tilbury Bege",
      "Tecido Tilbury Cinza com Preto",
      "Tecido Tilbury Marrom",
      "Tecido Tilbury Preto",
      "Tecido Tilbury Verde com Preto",
      "Tecido Tilbury Vermelho"
    ],
    tags: [
      "Florença",
      "Longarina"
    ]
  },
  {
    id: "kit-longarina-florenca-3-lugares-com-braco-lateral",
    category: "cadeiras",
    section: "Linha Floren?a",
    name: "Kit Longarina Florença 3 Lugares Com Braço Lateral",
    code: "KLFBL003",
    summary: "A Longarina Florença é composta por múltiplos assentos em uma única estrutura, oferecendo praticidade e organização para ambientes coletivos.",
    specs: [
      ["Materiais", "Assento estofado e encosto em tela com estrutura longarina em metalon com braço lateral"],
      ["Ferragem", "Preto"]
    ],
    notes: [
      "Disponível em versões metálicas ou estofadas, é projetada para suportar o uso intenso e o peso de várias pessoas simultaneamente. É ideal para recepções, salas de espera, auditórios e outros espaços de grande circulação."
    ],
    colors: [
      "Courvin Denver Bege",
      "Courvin Denver Marrom",
      "Courvin Denver Preto",
      "Courvin Denver Verde",
      "Courvin Montevideo Preto",
      "Courvin New Veneta Bege",
      "Courvin New Veneta Marrom",
      "Courvin New Veneta Preto",
      "Courvin New Veneta Verde",
      "Courvin Viena Amarelo",
      "Courvin Viena Azul",
      "Courvin Viena Bege",
      "Courvin Viena Cinza",
      "Courvin Viena Laranja",
      "Courvin Viena Preto",
      "Courvin Viena Rosa",
      "Courvin Viena Turquesa",
      "Courvin Viena Verde Bandeira",
      "Courvin Viena Verde Limão",
      "Courvin Viena Vermelho",
      "Tecido Smart Office Laranja",
      "Tecido Smart Office Petroleo",
      "Tecido Smart Office Preto",
      "Tecido Tilbury Azul",
      "Tecido Tilbury Bege",
      "Tecido Tilbury Cinza com Preto",
      "Tecido Tilbury Marrom",
      "Tecido Tilbury Preto",
      "Tecido Tilbury Verde com Preto",
      "Tecido Tilbury Vermelho"
    ],
    tags: [
      "Florença",
      "Longarina"
    ]
  },
  {
    id: "kit-longarina-florenca-3-lugares",
    category: "cadeiras",
    section: "Linha Floren?a",
    name: "Kit Longarina Florença 3 Lugares",
    code: "KLFSB003",
    summary: "A Longarina Florença é composta por múltiplos assentos em uma única estrutura, oferecendo praticidade e organização para ambientes coletivos.",
    specs: [
      ["Materiais", "Assento estofado e encosto em tela com estrutura longarina em metalon"],
      ["Ferragem", "Preto"]
    ],
    notes: [
      "Disponível em versões metálicas ou estofadas, é projetada para suportar o uso intenso e o peso de várias pessoas simultaneamente. É ideal para recepções, salas de espera, auditórios e outros espaços de grande circulação."
    ],
    colors: [
      "Courvin Denver Bege",
      "Courvin Denver Marrom",
      "Courvin Denver Preto",
      "Courvin Denver Verde",
      "Courvin Montevideo Preto",
      "Courvin New Veneta Bege",
      "Courvin New Veneta Marrom",
      "Courvin New Veneta Preto",
      "Courvin New Veneta Verde",
      "Courvin Viena Amarelo",
      "Courvin Viena Azul",
      "Courvin Viena Bege",
      "Courvin Viena Cinza",
      "Courvin Viena Laranja",
      "Courvin Viena Preto",
      "Courvin Viena Rosa",
      "Courvin Viena Turquesa",
      "Courvin Viena Verde Bandeira",
      "Courvin Viena Verde Limão",
      "Courvin Viena Vermelho",
      "Tecido Smart Office Laranja",
      "Tecido Smart Office Petroleo",
      "Tecido Smart Office Preto",
      "Tecido Tilbury Azul",
      "Tecido Tilbury Bege",
      "Tecido Tilbury Cinza com Preto",
      "Tecido Tilbury Marrom",
      "Tecido Tilbury Preto",
      "Tecido Tilbury Verde com Preto",
      "Tecido Tilbury Vermelho"
    ],
    tags: [
      "Florença",
      "Longarina"
    ]
  },
  {
    id: "kit-cadeira-caixa-florenca-com-braco",
    category: "cadeiras",
    section: "Linha Floren?a",
    name: "Kit Cadeira Caixa Florença Com Braço",
    code: "KCFCB806",
    summary: "A Cadeira Caixa Florença foi desenvolvida especialmente para profissionais que passam longos períodos sentados.",
    specs: [
      ["Materiais", "Assento estofado e encosto em tela com base caixa com braço"]
    ],
    notes: [
      "Com foco em conforto e segurança, ela ajuda a prevenir os desconfortos causados pelo uso prolongado, oferecendo o suporte ideal para o dia a dia de trabalho."
    ],
    colors: [
      "Courvin Denver Bege",
      "Courvin Denver Marrom",
      "Courvin Denver Preto",
      "Courvin Denver Verde",
      "Courvin Montevideo Preto",
      "Courvin New Veneta Bege",
      "Courvin New Veneta Marrom",
      "Courvin New Veneta Preto",
      "Courvin New Veneta Verde",
      "Courvin Viena Amarelo",
      "Courvin Viena Azul",
      "Courvin Viena Bege",
      "Courvin Viena Cinza",
      "Courvin Viena Laranja",
      "Courvin Viena Preto",
      "Courvin Viena Rosa",
      "Courvin Viena Turquesa",
      "Courvin Viena Verde Bandeira",
      "Courvin Viena Verde Limão",
      "Courvin Viena Vermelho",
      "Tecido Smart Office Laranja",
      "Tecido Smart Office Petroleo",
      "Tecido Smart Office Preto",
      "Tecido Tilbury Azul",
      "Tecido Tilbury Bege",
      "Tecido Tilbury Cinza com Preto",
      "Tecido Tilbury Marrom",
      "Tecido Tilbury Preto",
      "Tecido Tilbury Verde com Preto",
      "Tecido Tilbury Vermelho"
    ],
    tags: [
      "Florença",
      "Cadeira",
      "Escritório"
    ]
  },
  {
    id: "kit-cadeira-caixa-florenca-sem-braco",
    category: "cadeiras",
    section: "Linha Floren?a",
    name: "Kit Cadeira Caixa Florença Sem Braço",
    code: "KCFSB805",
    summary: "A Cadeira Caixa Florença foi desenvolvida especialmente para profissionais que passam longos períodos sentados.",
    specs: [
      ["Materiais", "Assento estofado e encosto em tela com base caixa"]
    ],
    notes: [
      "Com foco em conforto e segurança, ela ajuda a prevenir os desconfortos causados pelo uso prolongado, oferecendo o suporte ideal para o dia a dia de trabalho."
    ],
    colors: [
      "Courvin Denver Bege",
      "Courvin Denver Marrom",
      "Courvin Denver Preto",
      "Courvin Denver Verde",
      "Courvin Montevideo Preto",
      "Courvin New Veneta Bege",
      "Courvin New Veneta Marrom",
      "Courvin New Veneta Preto",
      "Courvin New Veneta Verde",
      "Courvin Viena Amarelo",
      "Courvin Viena Azul",
      "Courvin Viena Bege",
      "Courvin Viena Cinza",
      "Courvin Viena Laranja",
      "Courvin Viena Preto",
      "Courvin Viena Rosa",
      "Courvin Viena Turquesa",
      "Courvin Viena Verde Bandeira",
      "Courvin Viena Verde Limão",
      "Courvin Viena Vermelho",
      "Tecido Smart Office Laranja",
      "Tecido Smart Office Petroleo",
      "Tecido Smart Office Preto",
      "Tecido Tilbury Azul",
      "Tecido Tilbury Bege",
      "Tecido Tilbury Cinza com Preto",
      "Tecido Tilbury Marrom",
      "Tecido Tilbury Preto",
      "Tecido Tilbury Verde com Preto",
      "Tecido Tilbury Vermelho"
    ],
    tags: [
      "Florença",
      "Cadeira",
      "Escritório"
    ]
  },
  {
    id: "kit-cadeira-giratoria-florenca-com-relax-com-braco",
    category: "cadeiras",
    section: "Linha Floren?a",
    name: "Kit Cadeira Giratoria Florença Com Relax Com Braço",
    code: "KCFCB803",
    summary: "A Cadeira Giratória Florença tem como principal destaque a ergonomia, oferecendo alto nível de conforto — ideal para quem atua na área administrativa e passa longas horas no trabalho.",
    specs: [
      ["Dimens?es", "690x982x600mm"],
      ["Materiais", "Assento estofado e encosto em tela com base giratória relax com braço"]
    ],
    notes: [
      "Seu design é simples, mas funcional, com recursos de ajuste, como a regulagem de altura, que se adaptam a diferentes biotipos. É um dos modelos mais utilizados em escritórios e home offices, graças ao excelente custo-benefício que proporciona."
    ],
    colors: [
      "Courvin Denver Bege",
      "Courvin Denver Marrom",
      "Courvin Denver Preto",
      "Courvin Denver Verde",
      "Courvin Montevideo Preto",
      "Courvin New Veneta Bege",
      "Courvin New Veneta Marrom",
      "Courvin New Veneta Preto",
      "Courvin New Veneta Verde",
      "Courvin Viena Amarelo",
      "Courvin Viena Azul",
      "Courvin Viena Bege",
      "Courvin Viena Cinza",
      "Courvin Viena Laranja",
      "Courvin Viena Preto",
      "Courvin Viena Rosa",
      "Courvin Viena Turquesa",
      "Courvin Viena Verde Bandeira",
      "Courvin Viena Verde Limão",
      "Courvin Viena Vermelho",
      "Tecido Smart Office Laranja",
      "Tecido Smart Office Petroleo",
      "Tecido Smart Office Preto",
      "Tecido Tilbury Azul",
      "Tecido Tilbury Bege",
      "Tecido Tilbury Cinza com Preto",
      "Tecido Tilbury Marrom",
      "Tecido Tilbury Preto",
      "Tecido Tilbury Verde com Preto",
      "Tecido Tilbury Vermelho"
    ],
    tags: [
      "Florença",
      "Cadeira",
      "Escritório"
    ]
  },
  {
    id: "kit-cadeira-giratoria-florenca-com-braco",
    category: "cadeiras",
    section: "Linha Floren?a",
    name: "Kit Cadeira Giratoria Florença Com Braço",
    code: "KCFCB802",
    summary: "A Cadeira Giratória Florença tem como principal destaque a ergonomia, oferecendo alto nível de conforto — ideal para quem atua na área administrativa e passa longas horas no trabalho.",
    specs: [
      ["Dimens?es", "600x982x600mm"],
      ["Materiais", "Assento estofado e encosto em tela com base giratória com braço"]
    ],
    notes: [
      "Seu design é simples, mas funcional, com recursos de ajuste, como a regulagem de altura, que se adaptam a diferentes biotipos. É um dos modelos mais utilizados em escritórios e home offices, graças ao excelente custo-benefício que proporciona."
    ],
    colors: [
      "Courvin Denver Bege",
      "Courvin Denver Marrom",
      "Courvin Denver Preto",
      "Courvin Denver Verde",
      "Courvin Montevideo Preto",
      "Courvin New Veneta Bege",
      "Courvin New Veneta Marrom",
      "Courvin New Veneta Preto",
      "Courvin New Veneta Verde",
      "Courvin Viena Amarelo",
      "Courvin Viena Azul",
      "Courvin Viena Bege",
      "Courvin Viena Cinza",
      "Courvin Viena Laranja",
      "Courvin Viena Preto",
      "Courvin Viena Rosa",
      "Courvin Viena Turquesa",
      "Courvin Viena Verde Bandeira",
      "Courvin Viena Verde Limão",
      "Courvin Viena Vermelho",
      "Tecido Smart Office Laranja",
      "Tecido Smart Office Petroleo",
      "Tecido Smart Office Preto",
      "Tecido Tilbury Azul",
      "Tecido Tilbury Bege",
      "Tecido Tilbury Cinza com Preto",
      "Tecido Tilbury Marrom",
      "Tecido Tilbury Preto",
      "Tecido Tilbury Verde com Preto",
      "Tecido Tilbury Vermelho"
    ],
    tags: [
      "Florença",
      "Cadeira",
      "Escritório"
    ]
  },
  {
    id: "kit-cadeira-giratoria-florenca-sem-braco",
    category: "cadeiras",
    section: "Linha Floren?a",
    name: "Kit Cadeira Giratoria Florença Sem Braço",
    code: "KCFSB801",
    summary: "A Cadeira Giratória Florença tem como principal destaque a ergonomia, oferecendo alto nível de conforto — ideal para quem atua na área administrativa e passa longas horas no trabalho.",
    specs: [
      ["Dimens?es", "690x982x600mm"],
      ["Materiais", "Assento estofado e encosto em tela com base giratória"]
    ],
    notes: [
      "Seu design é simples, mas funcional, com recursos de ajuste, como a regulagem de altura, que se adaptam a diferentes biotipos. É um dos modelos mais utilizados em escritórios e home offices, graças ao excelente custo-benefício que proporciona."
    ],
    colors: [
      "Courvin Denver Bege",
      "Courvin Denver Marrom",
      "Courvin Denver Preto",
      "Courvin Denver Verde",
      "Courvin Montevideo Preto",
      "Courvin New Veneta Bege",
      "Courvin New Veneta Marrom",
      "Courvin New Veneta Preto",
      "Courvin New Veneta Verde",
      "Courvin Viena Amarelo",
      "Courvin Viena Azul",
      "Courvin Viena Bege",
      "Courvin Viena Cinza",
      "Courvin Viena Laranja",
      "Courvin Viena Preto",
      "Courvin Viena Rosa",
      "Courvin Viena Turquesa",
      "Courvin Viena Verde Bandeira",
      "Courvin Viena Verde Limão",
      "Courvin Viena Vermelho",
      "Tecido Smart Office Laranja",
      "Tecido Smart Office Petroleo",
      "Tecido Smart Office Preto",
      "Tecido Tilbury Azul",
      "Tecido Tilbury Bege",
      "Tecido Tilbury Cinza com Preto",
      "Tecido Tilbury Marrom",
      "Tecido Tilbury Preto",
      "Tecido Tilbury Verde com Preto",
      "Tecido Tilbury Vermelho"
    ],
    tags: [
      "Florença",
      "Cadeira",
      "Escritório"
    ]
  },
  {
    id: "kit-longarina-diretor-braco-escamoteavel-3-lugares",
    category: "cadeiras",
    section: "Longarinas Diretor",
    name: "Kit Longarina Diretor Braço Escamoteavel",
    code: "KLD3659",
    summary: "A Longarina Diretor é a escolha ideal para adicionar um toque de cor e modernidade à decoração do seu ambiente.",
    specs: [
      ["Materiais", "Assento e encosto estofado com estrutura longarina em metalon com braço escamoteável direito"],
      ["Tamanhos", "2 Lugares, 3 Lugares, 4 Lugares, 5 Lugares"]
    ],
    notes: [
      "Sua estrutura foi desenvolvida para oferecer máximo conforto. Disponível em uma ampla variedade de cores, este modelo combina beleza, versatilidade e design contemporâneo, trazendo mais vivacidade ao seu espaço."
    ],
    options: [
      "Tamanho: 2 Lugares",
      "Tamanho: 3 Lugares",
      "Tamanho: 4 Lugares",
      "Tamanho: 5 Lugares"
    ],
    colors: [
      "Courino Azul",
      "Courino Preto",
      "Courino Vermelho",
      "Courvin Viena Amarelo",
      "Courvin Viena Azul",
      "Courvin Viena Bege",
      "Courvin Viena Cinza",
      "Courvin Viena Laranja",
      "Courvin Viena Preto",
      "Courvin Viena Rosa",
      "Courvin Viena Turquesa",
      "Courvin Viena Verde Bandeira",
      "Courvin Viena Verde Limão",
      "Courvin Viena Vermelho",
      "Tecido Tilbury Azul",
      "Tecido Tilbury Bege",
      "Tecido Tilbury Cinza com Preto",
      "Tecido Tilbury Marrom",
      "Tecido Tilbury Preto",
      "Tecido Tilbury Verde com Preto",
      "Tecido Tilbury Vermelho"
    ],
    tags: [
      "Diretor",
      "Longarina"
    ]
  },
  {
    id: "kit-longarina-diretor-prancheta-dobravel-3-lugares",
    category: "cadeiras",
    section: "Longarinas Diretor",
    name: "Kit Longarina Diretor Prancheta Dobrável",
    code: "KLD3699",
    summary: "A Longarina Diretor é a escolha ideal para adicionar um toque de cor e modernidade à decoração do seu ambiente.",
    specs: [
      ["Materiais", "Assento e encosto estofado com estrutura longarina em metalon com braço dobrável"],
      ["Tamanhos", "2 Lugares, 3 Lugares, 4 Lugares, 5 Lugares"]
    ],
    notes: [
      "Sua estrutura foi desenvolvida para oferecer máximo conforto. Disponível em uma ampla variedade de cores, este modelo combina beleza, versatilidade e design contemporâneo, trazendo mais vivacidade ao seu espaço."
    ],
    options: [
      "Tamanho: 2 Lugares",
      "Tamanho: 3 Lugares",
      "Tamanho: 4 Lugares",
      "Tamanho: 5 Lugares"
    ],
    colors: [
      "Courino Azul",
      "Courino Preto",
      "Courino Vermelho",
      "Courvin Viena Amarelo",
      "Courvin Viena Azul",
      "Courvin Viena Bege",
      "Courvin Viena Cinza",
      "Courvin Viena Laranja",
      "Courvin Viena Preto",
      "Courvin Viena Rosa",
      "Courvin Viena Turquesa",
      "Courvin Viena Verde Bandeira",
      "Courvin Viena Verde Limão",
      "Courvin Viena Vermelho",
      "Tecido Tilbury Azul",
      "Tecido Tilbury Bege",
      "Tecido Tilbury Cinza com Preto",
      "Tecido Tilbury Marrom",
      "Tecido Tilbury Preto",
      "Tecido Tilbury Verde com Preto",
      "Tecido Tilbury Vermelho"
    ],
    tags: [
      "Diretor",
      "Longarina"
    ]
  },
  {
    id: "kit-longarina-executiva-braco-escamoteavel-3-lugares",
    category: "cadeiras",
    section: "Longarinas Executiva",
    name: "Kit Longarina Executiva Braço Escamoteavel 3 Lugares",
    code: "KLE3059",
    summary: "A Longarina Executiva é a escolha ideal para adicionar um toque de cor e modernidade à decoração do seu ambiente.",
    specs: [
      ["Dimens?es", "Lx825xP"],
      ["Materiais", "Assento e encosto estofado com estrutura longarina em metalon com braço escamoteável direito"],
      ["Ferragem", "Preto"]
    ],
    notes: [
      "Sua estrutura foi desenvolvida para oferecer máximo conforto. Disponível em uma ampla variedade de cores, este modelo combina beleza, versatilidade e design contemporâneo, trazendo mais vivacidade ao seu espaço."
    ],
    colors: [
      "Courino Azul",
      "Courino Preto",
      "Courino Vermelho",
      "Courvin Denver Bege",
      "Courvin Denver Marrom",
      "Courvin Denver Preto",
      "Courvin Denver Verde",
      "Courvin Montevideo Preto",
      "Courvin New Veneta Bege",
      "Courvin New Veneta Marrom",
      "Courvin New Veneta Preto",
      "Courvin New Veneta Verde",
      "Courvin Viena Amarelo",
      "Courvin Viena Azul",
      "Courvin Viena Bege",
      "Courvin Viena Cinza",
      "Courvin Viena Laranja",
      "Courvin Viena Preto",
      "Courvin Viena Rosa",
      "Courvin Viena Turquesa",
      "Courvin Viena Verde Bandeira",
      "Courvin Viena Verde Limão",
      "Courvin Viena Vermelho",
      "Tecido Smart Office Laranja",
      "Tecido Smart Office Petroleo",
      "Tecido Smart Office Preto",
      "Tecido Tilbury Azul",
      "Tecido Tilbury Bege",
      "Tecido Tilbury Cinza com Preto",
      "Tecido Tilbury Marrom",
      "Tecido Tilbury Preto",
      "Tecido Tilbury Verde com Preto",
      "Tecido Tilbury Vermelho"
    ],
    tags: [
      "Executiva",
      "Longarina"
    ]
  },
  {
    id: "kit-longarina-executiva-prancheta-dobravel-3-lugares",
    category: "cadeiras",
    section: "Longarinas Executiva",
    name: "Kit Longarina Executiva Prancheta Dobrável 3 Lugares",
    code: "KLE3099",
    summary: "A Longarina Executiva é a escolha ideal para adicionar um toque de cor e modernidade à decoração do seu ambiente.",
    specs: [
      ["Dimens?es", "Lx825xP"],
      ["Materiais", "Assento e encosto estofado com estrutura longarina em metalon com braço dobrável"],
      ["Ferragem", "Preto"]
    ],
    notes: [
      "Sua estrutura foi desenvolvida para oferecer máximo conforto. Disponível em uma ampla variedade de cores, este modelo combina beleza, versatilidade e design contemporâneo, trazendo mais vivacidade ao seu espaço."
    ],
    colors: [
      "Courino Azul",
      "Courino Preto",
      "Courino Vermelho",
      "Courvin Denver Bege",
      "Courvin Denver Marrom",
      "Courvin Denver Preto",
      "Courvin Denver Verde",
      "Courvin Montevideo Preto",
      "Courvin New Veneta Bege",
      "Courvin New Veneta Marrom",
      "Courvin New Veneta Preto",
      "Courvin New Veneta Verde",
      "Courvin Viena Amarelo",
      "Courvin Viena Azul",
      "Courvin Viena Bege",
      "Courvin Viena Cinza",
      "Courvin Viena Laranja",
      "Courvin Viena Preto",
      "Courvin Viena Rosa",
      "Courvin Viena Turquesa",
      "Courvin Viena Verde Bandeira",
      "Courvin Viena Verde Limão",
      "Courvin Viena Vermelho",
      "Tecido Smart Office Laranja",
      "Tecido Smart Office Petroleo",
      "Tecido Smart Office Preto",
      "Tecido Tilbury Azul",
      "Tecido Tilbury Bege",
      "Tecido Tilbury Cinza com Preto",
      "Tecido Tilbury Marrom",
      "Tecido Tilbury Preto",
      "Tecido Tilbury Verde com Preto",
      "Tecido Tilbury Vermelho"
    ],
    tags: [
      "Executiva",
      "Longarina"
    ]
  },
  {
    id: "kit-longarina-secretaria-f10-prancheta-dobravel-3-lugares",
    category: "cadeiras",
    section: "Longarinas Secretária",
    name: "Kit Longarina Secretária F10 Prancheta Dobrável",
    code: "KLS3399",
    summary: "A Longarina Secretaria F10 é a escolha ideal para adicionar um toque de cor e modernidade à decoração do seu ambiente.",
    specs: [
      ["Dimens?es", "4 varia??es dispon?veis"],
      ["Materiais", "Assento e encosto estofado com estrutura longarina f10 em metalon com braço dobrável"],
      ["Tamanhos", "2 Lugares, 3 Lugares, 4 Lugares, 5 Lugares"]
    ],
    notes: [
      "Sua estrutura foi desenvolvida para oferecer máximo conforto. Disponível em uma ampla variedade de cores, este modelo combina beleza, versatilidade e design contemporâneo, trazendo mais vivacidade ao seu espaço."
    ],
    options: [
      "Dimens?o: 1550x825x515mm",
      "Dimens?o: 2101x825x515mm",
      "Dimens?o: 2655x825x515mm",
      "Dimens?o: 950x825x515mm",
      "Tamanho: 2 Lugares",
      "Tamanho: 3 Lugares",
      "Tamanho: 4 Lugares",
      "Tamanho: 5 Lugares"
    ],
    colors: [
      "Courino Azul",
      "Courino Preto",
      "Courino Vermelho",
      "Courvin Viena Amarelo",
      "Courvin Viena Azul",
      "Courvin Viena Bege",
      "Courvin Viena Cinza",
      "Courvin Viena Laranja",
      "Courvin Viena Preto",
      "Courvin Viena Rosa",
      "Courvin Viena Turquesa",
      "Courvin Viena Verde Bandeira",
      "Courvin Viena Verde Limão",
      "Courvin Viena Vermelho",
      "Tecido Tilbury Azul",
      "Tecido Tilbury Bege",
      "Tecido Tilbury Cinza com Preto",
      "Tecido Tilbury Marrom",
      "Tecido Tilbury Preto",
      "Tecido Tilbury Verde com Preto",
      "Tecido Tilbury Vermelho"
    ],
    tags: [
      "Secretária",
      "Longarina"
    ]
  },
  {
    id: "kit-longarina-diretor-3-lugares-com-braco-individual",
    category: "cadeiras",
    section: "Longarinas Diretor",
    name: "Kit Longarina Diretor Com Braço Individual",
    code: "KLD3614",
    summary: "A Longarina Diretor é a escolha ideal para adicionar um toque de cor e modernidade à decoração do seu ambiente.",
    specs: [
      ["Materiais", "Assento e encosto estofado com estrutura longarina em metalon com braço Individual"],
      ["Tamanhos", "2 Lugares, 3 Lugares, 4 Lugares, 5 Lugares"]
    ],
    notes: [
      "Sua estrutura foi desenvolvida para oferecer máximo conforto. Disponível em uma ampla variedade de cores, este modelo combina beleza, versatilidade e design contemporâneo, trazendo mais vivacidade ao seu espaço."
    ],
    options: [
      "Tamanho: 2 Lugares",
      "Tamanho: 3 Lugares",
      "Tamanho: 4 Lugares",
      "Tamanho: 5 Lugares"
    ],
    colors: [
      "Courino Azul",
      "Courino Preto",
      "Courino Vermelho",
      "Courvin Viena Amarelo",
      "Courvin Viena Azul",
      "Courvin Viena Bege",
      "Courvin Viena Cinza",
      "Courvin Viena Laranja",
      "Courvin Viena Preto",
      "Courvin Viena Rosa",
      "Courvin Viena Turquesa",
      "Courvin Viena Verde Bandeira",
      "Courvin Viena Verde Limão",
      "Courvin Viena Vermelho",
      "Tecido Tilbury Azul",
      "Tecido Tilbury Bege",
      "Tecido Tilbury Cinza com Preto",
      "Tecido Tilbury Marrom",
      "Tecido Tilbury Preto",
      "Tecido Tilbury Verde com Preto",
      "Tecido Tilbury Vermelho"
    ],
    tags: [
      "Diretor",
      "Longarina"
    ]
  },
  {
    id: "kit-longarina-diretor-3-lugares-com-braco-compartilhado",
    category: "cadeiras",
    section: "Longarinas Diretor",
    name: "Kit Longarina Diretor Com Braço Compartilhado",
    code: "KLD3612",
    summary: "A Longarina Diretor é a escolha ideal para adicionar um toque de cor e modernidade à decoração do seu ambiente.",
    specs: [
      ["Materiais", "Assento e encosto estofado com estrutura longarina em metalon com braço Compartilhado"],
      ["Tamanhos", "2 Lugares, 3 Lugares, 4 Lugares, 5 Lugares"]
    ],
    notes: [
      "Sua estrutura foi desenvolvida para oferecer máximo conforto. Disponível em uma ampla variedade de cores, este modelo combina beleza, versatilidade e design contemporâneo, trazendo mais vivacidade ao seu espaço."
    ],
    options: [
      "Tamanho: 2 Lugares",
      "Tamanho: 3 Lugares",
      "Tamanho: 4 Lugares",
      "Tamanho: 5 Lugares"
    ],
    colors: [
      "Courino Azul",
      "Courino Preto",
      "Courino Vermelho",
      "Courvin Viena Amarelo",
      "Courvin Viena Azul",
      "Courvin Viena Bege",
      "Courvin Viena Cinza",
      "Courvin Viena Laranja",
      "Courvin Viena Preto",
      "Courvin Viena Rosa",
      "Courvin Viena Turquesa",
      "Courvin Viena Verde Bandeira",
      "Courvin Viena Verde Limão",
      "Courvin Viena Vermelho",
      "Tecido Tilbury Azul",
      "Tecido Tilbury Bege",
      "Tecido Tilbury Cinza com Preto",
      "Tecido Tilbury Marrom",
      "Tecido Tilbury Preto",
      "Tecido Tilbury Verde com Preto",
      "Tecido Tilbury Vermelho"
    ],
    tags: [
      "Diretor",
      "Longarina"
    ]
  },
  {
    id: "kit-longarina-diretor-3-lugares-com-braco-lateral",
    category: "cadeiras",
    section: "Longarinas Diretor",
    name: "Kit Longarina Diretor Com Braço Lateral",
    code: "KLD3611",
    summary: "A Longarina Diretor é a escolha ideal para adicionar um toque de cor e modernidade à decoração do seu ambiente.",
    specs: [
      ["Materiais", "Assento e encosto estofado com estrutura longarina em metalon com braço lateral"],
      ["Tamanhos", "2 Lugares, 3 Lugares, 4 Lugares, 5 Lugares"]
    ],
    notes: [
      "Sua estrutura foi desenvolvida para oferecer máximo conforto. Disponível em uma ampla variedade de cores, este modelo combina beleza, versatilidade e design contemporâneo, trazendo mais vivacidade ao seu espaço."
    ],
    options: [
      "Tamanho: 2 Lugares",
      "Tamanho: 3 Lugares",
      "Tamanho: 4 Lugares",
      "Tamanho: 5 Lugares"
    ],
    colors: [
      "Courino Azul",
      "Courino Preto",
      "Courino Vermelho",
      "Courvin Viena Amarelo",
      "Courvin Viena Azul",
      "Courvin Viena Bege",
      "Courvin Viena Cinza",
      "Courvin Viena Laranja",
      "Courvin Viena Preto",
      "Courvin Viena Rosa",
      "Courvin Viena Turquesa",
      "Courvin Viena Verde Bandeira",
      "Courvin Viena Verde Limão",
      "Courvin Viena Vermelho",
      "Tecido Tilbury Azul",
      "Tecido Tilbury Bege",
      "Tecido Tilbury Cinza com Preto",
      "Tecido Tilbury Marrom",
      "Tecido Tilbury Preto",
      "Tecido Tilbury Verde com Preto",
      "Tecido Tilbury Vermelho"
    ],
    tags: [
      "Diretor",
      "Longarina"
    ]
  },
  {
    id: "kit-longarina-diretor-3-lugares",
    category: "cadeiras",
    section: "Longarinas Diretor",
    name: "Kit Longarina Diretor",
    code: "KLD3610",
    summary: "A Longarina Diretor é a escolha ideal para adicionar um toque de cor e modernidade à decoração do seu ambiente.",
    specs: [
      ["Materiais", "Assento e encosto estofado com estrutura longarina em metalon"],
      ["Tamanhos", "2 Lugares, 3 Lugares, 4 Lugares, 5 Lugares"]
    ],
    notes: [
      "Sua estrutura foi desenvolvida para oferecer máximo conforto. Disponível em uma ampla variedade de cores, este modelo combina beleza, versatilidade e design contemporâneo, trazendo mais vivacidade ao seu espaço."
    ],
    options: [
      "Tamanho: 2 Lugares",
      "Tamanho: 3 Lugares",
      "Tamanho: 4 Lugares",
      "Tamanho: 5 Lugares"
    ],
    colors: [
      "Courino Azul",
      "Courino Preto",
      "Courino Vermelho",
      "Courvin Viena Amarelo",
      "Courvin Viena Azul",
      "Courvin Viena Bege",
      "Courvin Viena Cinza",
      "Courvin Viena Laranja",
      "Courvin Viena Preto",
      "Courvin Viena Rosa",
      "Courvin Viena Turquesa",
      "Courvin Viena Verde Bandeira",
      "Courvin Viena Verde Limão",
      "Courvin Viena Vermelho",
      "Tecido Tilbury Azul",
      "Tecido Tilbury Bege",
      "Tecido Tilbury Cinza com Preto",
      "Tecido Tilbury Marrom",
      "Tecido Tilbury Preto",
      "Tecido Tilbury Verde com Preto",
      "Tecido Tilbury Vermelho"
    ],
    tags: [
      "Diretor",
      "Longarina"
    ]
  },
  {
    id: "kit-longarina-executiva-3-lugares-com-braco-individual",
    category: "cadeiras",
    section: "Longarinas Executiva",
    name: "Kit Longarina Executiva 3 Lugares Com Braço Individual",
    code: "KLE3014",
    summary: "A Longarina Executiva é a escolha ideal para adicionar um toque de cor e modernidade à decoração do seu ambiente.",
    specs: [
      ["Dimens?es", "Lx825xP"],
      ["Materiais", "Assento e encosto estofado com estrutura longarina em metalon com braço Individual"],
      ["Ferragem", "Preto"]
    ],
    notes: [
      "Sua estrutura foi desenvolvida para oferecer máximo conforto. Disponível em uma ampla variedade de cores, este modelo combina beleza, versatilidade e design contemporâneo, trazendo mais vivacidade ao seu espaço."
    ],
    colors: [
      "Courino Azul",
      "Courino Preto",
      "Courino Vermelho",
      "Courvin Denver Bege",
      "Courvin Denver Marrom",
      "Courvin Denver Preto",
      "Courvin Denver Verde",
      "Courvin Montevideo Preto",
      "Courvin New Veneta Bege",
      "Courvin New Veneta Marrom",
      "Courvin New Veneta Preto",
      "Courvin New Veneta Verde",
      "Courvin Viena Amarelo",
      "Courvin Viena Azul",
      "Courvin Viena Bege",
      "Courvin Viena Cinza",
      "Courvin Viena Laranja",
      "Courvin Viena Preto",
      "Courvin Viena Rosa",
      "Courvin Viena Turquesa",
      "Courvin Viena Verde Bandeira",
      "Courvin Viena Verde Limão",
      "Courvin Viena Vermelho",
      "Tecido Smart Office Laranja",
      "Tecido Smart Office Petroleo",
      "Tecido Smart Office Preto",
      "Tecido Tilbury Azul",
      "Tecido Tilbury Bege",
      "Tecido Tilbury Cinza com Preto",
      "Tecido Tilbury Marrom",
      "Tecido Tilbury Preto",
      "Tecido Tilbury Verde com Preto",
      "Tecido Tilbury Vermelho"
    ],
    tags: [
      "Executiva",
      "Longarina"
    ]
  },
  {
    id: "kit-longarina-executiva-3-lugares-com-braco-compartilhado",
    category: "cadeiras",
    section: "Longarinas Executiva",
    name: "Kit Longarina Executiva 3 Lugares Com Braço Compartilhado",
    code: "KLE3012",
    summary: "A Longarina Executiva é a escolha ideal para adicionar um toque de cor e modernidade à decoração do seu ambiente.",
    specs: [
      ["Dimens?es", "Lx825xP"],
      ["Materiais", "Assento e encosto estofado com estrutura longarina em metalon com braço Compartilhado"],
      ["Ferragem", "Preto"]
    ],
    notes: [
      "Sua estrutura foi desenvolvida para oferecer máximo conforto. Disponível em uma ampla variedade de cores, este modelo combina beleza, versatilidade e design contemporâneo, trazendo mais vivacidade ao seu espaço."
    ],
    colors: [
      "Courino Azul",
      "Courino Preto",
      "Courino Vermelho",
      "Courvin Denver Bege",
      "Courvin Denver Marrom",
      "Courvin Denver Preto",
      "Courvin Denver Verde",
      "Courvin Montevideo Preto",
      "Courvin New Veneta Bege",
      "Courvin New Veneta Marrom",
      "Courvin New Veneta Preto",
      "Courvin New Veneta Verde",
      "Courvin Viena Amarelo",
      "Courvin Viena Azul",
      "Courvin Viena Bege",
      "Courvin Viena Cinza",
      "Courvin Viena Laranja",
      "Courvin Viena Preto",
      "Courvin Viena Rosa",
      "Courvin Viena Turquesa",
      "Courvin Viena Verde Bandeira",
      "Courvin Viena Verde Limão",
      "Courvin Viena Vermelho",
      "Tecido Smart Office Laranja",
      "Tecido Smart Office Petroleo",
      "Tecido Smart Office Preto",
      "Tecido Tilbury Azul",
      "Tecido Tilbury Bege",
      "Tecido Tilbury Cinza com Preto",
      "Tecido Tilbury Marrom",
      "Tecido Tilbury Preto",
      "Tecido Tilbury Verde com Preto",
      "Tecido Tilbury Vermelho"
    ],
    tags: [
      "Executiva",
      "Longarina"
    ]
  },
  {
    id: "kit-longarina-executiva-3-lugares-com-braco-lateral",
    category: "cadeiras",
    section: "Longarinas Executiva",
    name: "Kit Longarina Executiva 3 Lugares Com Braço Lateral",
    code: "KLE3011",
    summary: "A Longarina Executiva é a escolha ideal para adicionar um toque de cor e modernidade à decoração do seu ambiente.",
    specs: [
      ["Dimens?es", "Lx825xP"],
      ["Materiais", "Assento e encosto estofado com estrutura longarina em metalon com braço lateral"],
      ["Ferragem", "Preto"]
    ],
    notes: [
      "Sua estrutura foi desenvolvida para oferecer máximo conforto. Disponível em uma ampla variedade de cores, este modelo combina beleza, versatilidade e design contemporâneo, trazendo mais vivacidade ao seu espaço."
    ],
    colors: [
      "Courino Azul",
      "Courino Preto",
      "Courino Vermelho",
      "Courvin Denver Bege",
      "Courvin Denver Marrom",
      "Courvin Denver Preto",
      "Courvin Denver Verde",
      "Courvin Montevideo Preto",
      "Courvin New Veneta Bege",
      "Courvin New Veneta Marrom",
      "Courvin New Veneta Preto",
      "Courvin New Veneta Verde",
      "Courvin Viena Amarelo",
      "Courvin Viena Azul",
      "Courvin Viena Bege",
      "Courvin Viena Cinza",
      "Courvin Viena Laranja",
      "Courvin Viena Preto",
      "Courvin Viena Rosa",
      "Courvin Viena Turquesa",
      "Courvin Viena Verde Bandeira",
      "Courvin Viena Verde Limão",
      "Courvin Viena Vermelho",
      "Tecido Smart Office Laranja",
      "Tecido Smart Office Petroleo",
      "Tecido Smart Office Preto",
      "Tecido Tilbury Azul",
      "Tecido Tilbury Bege",
      "Tecido Tilbury Cinza com Preto",
      "Tecido Tilbury Marrom",
      "Tecido Tilbury Preto",
      "Tecido Tilbury Verde com Preto",
      "Tecido Tilbury Vermelho"
    ],
    tags: [
      "Executiva",
      "Longarina"
    ]
  },
  {
    id: "kit-longarina-executiva-3-lugares",
    category: "cadeiras",
    section: "Longarinas Executiva",
    name: "Kit Longarina Executiva 3 Lugares",
    code: "KLE3010",
    summary: "A Longarina Executiva é a escolha ideal para adicionar um toque de cor e modernidade à decoração do seu ambiente.",
    specs: [
      ["Dimens?es", "Lx825xP"],
      ["Materiais", "Assento e encosto estofado com estrutura longarina em metalon"],
      ["Ferragem", "Preto"]
    ],
    notes: [
      "Sua estrutura foi desenvolvida para oferecer máximo conforto. Disponível em uma ampla variedade de cores, este modelo combina beleza, versatilidade e design contemporâneo, trazendo mais vivacidade ao seu espaço."
    ],
    colors: [
      "Courino Azul",
      "Courino Preto",
      "Courino Vermelho",
      "Courvin Denver Bege",
      "Courvin Denver Marrom",
      "Courvin Denver Preto",
      "Courvin Denver Verde",
      "Courvin Montevideo Preto",
      "Courvin New Veneta Bege",
      "Courvin New Veneta Marrom",
      "Courvin New Veneta Preto",
      "Courvin New Veneta Verde",
      "Courvin Viena Amarelo",
      "Courvin Viena Azul",
      "Courvin Viena Bege",
      "Courvin Viena Cinza",
      "Courvin Viena Laranja",
      "Courvin Viena Preto",
      "Courvin Viena Rosa",
      "Courvin Viena Turquesa",
      "Courvin Viena Verde Bandeira",
      "Courvin Viena Verde Limão",
      "Courvin Viena Vermelho",
      "Tecido Smart Office Laranja",
      "Tecido Smart Office Petroleo",
      "Tecido Smart Office Preto",
      "Tecido Tilbury Azul",
      "Tecido Tilbury Bege",
      "Tecido Tilbury Cinza com Preto",
      "Tecido Tilbury Marrom",
      "Tecido Tilbury Preto",
      "Tecido Tilbury Verde com Preto",
      "Tecido Tilbury Vermelho"
    ],
    tags: [
      "Executiva",
      "Longarina"
    ]
  },
  {
    id: "kit-longarina-secretaria-f10-3-lugares",
    category: "cadeiras",
    section: "Longarinas Secretária",
    name: "Kit Longarina Secretária F10",
    code: "KLS3310",
    summary: "A Longarina Secretaria F10 é a escolha ideal para adicionar um toque de cor e modernidade à decoração do seu ambiente.",
    specs: [
      ["Dimens?es", "4 varia??es dispon?veis"],
      ["Materiais", "Assento e encosto estofado com estrutura longarina em metalon"],
      ["Tamanhos", "2 Lugares, 3 Lugares, 4 Lugares, 5 Lugares"]
    ],
    notes: [
      "Sua estrutura foi desenvolvida para oferecer máximo conforto. Disponível em uma ampla variedade de cores, este modelo combina beleza, versatilidade e design contemporâneo, trazendo mais vivacidade ao seu espaço."
    ],
    options: [
      "Dimens?o: 1550x825x515mm",
      "Dimens?o: 2101x825x515mm",
      "Dimens?o: 2655x825x515mm",
      "Dimens?o: 950x825x515mm",
      "Tamanho: 2 Lugares",
      "Tamanho: 3 Lugares",
      "Tamanho: 4 Lugares",
      "Tamanho: 5 Lugares"
    ],
    colors: [
      "Courino Azul",
      "Courino Preto",
      "Courino Vermelho",
      "Courvin Viena Amarelo",
      "Courvin Viena Azul",
      "Courvin Viena Bege",
      "Courvin Viena Cinza",
      "Courvin Viena Laranja",
      "Courvin Viena Preto",
      "Courvin Viena Rosa",
      "Courvin Viena Turquesa",
      "Courvin Viena Verde Bandeira",
      "Courvin Viena Verde Limão",
      "Courvin Viena Vermelho",
      "Tecido Tilbury Azul",
      "Tecido Tilbury Bege",
      "Tecido Tilbury Cinza com Preto",
      "Tecido Tilbury Marrom",
      "Tecido Tilbury Preto",
      "Tecido Tilbury Verde com Preto",
      "Tecido Tilbury Vermelho"
    ],
    tags: [
      "Secretária",
      "Longarina"
    ]
  },
  {
    id: "kit-banqueta-clip",
    category: "cadeiras",
    section: "Recep??o e apoio",
    name: "Kit Banqueta Clip",
    code: "KBC22",
    summary: "As Banquetas Clip são opções práticas e versáteis para compor a decoração, oferecendo não apenas conforto, mas também múltiplas possibilidades na criação de diferentes ambientes.",
    specs: [
      ["Dimens?es", "357x740x337mm"],
      ["Materiais", "Assento estofado com base fixa em metalon"],
      ["Ferragem", "Preto"]
    ],
    colors: [
      "Courino Azul",
      "Courino Preto",
      "Courino Vermelho",
      "Courvin Viena Amarelo",
      "Courvin Viena Azul",
      "Courvin Viena Bege",
      "Courvin Viena Cinza",
      "Courvin Viena Laranja",
      "Courvin Viena Preto",
      "Courvin Viena Rosa",
      "Courvin Viena Turquesa",
      "Courvin Viena Verde Bandeira",
      "Courvin Viena Verde Limão",
      "Courvin Viena Vermelho",
      "Tecido Tilbury Azul",
      "Tecido Tilbury Bege",
      "Tecido Tilbury Cinza com Preto",
      "Tecido Tilbury Marrom",
      "Tecido Tilbury Preto",
      "Tecido Tilbury Verde com Preto",
      "Tecido Tilbury Vermelho"
    ],
    tags: [
      "Clip",
      "Banqueta",
      "Fixa"
    ]
  },
  {
    id: "kit-cadeira-nova-hall-braco-dobravel",
    category: "cadeiras",
    section: "Recep??o e apoio",
    name: "Kit Cadeira Nova Hall Braço Dobrável",
    code: "KCNH21",
    summary: "Compacta, versátil e com design harmonioso, a Cadeira Nova Hall é a escolha ideal para diferentes ambientes.",
    specs: [
      ["Dimens?es", "588x905x595mm"],
      ["Materiais", "Assento e encosto estofado com base fixa em metalon com braço dobrável"],
      ["Ferragem", "Branco, Cinza, Preto"]
    ],
    notes: [
      "Com facilidade, transita entre espaços corporativos e home office, oferecendo praticidade e estilo em qualquer situação."
    ],
    colors: [
      "Courvin Viena Amarelo",
      "Courvin Viena Azul",
      "Courvin Viena Bege",
      "Courvin Viena Cinza",
      "Courvin Viena Laranja",
      "Courvin Viena Preto",
      "Courvin Viena Rosa",
      "Courvin Viena Turquesa",
      "Courvin Viena Verde Bandeira",
      "Courvin Viena Verde Limão",
      "Courvin Viena Vermelho",
      "Tecido Tilbury Azul",
      "Tecido Tilbury Bege",
      "Tecido Tilbury Cinza com Preto",
      "Tecido Tilbury Marrom",
      "Tecido Tilbury Preto",
      "Tecido Tilbury Verde com Preto",
      "Tecido Tilbury Vermelho"
    ],
    tags: [
      "Nova Hall",
      "Cadeira",
      "Escritório",
      "Fixa"
    ]
  },
  {
    id: "kit-cadeira-nova-hall-fixa",
    category: "cadeiras",
    section: "Recep??o e apoio",
    name: "Kit Cadeira Nova Hall Fixa",
    code: "KCNH20",
    summary: "Compacta, versátil e com design harmonioso, a Cadeira Nova Hall é a escolha ideal para diferentes ambientes.",
    specs: [
      ["Materiais", "Assento e encosto estofado com base fixa em metalon"],
      ["Ferragem", "Branco, Cinza, Preto"]
    ],
    notes: [
      "Com facilidade, transita entre espaços corporativos e home office, oferecendo praticidade e estilo em qualquer situação."
    ],
    colors: [
      "Courvin Viena Amarelo",
      "Courvin Viena Azul",
      "Courvin Viena Bege",
      "Courvin Viena Cinza",
      "Courvin Viena Laranja",
      "Courvin Viena Preto",
      "Courvin Viena Rosa",
      "Courvin Viena Turquesa",
      "Courvin Viena Verde Bandeira",
      "Courvin Viena Verde Limão",
      "Courvin Viena Vermelho",
      "Tecido Tilbury Azul",
      "Tecido Tilbury Bege",
      "Tecido Tilbury Cinza com Preto",
      "Tecido Tilbury Marrom",
      "Tecido Tilbury Preto",
      "Tecido Tilbury Verde com Preto",
      "Tecido Tilbury Vermelho"
    ],
    tags: [
      "Nova Hall",
      "Cadeira",
      "Escritório",
      "Fixa"
    ]
  },
  {
    id: "kit-cadeira-hall-braco-dobravel",
    category: "cadeiras",
    section: "Recep??o e apoio",
    name: "Kit Cadeira Hall Braço Dobrável",
    code: "KCH19",
    summary: "Compacta, versátil e com design harmonioso, a Cadeira Hall é a escolha ideal para diferentes ambientes.",
    specs: [
      ["Materiais", "Assento e encosto estofado com base fixa em metalon com braço dobrável"],
      ["Ferragem", "Branco, Cinza, Preto"]
    ],
    notes: [
      "Com facilidade, transita entre espaços corporativos e home office, oferecendo praticidade e estilo em qualquer situação."
    ],
    colors: [
      "Courvin Viena Amarelo",
      "Courvin Viena Azul",
      "Courvin Viena Bege",
      "Courvin Viena Cinza",
      "Courvin Viena Laranja",
      "Courvin Viena Preto",
      "Courvin Viena Rosa",
      "Courvin Viena Turquesa",
      "Courvin Viena Verde Bandeira",
      "Courvin Viena Verde Limão",
      "Courvin Viena Vermelho",
      "Tecido Tilbury Azul",
      "Tecido Tilbury Bege",
      "Tecido Tilbury Cinza com Preto",
      "Tecido Tilbury Marrom",
      "Tecido Tilbury Preto",
      "Tecido Tilbury Verde com Preto",
      "Tecido Tilbury Vermelho"
    ],
    tags: [
      "Hall",
      "Cadeira",
      "Escritório",
      "Fixa"
    ]
  },
  {
    id: "kit-cadeira-hall-fixa",
    category: "cadeiras",
    section: "Recep??o e apoio",
    name: "Kit Cadeira Hall Fixa",
    code: "KCH18",
    summary: "Compacta, versátil e com design harmonioso, a Cadeira Hall é a escolha ideal para diferentes ambientes.",
    specs: [
      ["Materiais", "Assento e encosto estofado com base fixa em metalon"],
      ["Ferragem", "Branco, Cinza, Preto"]
    ],
    notes: [
      "Com facilidade, transita entre espaços corporativos e home office, oferecendo praticidade e estilo em qualquer situação."
    ],
    colors: [
      "Courvin Viena Amarelo",
      "Courvin Viena Azul",
      "Courvin Viena Bege",
      "Courvin Viena Cinza",
      "Courvin Viena Laranja",
      "Courvin Viena Preto",
      "Courvin Viena Rosa",
      "Courvin Viena Turquesa",
      "Courvin Viena Verde Bandeira",
      "Courvin Viena Verde Limão",
      "Courvin Viena Vermelho",
      "Tecido Tilbury Azul",
      "Tecido Tilbury Bege",
      "Tecido Tilbury Cinza com Preto",
      "Tecido Tilbury Marrom",
      "Tecido Tilbury Preto",
      "Tecido Tilbury Verde com Preto",
      "Tecido Tilbury Vermelho"
    ],
    tags: [
      "Hall",
      "Cadeira",
      "Escritório",
      "Fixa"
    ]
  },
  {
    id: "kit-estante-light",
    category: "mdf",
    section: "Linha Light",
    name: "Kit Estante Light",
    code: "KELG9025",
    summary: "A Estante Light é a escolha ideal para quem busca modernidade, sofisticação e organização em um só produto.",
    specs: [
      ["Dimens?es", "900x250x2000mm"],
      ["Materiais", "Madeira MDP"],
      ["Ferragem", "Branco, Cinza, Preto"]
    ],
    notes: [
      "Oferece praticidade e funcionalidade no dia a dia, facilitando a organização de livros, documentos, objetos decorativos e muito mais. Perfeita para ambientes corporativos ou residenciais, ela transforma o espaço com estilo e eficiência."
    ],
    colors: [
      "Branco",
      "Chiaro",
      "Cinza",
      "Grafite",
      "Nogal",
      "Preto",
      "Verti"
    ],
    tags: [
      "Light",
      "Escritório",
      "Estante"
    ]
  },
  {
    id: "kit-armario-small",
    category: "mdf",
    section: "Linha Small",
    name: "Kit Armário Small",
    code: "KASM6030130",
    summary: "O Armário Small é a escolha ideal para quem busca modernidade, sofisticação e organização em um só produto.",
    specs: [
      ["Dimens?es", "600x300x1300mm"],
      ["Materiais", "Madeira MDP"]
    ],
    notes: [
      "Oferece praticidade e funcionalidade no dia a dia, facilitando a organização de livros, documentos, objetos decorativos e muito mais. Perfeita para ambientes corporativos ou residenciais, ela transforma o espaço com estilo e eficiência."
    ],
    colors: [
      "Branco",
      "Grafite",
      "Preto",
      "Verti"
    ],
    tags: [
      "Small",
      "Armário",
      "Escritório"
    ]
  },
  {
    id: "kit-estante-small",
    category: "mdf",
    section: "Linha Small",
    name: "Kit Estante Small",
    code: "KESM55135",
    summary: "A Estante Small é a escolha ideal para quem busca modernidade, sofisticação e organização em um só produto.",
    specs: [
      ["Dimens?es", "550x260x1350mm"],
      ["Materiais", "Madeira MDP"]
    ],
    notes: [
      "Com 5 prateleiras bem distribuídas, oferece praticidade e funcionalidade no dia a dia, facilitando a organização de livros, documentos, objetos decorativos e muito mais. Perfeita para ambientes corporativos ou residenciais, ela transforma o espaço com estilo e eficiência."
    ],
    colors: [
      "Branco",
      "Grafite",
      "Preto",
      "Verti"
    ],
    tags: [
      "Small",
      "Escritório",
      "Estante"
    ]
  },
  {
    id: "kit-mesa-small-acoplada-15mm",
    category: "mesas",
    section: "Linha Small",
    name: "Kit Mesa Small Acoplada 15mm",
    code: "KMSM11045",
    summary: "Transforme seu escritório em um espaço de trabalho de alto nível com a Mesa Small acoplada.",
    specs: [
      ["Dimens?es", "1100x600x750mm"],
      ["Materiais", "Tampo, saia e Pés em Madeira MDP"]
    ],
    notes: [
      "Criada para elevar o ambiente corporativo a um novo patamar de conforto e sofisticação. Desfrute de um amplo espaço de trabalho que proporciona o conforto necessário para enfrentar longas horas de tarefas diárias. Com um generoso gaveteiro equipado com duas gavetas e uma porta, oferecendo a segurança e organização que você precisa para manter seus documentos e pertences protegidos. Versátil e moderna, esta mesa se adapta perfeitamente a uma variedade de ambientes, desde escritórios corporativos até espaços de home office. A Mesa Small Acoplada é a escolha definitiva para quem busca o equilíbrio perfeito entre estilo, funcionalidade e qualidade. Prepare-se para se apaixonar pelo seu novo espaço de trabalho!"
    ],
    colors: [
      "Branco",
      "Grafite",
      "Preto",
      "Verti"
    ],
    tags: [
      "Small",
      "Escritório",
      "Mesa"
    ]
  },
  {
    id: "kit-mesa-small-multiuso-15mm",
    category: "mesas",
    section: "Linha Small",
    name: "Kit Mesa Small Multiuso 15mm",
    code: "KMSM85045",
    summary: "Transforme seu escritório em um espaço de trabalho de alto nível com a Mesa Small.",
    specs: [
      ["Dimens?es", "2 varia??es dispon?veis"],
      ["Materiais", "Tampo, saia e Pés em Madeira MDP"]
    ],
    notes: [
      "Criada para elevar o ambiente corporativo a um novo patamar de conforto e sofisticação. Desfrute de um amplo espaço de trabalho que proporciona o conforto necessário para enfrentar longas horas de tarefas diárias. Versátil e moderna, esta mesa se adapta perfeitamente a uma variedade de ambientes, desde escritórios corporativos até espaços de home office. A Mesa Small é a escolha definitiva para quem busca o equilíbrio perfeito entre estilo, funcionalidade e qualidade. Prepare-se para se apaixonar pelo seu novo espaço de trabalho!"
    ],
    options: [
      "Dimens?o: 1100x450x750mm",
      "Dimens?o: 850x450x750mm"
    ],
    colors: [
      "Branco",
      "Grafite",
      "Preto",
      "Verti"
    ],
    tags: [
      "Small",
      "Escritório",
      "Mesa"
    ]
  },
  {
    id: "kit-gavetao-small-corredica-telescopica",
    category: "mesas",
    section: "Linha Small",
    name: "Kit Gavetão Small Corrediça Telescópica",
    code: "KGAV80030",
    summary: "Otimize o espaço do seu escritório ou home office com o Gavetão Small — uma solução inteligente para manter documentos e objetos pessoais sempre organizados e ao seu alcance.",
    specs: [
      ["Dimens?es", "833x86x321mm"],
      ["Materiais", "Madeira MDP"]
    ],
    notes: [
      "Equipado com corrediças telescópicas, garante abertura suave e sem esforço, proporcionando praticidade no uso diário"
    ],
    colors: [
      "Branco",
      "Grafite",
      "Preto",
      "Verti"
    ],
    tags: [
      "Small",
      "Escritório",
      "Gaveta",
      "Mesa"
    ]
  },
  {
    id: "divisoria-lateral-pratika-15mm",
    category: "mesas",
    section: "Linha Pratika",
    name: "Divisória Lateral Prátika 15mm",
    code: "DVPKL060",
    summary: "Garanta mais privacidade e conforto no seu ambiente de trabalho com as Divisórias Prátika.",
    specs: [
      ["Dimens?es", "600x250mm"],
      ["Materiais", "Madeira MDP"]
    ],
    notes: [
      "Fabricadas em MDP de alta qualidade, oferecem resistência, durabilidade e um acabamento impecável. Práticas e funcionais, são ideais para uso como divisórias de mesas ou ilhas de trabalho, permitindo a separação de espaços de forma eficiente. Com elas, você cria um ambiente mais organizado e exclusivo, favorecendo a concentração e a produtividade nas tarefas do dia a dia."
    ],
    colors: [
      "Branco",
      "Chiaro",
      "Cinza",
      "Grafite",
      "Nogal",
      "Preto",
      "Verti"
    ],
    tags: [
      "Prátika",
      "Divisória",
      "Escritório"
    ]
  },
  {
    id: "divisoria-pratika-para-mesa-de-apoio",
    category: "mesas",
    section: "Linha Pratika",
    name: "Divisória Prátika Para Mesa de Apoio",
    code: "DVPK950",
    summary: "Garanta mais privacidade e conforto no seu ambiente de trabalho com as Divisórias Prátika.",
    specs: [
      ["Dimens?es", "1,50 Metro"],
      ["Materiais", "Madeira MDP"]
    ],
    notes: [
      "Fabricadas em MDP de alta qualidade, oferecem resistência, durabilidade e um acabamento impecável. Práticas e funcionais, são ideais para uso como divisórias de mesas ou ilhas de trabalho, permitindo a separação de espaços de forma eficiente. Com elas, você cria um ambiente mais organizado e exclusivo, favorecendo a concentração e a produtividade nas tarefas do dia a dia."
    ],
    colors: [
      "Branco",
      "Chiaro",
      "Cinza",
      "Grafite",
      "Nogal",
      "Preto",
      "Verti"
    ],
    tags: [
      "Prátika",
      "Divisória",
      "Escritório"
    ]
  },
  {
    id: "divisoria-pratika-frontal",
    category: "mesas",
    section: "Linha Pratika",
    name: "Divisória Prátika Frontal",
    code: "DVPK140",
    summary: "Garanta mais privacidade e conforto no seu ambiente de trabalho com as Divisórias Prátika.",
    specs: [
      ["Dimens?es", "3 varia??es dispon?veis"],
      ["Materiais", "Madeira MDP"]
    ],
    notes: [
      "Fabricadas em MDP de alta qualidade, oferecem resistência, durabilidade e um acabamento impecável. Práticas e funcionais, são ideais para uso como divisórias de mesas ou ilhas de trabalho, permitindo a separação de espaços de forma eficiente. Com elas, você cria um ambiente mais organizado e exclusivo, favorecendo a concentração e a produtividade nas tarefas do dia a dia."
    ],
    options: [
      "Dimens?o: 1,00 Metro",
      "Dimens?o: 1,20 Metro",
      "Dimens?o: 1,40 Metro"
    ],
    colors: [
      "Branco",
      "Chiaro",
      "Cinza",
      "Grafite",
      "Nogal",
      "Preto",
      "Verti"
    ],
    tags: [
      "Prátika",
      "Divisória",
      "Escritório"
    ]
  },
  {
    id: "conexao-pratika-quadrada-25mm",
    category: "mesas",
    section: "Linha Pratika",
    name: "Conexão Prátika Quadrada 25mm",
    code: "CPQ6060",
    summary: "Conexão Prátika Quadrada 25mm, fabricado em MDP, ideal para ambientação e organização de escritórios e home office.",
    specs: [
      ["Dimens?es", "600x600mm"],
      ["Materiais", "Madeira MDP"]
    ],
    colors: [
      "Cinza",
      "Grafite",
      "Nogal"
    ],
    tags: [
      "Prátika",
      "Conexão",
      "Escritório"
    ]
  },
  {
    id: "armario-balcao-pratika-30mm",
    category: "mdf",
    section: "Linha Pratika",
    name: "Armário Balcão Prátika 30mm",
    code: "AAP13045075",
    summary: "Armário Balcão Prátika 30mm Com Puxador Cromado, fabricado em MDP, ideal para ambientação e organização de escritórios e home office.",
    specs: [
      ["Dimens?es", "1300x450x750mm"],
      ["Materiais", "Madeira MDP"]
    ],
    colors: [
      "Branco",
      "Chiaro",
      "Cinza",
      "Grafite",
      "Nogal",
      "Preto",
      "Verti"
    ],
    tags: [
      "Prátika",
      "Armário",
      "Escritório",
      "Torre"
    ]
  },
  {
    id: "armario-torre-pratika-30mm",
    category: "mdf",
    section: "Linha Pratika",
    name: "Armário Torre Prátika 30mm",
    code: "ATP04045160",
    summary: "O Armário Torre Prátika é a escolha ideal para complementar seu escritório com praticidade e organização.",
    specs: [
      ["Dimens?es", "400x450x1600mm"],
      ["Materiais", "Madeira MDP"]
    ],
    notes: [
      "Produzida em MDP de alta qualidade, oferece excelente durabilidade, resistência e acabamento, garantindo um uso prolongado no dia a dia. Funcional e compacta, é perfeita para armazenar materiais, documentos ou objetos pessoais, mantendo seu ambiente sempre organizado e eficiente."
    ],
    colors: [
      "Branco",
      "Chiaro",
      "Cinza",
      "Grafite",
      "Nogal",
      "Preto",
      "Verti"
    ],
    tags: [
      "Prátika",
      "Armário",
      "Escritório",
      "Torre"
    ]
  },
  {
    id: "torre-pratika-30mm",
    category: "mdf",
    section: "Linha Pratika",
    name: "Torre Prátika 30mm",
    code: "TP04045160",
    summary: "A Torre Prátika é a escolha ideal para complementar seu escritório com praticidade e organização.",
    specs: [
      ["Dimens?es", "400x450x1600mm"],
      ["Materiais", "Madeira MDP"]
    ],
    notes: [
      "Produzida em MDP de alta qualidade, oferece excelente durabilidade, resistência e acabamento, garantindo um uso prolongado no dia a dia. Funcional e compacta, é perfeita para armazenar materiais, documentos ou objetos pessoais, mantendo seu ambiente sempre organizado e eficiente."
    ],
    colors: [
      "Branco",
      "Chiaro",
      "Cinza",
      "Grafite",
      "Nogal",
      "Preto",
      "Verti"
    ],
    tags: [
      "Prátika",
      "Escritório",
      "Torre"
    ]
  },
  {
    id: "armario-super-alto-multiuso-pratika-30mm",
    category: "mdf",
    section: "Linha Pratika",
    name: "Armário Super Alto Multiuso Prátika 30mm",
    code: "AAP08045210",
    summary: "Os Armários Super Alto Multiuso Prátika são a escolha ideal para quem busca funcionalidade, durabilidade e design moderno.",
    specs: [
      ["Dimens?es", "800x450x2100mm"],
      ["Materiais", "Madeira MDP"]
    ],
    notes: [
      "Com traços clean e contemporâneos, adaptam-se facilmente a diferentes ambientes, como escritórios, empresas ou residências. Fabricados em MDP de alta qualidade, oferecem resistência, longa durabilidade e excelente acabamento, garantindo um móvel prático e confiável para o dia a dia."
    ],
    colors: [
      "Branco",
      "Chiaro",
      "Cinza",
      "Grafite",
      "Nogal",
      "Preto",
      "Verti"
    ],
    tags: [
      "Prátika",
      "Armário",
      "Escritório"
    ]
  },
  {
    id: "armario-alto-multiuso-pratika-30mm",
    category: "mdf",
    section: "Linha Pratika",
    name: "Armário Alto Multiuso Prátika 30mm",
    code: "AAP08045160",
    summary: "Os Armários Alto Multiuso Prátika são a escolha ideal para quem busca funcionalidade, durabilidade e design moderno.",
    specs: [
      ["Dimens?es", "800x450x1600mm"],
      ["Materiais", "Madeira MDP"]
    ],
    notes: [
      "Com traços clean e contemporâneos, adaptam-se facilmente a diferentes ambientes, como escritórios, empresas ou residências. Fabricados em MDP de alta qualidade, oferecem resistência, longa durabilidade e excelente acabamento, garantindo um móvel prático e confiável para o dia a dia."
    ],
    colors: [
      "Branco",
      "Chiaro",
      "Cinza",
      "Grafite",
      "Nogal",
      "Preto",
      "Verti"
    ],
    tags: [
      "Prátika",
      "Armário",
      "Escritório"
    ]
  },
  {
    id: "armario-medio-pratika-30mm",
    category: "mdf",
    section: "Linha Pratika",
    name: "Armário Médio Prátika 30mm",
    code: "AAP08045130",
    summary: "Os Armários Médio Prátika são a escolha ideal para quem busca funcionalidade, durabilidade e design moderno.",
    specs: [
      ["Dimens?es", "800x450x1300mm"],
      ["Materiais", "Madeira MDP"]
    ],
    notes: [
      "Com traços clean e contemporâneos, adaptam-se facilmente a diferentes ambientes, como escritórios, empresas ou residências. Fabricados em MDP de alta qualidade, oferecem resistência, longa durabilidade e excelente acabamento, garantindo um móvel prático e confiável para o dia a dia."
    ],
    colors: [
      "Branco",
      "Chiaro",
      "Cinza",
      "Grafite",
      "Nogal",
      "Preto",
      "Verti"
    ],
    tags: [
      "Prátika",
      "Armário",
      "Escritório"
    ]
  },
  {
    id: "armario-misto-30mm-pratika",
    category: "mdf",
    section: "Linha Pratika",
    name: "Armário Misto 30mm Prátika",
    code: "AHM08645",
    summary: "Os Armários Misto Prátika são a escolha ideal para quem busca funcionalidade, durabilidade e design moderno.",
    specs: [
      ["Dimens?es", "860x450x660mm"],
      ["Materiais", "Madeira MDP"]
    ],
    notes: [
      "Com traços clean e contemporâneos, adaptam-se facilmente a diferentes ambientes, como escritórios, empresas ou residências. Fabricados em MDP de alta qualidade, oferecem resistência, longa durabilidade e excelente acabamento, garantindo um móvel prático e confiável para o dia a dia."
    ],
    colors: [
      "Branco",
      "Chiaro",
      "Cinza",
      "Grafite",
      "Nogal",
      "Preto",
      "Verti"
    ],
    tags: [
      "Prátika",
      "Armário",
      "Escritório",
      "Gaveteiro"
    ]
  },
  {
    id: "arquivo-pasta-suspensa-4-gavetoes-30mm-pratika",
    category: "mdf",
    section: "Linha Pratika",
    name: "Arquivo Pasta Suspensa 4 Gavetões 30mm Prátika",
    code: "APS3004",
    summary: "O Arquivo para Pasta Suspensa 4 Gavetões Pátika é a solução ideal para manter seus documentos e materiais de trabalho organizados com praticidade, funcionalidade e um toque de estilo.",
    specs: [
      ["Dimens?es", "460x450x1280mm"],
      ["Materiais", "Madeira MDP"]
    ],
    notes: [
      "Versátil e compacto, adapta-se facilmente a diferentes ambientes seja no escritório, na empresa ou em casa otimizando o espaço e contribuindo para um ambiente mais organizado e produtivo."
    ],
    colors: [
      "Branco",
      "Chiaro",
      "Cinza",
      "Grafite",
      "Nogal",
      "Preto",
      "Verti"
    ],
    tags: [
      "Prátika",
      "Arquivo",
      "Escritório",
      "Gaveta"
    ]
  },
  {
    id: "gaveteiro-volante-4-gavetas-30mm-pratika",
    category: "mdf",
    section: "Linha Pratika",
    name: "Gaveteiro Volante 4 Gavetas 30mm Prátika",
    code: "GV3904",
    summary: "Com design clean e minimalista, o Gaveteiro Volante 4 gavetas se encaixa perfeitamente em diversos ambientes, unindo funcionalidade, organização e elegância.",
    specs: [
      ["Dimens?es", "460x696x447mm"],
      ["Materiais", "Madeira MDP"]
    ],
    notes: [
      "Fabricado em MDP de alta qualidade, oferece resistência, durabilidade e fácil manutenção no dia a dia. Amplo espaço interno para organização, Base com rodízios para maior mobilidade, Gavetas com corrediças metálicas, Design moderno e sofisticado, Ideal para escritórios, home offices ou qualquer espaço que exija praticidade com um toque de estilo."
    ],
    colors: [
      "Branco",
      "Chiaro",
      "Cinza",
      "Grafite",
      "Nogal",
      "Preto",
      "Verti"
    ],
    tags: [
      "Prátika",
      "Escritório",
      "Gaveteiro",
      "Mesa"
    ]
  },
  {
    id: "gaveteiro-volante-misto-30mm-pratika",
    category: "mdf",
    section: "Linha Pratika",
    name: "Gaveteiro Volante Misto 30mm Prátika",
    code: "GV3903",
    summary: "Com design clean e minimalista, o Gaveteiro Volante Misto se encaixa perfeitamente em diversos ambientes, unindo funcionalidade, organização e elegância.",
    specs: [
      ["Dimens?es", "460x696x447mm"],
      ["Materiais", "Madeira MDP"]
    ],
    notes: [
      "Fabricado em MDP de alta qualidade, oferece resistência, durabilidade e fácil manutenção no dia a dia. Amplo espaço interno para organização, Base com rodízios para maior mobilidade, Gavetas com corrediças metálicas, Design moderno e sofisticado, Ideal para escritórios, home offices ou qualquer espaço que exija praticidade com um toque de estilo."
    ],
    colors: [
      "Branco",
      "Chiaro",
      "Cinza",
      "Grafite",
      "Nogal",
      "Preto",
      "Verti"
    ],
    tags: [
      "Prátika",
      "Escritório",
      "Gaveteiro",
      "Mesa"
    ]
  },
  {
    id: "gaveteiro-fixo-pratika-corredica-telescopica-3-gaveta",
    category: "mdf",
    section: "Linha Pratika",
    name: "Gaveteiro Fixo Prátika Corrediça Telescópica 3 Gaveta",
    code: "GFP003",
    summary: "Otimize o espaço do seu escritório ou home office com o Gaveteiro Fixo Prátika — uma solução inteligente para manter documentos e objetos pessoais sempre organizados e ao seu alcance.",
    specs: [
      ["Dimens?es", "400x260x320mm"],
      ["Materiais", "Madeira MDP"]
    ],
    notes: [
      "Equipado com corrediças telescópicas, garante abertura suave e sem esforço, proporcionando praticidade no uso diário. Para maior segurança, acompanha kit de chaves que permite o travamento simultâneo das duas gavetas, protegendo seus itens mais importantes com eficiência. Funcionalidade, segurança e organização em um só produto."
    ],
    colors: [
      "Branco",
      "Chiaro",
      "Cinza",
      "Grafite",
      "Nogal",
      "Preto",
      "Verti"
    ],
    tags: [
      "Prátika",
      "Escritório",
      "Gaveteiro",
      "Mesa"
    ]
  },
  {
    id: "gaveteiro-fixo-pratika-corredica-telescopica-2-gaveta",
    category: "mdf",
    section: "Linha Pratika",
    name: "Gaveteiro Fixo Prátika Corrediça Telescópica 2 Gaveta",
    code: "GFP002",
    summary: "Otimize o espaço do seu escritório ou home office com o Gaveteiro Fixo Prátika — uma solução inteligente para manter documentos e objetos pessoais sempre organizados e ao seu alcance.",
    specs: [
      ["Dimens?es", "400x180x320mm"],
      ["Materiais", "Madeira MDP"]
    ],
    notes: [
      "Equipado com corrediças telescópicas, garante abertura suave e sem esforço, proporcionando praticidade no uso diário. Para maior segurança, acompanha kit de chaves que permite o travamento simultâneo das duas gavetas, protegendo seus itens mais importantes com eficiência. Funcionalidade, segurança e organização em um só produto."
    ],
    colors: [
      "Branco",
      "Chiaro",
      "Cinza",
      "Grafite",
      "Nogal",
      "Preto",
      "Verti"
    ],
    tags: [
      "Prátika",
      "Escritório",
      "Gaveteiro",
      "Mesa"
    ]
  },
  {
    id: "gaveteiro-fixo-pratika-corredica-telescopica-1-gaveta",
    category: "mdf",
    section: "Linha Pratika",
    name: "Gaveteiro Fixo Prátika Corrediça Telescópica 1 Gaveta",
    code: "GFP001",
    summary: "Otimize o espaço do seu escritório ou home office com o Gaveteiro Fixo Prátika — uma solução inteligente para manter documentos e objetos pessoais sempre organizados e ao seu alcance.",
    specs: [
      ["Dimens?es", "400x100x320mm"],
      ["Materiais", "Madeira MDP"]
    ],
    notes: [
      "Equipado com corrediças telescópicas, garante abertura suave e sem esforço, proporcionando praticidade no uso diário. Para maior segurança, acompanha kit de chaves que permite o travamento simultâneo das duas gavetas, protegendo seus itens mais importantes com eficiência. Funcionalidade, segurança e organização em um só produto."
    ],
    colors: [
      "Branco",
      "Chiaro",
      "Cinza",
      "Grafite",
      "Nogal",
      "Preto",
      "Verti"
    ],
    tags: [
      "Prátika",
      "Escritório",
      "Gaveteiro",
      "Mesa"
    ]
  },
  {
    id: "mesa-de-apoio-pratika-25mm-com-armario-misto",
    category: "mdf",
    section: "Linha Pratika",
    name: "Mesa de Apoio Prátika 25mm Com Armário Misto",
    code: "MAMP86045",
    summary: "Precisa de mais espaço para trabalhar?",
    specs: [
      ["Dimens?es", "0,90x0,45"],
      ["Materiais", "Madeira MDP"]
    ],
    notes: [
      "A Mesa de Apoio Prátika com Armario é a solução ideal. Projetada para ampliar sua área de trabalho, ela otimiza o espaço disponível e contribui para um ambiente mais organizado, funcional e eficiente. Além de prática, seu design moderno adiciona um toque de elegância ao escritório, unindo utilidade e estilo em um único produto. A escolha certa para quem busca mais produtividade sem abrir mão da estética."
    ],
    colors: [
      "Cinza",
      "Grafite",
      "Nogal"
    ],
    tags: [
      "Prátika",
      "Armário",
      "Escritório",
      "Gaveteiro",
      "Mesa"
    ]
  },
  {
    id: "mesa-de-apoio-pratika-25mm-com-gaveteiro-4-gavetas",
    category: "mdf",
    section: "Linha Pratika",
    name: "Mesa de Apoio Prátika 25mm Com Gaveteiro 4 Gavetas",
    code: "MA4P9045",
    summary: "Precisa de mais espaço para trabalhar?",
    specs: [
      ["Dimens?es", "0,90x0,45"],
      ["Materiais", "Madeira MDP"]
    ],
    notes: [
      "A Mesa de Apoio Prátika com Gaveteiro 4 Gavetas é a solução ideal. Projetada para ampliar sua área de trabalho, ela otimiza o espaço disponível e contribui para um ambiente mais organizado, funcional e eficiente. Além de prática, seu design moderno adiciona um toque de elegância ao escritório, unindo utilidade e estilo em um único produto. A escolha certa para quem busca mais produtividade sem abrir mão da estética."
    ],
    colors: [
      "Cinza",
      "Grafite",
      "Nogal"
    ],
    tags: [
      "Prátika",
      "Escritório",
      "Gaveteiro",
      "Mesa"
    ]
  },
  {
    id: "mesa-de-apoio-pratika-25mm-com-gaveteiro-misto",
    category: "mdf",
    section: "Linha Pratika",
    name: "Mesa de Apoio Prátika 25mm Com Gaveteiro Misto",
    code: "MA3P9045",
    summary: "Precisa de mais espaço para trabalhar?",
    specs: [
      ["Dimens?es", "0,90x0,45"],
      ["Materiais", "Madeira MDP"]
    ],
    notes: [
      "A Mesa de Apoio Prátika com Gaveteiro Misto é a solução ideal. Projetada para ampliar sua área de trabalho, ela otimiza o espaço disponível e contribui para um ambiente mais organizado, funcional e eficiente. Além de prática, seu design moderno adiciona um toque de elegância ao escritório, unindo utilidade e estilo em um único produto. A escolha certa para quem busca mais produtividade sem abrir mão da estética."
    ],
    colors: [
      "Cinza",
      "Grafite",
      "Nogal"
    ],
    tags: [
      "Prátika",
      "Escritório",
      "Gaveteiro",
      "Mesa"
    ]
  },
  {
    id: "mesa-pratika-acoplada-gaveteiro-4-gavetas-25mm",
    category: "mdf",
    section: "Linha Pratika",
    name: "Mesa Prátika Acoplada Gaveteiro 4 Gavetas 25mm",
    code: "MA414060",
    summary: "Transforme seu escritório em um espaço de trabalho de alto nível com a Mesa Prátika acoplada.",
    specs: [
      ["Dimens?es", "2 varia??es dispon?veis"],
      ["Materiais", "Tampo, saia e Pés em Madeira MDP"]
    ],
    notes: [
      "Criada para elevar o ambiente corporativo a um novo patamar de conforto e sofisticação. Desfrute de um amplo espaço de trabalho que proporciona o conforto necessário para enfrentar longas horas de tarefas diárias. Com um generoso gaveteiro equipado com 4 gavetas, oferecendo a segurança e organização que você precisa para manter seus documentos e pertences protegidos. Versátil e moderna, esta mesa se adapta perfeitamente a uma variedade de ambientes, desde escritórios corporativos até espaços de home office. A Mesa Small Acoplada é a escolha definitiva para quem busca o equilíbrio perfeito entre estilo, funcionalidade e qualidade. Prepare-se para se apaixonar pelo seu novo espaço de trabalho!"
    ],
    options: [
      "Dimens?o: 1,20x0,60x0,75",
      "Dimens?o: 1,40x0,60x0,75"
    ],
    colors: [
      "Cinza",
      "Grafite",
      "Nogal"
    ],
    tags: [
      "Prátika",
      "Escritório",
      "Gaveteiro",
      "Mesa"
    ]
  },
  {
    id: "mesa-pratika-acoplada-gaveteiro-misto-25mm",
    category: "mdf",
    section: "Linha Pratika",
    name: "Mesa Prátika Acoplada Gaveteiro Misto 25mm",
    code: "MA314060",
    summary: "Transforme seu escritório em um espaço de trabalho de alto nível com a Mesa Prátika acoplada.",
    specs: [
      ["Dimens?es", "2 varia??es dispon?veis"],
      ["Materiais", "Tampo, saia e Pés em Madeira MDP"]
    ],
    notes: [
      "Criada para elevar o ambiente corporativo a um novo patamar de conforto e sofisticação. Desfrute de um amplo espaço de trabalho que proporciona o conforto necessário para enfrentar longas horas de tarefas diárias. Com um generoso gaveteiro misto equipado com 3 gavetas, oferecendo a segurança e organização que você precisa para manter seus documentos e pertences protegidos. Versátil e moderna, esta mesa se adapta perfeitamente a uma variedade de ambientes, desde escritórios corporativos até espaços de home office. A Mesa Small Acoplada é a escolha definitiva para quem busca o equilíbrio perfeito entre estilo, funcionalidade e qualidade. Prepare-se para se apaixonar pelo seu novo espaço de trabalho!"
    ],
    options: [
      "Dimens?o: 1,20x0,60x0,75",
      "Dimens?o: 1,40x0,60x0,75"
    ],
    colors: [
      "Cinza",
      "Grafite",
      "Nogal"
    ],
    tags: [
      "Prátika",
      "Escritório",
      "Gaveteiro",
      "Mesa"
    ]
  },
  {
    id: "kit-mesa-pratika-pe-painel-25mm",
    category: "mesas",
    section: "Linha Pratika",
    name: "Kit Mesa Prátika Pé Painel 25mm",
    code: "KMPK12060",
    summary: "Transforme seu ambiente de trabalho com a Mesa Prátika Pé Painel.",
    specs: [
      ["Dimens?es", "4 varia??es dispon?veis"],
      ["Materiais", "Tampo, saia e Pés em Madeira MDP"]
    ],
    notes: [
      "Com design moderno e versátil, ela se integra facilmente a diferentes espaços — desde escritórios formais até home offices ou quartos de estudos. Seu visual clean se adapta a diversos estilos de decoração, adicionando um toque de elegância e contemporaneidade ao ambiente. Além disso, sua ampla superfície oferece o espaço ideal para realizar suas atividades com conforto, organização e praticidade no dia a dia."
    ],
    options: [
      "Dimens?o: 0,63x0,50x0,75",
      "Dimens?o: 1,00x0,60x0,75",
      "Dimens?o: 1,20x0,60x0,75",
      "Dimens?o: 1,40x0,60x0,75"
    ],
    colors: [
      "Cinza",
      "Grafite",
      "Nogal"
    ],
    tags: [
      "Prátika",
      "Escritório",
      "Mesa"
    ]
  },
  {
    id: "kit-mesa-gamer-engrossada-30mm",
    category: "mesas",
    section: "Linha Happy",
    name: "Kit Mesa Gamer Engrossada 30mm",
    code: "KMG13070",
    summary: "Desenvolvida especialmente para gamers que buscam performance, conforto e estilo, a Mesa Gamer combina design moderno e minimalista com funcionalidades pensadas para longas sessões de jogo.",
    specs: [
      ["Dimens?es", "1300x700x750mm"],
      ["Materiais", "Tampo em revestimento PET e PVC e pés em tubo metalon com pintura eletroestática"],
      ["Ferragem", "Preto"]
    ],
    notes: [
      "Seu formato ergonômico oferece maior apoio para os pulsos e antebraços, proporcionando uma experiência mais confortável e reduzindo a fadiga durante as partidas. Uma escolha ideal para quem quer transformar seu setup com praticidade e personalidade."
    ],
    colors: [
      "Crema",
      "Preto",
      "Preto Lacan",
      "Turquesa",
      "Amarelo",
      "Azul",
      "Bege",
      "Branco",
      "Laranja",
      "Verde",
      "Vermelho"
    ],
    tags: [
      "Happy",
      "Escritório",
      "Gamer",
      "Mesa"
    ]
  },
  {
    id: "divisoria-lateral-happy-15mm",
    category: "mesas",
    section: "Linha Happy",
    name: "Divisória Lateral Happy 15mm",
    code: "DHL6025",
    summary: "Garanta mais privacidade e conforto no seu ambiente de trabalho com as Divisórias Happy.",
    specs: [
      ["Dimens?es", "600x350mm"],
      ["Materiais", "Madeira MDP"]
    ],
    notes: [
      "Fabricadas em MDP de alta qualidade, oferecem resistência, durabilidade e um acabamento impecável. Práticas e funcionais, são ideais para uso como divisórias de mesas ou ilhas de trabalho, permitindo a separação de espaços de forma eficiente. Com elas, você cria um ambiente mais organizado e exclusivo, favorecendo a concentração e a produtividade nas tarefas do dia a dia."
    ],
    colors: [
      "Branco",
      "Chiaro",
      "Cinza",
      "Grafite",
      "Nogal",
      "Preto",
      "Verti"
    ],
    tags: [
      "Happy",
      "Divisória",
      "Escritório",
      "Mesa"
    ]
  },
  {
    id: "divisoria-happy-frontal",
    category: "mesas",
    section: "Linha Happy",
    name: "Divisória Happy Frontal",
    code: "DHF135",
    summary: "Garanta mais privacidade e conforto no seu ambiente de trabalho com as Divisórias Happy.",
    specs: [
      ["Dimens?es", "5 varia??es dispon?veis"],
      ["Materiais", "Madeira MDP"]
    ],
    notes: [
      "Fabricadas em MDP de alta qualidade, oferecem resistência, durabilidade e um acabamento impecável. Práticas e funcionais, são ideais para uso como divisórias de mesas ou ilhas de trabalho, permitindo a separação de espaços de forma eficiente. Com elas, você cria um ambiente mais organizado e exclusivo, favorecendo a concentração e a produtividade nas tarefas do dia a dia."
    ],
    options: [
      "Dimens?o: 0,80 Metro",
      "Dimens?o: 1,10 Metro",
      "Dimens?o: 1,35 Metro",
      "Dimens?o: 1,40 Metro",
      "Dimens?o: 1,60 Metro"
    ],
    colors: [
      "Branco",
      "Chiaro",
      "Cinza",
      "Grafite",
      "Nogal",
      "Preto",
      "Verti"
    ],
    tags: [
      "Happy",
      "Divisória",
      "Escritório",
      "Mesa"
    ]
  },
  {
    id: "gaveteiro-fixo-happy-corredica-telescopica-3-gaveta",
    category: "mdf",
    section: "Linha Happy",
    name: "Gaveteiro Fixo Happy Corrediça Telescópica 3 Gaveta",
    code: "GFH003",
    summary: "Otimize o espaço do seu escritório ou home office com o Gaveteiro Fixo Happy — uma solução inteligente para manter documentos e objetos pessoais sempre organizados e ao seu alcance.",
    specs: [
      ["Dimens?es", "400x260x320mm"],
      ["Materiais", "Madeira MDP"]
    ],
    notes: [
      "Equipado com corrediças telescópicas, garante abertura suave e sem esforço, proporcionando praticidade no uso diário. Para maior segurança, acompanha kit de chaves que permite o travamento simultâneo das duas gavetas, protegendo seus itens mais importantes com eficiência. Funcionalidade, segurança e organização em um só produto."
    ],
    colors: [
      "Branco",
      "Chiaro",
      "Cinza",
      "Grafite",
      "Nogal",
      "Preto",
      "Verti"
    ],
    tags: [
      "Happy",
      "Escritório",
      "Gaveteiro",
      "Mesa"
    ]
  },
  {
    id: "gaveteiro-fixo-happy-corredica-telescopica-2-gaveta",
    category: "mdf",
    section: "Linha Happy",
    name: "Gaveteiro Fixo Happy Corrediça Telescópica 2 Gaveta",
    code: "GFH002",
    summary: "Otimize o espaço do seu escritório ou home office com o Gaveteiro Fixo Happy — uma solução inteligente para manter documentos e objetos pessoais sempre organizados e ao seu alcance.",
    specs: [
      ["Dimens?es", "400x180x320mm"],
      ["Materiais", "Madeira MDP"]
    ],
    notes: [
      "Equipado com corrediças telescópicas, garante abertura suave e sem esforço, proporcionando praticidade no uso diário. Para maior segurança, acompanha kit de chaves que permite o travamento simultâneo das duas gavetas, protegendo seus itens mais importantes com eficiência. Funcionalidade, segurança e organização em um só produto."
    ],
    colors: [
      "Branco",
      "Chiaro",
      "Cinza",
      "Grafite",
      "Nogal",
      "Preto",
      "Verti"
    ],
    tags: [
      "Happy",
      "Escritório",
      "Gaveteiro",
      "Mesa"
    ]
  },
  {
    id: "gaveteiro-fixo-happy-corredica-telescopica-1-gaveta",
    category: "mdf",
    section: "Linha Happy",
    name: "Gaveteiro Fixo Happy Corrediça Telescópica 1 Gaveta",
    code: "GFH001",
    summary: "Otimize o espaço do seu escritório ou home office com o Gaveteiro Fixo Happy — uma solução inteligente para manter documentos e objetos pessoais sempre organizados e ao seu alcance.",
    specs: [
      ["Dimens?es", "400x100x320mm"],
      ["Materiais", "Madeira MDP"]
    ],
    notes: [
      "Equipado com corrediças telescópicas, garante abertura suave e sem esforço, proporcionando praticidade no uso diário. Para maior segurança, acompanha kit de chaves que permite o travamento simultâneo das duas gavetas, protegendo seus itens mais importantes com eficiência. Funcionalidade, segurança e organização em um só produto."
    ],
    colors: [
      "Branco",
      "Chiaro",
      "Cinza",
      "Grafite",
      "Nogal",
      "Preto",
      "Verti"
    ],
    tags: [
      "Happy",
      "Escritório",
      "Gaveteiro",
      "Mesa"
    ]
  },
  {
    id: "kit-conexao-happy-quadrada-30mm",
    category: "mesas",
    section: "Linha Happy",
    name: "Kit Conexão Happy Quadrada 30mm",
    code: "KCHQ6060",
    summary: "A Conexão Happy Quadrada com tampo em MDP foi desenvolvida para ampliar e transformar a funcionalidade da sua estação de trabalho.",
    specs: [
      ["Dimens?es", "600x600mm"],
      ["Materiais", "Tampo em Madeira MDP e pés em tubo metalon com pintura eletroestática"],
      ["Ferragem", "Branco, Cinza, Preto"]
    ],
    notes: [
      "Ideal para integrar mesas da mesma linha, ela permite criar configurações em “L”, tornando uma mesa simples em uma solução sofisticada, prática e versátil.Perfeita para otimizar o espaço e agregar mais elegância ao ambiente corporativo."
    ],
    colors: [
      "Branco",
      "Chiaro",
      "Cinza",
      "Grafite",
      "Nogal",
      "Preto",
      "Verti"
    ],
    tags: [
      "Happy",
      "Escritório",
      "Mesa"
    ]
  },
  {
    id: "gaveteiro-economico-happy-com-4-gavetas",
    category: "mdf",
    section: "Linha Happy",
    name: "Gaveteiro Econômico Happy Com 4 Gavetas",
    code: "GEH07033",
    summary: "Com design clean e minimalista, o Gaveteiro Econômico Happy é a escolha ideal para quem busca funcionalidade, organização e elegância em um só produto.",
    specs: [
      ["Dimens?es", "330x330mm"],
      ["Materiais", "Madeira MDP"]
    ],
    notes: [
      "Versátil, adapta-se com facilidade a diferentes ambientes, como escritórios, home offices ou qualquer espaço que exija praticidade com estilo. Produzido em MDP de alta qualidade, oferece excelente resistência, durabilidade e fácil manutenção no dia a dia. Seu visual moderno e sofisticado complementa a decoração, tornando o ambiente mais agradável e bem estruturado."
    ],
    colors: [
      "Branco",
      "Chiaro",
      "Cinza",
      "Grafite",
      "Nogal",
      "Preto",
      "Verti"
    ],
    tags: [
      "Happy",
      "Escritório",
      "Gaveteiro"
    ]
  },
  {
    id: "torre-retratil-3-tomadas",
    category: "mesas",
    section: "Acess?rios t?cnicos",
    name: "Torre Retratil 3 Tomadas",
    code: "TR003T",
    summary: "Torre Retratil 3 Tomadas, ideal para complemento de mesas.",
    specs: [
      ["Dimens?es", "768x290x768mm"],
      ["Ferragem", "Preto com Cinza"]
    ],
    tags: [
      "Acessórios",
      "Escritório",
      "Mesa",
      "Suporte",
      "Tomadas"
    ]
  },
  {
    id: "suporte-cpu-suspenso",
    category: "mesas",
    section: "Acess?rios t?cnicos",
    name: "Suporte CPU Suspenso",
    code: "SCPUS99",
    summary: "Susporte para CPU Suspenso, ideal para organização de escritórios e home office.",
    specs: [
      ["Dimens?es", "198x484x400mm"],
      ["Materiais", "Ferragem"],
      ["Ferragem", "Branco, Cinza, Preto"]
    ],
    tags: [
      "Acessórios",
      "Escritório",
      "Mesa",
      "Suporte"
    ]
  },
  {
    id: "calha-passa-fios-80cm",
    category: "mesas",
    section: "Acess?rios t?cnicos",
    name: "Calha Passa Fios 80cm",
    code: "CPF080",
    summary: "Calha Passa Fios de 80cm",
    specs: [
      ["Dimens?es", "80cm"],
      ["Materiais", "Ferragem"],
      ["Ferragem", "Cinza"]
    ],
    tags: [
      "Acessórios",
      "Calha",
      "Escritório",
      "Fios"
    ]
  },
  {
    id: "lixeira-slim",
    category: "mdf",
    section: "Linha Slim",
    name: "Lixeira Slim",
    code: "LX99",
    summary: "Lixeira Slim, fabricada em MDP, ideal para ambientação e organização de escritórios e home office.",
    specs: [
      ["Dimens?es", "347x400x345mm"],
      ["Materiais", "Madeira MDP"]
    ],
    colors: [
      "Branco",
      "Chiaro",
      "Cinza",
      "Grafite",
      "Nogal",
      "Preto",
      "Verti"
    ],
    tags: [
      "Slim",
      "Escritório",
      "Lixeira"
    ]
  },
  {
    id: "suporte-de-cpu-e-nobreack",
    category: "mesas",
    section: "Linha Slim",
    name: "Suporte De CPU e Nobreack",
    code: "SCN99",
    summary: "Suporte De CPU e Nobreacks Slim, fabricado em MDP, ideal para complemento de mesas.",
    specs: [
      ["Dimens?es", "250x305x420mm"],
      ["Materiais", "Madeira MDP"]
    ],
    colors: [
      "Branco",
      "Chiaro",
      "Cinza",
      "Grafite",
      "Nogal",
      "Preto",
      "Verti"
    ],
    tags: [
      "Slim",
      "Escritório",
      "Mesa",
      "Suporte"
    ]
  },
  {
    id: "kit-armario-alto-slim-15mm",
    category: "mdf",
    section: "Linha Slim",
    name: "Kit Armário Alto Slim 15mm",
    code: "KAAT8036",
    summary: "Os Armários Alto Slim são a escolha ideal para quem busca funcionalidade, durabilidade e design moderno.",
    specs: [
      ["Dimens?es", "800x360x1600mm"],
      ["Materiais", "Madeira MDP"]
    ],
    notes: [
      "Com traços clean e contemporâneos, adaptam-se facilmente a diferentes ambientes, como escritórios, empresas ou residências. Fabricados em MDP de alta qualidade, oferecem resistência, longa durabilidade e excelente acabamento, garantindo um móvel prático e confiável para o dia a dia."
    ],
    colors: [
      "Branco",
      "Chiaro",
      "Cinza",
      "Grafite",
      "Nogal",
      "Preto",
      "Verti"
    ],
    tags: [
      "Slim",
      "Armário",
      "Escritório"
    ]
  },
  {
    id: "arquivo-pasta-suspensa-4-gavetoes-slim",
    category: "mdf",
    section: "Linha Slim",
    name: "Arquivo Pasta Suspensa 4 Gavetões Slim",
    code: "APS1504",
    summary: "O Arquivo para Pasta Suspensa 4 Gavetões Slim é a solução ideal para manter seus documentos e materiais de trabalho organizados com praticidade, funcionalidade e um toque de estilo.",
    specs: [
      ["Dimens?es", "460x1280x446mm"],
      ["Materiais", "Madeira MDP"]
    ],
    notes: [
      "Versátil e compacto, adapta-se facilmente a diferentes ambientes seja no escritório, na empresa ou em casa otimizando o espaço e contribuindo para um ambiente mais organizado e produtivo."
    ],
    colors: [
      "Branco",
      "Chiaro",
      "Cinza",
      "Grafite",
      "Nogal",
      "Preto",
      "Verti"
    ],
    tags: [
      "Slim",
      "Arquivo",
      "Escritório",
      "Gaveta"
    ]
  },
  {
    id: "gaveteiro-volante-4-gavetas-30mm",
    category: "mdf",
    section: "Linha Slim",
    name: "Gaveteiro Volante 4 Gavetas 30mm",
    code: "GV3004",
    summary: "Com design clean e minimalista, o Gaveteiro Volante 4 gavetas se encaixa perfeitamente em diversos ambientes, unindo funcionalidade, organização e elegância.",
    specs: [
      ["Dimens?es", "459x697x406mm"],
      ["Materiais", "Madeira MDP"]
    ],
    notes: [
      "Fabricado em MDP de alta qualidade, oferece resistência, durabilidade e fácil manutenção no dia a dia. Amplo espaço interno para organização, Base com rodízios para maior mobilidade, Gavetas com corrediças metálicas, Design moderno e sofisticado, Ideal para escritórios, home offices ou qualquer espaço que exija praticidade com um toque de estilo."
    ],
    colors: [
      "Branco",
      "Chiaro",
      "Cinza",
      "Grafite",
      "Nogal",
      "Preto",
      "Verti"
    ],
    tags: [
      "Slim",
      "Escritório",
      "Gaveta"
    ]
  },
  {
    id: "gaveteiro-volante-misto-30mm",
    category: "mdf",
    section: "Linha Slim",
    name: "Gaveteiro Volante Misto 30mm",
    code: "GV3003",
    summary: "Com design clean e minimalista, o Gaveteiro Volante Misto se encaixa perfeitamente em diversos ambientes, unindo funcionalidade, organização e elegância.",
    specs: [
      ["Dimens?es", "459x697x406mm"],
      ["Materiais", "Madeira MDP"]
    ],
    notes: [
      "Fabricado em MDP de alta qualidade, oferece resistência, durabilidade e fácil manutenção no dia a dia. Amplo espaço interno para organização, Base com rodízios para maior mobilidade, Gavetas com corrediças metálicas, Design moderno e sofisticado, Ideal para escritórios, home offices ou qualquer espaço que exija praticidade com um toque de estilo."
    ],
    colors: [
      "Branco",
      "Chiaro",
      "Cinza",
      "Grafite",
      "Nogal",
      "Preto",
      "Verti"
    ],
    tags: [
      "Slim",
      "Escritório",
      "Gaveta"
    ]
  },
  {
    id: "gaveteiro-fixo-slim-3-gaveta",
    category: "mdf",
    section: "Linha Slim",
    name: "Gaveteiro Fixo Slim 3 Gaveta",
    code: "GFE003",
    summary: "Aproveite melhor o espaço do seu escritório ou home office com o Gaveteiro Fixo Slim!",
    specs: [
      ["Dimens?es", "402x260x322mm"],
      ["Materiais", "Madeira MDP"]
    ],
    notes: [
      "Compatível com diversos modelos de mesa, é uma solução prática e funcional para manter seus documentos e pertences organizados e sempre ao seu alcance. Para maior segurança, o gaveteiro acompanha um kit de chaves que permite o travamento das duas gavetas, protegendo seus itens mais importantes. Leve mais praticidade e organização ao seu ambiente de trabalho ou estudo com um design inteligente e eficiente."
    ],
    colors: [
      "Branco",
      "Chiaro",
      "Cinza",
      "Grafite",
      "Nogal",
      "Preto",
      "Verti"
    ],
    tags: [
      "Slim",
      "Escritório",
      "Gaveta"
    ]
  },
  {
    id: "gaveteiro-fixo-slim-2-gaveta",
    category: "mdf",
    section: "Linha Slim",
    name: "Gaveteiro Fixo Slim 2 Gaveta",
    code: "GFE002",
    summary: "Aproveite melhor o espaço do seu escritório ou home office com o Gaveteiro Fixo Slim!",
    specs: [
      ["Dimens?es", "402x180x322mm"],
      ["Materiais", "Madeira MDP"]
    ],
    notes: [
      "Compatível com diversos modelos de mesa, é uma solução prática e funcional para manter seus documentos e pertences organizados e sempre ao seu alcance. Para maior segurança, o gaveteiro acompanha um kit de chaves que permite o travamento das duas gavetas, protegendo seus itens mais importantes. Leve mais praticidade e organização ao seu ambiente de trabalho ou estudo com um design inteligente e eficiente."
    ],
    colors: [
      "Branco",
      "Chiaro",
      "Cinza",
      "Grafite",
      "Nogal",
      "Preto",
      "Verti"
    ],
    tags: [
      "Slim",
      "Escritório",
      "Gaveta"
    ]
  },
  {
    id: "gaveteiro-fixo-slim-1-gaveta",
    category: "mdf",
    section: "Linha Slim",
    name: "Gaveteiro Fixo Slim 1 Gaveta",
    code: "GFE001",
    summary: "Aproveite melhor o espaço do seu escritório ou home office com o Gaveteiro Fixo Slim!",
    specs: [
      ["Dimens?es", "402x100x322mm"],
      ["Materiais", "Madeira MDP"]
    ],
    notes: [
      "Compatível com diversos modelos de mesa, é uma solução prática e funcional para manter seus documentos e pertences organizados e sempre ao seu alcance. Para maior segurança, o gaveteiro acompanha um kit de chaves que permite o travamento das duas gavetas, protegendo seus itens mais importantes. Leve mais praticidade e organização ao seu ambiente de trabalho ou estudo com um design inteligente e eficiente."
    ],
    colors: [
      "Branco",
      "Chiaro",
      "Cinza",
      "Grafite",
      "Nogal",
      "Preto",
      "Verti"
    ],
    tags: [
      "Slim",
      "Escritório",
      "Gaveta"
    ]
  },
  {
    id: "conexao-angular-15mm",
    category: "mesas",
    section: "Linha Slim",
    name: "Conexão Angular 15mm",
    code: "CXA0015",
    summary: "Une duas mesas em formato de L proporcionam um espaço funcional à frente do usuário, oferecendo suporte ideal para computador, impressora e demais atividades do dia a dia.",
    specs: [
      ["Dimens?es", "600x600mm"],
      ["Materiais", "Tampo em Madeira MDP"]
    ],
    colors: [
      "Branco",
      "Chiaro",
      "Cinza",
      "Grafite",
      "Nogal",
      "Preto",
      "Verti"
    ],
    tags: [
      "Slim",
      "Escritório",
      "Mesa"
    ]
  },
  {
    id: "kit-mesa-wood-15mm",
    category: "mesas",
    section: "Linha Slim",
    name: "Kit Mesa Wood 15mm",
    code: "KMWD12060",
    summary: "Criativa e imponente, a linha Wood foi desenvolvida para trazer praticidade ao dia a dia com um design surpreendente.",
    specs: [
      ["Dimens?es", "4 varia??es dispon?veis"],
      ["Materiais", "Tampo, saia e Pés em Madeira MDP"]
    ],
    notes: [
      "Suas linhas minimalistas e elegantes se adaptam a qualquer estilo de ambiente — do escritório mais rústico ao mais descolado, passando pelo clássico até os cheios de personalidade. Produzida em MDP de 15mm, essa peça versátil pode ser utilizada tanto como mesa de atendimento quanto de trabalho, unindo funcionalidade e estilo."
    ],
    options: [
      "Dimens?o: 1200x600x750mm",
      "Dimens?o: 1500x600x750mm",
      "Dimens?o: 680x600x750mm",
      "Dimens?o: 900x600x750mm"
    ],
    colors: [
      "Branco",
      "Chiaro",
      "Cinza",
      "Grafite",
      "Nogal",
      "Preto",
      "Verti"
    ],
    tags: [
      "Slim",
      "Escritório",
      "Mesa"
    ]
  },
  {
    id: "kit-mesa-slim-15mm",
    category: "mesas",
    section: "Linha Slim",
    name: "Kit Mesa Slim 15mm",
    code: "KMSL12060",
    summary: "Criativa e imponente, a linha Slim foi desenvolvida para trazer praticidade ao dia a dia com um design surpreendente.",
    specs: [
      ["Dimens?es", "11 varia??es dispon?veis"],
      ["Materiais", "Tampo e saia em Madeira MDP e pés em tubo metalon com pintura eletroestática"],
      ["Ferragem", "Cinza, Preto"]
    ],
    notes: [
      "Suas linhas minimalistas e elegantes se adaptam a qualquer estilo de ambiente — do escritório mais rústico ao mais descolado, passando pelo clássico até os cheios de personalidade. Produzida em MDP de 15mm, essa peça versátil pode ser utilizada tanto como mesa de atendimento quanto de trabalho, unindo funcionalidade e estilo."
    ],
    options: [
      "Dimens?o: 1000x600x750mm",
      "Dimens?o: 1100x600x750mm",
      "Dimens?o: 1200x600x750mm",
      "Dimens?o: 1300x600x750mm",
      "Dimens?o: 1400x600x750mm",
      "Dimens?o: 1500x600x750mm",
      "Dimens?o: 1600x600x750mm",
      "Dimens?o: 1700x600x750mm",
      "Dimens?o: 1800x600x750mm",
      "Dimens?o: 680x600x750mm",
      "Dimens?o: 900x600x750mm"
    ],
    colors: [
      "Branco",
      "Chiaro",
      "Cinza",
      "Grafite",
      "Nogal",
      "Preto",
      "Verti"
    ],
    tags: [
      "Slim",
      "Escritório",
      "Mesa"
    ]
  }
];

const SITE_PRODUCT_MEDIA = {
  "kit-longarina-florenca-3-lugares-com-braco-individual": "https://angelismoveis.com/wp-content/uploads/2025/08/longarina-florenca-3-lugares-com-braco-individual-410x492.jpg",
  "kit-longarina-florenca-3-lugares-com-braco-compartilhado": "https://angelismoveis.com/wp-content/uploads/2025/08/longarina-florenca-3-lugares-com-braco-compartilhado-410x492.jpg",
  "kit-longarina-florenca-3-lugares-com-braco-lateral": "https://angelismoveis.com/wp-content/uploads/2025/08/longarina-florenca-3-lugares-com-braco-lateral-410x492.jpg",
  "kit-longarina-florenca-3-lugares": "https://angelismoveis.com/wp-content/uploads/2025/08/longarina-florenca-3-lugares-410x492.jpg",
  "kit-cadeira-caixa-florenca-com-braco": "https://angelismoveis.com/wp-content/uploads/2025/08/cadeira-caixa-florenca-com-braco-410x492.jpg",
  "kit-cadeira-caixa-florenca-sem-braco": "https://angelismoveis.com/wp-content/uploads/2025/08/cadeira-caixa-florenca-sem-braco-410x492.jpg",
  "kit-cadeira-giratoria-florenca-com-relax-com-braco": "https://angelismoveis.com/wp-content/uploads/2025/08/cadeira-giratoria-florenca-com-relax-com-braco-410x492.jpg",
  "kit-cadeira-giratoria-florenca-com-braco": "https://angelismoveis.com/wp-content/uploads/2025/08/cadeira-giratoria-florenca-com-braco-410x492.jpg",
  "kit-cadeira-giratoria-florenca-sem-braco": "https://angelismoveis.com/wp-content/uploads/2025/08/cadeira-giratoria-florenca-sem-braco-410x492.jpg",
  "kit-longarina-diretor-braco-escamoteavel-3-lugares": "https://angelismoveis.com/wp-content/uploads/2025/09/longarina-diretor-3-lugares-braco-escamoteavel-tecido-preto-410x492.jpg",
  "kit-longarina-diretor-prancheta-dobravel-3-lugares": "https://angelismoveis.com/wp-content/uploads/2025/09/longarina-diretor-3-lugares-prancheta-dobravel-tecido-preto-410x492.jpg",
  "kit-longarina-executiva-braco-escamoteavel-3-lugares": "https://angelismoveis.com/wp-content/uploads/2025/08/longarnia-executiva-braco-escamoteavel-direito-3-lugares-410x492.jpg",
  "kit-longarina-executiva-prancheta-dobravel-3-lugares": "https://angelismoveis.com/wp-content/uploads/2025/08/longarina-executiva-prancheta-dobravel-3-lugares-410x492.jpg",
  "kit-longarina-secretaria-f10-prancheta-dobravel-3-lugares": "https://angelismoveis.com/wp-content/uploads/2025/09/longarina-secretaria-f10-prancheta-dobravel-3-lugares-tecido-preto-410x492.jpg",
  "kit-longarina-diretor-3-lugares-com-braco-individual": "https://angelismoveis.com/wp-content/uploads/2025/09/longarina-diretor-3-lugares-com-braco-individual-tecido-preto-410x492.jpg",
  "kit-longarina-diretor-3-lugares-com-braco-compartilhado": "https://angelismoveis.com/wp-content/uploads/2025/09/longarina-diretor-3-lugares-com-braco-compartilhado-tecido-preto-410x492.jpg",
  "kit-longarina-diretor-3-lugares-com-braco-lateral": "https://angelismoveis.com/wp-content/uploads/2025/09/longarina-diretor-3-lugares-com-braco-lateral-tecido-preto-410x492.jpg",
  "kit-longarina-diretor-3-lugares": "https://angelismoveis.com/wp-content/uploads/2025/09/longarina-diretor-3-lugares-tecido-preto-410x492.jpg",
  "kit-longarina-executiva-3-lugares-com-braco-individual": "https://angelismoveis.com/wp-content/uploads/2025/08/longarina-executiva-3-lugares-com-braco-individual-410x492.jpg",
  "kit-longarina-executiva-3-lugares-com-braco-compartilhado": "https://angelismoveis.com/wp-content/uploads/2025/08/longarina-executiva-3-lugares-com-braco-compartilhado-410x492.jpg",
  "kit-longarina-executiva-3-lugares-com-braco-lateral": "https://angelismoveis.com/wp-content/uploads/2025/08/longarina-executiva-3-lugares-com-braco-tubarao-lateral-410x492.jpg",
  "kit-longarina-executiva-3-lugares": "https://angelismoveis.com/wp-content/uploads/2025/08/longarina-executiva-3-lugares-410x492.jpg",
  "kit-longarina-secretaria-f10-3-lugares": "https://angelismoveis.com/wp-content/uploads/2025/09/longarina-secretaria-f10-3-lugares-tecido-preto-410x492.jpg",
  "kit-banqueta-clip": "https://angelismoveis.com/wp-content/uploads/2025/09/banqueta-clip-preta-tecido-preto-410x492.jpg",
  "kit-cadeira-nova-hall-braco-dobravel": "https://angelismoveis.com/wp-content/uploads/2025/09/cadeira-nova-hall-preta-braco-dobravel-tecido-preto-410x492.jpg",
  "kit-cadeira-nova-hall-fixa": "https://angelismoveis.com/wp-content/uploads/2026/02/cadeira-nova-hall-fixa-preta-tecido-preto-410x492.jpg",
  "kit-cadeira-hall-braco-dobravel": "https://angelismoveis.com/wp-content/uploads/2025/09/cadeira-hall-preta-braco-dobravel-tecido-preto-410x492.jpg",
  "kit-cadeira-hall-fixa": "https://angelismoveis.com/wp-content/uploads/2025/09/cadeira-hall-fixa-preta-tecido-preto-410x492.jpg",
  "kit-estante-light": "https://angelismoveis.com/wp-content/uploads/2025/09/estante-light-90-x-25-x-200-nogal-410x492.jpg",
  "kit-armario-small": "https://angelismoveis.com/wp-content/uploads/2025/09/armario-small-60-x-30-x-130-verti-410x492.jpg",
  "kit-estante-small": "https://angelismoveis.com/wp-content/uploads/2025/09/estante-small-55-x-26-x-135-verti-410x492.jpg",
  "kit-mesa-small-acoplada-15mm": "https://angelismoveis.com/wp-content/uploads/2025/09/mesa-small-acoplada-15mm-110-x-45-x-75-verti-410x492.jpg",
  "kit-mesa-small-multiuso-15mm": "https://angelismoveis.com/wp-content/uploads/2026/03/mesa-small-multiuso-15mm-110-x-45-x-75-verti-410x492.jpg",
  "kit-gavetao-small-corredica-telescopica": "https://angelismoveis.com/wp-content/uploads/2025/09/gavetao-small-corredica-telescopica-verti-410x492.jpg",
  "divisoria-lateral-pratika-15mm": "https://angelismoveis.com/wp-content/uploads/2025/09/divisoria-lateral-pratika-15mm-60-x-25-nogal-410x492.jpg",
  "divisoria-pratika-para-mesa-de-apoio": "https://angelismoveis.com/wp-content/uploads/2025/09/divisoria-pratika-para-mesa-de-apoio-nogal-410x492.jpg",
  "divisoria-pratika-frontal": "https://angelismoveis.com/wp-content/uploads/2025/09/divisoria-pratika-frontal-120-nogal-410x492.jpg",
  "conexao-pratika-quadrada-25mm": "https://angelismoveis.com/wp-content/uploads/2025/09/conexao-pratika-quadrada-25mm-60-x-60-nogal-410x492.jpg",
  "armario-balcao-pratika-30mm": "https://angelismoveis.com/wp-content/uploads/2025/09/armario-balcao-pratika-30mm-130-x-45-x-75-nogal-410x492.jpg",
  "armario-torre-pratika-30mm": "https://angelismoveis.com/wp-content/uploads/2025/09/armario-torre-pratika-30mm-40-x-45-x-160-nogal-410x492.jpg",
  "torre-pratika-30mm": "https://angelismoveis.com/wp-content/uploads/2025/09/torre-pratika-30mm-40-x-45-x-160-nogal-410x492.jpg",
  "armario-super-alto-multiuso-pratika-30mm": "https://angelismoveis.com/wp-content/uploads/2025/09/armario-super-alto-multiuso-pratika-30mm-80-x-45-x-210-nogal-410x492.jpg",
  "armario-alto-multiuso-pratika-30mm": "https://angelismoveis.com/wp-content/uploads/2026/02/armario-alto-multiuso-pratika-30mm-80-x-45-x-160-nogal-410x492.jpg",
  "armario-medio-pratika-30mm": "https://angelismoveis.com/wp-content/uploads/2025/09/armario-medio-pratika-30mm-80-x-45-x-130-nogal-410x492.jpg",
  "armario-misto-30mm-pratika": "https://angelismoveis.com/wp-content/uploads/2025/09/armario-misto-30mm-86-x-45-x-66-pratika-nogal-410x492.jpg",
  "arquivo-pasta-suspensa-4-gavetoes-30mm-pratika": "https://angelismoveis.com/wp-content/uploads/2025/09/arquivo-pasta-suspensa-4-gavetoes-30mm-pratika-nogal-410x492.jpg",
  "gaveteiro-volante-4-gavetas-30mm-pratika": "https://angelismoveis.com/wp-content/uploads/2025/09/gaveteiro-volante-4-gavetas-30mm-pratika-nogal-410x492.jpg",
  "gaveteiro-volante-misto-30mm-pratika": "https://angelismoveis.com/wp-content/uploads/2025/09/gaveteiro-volante-misto-30mm-pratika-nogal-410x492.jpg",
  "gaveteiro-fixo-pratika-corredica-telescopica-3-gaveta": "https://angelismoveis.com/wp-content/uploads/2025/09/gaveteiro-fixo-pratika-corredica-telescopica-3-gaveta-nogal-410x492.jpg",
  "gaveteiro-fixo-pratika-corredica-telescopica-2-gaveta": "https://angelismoveis.com/wp-content/uploads/2025/09/gaveteiro-fixo-pratika-corredica-telescopica-2-gaveta-nogal-410x492.jpg",
  "gaveteiro-fixo-pratika-corredica-telescopica-1-gaveta": "https://angelismoveis.com/wp-content/uploads/2025/09/gaveteiro-fixo-pratika-corredica-telescopica-1-gaveta-nogal-410x492.jpg",
  "mesa-de-apoio-pratika-25mm-com-armario-misto": "https://angelismoveis.com/wp-content/uploads/2025/09/mesa-de-apoio-pratika-25mm-90-x-45-com-armario-misto-nogal-410x492.jpg",
  "mesa-de-apoio-pratika-25mm-com-gaveteiro-4-gavetas": "https://angelismoveis.com/wp-content/uploads/2025/09/mesa-de-apoio-pratika-25mm-90-x-45-com-gaveteiro-4-gavetas-nogal-410x492.jpg",
  "mesa-de-apoio-pratika-25mm-com-gaveteiro-misto": "https://angelismoveis.com/wp-content/uploads/2025/09/mesa-de-apoio-pratika-25mm-90-x-45-com-gaveteiro-misto-nogal-410x492.jpg",
  "mesa-pratika-acoplada-gaveteiro-4-gavetas-25mm": "https://angelismoveis.com/wp-content/uploads/2025/09/mesa-pratika-acoplada-com-gaveteiro-4-gavetas-25mm-140-x-60-x-75-nogal-410x492.jpg",
  "mesa-pratika-acoplada-gaveteiro-misto-25mm": "https://angelismoveis.com/wp-content/uploads/2025/09/mesa-pratika-acoplada-gaveteiro-misto-25mm-140-x-60-x-75-nogal-410x492.jpg",
  "kit-mesa-pratika-pe-painel-25mm": "https://angelismoveis.com/wp-content/uploads/2026/03/mesa-pratika-pe-painel-25mm-120-x-50-x-75-nogal-410x492.jpg",
  "kit-mesa-gamer-engrossada-30mm": "https://angelismoveis.com/wp-content/uploads/2025/09/mesa-gamer-engrossada-30mm-130-x-70-x-75-preto-410x492.jpg",
  "divisoria-lateral-happy-15mm": "https://angelismoveis.com/wp-content/uploads/2025/09/divisoria-lateral-happy-15mm-60-x-35-nogal-410x492.jpg",
  "divisoria-happy-frontal": "https://angelismoveis.com/wp-content/uploads/2025/09/divisoria-happy-frontal-135-nogal-410x492.jpg",
  "gaveteiro-fixo-happy-corredica-telescopica-3-gaveta": "https://angelismoveis.com/wp-content/uploads/2025/09/gaveteiro-fixo-happy-corredica-telescopica-3-gavetas-nogal-410x492.jpg",
  "gaveteiro-fixo-happy-corredica-telescopica-2-gaveta": "https://angelismoveis.com/wp-content/uploads/2025/09/gaveteiro-fixo-happy-corredica-telescopica-2-gaveta-nogal-410x492.jpg",
  "gaveteiro-fixo-happy-corredica-telescopica-1-gaveta": "https://angelismoveis.com/wp-content/uploads/2025/09/gaveteiro-fixo-happy-corredica-telescopica-1-gaveta-nogal-410x492.jpg",
  "kit-conexao-happy-quadrada-30mm": "https://angelismoveis.com/wp-content/uploads/2025/09/conexao-happy-quadrada-30mm-60-x-60-nogal-410x492.jpg",
  "gaveteiro-economico-happy-com-4-gavetas": "https://angelismoveis.com/wp-content/uploads/2025/09/gaveteiro-economico-happy-com-4-gavetas-33-x-33-nogal-410x492.jpg",
  "torre-retratil-3-tomadas": "https://angelismoveis.com/wp-content/uploads/2025/09/torre-retratil-3-tomadas-410x492.jpg",
  "suporte-cpu-suspenso": "https://angelismoveis.com/wp-content/uploads/2025/09/suporte-cpu-suspenso-cinza-410x492.jpg",
  "calha-passa-fios-80cm": "https://angelismoveis.com/wp-content/uploads/2025/09/calha-passa-fios-80cm-410x492.jpg",
  "lixeira-slim": "https://angelismoveis.com/wp-content/uploads/2025/09/lixeira-slim-nogal-410x492.jpg",
  "suporte-de-cpu-e-nobreack": "https://angelismoveis.com/wp-content/uploads/2025/09/suporte-de-cpu-e-nobreack-slim-nogal-410x492.jpg",
  "suporte-de-teclado": "https://angelismoveis.com/wp-content/uploads/2025/09/suporte-de-teclado-slim-nogal.jpg",
  "suporte-de-teclado-para-mesa-happy": "https://angelismoveis.com/wp-content/uploads/2025/09/suporte-de-teclado-para-mesa-happy-nogal.jpg",
  "kit-armario-alto-slim-15mm": "https://angelismoveis.com/wp-content/uploads/2025/09/armario-alto-slim-15mm-nogal-410x492.jpg",
  "kit-armario-semi-aberto-slim-15mm": "https://angelismoveis.com/wp-content/uploads/2025/09/armario-semi-aberto-slim-15mm-nogal.jpg",
  "kit-armario-baixo-slim-15mm": "https://angelismoveis.com/wp-content/uploads/2025/09/armario-baixo-slim-15mm-nogal.jpg",
  "arquivo-pasta-suspensa-4-gavetoes-slim": "https://angelismoveis.com/wp-content/uploads/2025/09/arquivo-pasta-suspensa-4-gavetas-slim-nogal-410x492.jpg",
  "armario-baixo-pratika-30mm": "https://angelismoveis.com/wp-content/uploads/2025/09/armario-baixo-pratika-30mm-80-x-45-x-75-nogal.jpg",
  "gaveteiro-volante-4-gavetas-30mm": "https://angelismoveis.com/wp-content/uploads/2025/09/gaveteiro-volante-4-gavetas-30mm-slim-nogal-410x492.jpg",
  "gaveteiro-volante-misto-30mm": "https://angelismoveis.com/wp-content/uploads/2025/09/gaveteiro-volante-misto-30mm-slim-nogal-410x492.jpg",
  "gaveteiro-fixo-slim-3-gaveta": "https://angelismoveis.com/wp-content/uploads/2025/09/gaveteiro-fixo-slim-3-gaveta-nogal-410x492.jpg",
  "gaveteiro-fixo-slim-2-gaveta": "https://angelismoveis.com/wp-content/uploads/2025/09/gaveteiro-fixo-slim-2-gaveta-nogal-410x492.jpg",
  "gaveteiro-fixo-slim-1-gaveta": "https://angelismoveis.com/wp-content/uploads/2025/09/gaveteiro-fixo-slim-1-gaveta-nogal-410x492.jpg",
  "conexao-angular-15mm": "https://angelismoveis.com/wp-content/uploads/2025/09/conexao-angular-15mm-nogal-410x492.jpg",
  "kit-mesa-reuniao-redonda-30mm-happy-tampo-engrossado": "https://angelismoveis.com/wp-content/uploads/2025/08/mesa-reuniao-redonda-25mm-happy-1200mm-nogal.jpg",
  "kit-mesa-redonda-eiffel-engrossado-30mm": "https://angelismoveis.com/wp-content/uploads/2025/09/mesa-redonda-eiffel-90-engrossado-30mm-preto.jpg",
  "kit-mesa-de-apoio-happy-30mm-com-gaveteiro-misto-com-armario": "https://angelismoveis.com/wp-content/uploads/2025/09/mesa-de-apoio-happy-30mm-90-x-45-com-armario-misto-nogal.jpg",
  "kit-mesa-de-apoio-happy-30mm-com-gaveteiro-4-gavetas": "https://angelismoveis.com/wp-content/uploads/2025/09/mesa-de-apoio-happy-30mm-90-x-45-com-gaveteiro-4-gavetas-nogal.jpg",
  "kit-mesa-de-apoio-happy-30mm-com-gaveteiro-misto": "https://angelismoveis.com/wp-content/uploads/2025/09/mesa-de-apoio-happy-30mm-90-x-45-com-gaveteiro-misto-nogal.jpg",
  "kit-mesa-de-apoio-happy-30mm-com-pe-de-ferro": "https://angelismoveis.com/wp-content/uploads/2025/09/mesa-de-apoio-happy-30mm-90-x-45-com-o-pe-de-ferro-nogal.jpg",
  "kit-mesa-wood-15mm": "https://angelismoveis.com/wp-content/uploads/2026/03/mesa-wood-15mm-150-x-60-x-75-nogal-410x492.jpg",
  "kit-mesa-slim-15mm": "https://angelismoveis.com/wp-content/uploads/2025/09/mesa-slim-15mm-150-x-60-x-75-nogal-410x492.jpg"
};

const REFERENCE_PRODUCT_MEDIA = {
  lDesk: SITE_PRODUCT_MEDIA["mesa-pratika-acoplada-gaveteiro-misto-25mm"],
  desk: SITE_PRODUCT_MEDIA["kit-mesa-slim-15mm"],
  homeDesk: SITE_PRODUCT_MEDIA["kit-mesa-wood-15mm"],
  compactDesk: SITE_PRODUCT_MEDIA["kit-mesa-small-multiuso-15mm"],
  attachedDesk: SITE_PRODUCT_MEDIA["kit-mesa-small-acoplada-15mm"],
  gamerDesk: SITE_PRODUCT_MEDIA["kit-mesa-gamer-engrossada-30mm"],
  keyboardTray: SITE_PRODUCT_MEDIA["suporte-de-teclado"] || SITE_PRODUCT_MEDIA["suporte-de-teclado-para-mesa-happy"],
  drawer2: SITE_PRODUCT_MEDIA["gaveteiro-fixo-pratika-corredica-telescopica-2-gaveta"],
  drawer2Slim: SITE_PRODUCT_MEDIA["gaveteiro-fixo-slim-2-gaveta"],
  drawer3: SITE_PRODUCT_MEDIA["gaveteiro-fixo-pratika-corredica-telescopica-3-gaveta"],
  drawer4: SITE_PRODUCT_MEDIA["gaveteiro-volante-4-gavetas-30mm-pratika"],
  drawerMixed: SITE_PRODUCT_MEDIA["gaveteiro-volante-misto-30mm-pratika"],
  drawerMixedSlim: SITE_PRODUCT_MEDIA["gaveteiro-volante-misto-30mm"],
  straightDeskPratika: SITE_PRODUCT_MEDIA["kit-mesa-pratika-pe-painel-25mm"],
  supportDeskCabinet: SITE_PRODUCT_MEDIA["mesa-de-apoio-pratika-25mm-com-armario-misto"],
  supportDeskDrawer: SITE_PRODUCT_MEDIA["mesa-de-apoio-pratika-25mm-com-gaveteiro-4-gavetas"],
  supportDeskMixed: SITE_PRODUCT_MEDIA["mesa-de-apoio-pratika-25mm-com-gaveteiro-misto"],
  supportDeskMetal: SITE_PRODUCT_MEDIA["kit-mesa-de-apoio-happy-30mm-com-pe-de-ferro"],
  supportDeskHappyCabinet: SITE_PRODUCT_MEDIA["kit-mesa-de-apoio-happy-30mm-com-gaveteiro-misto-com-armario"],
  supportDeskHappyDrawer: SITE_PRODUCT_MEDIA["kit-mesa-de-apoio-happy-30mm-com-gaveteiro-4-gavetas"],
  supportDeskHappyMixed: SITE_PRODUCT_MEDIA["kit-mesa-de-apoio-happy-30mm-com-gaveteiro-misto"],
  connection: SITE_PRODUCT_MEDIA["conexao-pratika-quadrada-25mm"],
  connectionAngled: SITE_PRODUCT_MEDIA["conexao-angular-15mm"],
  connectionHappy: SITE_PRODUCT_MEDIA["kit-conexao-happy-quadrada-30mm"],
  power: SITE_PRODUCT_MEDIA["torre-retratil-3-tomadas"],
  cpuSupport: SITE_PRODUCT_MEDIA["suporte-cpu-suspenso"],
  cpuSupportFloor: SITE_PRODUCT_MEDIA["suporte-de-cpu-e-nobreack"],
  cableTray: SITE_PRODUCT_MEDIA["calha-passa-fios-80cm"],
  divider: SITE_PRODUCT_MEDIA["divisoria-pratika-frontal"],
  fixedChair: SITE_PRODUCT_MEDIA["kit-cadeira-hall-fixa"],
  fixedChairArm: SITE_PRODUCT_MEDIA["kit-cadeira-hall-braco-dobravel"],
  designChair: SITE_PRODUCT_MEDIA["kit-cadeira-nova-hall-fixa"],
  operationalChair: SITE_PRODUCT_MEDIA["kit-cadeira-giratoria-florenca-sem-braco"],
  executiveChair: SITE_PRODUCT_MEDIA["kit-cadeira-giratoria-florenca-com-braco"],
  premiumChair: SITE_PRODUCT_MEDIA["kit-cadeira-giratoria-florenca-com-relax-com-braco"],
  boxChair: SITE_PRODUCT_MEDIA["kit-cadeira-caixa-florenca-com-braco"],
  longarinaSecretary: SITE_PRODUCT_MEDIA["kit-longarina-secretaria-f10-3-lugares"],
  longarinaExecutive: SITE_PRODUCT_MEDIA["kit-longarina-executiva-3-lugares"],
  longarinaDirector: SITE_PRODUCT_MEDIA["kit-longarina-diretor-3-lugares"],
  stool: SITE_PRODUCT_MEDIA["kit-banqueta-clip"],
  shelf: SITE_PRODUCT_MEDIA["kit-estante-light"],
  lowCabinet: SITE_PRODUCT_MEDIA["armario-balcao-pratika-30mm"],
  lowCabinetExact: SITE_PRODUCT_MEDIA["armario-baixo-pratika-30mm"] || SITE_PRODUCT_MEDIA["kit-armario-baixo-slim-15mm"],
  mediumCabinet: SITE_PRODUCT_MEDIA["armario-medio-pratika-30mm"],
  semiOpenCabinet: SITE_PRODUCT_MEDIA["kit-armario-semi-aberto-slim-15mm"],
  tallCabinet: SITE_PRODUCT_MEDIA["kit-armario-alto-slim-15mm"],
  tallCabinetExact: SITE_PRODUCT_MEDIA["armario-alto-multiuso-pratika-30mm"] || SITE_PRODUCT_MEDIA["kit-armario-alto-slim-15mm"],
  fileCabinet: SITE_PRODUCT_MEDIA["arquivo-pasta-suspensa-4-gavetoes-30mm-pratika"],
  fileCabinetSlim: SITE_PRODUCT_MEDIA["arquivo-pasta-suspensa-4-gavetoes-slim"],
  cabinetSuperTall: SITE_PRODUCT_MEDIA["armario-super-alto-multiuso-pratika-30mm"],
  drawer4Slim: SITE_PRODUCT_MEDIA["gaveteiro-volante-4-gavetas-30mm"],
  drawerEconomy: SITE_PRODUCT_MEDIA["gaveteiro-economico-happy-com-4-gavetas"],
  lDeskSlim: "https://angelismoveis.com/wp-content/uploads/2025/09/mesa-l-slim-15mm-140-x-140-x-60-75-nogal.jpg",
  lDeskWood: "https://angelismoveis.com/wp-content/uploads/2025/09/mesa-l-wood-15mm-140-x-140-x-60-75-nogal.jpg",
  happyDesk30: "https://angelismoveis.com/wp-content/uploads/2025/09/mesa-happy-30mm-135-x-60-x-75-nogal.jpg",
  lightDesk15: "https://angelismoveis.com/wp-content/uploads/2025/09/mesa-light-15mm-90-x-52-x-75-nogal.jpg",
  happySupportDrawer:
    "https://angelismoveis.com/wp-content/uploads/2025/09/mesa-de-apoio-happy-30mm-90-x-45-com-gaveteiro-4-gavetas-nogal.jpg",
  happySupportMixed:
    "https://angelismoveis.com/wp-content/uploads/2025/09/mesa-de-apoio-happy-30mm-90-x-45-com-gaveteiro-misto-nogal.jpg",
  meetingRound15: "https://angelismoveis.com/wp-content/uploads/2025/09/mesa-reuniao-redonda-15mm-120-nogal.jpg",
  meetingRoundHappy: SITE_PRODUCT_MEDIA["kit-mesa-reuniao-redonda-30mm-happy-tampo-engrossado"],
  meetingRoundEiffel: SITE_PRODUCT_MEDIA["kit-mesa-redonda-eiffel-engrossado-30mm"],
  meetingRoundPratika:
    "https://angelismoveis.com/wp-content/uploads/2025/09/mesa-redonda-pratika-pe-painel-25mm-120-nogal.jpg",
  meetingRect15: "https://angelismoveis.com/wp-content/uploads/2025/09/mesa-reuniao-retangular-15mm-200-x-90-nogal.jpg",
  meetingRectPanel:
    "https://angelismoveis.com/wp-content/uploads/2025/09/mesa-reuniao-retangular-15mm-pe-painel-200-x-90-nogal.jpg",
  meetingRectHappy:
    "https://angelismoveis.com/wp-content/uploads/2025/09/mesa-reuniao-retangular-happy-30mm-engrossado-260-x-120-nogal.jpg",
  meetingRectPratika:
    "https://angelismoveis.com/wp-content/uploads/2026/03/mesa-reuniao-retangular-pratika-25mm-260-x-120-x-75-nogal.jpg",
  metalLocker:
    "https://images.tcdn.com.br/img/img_prod/556092/armario_roupeiro_de_aco_guarda_volume_locker_vestiario_08_portas_pequenas_montavel_2003_1_20191007043805.png",
  locker2Large:
    "https://product-hub-prd.madeiramadeira.com.br/916699/images/49a71dc4-24ac-4cc3-bf94-d7c33f805358ancopreto1719233257200zoom.jpg?bg-color=FFF&canvas=1%3A1&width=720",
  locker4Small:
    "https://images.tcdn.com.br/img/img_prod/556092/armario_roupeiro_de_aco_guarda_volume_locker_vestiario_04_portas_pequenas_montavel_2001_1_20191007043804.png",
  locker4Large:
    "https://product-hub-prd.madeiramadeira.com.br/549313/images/549313_1.jpg?bg-color=FFF&canvas=1%3A1&width=720",
  locker6Compact:
    "https://images.tcdn.com.br/img/img_prod/556092/armario_roupeiro_de_aco_guarda_volume_locker_vestiario_06_portas_grandes_montavel_1997_1_20191007043715.png",
  locker6Wide:
    "https://racksaopaulo.com.br/wp-content/uploads/2024/06/Armario-3Colunas-6Portas-600x600-1.png",
  locker8Small:
    "https://images.tcdn.com.br/img/img_prod/556092/armario_roupeiro_de_aco_guarda_volume_locker_vestiario_08_portas_pequenas_montavel_2003_1_20191007043805.png",
  locker8Large:
    "https://product-hub-prd.madeiramadeira.com.br/516474094/images/6a2cc037-0b79-4091-9986-bf676220bcf215e83f80532f341f9cb6baccc3.jpg?bg-color=FFF&canvas=1%3A1&width=720",
  locker9:
    "https://product-hub-prd.madeiramadeira.com.br/647354/images/28de36b3-1735-464a-ab62-5463811e9f73veiscinza1682523912200zoom.jpg?bg-color=FFF&canvas=1%3A1&width=720",
  locker12Small:
    "https://images.tcdn.com.br/img/img_prod/556092/armario_roupeiro_de_aco_guarda_volume_locker_vestiario_12_portas_pequenas_montavel_2005_1_20191007043807.png",
  locker16:
    "https://images.tcdn.com.br/img/img_prod/556092/armario_roupeiro_de_aco_guarda_volume_locker_vestiario_16_portas_pequenas_montavel_2007_1_20200604120951.png",
  locker20Small:
    "https://images.tcdn.com.br/img/img_prod/556092/armario_roupeiro_de_aco_20_portas_pequenas_frete_gratis_regiao_do_abcd_258_1_20191007042101.jpg",
  metalCabinet: "https://tubularte.com.br/img/p/1/8/8/3/1883-tm_large_default.jpg",
  steelCabinet3: "https://cdn.shopify.com/s/files/1/0477/3579/9960/files/30413_5532GR_FrontAngle.jpg?v=1764700959",
  steelCabinet4: "https://tubularte.com.br/img/p/1/8/8/3/1883-tm_large_default.jpg",
  metalFile: "https://tubularte.com.br/img/p/3/2/7/4/3274-tm_large_default.jpg",
  metalShelf: "https://tubularte.com.br/img/p/1/7/5/9/1759-tm_large_default.jpg",
  whiteboard: "https://tubularte.com.br/img/p/3/1/9/3/3193-tm_large_default.jpg",
  corkBoard: "https://industriasupertela.com/wp-content/uploads/2024/02/Quadro-cortica-3.png",
  bulletinBoard: "https://casadacortica.com.br/wp-content/uploads/2024/06/quadro1.png",
  studentDesk: "https://escolar.torresmoveis.com/wp-content/uploads/2022/11/Conj-escolar-Torres-velma.jpg",
  classroomChair: "https://cdn.awsli.com.br/600x450/1386/1386876/produto/327286041/cadeira-universit-ria-prisma-adulto-com-bau-z9vxr6ynym.png",
  preschoolClassroom: "https://escolar.torresmoveis.com/wp-content/uploads/2023/04/Conj-educacional-infantil.jpg",
  kidneyTable: "https://cdn.awsli.com.br/800x800/405/405408/produto/218400413/78-q9jk0drjoh.jpeg",
  cloverTable: "https://escolar.torresmoveis.com/wp-content/uploads/2022/11/formacao-sextavada-Torres-Zazu.jpg",
  toyChest: "https://fundamentalbrinquedos.com.br/wp-content/uploads/2019/06/1063.jpg"
};

const PDF_PRODUCT_MEDIA = {
  "cadeira-fixa": "assets/products/pdf-chairs/cadeira-fixa.jpg",
  "cadeira-fixa-iso": "assets/products/pdf-chairs/cadeira-fixa-iso.jpg",
  "cadeira-secretaria": "assets/products/pdf-chairs/cadeira-secretaria.jpg",
  "cadeira-office": "assets/products/pdf-chairs/cadeira-office.jpg",
  "cadeira-plus": "assets/products/pdf-chairs/cadeira-plus.jpg",
  "cadeira-pp": "assets/products/pdf-chairs/cadeira-pp.jpg",
  "cadeira-presidente": "assets/products/pdf-chairs/cadeira-presidente-tela.jpg",
  "cadeira-diretor": "assets/products/pdf-chairs/cadeira-diretor-vazada.jpg",
  "cadeira-executiva": "assets/products/pdf-chairs/cadeira-executiva-tela.jpg",
  "cadeira-confort": "assets/products/pdf-chairs/cadeira-confort.jpg",
  "cadeira-executiva-alta": "assets/products/pdf-chairs/cadeira-executiva-mesh-alta.jpg",
  "longarina-iso": "assets/products/pdf-chairs/longarina-iso.jpg",
  "longarina-estofada": "assets/products/pdf-chairs/longarina-estofada.jpg",
  "cadeira-mocho": "assets/products/pdf-chairs/cadeira-mocho.jpg",
  "mocho-sem-encosto": "assets/products/pdf-chairs/mocho-sem-encosto.jpg",
  "banqueta-alta-a": "assets/products/pdf-chairs/banqueta-alta-a.jpg",
  "banqueta-alta-b": "assets/products/pdf-chairs/banqueta-alta-b.jpg",
  "cadeira-pe-palito": "assets/products/pdf-chairs/cadeira-pe-palito.jpg",
  "cadeira-universitaria": "assets/products/pdf-chairs/cadeira-universitaria.jpg",
  "conjunto-ensino-medio": "assets/products/pdf-chairs/conjunto-ensino-medio.jpg",
  "conjunto-educacao-infantil": "assets/products/pdf-chairs/conjunto-educacao-infantil.jpg",
  "conjunto-sextavado": "assets/products/pdf-chairs/conjunto-sextavado.jpg",
  "conjunto-oitavado": "assets/products/pdf-chairs/conjunto-oitavado.jpg",
  "kit-longarina-florenca-3-lugares-com-braco-individual":
    "assets/products/pdf-chairs/longarina-estofada.jpg",
  "kit-longarina-florenca-3-lugares-com-braco-compartilhado":
    "assets/products/pdf-chairs/longarina-cromada-preta.jpg",
  "kit-longarina-florenca-3-lugares-com-braco-lateral":
    "assets/products/pdf-chairs/longarina-cromada-clara.jpg",
  "kit-longarina-florenca-3-lugares": "assets/products/pdf-chairs/longarina-estofada.jpg",
  "kit-cadeira-caixa-florenca-com-braco": "assets/products/pdf-chairs/cadeira-caixa-alta.jpg",
  "kit-cadeira-caixa-florenca-sem-braco": "assets/products/pdf-chairs/cadeira-caixa-simples.jpg",
  "kit-cadeira-giratoria-florenca-com-relax-com-braco":
    "assets/products/pdf-chairs/cadeira-relax.jpg",
  "kit-cadeira-giratoria-florenca-com-braco":
    "assets/products/pdf-chairs/cadeira-secretaria-braco.jpg",
  "kit-cadeira-giratoria-florenca-sem-braco": "assets/products/pdf-chairs/cadeira-secretaria.jpg",
  "kit-longarina-diretor-braco-escamoteavel-3-lugares":
    "assets/products/pdf-chairs/longarina-cromada-preta.jpg",
  "kit-longarina-diretor-prancheta-dobravel-3-lugares":
    "assets/products/pdf-chairs/longarina-cromada-clara.jpg",
  "kit-longarina-executiva-braco-escamoteavel-3-lugares":
    "assets/products/pdf-chairs/longarina-cromada-preta.jpg",
  "kit-longarina-executiva-prancheta-dobravel-3-lugares":
    "assets/products/pdf-chairs/longarina-cromada-clara.jpg",
  "kit-longarina-secretaria-f10-prancheta-dobravel-3-lugares":
    "assets/products/pdf-chairs/longarina-iso.jpg",
  "kit-longarina-diretor-3-lugares-com-braco-individual":
    "assets/products/pdf-chairs/longarina-cromada-preta.jpg",
  "kit-longarina-diretor-3-lugares-com-braco-compartilhado":
    "assets/products/pdf-chairs/longarina-cromada-clara.jpg",
  "kit-longarina-diretor-3-lugares-com-braco-lateral":
    "assets/products/pdf-chairs/longarina-cromada-preta.jpg",
  "kit-longarina-diretor-3-lugares": "assets/products/pdf-chairs/longarina-cromada-preta.jpg",
  "kit-longarina-executiva-3-lugares-com-braco-individual":
    "assets/products/pdf-chairs/longarina-estofada.jpg",
  "kit-longarina-executiva-3-lugares-com-braco-compartilhado":
    "assets/products/pdf-chairs/longarina-cromada-clara.jpg",
  "kit-longarina-executiva-3-lugares-com-braco-lateral":
    "assets/products/pdf-chairs/longarina-estofada.jpg",
  "kit-longarina-executiva-3-lugares": "assets/products/pdf-chairs/longarina-estofada.jpg",
  "kit-longarina-secretaria-f10-3-lugares": "assets/products/pdf-chairs/longarina-iso.jpg",
  "kit-banqueta-clip": "assets/products/pdf-chairs/banqueta-alta-b.jpg",
  "kit-cadeira-nova-hall-braco-dobravel": "assets/products/pdf-chairs/cadeira-hall-sapata.jpg",
  "kit-cadeira-nova-hall-fixa": "assets/products/pdf-chairs/cadeira-hall-trapezio.jpg",
  "kit-cadeira-hall-braco-dobravel": "assets/products/pdf-chairs/cadeira-fixa.jpg",
  "kit-cadeira-hall-fixa": "assets/products/pdf-chairs/cadeira-fixa-iso.jpg"
};

const IMAGE_FRAME_PRESETS = {
  "roupeiro-4-curta": {
    cardPosition: "61% 34%",
    cardScale: "1.2",
    drawerPosition: "58% 32%",
    drawerScale: "1.1"
  },
  "roupeiro-6-curta": {
    cardPosition: "56% 34%",
    cardScale: "1.16",
    drawerPosition: "54% 32%",
    drawerScale: "1.08"
  },
  "roupeiro-8-curta": {
    cardPosition: "60% 34%",
    cardScale: "1.2",
    drawerPosition: "57% 32%",
    drawerScale: "1.1"
  },
  "roupeiro-12-curta": {
    cardPosition: "59% 35%",
    cardScale: "1.18",
    drawerPosition: "56% 33%",
    drawerScale: "1.08"
  },
  "roupeiro-16-curta": {
    cardPosition: "59% 35%",
    cardScale: "1.16",
    drawerPosition: "56% 33%",
    drawerScale: "1.08"
  },
  "roupeiro-20-curta": {
    cardPosition: "58% 36%",
    cardScale: "1.16",
    drawerPosition: "56% 34%",
    drawerScale: "1.08"
  },
  "bau-pedagogico": {
    cardPosition: "52% 44%",
    cardScale: "1.08",
    drawerPosition: "50% 42%",
    drawerScale: "1.02"
  },
  "cadeira-universitaria": {
    cardPosition: "50% 50%",
    cardScale: "0.86",
    cardHoverScale: "0.9",
    drawerPosition: "50% 50%",
    drawerScale: "0.88",
    cardFit: "contain",
    drawerFit: "contain",
    cardPadding: "20px",
    drawerPadding: "24px",
    surface: "rgba(255,255,255,0.98)"
  }
};

function getImageFrame(product) {
  if (IMAGE_FRAME_PRESETS[product.id]) {
    return IMAGE_FRAME_PRESETS[product.id];
  }

  if (product.category === "cadeiras") {
    if (product.id.includes("longarina")) {
      return {
        cardPosition: "50% 50%",
        cardScale: "0.9",
        cardHoverScale: "0.94",
        drawerPosition: "50% 50%",
        drawerScale: "0.92",
        cardFit: "contain",
        drawerFit: "contain",
        cardPadding: "18px",
        drawerPadding: "22px",
        surface: "rgba(255,255,255,0.98)"
      };
    }

    if (
      ["cadeira-mocho", "mocho-sem-encosto", "banqueta-alta-a", "banqueta-alta-b"].includes(product.id) ||
      product.id.includes("caixa")
    ) {
      return {
        cardPosition: "50% 50%",
        cardScale: "0.86",
        cardHoverScale: "0.9",
        drawerPosition: "50% 50%",
        drawerScale: "0.88",
        cardFit: "contain",
        drawerFit: "contain",
        cardPadding: "18px",
        drawerPadding: "22px",
        surface: "rgba(255,255,255,0.98)"
      };
    }

    return {
      cardPosition: "50% 50%",
      cardScale: "0.84",
      cardHoverScale: "0.88",
      drawerPosition: "50% 50%",
      drawerScale: "0.86",
      cardFit: "contain",
      drawerFit: "contain",
      cardPadding: "18px",
      drawerPadding: "22px",
      surface: "rgba(255,255,255,0.98)"
    };
  }

  if (product.category === "escolar" && product.id.startsWith("conjunto-")) {
    return {
      cardPosition: "50% 52%",
      cardScale: "1.12",
      drawerPosition: "50% 50%",
      drawerScale: "1.06"
    };
  }

  return IMAGE_FRAME_PRESETS[product.id] || null;
}

function buildImageStyleAttribute(product, context = "card") {
  const frame = getImageFrame(product);
  if (!frame) {
    return "";
  }

  const isDrawer = context === "drawer";
  const position = isDrawer
    ? frame.drawerPosition || frame.cardPosition || "50% 50%"
    : frame.cardPosition || "50% 50%";
  const scale = isDrawer
    ? frame.drawerScale || frame.cardScale || "1"
    : frame.cardScale || "1";
  const hoverScale = isDrawer
    ? scale
    : frame.cardHoverScale || String(Number(scale) + 0.04);
  const fit = isDrawer
    ? frame.drawerFit || frame.cardFit || "cover"
    : frame.cardFit || "cover";
  const padding = isDrawer
    ? frame.drawerPadding || frame.cardPadding || "0px"
    : frame.cardPadding || "0px";
  const surface = frame.surface || "transparent";

  return `style="--media-position:${position}; --media-scale:${scale}; --media-hover-scale:${hoverScale}; --media-fit:${fit}; --media-padding:${padding}; --media-surface:${surface};"`;
}

const DISPLAY_TEXT_REPLACEMENTS = [
  [/Floren\?a/g, "Floren\u00e7a"],
  [/Dimens\?es/g, "Dimens\u00f5es"],
  [/Dimens\?o/g, "Dimens\u00e3o"],
  [/varia\?\?es/g, "varia\u00e7\u00f5es"],
  [/dispon\?veis/g, "dispon\u00edveis"],
  [/Recep\?\?o/g, "Recep\u00e7\u00e3o"],
  [/Acess\?rios t\?cnicos/g, "Acess\u00f3rios t\u00e9cnicos"],
  [/\bRetratil\b/g, "Retr\u00e1til"],
  [/\bescamoteavel\b/g, "escamote\u00e1vel"],
  [/\bEscamoteavel\b/g, "Escamote\u00e1vel"],
  [/\bGiratoria\b/g, "Girat\u00f3ria"],
  [/\bNobreack\b/g, "Nobreak"]
];

const PRODUCT_CATEGORY_OVERRIDES = {
  "kit-gavetao-small-corredica-telescopica": "mdf",
  "mesa-de-apoio-pratika-25mm-com-armario-misto": "mesas",
  "mesa-de-apoio-pratika-25mm-com-gaveteiro-4-gavetas": "mesas",
  "mesa-de-apoio-pratika-25mm-com-gaveteiro-misto": "mesas",
  "mesa-pratika-acoplada-gaveteiro-4-gavetas-25mm": "mesas",
  "mesa-pratika-acoplada-gaveteiro-misto-25mm": "mesas"
};

const PRODUCT_SECTION_OVERRIDES = {
  "mesa-em-l": "Mesas de trabalho",
  "mesa-impressora": "Mesas de trabalho",
  "mesa-base": "Mesas de trabalho",
  "mesa-professor": "Mesas de trabalho",
  "mesa-happy": "Mesas de trabalho",
  "mesa-pratica": "Mesas de trabalho",
  "mesa-reuniao-oval": "Mesas de reuni\u00e3o",
  "mesa-reuniao-retangular-base": "Mesas de reuni\u00e3o",
  "mesa-redonda": "Mesas de reuni\u00e3o",
  "mesa-escritorio-angular": "Mesas em L e acopladas",
  "mesa-happy-em-l": "Mesas em L e acopladas",
  "mesa-diretor-em-l": "Mesas em L e acopladas",
  "mesa-plataforma-dupla": "Mesas em L e acopladas",
  "conjunto-em-l-gm": "Mesas em L e acopladas",
  "guiche-atendimento": "Atendimento e recep\u00e7\u00e3o",
  "smart-04-moveis-fortline": "Atendimento e recep\u00e7\u00e3o",
  "escrivaninha-politorno": "Escrivaninhas e home office",
  "conjunto-duas-gavetas": "Acess\u00f3rios e m\u00f3dulos",
  "suporte-teclado": "Acess\u00f3rios e m\u00f3dulos",
  "carrinho-cpu": "Acess\u00f3rios e m\u00f3dulos",
  "conexao-90": "Acess\u00f3rios e m\u00f3dulos",
  "estacao-conexao": "Acess\u00f3rios e m\u00f3dulos",
  "tomada-mesa-pratika": "Acess\u00f3rios e m\u00f3dulos",
  "kit-gavetao-small-corredica-telescopica": "Linha Small"
};

function normalizeDisplayText(value) {
  if (typeof value !== "string") {
    return value;
  }

  return DISPLAY_TEXT_REPLACEMENTS.reduce(
    (text, [pattern, replacement]) => text.replace(pattern, replacement),
    value
  );
}

function normalizeProductCopy(product) {
  if (PRODUCT_CATEGORY_OVERRIDES[product.id]) {
    product.category = PRODUCT_CATEGORY_OVERRIDES[product.id];
  }

  if (PRODUCT_SECTION_OVERRIDES[product.id]) {
    product.section = PRODUCT_SECTION_OVERRIDES[product.id];
  }

  if (product.section) {
    product.section = normalizeDisplayText(product.section);
  }

  product.name = normalizeDisplayText(product.name);

  if (product.summary) {
    product.summary = normalizeDisplayText(product.summary);
  }

  if (product.specs) {
    product.specs = product.specs.map(([label, value]) => [
      normalizeDisplayText(label),
      normalizeDisplayText(value)
    ]);
  }

  ["notes", "options", "colors", "tags"].forEach((field) => {
    if (product[field]) {
      product[field] = product[field].map((entry) => normalizeDisplayText(entry));
    }
  });
}

function getRepresentativeProductImage(product) {
  const id = product.id;
  const tableImageById = {
    "mesa-em-l": REFERENCE_PRODUCT_MEDIA.lDeskSlim,
    "mesa-escritorio-angular": REFERENCE_PRODUCT_MEDIA.lDeskWood,
    "mesa-happy-em-l": REFERENCE_PRODUCT_MEDIA.lDeskSlim,
    "mesa-diretor-em-l": REFERENCE_PRODUCT_MEDIA.lDesk,
    "conjunto-em-l-gm": REFERENCE_PRODUCT_MEDIA.lDeskWood,
    "mesa-impressora": REFERENCE_PRODUCT_MEDIA.compactDesk,
    "mesa-base": REFERENCE_PRODUCT_MEDIA.lightDesk15,
    "mesa-tecnomobili": REFERENCE_PRODUCT_MEDIA.supportDeskMetal || REFERENCE_PRODUCT_MEDIA.homeDesk,
    "mesa-professor": REFERENCE_PRODUCT_MEDIA.desk,
    "mesa-happy": REFERENCE_PRODUCT_MEDIA.happyDesk30,
    "mesa-pratica": REFERENCE_PRODUCT_MEDIA.meetingRectPratika || REFERENCE_PRODUCT_MEDIA.straightDeskPratika,
    "guiche-atendimento": REFERENCE_PRODUCT_MEDIA.supportDeskMetal || REFERENCE_PRODUCT_MEDIA.supportDeskHappyCabinet || REFERENCE_PRODUCT_MEDIA.supportDeskCabinet,
    "mesa-reuniao-oval": REFERENCE_PRODUCT_MEDIA.meetingRoundHappy || REFERENCE_PRODUCT_MEDIA.meetingRoundEiffel,
    "mesa-reuniao-retangular-base": REFERENCE_PRODUCT_MEDIA.meetingRect15,
    "mesa-reuniao-corporativa": REFERENCE_PRODUCT_MEDIA.meetingRectHappy || REFERENCE_PRODUCT_MEDIA.meetingRectPanel,
    "mesa-redonda": REFERENCE_PRODUCT_MEDIA.meetingRound15,
    "mesa-redonda-pratika": REFERENCE_PRODUCT_MEDIA.meetingRoundPratika,
    "mesa-reuniao-retangular-pratika": REFERENCE_PRODUCT_MEDIA.meetingRectPratika,
    "escrivaninha-arbete-2gv": REFERENCE_PRODUCT_MEDIA.supportDeskHappyDrawer || REFERENCE_PRODUCT_MEDIA.supportDeskDrawer,
    "escrivaninha-computador-notebook": REFERENCE_PRODUCT_MEDIA.homeDesk,
    "escrivaninha-4-gavetas": REFERENCE_PRODUCT_MEDIA.supportDeskDrawer,
    "mesa-plataforma-dupla": REFERENCE_PRODUCT_MEDIA.attachedDesk,
    "smart-04-moveis-fortline": REFERENCE_PRODUCT_MEDIA.supportDeskHappyCabinet || REFERENCE_PRODUCT_MEDIA.supportDeskCabinet,
    "escrivaninha-politorno": REFERENCE_PRODUCT_MEDIA.supportDeskHappyMixed || REFERENCE_PRODUCT_MEDIA.supportDeskMixed
  };

  if (id === "tomada-mesa-pratika") return REFERENCE_PRODUCT_MEDIA.power;
  if (id === "carrinho-cpu") return REFERENCE_PRODUCT_MEDIA.cpuSupportFloor || REFERENCE_PRODUCT_MEDIA.cpuSupport;
  if (id === "conexao-90") return REFERENCE_PRODUCT_MEDIA.connectionAngled || REFERENCE_PRODUCT_MEDIA.connection;
  if (id === "estacao-conexao") return REFERENCE_PRODUCT_MEDIA.connection;
  if (id === "suporte-teclado") return REFERENCE_PRODUCT_MEDIA.keyboardTray || REFERENCE_PRODUCT_MEDIA.gamerDesk;
  if (id === "conjunto-duas-gavetas") return REFERENCE_PRODUCT_MEDIA.drawer2Slim || REFERENCE_PRODUCT_MEDIA.drawer2;
  if (tableImageById[id]) return tableImageById[id];

  if (
    [
      "mesa-reuniao-oval",
      "mesa-reuniao-retangular-base",
      "mesa-reuniao-corporativa",
      "mesa-redonda",
      "mesa-redonda-pratika",
      "mesa-reuniao-retangular-pratika"
    ].includes(id)
  ) {
    return REFERENCE_PRODUCT_MEDIA.desk;
  }

  if (
    [
      "mesa-impressora",
      "mesa-base",
      "mesa-tecnomobili",
      "mesa-professor",
      "mesa-happy",
      "mesa-pratica",
      "guiche-atendimento"
    ].includes(id)
  ) {
    return REFERENCE_PRODUCT_MEDIA.compactDesk;
  }

  if (
    [
      "escrivaninha-arbete-2gv",
      "escrivaninha-computador-notebook",
      "escrivaninha-4-gavetas",
      "smart-04-moveis-fortline",
      "escrivaninha-politorno",
      "mesa-plataforma-dupla"
    ].includes(id)
  ) {
    return REFERENCE_PRODUCT_MEDIA.homeDesk;
  }

  if (product.category === "mesas") {
    return REFERENCE_PRODUCT_MEDIA.attachedDesk || REFERENCE_PRODUCT_MEDIA.desk;
  }

  if (
    [
      "cadeira-fixa",
      "cadeira-fixa-iso",
      "cadeira-pe-palito"
    ].includes(id)
  ) {
    return REFERENCE_PRODUCT_MEDIA.fixedChair;
  }

  if (
    [
      "cadeira-secretaria",
      "cadeira-office",
      "cadeira-plus",
      "cadeira-pp"
    ].includes(id)
  ) {
    return REFERENCE_PRODUCT_MEDIA.operationalChair;
  }

  if (
    [
      "cadeira-presidente",
      "cadeira-confort"
    ].includes(id)
  ) {
    return REFERENCE_PRODUCT_MEDIA.premiumChair;
  }

  if (
    [
      "cadeira-diretor",
      "cadeira-executiva",
      "cadeira-executiva-alta"
    ].includes(id)
  ) {
    return REFERENCE_PRODUCT_MEDIA.executiveChair;
  }

  if (id === "longarina-iso") return REFERENCE_PRODUCT_MEDIA.longarinaSecretary;
  if (id === "longarina-estofada") return REFERENCE_PRODUCT_MEDIA.longarinaExecutive;

  if (
    [
      "cadeira-mocho",
      "mocho-sem-encosto",
      "banqueta-alta-a",
      "banqueta-alta-b"
    ].includes(id)
  ) {
    return REFERENCE_PRODUCT_MEDIA.stool;
  }

  if (product.category === "cadeiras") {
    return REFERENCE_PRODUCT_MEDIA.designChair || REFERENCE_PRODUCT_MEDIA.fixedChair;
  }

  if (
    [
      "arquivo-4g-mdf"
    ].includes(id)
  ) {
    return REFERENCE_PRODUCT_MEDIA.fileCabinet || REFERENCE_PRODUCT_MEDIA.fileCabinetSlim;
  }

  if (
    [
      "gaveteiro-volante-3g",
      "gaveteiro-volante-4g"
    ].includes(id)
  ) {
    return id === "gaveteiro-volante-4g"
      ? REFERENCE_PRODUCT_MEDIA.drawer4Slim || REFERENCE_PRODUCT_MEDIA.drawerEconomy || REFERENCE_PRODUCT_MEDIA.drawer4
      : REFERENCE_PRODUCT_MEDIA.drawer3 || REFERENCE_PRODUCT_MEDIA.drawerMixedSlim;
  }

  if (
    [
      "armario-baixo",
      "armario-semi-aberto"
    ].includes(id)
  ) {
    return id === "armario-semi-aberto"
      ? REFERENCE_PRODUCT_MEDIA.semiOpenCabinet || REFERENCE_PRODUCT_MEDIA.mediumCabinet || REFERENCE_PRODUCT_MEDIA.lowCabinet
      : REFERENCE_PRODUCT_MEDIA.lowCabinetExact || REFERENCE_PRODUCT_MEDIA.lowCabinet;
  }

  if (
    [
      "armario-fechado"
    ].includes(id)
  ) {
    return REFERENCE_PRODUCT_MEDIA.cabinetSuperTall || REFERENCE_PRODUCT_MEDIA.tallCabinet || REFERENCE_PRODUCT_MEDIA.tallCabinetExact;
  }

  if (product.category === "mdf") {
    return REFERENCE_PRODUCT_MEDIA.mediumCabinet || REFERENCE_PRODUCT_MEDIA.lowCabinet;
  }

  if (product.category === "aco") {
    const steelImageById = {
      "roupeiro-2-longa": REFERENCE_PRODUCT_MEDIA.locker2Large,
      "roupeiro-4-longa": REFERENCE_PRODUCT_MEDIA.locker4Large,
      "roupeiro-4-curta": REFERENCE_PRODUCT_MEDIA.locker4Small,
      "roupeiro-6-curta": REFERENCE_PRODUCT_MEDIA.locker6Compact,
      "roupeiro-6-longa": REFERENCE_PRODUCT_MEDIA.locker6Wide,
      "roupeiro-8-curta": REFERENCE_PRODUCT_MEDIA.locker8Small,
      "roupeiro-8-longa": REFERENCE_PRODUCT_MEDIA.locker8Large,
      "roupeiro-9-longa": REFERENCE_PRODUCT_MEDIA.locker9,
      "roupeiro-12-curta": REFERENCE_PRODUCT_MEDIA.locker12Small,
      "roupeiro-16-curta": REFERENCE_PRODUCT_MEDIA.locker16,
      "roupeiro-20-curta": REFERENCE_PRODUCT_MEDIA.locker20Small,
      "armario-aco-3b": REFERENCE_PRODUCT_MEDIA.steelCabinet3,
      "armario-aco-4b": REFERENCE_PRODUCT_MEDIA.steelCabinet4
    };

    if (steelImageById[id]) return steelImageById[id];
    if (id.includes("roupeiro")) return REFERENCE_PRODUCT_MEDIA.metalLocker;
    if (id.includes("arquivo")) return REFERENCE_PRODUCT_MEDIA.metalFile;
    if (id.includes("armario")) return REFERENCE_PRODUCT_MEDIA.steelCabinet4;
    return REFERENCE_PRODUCT_MEDIA.metalShelf;
  }

  if (product.category === "escolar") {
    if (id === "bau-pedagogico") return REFERENCE_PRODUCT_MEDIA.toyChest;
    if (id === "quadro-branco") return REFERENCE_PRODUCT_MEDIA.whiteboard;
    if (id === "quadro-cortica") return REFERENCE_PRODUCT_MEDIA.corkBoard;
    if (id === "quadro-avisos") return REFERENCE_PRODUCT_MEDIA.bulletinBoard;
    if (id === "cadeira-universitaria") return REFERENCE_PRODUCT_MEDIA.classroomChair;
    if (id === "conjunto-ensino-medio") return REFERENCE_PRODUCT_MEDIA.studentDesk;
    if (id === "conjunto-educacao-infantil") return REFERENCE_PRODUCT_MEDIA.preschoolClassroom;
    if (id === "conjunto-sextavado") return REFERENCE_PRODUCT_MEDIA.cloverTable;
    if (id === "conjunto-oitavado") return REFERENCE_PRODUCT_MEDIA.kidneyTable;
    return REFERENCE_PRODUCT_MEDIA.preschoolClassroom;
  }

  return "";
}

PRODUCTS.forEach((product) => {
  normalizeProductCopy(product);

  if (!product.image) {
    product.image =
      PDF_PRODUCT_MEDIA[product.id] ||
      SITE_PRODUCT_MEDIA[product.id] ||
      getRepresentativeProductImage(product);
  }

  if (product.image) {
    product.imageAlt = product.name;
  }
});

const state = {
  category: "all",
  feature: "all",
  query: "",
  drawerId: null
};

const totals = {
  products: PRODUCTS.length,
  categories: Object.keys(CATEGORY_META).length - 1,
  sections: new Set(PRODUCTS.map((product) => `${product.category}:${product.section}`)).size
};

const refs = {
  catalogControls: document.querySelector("#catalogo"),
  catalogControlsSpacer: document.querySelector("#catalogControlsSpacer"),
  catalogToggle: document.querySelector("#catalogToggle"),
  tabs: document.querySelector("#tabs"),
  featureChips: document.querySelector("#featureChips"),
  searchInput: document.querySelector("#searchInput"),
  sectionList: document.querySelector("#sectionList"),
  activeHeading: document.querySelector("#activeHeading"),
  catalogSummary: document.querySelector("#catalogSummary"),
  totalProducts: document.querySelector("#totalProducts"),
  totalCategories: document.querySelector("#totalCategories"),
  totalSections: document.querySelector("#totalSections"),
  categoryHighlights: document.querySelector("#categoryHighlights"),
  heroFeaturedButton: document.querySelector("#heroFeaturedButton"),
  drawer: document.querySelector("#productDrawer"),
  drawerBackdrop: document.querySelector("#drawerBackdrop"),
  drawerClose: document.querySelector("#drawerClose"),
  drawerEyebrow: document.querySelector("#drawerEyebrow"),
  drawerTitle: document.querySelector("#drawerTitle"),
  drawerSubtitle: document.querySelector("#drawerSubtitle"),
  drawerMedia: document.querySelector("#drawerMedia"),
  drawerImage: document.querySelector("#drawerImage"),
  drawerDescription: document.querySelector("#drawerDescription"),
  drawerSpecs: document.querySelector("#drawerSpecs"),
  drawerGroups: document.querySelector("#drawerGroups")
};

let controlsCollapsed = false;

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.14 }
);

function observeReveals(root = document) {
  const elements = [...root.querySelectorAll(".reveal")];

  elements.forEach((element) => {
    revealObserver.observe(element);
  });

  requestAnimationFrame(() => {
    elements.forEach((element) => {
      element.classList.add("is-visible");
    });
  });
}

function animateNumber(element, target) {
  const duration = 1200;
  const start = performance.now();

  function step(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    element.textContent = Math.round(target * eased).toLocaleString("pt-BR");
    if (progress < 1) {
      requestAnimationFrame(step);
    }
  }

  requestAnimationFrame(step);
}

function getProductById(productId) {
  return PRODUCTS.find((product) => product.id === productId);
}

function getSpecValue(product, label) {
  const match = (product.specs || []).find(([specLabel]) => specLabel === label);
  return match ? String(match[1]).toLowerCase() : "";
}

function serializeProduct(product) {
  return [
    product.name,
    product.code,
    product.section,
    ...(product.tags || []),
    ...((product.specs || []).flat()),
    ...(product.notes || []),
    ...(product.options || []),
    ...(product.colors || []),
    ...(product.contents || [])
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
}

function matchesFeature(product) {
  if (state.feature === "all") {
    return true;
  }

  const serialized = serializeProduct(product);
  const gavetasValue = getSpecValue(product, "Quantidade de Gavetas");
  const portasValue = getSpecValue(product, "Quantidade de Portas");

  switch (state.feature) {
    case "gavetas":
      return (
        (gavetasValue && !gavetasValue.includes("não possui")) ||
        product.name.toLowerCase().includes("gaveta") ||
        serialized.includes("gavetas")
      );
    case "portas":
      return (
        (portasValue && !portasValue.includes("não possui")) ||
        serialized.includes("portas") ||
        serialized.includes("armário")
      );
    case "sob-encomenda":
      return serialized.includes("sob encomenda");
    case "chave":
      return serialized.includes("chave");
    case "escolar":
      return product.category === "escolar";
    default:
      return true;
  }
}

function filterProducts() {
  const query = state.query.trim().toLowerCase();

  return PRODUCTS.filter((product) => {
    const matchesCategory =
      state.category === "all" || product.category === state.category;
    const matchesQuery = !query || serializeProduct(product).includes(query);
    return matchesCategory && matchesFeature(product) && matchesQuery;
  });
}

function groupProducts(products) {
  const groups = [];
  const map = new Map();

  products.forEach((product) => {
    const key =
      state.category === "all"
        ? `category:${product.category}`
        : `section:${product.section}`;

    if (!map.has(key)) {
      const title =
        state.category === "all"
          ? CATEGORY_META[product.category].label
          : product.section;
      const description =
        state.category === "all"
          ? CATEGORY_META[product.category].summary
          : `${product.section} • ${CATEGORY_META[product.category].label}`;

      const group = { key, title, description, items: [] };
      map.set(key, group);
      groups.push(group);
    }

    map.get(key).items.push(product);
  });

  return groups;
}

function buildSummary(product) {
  if (product.summary) {
    return product.summary;
  }

  const primarySpecs = (product.specs || [])
    .slice(0, 2)
    .map(([label, value]) => `${label}: ${value}`)
    .join(" • ");

  if (primarySpecs) {
    return `${product.section} • ${primarySpecs}`;
  }

  return product.section;
}

function renderTabs() {
  const items = ["all", "mesas", "cadeiras", "mdf", "aco", "escolar"];

  refs.tabs.innerHTML = items
    .map((categoryKey) => {
      const count =
        categoryKey === "all"
          ? totals.products
          : PRODUCTS.filter((product) => product.category === categoryKey).length;

      return `
        <button
          class="tab-button ${state.category === categoryKey ? "is-active" : ""}"
          type="button"
          data-category="${categoryKey}"
        >
          ${CATEGORY_META[categoryKey].label} <span>(${count})</span>
        </button>
      `;
    })
    .join("");
}

function renderFeatureChips() {
  refs.featureChips.innerHTML = FEATURE_CHIPS.map(
    (chip) => `
      <button
        class="chip-button ${state.feature === chip.id ? "is-active" : ""}"
        type="button"
        data-feature="${chip.id}"
      >
        ${chip.label}
      </button>
    `
  ).join("");
}

function renderHighlights() {
  refs.categoryHighlights.innerHTML = Object.entries(CATEGORY_META)
    .filter(([key]) => key !== "all")
    .map(([key, meta]) => {
      const count = PRODUCTS.filter((product) => product.category === key).length;
      return `
        <div class="highlight-row">
          <strong>${meta.label}</strong>
          <span>${count} itens</span>
        </div>
      `;
    })
    .join("");
}

function renderCatalog() {
  const filteredProducts = filterProducts();
  const groups = groupProducts(filteredProducts);
  const activeMeta = CATEGORY_META[state.category];

  refs.activeHeading.textContent =
    state.category === "all" ? activeMeta.title : `${activeMeta.title}`;

  refs.catalogSummary.textContent = `${filteredProducts.length} peça(s) em destaque nesta seleção. ${activeMeta.summary}`;

  if (!filteredProducts.length) {
    refs.sectionList.innerHTML = `
      <section class="empty-state reveal">
        <h3>Nenhum produto encontrado</h3>
        <p>Tente outro termo de busca ou remova os filtros ativos para ampliar o resultado.</p>
      </section>
    `;
    observeReveals(refs.sectionList);
    return;
  }

  refs.sectionList.innerHTML = groups
    .map(
      (group) => `
        <section class="catalog-section reveal">
          <div class="section-header">
            <div>
              <p class="section-pill">${group.title}</p>
              <h3>${group.title}</h3>
            </div>
            <div class="section-meta">${group.items.length} produto(s) • ${group.description}</div>
          </div>

          <div class="product-grid">
            ${group.items
              .map(
                (product, index) => `
                  <article
                    class="product-card"
                    style="--card-delay: ${index * 55}ms;"
                    data-product-id="${product.id}"
                    tabindex="0"
                    role="button"
                    aria-label="Abrir informações de ${product.name}"
                    aria-haspopup="dialog"
                  >
                    ${
                      product.image
                        ? `
                          <div class="product-media">
                            <img src="${product.image}" alt="${product.imageAlt || product.name}" loading="lazy" decoding="async" referrerpolicy="no-referrer" ${buildImageStyleAttribute(product, "card")}>
                          </div>
                        `
                        : ""
                    }
                    <div class="card-top">
                      <span class="card-eyebrow">${CATEGORY_META[product.category].label}</span>
                      ${product.code ? `<span class="code-chip">${product.code}</span>` : ""}
                    </div>

                    <div>
                      <h4>${product.name}</h4>
                      <p class="card-summary">${buildSummary(product)}</p>
                    </div>

                    ${
                      product.specs && product.specs.length
                        ? `
                          <dl class="spec-preview">
                            ${product.specs
                              .slice(0, 4)
                              .map(
                                ([label, value]) => `
                                  <div>
                                    <dt>${label}</dt>
                                    <dd>${value}</dd>
                                  </div>
                                `
                              )
                              .join("")}
                          </dl>
                        `
                        : ""
                    }

                    ${
                      product.tags && product.tags.length
                        ? `
                          <div class="tag-row">
                            ${product.tags
                              .slice(0, 4)
                              .map((tag) => `<span class="tag">${tag}</span>`)
                              .join("")}
                          </div>
                        `
                        : ""
                    }
                  </article>
                `
              )
              .join("")}
          </div>
        </section>
      `
    )
    .join("");

  observeReveals(refs.sectionList);
}

function renderDrawer(productId) {
  const product = getProductById(productId);
  if (!product) {
    return;
  }

  refs.drawerEyebrow.textContent = `${CATEGORY_META[product.category].label} • ${product.section}`;
  refs.drawerTitle.textContent = product.name;
  refs.drawerSubtitle.textContent = [product.code, buildSummary(product)]
    .filter(Boolean)
    .join(" • ");
  if (product.image) {
    refs.drawerMedia.hidden = false;
    refs.drawerImage.src = product.image;
    refs.drawerImage.alt = product.imageAlt || product.name;
    const drawerFrame = getImageFrame(product);
    refs.drawerImage.style.setProperty("--media-position", drawerFrame?.drawerPosition || drawerFrame?.cardPosition || "50% 50%");
    refs.drawerImage.style.setProperty("--media-scale", drawerFrame?.drawerScale || drawerFrame?.cardScale || "1");
    refs.drawerImage.style.setProperty("--media-hover-scale", drawerFrame?.drawerScale || drawerFrame?.cardScale || "1");
  } else {
    refs.drawerMedia.hidden = true;
    refs.drawerImage.removeAttribute("src");
    refs.drawerImage.alt = "";
    refs.drawerImage.style.removeProperty("--media-position");
    refs.drawerImage.style.removeProperty("--media-scale");
    refs.drawerImage.style.removeProperty("--media-hover-scale");
  }
  refs.drawerDescription.textContent =
    product.summary ||
    (product.notes && product.notes[0]) ||
    "Informações organizadas com as especificações disponíveis para este produto.";

  refs.drawerSpecs.innerHTML = (product.specs || [])
    .map(
      ([label, value]) => `
        <div class="drawer-spec-item">
          <span>${label}</span>
          <span>${value}</span>
        </div>
      `
    )
    .join("");

  const groups = [
    { title: "Observações", items: product.notes },
    { title: "Opções e medidas", items: product.options },
    { title: "Cores", items: product.colors },
    { title: "Composição", items: product.contents }
  ].filter((group) => group.items && group.items.length);

  refs.drawerGroups.innerHTML = groups
    .map(
      (group) => `
        <section class="drawer-group">
          <h4>${group.title}</h4>
          <ul>
            ${group.items.map((item) => `<li>${item}</li>`).join("")}
          </ul>
        </section>
      `
    )
    .join("");

  refs.drawer.classList.add("is-open");
  refs.drawer.setAttribute("aria-hidden", "false");
  refs.drawerBackdrop.hidden = false;
  document.body.style.overflow = "hidden";
  state.drawerId = productId;
}

function updateControlsState() {
  refs.catalogControls.classList.toggle("is-compact", controlsCollapsed);
  refs.catalogToggle.textContent = controlsCollapsed ? "Abrir filtros" : "Recolher filtros";
  refs.catalogToggle.setAttribute("aria-expanded", String(!controlsCollapsed));
}

function closeDrawer() {
  refs.drawer.classList.remove("is-open");
  refs.drawer.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  state.drawerId = null;

  setTimeout(() => {
    if (!refs.drawer.classList.contains("is-open")) {
      refs.drawerBackdrop.hidden = true;
    }
  }, 220);
}

function bindEvents() {
  refs.tabs.addEventListener("click", (event) => {
    const button = event.target.closest("[data-category]");
    if (!button) {
      return;
    }

    state.category = button.dataset.category;
    renderTabs();
    renderCatalog();
  });

  refs.featureChips.addEventListener("click", (event) => {
    const button = event.target.closest("[data-feature]");
    if (!button) {
      return;
    }

    state.feature = button.dataset.feature;
    renderFeatureChips();
    renderCatalog();
  });

  refs.searchInput.addEventListener("input", (event) => {
    state.query = event.target.value;
    renderCatalog();
  });

  refs.searchInput.addEventListener("focus", () => {
    controlsCollapsed = false;
    updateControlsState();
  });

  refs.sectionList.addEventListener("click", (event) => {
    const button = event.target.closest("[data-product-id]");
    if (!button) {
      return;
    }

    renderDrawer(button.dataset.productId);
  });

  refs.sectionList.addEventListener("keydown", (event) => {
    const card = event.target.closest(".product-card[data-product-id]");
    if (!card || (event.key !== "Enter" && event.key !== " ")) {
      return;
    }

    event.preventDefault();
    renderDrawer(card.dataset.productId);
  });

  refs.heroFeaturedButton.addEventListener("click", () => {
    const featured = PRODUCTS.find((product) => product.featured) || PRODUCTS[0];
    renderDrawer(featured.id);
  });

  refs.catalogToggle.addEventListener("click", () => {
    controlsCollapsed = !controlsCollapsed;
    updateControlsState();
  });

  refs.drawerClose.addEventListener("click", closeDrawer);
  refs.drawerBackdrop.addEventListener("click", closeDrawer);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && state.drawerId) {
      closeDrawer();
    }
  });
}

function init() {
  animateNumber(refs.totalProducts, totals.products);
  animateNumber(refs.totalCategories, totals.categories);
  animateNumber(refs.totalSections, totals.sections);
  renderHighlights();
  renderTabs();
  renderFeatureChips();
  renderCatalog();
  bindEvents();
  observeReveals();
  updateControlsState();
}

init();
