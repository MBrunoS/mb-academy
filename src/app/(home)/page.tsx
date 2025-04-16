import Link from 'next/link';

export default function HomePage() {
  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-[#111618] dark group/design-root overflow-x-hidden"
      style={{ fontFamily: '"Space Grotesk", "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="@container">
              <div className="@[480px]:p-4">
                <div
                  className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-4"
                  style={{
                    backgroundImage:
                      'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://cdn.usegalileo.ai/sdxl10/c62f8541-2916-4751-81e4-77348df71879.png")',
                  }}
                >
                  <div className="flex flex-col gap-2 text-center">
                    <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                      Craft Your Future in Web Development
                    </h1>
                    <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                      Forge your skills with our comprehensive web development
                      courses, designed for beginners to experts. Master the art
                      of code with ForgeCraft Academy.
                    </h2>
                  </div>
                  <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#13bdec] text-[#111618] text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]">
                    <span className="truncate">Explore Courses</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-10 px-4 py-10 @container">
              <div className="flex flex-col gap-4">
                <h1 className="text-white tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">
                  Why Choose ForgeCraft?
                </h1>
                <p className="text-white text-base font-normal leading-normal max-w-[720px]">
                  Our courses offer an immersive and practical approach to web
                  development, ensuring you gain the skills needed to succeed in
                  today&apos;s tech landscape.
                </p>
              </div>
              <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-0">
                <div className="flex flex-1 gap-3 rounded-lg border border-[#3b4e54] bg-[#1c2427] p-4 flex-col">
                  <div
                    className="text-white"
                    data-icon="Code"
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
                      <path d="M69.12,94.15,28.5,128l40.62,33.85a8,8,0,1,1-10.24,12.29l-48-40a8,8,0,0,1,0-12.29l48-40a8,8,0,0,1,10.24,12.3Zm176,27.7-48-40a8,8,0,1,0-10.24,12.3L227.5,128l-40.62,33.85a8,8,0,1,0,10.24,12.29l48-40a8,8,0,0,0,0-12.29ZM162.73,32.48a8,8,0,0,0-10.25,4.79l-64,176a8,8,0,0,0,4.79,10.26A8.14,8.14,0,0,0,96,224a8,8,0,0,0,7.52-5.27l64-176A8,8,0,0,0,162.73,32.48Z" />
                    </svg>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-white text-base font-bold leading-tight">
                      Expert Instructors
                    </h2>
                    <p className="text-[#9db3b9] text-sm font-normal leading-normal">
                      Learn from seasoned industry professionals who bring
                      real-world experience to the classroom.
                    </p>
                  </div>
                </div>
                <div className="flex flex-1 gap-3 rounded-lg border border-[#3b4e54] bg-[#1c2427] p-4 flex-col">
                  <div
                    className="text-white"
                    data-icon="Laptop"
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
                      <path d="M232,168h-8V72a24,24,0,0,0-24-24H56A24,24,0,0,0,32,72v96H24a8,8,0,0,0-8,8v16a24,24,0,0,0,24,24H216a24,24,0,0,0,24-24V176A8,8,0,0,0,232,168ZM48,72a8,8,0,0,1,8-8H200a8,8,0,0,1,8,8v96H48ZM224,192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8v-8H224ZM152,88a8,8,0,0,1-8,8H112a8,8,0,0,1,0-16h32A8,8,0,0,1,152,88Z" />
                    </svg>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-white text-base font-bold leading-tight">
                      Hands-On Projects
                    </h2>
                    <p className="text-[#9db3b9] text-sm font-normal leading-normal">
                      Apply your knowledge through a series of engaging
                      projects, building a robust portfolio.
                    </p>
                  </div>
                </div>
                <div className="flex flex-1 gap-3 rounded-lg border border-[#3b4e54] bg-[#1c2427] p-4 flex-col">
                  <div
                    className="text-white"
                    data-icon="GraduationCap"
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
                      <path d="M251.76,88.94l-120-64a8,8,0,0,0-7.52,0l-120,64a8,8,0,0,0,0,14.12L32,117.87v48.42a15.91,15.91,0,0,0,4.06,10.65C49.16,191.53,78.51,216,128,216a130,130,0,0,0,48-8.76V240a8,8,0,0,0,16,0V199.51a115.63,115.63,0,0,0,27.94-22.57A15.91,15.91,0,0,0,224,166.29V117.87l27.76-14.81a8,8,0,0,0,0-14.12ZM128,200c-43.27,0-68.72-21.14-80-33.71V126.4l76.24,40.66a8,8,0,0,0,7.52,0L176,143.47v46.34C163.4,195.69,147.52,200,128,200Zm80-33.75a97.83,97.83,0,0,1-16,14.25V134.93l16-8.53ZM188,118.94l-.22-.13-56-29.87a8,8,0,0,0-7.52,14.12L171,128l-43,22.93L25,96,128,41.07,231,96Z" />
                    </svg>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-white text-base font-bold leading-tight">
                      Flexible Learning
                    </h2>
                    <p className="text-[#9db3b9] text-sm font-normal leading-normal">
                      Study at your own pace with our flexible online platform,
                      accessible anytime, anywhere.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Featured Courses
            </h2>
            <div className="flex overflow-y-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              <div className="flex items-stretch p-4 gap-3">
                <div className="flex h-full flex-1 flex-col gap-4 rounded-xl bg-[#1c2427] shadow-[0_0_4px_rgba(0,0,0,0.1)] min-w-60">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex flex-col"
                    style={{
                      backgroundImage:
                        'url("https://cdn.usegalileo.ai/sdxl10/b7028bf4-0c52-4351-acb7-f42833907364.png")',
                    }}
                  />
                  <div className="flex flex-col flex-1 justify-between p-4 pt-0 gap-4">
                    <div>
                      <p className="text-white text-base font-medium leading-normal">
                        Full-Stack Web Development
                      </p>
                      <p className="text-[#9db3b9] text-sm font-normal leading-normal">
                        Master both front-end and back-end technologies to
                        become a versatile full-stack developer.
                      </p>
                    </div>
                    <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#283539] text-white text-sm font-bold leading-normal tracking-[0.015em]">
                      <span className="truncate">View Course</span>
                    </button>
                  </div>
                </div>
                <div className="flex h-full flex-1 flex-col gap-4 rounded-xl bg-[#1c2427] shadow-[0_0_4px_rgba(0,0,0,0.1)] min-w-60">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex flex-col"
                    style={{
                      backgroundImage:
                        'url("https://cdn.usegalileo.ai/sdxl10/aa37d4b4-e200-4cad-a445-ba5a7c71058c.png")',
                    }}
                  />
                  <div className="flex flex-col flex-1 justify-between p-4 pt-0 gap-4">
                    <div>
                      <p className="text-white text-base font-medium leading-normal">
                        Front-End Mastery
                      </p>
                      <p className="text-[#9db3b9] text-sm font-normal leading-normal">
                        Dive deep into front-end development with HTML, CSS, and
                        JavaScript, creating captivating user interfaces.
                      </p>
                    </div>
                    <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#283539] text-white text-sm font-bold leading-normal tracking-[0.015em]">
                      <span className="truncate">View Course</span>
                    </button>
                  </div>
                </div>
                <div className="flex h-full flex-1 flex-col gap-4 rounded-xl bg-[#1c2427] shadow-[0_0_4px_rgba(0,0,0,0.1)] min-w-60">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex flex-col"
                    style={{
                      backgroundImage:
                        'url("https://cdn.usegalileo.ai/sdxl10/a0404e9e-19a2-4de3-b74f-332aed962692.png")',
                    }}
                  />
                  <div className="flex flex-col flex-1 justify-between p-4 pt-0 gap-4">
                    <div>
                      <p className="text-white text-base font-medium leading-normal">
                        Back-End Specialization
                      </p>
                      <p className="text-[#9db3b9] text-sm font-normal leading-normal">
                        Focus on server-side logic and databases with our
                        specialized back-end development course.
                      </p>
                    </div>
                    <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#283539] text-white text-sm font-bold leading-normal tracking-[0.015em]">
                      <span className="truncate">View Course</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="@container">
              <div className="flex flex-col justify-end gap-6 px-4 py-10 @[480px]:gap-8 @[480px]:px-10 @[480px]:py-20">
                <div className="flex flex-col gap-2 text-center">
                  <h1 className="text-white tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">
                    Ready to ignite your career?
                  </h1>
                  <p className="text-white text-base font-normal leading-normal max-w-[720px]">
                    Enroll in our web development courses today and embark on a
                    transformative journey.
                  </p>
                </div>
                <div className="flex flex-1 justify-center">
                  <div className="flex justify-center">
                    <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#13bdec] text-[#111618] text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em] grow">
                      <span className="truncate">Enroll Now</span>
                    </button>
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
                  className="text-[#9db3b9] text-base font-normal leading-normal min-w-40"
                >
                  Contact Us
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
                  Terms of Service
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
                © 2024 ForgeCraft Academy. All rights reserved.
              </p>
            </footer>
          </div>
        </footer>
      </div>
    </div>
  );
}
