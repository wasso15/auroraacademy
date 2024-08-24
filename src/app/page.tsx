import Image from "next/image";
import Vector from "/public/artboard.png";

export default function Home() {
  return (
    <main className="flex min-h-screen px-4">
      <header className="container border-r-slate-950 flex flex-col  justify-center">
        <div className="  md:px-5 md:flex flex-row">
          <div className="md:w-1/2  flex flex-col  items-center justify-center  ">
            <div className=" space-y-3">
              <h1 className=" text-center text-6xl md:text-left  font-bold text-orange-600">
                Aurora Academy
              </h1>
              <p className=" text-center md:text-left  text-xs text-gray-500">
                Notre site est actuellement en construction. Nous travaillons
                dur pour vous offrir une expérience incroyable. Restez connecté,
                nous serons bientôt en ligne
              </p>
            </div>
          </div>

          <div className=" mt-5 md:mt-0 grow  max-w-md">
            <Image
              src={Vector}
              alt="InnovEmploi-logo"
              height={500}
              width={1000}
            />
          </div>
        </div>
      </header>
    </main>
  );
}
