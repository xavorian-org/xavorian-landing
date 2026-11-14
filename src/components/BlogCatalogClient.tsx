'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  BookOpen,
  Clock,
  Compass,
  Filter,
  Layers,
  Search,
  Sparkles,
  X,
} from 'lucide-react';

export interface BlogCardItem {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  formattedDate: string;
  readingTime: string;
  category: string;
  cover?: string;
  isIllustration?: boolean;
  authorName: string;
}

interface BlogCatalogClientProps {
  posts: BlogCardItem[];
  categories: { name: string; count: number }[];
}

export function BlogCatalogClient({ posts, categories }: BlogCatalogClientProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [visibleCount, setVisibleCount] = useState<number>(24);

  const filteredPosts = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return posts.filter((post) => {
      const matchesCat = selectedCategory === 'All' || post.category === selectedCategory;
      if (!matchesCat) return false;
      if (!q) return true;
      return (
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.category.toLowerCase().includes(q)
      );
    });
  }, [posts, selectedCategory, searchQuery]);

  const displayedPosts = filteredPosts.slice(0, visibleCount);
  const hasMore = visibleCount < filteredPosts.length;

  return (
    <section aria-label="Browse all blog articles" className="mt-10 sm:mt-14">
      {/* Full-width Filter & Search Control Bar */}
      <div className="rounded-2xl border border-border bg-card p-4 shadow-sm sm:p-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <Layers className="h-4 w-4" aria-hidden="true" />
            </span>
            <div>
              <h2 className="text-base font-extrabold tracking-tight text-foreground sm:text-lg">
                Explore All Nigerian Real Estate Articles
              </h2>
              <p className="text-xs text-muted-foreground">
                Showing {filteredPosts.length} of {posts.length} published guides, listing spotlights, and market reports
              </p>
            </div>
          </div>

          {/* Search input */}
          <div className="relative w-full lg:max-w-md">
            <Search
              className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
              aria-hidden="true"
            />
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setVisibleCount(24);
              }}
              placeholder="Search Lekki, C of O, Abuja, rent, building cost, diaspora..."
              aria-label="Search blog articles"
              className="h-11 w-full rounded-xl border border-border bg-background pl-10 pr-9 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground focus:border-foreground focus:ring-2 focus:ring-foreground/10"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                aria-label="Clear search"
                className="absolute right-2.5 top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full text-muted-foreground hover:bg-muted hover:text-foreground"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Category Filter Pills — wraps across full width on desktop, horizontal scroll on mobile */}
        <div className="mt-4 flex items-center gap-2 overflow-x-auto pb-1 sm:flex-wrap sm:overflow-visible sm:pb-0">
          <span className="inline-flex shrink-0 items-center gap-1 text-xs font-semibold text-muted-foreground mr-1">
            <Filter className="h-3.5 w-3.5" aria-hidden="true" />
            Topics:
          </span>
          <button
            type="button"
            onClick={() => {
              setSelectedCategory('All');
              setVisibleCount(24);
            }}
            className={`shrink-0 rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all ${
              selectedCategory === 'All'
                ? 'bg-foreground text-background shadow-sm'
                : 'border border-border bg-background text-muted-foreground hover:border-foreground/40 hover:text-foreground'
            }`}
          >
            All Articles ({posts.length})
          </button>
          {categories.map((cat) => {
            const active = selectedCategory === cat.name;
            return (
              <button
                key={cat.name}
                type="button"
                onClick={() => {
                  setSelectedCategory(cat.name);
                  setVisibleCount(24);
                }}
                className={`shrink-0 rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all ${
                  active
                    ? 'bg-foreground text-background shadow-sm'
                    : 'border border-border bg-background text-muted-foreground hover:border-foreground/40 hover:text-foreground'
                }`}
              >
                {cat.name} ({cat.count})
              </button>
            );
          })}
        </div>
      </div>

      {/* Empty Search State */}
      {filteredPosts.length === 0 ? (
        <div className="mt-8 rounded-2xl border border-border bg-card p-10 text-center">
          <Compass className="mx-auto h-8 w-8 text-muted-foreground" aria-hidden="true" />
          <h3 className="mt-3 text-lg font-bold text-foreground">No matching articles found</h3>
          <p className="mx-auto mt-1 max-w-md text-sm text-muted-foreground">
            We could not find an article matching &ldquo;{searchQuery}&rdquo; in {selectedCategory}. Try clearing your search or switching topics.
          </p>
          <button
            type="button"
            onClick={() => {
              setSelectedCategory('All');
              setSearchQuery('');
            }}
            className="mt-4 inline-flex h-10 items-center gap-2 rounded-full bg-primary px-5 text-xs font-semibold text-primary-foreground"
          >
            Reset filters
          </button>
        </div>
      ) : (
        <>
          {/* Full-Width Responsive Magazine Grid: 1 col mobile, 2 cols tablet, 3 cols laptop, 4 cols widescreen */}
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
            {displayedPosts.map((post, i) => {
              // Every 7th card on tablet/desktop spans 2 columns for visual magazine rhythm when unfiltered
              const isWideCard = selectedCategory === 'All' && !searchQuery && i > 0 && i % 7 === 0;
              return (
                <article
                  key={post.slug}
                  className={`group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground/30 hover:shadow-lg ${
                    isWideCard ? 'sm:col-span-2 lg:col-span-2' : ''
                  }`}
                >
                  <Link href={`/blog/${post.slug}`} className="flex h-full flex-col">
                    {post.cover ? (
                      <div
                        className={`relative w-full overflow-hidden bg-muted ${
                          isWideCard ? 'aspect-[16/8]' : 'aspect-[16/10]'
                        }`}
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={post.cover}
                          alt={
                            post.isIllustration
                              ? `${post.title} — Editorial illustration`
                              : post.title
                          }
                          loading={i < 6 ? 'eager' : 'lazy'}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        />
                        <span className="absolute left-3 top-3 rounded-full bg-background/95 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-foreground shadow-sm backdrop-blur-sm">
                          {post.category}
                        </span>
                        {post.isIllustration && (
                          <span className="absolute right-3 top-3 rounded-full bg-amber-100/95 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-amber-900 shadow-sm">
                            Illustration
                          </span>
                        )}
                      </div>
                    ) : (
                      <div className="flex items-center justify-between border-b border-border bg-muted/40 px-5 py-3">
                        <span className="rounded-full bg-background px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-foreground">
                          {post.category}
                        </span>
                        <Sparkles className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                      </div>
                    )}

                    <div className="flex flex-1 flex-col p-5 sm:p-6">
                      <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                        <time dateTime={post.date}>{post.formattedDate}</time>
                        <span aria-hidden="true">·</span>
                        <span className="inline-flex items-center gap-1">
                          <Clock className="h-3 w-3" aria-hidden="true" />
                          {post.readingTime}
                        </span>
                      </div>

                      <h3
                        className={`mt-2.5 font-extrabold leading-snug tracking-tight text-foreground group-hover:text-accent transition-colors ${
                          isWideCard ? 'text-lg sm:text-xl' : 'text-base sm:text-[17px]'
                        }`}
                      >
                        {post.title}
                      </h3>

                      <p className="mt-2.5 line-clamp-3 text-[13.5px] leading-relaxed text-muted-foreground">
                        {post.excerpt}
                      </p>

                      <div className="mt-auto flex items-center justify-between border-t border-border/60 pt-4 mt-5">
                        <span className="text-xs font-medium text-muted-foreground">
                          {post.authorName}
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-xs font-bold text-foreground group-hover:translate-x-0.5 transition-transform">
                          Read guide
                          <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </article>
              );
            })}
          </div>

          {/* Load More / Show All Controls */}
          {hasMore && (
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => setVisibleCount((c) => c + 24)}
                className="inline-flex h-12 items-center gap-2 rounded-full bg-primary px-7 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                <BookOpen className="h-4 w-4" aria-hidden="true" />
                Load 24 More Articles ({filteredPosts.length - visibleCount} remaining)
              </button>
              <button
                type="button"
                onClick={() => setVisibleCount(filteredPosts.length)}
                className="inline-flex h-12 items-center gap-2 rounded-full border border-border bg-card px-6 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
              >
                Show All {filteredPosts.length} Articles on Page
              </button>
            </div>
          )}
        </>
      )}
    </section>
  );
}

