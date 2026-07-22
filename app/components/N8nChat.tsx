"use client";

import { useEffect } from "react";

const WEBHOOK_URL = "/api/chat";

const CHAT_CONFIG = {
  webhookUrl: WEBHOOK_URL,
  mode: "window",
  showWelcomeScreen: false,
  loadPreviousSession: false,
  initialMessages: [
    "¡Hola! 👋 Soy el asistente de Brew & Co.",
    "¿En qué puedo ayudarte hoy?",
  ],
  i18n: {
    en: {
      title: "Brew & Co",
      subtitle: "¿Tienes dudas? Estamos aquí para ayudarte.",
      footer: "",
      getStarted: "Nueva conversación",
      inputPlaceholder: "Escribe tu mensaje...",
    },
  },
};

// Injected AFTER the n8n CDN stylesheet so our variables win the cascade.
const BRAND_STYLES = `
  :root {
    --chat--color--primary:             #C84B2E;
    --chat--color--primary-shade-50:    #b0401f;
    --chat--color--primary--shade-100:  #A33B22;
    --chat--color--secondary:           #C84B2E;
    --chat--color-secondary-shade-50:   #A33B22;
    --chat--color-white:                #FFF8F0;
    --chat--color-light:                #F7EDE2;
    --chat--color-light-shade-50:       #EDD9C3;
    --chat--color-light-shade-100:      #D4BAA0;
    --chat--color-medium:               #A8917A;
    --chat--color-dark:                 #2B1A0E;
    --chat--color-typing:               #A8917A;

    --chat--border-radius:              0.75rem;
    --chat--window--width:              380px;
    --chat--window--height:             560px;
    --chat--window--border-radius:      1rem;
    --chat--message--border-radius:     0.75rem;

    --chat--font-family:                ui-sans-serif, system-ui, sans-serif;

    --chat--header--background:         #2B1A0E;
    --chat--header--color:              #FFF8F0;
    --chat--heading--font-size:         1.25rem;
    --chat--subtitle--font-size:        0.875rem;

    --chat--toggle--background:         #C84B2E;
    --chat--toggle--hover--background:  #A33B22;
    --chat--toggle--active--background: #A33B22;
    --chat--toggle--color:              #FFF8F0;
    --chat--toggle--size:               56px;
    --chat--toggle--border-radius:      50%;

    --chat--message--bot--background:   #FFF8F0;
    --chat--message--bot--color:        #2B1A0E;
    --chat--message--bot--border:       1px solid #EDD9C3;
    --chat--message--user--background:  #C84B2E;
    --chat--message--user--color:       #FFF8F0;

    --chat--body--background:           #F7EDE2;

    --chat--footer--background:         #FFF8F0;
    --chat--footer--color:              #2B1A0E;
    --chat--input--background:          #FFF8F0;
    --chat--input--text-color:          #2B1A0E;

    --chat--input--send--button--background:        #FFF8F0;
    --chat--input--send--button--color:             #C84B2E;
    --chat--input--send--button--background-hover:  #C84B2E;
    --chat--input--send--button--color-hover:       #FFF8F0;
  }

  /* Window shadow and border */
  .n8n-chat .chat-window {
    box-shadow: 0 8px 36px rgba(43, 26, 14, 0.18) !important;
    border: 1px solid #EDD9C3 !important;
  }

  /* Hide "Powered by n8n" footer branding */
  .n8n-chat .chat-footer [class*="powered"] {
    display: none !important;
  }
`;

export function N8nChat() {
  useEffect(() => {
    if (document.getElementById("n8n-chat-css")) return;

    // 1. n8n CDN stylesheet
    const link = document.createElement("link");
    link.id = "n8n-chat-css";
    link.rel = "stylesheet";
    link.href = "https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css";
    document.head.appendChild(link);

    // 2. Brand overrides — added AFTER so they win the cascade
    const style = document.createElement("style");
    style.id = "n8n-chat-brand";
    style.textContent = BRAND_STYLES;
    document.head.appendChild(style);

    // 3. ES module init script — bypasses Turbopack/Vue proxy issue
    const script = document.createElement("script");
    script.id = "n8n-chat-script";
    script.type = "module";
    script.textContent = `
      import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';
      createChat(${JSON.stringify(CHAT_CONFIG)});
    `;
    document.body.appendChild(script);
  }, []);

  return null;
}
