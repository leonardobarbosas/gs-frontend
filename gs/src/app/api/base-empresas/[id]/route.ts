import { TipoEmpresa } from "@/types";
import { NextResponse } from "next/server";

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const response = await fetch(
      "http://localhost:8080/empresas/" + params.id,
      {
        method: "DELETE",
      }
    );
    if (!response.ok) {
      throw new Error("Falha ao excluir dados");
    }
    return NextResponse.json({message: "Dados excluídos com sucesso!"});
  } catch (error) {
    console.error("Falha na exclusão dos dados : ", error);
    return NextResponse.json(
      { message: "Falha na exclusão dos dados: " + error },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
){
  try {
    const { nmEmpresa, nrCep, nrCnpj } = await request.json();
    const empresa = {
      nmEmpresa,
      nrCep,
      nrCnpj,
    } as TipoEmpresa;

    const response = await fetch(
      "http://localhost:8080/empresas/" + params.id,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(empresa),
      }
    );

    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.error("Falha na atualização dos dados : ", error);
    return NextResponse.json(
      { message: "Falha na atualização dos dados: " + error },
      { status: 500 }
    );
  }
}
