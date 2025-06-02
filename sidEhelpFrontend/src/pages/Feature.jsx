export default function Feature() {
  return (
    <>
      <div
        className="relative flex size-full min-h-screen flex-col bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 group/design-root overflow-x-hidden"
        style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}
      >
        <div className="layout-container flex h-full grow flex-col">
          <div className="px-40 flex flex-1 justify-center py-5">
            <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
              <div className="flex flex-col gap-10 px-4 py-10 @container">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-3 pb-3 border-2 border-blue-200 rounded-xl p-6 bg-white shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 hover:border-blue-400 group h-full">
                    <div
                      className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl border-2 border-gray-200 group-hover:border-blue-300 transition-all duration-300"
                      style={{
                        backgroundImage:
                          "url(src/assets/documentsGeneration.jpeg)",
                      }}
                    />
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg border border-blue-100 flex flex-col flex-1">
                      <p className="text-[#101518] text-base font-bold leading-normal group-hover:text-blue-700 transition-colors duration-200">
                        Generate College Documents with Using Templates
                      </p>
                      <p className="text-[#5c778a] text-sm font-normal leading-normal mt-2 mb-4 flex-1">
                        Helps you generate documents in the standard format used
                        at your college for various purposes such as program
                        printouts, project reports, and indexes, reducing the
                        burden of creating them manually. You can also customize
                        them as per your requirements.
                      </p>
                      <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white text-sm font-semibold py-2 px-4 rounded-lg transition-all duration-200 hover:shadow-lg transform hover:scale-105 border border-blue-400">
                        Try Now
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 pb-3 border-2 border-green-200 rounded-xl p-6 bg-white shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 hover:border-green-400 group h-full">
                    <div
                      className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl border-2 border-gray-200 group-hover:border-green-300 transition-all duration-300"
                      style={{
                        backgroundImage: "url(src/assets/searchLibrary.jpeg)",
                      }}
                    />
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg border border-green-100 flex flex-col flex-1">
                      <p className="text-[#101518] text-base font-bold leading-normal group-hover:text-green-700 transition-colors duration-200">
                        Search in Library
                      </p>
                      <p className="text-[#5c778a] text-sm font-normal leading-normal mt-2 mb-4 flex-1">
                        Helps you search for books you need, offering relevant
                        results and providing specific links to download the PDF
                        versions, if available. This feature saves you time and
                        effort by making it easier to find and access the books
                        you’re looking for
                      </p>
                      <button className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white text-sm font-semibold py-2 px-4 rounded-lg transition-all duration-200 hover:shadow-lg transform hover:scale-105 border border-green-400">
                        Try Now
                      </button>
                    </div>
                  </div>
                   <div className="flex flex-col gap-3 pb-3 border-2 border-green-200 rounded-xl p-6 bg-white shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 hover:border-green-400 group h-full">
                    <div
                      className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl border-2 border-gray-200 group-hover:border-green-300 transition-all duration-300"
                      style={{
                        backgroundImage: "url(src/assets/studyPlanner.webp)",
                      }}
                    />
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg border border-green-100 flex flex-col flex-1">
                      <p className="text-[#101518] text-base font-bold leading-normal group-hover:text-green-700 transition-colors duration-200">
                        Study Planner & Scheduler
                      </p>
                      <p className="text-[#5c778a] text-sm font-normal leading-normal mt-2 mb-4 flex-1">
                        Helps you search for books you need, offering relevant
                        results and providing specific links to download the PDF
                        versions, if available. This feature saves you time and
                        effort by making it easier to find and access the books
                        you’re looking for
                      </p>
                      <button className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white text-sm font-semibold py-2 px-4 rounded-lg transition-all duration-200 hover:shadow-lg transform hover:scale-105 border border-green-400">
                        Try Now
                      </button>
                    </div>
                  </div>

                  {/* <div className="flex flex-col gap-3 pb-3 border-2 border-purple-200 rounded-xl p-6 bg-white shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 hover:border-purple-400 group h-full">
                    <div className="w-full aspect-video bg-gradient-to-br from-purple-100 via-blue-100 to-indigo-200 rounded-xl flex items-center justify-center border-2 border-purple-200 group-hover:border-purple-400 transition-all duration-300 group-hover:from-purple-200 group-hover:to-indigo-300">
                      <div className="text-purple-600 text-4xl group-hover:scale-110 transition-transform duration-200">
                        📚
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-4 rounded-lg border border-purple-100 flex flex-col flex-1">
                      <p className="text-[#101518] text-base font-bold leading-normal group-hover:text-purple-700 transition-colors duration-200">
                        Study Planner & Scheduler
                      </p>
                      <p className="text-[#5c778a] text-sm font-normal leading-normal mt-2 mb-4 flex-1">
                        We offer you a comprehensive study planner that helps
                        you organize your tasks, set priorities, and manage your
                        time effectively. With customizable schedules,
                        reminders, and progress tracking, it keeps you motivated
                        and ensures you stay on track to meet your academic
                        goals
                      </p>
                      <button className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white text-sm font-semibold py-2 px-4 rounded-lg transition-all duration-200 hover:shadow-lg transform hover:scale-105 border border-purple-400">
                        Try Now
                      </button>
                    </div>
                  </div> */}

                  <div className="flex flex-col gap-3 pb-3 border-2 border-orange-200 rounded-xl p-6 bg-white shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 hover:border-orange-400 group h-full">
                    <div className="w-full aspect-video bg-gradient-to-br from-orange-100 via-amber-100 to-yellow-200 rounded-xl flex items-center justify-center border-2 border-orange-200 group-hover:border-orange-400 transition-all duration-300 group-hover:from-orange-200 group-hover:to-yellow-300">
                      <div className="text-orange-600 text-4xl group-hover:scale-110 transition-transform duration-200">
                        🎯
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-4 rounded-lg border border-orange-100 flex flex-col flex-1">
                      <p className="text-[#101518] text-base font-bold leading-normal group-hover:text-orange-700 transition-colors duration-200">
                        Vocabulary Builder
                      </p>
                      <p className="text-[#5c778a] text-sm font-normal leading-normal mt-2 mb-4 flex-1">
                        A vocabulary builder designed to help students expand
                        their collection of quality words. We provide synonyms
                        and antonyms with a focus on improving language skills
                        for placement exams and professional communication.
                      </p>
                      <button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-sm font-semibold py-2 px-4 rounded-lg transition-all duration-200 hover:shadow-lg transform hover:scale-105 border border-orange-400">
                        Try Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
