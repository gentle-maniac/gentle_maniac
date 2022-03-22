import { useEffect, useState } from "react";

/**
 * 처음 보여질 때만 작동이 된다.
 */
export const useObserver = (
  ref,
  option = { rootMargin: "0px", threshold: 0.4 }
) => {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    let target = ref.current;
    if (!target) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIntersecting(true);
      }
    }, option);

    observer.observe(target);
    return () => {
      observer.unobserve(target);
    };
  }, [ref, option]);

  return isIntersecting;
};
