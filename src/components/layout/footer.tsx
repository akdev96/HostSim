import Link from 'next/link';
import { Dna, Github, Twitter, Linkedin } from 'lucide-react';
import { footerSections } from '@/lib/data';
import { DiscordIcon } from '@/components/icons';

export function Footer() {
  return (
    <footer className="border-t border-border/40">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 py-12">
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Dna className="h-6 w-6 text-primary" />
              <span className="font-bold text-lg">HostSim</span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs">
              Interactive visual learning for complex tech concepts.
            </p>
          </div>
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-foreground mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.title}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6 border-t border-border/40">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Host Simulation Labs. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" aria-label="GitHub" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="h-5 w-5" />
            </Link>
            <Link href="#" aria-label="Twitter" className="text-muted-foreground hover:text-primary transition-colors">
              <Twitter className="h-5 w-5" />
            </Link>
            <Link href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link href="#" aria-label="Discord" className="text-muted-foreground hover:text-primary transition-colors">
              <DiscordIcon className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
