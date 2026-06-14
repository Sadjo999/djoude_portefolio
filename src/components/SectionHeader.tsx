import React from "react";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  id?: string;
}

export default function SectionHeader({ title, subtitle, icon, id }: SectionHeaderProps) {
  return (
    <div id={id} className="flex flex-col items-center text-center mb-12 scroll-mt-24">
      {icon && (
        <div className="mb-3 flex items-center justify-center text-tech-cyan text-3xl animate-float">
          {icon}
        </div>
      )}
      <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-text-primary relative inline-block">
        {title}
        <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-tech-cyan to-tech-blue rounded-full shadow-[0_0_8px_#00f0ff]" />
      </h2>
      {subtitle && (
        <p className="mt-4 max-w-xl text-text-secondary text-sm md:text-base font-light">
          {subtitle}
        </p>
      )}
    </div>
  );
}
