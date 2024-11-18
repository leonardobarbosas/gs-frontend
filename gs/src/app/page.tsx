import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-16">
      <div className="flex gap-4 text-5xl">
        <h1 className="">Conecte-se ao futuro da</h1>
        <h1 className="title font-bold">Sustentabilidade</h1>
      </div>
      <Link href="/energias">
        <button className="button rounded-3xl shadow-2xl h-16 w-[200px]">
          Descubra as Tecnologias
        </button>
      </Link>
    </div>
  );
}
