import { GraduationCap } from "lucide-react";

const timeline = [
  { title: "Data Analyst", desc: "Building data products, dashboards, and analytical workflows from raw to insight." },
  { title: "Reinsurance Analyst", desc: "Portfolio analytics and exposure modeling across global reinsurance treaties." },
  { title: "Fraud Analytics", desc: "Real-time fraud risk scoring during credit verification using ML pipelines." },
  { title: "Climate Risk Modeling", desc: "Geospatial pipelines for hurricane winds, flood exposure and rainfall interpolation." },
  { title: "Machine Learning Projects", desc: "Predictive models, calibration, backtesting and walk-forward validation." },
  { title: "Business Intelligence", desc: "Power BI / DAX dashboards consolidating insurance and operational KPIs." },
];

export function Education() {
  return (
    <section id="education" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="reveal max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--cyan)]">
            Background
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Education & <span className="text-gradient">experience.</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* Education card */}
          <div className="reveal">
            <div className="relative overflow-hidden rounded-3xl glass p-8 lift lift-hover">
              <div
                aria-hidden
                className="pointer-events-none absolute -top-20 -right-20 h-56 w-56 rounded-full opacity-30 blur-3xl"
                style={{ background: "var(--gradient-primary)" }}
              />
              <div className="relative">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white/5 ring-1 ring-white/10">
                  <GraduationCap className="h-6 w-6 text-[color:var(--cyan)]" />
                </span>
                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Bachelor's Degree
                </p>
                <h3 className="mt-2 font-display text-2xl font-bold leading-tight">
                  Applied and Computational Mathematics
                </h3>
                <p className="mt-2 text-sm text-[color:var(--cyan)]">
                  Emphasis in Economic Statistics
                </p>
                <div className="mt-5 space-y-1 text-sm text-muted-foreground">
                  <p>Institute of Mathematics and Statistics</p>
                  <p>University of São Paulo (USP)</p>
                </div>
                <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                  The program provided a strong mathematical foundation in Statistics, Linear
                  Algebra, Calculus, Optimization, Mathematical Modeling and Data Science.
                </p>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <ol className="relative space-y-6">
            <span
              aria-hidden
              className="absolute left-[15px] top-2 bottom-2 w-px bg-gradient-to-b from-[color:var(--cyan)]/60 via-white/10 to-transparent"
            />
            {timeline.map((t, i) => (
              <li
                key={t.title}
                className="reveal relative pl-12"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <span
                  className="absolute left-0 top-1.5 grid h-8 w-8 place-items-center rounded-full glass ring-1 ring-[color:var(--cyan)]/40"
                  aria-hidden
                >
                  <span className="h-2 w-2 rounded-full bg-[color:var(--cyan)] shadow-[0_0_12px_rgba(56,189,248,0.8)]" />
                </span>
                <div className="rounded-2xl glass p-5 lift lift-hover">
                  <h4 className="font-display text-base font-semibold">{t.title}</h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{t.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
