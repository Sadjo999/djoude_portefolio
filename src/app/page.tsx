import React from "react";
import SectionHeader from "@/components/SectionHeader";
import ProjectCard, { ProjectData } from "@/components/ProjectCard";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  // Generic but realistic projects matching L1 MIAGE level & DBA ambitions
  const academicProjects: ProjectData[] = [
    {
      title: "Modélisation de Base de Données Relationnelle",
      category: "Étude de Cas Universitaire",
      description: "Modélisation conceptuelle (MCD) et logique (MLD) pour un système d'information de gestion d'une bibliothèque. Rédaction de requêtes SQL complexes et implémentation pratique des contraintes d'intégrité.",
      technologies: ["Algèbre Relationnelle"],
      iconType: "database",
    },
    {
      title: "Développement d'Algorithmes en Python",
      category: "Exercice de Programmation",
      description: "Conception et implémentation d'algorithmes fondamentaux (recherche dichotomique, tris, structures de données linéaires comme les listes chaînées) dans le cadre du cours d'Algorithmique de MIAGE L1.",
      technologies: ["Python", "Algorithmique", "Logique de Programmation"],
      iconType: "code",
    },
    {
      title: "Analyse Statistique & Études de Données",
      category: "Travaux Académiques",
      description: "Traitement et analyse logique de jeux de données réels. Calcul de probabilités, moyennes pondérées, variances et représentation graphique des tendances pour la gestion en entreprise.",
      technologies: ["Statistiques", "Probabilités"],
      iconType: "math",
    },
  ];

  return (
    <div className="relative min-h-screen bg-navy-deep bg-grid-tech pt-20">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-0 left-1/4 w-[300px] md:w-[600px] h-[300px] md:h-[500px] bg-tech-cyan/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-[30%] right-1/4 w-[350px] md:w-[550px] h-[350px] md:h-[550px] bg-tech-blue/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-[250px] md:w-[450px] h-[250px] md:h-[450px] bg-tech-cyan/5 rounded-full blur-3xl pointer-events-none" />

      {/* =========================================================================
          1. HERO SECTION
          ========================================================================= */}
      <section className="relative min-h-[90vh] flex items-center px-6 md:px-12 py-16">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-tech-cyan/10 border border-tech-cyan/30 text-tech-cyan text-xs font-semibold tracking-wider uppercase animate-pulse-slow">
              <span className="w-2 h-2 rounded-full bg-tech-cyan shadow-[0_0_8px_#00f0ff]" />
              Candidature d'Admission B.Eng.1 / B.Eng.2
            </div>

            <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-text-primary tracking-tight leading-none">
              Djoulde Balde
            </h1>

            <p className="font-display text-xl md:text-2xl font-medium text-tech-cyan">
              Futurs Horizons Informatiques • Licence 1 MIAGE
            </p>

            <p className="text-text-secondary text-base md:text-lg leading-relaxed max-w-xl font-light">
              Jeune étudiante guinéenne passionnée par les nouvelles technologies.
              Actuellement en Licence 1 MIAGE, mon objectif est d'intégrer
              <strong className="text-text-primary font-semibold"> SUPINFO</strong> pour développer des compétences avancées
              en informatique et concrétiser mon ambition : devenir Administratrice de Bases de Données.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <a
                href="#supinfo"
                className="text-center bg-gradient-to-r from-tech-cyan to-tech-blue text-navy-deep font-semibold tracking-wide px-8 py-3.5 rounded-lg shadow-[0_0_15px_rgba(0,240,255,0.25)] hover:shadow-[0_0_25px_rgba(0,240,255,0.45)] hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer text-sm"
              >
                Pourquoi SUPINFO ?
              </a>
              <a
                href="#parcours"
                className="text-center bg-navy-light/40 hover:bg-navy-light text-text-primary border border-navy-light px-8 py-3.5 rounded-lg hover:border-tech-cyan/40 transition-all text-sm font-medium"
              >
                Découvrir mon parcours
              </a>
            </div>
          </div>

          {/* Cyber decoration display */}
          <div className="lg:col-span-5 hidden lg:flex justify-center items-center relative">
            <div className="w-[380px] h-[380px] rounded-2xl glass-panel relative border border-tech-cyan/20 flex flex-col justify-center items-center p-8 group">
              <div className="absolute inset-0 bg-grid-tech opacity-10 rounded-2xl" />

              {/* Inner glowing core */}
              <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-tech-cyan/20 to-tech-blue/20 flex items-center justify-center border border-tech-cyan/30 animate-pulse-slow mb-6">
                <svg className="w-12 h-12 text-tech-cyan" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125M3.75 10.125v3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125M3.75 13.875v3.75" />
                </svg>
              </div>

              <div className="text-center space-y-2 relative z-10">
                <div className="text-xs font-mono text-tech-cyan uppercase tracking-widest">Database System</div>
                <h3 className="font-display font-semibold text-text-primary text-xl">Future DBA Expert</h3>
                <p className="text-text-secondary text-xs max-w-xs font-light leading-relaxed">
                  Conception de schémas, optimisation de requêtes complexes SQL et gestion de l'intégrité systémique.
                </p>
              </div>

              {/* Decorative data blocks */}
              <div className="absolute top-6 left-6 p-2 rounded bg-navy-deep/80 border border-navy-light text-[10px] font-mono text-text-secondary">
                SELECT * FROM supinfo;
              </div>
              <div className="absolute bottom-6 right-6 p-2 rounded bg-navy-deep/80 border border-navy-light text-[10px] font-mono text-tech-cyan">
                DB_STATUS: CONNECTED
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. PRÉSENTATION SECTION
          ========================================================================= */}
      <section id="presentation" className="py-24 px-6 md:px-12 bg-navy-slate/30 border-y border-navy-light/40">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            title="Présentation"
            subtitle="Découvrez mon profil, mes origines et ma soif d'apprendre au service du numérique."
            icon={
              <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
              </svg>
            }
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Biography Card */}
            <div className="lg:col-span-7 glass-panel rounded-xl p-8 flex flex-col md:flex-row gap-8 items-center md:items-start justify-between">
              <div className="space-y-4 flex-1">
                <h3 className="font-display font-semibold text-2xl text-text-primary">
                  Une passionnée de technologies
                </h3>
                <p className="text-text-secondary text-sm md:text-base leading-relaxed font-light">
                  Je suis une jeune étudiante guinéenne habitée par le désir d'approfondir mes connaissances en sciences numériques.
                  L'informatique n'est pas seulement pour moi une filière d'études, c'est l'outil avec lequel je souhaite façonner des solutions fiables pour l'avenir.
                </p>
                <p className="text-text-secondary text-sm md:text-base leading-relaxed font-light">
                  Actuellement inscrite en Licence 1 MIAGE à l'Université Kofi Annan de Guinée (UKAG), je développe des compétences fondamentales
                  qui relient les techniques informatiques modernes à la gestion d'entreprise. Cela me donne une vision globale et pratique de l'usage des données.
                </p>
                <p className="text-text-secondary text-sm md:text-base leading-relaxed font-light">
                  Mon but ultime est d'intégrer SUPINFO pour y acquérir une expertise technique robuste, afin de pouvoir superviser
                  l'organisation, la sécurité et la haute disponibilité des données professionnelles.
                </p>
              </div>
              <div className="w-48 h-60 md:w-52 md:h-64 relative rounded-lg overflow-hidden border border-tech-cyan/20 flex-shrink-0 shadow-lg">
                <img
                  src="/djoulde_1.jpg"
                  alt="Djoulde Balde"
                  className="object-cover w-full h-full object-center"
                />
              </div>
            </div>

            {/* Quick Info Grid */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="glass-panel rounded-xl p-6 flex flex-col justify-center space-y-2">
                <span className="text-xs text-text-muted font-mono uppercase tracking-wider">Identité</span>
                <span className="font-display font-semibold text-lg text-text-primary">Djoulde Balde</span>
              </div>

              <div className="glass-panel rounded-xl p-6 flex flex-col justify-center space-y-2">
                <span className="text-xs text-text-muted font-mono uppercase tracking-wider">Date de naissance</span>
                <span className="font-display font-semibold text-lg text-text-primary">24 Septembre 2007</span>
              </div>

              <div className="glass-panel rounded-xl p-6 flex flex-col justify-center space-y-2">
                <span className="text-xs text-text-muted font-mono uppercase tracking-wider">Nationalité</span>
                <span className="font-display font-semibold text-lg text-text-primary">Guinéenne</span>
              </div>

              <div className="glass-panel rounded-xl p-6 flex flex-col justify-center space-y-2">
                <span className="text-xs text-text-muted font-mono uppercase tracking-wider">Résidence</span>
                <span className="font-display font-semibold text-lg text-text-primary">Labé, Guinée</span>
                <span className="text-xs text-text-secondary">(Hamdallaye, Conakry)</span>
              </div>

              <div className="glass-panel rounded-xl p-6 flex flex-col justify-center space-y-2 sm:col-span-2">
                <span className="text-xs text-text-muted font-mono uppercase tracking-wider">Coordonnées</span>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <span className="font-display font-semibold text-text-primary text-sm sm:text-base">
                    +224 621 791 863
                  </span>
                  <a
                    href="#contact"
                    className="text-xs font-semibold text-tech-cyan hover:underline inline-flex items-center gap-1"
                  >
                    Formulaire de contact
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. PARCOURS ACADÉMIQUE
          ========================================================================= */}
      <section id="parcours" className="py-24 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            title="Parcours Académique"
            subtitle="Une formation solide axée sur les sciences mathématiques et l'informatique appliquée."
            icon={
              <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
              </svg>
            }
          />

          {/* Vertical Timeline */}
          <div className="relative border-l border-navy-light/60 ml-4 md:ml-32 space-y-12">
            {/* Timeline Item 1: MIAGE */}
            <div className="relative pl-8 md:pl-12 group">
              {/* Point lumineux sur la timeline */}
              <div className="absolute -left-[7px] top-1.5 w-3.5 h-3.5 rounded-full bg-tech-cyan shadow-[0_0_10px_#00f0ff] transition-transform group-hover:scale-125 duration-300" />

              {/* Date à gauche en écran large */}
              <div className="hidden md:block absolute -left-32 top-0.5 text-right w-24">
                <span className="font-display font-bold text-lg text-tech-cyan">2025 - 2026</span>
              </div>

              {/* Contenu principal */}
              <div className="glass-panel rounded-xl p-6 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-navy-light/40 pb-3">
                  <div>
                    <span className="md:hidden text-xs font-bold text-tech-cyan block mb-1">2025 - 2026</span>
                    <h4 className="font-display font-semibold text-xl text-text-primary">
                      Licence 1 MIAGE
                    </h4>
                    <p className="text-text-secondary text-sm">
                      Méthodes Informatiques Appliquées à la Gestion des Entreprises
                    </p>
                  </div>
                  <span className="text-xs px-3 py-1 rounded bg-navy-light font-medium text-text-primary border border-navy-light/60 self-start sm:self-center">
                    En cours
                  </span>
                </div>

                <p className="text-text-secondary text-xs font-mono uppercase tracking-widest">
                  Université Kofi Annan de Guinée (UKAG)
                </p>

                <div className="space-y-2">
                  <p className="text-text-secondary text-sm font-medium">Compétences scientifiques & techniques acquises :</p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {["Algorithmique", "Informatique Générale", "Programmation", "Algèbre", "Statistiques", "Probabilités", "Analyse de Données"].map((comp, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 rounded-full bg-navy-light/50 border border-tech-cyan/15 text-text-secondary font-light"
                      >
                        {comp}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline Item 2: Baccalauréat */}
            <div className="relative pl-8 md:pl-12 group">
              <div className="absolute -left-[7px] top-1.5 w-3.5 h-3.5 rounded-full bg-tech-blue shadow-[0_0_10px_#3b82f6] transition-transform group-hover:scale-125 duration-300" />

              <div className="hidden md:block absolute -left-32 top-0.5 text-right w-24">
                <span className="font-display font-bold text-lg text-text-secondary">2022 - 2025</span>
              </div>

              <div className="glass-panel rounded-xl p-6 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-navy-light/40 pb-3">
                  <div>
                    <span className="md:hidden text-xs font-bold text-text-secondary block mb-1">2022 - 2025</span>
                    <h4 className="font-display font-semibold text-lg text-text-primary">
                      Baccalauréat Unique
                    </h4>
                    <p className="text-text-secondary text-sm">
                      Option : Sciences Mathématiques
                    </p>
                  </div>
                  <span className="text-xs px-3 py-1 rounded bg-navy-light/80 font-medium text-text-secondary self-start sm:self-center">
                    Diplômée
                  </span>
                </div>

                <p className="text-text-secondary text-xs font-mono uppercase tracking-widest">
                  Groupe Scolaire Yacine Diallo
                </p>
                <p className="text-text-secondary text-sm leading-relaxed font-light">
                  Solides bases académiques en algèbre, analyse logique, probabilités et raisonnement scientifique formel.
                </p>
              </div>
            </div>

            {/* Timeline Item 3: BEPC */}
            <div className="relative pl-8 md:pl-12 group">
              <div className="absolute -left-[7px] top-1.5 w-3.5 h-3.5 rounded-full bg-navy-light border border-text-muted transition-transform group-hover:scale-125 duration-300" />

              <div className="hidden md:block absolute -left-32 top-0.5 text-right w-24">
                <span className="font-display font-bold text-lg text-text-muted">2018 - 2022</span>
              </div>

              <div className="glass-panel rounded-xl p-6 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-navy-light/40 pb-3">
                  <div>
                    <span className="md:hidden text-xs font-bold text-text-muted block mb-1">2018 - 2022</span>
                    <h4 className="font-display font-semibold text-lg text-text-primary">
                      BEPC
                    </h4>
                    <p className="text-text-secondary text-sm">
                      Brevet d'Études du Premier Cycle
                    </p>
                  </div>
                  <span className="text-xs px-3 py-1 rounded bg-navy-light/80 font-medium text-text-muted self-start sm:self-center">
                    Diplômée
                  </span>
                </div>

                <p className="text-text-secondary text-xs font-mono uppercase tracking-widest">
                  Groupe Scolaire Yacine Diallo
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. COMPÉTENCES SECTION
          ========================================================================= */}
      <section id="competences" className="py-24 px-6 md:px-12 bg-navy-slate/30 border-y border-navy-light/40">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            title="Compétences & Langues"
            subtitle="Inventaire des savoir-faire académiques, techniques et des aptitudes linguistiques de la candidate."
            icon={
              <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0110 21a3.745 3.745 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.745 3.745 0 013.296-1.043A3.745 3.745 0 0114 3a3.745 3.745 0 013.296 1.043 3.745 3.745 0 011.043 3.296A3.745 3.745 0 0121 12z" />
              </svg>
            }
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Category 1: Académiques */}
            <div className="glass-panel rounded-xl p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded bg-tech-cyan/15 text-tech-cyan">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                  </svg>
                </div>
                <h3 className="font-display font-semibold text-lg text-text-primary">
                  Compétences Académiques
                </h3>
              </div>
              <ul className="space-y-2 text-sm text-text-secondary font-light">
                {["Mathématiques générales", "Algorithmique & structures", "Informatique générale", "Statistiques descriptives", "Probabilités", "Analyse logique"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-tech-cyan" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Category 2: Numériques */}
            <div className="glass-panel rounded-xl p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded bg-tech-cyan/15 text-tech-cyan">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                  </svg>
                </div>
                <h3 className="font-display font-semibold text-lg text-text-primary">
                  Compétences Numériques
                </h3>
              </div>
              <ul className="space-y-2 text-sm text-text-secondary font-light">
                {["Recherche sur Internet (veille)", "Bureautique avancée (Office)", "Communication numérique", "Utilisation d'outils informatiques"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-tech-cyan" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Category 3: Personnelles */}
            <div className="glass-panel rounded-xl p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded bg-tech-cyan/15 text-tech-cyan">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                  </svg>
                </div>
                <h3 className="font-display font-semibold text-lg text-text-primary">
                  Aptitudes Personnelles
                </h3>
              </div>
              <ul className="space-y-2 text-sm text-text-secondary font-light">
                {["Curiosité intellectuelle", "Esprit d'analyse et synthèse", "Aptitude pour le travail en équipe", "Adaptabilité & dynamisme", "Sens de l'organisation", "Aisance en communication"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-tech-cyan" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Langues */}
            <div className="glass-panel rounded-xl p-6 space-y-4">
              <h3 className="font-display font-semibold text-lg text-text-primary flex items-center gap-2">
                <svg className="w-5 h-5 text-tech-cyan" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21a.75.75 0 01-.75-.75V5.625L3.6 10.125a.75.75 0 11-.9-1.2l7.5-5.625a.75.75 0 01.9 0l7.5 5.625a.75.75 0 11-.9 1.2L14.25 5.625v14.625a.75.75 0 01-.75.75h-3z" />
                </svg>
                Langues maîtrisées
              </h3>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col p-3 rounded bg-navy-light/40 border border-navy-light">
                  <span className="text-xs text-text-secondary">Français</span>
                  <span className="text-sm font-semibold text-text-primary">Courant / Académique</span>
                </div>
                <div className="flex flex-col p-3 rounded bg-navy-light/40 border border-navy-light">
                  <span className="text-xs text-text-secondary">Anglais</span>
                  <span className="text-sm font-semibold text-text-primary">Niveau Scolaire</span>
                </div>
                <div className="flex flex-col p-3 rounded bg-navy-light/40 border border-navy-light">
                  <span className="text-xs text-text-secondary">Poular</span>
                  <span className="text-sm font-semibold text-text-primary">Langue maternelle</span>
                </div>
                <div className="flex flex-col p-3 rounded bg-navy-light/40 border border-navy-light">
                  <span className="text-xs text-text-secondary">Poular</span>
                  <span className="text-sm font-semibold text-text-primary">Usuel / Parlé</span>
                </div>
              </div>
            </div>

            {/* Centres d'intérêt */}
            <div className="glass-panel rounded-xl p-6 space-y-4">
              <h3 className="font-display font-semibold text-lg text-text-primary flex items-center gap-2">
                <svg className="w-5 h-5 text-tech-cyan" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Centres d'intérêt
              </h3>

              <div className="grid grid-cols-2 gap-3">
                {["Lecture (veille, essais)", "Voyage (ouverture)", "Vie associative (entraide)", "Navigation Web & Tech"].map((interest, i) => (
                  <div key={i} className="flex items-center gap-2 p-3.5 rounded bg-navy-light/40 border border-navy-light text-sm text-text-primary font-light">
                    <span className="w-1.5 h-1.5 rounded-full bg-tech-cyan" />
                    {interest}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. OBJECTIF PROFESSIONNEL
          ========================================================================= */}
      <section id="objectif" className="py-24 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-tech-cyan/5 blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center">
          <SectionHeader
            title="Objectif Professionnel"
            subtitle="Une ambition ciblée et structurée pour répondre aux défis de gestion des données modernes."
            icon={
              <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
              </svg>
            }
          />

          <div className="relative glass-panel rounded-2xl p-8 md:p-12 border border-tech-cyan/30 shadow-[0_0_20px_rgba(0,240,255,0.08)]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-6 py-1.5 rounded-full bg-gradient-to-r from-tech-cyan to-tech-blue border border-tech-cyan text-navy-deep font-semibold text-xs uppercase tracking-wider">
              Projet de Carrière
            </div>

            <div className="mt-4 space-y-6">
              <svg className="w-10 h-10 text-tech-cyan mx-auto animate-pulse-slow" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125M3.75 10.125v3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125M3.75 13.875v3.75" />
              </svg>

              <blockquote className="text-xl md:text-2xl font-light text-text-primary leading-relaxed italic px-4">
                "Mon objectif est de devenir <strong className="font-semibold text-tech-cyan">Administratrice de Bases de Données (DBA)</strong>.
                Je souhaite développer des compétences avancées dans la gestion, l'organisation, la sécurisation et l'exploitation des données afin de contribuer efficacement à la transformation numérique des entreprises et des institutions."
              </blockquote>

              <hr className="border-navy-light/60 max-w-xs mx-auto my-6" />

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left pt-2">
                <div className="space-y-1">
                  <h4 className="font-display font-semibold text-sm text-text-primary flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-tech-cyan" />
                    Haute Disponibilité
                  </h4>
                  <p className="text-xs text-text-secondary font-light">
                    Garantir l'accès permanent aux ressources et aux tables de stockage.
                  </p>
                </div>
                <div className="space-y-1">
                  <h4 className="font-display font-semibold text-sm text-text-primary flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-tech-cyan" />
                    Sécurisation Forte
                  </h4>
                  <p className="text-xs text-text-secondary font-light">
                    Protéger l'intégrité logique des données face aux menaces informatiques.
                  </p>
                </div>
                <div className="space-y-1">
                  <h4 className="font-display font-semibold text-sm text-text-primary flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-tech-cyan" />
                    Modélisation Saine
                  </h4>
                  <p className="text-xs text-text-secondary font-light">
                    Construire des architectures de données optimales, claires et scalables.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. WHY SUPINFO
          ========================================================================= */}
      <section id="supinfo" className="py-24 px-6 md:px-12 bg-navy-slate/30 border-y border-navy-light/40">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            title="Pourquoi SUPINFO ?"
            subtitle="L'adéquation parfaite entre mon projet d'avenir et la pédagogie d'une grande école."
            icon={
              <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0110 21a3.745 3.745 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.745 3.745 0 013.296-1.043A3.745 3.745 0 0114 3a3.745 3.745 0 013.296 1.043 3.745 3.745 0 011.043 3.296A3.745 3.745 0 0121 12z" />
              </svg>
            }
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Pillar 1 */}
            <div className="glass-panel rounded-xl p-6 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-tech-cyan/15 flex items-center justify-center text-tech-cyan font-bold text-lg mb-2">
                1
              </div>
              <h3 className="font-display font-semibold text-lg text-text-primary">
                Approche Professionnalisante
              </h3>
              <p className="text-text-secondary text-sm font-light leading-relaxed">
                Une formation pensée pour les exigences concrètes des entreprises, alliant cours théoriques rigoureux et immersion pratique.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="glass-panel rounded-xl p-6 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-tech-cyan/15 flex items-center justify-center text-tech-cyan font-bold text-lg mb-2">
                2
              </div>
              <h3 className="font-display font-semibold text-lg text-text-primary">
                Projets Pratiques
              </h3>
              <p className="text-text-secondary text-sm font-light leading-relaxed">
                Apprendre en faisant. La confrontation régulière à des problématiques et des défis informatiques réels forge l'esprit d'ingénieur.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="glass-panel rounded-xl p-6 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-tech-cyan/15 flex items-center justify-center text-tech-cyan font-bold text-lg mb-2">
                3
              </div>
              <h3 className="font-display font-semibold text-lg text-text-primary">
                Compétences Techniques
              </h3>
              <p className="text-text-secondary text-sm font-light leading-relaxed">
                Un cursus à la pointe de l'industrie permettant de maîtriser les outils, les langages et les technologies recherchés sur le marché.
              </p>
            </div>

            {/* Pillar 4 */}
            <div className="glass-panel rounded-xl p-6 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-tech-cyan/15 flex items-center justify-center text-tech-cyan font-bold text-lg mb-2">
                4
              </div>
              <h3 className="font-display font-semibold text-lg text-text-primary">
                Innovation Constante
              </h3>
              <p className="text-text-secondary text-sm font-light leading-relaxed">
                Un écosystème dynamique qui anticipe les évolutions technologiques, notamment l'essor du cloud, du Big Data et de la cybersécurité.
              </p>
            </div>

            {/* Pillar 5 */}
            <div className="glass-panel rounded-xl p-6 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-tech-cyan/15 flex items-center justify-center text-tech-cyan font-bold text-lg mb-2">
                5
              </div>
              <h3 className="font-display font-semibold text-lg text-text-primary">
                Ouverture Internationale
              </h3>
              <p className="text-text-secondary text-sm font-light leading-relaxed">
                La possibilité de s'ouvrir sur l'international, d'acquérir une adaptabilité globale et d'aborder des projets d'envergure multiculturelle.
              </p>
            </div>

            {/* Pillar 6 */}
            <div className="glass-panel rounded-xl p-6 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-tech-cyan/15 flex items-center justify-center text-tech-cyan font-bold text-lg mb-2">
                6
              </div>
              <h3 className="font-display font-semibold text-lg text-text-primary">
                Préparation Professionnelle
              </h3>
              <p className="text-text-secondary text-sm font-light leading-relaxed">
                Une transition douce et encadrée vers le premier emploi, soutenue par un réseau d'entreprises partenaires et de diplômés actifs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          7. PROJETS (GRID & GABARIT)
          ========================================================================= */}
      <section id="projets" className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            title="Projets & Travaux"
            subtitle="Modèles de projets académiques et personnels montrant la mise en œuvre pratique de mes connaissances."
            icon={
              <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18" />
              </svg>
            }
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Rendering Academic/Generic Projects */}
            {academicProjects.map((project, idx) => (
              <ProjectCard key={idx} project={project} />
            ))}

            {/* Empty card placeholder for the candidate to add projects later */}
            <ProjectCard
              project={{
                title: "",
                category: "Travaux Académiques",
                description: "",
                technologies: [],
                iconType: "add",
              }}
              isEmptyPlaceholder={true}
            />
          </div>
        </div>
      </section>

      {/* =========================================================================
          8. CONTACT SECTION
          ========================================================================= */}
      <section id="contact" className="py-24 px-6 md:px-12 bg-navy-slate/30 border-t border-navy-light/40 scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            title="Me Contacter"
            subtitle="Vous souhaitez en savoir plus sur mon profil ou échanger au sujet de ma candidature ? N'hésitez pas."
            icon={
              <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            }
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            {/* Contact Details Column */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
              <div className="space-y-6">
                <h3 className="font-display font-semibold text-2xl text-text-primary">
                  Coordonnées directes
                </h3>
                <p className="text-text-secondary text-sm md:text-base leading-relaxed font-light">
                  N'hésitez pas à me joindre directement pour toute information complémentaire relative à mon admission ou mon cursus.
                </p>

                <div className="space-y-4 pt-4">
                  {/* Phone */}
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-navy-light/60 border border-navy-light text-tech-cyan">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.824-1.802-5.181-4.158-6.982-6.982l1.293-.97c.361-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xs uppercase font-bold tracking-wider text-text-secondary">Téléphone</h4>
                      <a href="tel:+224621791863" className="font-display font-semibold text-text-primary hover:text-tech-cyan transition-colors">
                        +224 621 791 863
                      </a>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-navy-light/60 border border-navy-light text-tech-cyan">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xs uppercase font-bold tracking-wider text-text-secondary">Adresse</h4>
                      <p className="font-display font-semibold text-text-primary text-sm sm:text-base">
                        Hamdallaye, Conakry, Guinée
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative note */}
              <div className="p-4 rounded-lg bg-navy-light/20 border border-navy-light text-[11px] text-text-secondary leading-relaxed">
                Ce site a été conçu dans le cadre des démarches d'intégration pour le cycle ingénieur de SUPINFO. Les informations fournies sont certifiées sincères et authentiques par la candidate.
              </div>
            </div>

            {/* Form Column */}
            <div className="lg:col-span-7 glass-panel rounded-xl p-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
