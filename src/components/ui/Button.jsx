import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export default function Button({
  children,
  to,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  showArrow = false,
  className = '',
  type = 'button',
  disabled = false,
  ...props
}) {
  const baseStyles =
    'inline-flex items-center justify-center font-medium transition-all duration-300 rounded-lg group focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none cursor-pointer select-none';

  const variants = {
    primary:
      'bg-[#174B91] text-white hover:bg-[#103a73] shadow-sm hover:shadow-md border border-[#174B91]',
    secondary:
      'bg-[#E66B43] text-white hover:bg-[#cf5630] shadow-sm hover:shadow-md border border-[#E66B43]',
    accent:
      'bg-[#F2C94C] text-[#202B39] font-semibold hover:bg-[#e4bc3e] shadow-sm hover:shadow border border-[#e4bc3e]',
    outline:
      'bg-transparent text-[#202B39] border border-[#202B39]/25 hover:border-[#174B91] hover:text-[#174B91] hover:bg-white/60',
    outlineWhite:
      'bg-transparent text-white border border-white/40 hover:border-white hover:bg-white/10',
    white:
      'bg-white text-[#202B39] hover:bg-[#F7F5EF] shadow-sm hover:shadow border border-[#E5E1D6]',
    ghost:
      'bg-transparent text-[#174B91] hover:bg-[#174B91]/10 px-3'
  };

  const sizes = {
    sm: 'text-xs px-3.5 py-1.5 gap-1.5 tracking-wide',
    md: 'text-sm px-5 py-2.5 gap-2 tracking-normal',
    lg: 'text-base px-6 py-3.5 gap-2.5 tracking-normal'
  };

  const combinedStyles = `${baseStyles} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`;

  const content = (
    <>
      <span>{children}</span>
      {showArrow && (
        <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0" />
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={combinedStyles} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={combinedStyles} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedStyles}
      {...props}
    >
      {content}
    </button>
  );
}

