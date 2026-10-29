import React from 'react';

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left', // 'left' | 'center'
  theme = 'light', // 'light' | 'dark'
  className = '',
  eyebrowColor = 'cobalt' // 'cobalt' | 'terracotta' | 'yellow'
}) {
  const eyebrowColors = {
    cobalt: 'text-[#174B91] border-[#174B91]/30 bg-[#174B91]/10',
    terracotta: 'text-[#E66B43] border-[#E66B43]/30 bg-[#E66B43]/10',
    yellow: 'text-[#9c7811] border-[#F2C94C]/40 bg-[#F2C94C]/20'
  };

  const isDark = theme === 'dark';

  return (
    <div
      className={`max-w-3xl ${
        align === 'center' ? 'mx-auto text-center' : 'text-left'
      } ${className}`}
    >
      {eyebrow && (
        <div
          className={`inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full border text-xs font-semibold tracking-widest uppercase ${
            isDark
              ? 'text-[#F2C94C] border-[#F2C94C]/30 bg-[#F2C94C]/10'
              : eyebrowColors[eyebrowColor] || eyebrowColors.cobalt
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
          {eyebrow}
        </div>
      )}

      {title && (
        <h2
          className={`font-heading font-extrabold tracking-tight leading-[1.12] text-[clamp(2rem,4vw,3.25rem)] ${
            isDark ? 'text-white' : 'text-[#202B39]'
          }`}
        >
          {title}
        </h2>
      )}

      {description && (
        <p
          className={`mt-4 text-base md:text-lg leading-relaxed font-normal ${
            isDark ? 'text-[#E5E1D6]/80' : 'text-[#4B5868]'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

