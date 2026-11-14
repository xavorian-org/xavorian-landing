'use client';

import { Ghost, Camera, FileX2, Users } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { useAutoCarousel } from '@/lib/use-auto-carousel';

const villains = [
  {
    tag: 'Fraud pattern 01',
    icon: Camera,
    name: 'The Fake Listing',
    story: 'A real house posted by a stranger using stolen pictures. The price is so low you feel lucky, which makes you forget to ask the right questions.',
    tell: 'Fails when they have to show their real ID.',
  },
  {
    tag: 'Fraud pattern 02',
    icon: Ghost,
    name: 'The Ghost Agent',
    story: 'They sound so nice on the phone until you pay the viewing fee. Then their number stops working, and their office never even existed.',
    tell: 'Fails when their bank name has to match a real ID.',
  },
  {
    tag: 'Fraud pattern 03',
    icon: FileX2,
    name: 'The Fake Paperwork',
    story: 'A land document that looks perfectly real but is totally fake. It looks great on paper but has no real history.',
    tell: 'Fails when we check the government records and read the papers.',
  },
  {
    tag: 'Fraud pattern 04',
    icon: Users,
    name: 'The Double Sale',
    story: 'The exact same piece of land sold to three different people in one month. That means three receipts, lots of crying, and a big court case.',
    tell: 'Fails because we check who really owns it before it even goes online.',
  },
];

export const Problem = () => {
  const { ref, pauseHandlers } = useAutoCarousel<HTMLDivElement>(3000);

  return (
  <section className="container mx-auto mt-20 sm:mt-28 lg:mt-32">
    <div className="rounded-[2rem] bg-[radial-gradient(130%_150%_at_10%_0%,#3a1280_0%,#2a1060_45%,#130722_100%)] px-6 py-14 text-white sm:px-12 sm:py-16">
      <Reveal variant="blur" className="mx-auto max-w-3xl text-center">
        <span className="eyebrow border-white/15 bg-white/10 text-white/70">
          <span className="eyebrow-dot" />
          Know the enemy
        </span>
        <h2 className="mt-4 text-balance font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-5xl">
          The four main tricks behind almost every property scam in Nigeria.
        </h2>
        <div className="mt-4 flex flex-col gap-1.5 text-pretty text-sm leading-relaxed text-white/65 sm:text-base">
          <p>If you have looked for a place here, you have probably seen at least one of these.</p>
          <p>They might look different, but they all use the same tricks and have the same weak spot.</p>
        </div>
      </Reveal>

      <div className="-mx-6 mt-12 px-6 sm:mx-0 sm:px-0">
        <div
          ref={ref}
          {...pauseHandlers}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:grid lg:grid-cols-4 lg:snap-none lg:gap-6 lg:overflow-visible lg:pb-0"
        >
        {villains.map((v, i) => (
          <Reveal key={v.name} delay={i * 90} variant="scale" className="h-full w-[78%] shrink-0 snap-center sm:w-[46%] lg:w-auto lg:shrink">
            <article className="group flex h-full w-full min-w-0 flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:shadow-xl hover:shadow-black/40 sm:p-7">
              <div>
                <div className="flex items-center justify-between">
                  <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white/55">
                    {v.tag}
                  </span>
                  <div className="flex size-10 items-center justify-center rounded-2xl bg-white text-violet-700 transition-transform group-hover:scale-105">
                    <v.icon className="size-5" strokeWidth={2} />
                  </div>
                </div>

                <h3 className="mt-5 text-lg font-bold tracking-tight text-white">{v.name}</h3>
                <p className="mt-3 text-xs leading-relaxed text-white/65 sm:text-sm">{v.story}</p>
              </div>

              <div className="mt-6 border-t border-white/10 pt-4">
                <p className="text-xs font-bold text-violet-300">
                  {v.tell}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
        </div>
      </div>

      <Reveal delay={120} className="mt-10 text-center">
        <div className="mx-auto max-w-xl flex flex-col gap-1 text-sm font-semibold text-white">
          <p>Every scam fails when you actually check the facts.</p>
          <p className="font-normal text-white/60">So we made checking the facts a must, not just an option.</p>
        </div>
      </Reveal>
    </div>
  </section>
  );
};
