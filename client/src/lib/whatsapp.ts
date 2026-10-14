/** Digits only, country code included (no +). The first number is the primary contact. */
export const WHATSAPP_NUMBERS = [
  { phone: "966575207940", display: "+966 57 520 7940" },
  { phone: "966550333196", display: "+966 55 033 3196" },
] as const;

export const WHATSAPP_PHONE = WHATSAPP_NUMBERS[0].phone;

export const WHATSAPP_DISPLAY = WHATSAPP_NUMBERS[0].display;

/** Fallback / SEO href — WhatsApp redirects to app or web as available */
export const whatsAppHref = (phone: string) => `https://wa.me/${phone}`;

export const WHATSAPP_HREF = whatsAppHref(WHATSAPP_PHONE);

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
export function openWhatsApp(
  e?: { preventDefault: () => void },
  phone: string = WHATSAPP_PHONE
) {
  e?.preventDefault();

  // Mobile: wa.me opens the app if installed, otherwise WhatsApp Web / store flow
  if (isMobileDevice()) {
    window.open(whatsAppHref(phone), "_blank", "noopener,noreferrer");
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
  anchor.href = `whatsapp://send?phone=${phone}`;
  anchor.style.display = "none";
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();

  window.setTimeout(() => {
    window.removeEventListener("blur", markOpened);
    document.removeEventListener("visibilitychange", markOpened);

    // App did not take focus → open WhatsApp Web
    if (!appOpened && !document.hidden) {
      window.open(
        `https://web.whatsapp.com/send?phone=${phone}`,
        "_blank",
        "noopener,noreferrer"
      );
    }
  }, 1500);
}
