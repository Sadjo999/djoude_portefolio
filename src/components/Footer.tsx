import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-deep border-t border-navy-light/60 py-12 px-6 md:px-12 relative overflow-hidden">
      {/* Decorative background pulse */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[100px] bg-gradient-to-t from-tech-cyan/5 to-transparent blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
        {/* Left: Brand & Statement */}
        <div className="text-center md:text-left">
          <h3 className="font-display font-bold text-lg text-text-primary tracking-wider mb-2">
            Djoulde Balde<span className="text-tech-cyan">.</span>
          </h3>
          <p className="text-text-secondary text-xs max-w-sm leading-relaxed font-light">
            Candidate motivée et ambitieuse pour l'admission à SUPINFO. Objectif : devenir une experte en Administration de Bases de Données.
          </p>
        </div>

        {/* Center: Badge */}
        <div className="flex flex-col items-center">
          <div className="text-[10px] font-mono uppercase tracking-widest px-4 py-1.5 rounded-full bg-navy-light border border-tech-cyan/30 text-tech-cyan">
            Projet d'Admission SUPINFO
          </div>
          <span className="text-text-muted text-[10px] mt-2">B.Eng.1 / B.Eng.2 • Version Académique</span>
        </div>

        {/* Right: Copyright & Navigation */}
        <div className="text-center md:text-right text-xs text-text-secondary space-y-2">
          <div className="flex items-center justify-center md:justify-end gap-6 mb-2">
            <a href="#presentation" className="hover:text-tech-cyan transition-colors">Bio</a>
            <a href="#parcours" className="hover:text-tech-cyan transition-colors">Parcours</a>
            <a href="#competences" className="hover:text-tech-cyan transition-colors">Compétences</a>
            <a href="#projets" className="hover:text-tech-cyan transition-colors">Projets</a>
          </div>
          <p className="font-light">
            &copy; {currentYear} Djoulde Balde. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
