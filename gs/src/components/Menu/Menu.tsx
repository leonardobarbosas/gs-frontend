import Link from "next/link";
import React from "react";
import logoImg from "../../img/logo-energia.png";
import Image from "next/image";

export default function Menu() {
  return (
    <nav className="w-full h-[10vh] flex">
      <ul className="flex w-full items-center justify-around">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/energias">Energias</Link>
        </li>
        <li>
          <Image src={logoImg} alt="logo" width={50} height={50} />
        </li>
        <li>
          <Link href="/empresas">Empresas</Link>
        </li>
        <li>
          <Link href="/sobre-nos">Sobre Nós</Link>
        </li>
      </ul>
    </nav>
  );
}
