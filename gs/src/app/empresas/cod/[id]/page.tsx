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

  const handleDelete = async (id: number) => {
    try {
      const response = await fetch(`/api/base-empresas/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        const dados = await response.json();
        setEmpresa(dados);
        navigate.push("/empresas");
      }
    } catch (error) {
      console.error("Erro ao deletar empresa", error);
    }
  };

  return (
    <div className="w-full flex items-center h-[80vh] justify-center">
      <p></p>
      <nav className="w-11/12 flex bg-[#223f2e] rounded-xl shadow-2xl  h-3/4">
        <div className="w-1/2 flex flex-col items-center shadow-2xl justify-around">
          <h1>Empresa</h1>
          <p>Nome: {empresa.nmEmpresa}</p>
          <p>CNPJ: {empresa.nrCnpj}</p>
          <p>CEP: {empresa.nrCep}</p>
          <div className="w-full flex justify-around">
            <button
              onClick={() => navigate.push("/empresas")}
              className="button-empresa"
            >
              Voltar
            </button>
            <button
              onClick={() => handleDelete(empresa.cdEmpresa)}
              className="button-empresa"
            >
              Excluir
            </button>
          </div>
        </div>
        <form className="w-1/2 flex flex-col items-center shadow-2xl justify-around">
          <input type="text" placeholder="Nome" className="input-empresa" />
          <input type="number" placeholder="CNPJ" className="input-empresa" />
          <input type="number" placeholder="CEP" className="input-empresa" />
          <button type="submit" className="button-empresa">
            Editar Empresa
          </button>
        </form>
      </nav>
    </div>
  );
}
