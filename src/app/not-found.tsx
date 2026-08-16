import Link from 'next/link';
import { ArrowRight, Home } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

export default function NotFound() {
  return (
    <div className="container mx-auto flex min-h-[70vh] flex-col items-center justify-center py-24 text-center">
      <Reveal>
        <span className="eyebrow">
          <span className="eyebrow-dot" />
          Page not found
        </span>
        <p className="mt-8 text-8xl font-extrabold leading-none tracking-tight sm:text-9xl">404</p>
        <h1 className="mt-6 text-xl font-bold tracking-tight sm:text-2xl">
          This page failed verification too.
        </h1>
        <p className="mx-auto mt-3 max-w-sm text-pretty text-sm leading-relaxed text-muted-foreground">
          The page you are looking for does not exist — or it never made it past the gates. Either
          way, there is nothing to see here.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex h-12 items-center gap-2 rounded-full border border-border bg-card px-7 text-sm font-semibold transition-all hover:-translate-y-0.5 hover:shadow-md active:translate-y-0"
          >
            <Home className="h-4 w-4" />
            Go home
          </Link>
          <Link
            href="/waitlist"
            className="group inline-flex h-12 items-center gap-2 rounded-full bg-primary px-7 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0"
          >
            Join the waitlist
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </Reveal>
    </div>
  );
}
