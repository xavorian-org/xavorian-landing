'use client';

import { useEffect } from 'react';
import { MARKETPLACE_URL } from '@/data/site';

const STORAGE_KEY = 'xavorian_landing_utm';
const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'] as const;

/**
 * Carries campaign attribution from the landing site to the marketplace.
 * utm_* params on the landing URL (kept for the tab session so they survive in-site navigation)
 * are appended to every marketplace link at the moment it is used; with no utm tags, an external
 * referrer is forwarded as x_ref. The marketplace stores it as first-touch attribution.
 * Renders nothing and never blocks navigation.
 */
export function MarketplaceUtm() {
  useEffect(() => {
    let params: Record<string, string> = {};
    try {
      const url = new URLSearchParams(window.location.search);
      UTM_KEYS.forEach((k) => {
        const v = url.get(k)?.trim();
        if (v) params[k] = v.slice(0, 120);
      });
      if (Object.keys(params).length) {
        sessionStorage.setItem(STORAGE_KEY, JSON.stringify(params));
      } else {
        params = JSON.parse(sessionStorage.getItem(STORAGE_KEY) || '{}') || {};
      }
      if (!Object.keys(params).length && document.referrer) {
        const host = new URL(document.referrer).hostname.replace(/^www\./, '');
        if (host && host !== 'xavorian.com' && !host.endsWith('.xavorian.com') && host !== window.location.hostname) {
          params = { x_ref: host.slice(0, 120) };
          sessionStorage.setItem(STORAGE_KEY, JSON.stringify(params));
        }
      }
    } catch {
      return;
    }
    if (!Object.keys(params).length) return;

    const tag = (event: Event) => {
      const anchor = (event.target as Element | null)?.closest?.('a[href]') as HTMLAnchorElement | null;
      if (!anchor || !anchor.href.startsWith(MARKETPLACE_URL)) return;
      try {
        const target = new URL(anchor.href);
        Object.entries(params).forEach(([k, v]) => {
          if (!target.searchParams.has(k)) target.searchParams.set(k, v);
        });
        anchor.href = target.toString();
      } catch {
        // leave the link untouched
      }
    };
    // pointerdown covers new-tab / middle clicks; click covers keyboard activation
    document.addEventListener('pointerdown', tag, true);
    document.addEventListener('click', tag, true);
    return () => {
      document.removeEventListener('pointerdown', tag, true);
      document.removeEventListener('click', tag, true);
    };
  }, []);

  return null;
}
