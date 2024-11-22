import { TipoEmpresa } from '@/types';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { nmEmpresa, nrCep, nrCnpj } = await request.json();
    const empresa = {
      nmEmpresa,
      nrCep,
      nrCnpj,
    } as TipoEmpresa;

    const response = await fetch("http://localhost:8080/empresas", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(empresa),
    });

    return NextResponse.json(response, { status: 201 });
  } catch (error) {
    console.error("Falha na criação dos dados : ", error);
    return NextResponse.json(
      { message: "Falha na criação dos dados: " + error },
      { status: 500 }
    );
  }
}