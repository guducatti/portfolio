import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-gradient">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Gustavo Ducatti",
  jobTitle: "Data Scientist & Data Analyst",
  email: "mailto:gustavobmducatti@gmail.com",
  telephone: "+55-11-98203-8957",
  url: "/",
  sameAs: ["https://www.linkedin.com/in/gustavo-ducatti/"],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "University of São Paulo (USP)",
  },
  knowsAbout: [
    "Data Science", "Machine Learning", "Applied Mathematics",
    "Statistics", "Geospatial Analysis", "Business Intelligence",
  ],
};

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Gustavo Ducatti — Data Scientist & Data Analyst" },
      {
        name: "description",
        content:
          "Portfolio of Gustavo Ducatti — Data Scientist and Data Analyst building predictive models, ML solutions, and data-driven analytical platforms.",
      },
      { name: "author", content: "Gustavo Ducatti" },
      { name: "theme-color", content: "#0F172A" },
      { property: "og:title", content: "Gustavo Ducatti — Data Scientist & Data Analyst" },
      { property: "og:description", content: "Gustavo Ducatti's portfolio | Data science & Data analysis" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Gustavo Ducatti" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Gustavo Ducatti — Data Scientist & Data Analyst" },
      { name: "twitter:description", content: "Gustavo Ducatti's portfolio | Data science & Data analysis" },
      { name: "description", content: "Gustavo Ducatti's portfolio | Data science & Data analysis" },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/222fe1fb-7577-440e-ab43-d5789a0b30d1/id-preview-2e6c6c2b--f6457aa1-c65e-4183-a86c-59caa354d057.lovable.app-1782857756040.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/222fe1fb-7577-440e-ab43-d5789a0b30d1/id-preview-2e6c6c2b--f6457aa1-c65e-4183-a86c-59caa354d057.lovable.app-1782857756040.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&display=swap",
      },
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(personJsonLd) },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
