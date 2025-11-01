import { Background } from "@/components/background";

export default function Home() {
  return (
    <main className="h-[100dvh] w-full relative">
      <div className="relative h-full w-full">
        <Background src="/background.jpg" />

        {/* Vertical line - thicker */}
        <div className="fixed left-[18.85%] top-0 bottom-0 w-[2px] bg-white z-50"></div>
        
        {/* Horizontal line - thicker */}
        <div className="fixed left-0 top-1/3 right-0 h-[2px] bg-white z-40"></div>

        {/* 4-pointed star at intersection - CSS only */}
        <div className="fixed left-[18.85%] top-1/3 -translate-x-1/2 -translate-y-1/2 z-60">
          <div className="relative w-12 h-12 flex items-center justify-center">
            <div className="absolute inset-0 bg-[#d9dbe2]/40 rotate-45 rounded-[55%] blur-sm"></div>
            <div className="absolute w-6 h-6 bg-[#d9dbe2] rotate-45 rounded-[45%]"></div>
            <div className="absolute w-3 h-3 bg-white/90 rounded-full"></div>
          </div>
        </div>
     
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
          <h1 className="font-sans italic mb-8 text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl" style={{ letterSpacing: '-4px' }}>
            Bohr Systems
          </h1>
        </div>
      </div>
      {/* Email in bottom right corner */}
      <div className="fixed bottom-4 right-4 text-white font-sans italic mix-blend-difference z-50 text-sm sm:text-base md:text-lg lg:text-xl" style={{ letterSpacing: '-0.5px' }}>
        rohil@bohrsystems.us
      </div>

      {/* LinkedIn icon at bottom center */}
      <a
        href="YOUR_LINKEDIN_URL_HERE"
        target="_blank"
        rel="noopener noreferrer"  
        className="fixed bottom-4 left-1/2 -translate-x-1/2 text-white mix-blend-difference z-50 hover:opacity-70 transition-opacity"
      >
        <svg data-testid="geist-icon" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" strokeLinejoin="round" style={{color: 'currentColor'}} viewBox="0 0 16 16">
          <path id="Subtract" fillRule="evenodd" clipRule="evenodd" d="M2 0C0.895431 0 0 0.895431 0 2V14C0 15.1046 0.895431 16 2 16H14C15.1046 16 16 15.1046 16 14V2C16 0.895431 15.1046 0 14 0H2ZM5 6.75V13H3V6.75H5ZM5 4.50008C5 5.05554 4.61409 5.5 3.99408 5.5H3.98249C3.38582 5.5 3 5.05554 3 4.50008C3 3.93213 3.39765 3.5 4.00584 3.5C4.61409 3.5 4.98845 3.93213 5 4.50008ZM8.5 13H6.5C6.5 13 6.53178 7.43224 6.50007 6.75H8.5V7.78371C8.5 7.78371 9 6.75 10.5 6.75C12 6.75 13 7.59782 13 9.83107V13H11V10.1103C11 10.1103 11 8.46616 9.7361 8.46616C8.4722 8.46616 8.5 9.93972 8.5 9.93972V13Z" fill="currentColor"></path>
        </svg>
      </a>
    </main>
  );
}
