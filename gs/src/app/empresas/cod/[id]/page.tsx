"use client";
import { TipoEmpresa } from "@/types";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Empresa({ params }: { params: { id: number } }) {
  const navigate = useRouter();
  const [empresa, setEmpresa] = useState<TipoEmpresa>({
    cdEmpresa: 0,
    nmEmpresa: "",
    nrCep: 0,
    nrCnpj: 0,
  });

  useEffect(() => {
    const unwrapParams = async () => {
      const unwrappedParams = await params;
      const chamadaApi = async (id: number) => {
        try {
          const response = await fetch(`/api/base-empresas/cod/${id}`);
          if (!response.ok) {
            throw new Error("Erro ao buscar empresa");
          }
          const dados = await response.json();
          setEmpresa({
            ...dados,
            data: new Date(dados.data),
          });
        } catch (error) {
          console.error("Erro ao buscar dados da empresa", error);
        }
      };

      chamadaApi(unwrappedParams.id);
    };

    unwrapParams();
  }, [params]);

  return (
    <div className="w-full flex items-center h-[80vh] justify-center">
      <div className="w-11/12 flex flex-col bg-[#223f2e] rounded-xl shadow-2xl p-3 h-3/4">
        <h1>Empresa</h1>
        <p>Nome: {empresa.nmEmpresa}</p>
        <p>CNPJ: {empresa.nrCnpj}</p>
        <p>CEP: {empresa.nrCep}</p>
        <button onClick={() => navigate.push("/empresas")}>Voltar</button>
      </div>
    </div>
  );
}
