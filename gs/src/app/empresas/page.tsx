"use client";

import { TipoEmpresa } from "@/types";
import { useEffect, useState } from "react";

export default function Empresas() {
  const [empresas, setEmpresas] = useState<TipoEmpresa[]>([]);

  const chamadaDaApi = async () => {
    try {
      const response = await fetch("http://localhost:8080/empresas");
      if (!response.ok) {
        throw new Error("Falha ao buscar dados");
      }
      const dados: TipoEmpresa[] = await response.json();
      setEmpresas(dados);
    } catch (error) {
      console.error("Falha ao buscar os dados:", error);
    }
  };

  useEffect(() => {
    chamadaDaApi();
  }, []);

  return (
    <div className="h-90vh flex flex-col w-full items-center justify-center gap-8">
      <h1 className="text-5xl">Empresas Cadastrados</h1>
      <div className="flex w-[90%] flex-wrap gap-2 items-center justify-center">
        {empresas.map((empresa) => (
          <div
            key={empresa.idEmpresa}
            className="bg-[#2762ca] rounded-lg shadow-none w-[300px] h-40 flex flex-col items-center justify-around"
          >
            <h2>Id: {empresa.idEmpresa}</h2>
            <p>Nome: {empresa.nome}</p>
            <p>Cep: {empresa.cep}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
