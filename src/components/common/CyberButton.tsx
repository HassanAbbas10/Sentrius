import React from 'react';

const CyberButton = ({ children, onClick }: { 
  children: React.ReactNode, 
  onClick?: () => void 
}) => {
  return (
    <button 
      onClick={onClick}
      className="relative group overflow-hidden border-2 border-bordercol-highlight text-text-primary 
        font-bold py-2 px-6 rounded-xl transition-all duration-300 
        hover:shadow-[0_0_15px_rgba(0,245,180,0.5)] 
        hover:border-text-accent 
        bg-background-secondary
        transform hover:-translate-y-1
        flex items-center justify-center"
    >
      <span 
        className="absolute inset-0 bg-text-accent opacity-0 
          group-hover:opacity-10 transition-opacity duration-300"
      />
      
      <span className="relative z-10 flex items-center">
        {children}
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="ml-2 h-5 w-5 text-accent-DEFAULT transition-transform group-hover:translate-x-1" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M13 7l5 5m0 0l-5 5m5-5H6"
          />
        </svg>
      </span>

      <span 
        className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r 
          from-transparent via-text-accent to-transparent 
          opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      />
    </button>
  );
};

export default CyberButton;