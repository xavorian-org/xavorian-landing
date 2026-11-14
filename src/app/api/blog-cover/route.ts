import fs from 'fs';
import path from 'path';
import { NextRequest } from 'next/server';

export const runtime = 'nodejs';

let cachedWordmarkDataUri: string | null = null;

function getWordmarkDataUri(): string {
  if (cachedWordmarkDataUri !== null) return cachedWordmarkDataUri;
  try {
    const svgPath = path.join(process.cwd(), 'public', 'xavorian-wordmark.svg');
    const raw = fs.readFileSync(svgPath, 'utf8');
    const match = raw.match(/href="(data:image\/png;base64,[^"]+)"/i);
    cachedWordmarkDataUri = match?.[1] ?? '';
  } catch {
    cachedWordmarkDataUri = '';
  }
  return cachedWordmarkDataUri;
}

function escapeXml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function wrapTitle(rawTitle: string): {
  lines: string[];
  fontSize: number;
  lineHeight: number;
  startY: number;
} {
  const clean = rawTitle.replace(/\s+/g, ' ').trim() || 'Nigerian Real Estate Guide';
  let fontSize = 48;
  let maxChars = 30;
  let lineHeight = 60;

  if (clean.length > 95) {
    fontSize = 34;
    maxChars = 42;
    lineHeight = 46;
  } else if (clean.length > 62) {
    fontSize = 40;
    maxChars = 35;
    lineHeight = 52;
  }

  const words = clean.split(' ');
  const lines: string[] = [];
  let current = '';

  for (const word of words) {
    const next = current ? `${current} ${word}` : word;
    if (next.length > maxChars && current) {
      lines.push(current);
      current = word;
      if (lines.length === 4) {
        current = '';
        break;
      }
    } else {
      current = next;
    }
  }
  if (current && lines.length < 4) {
    lines.push(current);
  }
  if (lines.length === 4 && words.join(' ').length > lines.join(' ').length + 3) {
    lines[3] = `${lines[3].replace(/[.,;:\-–—]+$/, '').slice(0, maxChars - 1)}…`;
  }

  const totalHeight = lines.length * lineHeight;
  const startY = Math.round(335 - totalHeight / 2 + fontSize * 0.65);

  return { lines, fontSize, lineHeight, startY };
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const title = (searchParams.get('title') || 'Verified Nigerian Real Estate Guide').slice(0, 180);
  const category = (searchParams.get('category') || 'Editorial Guide').slice(0, 40).toUpperCase();

  const wordmarkUri = getWordmarkDataUri();
  const { lines, fontSize, lineHeight, startY } = wrapTitle(title);

  const badgeTextWidth = Math.max(110, category.length * 9 + 36);
  const badgeX = 1136 - badgeTextWidth;

  const titleLinesSvg = lines
    .map(
      (line, idx) =>
        `<text x="68" y="${startY + idx * lineHeight}" font-family="system-ui, -apple-system, 'Segoe UI', Inter, Helvetica, Arial, sans-serif" font-size="${fontSize}" font-weight="800" letter-spacing="-0.8" fill="#141414">${escapeXml(line)}</text>`,
    )
    .join('\n    ');

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675" width="1200" height="675" role="img" aria-label="${escapeXml(title)}">
  <defs>
    <linearGradient id="paperBg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#FCFBF7" />
      <stop offset="100%" stop-color="#F3F1E9" />
    </linearGradient>
    <linearGradient id="purpleRail" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#9C3495" />
      <stop offset="100%" stop-color="#7B2276" />
    </linearGradient>
  </defs>

  <!-- Letterhead ivory paper base -->
  <rect width="1200" height="675" fill="url(#paperBg)" />

  <!-- Large corner architectural house watermarks matching Xavorian letterhead -->
  <g fill="none" stroke="#E5E2D7" stroke-width="18" stroke-linecap="round" stroke-linejoin="round" opacity="0.72">
    <!-- Top-right watermark house -->
    <path d="M900 120 L1075 -20 L1240 120" />
    <rect x="945" y="108" width="250" height="190" rx="18" fill="#EBE8DE" stroke="none" opacity="0.65" />
    <!-- Bottom-left watermark house -->
    <path d="M18 590 L165 470 L312 590" />
    <rect x="52" y="575" width="226" height="145" rx="16" fill="#EBE8DE" stroke="none" opacity="0.55" />
  </g>

  <!-- Miniature residential homes skyline along lower-right background -->
  <g transform="translate(560, 415)" opacity="0.78">
    <!-- Horizon ground line -->
    <line x1="0" y1="162" x2="576" y2="162" stroke="#DCD8CA" stroke-width="2" stroke-linecap="round" />

    <!-- Mini home 1: Detached terrace -->
    <g transform="translate(18, 52)">
      <path d="M4 44 L48 6 L92 44 Z" fill="#E3DFD3" />
      <rect x="14" y="44" width="68" height="66" rx="3" fill="#EAE7DC" stroke="#DCD8CA" stroke-width="1.5" />
      <rect x="26" y="58" width="16" height="18" rx="2" fill="#FAF9F4" />
      <rect x="54" y="58" width="16" height="18" rx="2" fill="#FAF9F4" />
      <rect x="40" y="84" width="16" height="26" rx="2" fill="#D5D0C3" />
    </g>

    <!-- Mini home 2: Two-storey duplex -->
    <g transform="translate(132, 18)">
      <rect x="88" y="10" width="14" height="28" rx="2" fill="#DFDCD0" />
      <path d="M0 52 L64 0 L128 52 Z" fill="#DFDCD0" />
      <rect x="12" y="52" width="104" height="92" rx="4" fill="#E8E5DA" stroke="#D8D4C6" stroke-width="1.5" />
      <rect x="26" y="68" width="20" height="18" rx="2" fill="#FAF9F4" />
      <rect x="56" y="68" width="20" height="18" rx="2" fill="#FAF9F4" />
      <rect x="86" y="68" width="18" height="18" rx="2" fill="#FAF9F4" />
      <rect x="26" y="100" width="22" height="20" rx="2" fill="#FAF9F4" />
      <rect x="58" y="104" width="20" height="40" rx="2" fill="#D2CDC0" />
      <rect x="88" y="100" width="16" height="20" rx="2" fill="#FAF9F4" />
    </g>

    <!-- Mini home 3: Modern flat-roof bungalow -->
    <g transform="translate(284, 68)">
      <rect x="0" y="18" width="112" height="10" rx="3" fill="#DFDCD0" />
      <rect x="8" y="28" width="96" height="66" rx="3" fill="#EAE7DC" stroke="#DCD8CA" stroke-width="1.5" />
      <rect x="20" y="44" width="28" height="20" rx="2" fill="#FAF9F4" />
      <rect x="58" y="44" width="32" height="50" rx="2" fill="#D8D4C6" />
    </g>

    <!-- Mini home 4: Twin-gable villa -->
    <g transform="translate(418, 32)">
      <path d="M4 48 L56 6 L108 48 Z" fill="#E2DFD3" />
      <path d="M74 56 L112 24 L150 56 Z" fill="#DDD9CC" />
      <rect x="14" y="48" width="126" height="82" rx="4" fill="#E8E5DA" stroke="#D8D4C6" stroke-width="1.5" />
      <rect x="28" y="64" width="22" height="22" rx="2" fill="#FAF9F4" />
      <rect x="64" y="64" width="22" height="22" rx="2" fill="#FAF9F4" />
      <rect x="104" y="68" width="20" height="20" rx="2" fill="#FAF9F4" />
      <rect x="64" y="96" width="22" height="34" rx="2" fill="#D2CDC0" />
    </g>
  </g>

  <!-- Signature left purple letterhead rail -->
  <rect x="0" y="0" width="22" height="675" fill="url(#purpleRail)" />
  <rect x="22" y="0" width="2" height="675" fill="#7B2276" opacity="0.28" />

  <!-- Top-left Xavorian wordmark logo + RC Number block -->
  <g>
    ${
      wordmarkUri
        ? `<image href="${wordmarkUri}" x="68" y="44" width="222" height="39" />`
        : `<text x="68" y="76" font-family="system-ui, sans-serif" font-size="34" font-weight="900" fill="#9C3495">Xavorian</text>`
    }
    <text x="68" y="102" font-family="system-ui, -apple-system, 'Segoe UI', sans-serif" font-size="11" font-weight="700" letter-spacing="1.6" fill="#52525B">THE TRUST LAYER FOR REAL ESTATE</text>
    <rect x="68" y="114" width="176" height="1.5" fill="#9C3495" opacity="0.35" />
    <text x="68" y="136" font-family="system-ui, -apple-system, 'Segoe UI', sans-serif" font-size="13" font-weight="800" letter-spacing="1.5" fill="#27272A">RC-9912416</text>
  </g>

  <!-- Top-right Category Pill -->
  <g>
    <rect x="${badgeX}" y="48" width="${badgeTextWidth}" height="34" rx="17" fill="#F6ECF5" stroke="#DFC0DE" stroke-width="1.2" />
    <text x="${badgeX + badgeTextWidth / 2}" y="69" text-anchor="middle" font-family="system-ui, -apple-system, 'Segoe UI', sans-serif" font-size="11.5" font-weight="800" letter-spacing="1.4" fill="#7D2377">${escapeXml(category)}</text>
  </g>

  <!-- Main Blog Title -->
  <g>
    ${titleLinesSvg}
  </g>

  <!-- Bottom Letterhead Footer Strip -->
  <g>
    <line x1="68" y1="594" x2="1136" y2="594" stroke="#E4E1D6" stroke-width="1.5" />
    <text x="68" y="628" font-family="system-ui, -apple-system, 'Segoe UI', sans-serif" font-size="13" font-weight="600" fill="#52525B">marketplace.xavorian.com  ·  support@xavorian.com  ·  +234 805 637 3583</text>
    <text x="1136" y="628" text-anchor="end" font-family="system-ui, -apple-system, 'Segoe UI', sans-serif" font-size="12.5" font-weight="700" fill="#7D2377">Xavorian Property Desk  ·  RC-9912416</text>
  </g>
</svg>`;

  return new Response(svg, {
    status: 200,
    headers: {
      'Content-Type': 'image/svg+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400, stale-while-revalidate=604800',
    },
  });
}
