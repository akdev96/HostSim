export default function PrivacyPolicyPage() {
  return (
    <div className="container py-12 md:py-20">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight">Privacy Policy</h1>
          <p className="mt-2 text-muted-foreground">
            Last Updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        <div className="prose prose-lg dark:prose-invert mx-auto mt-12 space-y-6 text-muted-foreground">
          <p>
            Welcome to HostSim ("we," "our," or "us"). We are committed to
            protecting your privacy. This Privacy Policy explains how we
            collect, use, disclose, and safeguard your information when you use
            our website and services.
          </p>

          <h2 className="text-2xl font-semibold text-foreground">1. Information We Collect</h2>
          <p>
            We may collect information about you in a variety of ways. The
            information we may collect on the Site includes:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Personal Data:</strong> Personally identifiable
              information, such as your name, shipping address, email address,
              and telephone number, that you voluntarily give to us when you
              register with the Site or when you choose to participate in
              various activities related to the Site.
            </li>
            <li>
              <strong>Derivative Data:</strong> Information our servers
              automatically collect when you access the Site, such as your IP
              address, your browser type, your operating system, your access
              times, and the pages you have viewed directly before and after
              accessing the Site.
            </li>
             <li>
              <strong>Usage Data:</strong> We may collect information about your interactions with our simulations, including the configurations you input and the feedback you receive. This data is used to improve our AI tutor and simulation experiences.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-foreground">2. How We Use Your Information</h2>
          <p>
            Having accurate information about you permits us to provide you with
            a smooth, efficient, and customized experience. Specifically, we may
            use information collected about you via the Site to:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Create and manage your account.</li>
            <li>Email you regarding your account or order.</li>
            <li>Improve our website and service offerings.</li>
            <li>Monitor and analyze usage and trends to improve your experience.</li>
             <li>Generate anonymized, aggregate data for research and service improvement.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-foreground">3. Disclosure of Your Information</h2>
          <p>
            We may share information we have collected about you in certain
            situations. Your information may be disclosed as follows:
          </p>
           <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>By Law or to Protect Rights:</strong> If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others.
            </li>
             <li>
              <strong>Third-Party Service Providers:</strong> We may share your information with third parties that perform services for us or on our behalf, including data analysis, email delivery, hosting services, and customer service.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-foreground">4. Security of Your Information</h2>
          <p>
            We use administrative, technical, and physical security measures to
            help protect your personal information. While we have taken
            reasonable steps to secure the personal information you provide to
            us, please be aware that despite our efforts, no security measures
            are perfect or impenetrable.
          </p>

          <h2 className="text-2xl font-semibold text-foreground">5. Contact Us</h2>
          <p>
            If you have questions or comments about this Privacy Policy, please
            contact us at: <a href="mailto:privacy@hostsim.com" className="text-primary hover:underline">privacy@hostsim.com</a>
          </p>
        </div>
      </div>
    </div>
  );
}
