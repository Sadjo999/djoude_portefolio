import React from "react";

export interface ProjectData {
  title: string;
  category: "Travaux Académiques" | "Exercice de Programmation" | "Étude de Cas Universitaire" | "Recherche Personnelle";
  description: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  iconType: "database" | "code" | "math" | "network" | "add";
}

interface ProjectCardProps {
  project: ProjectData;
  isEmptyPlaceholder?: boolean;
}

export default function ProjectCard({ project, isEmptyPlaceholder = false }: ProjectCardProps) {
  const getIcon = (type: string) => {
    switch (type) {
      case "database":
        return (
          <svg className="w-8 h-8 text-tech-cyan" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125M3.75 10.125v3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125M3.75 13.875v3.75" />
          </svg>
        );
      case "code":
        return (
          <svg className="w-8 h-8 text-tech-cyan" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
          </svg>
        );
      case "math":
        return (
          <svg className="w-8 h-8 text-tech-cyan" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-3-9h.008v.008H12.75V9zm0 6h.008v.008H12.75V15zm0-3h.008v.008H12.75V12zm-3 0h.008v.008H9.75V12zm0 3h.008v.008H9.75V15zm0-6h.008v.008H9.75V9zm-3 0h.008v.008H6.75V9zm0 3h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zM3 3.75h18M3 20.25h18" />
          </svg>
        );
      case "network":
        return (
          <svg className="w-8 h-8 text-tech-cyan" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
          </svg>
        );
      case "add":
      default:
        return (
          <svg className="w-12 h-12 text-tech-cyan/40 group-hover:text-tech-cyan/80 transition-colors" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        );
    }
  };

  if (isEmptyPlaceholder) {
    return (
      <div className="glass-panel group relative rounded-xl p-8 flex flex-col justify-center items-center min-h-[320px] border border-dashed border-tech-cyan/20 hover:border-tech-cyan/60 transition-all text-center">
        <div className="p-4 rounded-full bg-navy-light/40 border border-navy-light group-hover:border-tech-cyan/30 transition-all mb-4">
          {getIcon("add")}
        </div>
        <h3 className="font-display font-semibold text-lg text-text-primary mb-2">
          Ajouter un nouveau projet
        </h3>
        <p className="text-text-secondary text-sm max-w-[240px]">
          Cet emplacement est prêt à accueillir vos futurs projets pratiques ou académiques.
        </p>
      </div>
    );
  }

  return (
    <div className="glass-panel rounded-xl p-6 flex flex-col justify-between h-full relative overflow-hidden group">
      {/* Background neon light grid overlay on hover */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-tech-cyan/10 to-tech-blue/10 rounded-bl-full blur-xl pointer-events-none group-hover:opacity-100 opacity-30 transition-opacity" />
      
      <div>
        {/* Header: Icon & Category Badge */}
        <div className="flex items-start justify-between mb-4">
          <div className="p-3 rounded-lg bg-navy-light/50 border border-navy-light group-hover:border-tech-cyan/25 transition-all">
            {getIcon(project.iconType)}
          </div>
          <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-navy-light text-tech-cyan border border-tech-cyan/20">
            {project.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-display font-semibold text-xl text-text-primary mb-2 group-hover:text-tech-cyan transition-colors">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-text-secondary text-sm leading-relaxed mb-6 font-light">
          {project.description}
        </p>
      </div>

      <div>
        {/* Technologies used */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.technologies.map((tech, idx) => (
            <span
              key={idx}
              className="text-[11px] font-mono px-2 py-0.5 rounded bg-navy-light/75 text-text-secondary border border-navy-light"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Actions / Links */}
        <div className="flex items-center justify-between border-t border-navy-light/40 pt-4 mt-auto">
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-text-secondary hover:text-tech-cyan transition-colors font-medium"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.197 22 16.44 22 12.017 22 6.484 17.522 2 12 2z" />
              </svg>
              Code Source
            </a>
          ) : (
            <span className="text-xs text-text-muted italic">Modèle académique</span>
          )}

          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-tech-cyan hover:underline font-semibold"
            >
              Consulter
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
