import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-16">
      <div className="flex gap-4 text-5xl">
        <h1 className="">Conecte-se ao futuro da</h1>
        <h1 className="title font-bold">Sustentabilidade</h1>
      </div>
      <div className="flex flex-col w-1/3 justify-center items-center gap-5">
        <div className="flex w-full items-center justify-around">
          <Link href="/energias">
            <button className="button rounded-3xl shadow-2xl h-16 w-[200px]">
              Descubra as Tecnologias
            </button>
          </Link>
          <Link href="/sobre-projeto">
            <button className="button rounded-3xl shadow-2xl h-16 w-[200px]">
              Sobre o Projeto
            </button>
          </Link>
        </div>
        <div className="w-full flex items-center justify-center">
          <Link href="/integrantes">
            <button className="button rounded-3xl shadow-2xl h-16 w-[200px]">
              Veja os Integrantes
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
