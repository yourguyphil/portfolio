import Script from "next/script";

/**
 * Self-hosted Plausible analytics (privacy-friendly, no cookies).
 *
 * Only renders in production builds so local development isn't tracked.
 * Custom events use tagged-event classes such as `plausible-event-name=Resume+Download`
 * on elements (enable the matching events/features in the Plausible site settings).
 */
const SCRIPT_SRC =
  process.env.NEXT_PUBLIC_PLAUSIBLE_SRC ??
  "https://plausible.philipsnguyen.com/js/pa-5tVVzzij69u0pkCRn1c7q.js";

export default function Plausible() {
  if (process.env.NODE_ENV !== "production") return null;

  return (
    <>
      <Script async src={SCRIPT_SRC} strategy="afterInteractive" />
      <Script id="plausible-init" strategy="afterInteractive">
        {`window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};plausible.init()`}
      </Script>
    </>
  );
}
