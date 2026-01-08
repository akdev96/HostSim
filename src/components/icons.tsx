import { type SVGProps } from "react";

export function DiscordIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.878h-2.54v-2.89h2.54v-2.14c0-2.505 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.89h-2.33v6.878A10.003 10.003 0 0 0 12 22z" />
    </svg>
  );
}

export function WhatsAppIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path
        d="M16.75 13.96c.25.13.43.2.5.28.08.08.16.18.18.25.02.07.03.18.03.28.0 1.4-1.54 2.5-1.78 2.5s-.5-.13-1.08-.33c-1.25-.43-2.1-.93-2.8-1.55-.8-.7-1.4-1.5-1.9-2.4-1.1-2.1-1.28-3.38.28-4.5.38-.28.73-.42.94-.42s.4.12.58.22c.18.1.3.22.42.48.12.25.14.48.04.73-.09.25-.22.53-.32.65-.1.13-.2.25-.28.37.5.85 1.3 1.63 2.18 2.12.2-.1.38-.18.5-.28.13-.1.25-.22.38-.32.25-.22.5-.25.75-.12.25.13.43.2.5.28zM12 2a10 10 0 0 0-10 10c0 5.52 4.48 10 10 10 1.76 0 3.4-.48 4.82-1.28l3.18 1.28-1.28-3.18C19.52 15.4 20 13.76 20 12A10 10 0 0 0 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
        fill="currentColor"
      />
    </svg>
  );
}
