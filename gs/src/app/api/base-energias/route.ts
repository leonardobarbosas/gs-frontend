import { NextResponse } from "next/server";
import { TipoEnergia } from "@/types";

export async function GET() {
  try {
    const response = await fetch("http://localhost:8080/bancoDados/ProjetosSustentaveis");
    if (!response.ok) {
      throw new Error("Falha ao buscar dados");
    }
    const dados: TipoEnergia[] = await response.json();
    return NextResponse.json(dados);
  } catch (error) {
    console.error("Falha ao buscar os dados:", error);
    return NextResponse.json(
      { error: "Falha ao buscar os dados" },
      { status: 500 }
    );
  }
}
