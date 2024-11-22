"use client";
import { useState } from "react";
import { energias } from "@/energia";
import { TipoRenovavel } from "@/types";

export default function Renovaveis() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <div className="flex flex-col items-center justify-around h-[80vh]">
      <h1 className="t-color2 text-7xl w-1/2 text-center">
        Conheça as energias Renováveis
      </h1>
      <div className="flex w-11/12 overflow-x-auto custom-scrollbar h-[415px]">
        <div className="flex justify-around whitespace-nowrap gap-4 text-wrap">
          {energias.map((energia: TipoRenovavel) => (
            <div
              className="card"
              key={energia.nome}
              onMouseEnter={() => setHoveredCard(energia.nome)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {hoveredCard === energia.nome ? (
                <p className="t-color2 text-2xl pr-2 pl-2">
                  {energia.descricao}
                </p>
              ) : (
                <>
                  <h2>{energia.nome}</h2>
                  <p>Custo: {energia.custo}</p>
                  <p>Emissão de CO2: {energia.emissao_co2}</p>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
