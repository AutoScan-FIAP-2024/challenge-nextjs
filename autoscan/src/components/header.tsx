import Link from "next/link";

export default function Header() {
  return (
    <div>
      <header className="bg-gray-800 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2"> 
          <div className=" text-lg font-bold cursor-default
          w-10 h-10 flex items-center justify-center rounded-full bg-[#354ead] text-gray-800">
            A
          </div>
        </div>
        <nav className="space-x-8 text-lg">
          <a href="#" className="text-gray-300 hover:text-white transition duration-300">Home</a>
          <a href="#" className="text-gray-300 hover:text-white transition duration-300">Sobre nós</a>
          <a href="#" className="text-gray-300 hover:text-white transition duration-300">Registrar</a>
          <a href="#" className="text-gray-300 hover:text-white transition duration-300">Login</a>
        </nav>
      </div>
    </header>
    </div>
  );
}
