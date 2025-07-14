import { cva } from 'class-variance-authority';

export const buttonStyles = cva(
  'px-4 py-2 rounded-lg transition-all duration-300 disabled:cursor-not-allowed h-10 disabled:opacity-50 disabled:hover:shadow-none disabled:grayscale flex justify-center items-center gap-3 hover:shadow-lg w-full cursor-pointer font-medium',
  {
    variants: {
      variant: {
        primary: 'bg-emerald-100 text-emerald-600 border border-emerald-300',
        secondary: 'bg-sky-100 text-sky-600 border border-sky-300',
        outline: 'text-sky-600 border border-sky-500',
        destructive: 'bg-red-500/70 text-white',
        icon: 'size-10 p-0 border border-slate-400 hover:bg-slate-100 text-slate-500 hover:shadow-none',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  },
);
