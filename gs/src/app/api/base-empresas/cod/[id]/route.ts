import { TipoEmpresa } from "@/types";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const response = await fetch("http://localhost:8080/empresas/cod/" + params.id);
    if (!response.ok) {
      throw new Error("Falha ao buscar dados");
    }
    const dados: TipoEmpresa[] = await response.json();
    return NextResponse.json(dados);
  } catch (error) {
    console.error("Falha na obtenção da informação : ", error);
    return NextResponse.json(
      { message: "Falha na obtenção da informação: " + error },
      { status: 500 }
    );
  }
}
