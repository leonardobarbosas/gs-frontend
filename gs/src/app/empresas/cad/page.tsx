"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { TipoEmpresa } from "@/types";

export default function CadEmpresa() {
  const navigate = useRouter();
  const [empresa, setEmpresa] = useState<TipoEmpresa>({
    cdEmpresa: 0,
    nmEmpresa: "",
    nrCep: 0,
    nrCnpj: 0,
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "http://localhost:3000/api/base-empresas/cad-empresa",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(empresa),
        }
      );

      if (response.ok) {
        alert("Empresa cadastrada com sucesso!");
        setEmpresa({
          cdEmpresa: 0,
          nmEmpresa: "",
          nrCep: 0,
          nrCnpj: 0,
        });

        navigate.push("/empresas");
      }
    } catch (error) {
      console.error("Ocorreu um erro no cadastro", error);
    }
  };

  return (
    <div className="h-[80vh] w-full flex items-center justify-center">
      <form
        className="w-11/12 h-5/6 flex flex-col items-center shadow-2xl justify-around"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Nome"
          className="input-empresa"
          id="nmEmpresa"
          value={empresa.nmEmpresa}
          onChange={(e) =>
            setEmpresa({ ...empresa, nmEmpresa: e.target.value })
          }
        />
        <input
          type="number"
          placeholder="CNPJ"
          className="input-empresa"
          id="nrCnpj"
          value={empresa.nrCnpj}
          onChange={(e) =>
            setEmpresa({ ...empresa, nrCnpj: parseFloat(e.target.value) })
          }
        />
        <input
          type="number"
          placeholder="CEP"
          className="input-empresa"
          id="nrCep"
          value={empresa.nrCep}
          onChange={(e) =>
            setEmpresa({ ...empresa, nrCep: parseFloat(e.target.value) })
          }
        />
        <button type="submit" className="button-empresa">
          Cadastrar Empresa
        </button>
      </form>
    </div>
  );
}
