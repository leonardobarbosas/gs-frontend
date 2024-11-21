"use client";

import { TipoEnergia } from "@/types";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Energias() {
  const [energias, setEnergias] = useState<TipoEnergia[]>([]);

  const chamadaDaApi = async () => {
    try {
      const response = await fetch(
        "http://localhost:8080/bancoDados/ProjetosSustentaveis"
      );
      if (!response.ok) {
        throw new Error("Falha ao buscar dados");
      }
      const dados: TipoEnergia[] = await response.json();
      setEnergias(dados);
    } catch (error) {
      console.error("Falha ao buscar os dados:", error);
    }
  };

  useEffect(() => {
    chamadaDaApi();
  }, []);

  return (
    <div className="h-[80vh] flex flex-col items-center justify-around">
      <h1 className="text-7xl t-color2 text-center">
        Veja alguns projetos sustentáveis!
      </h1>
      <div className="flex w-11/12 overflow-x-auto custom-scrollbar h-[415px]">
        <div className="flex whitespace-nowrap gap-4">
          {energias.map((energia) => (
            <div
              key={energia.idProjeto}
              className="cards-energias rounded-lg shadow-lg w-[500px] h-[400px] flex flex-col justify-around text-center"
            >
              <p>Descrição: {energia.descricao}</p>
              <p>Região: {energia.regiao}</p>
              <p>Status: {energia.status}</p>
              <p>Tipo de fonte: {energia.tipoFonte}</p>
              <p>Custo: R${energia.custo}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
