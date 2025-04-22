import Link from "next/link";

export default function CoursesPage() {
  return (
    <div className="relative flex size-full min-h-screen flex-col dark group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <div className="flex min-w-72 flex-col gap-3">
                <p className="text-white tracking-light text-[32px] font-bold leading-tight">
                  Ignite Your Coding Future
                </p>
                <p className="text-[#9db3b9] text-sm font-normal leading-normal">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, quos.
                </p>
              </div>
            </div>

            <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Catálogo de Cursos
            </h2>
            <div className="p-4">
              <div className="flex items-stretch justify-between gap-4 rounded-xl">
                <div className="flex flex-[2_2_0px] flex-col gap-4">
                  <div className="flex flex-col gap-1">
                    <p className="text-white text-base font-bold leading-tight">
                      Starter
                    </p>
                    <p className="text-[#9db3b9] text-sm font-normal leading-normal">
                      Curso básico para iniciantes em programação web, ensinando
                      desde os conceitos fundamentais até a construção de
                      projetos reais. Aprenda JavaScript, Git, GitHub e
                      desenvolva uma base sólida para sua carreira como
                      desenvolvedor.
                    </p>
                  </div>
                  <Link
                    href="/courses/starter"
                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 flex-row-reverse bg-[#283539] text-white text-sm font-medium leading-normal w-fit"
                  >
                    Saiba Mais
                  </Link>
                </div>
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex-1"
                  style={{
                    backgroundImage:
                      'url("https://cdn.usegalileo.ai/sdxl10/7544bbcd-081e-4329-9e42-603ebb969d13.png")',
                  }}
                />
              </div>
            </div>

            <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Trilhas de Aprendizado
            </h2>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
              <div className="flex flex-col gap-3 pb-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                  style={{
                    backgroundImage:
                      'url("https://cdn.usegalileo.ai/sdxl10/5ae3a45f-4c51-4f55-97fb-8e559a6bc83a.png")',
                    filter: "grayscale(100%)",
                  }}
                />
                <div>
                  <p className="text-white text-base font-medium leading-normal">
                    Frontend
                  </p>
                  <p className="text-[#9db3b9] text-sm font-normal leading-normal">
                    Aprenda a criar interfaces de usuário interativas e
                    atraentes.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-3 pb-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                  style={{
                    backgroundImage:
                      'url("https://cdn.usegalileo.ai/sdxl10/1787d8bd-3efe-484d-8af9-389205904d93.png")',
                    filter: "grayscale(100%)",
                  }}
                />
                <div>
                  <p className="text-white text-base font-medium leading-normal">
                    Backend
                  </p>
                  <p className="text-[#9db3b9] text-sm font-normal leading-normal">
                    Aprenda a criar sistemas robustos e escaláveis.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-3 pb-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                  style={{
                    backgroundImage:
                      'url("https://cdn.usegalileo.ai/sdxl10/e41a189b-d2e8-4893-b90b-897e1aad4e6a.png")',
                    filter: "grayscale(100%)",
                  }}
                />
                <div>
                  <p className="text-white text-base font-medium leading-normal">
                    Full Stack
                  </p>
                  <p className="text-[#9db3b9] text-sm font-normal leading-normal">
                    Aprenda a criar aplicações completas e escaláveis.
                  </p>
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
                  className="text-[#9db3b9] text-base font-normal leading-normal min-w-40"
                >
                  Terms of Service
                </Link>
                <Link
                  href="#"
                  className="text-[#9db3b9] text-base font-normal leading-normal min-w-40"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="#"
                  className="text-[#9db3b9] text-base font-normal leading-normal min-w-40"
                >
                  Contact Us
                </Link>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="#">
                  <div
                    className="text-[#9db3b9]"
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
                    className="text-[#9db3b9]"
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
                    className="text-[#9db3b9]"
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
              <p className="text-[#9db3b9] text-base font-normal leading-normal">
                @2024 Forja Academy. All rights reserved.
              </p>
            </footer>
          </div>
        </footer>
      </div>
    </div>
  );
}
