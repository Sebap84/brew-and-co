"use client";

import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { Button } from "./Button";

interface FormState {
  name: string;
  phone: string;
  guests: string;
  date: string;
  time: string;
}

export function ReservationModal({ triggerSize = "lg" }: { triggerSize?: "sm" | "md" | "lg" }) {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<"form" | "success">("form");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    guests: "2",
    date: "",
    time: "10:00",
  });

  const firstInputRef = useRef<HTMLInputElement>(null);

  /* Lock body scroll when open */
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      firstInputRef.current?.focus();
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  /* Close on Escape */
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open]);

  function handleClose() {
    setOpen(false);
    setTimeout(() => {
      setStep("form");
      setError(null);
    }, 300);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/reservations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error ?? "Error al enviar la reserva. Inténtalo de nuevo.");
        return;
      }

      setStep("success");
    } catch {
      setError("No se pudo conectar con el servidor. Inténtalo de nuevo.");
    } finally {
      setLoading(false);
    }
  }

  const today = new Date().toISOString().split("T")[0];

  const timeSlots: string[] = [];
  for (let h = 9; h <= 21; h++) {
    timeSlots.push(`${String(h).padStart(2, "0")}:00`);
    if (h < 21) timeSlots.push(`${String(h).padStart(2, "0")}:30`);
  }

  function formatDate(dateStr: string): string {
    if (!dateStr) return "";
    const d = new Date(dateStr + "T12:00:00");
    return d.toLocaleDateString("es-CL", {
      weekday: "long",
      day: "numeric",
      month: "long",
    });
  }

  const modalContent = open ? (
        <div className="fixed inset-0 z-[300] flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-espresso/60 backdrop-blur-sm"
            onClick={handleClose}
            aria-hidden="true"
          />

          {/* Panel */}
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="reservation-title"
            className="relative bg-cream rounded-2xl shadow-warm-xl w-full max-w-md p-8"
          >
            {/* Close */}
            <button
              onClick={handleClose}
              aria-label="Cerrar"
              className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-stone hover:bg-espresso/8 hover:text-espresso transition-all duration-150"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M2 2l10 10M12 2L2 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </button>

            {step === "form" ? (
              <>
                <div className="mb-6">
                  <h2
                    id="reservation-title"
                    className="font-display text-2xl font-bold text-espresso"
                  >
                    Reserva tu mesa
                  </h2>
                  <p className="font-sans text-sm text-stone mt-1">
                    Te confirmamos por teléfono en menos de 24 h.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  {/* Name */}
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="res-name"
                      className="font-sans text-xs font-semibold text-mocha uppercase tracking-wide"
                    >
                      Nombre completo
                    </label>
                    <input
                      ref={firstInputRef}
                      id="res-name"
                      type="text"
                      required
                      minLength={2}
                      placeholder="Tu nombre"
                      value={form.name}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, name: e.target.value }))
                      }
                      className="h-11 px-4 rounded-xl border border-espresso/15 bg-linen font-sans text-sm text-espresso placeholder:text-stone focus:outline-none focus:ring-2 focus:ring-terracotta/40 focus:border-terracotta transition-all"
                    />
                  </div>

                  {/* Phone */}
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="res-phone"
                      className="font-sans text-xs font-semibold text-mocha uppercase tracking-wide"
                    >
                      Teléfono de contacto
                    </label>
                    <input
                      id="res-phone"
                      type="tel"
                      required
                      placeholder="+56 9 1234 5678"
                      value={form.phone}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, phone: e.target.value }))
                      }
                      className="h-11 px-4 rounded-xl border border-espresso/15 bg-linen font-sans text-sm text-espresso placeholder:text-stone focus:outline-none focus:ring-2 focus:ring-terracotta/40 focus:border-terracotta transition-all"
                    />
                  </div>

                  {/* Guests */}
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="res-guests"
                      className="font-sans text-xs font-semibold text-mocha uppercase tracking-wide"
                    >
                      Número de personas
                    </label>
                    <select
                      id="res-guests"
                      value={form.guests}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, guests: e.target.value }))
                      }
                      className="h-11 px-4 rounded-xl border border-espresso/15 bg-linen font-sans text-sm text-espresso focus:outline-none focus:ring-2 focus:ring-terracotta/40 focus:border-terracotta transition-all appearance-none cursor-pointer"
                    >
                      {["1", "2", "3", "4", "5", "6", "7", "8+"].map((n) => (
                        <option key={n} value={n}>
                          {n === "1"
                            ? "1 persona"
                            : n === "8+"
                            ? "8 o más personas"
                            : `${n} personas`}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Date + Time row */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="res-date"
                        className="font-sans text-xs font-semibold text-mocha uppercase tracking-wide"
                      >
                        Fecha
                      </label>
                      <input
                        id="res-date"
                        type="date"
                        required
                        min={today}
                        value={form.date}
                        onChange={(e) =>
                          setForm((f) => ({ ...f, date: e.target.value }))
                        }
                        className="h-11 px-3 rounded-xl border border-espresso/15 bg-linen font-sans text-sm text-espresso focus:outline-none focus:ring-2 focus:ring-terracotta/40 focus:border-terracotta transition-all"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="res-time"
                        className="font-sans text-xs font-semibold text-mocha uppercase tracking-wide"
                      >
                        Hora
                      </label>
                      <select
                        id="res-time"
                        value={form.time}
                        onChange={(e) =>
                          setForm((f) => ({ ...f, time: e.target.value }))
                        }
                        className="h-11 px-3 rounded-xl border border-espresso/15 bg-linen font-sans text-sm text-espresso focus:outline-none focus:ring-2 focus:ring-terracotta/40 focus:border-terracotta transition-all appearance-none cursor-pointer"
                      >
                        {timeSlots.map((t) => (
                          <option key={t} value={t}>
                            {t}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {error && (
                    <p className="font-sans text-sm text-terracotta bg-terracotta/8 border border-terracotta/20 rounded-xl px-4 py-3">
                      {error}
                    </p>
                  )}

                  <Button
                    type="submit"
                    variant="primary"
                    size="md"
                    className="mt-2 w-full justify-center"
                    disabled={loading}
                  >
                    {loading ? "Enviando…" : "Confirmar reserva"}
                  </Button>
                </form>
              </>
            ) : (
              /* Success state */
              <div className="flex flex-col items-center text-center gap-5 py-4">
                <div className="w-16 h-16 rounded-full bg-matcha/15 flex items-center justify-center text-3xl">
                  ✓
                </div>
                <div>
                  <h2 className="font-display text-2xl font-bold text-espresso">
                    ¡Reserva confirmada!
                  </h2>
                  <p className="font-sans text-sm text-stone mt-2 leading-relaxed">
                    Te esperamos el{" "}
                    <span className="text-espresso font-medium">
                      {formatDate(form.date)}
                    </span>{" "}
                    a las{" "}
                    <span className="text-espresso font-medium">{form.time}</span>.
                    <br />
                    Mesa para{" "}
                    <span className="text-espresso font-medium">
                      {form.guests}{" "}
                      {form.guests === "1" ? "persona" : "personas"}
                    </span>{" "}
                    a nombre de{" "}
                    <span className="text-espresso font-medium">{form.name}</span>.
                  </p>
                </div>
                <Button variant="outline" size="md" onClick={handleClose}>
                  Cerrar
                </Button>
              </div>
            )}
          </div>
        </div>
  ) : null;

  return (
    <>
      <Button variant="secondary" size={triggerSize} onClick={() => setOpen(true)}>
        Reservar mesa
      </Button>
      {typeof document !== "undefined" && createPortal(modalContent, document.body)}
    </>
  );
}
