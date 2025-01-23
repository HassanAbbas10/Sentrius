/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
			  blue: {
				DEFAULT: '#1A73E8',    // Bright, vibrant blue for primary actions
				dark: '#0D47A1',       // Deep, authoritative blue for headers and emphasis
				hover: '#4285F4',      // Lighter, softer blue for hover states
			  },
			  accent: {
				DEFAULT: '#00FFD1',    // Cyber neon teal for highlights and accents
				hover: '#00CCAA',      // Slightly darker teal for hover states
			  },
			  background: {
				primary: '#0A0F14',    // Rich, dark blue-black for main background
				secondary: '#1A1F26',  // Slightly lighter for cards and sections
				tertiary: '#242A33',   // Elevated components and containers
			  },
			  text: {
				primary: '#E0E7FF',    // Soft, cool white for main text
				secondary: '#8A93A6',  // Muted blue-gray for secondary text
				accent: '#00FFD1',     // Matching neon teal for highlighted text
			  },
			  status: {
				error: '#FF4D4D',      // Bright, alerting red for errors
				warning: '#FFC107',    // High-visibility amber for warnings
				success: '#00E676',    // Vibrant green for success states
				info: '#1A73E8',       // Matching blue for informational messages
			  },
			  bordercol: {
				DEFAULT: '#2E3744',    // Subtle, dark borders for separation
				highlight: '#1A73E8',  // Bright blue for interactive element borders
			  },

  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}