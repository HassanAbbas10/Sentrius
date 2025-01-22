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
				DEFAULT: '#0A84FF',    // Brighter blue for primary actions, better contrast
				dark: '#005AC2',       // Deeper blue for headers, more authoritative
				hover: '#339DFF',      // Lighter hover state for better feedback
			  },
			  accent: {
				DEFAULT: '#00F5B4',    // Cyber mint green for important highlights
				hover: '#00D6A1',      // Slightly darker hover state
			  },
			  background: {
				primary: '#0A1929',    // Rich dark blue-black for main background
				secondary: '#162231',  // Slightly lighter for cards/sections
				tertiary: '#1E2A35',  // For elevated components
			  },
			  text: {
				primary: '#F0F6FC',    // Crisp white with slight blue tint for main text
				secondary: '#7D8590',  // Muted blue-gray for secondary text
				accent: '#00F5B4',     // Matching accent for highlighted text
			  },
			  status: {
				error: '#FF453A',      // Bright red for critical alerts
				warning: '#FFD60A',    // High-visibility yellow for warnings
				success: '#30D158',    // Professional green for success states
				info: '#0A84FF',       // Matching blue for info messages
			  },
			  bordercol: {
				DEFAULT: '#30363D',    // Subtle borders
				highlight: '#1C5EF5',  // Interactive element borders
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