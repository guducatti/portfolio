import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const scrolled = h.scrollTop;
      const total = h.scrollHeight - h.clientHeight;
      setProgress(total > 0 ? (scrolled / total) * 100 : 0);
      setShow(scrolled > 600);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-[60] h-[2px] bg-transparent">
        <div
          className="h-full origin-left transition-[width] duration-150 ease-out"
          style={{
            width: `${progress}%`,
            background: "linear-gradient(90deg, #38bdf8, #818cf8)",
            boxShadow: "0 0 12px rgba(56,189,248,0.6)",
          }}
        />
      </div>
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className={`fixed bottom-6 right-6 z-50 grid h-11 w-11 place-items-center rounded-full glass-strong transition-all duration-300 ${
          show ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0 pointer-events-none"
        } hover:scale-110 hover:shadow-[var(--shadow-glow)]`}
      >
        <ArrowUp className="h-4 w-4 text-[color:var(--cyan)]" />
      </button>
    </>
  );
}
