import Link from 'next/link';
import { ArrowRight, BadgeCheck, BedDouble, Bath, FileText, MapPin, Ruler } from 'lucide-react';
import { MARKETPLACE_URL } from '@/data/site';
import type { BlogHome } from '@/data/blogHomes';

const formatNaira = (n: number) => `₦${n.toLocaleString('en-NG')}`;

const LISTING_LABEL: Record<string, string> = {
  sale: 'For sale',
  rent: 'For rent',
  'distress-sale': 'Distress sale',
  'short-let': 'Short let',
};

/** A live marketplace listing inside a blog post: photos, playable video, key facts and a link. */
export const HomeShowcase = ({ home }: { home: BlogHome }) => {
  const url = `${MARKETPLACE_URL}/property/${home.slug}`;
  const place = [home.city, home.state].filter(Boolean).join(', ');
  const [lead, ...rest] = home.images;
  const thumbs = rest.slice(0, 4);

  return (
    <figure className="not-prose my-10 overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
      {/* media */}
      {home.video ? (
        <video
          className="aspect-video w-full bg-black object-contain"
          src={home.video}
          poster={lead}
          controls
          playsInline
          preload="metadata"
          aria-label={`Video tour: ${home.title}`}
        />
      ) : lead ? (
        <a href={url} target="_blank" rel="noopener" className="block">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={lead} alt={`${home.title}, ${place}`} loading="lazy" className="aspect-video w-full object-cover" />
        </a>
      ) : null}

      {(home.video ? home.images.slice(0, 4) : thumbs).length > 0 && (
        <div className="grid grid-cols-4 gap-1 bg-border p-1">
          {(home.video ? home.images.slice(0, 4) : thumbs).map((src, i) => (
            <a key={src} href={url} target="_blank" rel="noopener" className="block overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt={`${home.title} photo ${i + 1}`}
                loading="lazy"
                className="aspect-square w-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </a>
          ))}
        </div>
      )}

      {/* facts */}
      <figcaption className="p-5 sm:p-6">
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold text-emerald-700">
            <BadgeCheck className="h-3.5 w-3.5" />
            Verified on Xavorian
          </span>
          <span className="rounded-full bg-muted px-2.5 py-1 text-[11px] font-semibold text-muted-foreground">
            {LISTING_LABEL[home.listingType] ?? 'For sale'} · {home.propertyType}
          </span>
        </div>

        <p className="mt-3 text-lg font-bold leading-snug tracking-tight text-foreground">{home.title}</p>
        <p className="mt-1 text-2xl font-extrabold tracking-tight text-foreground">{formatNaira(home.price)}</p>

        <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-[13px] text-muted-foreground">
          <li className="flex items-center gap-1.5">
            <MapPin className="h-4 w-4" />
            {home.address || place}
          </li>
          {home.bedrooms ? (
            <li className="flex items-center gap-1.5">
              <BedDouble className="h-4 w-4" />
              {home.bedrooms} bed{home.bedrooms === 1 ? '' : 's'}
            </li>
          ) : null}
          {home.bathrooms ? (
            <li className="flex items-center gap-1.5">
              <Bath className="h-4 w-4" />
              {home.bathrooms} bath{home.bathrooms === 1 ? '' : 's'}
            </li>
          ) : null}
          {home.landSize ? (
            <li className="flex items-center gap-1.5">
              <Ruler className="h-4 w-4" />
              {home.landSize} {home.landSizeUnit ?? ''}
            </li>
          ) : null}
          {home.titleType ? (
            <li className="flex items-center gap-1.5">
              <FileText className="h-4 w-4" />
              {home.titleType}
            </li>
          ) : null}
        </ul>

        <Link
          href={url}
          target="_blank"
          className="group mt-5 inline-flex h-11 items-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0"
        >
          View this property on Xavorian
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </figcaption>
    </figure>
  );
};
