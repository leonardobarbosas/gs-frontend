"use client";

import { TipoEmpresa } from "@/types";
import Link from "next/link";
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
        <div className="w-1/2 flex flex-col items-center justify-center gap-16">
          <h1 className="text-7xl  t-color2 text-center">
            Veja algumas empresas parceiras!
          </h1>
          <h2>Clique na empresa para ver mais!</h2>
          <Link href={`empresas/cad`}>
            <button className="button w-[280px] h-16 rounded-lg">
              Cadastrar nova empresa
            </button>
          </Link>
        </div>
        <div className="flex w-1/2 overflow-x-auto custom-scrollbar h-[415px]">
          <div className="flex whitespace-nowrap gap-4">
            {empresas.map((empresa) => (
              <Link
                href={`/empresas/cod/${empresa.cdEmpresa}`}
                key={empresa.cdEmpresa}
              >
                <div className="cards-empresas rounded-lg shadow-none w-[300px] h-[400px] flex flex-col items-center justify-around">
                  <h2>Id: {empresa.cdEmpresa}</h2>
                  <p>Nome: {empresa.nmEmpresa}</p>
                  <p>Cep: {empresa.nrCep}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
