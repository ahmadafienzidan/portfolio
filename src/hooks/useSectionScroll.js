import { useCallback } from "react";

/**
 * useSectionScroll - custom hook for smooth scroll to section bassed on ID
 * with additional offset (e.g due to fixed navbar)
 *
 * @param {number} offset - offset in px (default: 0)
 * @returns {Function} scrollTo(id)(event)
 */
export const useSectionScroll = (offset = 0) => {
  const scrollTo = useCallback(
    (id) => (e) => {
      e?.preventDefault?.();
      const el = document.getElementById(id);
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    },
    [offset]
  );

  return scrollTo;
};
