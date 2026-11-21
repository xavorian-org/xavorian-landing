import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { MARKETPLACE_URL } from '@/data/site';

const CORRIDORS = [
  {
    index: '01',
    name: 'Lagos',
    state: 'Lagos State',
    areas: 'Lekki, Ikoyi, Victoria Island, Ikeja, Ajah, Epe, Yaba',
  },
  {
    index: '02',
    name: 'Abuja',
    state: 'Federal Capital Territory',
    areas: 'Maitama, Asokoro, Guzape, Wuse, Gwarinpa, Mabushi, Lugbe',
  },
  {
    index: '03',
    name: 'Ogun',
    state: 'Ogun State',
    areas: 'Mowe, Ofada, Arepo, Magboro, Shimawa, Abeokuta',
  },
  {
    index: '04',
    name: 'Benin City',
    state: 'Edo State',
    areas: 'GRA, Ugbor, Sapele Road, Airport Road, Ugbowo',
  },
  {
    index: '05',
    name: 'Port Harcourt',
    state: 'Rivers State',
    areas: 'New GRA, Trans-Amadi, Peter Odili Road, Ada George',
  },
  {
    index: '06',
    name: 'Asaba',
    state: 'Delta State',
    areas: 'GRA, Okpanam Road, Summit Road, DBS',
  },
  {
    index: '07',
    name: 'Owerri',
    state: 'Imo State',
    areas: 'New Owerri, World Bank, Irette, Works Layout',
  },
  {
    index: '08',
    name: 'Ibadan',
    state: 'Oyo State',
    areas: 'Bodija, Jericho, Akobo, Oluyole, Moniya',
  },
  {
    index: '09',
    name: 'Enugu',
    state: 'Enugu State',
    areas: 'Independence Layout, GRA, New Haven, Trans-Ekulu',
  },
  {
    index: '10',
    name: 'Uyo',
    state: 'Akwa Ibom State',
    areas: 'Ewet Housing, Shelter Afrique, Osongama',
  },
  {
    index: '11',
    name: 'Warri',
    state: 'Delta State',
    areas: 'Effurun, Ekpan, Bendel Estate, Airport Road',
  },
  {
    index: '12',
    name: 'Nasarawa',
    state: 'Nasarawa State',
    areas: 'Lafia, New Karu, Mararaba, Keffi',
  },
] as const;

export const Locations = () => (
  <section
    id="locations"
    aria-labelledby="locations-heading"
    className="scroll-mt-20 border-t border-[#E4E1D6] bg-[#FFFFFF] py-20 sm:py-28 lg:py-32"
  >
    <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#7B2276]">
            <span className="h-px w-5 bg-[#9C3495]" aria-hidden="true" />
            Nationwide directory · 36 states + FCT
          </span>
          <h2
            id="locations-heading"
            className="mt-4 font-serif text-[2rem] font-normal not-italic leading-[1.08] tracking-[-0.018em] text-[#141414] sm:text-[2.5rem] lg:text-[3rem]"
          >
            Verified Nigerian real estate, city by city.
          </h2>
          <p className="mt-3 text-[15px] leading-[1.65] text-[#52525B]">
            Select a corridor to filter pre-screened homes, rentals, and titled land on the live marketplace.
          </p>
        </div>
        <Link
          href={`${MARKETPLACE_URL}/properties`}
          className="inline-flex shrink-0 items-center gap-1.5 text-[13.5px] font-semibold text-[#141414] transition-colors hover:text-[#7B2276]"
        >
          Explore all 36 states
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </Link>
      </div>

      {/* Architectural 1px Gapless Directory Matrix */}
      <div className="mt-10 grid grid-cols-1 gap-px border-y border-[#DCD8CA] bg-[#E4E1D6] sm:grid-cols-2 lg:grid-cols-3">
        {CORRIDORS.map((c) => (
          <Link
            key={c.name}
            href={`${MARKETPLACE_URL}/properties?search=${encodeURIComponent(c.name)}`}
            className="group flex flex-col justify-between bg-[#FFFFFF] p-6 transition-colors hover:bg-[#FAF9F4] sm:p-7"
          >
            <div className="flex items-baseline justify-between gap-3">
              <div>
                <h3 className="font-serif text-[25px] font-normal not-italic leading-tight text-[#141414] transition-colors group-hover:text-[#7B2276]">
                  {c.name}
                </h3>
                <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#75736B]">
                  {c.state}
                </p>
              </div>
              <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold tabular-nums text-[#75736B]">
                <span>{c.index}</span>
                <ArrowUpRight
                  className="size-4 text-[#75736B] transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#7B2276]"
                  aria-hidden="true"
                />
              </span>
            </div>
            <p className="mt-4 text-[13.5px] leading-[1.6] text-[#52525B]">{c.areas}</p>
          </Link>
        ))}
      </div>

      <p className="mt-6 text-[13px] text-[#52525B]">
        Also covering Kano, Kaduna, Anambra, Cross River, Kwara, Plateau, and all remaining Nigerian states on{' '}
        <Link
          href={`${MARKETPLACE_URL}/properties`}
          className="font-semibold text-[#141414] underline decoration-[#DCD8CA] underline-offset-4 transition-colors hover:text-[#7B2276] hover:decoration-[#9C3495]"
        >
          marketplace.xavorian.com
        </Link>
        .
      </p>
    </div>
  </section>
);
