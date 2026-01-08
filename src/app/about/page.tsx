import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';

const teamMembers = [
  {
    name: 'Ada Lovelace',
    role: 'Founder & CEO',
    avatar: PlaceHolderImages.find(p => p.id === 'team-member-1')?.imageUrl,
    avatarFallback: 'AL',
  },
  {
    name: 'Charles Babbage',
    role: 'Chief Technology Officer',
    avatar: PlaceHolderImages.find(p => p.id === 'team-member-2')?.imageUrl,
    avatarFallback: 'CB',
  },
  {
    name: 'Grace Hopper',
    role: 'Head of Engineering',
    avatar: PlaceHolderImages.find(p => p.id === 'team-member-3')?.imageUrl,
    avatarFallback: 'GH',
  },
];

export default function AboutPage() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'about-hero');

  return (
    <div className="flex flex-col">
      <section className="relative h-64 md:h-80">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt="Team working together"
            className="object-cover"
            fill
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        <div className="container relative flex h-full items-end pb-8">
          <h1 className="text-4xl font-black tracking-tight sm:text-5xl md:text-6xl">
            About HostSim
          </h1>
        </div>
      </section>

      <section className="container py-12 md:py-20">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-12 md:grid-cols-3 md:gap-8">
            <div className="md:col-span-1">
              <h2 className="text-2xl font-bold tracking-tight text-primary">
                Our Mission
              </h2>
            </div>
            <div className="space-y-4 text-lg text-muted-foreground md:col-span-2">
              <p>
                At HostSim, our mission is to demystify the complex world of
                technology. We believe that learning about networking, systems,
                and security should be an engaging, interactive, and visual
                experience. We build high-quality simulations that empower
                students, professionals, and enthusiasts to learn by doing in a
                hands-on environment.
              </p>
              <p>
                We strive to break down barriers to education, making complex
                concepts accessible and intuitive for everyone, regardless of
                their background.
              </p>
            </div>
          </div>

          <div className="my-16 h-px w-full bg-border" />

          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Meet the Team
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              We are a passionate group of educators, engineers, and designers
              dedicated to creating the future of technical education.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
            {teamMembers.map((member) => (
              <div key={member.name} className="text-center">
                <Avatar className="mx-auto h-24 w-24">
                  <AvatarImage src={member.avatar} alt={member.name} />
                  <AvatarFallback>{member.avatarFallback}</AvatarFallback>
                </Avatar>
                <h3 className="mt-4 text-lg font-semibold">{member.name}</h3>
                <p className="text-primary">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
