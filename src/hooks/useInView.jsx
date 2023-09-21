import React, { useEffect, useRef } from "react";
import { useLanguage } from "../context/LanguageContext";

const useInView = (refs) => {
  let remainingElements = useRef(refs.length);
  const { language } = useLanguage();

  useEffect(() => {
    remainingElements.current = refs.length;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const children = entry.target.children;
          Array.from(children).forEach((child) =>
            child.classList.add("visible")
          );
          remainingElements.current -= 1;
          if (remainingElements.current === 0) observer.disconnect();
        }
      });
    });

    refs.forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, [language]);

  return remainingElements.current;
};

export default useInView;
