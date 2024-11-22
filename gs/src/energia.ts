import { TipoRenovavel } from './types';

export const energias: TipoRenovavel[]  = [
  {
    nome: "Energia Solar",
    descricao:
      "A energia solar é a energia proveniente da luz e do calor do Sol que é aproveitada e utilizada por meio de diferentes tecnologias, como o aquecimento solar, a energia solar fotovoltaica, a energia heliotérmica, entre outras.",
    custo: "Alto",
    emissao_co2: "Baixo",
  },
  {
    nome: "Energia Eólica",
    descricao:
      "A energia eólica é gerada pelo movimento dos ventos, que acionam turbinas conectadas a geradores para produzir eletricidade de forma limpa e renovável.",
    custo: "Médio",
    emissao_co2: "Muito baixo",
  },
  {
    nome: "Energia Hidrelétrica",
    descricao:
      "A energia hidrelétrica é gerada pela força da água em movimento, geralmente de rios e reservatórios, utilizada para girar turbinas conectadas a geradores elétricos.",
    custo: "Médio",
    emissao_co2: "Baixo",
  },
  {
    nome: "Biomassa",
    descricao:
      "A energia de biomassa é obtida por meio da queima de materiais orgânicos, como resíduos agrícolas, florestais e urbanos, para a geração de calor ou eletricidade.",
    custo: "Variável",
    emissao_co2: "Moderado (neutro ao longo do ciclo de vida)",
  },
  {
    nome: "Energia Geotérmica",
    descricao:
      "A energia geotérmica é obtida a partir do calor armazenado no interior da Terra, usado para gerar eletricidade ou aquecer edificações.",
    custo: "Alto",
    emissao_co2: "Muito baixo",
  },
  {
    nome: "Energia Maré-motriz",
    descricao:
      "A energia maré-motriz é gerada a partir do movimento das marés, utilizando turbinas instaladas no fundo do mar ou em barragens costeiras.",
    custo: "Alto",
    emissao_co2: "Muito baixo",
  },
  {
    nome: "Energia das Ondas",
    descricao:
      "A energia das ondas é obtida pelo aproveitamento do movimento das ondas do mar, que movimentam dispositivos para gerar eletricidade.",
    custo: "Alto",
    emissao_co2: "Muito baixo",
  },
  {
    nome: "Hidrogênio Verde",
    descricao:
      "O hidrogênio verde é produzido a partir de fontes renováveis, como energia solar ou eólica, utilizando o processo de eletrólise para separar a água em hidrogênio e oxigênio.",
    custo: "Muito Alto",
    emissao_co2: "Zero",
  },
];
