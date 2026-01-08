import Link from 'next/link';
import { simulationCards } from '@/lib/data';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function SimulationGallery() {
  return (
    <section id="explore" className="container py-16 sm:py-24 scroll-mt-20">
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Explore Simulations
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Dive into our collection of interactive labs covering a wide range of topics.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {simulationCards.map((sim) => (
          <Card key={sim.title} className="flex flex-col overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1">
            <CardHeader>
              <div className="mb-4 flex justify-start">
                  <div className="p-3 rounded-md bg-secondary text-primary">
                    <sim.icon className="h-6 w-6" />
                  </div>
              </div>
              <CardTitle>{sim.title}</CardTitle>
              <CardDescription className="h-10">{sim.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow"></CardContent>
            <CardFooter>
              <Button asChild variant="secondary" className="w-full">
                <Link href={sim.href}>
                  Open Lab <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
