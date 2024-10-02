import Link from "next/link";

export default function Home() {
  return (
    <div>
      <header className="font-mono p-6 ml-2">
        <nav>
          <ul className="flex items-center ">
            <img className="hover:rotate-180 duration-1000 transition-transform" src="/img/wheellogo.png" alt="Logo" />
            <div className="flex space-x-9 ml-8 text-base">
              <li>
                <Link href="/auth/login" className="relative group text-black uppercase text-lg no-underline">
                  Login
                  <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0" />
                </Link>
              </li>
              <li>
                <Link href="" className="relative group text-black uppercase text-lg no-underline">
                  Sobre nós
                  <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0" />
                </Link>
              </li>
              <li>
                <Link href="/auth/registro" className="relative group text-black uppercase text-lg no-underline">
                  Registrar
                  <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0" />
                </Link>
              </li>
              <li>
                <Link href="" className="relative group text-black uppercase text-lg no-underline">
                  Atendimento
                  <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0" />
                </Link>
              </li>
            </div>
          </ul>
        </nav>
      </header>
    </div>
  );
}
