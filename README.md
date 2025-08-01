# StockPilot Landing Page

A modern, responsive landing page for the StockPilot inventory management system built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern, responsive design
- 🌙 Dark/Light theme support
- 📱 Mobile-friendly interface
- ⚡ Fast performance with Next.js
- 🎯 SEO optimized
- 🔧 TypeScript for type safety

## Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI + shadcn/ui
- **Icons**: Lucide React
- **Theme**: next-themes

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
2. Navigate to the project directory:
   ```bash
   cd LandingPage
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
LandingPage/
├── app/                 # Next.js app directory
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/          # React components
│   ├── ui/            # shadcn/ui components
│   └── *.tsx          # Custom components
├── lib/                # Utility functions
├── public/             # Static assets
└── styles/             # Additional styles
```

## Customization

The landing page is fully customizable. You can modify:

- Colors and themes in `tailwind.config.ts`
- Components in the `components/` directory
- Content in `app/page.tsx`
- Global styles in `app/globals.css`

## Deployment

The project can be deployed to Vercel, Netlify, or any other hosting platform that supports Next.js.

## License

MIT License
