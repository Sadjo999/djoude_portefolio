"use client";

import React, { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Client-side validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      setStatus("error");
      setErrorMessage("Veuillez remplir tous les champs obligatoires.");
      return;
    }

    // Basic email check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus("error");
      setErrorMessage("Veuillez saisir une adresse email valide.");
      return;
    }

    setStatus("submitting");

    // Simulate submission (since it's a static demo for review)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch {
      setStatus("error");
      setErrorMessage("Une erreur est survenue lors de l'envoi du message. Veuillez réessayer.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {status === "success" && (
        <div className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm">
          <p className="font-semibold mb-1">Message envoyé avec succès !</p>
          <p className="font-light">Merci pour votre intérêt. Djoulde Balde vous recontactera dans les plus brefs délais.</p>
        </div>
      )}

      {status === "error" && (
        <div className="p-4 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-400 text-sm">
          <p className="font-semibold">Erreur</p>
          <p className="font-light">{errorMessage}</p>
        </div>
      )}

      <div>
        <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-text-secondary mb-2">
          Nom Complet *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          disabled={status === "submitting"}
          placeholder="Ex: Jean Dupont"
          className="w-full bg-navy-deep border border-navy-light focus:border-tech-cyan/60 rounded-lg px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-1 focus:ring-tech-cyan/40 transition-all"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-text-secondary mb-2">
          Adresse Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          disabled={status === "submitting"}
          placeholder="Ex: jean.dupont@email.com"
          className="w-full bg-navy-deep border border-navy-light focus:border-tech-cyan/60 rounded-lg px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-1 focus:ring-tech-cyan/40 transition-all"
        />
      </div>

      <div>
        <label htmlFor="subject" className="block text-xs font-semibold uppercase tracking-wider text-text-secondary mb-2">
          Sujet *
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          value={formData.subject}
          onChange={handleChange}
          disabled={status === "submitting"}
          placeholder="Ex: Opportunité d'entretien / Question"
          className="w-full bg-navy-deep border border-navy-light focus:border-tech-cyan/60 rounded-lg px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-1 focus:ring-tech-cyan/40 transition-all"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-text-secondary mb-2">
          Votre Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          disabled={status === "submitting"}
          placeholder="Écrivez votre message ici..."
          className="w-full bg-navy-deep border border-navy-light focus:border-tech-cyan/60 rounded-lg px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-1 focus:ring-tech-cyan/40 transition-all resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full bg-gradient-to-r from-tech-cyan to-tech-blue hover:from-tech-cyan hover:to-tech-cyan text-navy-deep font-semibold tracking-wide text-sm rounded-lg py-3 shadow-[0_0_12px_rgba(0,240,255,0.2)] hover:shadow-[0_0_18px_rgba(0,240,255,0.4)] hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer flex items-center justify-center gap-2"
      >
        {status === "submitting" ? (
          <>
            <svg className="animate-spin h-5 w-5 text-navy-deep" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Envoi en cours...
          </>
        ) : (
          <>
            Envoyer le message
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
            </svg>
          </>
        )}
      </button>
    </form>
  );
}
