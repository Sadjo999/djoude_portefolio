"use client";

import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Présentation", href: "#presentation" },
    { name: "Parcours", href: "#parcours" },
    { name: "Compétences", href: "#competences" },
    { name: "Objectif DBA", href: "#objectif" },
    { name: "SUPINFO", href: "#supinfo" },
    { name: "Projets", href: "#projets" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy-deep/80 backdrop-blur-md border-b border-navy-light/60 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="font-display font-bold text-xl md:text-2xl text-text-primary tracking-wider group">
          DB<span className="text-tech-cyan group-hover:animate-pulse">.</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-text-secondary hover:text-tech-cyan transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="text-xs uppercase font-bold tracking-wider px-5 py-2.5 rounded-full border border-tech-cyan/40 text-tech-cyan hover:bg-tech-cyan/10 hover:border-tech-cyan transition-all"
          >
            Candidature SUPINFO
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex items-center justify-center text-text-secondary hover:text-tech-cyan transition-colors focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      <div
        className={`md:hidden fixed inset-x-0 top-[60px] bg-navy-deep/95 backdrop-blur-lg border-b border-navy-light/80 py-6 px-8 transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-4 invisible"
        }`}
      >
        <nav className="flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-base font-medium text-text-secondary hover:text-tech-cyan transition-colors border-b border-navy-light/30 pb-2"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="text-center uppercase font-bold tracking-wider text-xs py-3 rounded-lg bg-gradient-to-r from-tech-cyan/20 to-tech-blue/20 border border-tech-cyan/40 text-tech-cyan"
          >
            Candidature SUPINFO
          </a>
        </nav>
      </div>
    </header>
  );
}
