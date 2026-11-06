import Script from "next/script";

/**
 * Plausible analytics. Renders nothing unless NEXT_PUBLIC_PLAUSIBLE_DOMAIN is set,
 * so local dev and preview builds stay untracked.
 *
 * Custom events: add a class like `plausible-event-name=Resume+Download` to any
 * element (needs a script variant with "tagged-events", which is the default below).
 */
export default function Plausible() {
  const domain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
  if (!domain) return null;

  const src =
    process.env.NEXT_PUBLIC_PLAUSIBLE_SRC ??
    "https://plausible.io/js/script.outbound-links.tagged-events.js";

  return <Script defer data-domain={domain} src={src} strategy="afterInteractive" />;
}
