import { Link } from "react-router-dom";

export default function Feature() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Vocabulary Builder Card */}
      <div className="flex flex-col gap-3 pb-3 border-2 border-orange-300 rounded-xl p-6 bg-gradient-to-br from-slate-900 via-orange-900 to-red-900 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 hover:border-orange-400 group h-full">
        <div
          className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl border-2 border-gray-200 group-hover:border-orange-300 transition-all duration-300"
          style={{
            backgroundImage: "url(src/assets/vocabularyBuilder.png)",
          }}
        />
        <div className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 p-4 rounded-lg border border-gray-600 flex flex-col flex-1">
          <p className="text-white text-base font-bold leading-normal group-hover:text-orange-200 transition-colors duration-200">
            Vocabulary Builder
          </p>
          <p className="text-gray-300 text-sm font-normal leading-normal mt-2 mb-4 flex-1">
            A vocabulary builder designed to help students expand
            their collection of quality words. We provide synonyms
            and antonyms with a focus on improving language skills
            for placement exams and professional communication.
          </p>
          <Link
            to="/vocabulary-builder"
          >
            <button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-sm font-semibold py-2 px-4 rounded-lg transition-all duration-200 hover:shadow-lg transform hover:scale-105 border border-orange-400">
              Try Now
            </button>
          </Link>
        </div>
      </div>

      {/* Document Generation Card */}
      <div className="flex flex-col gap-3 pb-3 border-2 border-blue-300 rounded-xl p-6 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 hover:border-blue-400 group h-full">
        <div
          className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl border-2 border-gray-200 group-hover:border-blue-300 transition-all duration-300"
          style={{
            backgroundImage:
              "url(src/assets/documentsGeneration.jpeg)",
          }}
        />
        <div className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 p-4 rounded-lg border border-gray-600 flex flex-col flex-1">
          <p className="text-white text-base font-bold leading-normal group-hover:text-blue-200 transition-colors duration-200">
            Generate College Documents with Using Templates
          </p>
          <p className="text-gray-300 text-sm font-normal leading-normal mt-2 mb-4 flex-1">
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

      {/* Search Library Card */}
      <div className="flex flex-col gap-3 pb-3 border-2 border-emerald-300 rounded-xl p-6 bg-gradient-to-br from-slate-900 via-emerald-900 to-green-900 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 hover:border-emerald-400 group h-full">
        <div
          className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl border-2 border-gray-200 group-hover:border-emerald-300 transition-all duration-300"
          style={{
            backgroundImage: "url(src/assets/searchLibrary.jpeg)",
          }}
        />
        <div className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 p-4 rounded-lg border border-gray-600 flex flex-col flex-1">
          <p className="text-white text-base font-bold leading-normal group-hover:text-emerald-200 transition-colors duration-200">
            Search in Library
          </p>
          <p className="text-gray-300 text-sm font-normal leading-normal mt-2 mb-4 flex-1">
            Helps you search for books you need, offering relevant
            results and providing specific links to download the PDF
            versions, if available. This feature saves you time and
            effort by making it easier to find and access the books
            you're looking for
          </p>
          <button className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white text-sm font-semibold py-2 px-4 rounded-lg transition-all duration-200 hover:shadow-lg transform hover:scale-105 border border-emerald-400">
            Try Now
          </button>
        </div>
      </div>

      {/* Study Planner Card */}
      <div className="flex flex-col gap-3 pb-3 border-2 border-purple-300 rounded-xl p-6 bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 hover:border-purple-400 group h-full">
        <div
          className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl border-2 border-gray-200 group-hover:border-purple-300 transition-all duration-300"
          style={{
            backgroundImage: "url(src/assets/studyPlanner.webp)",
          }}
        />
        <div className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 p-4 rounded-lg border border-gray-600 flex flex-col flex-1">
          <p className="text-white text-base font-bold leading-normal group-hover:text-purple-200 transition-colors duration-200">
            Study Planner & Scheduler
          </p>
          <p className="text-gray-300 text-sm font-normal leading-normal mt-2 mb-4 flex-1">
            We offer you a comprehensive study planner that helps
            you organize your tasks, set priorities, and manage your
            time effectively. With customizable schedules,
            reminders, and progress tracking, it keeps you motivated
            and ensures you stay on track to meet your academic
            goals.
          </p>
          <button className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white text-sm font-semibold py-2 px-4 rounded-lg transition-all duration-200 hover:shadow-lg transform hover:scale-105 border border-purple-400">
            Try Now
          </button>
        </div>
      </div>
    </div>
  );
}