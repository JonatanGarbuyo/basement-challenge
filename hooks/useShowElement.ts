import {useRef, useState, useEffect} from "react";

export default function useShowElement() {
  const [hidden, setHidden] = useState(true);
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      const [el] = entries;

      if (el.isIntersecting && window.screen.width < 768) {
        setHidden(false);
      } else {
        setHidden(true);
      }
    };

    const observer = new IntersectionObserver(handleIntersection, {
      rootMargin: "-200px",
    });

    if (elementRef.current) observer.observe(elementRef.current);

    return () => observer.disconnect();
  }, []);

  return {hidden, setHidden, elementRef};
}
