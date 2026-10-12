"use client";

import { useEffect } from "react";

/** A casual-copy deterrent, not access control. Keep fields and link sharing usable. */
export default function ContentProtection() {
  useEffect(() => {
    const protect = (event: Event) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      if (
        target.closest(
          'input, textarea, [contenteditable="true"], [data-allow-copy], a',
        )
      )
        return;
      if (target.closest("main, [data-protected]")) event.preventDefault();
    };
    const events = ["copy", "cut", "contextmenu", "dragstart"];
    events.forEach((name) => document.addEventListener(name, protect));
    return () =>
      events.forEach((name) => document.removeEventListener(name, protect));
  }, []);
  return null;
}
