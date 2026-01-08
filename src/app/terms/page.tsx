export default function TermsOfServicePage() {
  return (
    <div className="container py-12 md:py-20">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight">
            Terms of Service
          </h1>
          <p className="mt-2 text-muted-foreground">
            Last Updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        <div className="prose prose-lg dark:prose-invert mx-auto mt-12 space-y-6 text-muted-foreground">
          <h2 className="text-2xl font-semibold text-foreground">1. Agreement to Terms</h2>
          <p>
            By using our services, you agree to be bound by these Terms of
            Service. If you do not agree to these Terms, do not use the
            services. We may modify the Terms at any time, and such
            modifications shall be effective immediately upon posting.
          </p>

          <h2 className="text-2xl font-semibold text-foreground">2. Use of Services</h2>
          <p>
            You agree to use our services for educational purposes only and in
            compliance with all applicable laws. You may not use our services
            to engage in any illegal activity or to violate the rights of
            others. The simulations are provided for learning and demonstration
            purposes and should not be used for production systems.
          </p>
          
          <h2 className="text-2xl font-semibold text-foreground">3. AI-Generated Content</h2>
          <p>
            Our services may include features that generate content using artificial intelligence, such as the AI Code Tutor. While we strive to provide accurate and helpful feedback, the AI-generated content may contain errors or inaccuracies. You should not rely on this content as a sole source of truth and should always verify the information. We are not liable for any damages or losses arising from your use of or reliance on AI-generated content.
          </p>

          <h2 className="text-2xl font-semibold text-foreground">4. Intellectual Property</h2>
          <p>
            The service and its original content, features, and functionality
            are and will remain the exclusive property of HostSim and its
            licensors. Our trademarks and trade dress may not be used in
            connection with any product or service without the prior written
            consent of HostSim.
          </p>

          <h2 className="text-2xl font-semibold text-foreground">5. Disclaimer of Warranty</h2>
          <p>
            Our services are provided "as is" and "as available" without any
            warranties of any kind, either express or implied, including, but
            not limited to, the implied warranties of merchantability, fitness
            for a particular purpose, or non-infringement.
          </p>

          <h2 className="text-2xl font-semibold text-foreground">6. Limitation of Liability</h2>
          <p>
            In no event shall HostSim, nor its directors, employees, partners,
            agents, suppliers, or affiliates, be liable for any indirect,
            incidental, special, consequential or punitive damages, including
            without limitation, loss of profits, data, use, goodwill, or other
            intangible losses, resulting from your access to or use of or
            inability to access or use the service.
          </p>

          <h2 className="text-2xl font-semibold text-foreground">7. Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at:
            <a href="mailto:legal@hostsim.com" className="text-primary hover:underline">legal@hostsim.com</a>
          </p>
        </div>
      </div>
    </div>
  );
}
