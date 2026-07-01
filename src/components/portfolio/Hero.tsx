import { ArrowDown, Download, Sparkles } from "lucide-react";
import profile from "@/assets/profile.jpg";
import { ParticlesBackground } from "./ParticlesBackground";

export function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-screen items-center overflow-hidden pt-28"
    >
      {/* particle bg */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <ParticlesBackground className="h-full w-full" />
      </div>
      {/* gradient wash */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{ background: "var(--gradient-radial)" }}
      />
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-grid opacity-[0.35] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:px-10">
        <div className="reveal">
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-[color:var(--cyan)]" />
            Available for new opportunities
          </div>

          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            <span className="text-foreground">Gustavo</span>{" "}
            <span className="text-gradient">Ducatti</span>
          </h1>

          <p className="mt-5 font-display text-base font-medium text-[color:var(--cyan)] sm:text-lg">
            Data Scientist · Data Analyst · Applied Mathematics
          </p>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            I develop predictive models, machine learning solutions and data-driven
            analytical platforms that transform complex data into business decisions.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-all hover:scale-[1.03] hover:shadow-[var(--shadow-glow)]"
            >
              View Projects
              <ArrowDown className="h-4 w-4 -rotate-45 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm font-medium text-foreground backdrop-blur transition-all hover:border-[color:var(--cyan)]/50 hover:bg-white/5"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
          </div>

          <dl className="mt-14 grid max-w-md grid-cols-3 gap-6">
            {[
              { v: "6+", l: "Projects" },
              { v: "3+", l: "Years exp." },
              { v: "100%", l: "Responsive" },
            ].map((s) => (
              <div key={s.l}>
                <dt className="font-display text-3xl font-bold text-gradient-cyan">{s.v}</dt>
                <dd className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.l}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="reveal relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative aspect-square">
            <div className="absolute inset-0 -z-10 rounded-[2rem] bg-[var(--gradient-primary)] opacity-30 blur-3xl animate-pulse-glow" />
            <div className="absolute inset-0 rounded-[2rem] glass-strong p-2 animate-float">
              <div className="relative h-full w-full overflow-hidden rounded-[1.75rem]">
                <img
                  src={profile}
                  alt="Gustavo Ducatti"
                  width={1024}
                  height={1024}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
              </div>
            </div>

            {/* floating chips */}
            <div className="absolute -left-4 top-10 rounded-2xl glass px-4 py-3 text-xs font-medium animate-float [animation-delay:-2s]">
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Model</div>
              <div className="mt-0.5 font-display text-sm">XGBoost · 0.94 AUC</div>
            </div>
            <div className="absolute -right-4 bottom-12 rounded-2xl glass px-4 py-3 text-xs font-medium animate-float [animation-delay:-4s]">
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Stack</div>
              <div className="mt-0.5 font-display text-sm">Python · SQL · PowerBI</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
