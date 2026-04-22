"use client";
import { useEffect, useRef, useState } from "react";

interface BlurUpProps {
  children: React.ReactNode;
  delay?: number; // optional delay in ms
}

export default function BlurUp({ children, delay = 0 }: BlurUpProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out transform ${
        visible
          ? "opacity-100 translate-y-0 blur-0"
          : "opacity-0 translate-y-8 blur-md"
      }`}
    >
      {children}
    </div>
  );
}
