import { useEffect, useState } from 'react';

/**
 * Scrollspy — returns the id of the section currently in the reading band.
 * Mirrors the original IntersectionObserver: a section is "active" while it
 * sits between 20% from the top and 70% from the bottom of the viewport.
 */
export default function useScrollSpy(ids) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: '-20% 0px -70% 0px', threshold: 0 }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });

    return () => io.disconnect();
  }, [ids]);

  return active;
}
