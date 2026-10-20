import { permanentRedirect } from 'next/navigation';
import { MARKETPLACE_URL } from '@/data/site';

/** Preserve legacy waitlist URLs while sending visitors to the live marketplace. */
export default function WaitlistPage() {
  permanentRedirect(MARKETPLACE_URL);
}
