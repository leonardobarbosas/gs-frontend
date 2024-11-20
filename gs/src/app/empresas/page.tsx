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
    <div className="h-90vh w-full flex justify-center">
      <div className="flex w-11/12 items-center justify-around gap-3">
        <h1 className="text-7xl w-1/2 t-color2 text-center">
          Veja algumas empresas parceiras!
        </h1>
        <div className="flex w-1/2 overflow-x-auto">
          <div className="flex whitespace-nowrap">
            {empresas.map((empresa) => (
              <div
                key={empresa.cdEmpresa}
                className="bg-[#2762ca] rounded-lg shadow-none w-[300px] h-[400px] flex flex-col items-center justify-around"
              >
                <h2>Id: {empresa.cdEmpresa}</h2>
                <p>Nome: {empresa.nmEmpresa}</p>
                <p>Cep: {empresa.nrCep}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
