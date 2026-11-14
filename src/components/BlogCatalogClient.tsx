'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  Building2,
  Clock,
  Compass,
  FileCheck2,
  Globe,
  Home,
  KeyRound,
  Layers,
  MapPin,
  Search,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  Trees,
  Wallet,
  X,
} from 'lucide-react';

export interface BlogCardItem {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  formattedDate: string;
  readingTime: string;
  readingMinutes: number;
  category: string;
  cover: string;
  isHousePhoto: boolean;
  authorName: string;
}

export interface QuickCorridorItem {
  label: string;
  href: string;
  sub: string;
}

interface BlogCatalogClientProps {
  posts: BlogCardItem[];
  categories: { name: string; count: number }[];
  quickLocations: QuickCorridorItem[];
  marketplaceUrl: string;
}

type PillarKey =
  | 'all'
  | 'homes'
  | 'land'
  | 'renting'
  | 'areas'
  | 'safety'
  | 'legal'
  | 'money'
  | 'diaspora'
  | 'agents';

const PILLARS: {
  key: PillarKey;
  label: string;
  icon: typeof Layers;
  match: (cat: string) => boolean;
}[] = [
  { key: 'all', label: 'All articles', icon: Layers, match: () => true },
  {
    key: 'homes',
    label: 'Houses & Homes',
    icon: Home,
    match: (c) => /home|distress|income|spotlight/i.test(c),
  },
  {
    key: 'land',
    label: 'Land & Plots',
    icon: Trees,
    match: (c) => /land/i.test(c),
  },
  {
    key: 'renting',
    label: 'Renting',
    icon: KeyRound,
    match: (c) => /rent/i.test(c),
  },
  {
    key: 'areas',
    label: 'Area Guides',
    icon: MapPin,
    match: (c) => /area|corridor|buying guide/i.test(c),
  },
  {
    key: 'safety',
    label: 'Scam Safety',
    icon: ShieldCheck,
    match: (c) => /safety|trust|recovery|escrow/i.test(c),
  },
  {
    key: 'legal',
    label: 'Documents & Legal',
    icon: FileCheck2,
    match: (c) => /document|legal|compliance|title/i.test(c),
  },
  {
    key: 'money',
    label: 'Money & Building',
    icon: Wallet,
    match: (c) => /money|building|invest|data|insight|ai/i.test(c),
  },
  {
    key: 'diaspora',
    label: 'Diaspora',
    icon: Globe,
    match: (c) => /diaspora/i.test(c),
  },
  {
    key: 'agents',
    label: 'For Agents',
    icon: BadgeCheck,
    match: (c) => /agent|announcement/i.test(c),
  },
];

