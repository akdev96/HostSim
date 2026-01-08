import { HeroSpark } from '@/components/hero-spark';
import { SimulationGallery } from '@/components/simulation-gallery';

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSpark />
      <div
        className="h-px w-full bg-gradient-to-r from-transparent via-primary/40 to-transparent"
        aria-hidden="true"
      />
      <SimulationGallery />
    </div>
  );
}
