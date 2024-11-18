import francesco from "@/img/francescopng.jpg";
import leobarbosa from "@/img/leobarbosa.jpg";
import Image from "next/image";
import Link from "next/link";

export default function Integrantes() {
  return (
    <div className="flex flex-col w-full h-[80vh] items-center text-center justify-center gap-16">
      <h1 className="text-5xl title font-bold">Integrantes</h1>
      <div className="flex w-full justify-center gap-5">
        <div className="cards-integrantes">
          <h2>Leonardo Barbosa</h2>
          <Image
            src={leobarbosa}
            alt="leobarbosa"
            width={200}
            height={200}
            className="img-perfil"
          />
          <p>RM: 558230</p>
          <div className="flex items-center gap-2">
            <Link href="https://github.com/leonardobarbosas" target="_blank">
              <button className="button rounded-lg shadow-2xl h-16 w-[200px]">
                Github
              </button>
            </Link>
            <Link
              href="https://github.com/leonardobarbosas/gs-frontend"
              target="_blank"
            >
              <button className="button rounded-lg shadow-2xl h-16 w-[200px]">
                Repositório
              </button>
            </Link>
          </div>
        </div>
        <div className="cards-integrantes">
          <h2>Francesco di Benedetto</h2>
          <Image
            src={francesco}
            alt="francesco"
            width={200}
            height={200}
            className="img-perfil"
          />
          <p>RM: 557313</p>
          <Link href="https://github.com/FrancescoDiBenedetto" target="_blank">
            <button className="button rounded-lg shadow-2xl h-16 w-[200px]">
              Github
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
