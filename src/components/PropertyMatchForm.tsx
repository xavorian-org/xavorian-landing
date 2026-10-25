'use client';

import { useId, useMemo, useState, type FormEvent } from 'react';
import { ArrowRight, CheckCircle2, Loader2, AlertCircle, Lock } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  BUDGETS,
  CONSENT_TEXT,
  LISTING_CHOICES,
  NIGERIAN_STATES,
  PROPERTY_TYPE_CHOICES,
  stateLabel,
  type MatchListingType,
} from '@/data/propertyMatches';

interface PropertyMatchFormProps {
  /** Where the signup came from, stored with the consent record. */
  source?: string;
  /** `compact` drops the optional city field into a single column for narrow CTA slots. */
  variant?: 'full' | 'compact';
  className?: string;
}

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY as string;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/**
 * Opt-in capture for the property-matching email list. Writes only through the
 * `subscribe_marketing_lead` RPC, which records consent and never exposes the list.
 */
export const PropertyMatchForm = ({ source = 'landing', variant = 'full', className }: PropertyMatchFormProps) => {
  const uid = useId();
  const id = (k: string) => `${uid}-${k}`;

  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [listing, setListing] = useState<MatchListingType>('buy');
  const [propertyType, setPropertyType] = useState('any');
  const [budget, setBudget] = useState('any');
  const [consent, setConsent] = useState(false);
  const [website, setWebsite] = useState(''); // honeypot
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const budgetOptions = useMemo(() => (listing === 'any' ? [] : BUDGETS[listing]), [listing]);

  const onListingChange = (value: MatchListingType) => {
    setListing(value);
    setBudget('any');
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    if (website) return; // bot

    const cleanEmail = email.trim().toLowerCase();
    if (!EMAIL_RE.test(cleanEmail)) {
      setError('That email address does not look right. Check for typos and try again.');
      return;
    }
    if (!state) {
      setError('Choose the state you want property in, so we only send listings there.');
      return;
    }
    if (!consent) {
      setError('Tick the consent box so we are allowed to email you. You can unsubscribe anytime.');
      return;
    }

    const preset = budgetOptions.find((b) => b.value === budget);
    setSubmitting(true);
    try {
      const res = await fetch(`${SUPABASE_URL}/rest/v1/rpc/subscribe_marketing_lead`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          apikey: SUPABASE_KEY,
          Authorization: `Bearer ${SUPABASE_KEY}`,
        },
        body: JSON.stringify({
          p_email: cleanEmail,
          p_full_name: firstName.trim() || null,
          p_state: state,
          p_city: city.trim() || null,
          p_property_type: propertyType,
          p_listing_type: listing,
          p_budget_min: preset?.min ?? null,
          p_budget_max: preset?.max ?? null,
          p_consent: consent,
          p_source: source,
        }),
      });
      const data = (await res.json().catch(() => null)) as { success?: boolean; message?: string } | null;
      if (!res.ok || !data) {
        setError('We could not save your request just now. Please try again in a minute.');
        return;
      }
      if (!data.success) {
        setError(data.message || 'Something in the form needs a second look. Check it and try again.');
        return;
      }
      setDone(data.message || 'You are in. Matching properties will reach your inbox on Tuesdays and Thursdays.');
    } catch {
      setError('We could not reach Xavorian. Check your internet connection and try again.');
    } finally {
      setSubmitting(false);
    }
  };

  if (done) {
    return (
      <div
        role="status"
        className={cn('rounded-2xl border border-border bg-card p-6 text-center sm:p-8', className)}
      >
        <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full bg-muted">
          <CheckCircle2 className="size-6 text-success" aria-hidden="true" />
        </div>
        <p className="text-lg font-bold tracking-tight text-foreground">Request saved</p>
        <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">{done}</p>
        <p className="mx-auto mt-3 max-w-sm text-xs text-muted-foreground">
          Every email has an unsubscribe link at the bottom.
        </p>
      </div>
    );
  }

  const inputCls =
    'h-11 w-full rounded-xl border border-border bg-white px-3.5 text-sm text-foreground outline-none transition-shadow placeholder:text-muted-foreground/70 focus:border-foreground focus:shadow-[0_0_0_3px_hsl(var(--foreground)/0.10)]';
  const labelCls = 'text-xs font-semibold text-foreground';
  const optional = <span className="font-normal text-muted-foreground">(optional)</span>;
  const twoCol = variant === 'full' ? 'grid gap-4 sm:grid-cols-2' : 'grid gap-4';

  return (
    <form onSubmit={handleSubmit} noValidate className={cn('space-y-4', className)} aria-describedby={error ? id('error') : undefined}>
      {/* honeypot */}
      <div aria-hidden="true" className="hidden">
        <label htmlFor={id('website')}>Website</label>
        <input id={id('website')} tabIndex={-1} autoComplete="off" value={website} onChange={(e) => setWebsite(e.target.value)} />
      </div>

      <div className={twoCol}>
        <div className="space-y-1.5">
          <label htmlFor={id('email')} className={labelCls}>Email</label>
          <input
            id={id('email')}
            type="email"
            inputMode="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className={inputCls}
          />
        </div>
        <div className="space-y-1.5">
          <label htmlFor={id('name')} className={labelCls}>First name {optional}</label>
          <input
            id={id('name')}
            autoComplete="given-name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Adaeze"
            maxLength={60}
            className={inputCls}
          />
        </div>
      </div>

      <fieldset className="space-y-1.5">
        <legend className={labelCls}>Are you looking to buy or rent?</legend>
        <div className="grid grid-cols-3 gap-2">
          {LISTING_CHOICES.map((c) => (
            <label
              key={c.value}
              className={cn(
                'flex h-11 cursor-pointer items-center justify-center rounded-xl border text-sm font-semibold transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-foreground/30',
                listing === c.value
                  ? 'border-foreground bg-foreground text-background'
                  : 'border-border bg-white text-muted-foreground hover:border-foreground/40',
              )}
            >
              <input
                type="radio"
                name={id('listing')}
                value={c.value}
                checked={listing === c.value}
                onChange={() => onListingChange(c.value)}
                className="sr-only"
              />
              {c.label}
            </label>
          ))}
        </div>
      </fieldset>

      <div className={twoCol}>
        <div className="space-y-1.5">
          <label htmlFor={id('state')} className={labelCls}>State</label>
          <select id={id('state')} required value={state} onChange={(e) => setState(e.target.value)} className={inputCls}>
            <option value="" disabled>Choose a state</option>
            {NIGERIAN_STATES.map((s) => (
              <option key={s} value={s}>{stateLabel(s)}</option>
            ))}
          </select>
        </div>
        <div className="space-y-1.5">
          <label htmlFor={id('city')} className={labelCls}>City or area {optional}</label>
          <input
            id={id('city')}
            autoComplete="address-level2"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="e.g. Lekki, GRA, Wuse"
            maxLength={60}
            className={inputCls}
          />
        </div>
      </div>

      <div className={twoCol}>
        <div className="space-y-1.5">
          <label htmlFor={id('type')} className={labelCls}>Property type</label>
          <select id={id('type')} value={propertyType} onChange={(e) => setPropertyType(e.target.value)} className={inputCls}>
            {PROPERTY_TYPE_CHOICES.map((t) => (
              <option key={t.value} value={t.value}>{t.label}</option>
            ))}
          </select>
        </div>
        <div className="space-y-1.5">
          <label htmlFor={id('budget')} className={labelCls}>Budget</label>
          <select
            id={id('budget')}
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            disabled={listing === 'any'}
            aria-describedby={listing === 'any' ? id('budget-help') : undefined}
            className={cn(inputCls, 'disabled:cursor-not-allowed disabled:bg-muted')}
          >
            {listing === 'any' ? (
              <option value="any">Any budget</option>
            ) : (
              budgetOptions.map((b) => (
                <option key={b.value} value={b.value}>{b.label}</option>
              ))
            )}
          </select>
          {listing === 'any' && (
            <p id={id('budget-help')} className="text-[11px] text-muted-foreground">
              Pick Buy or Rent to set a budget.
            </p>
          )}
        </div>
      </div>

      <label htmlFor={id('consent')} className="flex cursor-pointer items-start gap-3 rounded-xl border border-border bg-muted/40 p-3.5">
        <input
          id={id('consent')}
          type="checkbox"
          required
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-0.5 size-4 shrink-0 cursor-pointer accent-[hsl(var(--foreground))]"
        />
        <span className="text-[13px] leading-relaxed text-foreground">{CONSENT_TEXT}</span>
      </label>

      {error && (
        <p id={id('error')} role="alert" className="flex items-start gap-2 text-xs leading-relaxed text-red-600">
          <AlertCircle className="mt-px size-3.5 shrink-0" aria-hidden="true" />
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="pressable group flex h-12 w-full items-center justify-center gap-2 rounded-full bg-primary text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-px active:translate-y-0 disabled:opacity-60"
      >
        {submitting ? (
          <>
            <Loader2 className="size-4 animate-spin" aria-hidden="true" /> Saving your request
          </>
        ) : (
          <>
            Send me matching properties
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </>
        )}
      </button>

      <p className="flex items-start justify-center gap-1.5 text-center text-[11px] leading-relaxed text-muted-foreground">
        <Lock className="mt-px size-3 shrink-0" aria-hidden="true" />
        <span>
          Two emails a week at most, one property each. We never share your email. See our{' '}
          <a href="/privacy" className="underline hover:text-foreground">Privacy Policy</a>.
        </span>
      </p>
    </form>
  );
};
