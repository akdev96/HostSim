import CodeTutor from "./code-tutor";

export default function DhcpSimulationPage() {
  return (
    <div className="container py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight text-center">DHCP DORA Visualizer</h1>
        <p className="mt-4 text-lg text-muted-foreground text-center">
          Let's simulate a DHCP server configuration. Below, provide a simple configuration for a DHCP scope. Our AI tutor will provide feedback on your configuration.
        </p>

        <div className="mt-12">
            <CodeTutor />
        </div>
      </div>
    </div>
  );
}
