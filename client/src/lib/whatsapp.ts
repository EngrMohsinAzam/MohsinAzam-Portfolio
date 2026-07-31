/** Digits only, country code included (no +) */
export const WHATSAPP_PHONE = "923118363591";

export const WHATSAPP_DISPLAY = "+92 311 8363591";

/** Fallback / SEO href — WhatsApp redirects to app or web as available */
export const WHATSAPP_HREF = `https://wa.me/${WHATSAPP_PHONE}`;

const APP_URL = `whatsapp://send?phone=${WHATSAPP_PHONE}`;
const WEB_URL = `https://web.whatsapp.com/send?phone=${WHATSAPP_PHONE}`;
const MOBILE_URL = `https://wa.me/${WHATSAPP_PHONE}`;

function isMobileDevice(): boolean {
  if (typeof navigator === "undefined") return false;
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}

/**
 * Opens WhatsApp app when installed (desktop + mobile).
 * Falls back to WhatsApp Web if the app is not available.
 */
export function openWhatsApp(e?: { preventDefault: () => void }) {
  e?.preventDefault();

  // Mobile: wa.me opens the app if installed, otherwise WhatsApp Web / store flow
  if (isMobileDevice()) {
    window.open(MOBILE_URL, "_blank", "noopener,noreferrer");
    return;
  }

  // Desktop: try WhatsApp Desktop / app protocol first
  let appOpened = false;
  const markOpened = () => {
    appOpened = true;
  };

  window.addEventListener("blur", markOpened);
  document.addEventListener("visibilitychange", markOpened);

  const anchor = document.createElement("a");
  anchor.href = APP_URL;
  anchor.style.display = "none";
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();

  window.setTimeout(() => {
    window.removeEventListener("blur", markOpened);
    document.removeEventListener("visibilitychange", markOpened);

    // App did not take focus → open WhatsApp Web
    if (!appOpened && !document.hidden) {
      window.open(WEB_URL, "_blank", "noopener,noreferrer");
    }
  }, 1500);
}
