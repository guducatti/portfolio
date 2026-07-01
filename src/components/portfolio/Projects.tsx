import { ArrowUpRight } from "lucide-react";
import soy from "@/assets/project-soy.jpg";
import fraud from "@/assets/project-fraud.jpg";
import flood from "@/assets/project-flood.jpg";
import hurricane from "@/assets/project-hurricane.jpg";
import susep from "@/assets/project-susep.jpg";
import surf from "@/assets/project-surf.jpg";

interface Project {
  number: string;
  title: string;
  image: string;
  description: string[];
  learnings?: string[];
  tech: string[];
}

const projects: Project[] = [
  {
    number: "01",
    title: "Soy Predictive Model",
    image: soy,
    description: [
      "Comparison between quadratic regression models with and without Fourier transforms to improve soybean yield prediction.",
      "The work demonstrates how cyclic variables can significantly improve predictive performance when modeled appropriately.",
    ],
    learnings: ["Big Data", "Feature Engineering", "EDA", "Correlation Analysis", "Regression", "ANOVA", "Hypothesis Testing", "Monte Carlo", "Model Validation", "Sensitivity Analysis", "Performance Comparison"],
    tech: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib"],
  },
  {
    number: "02",
    title: "Fraud Risk Score",
    image: fraud,
    description: [
      "Development of a real-time machine learning model for fraud detection used during credit verification.",
      "The model predicts fraud probability and supports operational decision-making by prioritizing customer verification efforts.",
    ],
    learnings: ["Binary Classification", "Logistic Regression", "Decision Trees", "Feature Engineering", "Temporal Validation", "Backtesting", "ROC AUC", "Threshold Optimization", "Risk Calibration"],
    tech: ["SQL", "Python", "ML Pipelines"],
  },
  {
    number: "03",
    title: "Flood Impact Analysis",
    image: flood,
    description: [
      "Assessment of the impact of the 2024 floods in Rio Grande do Sul using rainfall interpolation, river proximity analysis and flood occurrence reports.",
      "Focus on supporting insurance exposure analysis.",
    ],
    tech: ["Python", "GIS", "Spatial Analysis", "Interpolation", "Remote Sensing", "Power BI"],
  },
  {
    number: "04",
    title: "Hurricanes in Santo Domingo",
    image: hurricane,
    description: [
      "Geospatial climate model using hurricane tracks since 1850 integrated with wind field datasets to estimate maximum sustained wind speed around Santo Domingo.",
      "Developed an automated Python pipeline for interpolation, buffering and event consolidation.",
    ],
    tech: ["Python", "NetCDF", "Raster Processing", "GIS", "Climate Data", "Spatial Analysis"],
  },
  {
    number: "05",
    title: "SUSEP Dashboard",
    image: susep,
    description: [
      "Interactive Power BI dashboard consolidating public insurance data into a single analytical environment.",
      "Users can dynamically filter companies, analyze historical trends and compare KPIs.",
    ],
    tech: ["Power BI", "SQL", "DAX", "Power Query", "Data Modeling", "ETL"],
  },
  {
    number: "06",
    title: "Surf Dashboard",
    image: surf,
    description: [
      "Independent analytical project developed to study Brazil's performance in professional surfing before and after Gabriel Medina.",
      "The dashboard explores historical WSL data through interactive visualizations and performance metrics.",
    ],
    tech: ["Power BI", "Python", "Data Visualization", "Sports Analytics"],
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="reveal max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--cyan)]">
            Selected Work
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Featured <span className="text-gradient">projects.</span>
          </h2>
          <p className="mt-5 text-muted-foreground">
            A mix of production models, geospatial pipelines and analytical platforms.
          </p>
        </div>

        <div className="mt-16 space-y-24">
          {projects.map((p, i) => {
            const reversed = i % 2 === 1;
            return (
              <article
                key={p.title}
                className="reveal grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16"
              >
                <div className={reversed ? "lg:order-2" : ""}>
                  <div className="group relative overflow-hidden rounded-3xl glass lift lift-hover">
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                      style={{ background: "linear-gradient(135deg, rgba(56,189,248,0.18), transparent 60%)" }}
                    />
                    <img
                      src={p.image}
                      alt={p.title}
                      width={1024}
                      height={1024}
                      loading="lazy"
                      className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                    <div className="absolute left-4 top-4 z-20 rounded-full glass px-3 py-1 font-display text-xs font-semibold text-[color:var(--cyan)]">
                      Project / {p.number}
                    </div>
                  </div>
                </div>

                <div className={reversed ? "lg:order-1" : ""}>
                  <h3 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
                    {p.title}
                  </h3>
                  <div className="mt-5 space-y-3 text-muted-foreground">
                    {p.description.map((d, idx) => <p key={idx}>{d}</p>)}
                  </div>

                  {p.learnings && (
                    <div className="mt-7">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                        Key Learnings
                      </p>
                      <ul className="mt-3 flex flex-wrap gap-2">
                        {p.learnings.map((l) => (
                          <li
                            key={l}
                            className="rounded-full border border-white/8 bg-white/[0.03] px-2.5 py-1 text-[11px] text-muted-foreground"
                          >
                            {l}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="mt-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      Technologies
                    </p>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {p.tech.map((t) => (
                        <li
                          key={t}
                          className="rounded-full bg-[color:var(--cyan)]/10 px-3 py-1 text-[11px] font-medium text-[color:var(--cyan)] ring-1 ring-[color:var(--cyan)]/20"
                        >
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    type="button"
                    className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-2.5 text-sm font-medium transition-all hover:border-[color:var(--cyan)]/50 hover:bg-white/5"
                  >
                    Read More
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
