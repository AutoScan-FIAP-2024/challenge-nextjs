"use client";

import Link from "next/link";
import LoginForm from "@/components/login-form";
import SignupForm from "@/components/signup-form";

export default function Page() {
  return (
    <div
      className="h-screen flex items-center justify-center"
      style={{ backgroundColor: "#9CAEDB" }}
    >
      <main className="flex">
        <div
          style={{
            width: "30vw",
            height: "70vh",
            background: "white",
            borderLeft: "solid",
            borderLeftColor: "white",
            borderTopLeftRadius: "20px",
            borderBottomLeftRadius: "20px",
          }}
        >
          <section>
            <Link href="/">
              <img
                className="p-1 hover:scale-110 transition-transform duration-500 inline-block"
                src="/img/home.png"
                alt="Home"
              />
            </Link>
            <div
              style={{ marginTop: "-23px" }}
              className="flex flex-col justify-center items-center font-bebas text-5xl text-black"
            >
              <h1 className="text-7xl">BEM-VINDO</h1>
            </div>
            <div>
                <img style={{ marginTop: '-30px' }} 
                src="/img/woman.png" alt="woman" />
            </div>
          </section>
        </div>
        <div
          style={{
            width: "30vw",
            height: "70vh",
            background: "#8C9CC2",
            borderRight: "solid",
            borderRightColor: "#8C9CC2",
            borderTopRightRadius: "20px",
            borderBottomRightRadius: "20px",
          }}
        >
          <section className="flex justify-center items-center mt-11">
            <h1 className="font-bebas text-7xl text-white">REGISTRAR</h1>
          </section>
          <section>
            <SignupForm></SignupForm>
          </section>
        </div>
      </main>
    </div>
  );
}
