import { Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 sm:flex-row lg:px-10">
        <div className="text-center sm:text-left">
          <p className="font-display text-sm font-medium text-foreground">
            Designed and Developed by Gustavo Ducatti
          </p>
          <p className="mt-1 text-xs text-muted-foreground">© 2026 All Rights Reserved</p>
        </div>
        <div className="flex items-center gap-2">
          <a
            href="https://www.linkedin.com/in/gustavo-ducatti/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-muted-foreground transition-colors hover:border-[color:var(--cyan)]/50 hover:text-foreground"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href="mailto:gustavobmducatti@gmail.com"
            aria-label="Email"
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-muted-foreground transition-colors hover:border-[color:var(--cyan)]/50 hover:text-foreground"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
