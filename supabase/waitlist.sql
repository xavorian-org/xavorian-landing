-- ============================================================
-- Xavorian Landing — waitlist table
-- Run once against project bxiptffmsxamsgkzqutj
-- (Supabase SQL editor or: supabase db push)
-- ============================================================

create table if not exists public.waitlist (
  id          uuid primary key default gen_random_uuid(),
  full_name   text not null,
  email       text not null,
  phone       text,
  role        text not null default 'seeker' check (role in ('seeker', 'agent', 'landlord')),
  city        text,
  note        text,
  source      text not null default 'landing',
  created_at  timestamptz not null default now()
);

-- Leads are write-only from the public site: anon may INSERT, never READ.
alter table public.waitlist enable row level security;

create policy "anyone can join the waitlist"
  on public.waitlist
  for insert
  to anon, authenticated
  with check (true);

-- No select/update/delete policies for anon: leads stay private to service_role/admin queries.

-- Helpful indexes for launch-day exports
create index if not exists waitlist_city_idx on public.waitlist (city);
create index if not exists waitlist_role_idx on public.waitlist (role);
create index if not exists waitlist_created_at_idx on public.waitlist (created_at desc);
