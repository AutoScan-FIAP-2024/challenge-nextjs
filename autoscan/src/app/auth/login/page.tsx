import Link from "next/link";

export default function Page() {
    return (
      <div className="h-screen flex items-center justify-center" style={{ backgroundColor: '#9CAEDB'}}>
        <main className="flex">
          <div
            style={{
              width: '30vw',
              height: '70vh',
              background: 'white',
            }}
          >
            <section>
                <Link href="/">
                    <img className="p-1 hover:scale-110 transition-transform duration-500 inline-block" src="/img/home.png" alt="Home"/>
                </Link>
                <div className="flex flex-col justify-center items-center">
                <h1>BEM-VINDO</h1>
                <h2>NOVAMENTE!</h2>
                </div>
            </section>
          </div>
          <div
            style={{
             width: '30vw',
             height: '70vh',
             background: '#8C9CC2',
          }}
          >

          </div>
        </main>
      </div>
    )
  }
  