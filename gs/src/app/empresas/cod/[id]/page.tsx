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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEmpresa({ ...empresa, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/base-empresas/${params.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(empresa),
      });

      if (response.ok) {
        alert("Empresa atualizada com sucesso!");
        navigate.push("/empresas");
      }
    } catch (error) {
      console.error("Ocorreu um erro na atualização da empresa.", error);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      const response = await fetch(`/api/base-empresas/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        const dados = await response.json();
        setEmpresa(dados);
        alert("Empresa deletada com sucesso!");
        navigate.push("/empresas");
      }
    } catch (error) {
      console.error("Erro ao deletar empresa", error);
    }
  };

  return (
    <div className="w-full flex items-center h-[80vh] justify-center">
      <p></p>
      <nav className="w-11/12 flex bg-[#223f2e] rounded-xl shadow-2xl h-3/4">
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
        <form
          className="w-1/2 flex flex-col items-center shadow-2xl justify-around"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Nome"
            className="input-empresa"
            name="nmEmpresa"
            value={empresa.nmEmpresa}
            onChange={handleChange}
          />
          <input
            type="number"
            placeholder="CNPJ"
            className="input-empresa"
            name="nrCnpj"
            value={empresa.nrCnpj}
            onChange={handleChange}
          />
          <input
            type="number"
            placeholder="CEP"
            className="input-empresa"
            name="nrCep"
            value={empresa.nrCep}
            onChange={handleChange}
          />
          <button type="submit" className="button-empresa">
            Atualizar Empresa
          </button>
        </form>
      </nav>
    </div>
  );
}