export function BlogCatalogClient({
  posts,
  categories,
  quickLocations,
  marketplaceUrl,
}: BlogCatalogClientProps) {
  const [selectedPillar, setSelectedPillar] = useState<PillarKey>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [contentFocus, setContentFocus] = useState<'all' | 'homes' | 'editorial'>('all');
  const [readingFilter, setReadingFilter] = useState<'any' | 'quick' | 'deep'>('any');
  const [sortBy, setSortBy] = useState<'newest' | 'quickest' | 'title'>('newest');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filterOpen, setFilterOpen] = useState<boolean>(false);
  const [visibleCount, setVisibleCount] = useState<number>(24);

  const handleClearFilters = () => {
    setSelectedPillar('all');
    setSelectedCategory('All');
    setContentFocus('all');
    setReadingFilter('any');
    setSortBy('newest');
    setSearchQuery('');
    setVisibleCount(24);
  };

  const hasActiveFilter =
    selectedPillar !== 'all' ||
    selectedCategory !== 'All' ||
    contentFocus !== 'all' ||
    readingFilter !== 'any' ||
    sortBy !== 'newest' ||
    searchQuery.trim().length > 0;

  const filteredPosts = useMemo(() => {
    const pillarDef = PILLARS.find((p) => p.key === selectedPillar) ?? PILLARS[0];
    const q = searchQuery.trim().toLowerCase();

    const list = posts.filter((post) => {
      if (selectedPillar !== 'all' && !pillarDef.match(post.category)) return false;
      if (selectedCategory !== 'All' && post.category !== selectedCategory) return false;
      if (contentFocus === 'homes' && !post.isHousePhoto) return false;
      if (contentFocus === 'editorial' && post.isHousePhoto) return false;
      if (readingFilter === 'quick' && post.readingMinutes > 4) return false;
      if (readingFilter === 'deep' && post.readingMinutes < 5) return false;

      if (!q) return true;
      return (
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.category.toLowerCase().includes(q)
      );
    });

    if (sortBy === 'quickest') {
      return [...list].sort((a, b) => a.readingMinutes - b.readingMinutes);
    }
    if (sortBy === 'title') {
      return [...list].sort((a, b) => a.title.localeCompare(b.title));
    }
    return list;
  }, [posts, selectedPillar, selectedCategory, contentFocus, readingFilter, sortBy, searchQuery]);

  const leadPost = posts[0];
  const spotlightPosts = posts.slice(1, 4);
  const gridSource = hasActiveFilter ? filteredPosts : filteredPosts.slice(4);
  const displayedPosts = gridSource.slice(0, visibleCount);
  const hasMore = visibleCount < gridSource.length;

  return (
    <>
      {/* Properties-Style Compact Sticky Search & Filter Header right at the top of /blog */}
      <div className="sticky top-16 z-30 w-full border-b border-border/80 bg-card/95 py-3 backdrop-blur-md sm:top-20">
        <div className="mx-auto w-full max-w-[1720px] px-4 sm:px-6 md:px-10 lg:px-14">
          <div className="flex flex-col items-center justify-between gap-3 md:flex-row">
            {/* Pill Search Bar matching Browse Properties */}
            <div className="relative flex w-full max-w-2xl items-center gap-1.5 rounded-full border border-border/80 bg-background p-1 shadow-sm transition-all hover:shadow-md">
              <div className="relative min-w-0 flex-grow">
                <Search
                  className="pointer-events-none absolute left-3.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground"
                  aria-hidden="true"
                />
                <input
                  type="search"
                  placeholder="Search Lekki, C of O, Abuja, rent, building cost, diaspora..."
                  aria-label="Search blog articles"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setVisibleCount(24);
                  }}
                  className="h-8 w-full rounded-full border-0 bg-transparent pl-9 pr-8 text-xs text-foreground outline-none placeholder:text-muted-foreground/70 sm:text-[13px]"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => {
                      setSearchQuery('');
                      setVisibleCount(24);
                    }}
                    aria-label="Clear search"
                    className="absolute right-1.5 top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full text-muted-foreground hover:bg-muted hover:text-foreground"
                  >
                    <X className="h-3.5 w-3.5" />
                  </button>
                )}
              </div>

              {/* Filter Popover Toggle */}
              <div className="relative shrink-0">
                <button
                  type="button"
                  onClick={() => setFilterOpen((o) => !o)}
                  aria-expanded={filterOpen}
                  aria-label="Open article filters"
                  className={`flex h-8 w-8 items-center justify-center rounded-full transition-colors ${
                    filterOpen || selectedCategory !== 'All' || contentFocus !== 'all' || readingFilter !== 'any'
                      ? 'bg-violet-100 text-violet-700'
                      : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                  }`}
                >
                  <SlidersHorizontal className="h-3.5 w-3.5" />
                </button>

                {filterOpen && (
                  <div className="absolute right-0 top-11 z-40 w-[320px] rounded-2xl border border-border bg-card p-4 shadow-xl sm:w-[340px]">
                    <div className="flex items-center justify-between border-b border-border pb-2.5">
                      <h3 className="text-xs font-bold text-foreground">Filter Articles</h3>
                      <button
                        type="button"
                        onClick={handleClearFilters}
                        className="text-[11px] font-semibold text-violet-700 hover:underline"
                      >
                        Clear all
                      </button>
                    </div>

                    <div className="mt-3 space-y-3">
                      <div className="space-y-1">
                        <label
                          htmlFor="blog-topic-select"
                          className="text-[11px] font-semibold text-muted-foreground"
                        >
                          Specific Topic / Corridor
                        </label>
                        <select
                          id="blog-topic-select"
                          value={selectedCategory}
                          onChange={(e) => {
                            setSelectedCategory(e.target.value);
                            setSelectedPillar('all');
                            setVisibleCount(24);
                          }}
                          className="h-9 w-full rounded-lg border border-border bg-background px-2.5 text-xs text-foreground outline-none focus:border-foreground"
                        >
                          <option value="All">All Topics ({posts.length})</option>
                          {categories.map((cat) => (
                            <option key={cat.name} value={cat.name}>
                              {cat.name} ({cat.count})
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="grid grid-cols-2 gap-2.5">
                        <div className="space-y-1">
                          <label
                            htmlFor="blog-focus-select"
                            className="text-[11px] font-semibold text-muted-foreground"
                          >
                            Article Type
                          </label>
                          <select
                            id="blog-focus-select"
                            value={contentFocus}
                            onChange={(e) => {
                              setContentFocus(e.target.value as 'all' | 'homes' | 'editorial');
                              setVisibleCount(24);
                            }}
                            className="h-9 w-full rounded-lg border border-border bg-background px-2.5 text-xs text-foreground outline-none focus:border-foreground"
                          >
                            <option value="all">All Articles</option>
                            <option value="homes">Verified Home Tours</option>
                            <option value="editorial">Guides &amp; Playbooks</option>
                          </select>
                        </div>

                        <div className="space-y-1">
                          <label
                            htmlFor="blog-length-select"
                            className="text-[11px] font-semibold text-muted-foreground"
                          >
                            Read Time
                          </label>
                          <select
                            id="blog-length-select"
                            value={readingFilter}
                            onChange={(e) => {
                              setReadingFilter(e.target.value as 'any' | 'quick' | 'deep');
                              setVisibleCount(24);
                            }}
                            className="h-9 w-full rounded-lg border border-border bg-background px-2.5 text-xs text-foreground outline-none focus:border-foreground"
                          >
                            <option value="any">Any Length</option>
                            <option value="quick">Quick Read (≤ 4 min)</option>
                            <option value="deep">Deep Dive (5+ min)</option>
                          </select>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => setFilterOpen(false)}
                        className="mt-1 h-9 w-full rounded-lg bg-primary text-xs font-bold text-primary-foreground transition-opacity hover:opacity-95"
                      >
                        Apply Filters ({filteredPosts.length} matches)
                      </button>
                    </div>
                  </div>
                )}
              </div>

              <button
                type="button"
                onClick={() => setFilterOpen(false)}
                aria-label="Search articles"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground transition-opacity hover:opacity-95"
              >
                <Search className="h-3.5 w-3.5" />
              </button>
            </div>

            {/* Quick Sort & Controls matching Browse Properties */}
            <div className="flex w-full items-center justify-between gap-2 md:w-auto md:justify-end">
              <span className="text-xs font-semibold text-muted-foreground">
                Showing <span className="text-foreground font-bold">{filteredPosts.length}</span> of{' '}
                {posts.length}
              </span>

              <div className="flex items-center gap-2">
                <select
                  aria-label="Sort articles"
                  value={sortBy}
                  onChange={(e) => {
                    setSortBy(e.target.value as 'newest' | 'quickest' | 'title');
                    setVisibleCount(24);
                  }}
                  className="h-8 rounded-full border border-border/80 bg-background px-3 text-[11px] font-semibold text-foreground outline-none focus:border-foreground"
                >
                  <option value="newest">Newest First</option>
                  <option value="quickest">Quickest Read</option>
                  <option value="title">Title: A → Z</option>
                </select>

                {hasActiveFilter && (
                  <button
                    type="button"
                    onClick={handleClearFilters}
                    className="rounded-full border border-border/60 bg-muted px-3 py-1.5 text-[11px] font-semibold text-foreground transition-colors hover:bg-muted/80"
                  >
                    Clear
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Airbnb-Style Compact Single-Row Category Icon Bar */}
          <div className="mt-2.5 flex items-center gap-7 overflow-x-auto border-t border-border/60 pt-2.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              const isActive = selectedPillar === pillar.key && selectedCategory === 'All';
              return (
                <button
                  key={pillar.key}
                  type="button"
                  onClick={() => {
                    setSelectedPillar(pillar.key);
                    setSelectedCategory('All');
                    setVisibleCount(24);
                  }}
                  className={`flex shrink-0 cursor-pointer flex-col items-center gap-1 border-b-2 pb-1.5 text-[11px] font-semibold transition-all ${
                    isActive
                      ? 'border-foreground text-foreground'
                      : 'border-transparent text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                  <span className="whitespace-nowrap">{pillar.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="mx-auto w-full max-w-[1720px] px-4 pt-6 sm:px-6 sm:pt-8 md:px-10 lg:px-14">
        {/* Default View: Compact Journal Masthead & Featured Bento Story Grid */}
        {!hasActiveFilter && leadPost && (
          <>
            <header className="rounded-3xl border border-border bg-card p-5 shadow-sm sm:p-8 lg:p-9">
              <div className="grid gap-6 lg:grid-cols-12 lg:items-center">
                <div className="lg:col-span-8">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="eyebrow">
                      <span className="eyebrow-dot" />
                      The Xavorian Journal
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-muted/70 px-3 py-1 text-xs font-semibold text-foreground">
                      <Clock className="h-3.5 w-3.5 text-violet-700" aria-hidden="true" />
                      {posts.length} articles live · 10 new editions daily at 9:00 a.m. Lagos time
                    </span>
                  </div>
                  <h1 className="mt-4 text-balance text-2xl font-extrabold leading-[1.08] tracking-tight text-foreground sm:text-4xl lg:text-[42px]">
                    Houses, land, and honest property talk across Nigeria.
                  </h1>
                  <p className="mt-3 max-w-3xl text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
                    Real verified property listings from Xavorian, street-by-street neighborhood guides
                    from Lagos and Abuja to Benin City and Owerri, and clear playbooks on land titles,
                    rent laws, building costs, and staying scam-free.
                  </p>
                </div>

                <div className="flex flex-col justify-between gap-4 rounded-2xl border border-border bg-muted/40 p-5 lg:col-span-4">
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div className="rounded-xl border border-border/60 bg-card p-3">
                      <p className="text-lg font-extrabold text-foreground sm:text-xl">{posts.length}</p>
                      <p className="text-[11px] font-medium text-muted-foreground">Live Guides</p>
                    </div>
                    <div className="rounded-xl border border-border/60 bg-card p-3">
                      <p className="text-lg font-extrabold text-foreground sm:text-xl">
                        {categories.length}
                      </p>
                      <p className="text-[11px] font-medium text-muted-foreground">Topic Pillars</p>
                    </div>
                    <div className="rounded-xl border border-border/60 bg-card p-3">
                      <p className="text-lg font-extrabold text-foreground sm:text-xl">4 Gates</p>
                      <p className="text-[11px] font-medium text-muted-foreground">Verified Data</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <Link
                      href={`${marketplaceUrl}/properties`}
                      className="group inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 text-xs font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:shadow-md"
                    >
                      Browse Verified Properties
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                    <a
                      href="#all-articles-directory"
                      className="inline-flex items-center justify-center gap-1.5 rounded-full border border-border bg-card px-4 py-2.5 text-xs font-semibold text-foreground transition-colors hover:bg-muted"
                    >
                      <BookOpen className="h-3.5 w-3.5" />
                      Full Index
                    </a>
                  </div>
                </div>
              </div>
            </header>

            <section aria-label="Featured stories" className="mt-6 grid items-stretch gap-6 lg:grid-cols-12">
              <article className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all hover:border-foreground/30 hover:shadow-lg lg:col-span-7">
                <Link href={`/blog/${leadPost.slug}`} className="flex h-full flex-col">
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#FAF9F4]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={leadPost.cover}
                      alt={leadPost.title}
                      loading="eager"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                    {leadPost.isHousePhoto && (
                      <div className="absolute left-4 top-4 flex flex-wrap items-center gap-2">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-background shadow-sm">
                          <Sparkles className="h-3 w-3" aria-hidden="true" />
                          Featured Cover Story
                        </span>
                        <span className="rounded-full bg-background/95 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-foreground shadow-sm">
                          {leadPost.category}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="flex flex-1 flex-col justify-between p-6 sm:p-8">
                    <div>
                      {!leadPost.isHousePhoto && (
                        <div className="mb-3 flex flex-wrap items-center gap-2">
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-background">
                            <Sparkles className="h-3 w-3" aria-hidden="true" />
                            Featured Cover Story
                          </span>
                          <span className="rounded-full border border-border bg-muted/60 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-foreground">
                            {leadPost.category}
                          </span>
                        </div>
                      )}
                      <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                        <time dateTime={leadPost.date}>{leadPost.formattedDate}</time>
                        <span aria-hidden="true">·</span>
                        <span>{leadPost.readingTime}</span>
                        <span aria-hidden="true">·</span>
                        <span className="font-medium text-foreground">{leadPost.authorName}</span>
                      </div>
                      <h2 className="mt-3 text-xl font-extrabold leading-tight tracking-tight text-foreground transition-colors group-hover:text-violet-700 sm:text-2xl lg:text-3xl">
                        {leadPost.title}
                      </h2>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                        {leadPost.excerpt}
                      </p>
                    </div>
                    <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700">
                        <BadgeCheck className="h-4 w-4" aria-hidden="true" />
                        Grounded in verified Nigerian market data
                      </span>
                      <span className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-xs font-semibold text-primary-foreground transition-transform group-hover:translate-x-0.5">
                        Read Featured Article
                        <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                      </span>
                    </div>
                  </div>
                </Link>
              </article>

              <div className="flex flex-col justify-between gap-6 lg:col-span-5">
                <div className="flex-1 rounded-3xl border border-border bg-card p-5 shadow-sm sm:p-6">
                  <div className="flex items-center justify-between border-b border-border pb-3.5">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-foreground">
                      Editor&apos;s Picks &amp; Essential Playbooks
                    </span>
                    <span className="text-[11px] font-medium text-muted-foreground">Updated daily</span>
                  </div>
                  <div className="mt-4 divide-y divide-border">
                    {spotlightPosts.map((sp) => (
                      <article key={sp.slug} className="py-3.5 first:pt-0 last:pb-0">
                        <Link href={`/blog/${sp.slug}`} className="group flex items-start gap-4">
                          <div className="relative h-20 w-32 shrink-0 overflow-hidden rounded-xl border border-border bg-[#FAF9F4]">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={sp.cover}
                              alt={sp.title}
                              loading="eager"
                              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <span className="inline-block rounded-full bg-muted px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                              {sp.category}
                            </span>
                            <h3 className="mt-1.5 line-clamp-2 text-sm font-bold leading-snug text-foreground transition-colors group-hover:text-violet-700">
                              {sp.title}
                            </h3>
                            <p className="mt-1 text-[11px] text-muted-foreground">
                              {sp.formattedDate} · {sp.readingTime}
                            </p>
                          </div>
                        </Link>
                      </article>
                    ))}
                  </div>
                </div>

                <div className="rounded-3xl border border-border bg-card p-5 shadow-sm sm:p-6">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-violet-700" aria-hidden="true" />
                    <h2 className="text-sm font-extrabold tracking-tight text-foreground">
                      Browse Live Verified Homes by Corridor
                    </h2>
                  </div>
                  <div className="mt-3.5 grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {quickLocations.map((loc) => (
                      <Link
                        key={loc.label}
                        href={loc.href}
                        className="group flex items-center justify-between rounded-xl border border-border bg-muted/30 px-3.5 py-2.5 transition-all hover:border-foreground/40 hover:bg-muted/70"
                      >
                        <div className="min-w-0">
                          <p className="truncate text-xs font-bold text-foreground">{loc.label}</p>
                          <p className="truncate text-[11px] text-muted-foreground">{loc.sub}</p>
                        </div>
                        <ArrowRight className="h-3.5 w-3.5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-foreground" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </>
        )}

        {/* Active Filter Context Header when searching or filtering */}
        {hasActiveFilter && (
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-border bg-card px-5 py-3.5 shadow-sm">
            <div>
              <h1 className="text-base font-extrabold tracking-tight text-foreground sm:text-lg">
                {selectedCategory !== 'All'
                  ? selectedCategory
                  : PILLARS.find((p) => p.key === selectedPillar)?.label ?? 'Search Results'}
              </h1>
              <p className="text-xs text-muted-foreground">
                Showing {filteredPosts.length} matching {filteredPosts.length === 1 ? 'article' : 'articles'}
                {searchQuery.trim() ? ` for “${searchQuery.trim()}”` : ''}
              </p>
            </div>
            <button
              type="button"
              onClick={handleClearFilters}
              className="rounded-full border border-border bg-background px-4 py-1.5 text-xs font-semibold text-foreground hover:bg-muted"
            >
              Reset all filters
            </button>
          </div>
        )}

        {/* Article Grid Section */}
        <section aria-label="Nigerian real estate blog articles" className={hasActiveFilter ? '' : 'mt-10'}>
          {displayedPosts.length === 0 ? (
            <div className="mt-6 rounded-3xl border border-border bg-card p-12 text-center shadow-sm">
              <Compass className="mx-auto h-9 w-9 text-muted-foreground" aria-hidden="true" />
              <h3 className="mt-3 text-lg font-bold text-foreground">No matching articles found</h3>
              <p className="mx-auto mt-1 max-w-md text-sm text-muted-foreground">
                We could not find an article matching your current search or filters. Try clearing your
                filters to see all guides and verified home tours.
              </p>
              <button
                type="button"
                onClick={handleClearFilters}
                className="mt-5 inline-flex h-10 items-center gap-2 rounded-full bg-primary px-6 text-xs font-semibold text-primary-foreground"
              >
                Reset filters
              </button>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
                {displayedPosts.map((post, i) => {
                  const isWideCard = !hasActiveFilter && i > 0 && i % 7 === 0;
                  return (
                    <article
                      key={post.slug}
                      className={`group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground/30 hover:shadow-lg ${
                        isWideCard ? 'sm:col-span-2 lg:col-span-2' : ''
                      }`}
                    >
                      <Link href={`/blog/${post.slug}`} className="flex h-full flex-col">
                        <div
                          className={`relative w-full overflow-hidden bg-[#FAF9F4] ${
                            isWideCard ? 'aspect-[16/8]' : 'aspect-[16/10]'
                          }`}
                        >
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={post.cover}
                            alt={post.title}
                            loading={i < 8 ? 'eager' : 'lazy'}
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                          />
                          {post.isHousePhoto && (
                            <span className="absolute left-3 top-3 rounded-full bg-background/95 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-foreground shadow-sm backdrop-blur-sm">
                              {post.category}
                            </span>
                          )}
                        </div>

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
                            className={`mt-2.5 font-extrabold leading-snug tracking-tight text-foreground transition-colors group-hover:text-violet-700 ${
                              isWideCard ? 'text-lg sm:text-xl' : 'text-base sm:text-[17px]'
                            }`}
                          >
                            {post.title}
                          </h3>

                          <p className="mt-2.5 line-clamp-3 text-[13.5px] leading-relaxed text-muted-foreground">
                            {post.excerpt}
                          </p>

                          <div className="mt-auto flex items-center justify-between border-t border-border/60 pt-4">
                            <span className="text-xs font-medium text-muted-foreground">
                              {post.authorName}
                            </span>
                            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-foreground transition-transform group-hover:translate-x-0.5">
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

              {hasMore && (
                <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <button
                    type="button"
                    onClick={() => setVisibleCount((c) => c + 24)}
                    className="inline-flex h-11 items-center gap-2 rounded-full bg-primary px-7 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <BookOpen className="h-4 w-4" aria-hidden="true" />
                    Load 24 More Articles ({gridSource.length - visibleCount} remaining)
                  </button>
                  <button
                    type="button"
                    onClick={() => setVisibleCount(gridSource.length)}
                    className="inline-flex h-11 items-center gap-2 rounded-full border border-border bg-card px-6 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
                  >
                    Show All {gridSource.length} Articles
                  </button>
                </div>
              )}
            </>
          )}
        </section>
      </div>
    </>
  );
}
