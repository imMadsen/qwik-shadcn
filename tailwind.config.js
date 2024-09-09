/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}', '../../packages/ui/src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        "background": "hsl(0, 0%, 100%)",
        "foreground": "hsl(240, 10%, 3.9%)",
        "muted": "hsl(240, 4.8%, 95.9%)",
        "muted-foreground": "hsl(240, 3.8%, 46.1%)",
        "popover": "hsl(0, 0%, 100%)",
        "popover-foreground": "hsl(240, 10%, 3.9%)",
        "card": "hsl(0, 0%, 100%)",
        "card-foreground": "hsl(240, 10%, 3.9%)",
        "border": "hsl(240, 5.9%, 90%)",
        "input": "hsl(240, 5.9%, 90%)",
        "primary": "hsl(240, 5.9%, 10%)",
        "primary-foreground": "hsl(0, 0%, 98%)",
        "secondary": "hsl(240, 4.8%, 95.9%)",
        "secondary-foreground": "hsl(240, 5.9%, 10%)",
        "accent": "hsl(240, 4.8%, 95.9%)",
        "accent-foreground": "hsl(240, 5.9%, 10%)",
        "destructive": "hsl(0, 84.2%, 60.2%)",
        "destructive-foreground": "hsl(0, 0%, 98%)",
        "ring": "hsl(240, 5%, 64.9%)",
      }
    },
  },
  plugins: [],
};