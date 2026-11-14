'use client';

import { useEffect } from 'react';
import { MARKETPLACE_URL } from '@/data/site';

export const STORAGE_KEY = 'xavorian_landing_utm';
const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'oppref'] as const;

const AI_HOST_RE = /(chatgpt\.com|oaistatic\.com|openai\.com|perplexity\.ai|claude\.ai|anthropic\.com|gemini\.google\.com|bard\.google\.com|copilot\.microsoft\.com|you\.com|phind\.com|meta\.ai|grok\.com|poe\.com)/i;
const SEARCH_HOST_RE = /(^|\.)(google\.[a-z.]+|bing\.com|duckduckgo\.com|search\.yahoo\.com|yahoo\.com|ecosia\.org|yandex\.[a-z.]+|search\.brave\.com)$/i;

export function classifyAcquisitionChannel(params: Record<string, string>): string {
  const src = (params.utm_source || '').toLowerCase();
  const med = (params.utm_medium || '').toLowerCase();
  const ref = (params.x_ref || '').toLowerCase();

  if (AI_HOST_RE.test(src) || AI_HOST_RE.test(ref) || med === 'ai' || med === 'ai_referral' || med === 'llm') {
    return 'ai_referral';
  }
  if (SEARCH_HOST_RE.test(src) || SEARCH_HOST_RE.test(ref) || med === 'organic' || med === 'seo') {
    return 'organic_search';
  }
  if (src || med) {
    return 'paid_or_campaign';
  }
  if (ref) {
    return 'referral';
  }
  return 'direct';
}

export function getStoredLandingAttribution(): Record<string, string> {
  if (typeof window === 'undefined') return {};
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY) || localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    return JSON.parse(raw) || {};
  } catch {
    return {};
  }
}

/**
 * Carries campaign, organic search, and AI referral attribution from the landing site
 * (www.xavorian.com) to the marketplace (marketplace.xavorian.com) and inline lead forms.
 * Renders nothing and never blocks navigation.
 */
export function MarketplaceUtm() {
  useEffect(() => {
    let params: Record<string, string> = {};
    try {
      const existing = getStoredLandingAttribution();
      const url = new URLSearchParams(window.location.search);
      UTM_KEYS.forEach((k) => {
        const v = url.get(k)?.trim();
        if (v) params[k] = v.slice(0, 120);
      });

      if (!Object.keys(params).length) {
        params = { ...existing };
      }

      if (!params.x_ref && document.referrer) {
        const host = new URL(document.referrer).hostname.replace(/^www\./, '');
        if (host && host !== 'xavorian.com' && !host.endsWith('.xavorian.com') && host !== window.location.hostname) {
          params.x_ref = host.slice(0, 120);
        }
      }

      if (!params.x_lp && window.location.pathname) {
        params.x_lp = window.location.pathname.slice(0, 120);
      }

      const channel = classifyAcquisitionChannel(params);
      params.x_ch = channel;

      if (!params.utm_medium) {
        if (channel === 'ai_referral') params.utm_medium = 'ai_referral';
        else if (channel === 'organic_search') params.utm_medium = 'organic';
      }
      if (!params.utm_source && params.x_ref && (channel === 'ai_referral' || channel === 'organic_search')) {
        params.utm_source = params.x_ref;
      }

      const serialized = JSON.stringify(params);
      sessionStorage.setItem(STORAGE_KEY, serialized);
      localStorage.setItem(STORAGE_KEY, serialized);
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
          if (v && !target.searchParams.has(k)) target.searchParams.set(k, v);
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
