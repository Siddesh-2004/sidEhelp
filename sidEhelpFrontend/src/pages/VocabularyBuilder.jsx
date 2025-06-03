import React from 'react';
import { Hash, Underline } from 'lucide-react';

const VocabularyBuilder = () => {
  return (
    <div className="relative flex  min-h-screen flex-col bg-gradient-to-br from-green-100 via-purple-50 to-pink-50" style={{ fontFamily: '"Roboto Condensed", "Noto Sans", sans-serif' }}>
      <div className="flex h-full grow flex-col">
        {/* Main Content */}
        <div className="flex items-center justify-center p-2 pb-50 bg-white">
          {/* Previous Button */}
          <button className="flex items-center justify-center w-20 h-12 rounded-full bg-gradient-to-br from-gray-900 via-blue-900 to-black shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 mr-6">
          <svg className="w-6 h-6" fill="none" stroke="white" viewBox="0 0 24 24">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
</svg>

          </button>

          <div className="flex flex-col max-w-2xl w-full mx-4 bg-gradient-to-br from-gray-900 via-blue-900 to-black  rounded-lg shadow-lg">
            {/* Word of the Day Header */}
            <h2 className="text-white text-2xl font-bold leading-tight px-4 text-center pb-3 pt-5" style={{fontFamily: '"Dancing Script", "Noto Sans", sans-serif',fontSize: '45px'}}>
                Welcome to the Vocabulary Builder
            </h2>

            {/* Current Word */}
            <h1 className="text-white text-3xl font-bold leading-tight px-4 text-center pb-3 pt-6">
              ETERNAL
            </h1>

            {/* Definition */}
            <p className="text-white text-base font-normal leading-normal pb-3 pt-1 px-4 text-center">
          Something that exists without end or lasts forever. It's often used to describe things that are timeless, unchanging, and beyond human lifespans.
            </p>

            {/* Example Sentences */}
            <h3 className="text-white text-lg font-bold leading-tight px-4 pb-2 pt-4">
              Example Sentences
            </h3>
            <p className="text-white text-base font-normal leading-normal pb-3 pt-1 px-4">
              She found comfort in the idea of eternal love, believing it would last forever.
            </p>
            <p className="text-white text-base font-normal leading-normal pb-3 pt-1 px-4">
             The stars in the night sky seem eternal, glowing endlessly over the ages.
            </p>

            {/* Synonyms */}
            <h3 className="text-white text-lg font-bold leading-tight px-4 pb-2 pt-4">
              Synonyms
            </h3>
            <div className="flex gap-3 p-3 flex-wrap pr-4">
              <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 pl-4 pr-4">
                <p className="text-white text-sm font-medium leading-normal">everlasting</p>
              </div>
              <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 pl-4 pr-4">
                <p className="text-white text-sm font-medium leading-normal">endless</p>
              </div>
              <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 pl-4 pr-4">
                <p className="text-white text-sm font-medium leading-normal">timeless</p>
              </div>
              <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 pl-4 pr-4">
                <p className="text-white text-sm font-medium leading-normal">infinite</p>
              </div>
            </div>

            {/* Antonyms */}
            <h3 className="text-white text-lg font-bold leading-tight px-4 pb-2 pt-4">
              Antonyms
            </h3>
            <div className="flex gap-3 p-3 flex-wrap pr-4">
              <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 pl-4 pr-4">
                <p className="text-white text-sm font-medium leading-normal">temporary</p>
              </div>
              <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 pl-4 pr-4">
                <p className="text-white text-sm font-medium leading-normal">finite</p>
              </div>
              <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 pl-4 pr-4">
                <p className="text-white text-sm font-medium leading-normal">brief</p>
              </div>
            </div>

            {/* Word Counter Button */}
            <div className="flex justify-end overflow-hidden px-5 pb-5">
              <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-14 px-5 bg-white/30 backdrop-blur-sm border border-white/40 text-white text-base font-bold leading-normal tracking-wide min-w-0 gap-4 pl-4 pr-6 hover:bg-white/40 transition-colors">
                
                <span className="truncate">Word Counter :</span>
                <span>7</span>
              </button>
            </div>
          </div>

          {/* Next Button */}
          <button className="flex items-center justify-center w-20 h-12 rounded-full bg-gradient-to-br from-gray-900 via-blue-900 to-black  text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 ml-6">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default VocabularyBuilder;