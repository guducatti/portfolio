export function About() {
  return (
    <section id="about" className="relative py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <div className="reveal">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--cyan)]">
            About
          </p>
          <h2 className="mt-4 max-w-3xl font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Math is a language, and I've always been{" "}
            <span className="text-gradient">captivated by the challenge of translating it.</span>
          </h2>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <div className="reveal space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            <p>
              From my earliest encounters with mathematics and statistics in school, I was
              naturally drawn to these subjects. While many people found them intimidating, I
              discovered excitement in solving complex problems and explaining them in a simple way.
            </p>
            <p>
              Today, I combine Applied Mathematics, Statistics and Data Science to build
              predictive models and analytical solutions that generate real business value.
            </p>
          </div>

          <div className="reveal grid grid-cols-2 gap-4">
            {[
              { t: "Applied Math", d: "USP — Institute of Mathematics & Statistics" },
              { t: "ML & Stats", d: "Predictive modeling, validation, calibration" },
              { t: "Geospatial", d: "NetCDF, raster, climate & flood modeling" },
              { t: "BI & ETL", d: "Power BI, DAX, SQL pipelines" },
            ].map((c) => (
              <div key={c.t} className="rounded-2xl glass lift lift-hover p-5">
                <p className="font-display text-sm font-semibold text-foreground">{c.t}</p>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
