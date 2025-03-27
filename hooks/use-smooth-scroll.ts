"use client";

import { useEffect, useCallback } from "react";

interface SmoothScrollOptions {
  offset?: number;
  duration?: number;
  easing?: (t: number) => number;
}

// Default easing function (easeInOutCubic)
const defaultEasing = (t: number): number => {
  return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
};

export function useSmoothScroll({
  offset = 80, // Default offset to account for fixed header
  duration = 800, // Default duration in ms
  easing = defaultEasing, // Default easing function
}: SmoothScrollOptions = {}) {
  // Custom scroll animation function
  const scrollToElement = useCallback(
    (targetId: string) => {
      const targetElement = document.getElementById(targetId);

      if (!targetElement) return;

      const targetPosition =
        targetElement.getBoundingClientRect().top + window.scrollY - offset;
      const startPosition = window.scrollY;
      const distance = targetPosition - startPosition;
      let startTime: number | null = null;

      // Animation function
      function animation(currentTime: number) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        const easedProgress = easing(progress);

        window.scrollTo(0, startPosition + distance * easedProgress);

        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        }
      }

      requestAnimationFrame(animation);
    },
    [offset, duration, easing]
  );

  // Handle click events for anchor links
  const handleLinkClick = useCallback(
    (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest("a");

      if (!link) return;

      const href = link.getAttribute("href");

      if (!href || !href.startsWith("#")) return;

      const targetId = href.substring(1);

      if (!targetId) return;

      e.preventDefault();
      scrollToElement(targetId);

      // Update URL without scrolling
      window.history.pushState({}, "", href);
    },
    [scrollToElement]
  );

  // Set up event listeners
  useEffect(() => {
    document.addEventListener("click", handleLinkClick);

    return () => {
      document.removeEventListener("click", handleLinkClick);
    };
  }, [handleLinkClick]);

  return { scrollToElement };
}
