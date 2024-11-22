"use client";

import Image from "next/image";
import imgRenovavel from "@/img/renovavel.png";

export default function SobreProjeto() {
  return (
    <div className="w-full flex justify-around">
      <Image
        src={imgRenovavel}
        width={700}
        alt="Imagem Renovável"
        className="shadow-2xl rounded-lg"
      />
      <p className="text-3xl  t-color2 w-1/3">
        A Lf Energy é uma plataforma inovadora que conecta pessoas e empresas às
        melhores soluções de energia renovável. Com um diagnóstico
        personalizado, comparação de fornecedores e agendamento de consultorias,
        tornamos o processo de adoção de energias limpas simples, prático e
        transparente. Transforme sua relação com a energia e contribua para um
        futuro sustentável. Na Lf Energy, a sustentabilidade está ao seu
        alcance!
      </p>
    </div>
  );
}
