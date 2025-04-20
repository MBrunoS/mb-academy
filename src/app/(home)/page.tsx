import { BrainCircuit, Code, ScrollText } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  const year = new Date().getFullYear();
  return (
    <div className="min-h-screen">
      <div className="flex flex-col min-h-screen">
        <div className="flex flex-1 flex-col">
          <div className="px-40 flex flex-1 justify-center py-5">
            <div className="flex flex-col max-w-[960px] flex-1">
              <div className="@container">
                <div className="@[480px]:p-4">
                  <div className="flex min-h-[90vh] flex-col gap-6 @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-4">
                    <div className="flex flex-col gap-2 text-center">
                      <h1 className="text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-6xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] mb-10">
                        Forge o seu futuro na programação
                      </h1>
                      <h2 className="text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                        Desenvolva suas habilidades com nossos cursos de
                        programação, projetados para iniciantes a especialistas.
                        Domine a arte da programação com a Forja Academy.
                      </h2>
                    </div>
                    <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-amber-500 text-[#111618] text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]">
                      Explore Cursos
                    </button>
                  </div>
                </div>
              </div>
              <div className="pb-56 flex flex-col gap-4">
                <h2 className="text-center text-5xl font-bold">A Plataforma</h2>
                <div className="text-center justify-start text-stone-500 dark:text-stone-400 text-lg leading-loose tracking-tight">
                  A DevTrail é uma plataforma de mentoria em desenvolvimento
                  front-end que oferece trilhas de aprendizado para
                  desenvolvedores em diferentes níveis de experiência. Nossa
                  missão é impulsionar sua carreira em desenvolvimento front-end
                  com uma abordagem centrada no aluno. Estamos aqui para guiá-lo
                  em cada passo da sua jornada de aprendizado.
                </div>
              </div>
              <div className="flex flex-col gap-10 px-4 py-10 @container">
                <div className="flex flex-col gap-4">
                  <h2 className="tracking-light text-[32px] font-bold leading-tight @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                    Por que escolher a Forja Academy?
                  </h2>
                  <p className="text-base font-normal leading-normal max-w-[720px] text-stone-500 dark:text-stone-400">
                    Nossos cursos oferecem um enfoque imersivo e prático no
                    desenvolvimento, garantindo que você adquira as habilidades
                    necessárias para ter sucesso no cenário tecnológico de hoje.
                  </p>
                </div>
                <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-0">
                  <div className="flex flex-1 gap-3 rounded-2xl border border-stone-400 dark:border-stone-600 bg-stone-200 dark:bg-stone-800 p-4 flex-col">
                    <ScrollText />
                    <div className="flex flex-col gap-1">
                      <h2 className="text-base font-bold leading-tight">
                        Currículo Abrangente
                      </h2>
                      <p className="text-sm font-normal leading-normal">
                        Desde o básico até o avançado, cobrindo todos os
                        aspectos essenciais da programação.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-1 gap-3 rounded-2xl border border-stone-400 dark:border-stone-600 bg-stone-200 dark:bg-stone-800 p-4 flex-col">
                    <Code />
                    <div className="flex flex-col gap-1">
                      <h2 className="text-base font-bold leading-tight">
                        Projetos Práticos
                      </h2>
                      <p className="text-sm font-normal leading-normal">
                        Aplique seu conhecimento por meio de uma série de
                        projetos, construindo um portfólio robusto.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-1 gap-3 rounded-2xl border border-stone-400 dark:border-stone-600 bg-stone-200 dark:bg-stone-800 p-4 flex-col">
                    <BrainCircuit />
                    <div className="flex flex-col gap-1">
                      <h2 className="text-base font-bold leading-tight">
                        Aprendizado Flexível
                      </h2>
                      <p className="text-sm font-normal leading-normal">
                        Estude no seu ritmo com nossa plataforma online
                        flexível, acessível a qualquer momento e em qualquer
                        lugar.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="@container">
                <div className="flex flex-col justify-end gap-6 px-4 py-10 @[480px]:gap-8 @[480px]:px-10 @[480px]:py-20">
                  <div className="flex flex-col gap-2 text-center">
                    <h1 className="tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                      Está pronto para construir seu futuro?
                    </h1>
                    <p className="text-base font-normal leading-normal">
                      Embarque em uma jornada transformadora com nossos cursos
                      de desenvolvimento web.
                    </p>
                  </div>
                  <div className="flex flex-1 justify-center">
                    <div className="flex justify-center">
                      <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-amber-500 text-[#111618] text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em] grow">
                        <span className="truncate">Enroll Now</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="flex justify-center">
          <div className="flex max-w-[960px] flex-1 flex-col">
            <footer className="flex flex-col gap-6 px-5 py-10 text-center @container">
              <div className="flex flex-wrap items-center justify-center gap-6 @[480px]:flex-row @[480px]:justify-around">
                <Link
                  href="#"
                  className="text-base font-normal leading-normal min-w-40"
                >
                  Contact Us
                </Link>
                <Link
                  href="#"
                  className="text-base font-normal leading-normal min-w-40"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="#"
                  className="text-base font-normal leading-normal min-w-40"
                >
                  Terms of Service
                </Link>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="#">
                  <div
                    data-icon="TwitterLogo"
                    data-size="24px"
                    data-weight="regular"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24px"
                      height="24px"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M247.39,68.94A8,8,0,0,0,240,64H209.57A48.66,48.66,0,0,0,168.1,40a46.91,46.91,0,0,0-33.75,13.7A47.9,47.9,0,0,0,120,88v6.09C79.74,83.47,46.81,50.72,46.46,50.37a8,8,0,0,0-13.65,4.92c-4.31,47.79,9.57,79.77,22,98.18a110.93,110.93,0,0,0,21.88,24.2c-15.23,17.53-39.21,26.74-39.47,26.84a8,8,0,0,0-3.85,11.93c.75,1.12,3.75,5.05,11.08,8.72C53.51,229.7,65.48,232,80,232c70.67,0,129.72-54.42,135.75-124.44l29.91-29.9A8,8,0,0,0,247.39,68.94Zm-45,29.41a8,8,0,0,0-2.32,5.14C196,166.58,143.28,216,80,216c-10.56,0-18-1.4-23.22-3.08,11.51-6.25,27.56-17,37.88-32.48A8,8,0,0,0,92,169.08c-.47-.27-43.91-26.34-44-96,16,13,45.25,33.17,78.67,38.79A8,8,0,0,0,136,104V88a32,32,0,0,1,9.6-22.92A30.94,30.94,0,0,1,167.9,56c12.66.16,24.49,7.88,29.44,19.21A8,8,0,0,0,204.67,80h16Z" />
                    </svg>
                  </div>
                </Link>
                <Link href="#">
                  <div
                    data-icon="LinkedinLogo"
                    data-size="24px"
                    data-weight="regular"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24px"
                      height="24px"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z" />
                    </svg>
                  </div>
                </Link>
                <Link href="#">
                  <div
                    data-icon="InstagramLogo"
                    data-size="24px"
                    data-weight="regular"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24px"
                      height="24px"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z" />
                    </svg>
                  </div>
                </Link>
              </div>
              <p className="text-base font-normal leading-normal">
                © {year} Forja Academy. Todos os direitos reservados.
              </p>
            </footer>
          </div>
        </footer>
      </div>
    </div>
  );
}
