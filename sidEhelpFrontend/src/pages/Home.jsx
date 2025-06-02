import React from 'react'

function Home() {
 return(
    <div>
      <div className="relative flex size-full min-h-screen flex-col bg-gray-50 group/design-root overflow-x-hidden select-none" style={{fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif'}}>
        <div className="layout-container flex h-full grow flex-col">
          
          <div className="px-40 flex flex-1 justify-center py-5">
            <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
              <div className="@container">
                <div className="@[480px]:p-4">
                  <div
                    className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-4"
                    style={{backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuArdv7KLRgmSV9S1NQBK4eA7rxvEBGjJwudjsajaVS7shz_EqJFwpS3Qfofv-5SFEuqarxKMsLN62T2at0jML2a4Ci34cJJvjNRWzTL0BE6wnchwAU44fCJg90sPUZ7eZDke49CUEzoXJCOn8_kV6U3bn2hyHt2ZRjOHws-l_poIRMxvK4nHDhaaZOOthSGQcW1d8QZ_qsb2Ufky22OAQXAR59i2wdbzyIAVPj7d5UW5bT_mjwuZpPOVCluvfOJ3Ci0b3bgDbf_oDU")'}}
                  >
                    <div className="flex flex-col gap-2 text-center">
                      <h1
                        className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]"
                      >
                        Your Academic Success, Simplified
                      </h1>
                      <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                        sidEhelp is your all-in-one academic companion, offering tools to streamline your studies, enhance your learning, and achieve your goals.
                      </h2>
                    </div>
                    <button
                      className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-black text-gray-50 text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]"
                    >
                      <span className="truncate">Get Started</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-10 px-4 py-10 @container">
                <div className="flex flex-col gap-4">
                  <h1
                    className="text-[#101519] tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]"
                  >
                    Empowering Your Academic Journey
                  </h1>
                  <p className="text-[#101519] text-base font-normal leading-normal max-w-[720px]">
                    sidEhelp provides a suite of tools designed to support students at every stage of their academic journey.
                  </p>
                </div>
                <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-0">
                  <div className="flex flex-1 gap-3 rounded-lg border border-[#d3dde3] bg-gradient-to-br from-black to-violet-900  p-4 flex-col cursor-pointer transition-all duration-300 hover:scale-105 hover:bg-blue-200 hover:border-blue-400 hover:shadow-lg" style={{color: 'white'}}>
                    <div className="text-[#101519]" data-icon="File" data-size="24px" data-weight="regular">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="white" viewBox="0 0 256 256">
                        <path
                          d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Z"
                        />
                      </svg>
                    </div>
                    <div className="flex flex-col gap-1">
                      <h2 className=" text-base font-bold leading-tight">Generate College Documents with Using Templates</h2>
                      <p className="text-[#5a778c] text-sm font-normal leading-normal">Create professional-looking essays, reports, and presentations with our customizable templates.</p>
                    </div>
                  </div>
                  <div className="flex flex-1 gap-3 rounded-lg border border-[#d3dde3] bg-gradient-to-br from-black to-violet-900  p-4 flex-col cursor-pointer transition-all duration-300 hover:scale-105 hover:bg-green-200 hover:border-green-400 hover:shadow-lg" style={{color: 'white'}}>
                    <div className="text-white" data-icon="BookOpen" data-size="24px" data-weight="regular">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                        <path
                          d="M224,48H160a40,40,0,0,0-32,16A40,40,0,0,0,96,48H32A16,16,0,0,0,16,64V192a16,16,0,0,0,16,16H96a24,24,0,0,1,24,24,8,8,0,0,0,16,0,24,24,0,0,1,24-24h64a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48ZM96,192H32V64H96a24,24,0,0,1,24,24V200A39.81,39.81,0,0,0,96,192Zm128,0H160a39.81,39.81,0,0,0-24,8V88a24,24,0,0,1,24-24h64Z"
                        />
                      </svg>
                    </div>
                    <div className="flex flex-col gap-1">
                      <h2 className=" text-base font-bold leading-tight">Build Vocabulary</h2>
                      <p className="text-[#5a778c] text-sm font-normal leading-normal">Expand your vocabulary with interactive exercises and personalized word lists.</p>
                    </div>
                  </div>
                  <div className="flex flex-1 gap-3 rounded-lg border border-[#d3dde3] bg-gradient-to-br from-black to-violet-900  p-4 flex-col cursor-pointer transition-all duration-300 hover:scale-105 hover:bg-violet-200 hover:border-violet-400 hover:shadow-lg" style={{color: 'white'}}>
                    <div className="text-[#101519]" data-icon="MagnifyingGlass" data-size="24px" data-weight="regular">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="white" viewBox="0 0 256 256">
                        <path
                          d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"
                        />
                      </svg>
                    </div>
                    <div className="flex flex-col gap-1">
                      <h2 className=" text-base font-bold leading-tight">Search in Library</h2>
                      <p className="text-[#5a778c] text-sm font-normal leading-normal">Access a vast library of academic resources, including articles, research papers, and more.</p>
                    </div>
                  </div>
                  <div className="flex flex-1 gap-3 rounded-lg border border-[#d3dde3] bg-gradient-to-br from-black to-violet-900  p-4 flex-col cursor-pointer transition-all duration-300 hover:scale-105 hover:bg-orange-200 hover:border-yellow-400 hover:shadow-lg" style={{color: 'white'}}>
                    <div className="text-[#101519]" data-icon="Calendar" data-size="24px" data-weight="regular">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="white" viewBox="0 0 256 256">
                        <path
                          d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Zm-96-88v64a8,8,0,0,1-16,0V132.94l-4.42,2.22a8,8,0,0,1-7.16-14.32l16-8A8,8,0,0,1,112,120Zm59.16,30.45L152,176h16a8,8,0,0,1,0,16H136a8,8,0,0,1-6.4-12.8l28.78-38.37A8,8,0,1,0,145.07,132a8,8,0,1,1-13.85-8A24,24,0,0,1,176,136,23.76,23.76,0,0,1,171.16,150.45Z"
                        />
                      </svg>
                    </div>
                    <div className="flex flex-col gap-1">
                      <h2 className="text-base font-bold leading-tight">Study Planner</h2>
                      <p className="text-[#5a778c] text-sm font-normal leading-normal">Organize your study schedule, track your progress, and stay on top of your coursework.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
 );

}

export default Home