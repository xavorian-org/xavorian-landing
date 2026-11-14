import { Ghost, Camera, FileX2, Users, ShieldAlert } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

const villains = [
  {
    tag: 'Pattern 01',
    icon: Camera,
    name: 'The Fake Listing',
    story:
      'A real house posted by a stranger using stolen pictures. The price is set low enough to make you rush and skip hard questions.',
    tell: 'Stopped by live ID verification',
  },
  {
    tag: 'Pattern 02',
    icon: Ghost,
    name: 'The Ghost Agent',
    story:
      'Helpful on the phone until you send an inspection fee. Then the line goes dead, and their claimed office never existed.',
    tell: 'Stopped by bank-to-ID name matching',
  },
  {
    tag: 'Pattern 03',
    icon: FileX2,
    name: 'The Fake Paperwork',
    story:
      'A survey plan or title deed designed to look official at a glance, while carrying no valid ownership trail.',
    tell: 'Stopped by document scanning & audit',
  },
  {
    tag: 'Pattern 04',
    icon: Users,
    name: 'The Double Sale',
    story:
      'The exact same piece of land sold to multiple buyers in the same month — ending in conflicting receipts and court disputes.',
    tell: 'Stopped by pre-listing ownership checks',
  },
];

export const Problem = () => (
  <section className="w-full bg-background py-16 sm:py-24">
    <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      <Reveal variant="blur">
        <div className="grid items-end gap-6 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <span className="eyebrow">
              <span className="eyebrow-dot" />
              Know the enemy
            </span>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              The four tricks behind almost every property scam in Nigeria.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pb-1">
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              If you have looked for a place here, you have probably seen at least one of these.
              They wear different disguises, but every single one breaks at the same weak spot: real
              verification.
            </p>
          </div>
        </div>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {villains.map((v, i) => (
          <Reveal key={v.name} delay={i * 70} variant="scale" className="h-full">
            <article className="group flex h-full flex-col justify-between rounded-2xl border border-border/80 bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-600/35 hover:shadow-md">
              <div>
                <div className="flex items-center justify-between gap-3">
                  <span className="inline-flex rounded-full border border-border bg-muted px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-muted-foreground">
                    {v.tag}
                  </span>
                  <div className="flex size-10 items-center justify-center rounded-xl bg-violet-50 text-violet-700 transition-colors group-hover:bg-violet-600 group-hover:text-white">
                    <v.icon className="size-5" strokeWidth={2} />
                  </div>
                </div>

                <h3 className="mt-5 font-display text-lg font-bold tracking-tight text-foreground">
                  {v.name}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{v.story}</p>
              </div>

              <div className="mt-6 border-t border-border/70 pt-4">
                <p className="text-xs font-semibold text-violet-700">{v.tell}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={100}>
        <div className="mt-8 flex flex-col items-start justify-between gap-3 rounded-2xl border border-border/80 bg-muted/40 px-5 py-4 sm:flex-row sm:items-center sm:px-6">
          <div className="flex items-center gap-3">
            <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-foreground text-background">
              <ShieldAlert className="size-4" strokeWidth={2} />
            </span>
            <p className="text-sm font-semibold text-foreground">
              Every scam fails when the facts are checked upfront.
            </p>
          </div>
          <p className="text-xs font-medium text-muted-foreground sm:text-sm">
            So we made checking the facts mandatory — never optional.
          </p>
        </div>
      </Reveal>
    </div>
  </section>
);
