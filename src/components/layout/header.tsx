'use client';

import * as React from 'react';
import Link from 'next/link';
import {
  Menu,
  Search,
  Dna,
  PanelLeft,
} from 'lucide-react';
import { useTheme } from 'next-themes';

import { cn } from '@/lib/utils';
import { navigationLinks } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { ThemeToggle } from '@/components/theme-toggle';
import { ScrollArea } from '@/components/ui/scroll-area';

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-sm">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Dna className="h-6 w-6 text-primary" />
            <span className="hidden font-bold sm:inline-block">HostSim</span>
          </Link>
          <NavigationMenu>
            <NavigationMenuList>
              {navigationLinks.map((navItem) =>
                navItem.isMega ? (
                  <NavigationMenuItem key={navItem.title}>
                    <NavigationMenuTrigger>{navItem.title}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid w-[600px] grid-cols-2 gap-x-2 p-4 md:w-[700px] lg:w-[800px] lg:grid-cols-4">
                        {navItem.categories?.map((category) => (
                          <div key={category.title}>
                             <h3 className="px-3 py-2 text-sm font-semibold text-primary">{category.title}</h3>
                             <ul className="flex flex-col">
                                {category.links.map((link) => (
                                   <li key={link.title}>
                                     <Link href={link.href} passHref legacyBehavior>
                                       <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "justify-start font-normal")}>
                                          {link.title}
                                       </NavigationMenuLink>
                                     </Link>
                                   </li>
                                ))}
                             </ul>
                          </div>
                        ))}
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ) : (
                  <NavigationMenuItem key={navItem.title}>
                    <Link href={navItem.href || '#'} legacyBehavior passHref>
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        {navItem.title}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                )
              )}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile Header */}
        <div className="flex flex-1 items-center justify-between md:hidden">
            <Link href="/" className="flex items-center space-x-2">
              <Dna className="h-6 w-6 text-primary" />
              <span className="font-bold">HostSim</span>
            </Link>
        </div>


        <div className="flex flex-1 items-center justify-end space-x-2">
           <div className="hidden w-full flex-1 md:w-auto md:flex-none lg:flex">
            <Button
              variant="ghost"
              className="relative h-9 w-9 rounded-full p-0 text-muted-foreground hover:bg-muted xl:h-10 xl:w-60 xl:justify-start xl:px-4 xl:py-2"
            >
              <Search className="h-4 w-4 xl:mr-2" />
              <span className="hidden xl:inline-flex">Search simulations...</span>
            </Button>
          </div>
          <ThemeToggle />
          <Button asChild className="hidden md:inline-flex">
            <Link href="#explore">Launch Lab</Link>
          </Button>
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <PanelLeft className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0">
              <Link href="/" className="mr-6 flex items-center space-x-2 p-4">
                 <Dna className="h-6 w-6 text-primary" />
                 <span className="font-bold sm:inline-block">HostSim</span>
              </Link>
              <ScrollArea className="h-[calc(100vh-8rem)]">
                <div className="flex flex-col space-y-2 p-4">
                  {navigationLinks.map((item) => (
                     item.isMega ? (
                      <div key={item.title} className="flex flex-col space-y-3">
                        <h4 className="font-medium">{item.title}</h4>
                        {item.categories?.map((category) => (
                          <div key={category.title} className="flex flex-col space-y-1 pl-2">
                            <h5 className="font-medium text-primary">{category.title}</h5>
                            {category.links.map(link => (
                              <SheetClose asChild key={link.title}>
                                  <Link href={link.href} className="text-muted-foreground p-2 rounded-md hover:bg-accent hover:text-accent-foreground">
                                      {link.title}
                                  </Link>
                              </SheetClose>
                            ))}
                          </div>
                        ))}
                      </div>
                    ) : (
                      <SheetClose asChild key={item.title}>
                          <Link href={item.href || '#'} className="font-medium p-2 rounded-md hover:bg-accent hover:text-accent-foreground">
                              {item.title}
                          </Link>
                      </SheetClose>
                    )
                  ))}
                </div>
              </ScrollArea>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
