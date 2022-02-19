import {useRef, useState, useEffect} from "react";

export default function useShowElement() {
  const [hidden, setHidden] = useState(true);
  const elementRef = useRef();

  useEffect(() => {
    const handleIntersection = (entries) => {
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

    observer.observe(elementRef.current);

    return () => observer.disconnect();
  }, []);

  return {hidden, setHidden, elementRef};
}
