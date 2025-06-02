export default function Navbar() {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b-2 border-solid border-b-blue-100 bg-white/80 backdrop-blur-sm px-10 py-4 shadow-sm">
      <div className="flex items-center gap-4 text-[#101518]">
        <div className="size-4 p-1 bg-blue-100 rounded-full">
          <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_6_319)">
              <path
                d="M8.57829 8.57829C5.52816 11.6284 3.451 15.5145 2.60947 19.7452C1.76794 23.9758 2.19984 28.361 3.85056 32.3462C5.50128 36.3314 8.29667 39.7376 11.8832 42.134C15.4698 44.5305 19.6865 45.8096 24 45.8096C28.3135 45.8096 32.5302 44.5305 36.1168 42.134C39.7033 39.7375 42.4987 36.3314 44.1494 32.3462C45.8002 28.361 46.2321 23.9758 45.3905 19.7452C44.549 15.5145 42.4718 11.6284 39.4217 8.57829L24 24L8.57829 8.57829Z"
                fill="currentColor"
              />
            </g>
            <defs>
              <clipPath id="clip0_6_319">
                <rect width="48" height="48" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <h2 className="text-[#101518] text-lg font-bold leading-tight tracking-[-0.015em]">𝙨𝙞𝙙𝙀𝙝𝙚𝙡𝙥</h2>
      </div>
      <div className="flex flex-1 justify-end gap-8">
        <div className="flex items-center gap-9">
          <a className="text-[#101518] text-sm font-medium leading-normal hover:text-blue-600 hover:border-b-2 hover:border-blue-600 pb-1 transition-all duration-200" href="#">Home</a>
          <a className="text-[#101518] text-sm font-medium leading-normal hover:text-blue-600 hover:border-b-2 hover:border-blue-600 pb-1 transition-all duration-200" href="#">Features</a>
          <a className="text-[#101518] text-sm font-medium leading-normal hover:text-blue-600 hover:border-b-2 hover:border-blue-600 pb-1 transition-all duration-200" href="#">Pricing</a>
          <a className="text-[#101518] text-sm font-medium leading-normal hover:text-blue-600 hover:border-b-2 hover:border-blue-600 pb-1 transition-all duration-200" href="#">Contact</a>
        </div>
        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-gradient-to-br from-black to-violet-900  text-white text-sm font-bold leading-normal tracking-[0.015em] shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200  ">
          <span className="truncate">Login</span>
        </button>
      </div>
    </header>
  );
}
