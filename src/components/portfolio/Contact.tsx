import { useState } from "react";
import { Linkedin, Mail, Phone, Send } from "lucide-react";

export function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return;
    // Open mailto fallback (no backend required)
    const body = `From: ${form.name} <${form.email}>\n\n${form.message}`;
    window.location.href = `mailto:gustavobmducatti@gmail.com?subject=${encodeURIComponent(
      "Portfolio contact from " + form.name
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <section id="contact" className="relative py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[70%] opacity-60"
        style={{ background: "var(--gradient-radial)" }}
      />
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="reveal max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--cyan)]">
            Contact
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Let's build something{" "}
            <span className="text-gradient">data-driven together.</span>
          </h2>
          <p className="mt-5 text-muted-foreground">
            Open to data science roles, consulting and applied research collaborations.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="reveal space-y-3">
            {[
              { Icon: Mail, label: "Email", value: "gustavobmducatti@gmail.com", href: "mailto:gustavobmducatti@gmail.com" },
              { Icon: Phone, label: "Phone", value: "+55 (11) 98203-8957", href: "tel:+5511982038957" },
              { Icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/gustavo-ducatti", href: "https://www.linkedin.com/in/gustavo-ducatti/" },
            ].map(({ Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="group flex items-center gap-4 rounded-2xl glass p-5 lift lift-hover"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10">
                  <Icon className="h-5 w-5 text-[color:var(--cyan)]" />
                </span>
                <div className="min-w-0">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">{label}</p>
                  <p className="mt-0.5 truncate font-display text-sm font-medium text-foreground">{value}</p>
                </div>
              </a>
            ))}
          </div>

          <form onSubmit={submit} className="reveal rounded-3xl glass p-6 sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-sm">
                <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Name</span>
                <input
                  type="text"
                  required
                  maxLength={100}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-[color:var(--cyan)]/50 focus:bg-white/[0.05]"
                  placeholder="Your name"
                />
              </label>
              <label className="block text-sm">
                <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Email</span>
                <input
                  type="email"
                  required
                  maxLength={255}
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-[color:var(--cyan)]/50 focus:bg-white/[0.05]"
                  placeholder="you@company.com"
                />
              </label>
            </div>
            <label className="mt-4 block text-sm">
              <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Message</span>
              <textarea
                required
                maxLength={1500}
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-[color:var(--cyan)]/50 focus:bg-white/[0.05]"
                placeholder="Tell me about the project, role or collaboration…"
              />
            </label>

            <div className="mt-6 flex items-center justify-between gap-4">
              <p className="text-xs text-muted-foreground">
                {sent ? "Thanks — your email client should be open." : "I usually reply within 24 hours."}
              </p>
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-semibold text-background transition-all hover:scale-[1.03] hover:shadow-[var(--shadow-glow)]"
              >
                Send message
                <Send className="h-4 w-4" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
