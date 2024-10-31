import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import type { SectionName } from "./types";

export function useSectionInView(sectionName: SectionName, threshold = 0.75) {
  const { ref, inView } = useInView({
    threshold,
  });
  const { activeSection, setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    // Only set active section if it's not null (not on initial load) and the section is in view
    if (inView && Date.now() - timeOfLastClick > 1000 && activeSection !== null) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName, activeSection]);

  return {
    ref,
  };
}