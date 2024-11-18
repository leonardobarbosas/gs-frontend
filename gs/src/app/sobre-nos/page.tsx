import Image from "next/image";
import logoMissao from "@/img/missao.png";
import logoVisao from "@/img/visao.png";
import logoValores from "@/img/valores.png";

export default function SobreNos() {
  return (
    <div className="flex flex-col items-center h-[80vh] justify-center gap-16">
      <div className="flex flex-col items-center gap-3">
        <h1 className="text-4xl title font-bold">Sobre Nós</h1>
        <h2 className="font-normal text-slate-100">
          LF Solutions é uma plataforma que conecta pessoas que querem utilizar
          energias renováveis com empresas do segmento.
        </h2>
      </div>
      <div className="flex w-[90vw] justify-around">
        <div className="cards-mvv">
          <Image src={logoMissao} alt="missao" width={50} height={50} />
          <h3>Missão</h3>
          <p>
            Promovemos a transição para energias sustentáveis, conectando
            pessoas e empresas com soluções inovadoras para um futuro mais
            verde.
          </p>
        </div>
        <div className="cards-mvv">
          <Image src={logoVisao} alt="visao" width={50} height={50} />
          <h3>Visão</h3>
          <p>
            Ambicionamos ser a principal referência no Brasil em energia
            renovável, impulsionando inovações que moldam um impacto global
            positivo.
          </p>
        </div>
        <div className="cards-mvv">
          <Image src={logoValores} alt="valores" width={80} height={50} />
          <h3>Valores</h3>
          <p>
            Valorizamos a transparência, ética, inovação, e compromisso com
            práticas sustentáveis que respeitam nosso planeta e fortalecem nossa
            comunidade.
          </p>
        </div>
      </div>
    </div>
  );
}
