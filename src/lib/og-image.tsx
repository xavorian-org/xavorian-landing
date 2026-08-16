import { ImageResponse } from 'next/og';
import {
  ARROW_SVG_DATA_URI,
  CHECK_SVG_DATA_URI,
  HOUSE_PNG_DATA_URI,
  SERIF_ITALIC_B64,
  SERIF_REGULAR_B64,
  WORDMARK_SVG_DATA_URI,
} from './og-assets';

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = 'image/png';
// NOTE: `runtime` can't live here — Next.js statically analyzes the export in
// the route file itself, so each image file declares `runtime = 'edge'` inline.

const PURPLE = '#7C3AED';
const CREAM = '#fcfcfa';
const INK = '#141418';
const MUTED = '#60606a';

/** base64 → ArrayBuffer (available in both edge and node runtimes). */
function b64ToArrayBuffer(b64: string): ArrayBuffer {
  const bin = atob(b64);
  const bytes = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
  return bytes.buffer;
}

/**
 * Renders the brand OG/Twitter card (1200x630) with `next/og`.
 * Fully self-contained — house illustration, wordmark and Instrument Serif
 * are base64-bundled, so no fs/network is needed and it can never 500.
 */
export function renderOgImage(): ImageResponse {
  const serif = { fontFamily: 'InstrumentSerif' };

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: CREAM,
          padding: '52px 64px',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={WORDMARK_SVG_DATA_URI} width={134} height={42} alt="" />
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              border: '1.5px solid rgba(124, 58, 237, 0.25)',
              borderRadius: 9999,
              padding: '10px 22px',
              backgroundColor: 'white',
            }}
          >
            <div style={{ width: 9, height: 9, borderRadius: 9999, backgroundColor: PURPLE, marginRight: 12 }} />
            <div style={{ fontSize: 17, letterSpacing: 3.5, color: MUTED, fontWeight: 600 }}>
              NIGERIA&apos;S TRUST LAYER FOR REAL ESTATE
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', maxWidth: 620 }}>
            <div style={{ ...serif, fontSize: 84, color: INK, lineHeight: 1.04 }}>House hunting</div>
            <div style={{ ...serif, fontSize: 84, color: INK, lineHeight: 1.04 }}>without the</div>
            <div style={{ ...serif, fontSize: 84, color: INK, lineHeight: 1.04, fontStyle: 'italic' }}>
              horror story.
            </div>
            <div style={{ marginTop: 28, fontSize: 29, color: MUTED, lineHeight: 1.4, maxWidth: 520 }}>
              Buy properties you can trust.
            </div>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={HOUSE_PNG_DATA_URI} width={520} height={293} alt="" />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: INK,
                color: 'white',
                borderRadius: 9999,
                padding: '14px 30px',
                fontSize: 24,
                fontWeight: 600,
              }}
            >
              Join the waitlist
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={ARROW_SVG_DATA_URI} width={22} height={22} alt="" style={{ marginLeft: 12 }} />
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={CHECK_SVG_DATA_URI} width={20} height={20} alt="" style={{ marginLeft: 24, marginRight: 10 }} />
            <div style={{ fontSize: 20, color: PURPLE }}>xavorianxyz</div>
          </div>
          <div style={{ fontSize: 20, color: '#9a9aa2' }}>xavorian.com</div>
        </div>
      </div>
    ),
    {
      ...OG_SIZE,
      fonts: [
        {
          name: 'InstrumentSerif',
          data: b64ToArrayBuffer(SERIF_REGULAR_B64),
          style: 'normal',
          weight: 400,
        },
        {
          name: 'InstrumentSerif',
          data: b64ToArrayBuffer(SERIF_ITALIC_B64),
          style: 'italic',
          weight: 400,
        },
      ],
    }
  );
}
