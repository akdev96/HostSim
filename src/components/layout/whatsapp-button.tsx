'use client';

import { Button } from '@/components/ui/button';
import { WhatsAppIcon } from '@/components/icons';
import Link from 'next/link';

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
}

export function WhatsAppButton({ phoneNumber, message }: WhatsAppButtonProps) {
  const whatsappLink = `https://wa.me/${phoneNumber.replace(/\D/g, '')}${
    message ? `?text=${encodeURIComponent(message)}` : ''
  }`;

  return (
    <Button
      asChild
      size="icon"
      className="fixed bottom-4 left-4 z-50 h-12 w-12 rounded-full bg-[#25D366] text-white shadow-lg hover:bg-[#128C7E]"
    >
      <Link href={whatsappLink} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
        <WhatsAppIcon className="h-6 w-6" />
      </Link>
    </Button>
  );
}
