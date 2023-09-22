import { useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";

const useInView = (refs) => {
  const { language } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const children = entry.target.children;
          Array.from(children).forEach((child) =>
            child.classList.add("visible")
          );
        }
      });
    });

    refs.forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, [language]);

  return null;
};

export default useInView;
