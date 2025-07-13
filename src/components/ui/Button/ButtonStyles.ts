import { cva } from 'class-variance-authority';

export const buttonStyles = cva(
  'px-4 py-2 rounded-lg text-sm focus:ring-1 focus:ring-offset-1 transition-all duration-200 disabled:cursor-not-allowed disabled:focus:ring-transparent min-h-10 disabled:bg-gray-200',
  {
    variants: {
      variant: {
        primary: 'bg-luc-purple text-white hover:bg-luc-purple-700 focus:ring-luc-purple-300',
        secondary: 'bg-luc-blue-700 text-white hover:bg-luc-blue-800 focus:ring-luc-blue-300',
        ghost:
          'bg-transparent focus:ring-offset-0 focus:ring-0 focus-visible:ring-offset-0 focus-visible::ring-0 focus:outline-offset-0',
        outline: 'grid place-content-center p-0',
        dark: 'bg-slate-700 text-slate-300 hover:bg-slate-600 focus:ring-offset-0 focus:ring-0',
        icon: 'p-0 min-h-0 rounded-full focus:ring-offset-0 focus:ring-0 grid place-content-center',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  },
);
