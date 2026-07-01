import { Brain, Code2, Database, LineChart, Map, Sigma } from "lucide-react";

const groups = [
  {
    icon: Code2,
    title: "Programming",
    items: ["Python", "SQL", "Power BI", "DAX", "Git"],
  },
  {
    icon: Brain,
    title: "Machine Learning",
    items: [
      "Logistic Regression", "Decision Trees", "Random Forest", "Gradient Boosting",
      "Feature Engineering", "Feature Selection", "Cross Validation", "Backtesting",
      "Walk Forward Validation", "Monte Carlo Simulation", "Model Calibration",
      "Model Evaluation",
    ],
  },
  {
    icon: LineChart,
    title: "Model Metrics",
    items: ["ROC AUC", "Precision", "Recall", "F1 Score", "RMSE", "MAE", "R²"],
  },
  {
    icon: Sigma,
    title: "Statistics",
    items: [
      "ANOVA", "Pearson Correlation", "Spearman Correlation",
      "Hypothesis Testing", "EDA", "Multicollinearity Analysis",
    ],
  },
  {
    icon: Database,
    title: "Data Engineering",
    items: [
      "ETL", "Data Cleaning", "Large Dataset Processing",
      "SQL Optimization", "Dashboard Development",
    ],
  },
  {
    icon: Map,
    title: "Geospatial Analysis",
    items: [
      "Climate Data Processing", "NetCDF", "Raster Data",
      "Spatial Interpolation", "Wind Modeling", "Flood Modeling", "Remote Sensing",
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[60%] opacity-50"
        style={{ background: "var(--gradient-radial)" }}
      />
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="reveal max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--cyan)]">
            Skills
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            A toolkit built for{" "}
            <span className="text-gradient">complex, real-world data.</span>
          </h2>
          <p className="mt-5 text-muted-foreground">
            From statistical foundations to production-grade ML pipelines and geospatial systems.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((g, idx) => {
            const Icon = g.icon;
            return (
              <div
                key={g.title}
                className="reveal group relative overflow-hidden rounded-3xl glass lift lift-hover p-6"
                style={{ transitionDelay: `${idx * 40}ms` }}
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                  style={{ background: "var(--gradient-primary)" }}
                />
                <div className="relative flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10">
                    <Icon className="h-5 w-5 text-[color:var(--cyan)]" />
                  </span>
                  <h3 className="font-display text-lg font-semibold">{g.title}</h3>
                </div>
                <ul className="relative mt-5 flex flex-wrap gap-2">
                  {g.items.map((it) => (
                    <li
                      key={it}
                      className="rounded-full border border-white/8 bg-white/[0.03] px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:border-[color:var(--cyan)]/40 hover:text-foreground"
                    >
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
