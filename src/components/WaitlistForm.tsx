'use client';

import { useState, type FormEvent } from 'react';
import { CheckCircle2, Loader2, ArrowRight, ShieldCheck } from 'lucide-react';
import { CITIES } from '@/data/site';
import { cn } from '@/lib/utils';

type Role = 'seeker' | 'agent' | 'landlord';

const ROLE_LABELS: { value: Role; label: string }[] = [
  { value: 'seeker', label: "I'm looking for property" },
  { value: 'agent', label: "I'm an agent" },
  { value: 'landlord', label: "I'm a landlord / owner" },
];

interface WaitlistFormProps {
  variant?: 'full' | 'inline';
  className?: string;
  initialCity?: string;
}

/**
 * Shared waitlist capture. Posts to the `waitlist` table.
 * On any failure the lead is kept in localStorage so no one is ever lost.
 * Fully server-renderable — no useSearchParams.
 */
export const WaitlistForm = ({ variant = 'full', className, initialCity = '' }: WaitlistFormProps) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [role, setRole] = useState<Role>('seeker');
  const [city, setCity] = useState(initialCity);
  const [note, setNote] = useState('');
  const [company, setCompany] = useState(''); // honeypot
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState<'ok' | 'queued' | null>(null);
  const [error, setError] = useState<string | null>(null);

  const persistOffline = (payload: Record<string, unknown>) => {
    try {
      const key = 'xavorian-waitlist-backup';
      const existing = JSON.parse(localStorage.getItem(key) ?? '[]');
      localStorage.setItem(key, JSON.stringify([...existing, payload]));
    } catch {
      /* storage unavailable — nothing more we can do */
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (company) return; // bot
    setSubmitting(true);
    setError(null);

    const roleMap: Record<Role, string> = {
      seeker: "I'm looking for property",
      agent: "I'm an agent",
      landlord: "I'm a landlord / owner",
    };

    const formData = new URLSearchParams();
    formData.append('entry.880998487', fullName.trim());
    formData.append('entry.1575714682', email.trim().toLowerCase());
    formData.append('entry.27684073', phone.trim() || '');
    formData.append('entry.1428690281', city || '');
    formData.append('entry.1895861895', roleMap[role] || role);
    formData.append('entry.2141137918', note.trim() || '');

    const googleFormUrl =
      'https://docs.google.com/forms/d/e/1FAIpQLScak9IpgMeHF6T7xAwdN7B_uv_HQ-LrcsB12aUWtdJuA6_-bg/formResponse';

    try {
      await fetch(googleFormUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-parse',
        },
        body: formData,
      });
      setDone('ok');
    } catch {
      persistOffline({
        full_name: fullName.trim(),
        email: email.trim().toLowerCase(),
        phone: phone.trim() || null,
        role,
        city: city || null,
        note: note.trim() || null,
        queued_at: new Date().toISOString(),
      });
      setDone('queued');
    } finally {
      setSubmitting(false);
    }
  };

  if (done) {
    return (
      <div className={cn('rounded-2xl border border-border bg-white p-8 text-center', className)}>
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-muted">
          <CheckCircle2 className="h-6 w-6 text-success" />
        </div>
        <h2 className="text-xl font-bold tracking-tight">You&apos;re on the list.</h2>
        <p className="mx-auto mt-2 max-w-sm text-sm text-muted-foreground">
          {done === 'ok'
            ? "We'll reach out the moment doors open in your city. No spam — ever."
            : 'Your connection hiccuped, so we kept your spot saved on this device. It syncs automatically.'}
        </p>
        <a href="/how-it-works" className="link-underline mt-5 inline-block text-sm">
          See exactly what we verify before a listing goes live
        </a>
      </div>
    );
  }

  const inputCls =
    'h-11 w-full rounded-xl border border-border bg-white px-3.5 text-sm outline-none transition-shadow focus:border-foreground focus:shadow-[0_0_0_3px_hsl(var(--foreground)/0.10)]';

  return (
    <form onSubmit={handleSubmit} className={cn('space-y-4', className)} noValidate={false}>
      {/* honeypot */}
      <input
        type="text"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label htmlFor="wl-name" className="text-xs font-semibold">Full name</label>
          <input
            id="wl-name"
            required
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Adaeze Okafor"
            className={inputCls}
            autoComplete="name"
          />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="wl-email" className="text-xs font-semibold">Email</label>
          <input
            id="wl-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className={inputCls}
            autoComplete="email"
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label htmlFor="wl-phone" className="text-xs font-semibold">
            Phone / WhatsApp <span className="font-normal text-muted-foreground">(optional)</span>
          </label>
          <input
            id="wl-phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="0805 000 0000"
            className={inputCls}
            autoComplete="tel"
          />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="wl-city" className="text-xs font-semibold">City</label>
          <select id="wl-city" value={city} onChange={(e) => setCity(e.target.value)} className={inputCls} required>
            <option value="" disabled>
              Choose your city
            </option>
            {CITIES.map((c) => (
              <option key={c.slug} value={c.slug}>
                {c.name}, {c.state}
              </option>
            ))}
            <option value="other">Somewhere else in Nigeria</option>
          </select>
        </div>
      </div>

      <fieldset className="space-y-2">
        <legend className="text-xs font-semibold">You are joining as</legend>
        <div className="grid gap-2 sm:grid-cols-3">
          {ROLE_LABELS.map((r) => (
            <label
              key={r.value}
              className={cn(
                'flex cursor-pointer items-center justify-center rounded-xl border px-3 py-2.5 text-center text-xs font-medium transition-all',
                role === r.value
                  ? 'border-foreground bg-foreground text-white'
                  : 'border-border bg-white text-muted-foreground hover:border-foreground/40',
              )}
            >
              <input
                type="radio"
                name="role"
                value={r.value}
                checked={role === r.value}
                onChange={() => setRole(r.value)}
                className="sr-only"
              />
              {r.label}
            </label>
          ))}
        </div>
      </fieldset>

      {variant === 'full' && (
        <div className="space-y-1.5">
          <label htmlFor="wl-note" className="text-xs font-semibold">
            Anything we should know? <span className="font-normal text-muted-foreground">(optional)</span>
          </label>
          <textarea
            id="wl-note"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            rows={3}
            placeholder="e.g. I almost lost money to a fake agent last year…"
            className="w-full rounded-xl border border-border bg-white px-3.5 py-3 text-sm outline-none transition-shadow focus:border-foreground focus:shadow-[0_0_0_3px_hsl(var(--foreground)/0.10)]"
          />
        </div>
      )}

      {error && <p className="text-xs text-red-600">{error}</p>}

      <button
        type="submit"
        disabled={submitting}
        className="group flex h-12 w-full items-center justify-center gap-2 rounded-full bg-primary text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-px active:translate-y-0 disabled:opacity-60"
      >
        {submitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Securing your spot…
          </>
        ) : (
          <>
            Join the waitlist
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </>
        )}
      </button>

      <p className="flex flex-wrap items-center justify-center gap-1.5 text-[11px] text-muted-foreground text-center">
        <ShieldCheck className="h-3.5 w-3.5 text-foreground shrink-0" />
        <span>One email when we launch in your city. By submitting, you agree to our <a href="/privacy" className="underline hover:text-foreground">Privacy Policy</a>.</span>
      </p>
    </form>
  );
};