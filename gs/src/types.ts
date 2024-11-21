export type TipoEmpresa = {
  cdEmpresa: number;
  nmEmpresa: string;
  nrCep: number;
  nrCnpj: number;
};

export type TipoEnergia = {
  custo: number;
  descricao: string;
  idProjeto: number;
  regiao: string;
  status: string;
  tipoFonte: string;
};
