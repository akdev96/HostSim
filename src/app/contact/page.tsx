import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="container py-12 md:py-20">
       <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-4xl font-bold tracking-tight">Contact Us</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Have a question or want to work with us? We’d love to hear from you.
        </p>
      </div>
      
      <div className="mt-12 grid gap-12 md:grid-cols-2 lg:gap-16">
          <Card>
             <CardHeader>
                <CardTitle>Send a Message</CardTitle>
                <CardDescription>Fill out the form and we'll get back to you as soon as possible.</CardDescription>
             </CardHeader>
             <CardContent>
                <form className="space-y-4">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                            <Label htmlFor="first-name">First Name</Label>
                            <Input id="first-name" placeholder="Ada" />
                        </div>
                         <div className="space-y-2">
                            <Label htmlFor="last-name">Last Name</Label>
                            <Input id="last-name" placeholder="Lovelace" />
                        </div>
                    </div>
                     <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="ada@example.com" />
                    </div>
                     <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea id="message" placeholder="Your message..." className="min-h-[120px]" />
                    </div>
                    <Button type="submit" className="w-full">Send Message</Button>
                </form>
             </CardContent>
          </Card>
          
          <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold">Our Office</h2>
                <p className="mt-2 text-muted-foreground">Come say hello at our office headquarters.</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-secondary text-primary">
                      <MapPin className="h-5 w-5"/>
                    </div>
                    <div>
                        <h3 className="font-semibold">Address</h3>
                        <p className="text-muted-foreground">123 Simulation Drive<br/>Tech City, CA 94105, USA</p>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-secondary text-primary">
                      <Mail className="h-5 w-5"/>
                    </div>
                    <div>
                        <h3 className="font-semibold">Email</h3>
                        <p className="text-muted-foreground">
                          <a href="mailto:hello@hostsim.com" className="hover:text-primary">hello@hostsim.com</a>
                        </p>
                    </div>
                </div>
                 <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-secondary text-primary">
                      <Phone className="h-5 w-5"/>
                    </div>
                    <div>
                        <h3 className="font-semibold">Phone</h3>
                        <p className="text-muted-foreground">
                          <a href="tel:+1234567890" className="hover:text-primary">+1 (234) 567-890</a>
                        </p>
                    </div>
                </div>
              </div>
          </div>
      </div>
    </div>
  );
}
