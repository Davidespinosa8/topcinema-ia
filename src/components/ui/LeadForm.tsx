"use client";

import { useState } from "react";

const whatsappNumber = "5491164953107";

export function LeadForm() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [interest, setInterest] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const message = `Hola Elias, quiero información sobre la preventa del curso.

      Nombre: ${name}
      Contacto: ${contact}
      Quiero mejorar: ${interest || "No especificado"}`;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto mt-10 grid max-w-2xl gap-4 rounded-2xl border border-neutral-800 bg-[#111]/80 p-6 text-left backdrop-blur"
    >
      <div>
        <label className="mb-2 block text-sm font-medium text-neutral-300">
          Nombre
        </label>
        <input
          type="text"
          required
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Tu nombre"
          className="w-full rounded-xl border border-neutral-800 bg-[#0B0B0B] px-4 py-3 text-white outline-none transition placeholder:text-neutral-600 focus:border-[#38BDF8]"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-neutral-300">
          Email o WhatsApp
        </label>
        <input
          type="text"
          required
          value={contact}
          onChange={(event) => setContact(event.target.value)}
          placeholder="tu@email.com o WhatsApp"
          className="w-full rounded-xl border border-neutral-800 bg-[#0B0B0B] px-4 py-3 text-white outline-none transition placeholder:text-neutral-600 focus:border-[#38BDF8]"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-neutral-300">
          ¿Qué querés mejorar?
        </label>
        <textarea
          rows={4}
          value={interest}
          onChange={(event) => setInterest(event.target.value)}
          placeholder="Ej: quiero crear videos más profesionales para redes..."
          className="w-full resize-none rounded-xl border border-neutral-800 bg-[#0B0B0B] px-4 py-3 text-white outline-none transition placeholder:text-neutral-600 focus:border-[#38BDF8]"
        />
      </div>

      <button
        type="submit"
        className="rounded-xl bg-[#38BDF8] px-6 py-4 font-semibold text-white shadow-lg shadow-sky-500/20 transition hover:opacity-90"
      >
        Enviar por WhatsApp
      </button>
    </form>
  );
}