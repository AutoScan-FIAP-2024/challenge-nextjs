import Link from "next/link";

export default function Header() {
  return (
    <div>
      <header className="bg-black text-white">
        <nav className="h-20 max-w-6xl mx-auto flex justify-between items-center p-5">
          <img width={250}
          src="/img/logo.png" alt="Logo" />
          <ul className="flex space-x-4">
            <li><a href="/" className="hover:text-[#605EDB] transition duration-300">Home</a></li>
            <li><a href="/sobre-nos" className="hover:text-[#605EDB] transition duration-300">Sobre nós</a></li>
            <li><a href="/auth/registro" className="hover:text-[#605EDB] transition duration-300">Registrar</a></li>
            <li><a href="/auth/login" className="hover:text-[#605EDB] transition duration-300">Login</a></li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
