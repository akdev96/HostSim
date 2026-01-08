'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React, { useRef, useEffect } from 'react';

export function HeroSpark() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    const DPR = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
    const RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
    let W = 0, H = 0, last = performance.now();

    function resize() {
      const rect = canvas!.getBoundingClientRect();
      W = Math.floor(rect.width * DPR);
      H = Math.floor(rect.height * DPR);
      canvas!.width = W;
      canvas!.height = H;
      ctx!.setTransform(1, 0, 0, 1, 0, 0);
      ctx!.scale(DPR, DPR);
      if (RM) drawStatic();
    }
    
    window.addEventListener('resize', resize, { passive: true });
    resize();
    
    const stars: Star[] = [], starCount = 80, sparks: Spark[] = [], maxSparks = 200;
    
    class Star {
      x: number = 0;
      y: number = 0;
      r: number = 0;
      a: number = 0;
      pulse: number = 0;

      constructor() { this.reset(); }
      reset() { this.x = Math.random() * canvas!.clientWidth; this.y = Math.random() * canvas!.clientHeight; this.r = Math.random() * 1.8 + 0.4; this.a = Math.random() * 0.6 + 0.2; this.pulse = (Math.random() * 0.6 + 0.3) * (Math.random() < .5 ? -1 : 1); }
      step(dt: number) { this.a += this.pulse * dt * 0.6; if (this.a < 0.08 || this.a > 0.9) this.pulse *= -1; }
      draw() { const g = ctx!.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.r * 4); g.addColorStop(0, `rgba(80,181,255,${this.a})`); g.addColorStop(1, 'rgba(8,17,31,0)'); ctx!.fillStyle = g; ctx!.beginPath(); ctx!.arc(this.x, this.y, this.r * 4, 0, 6.283); ctx!.fill(); }
    }
    
    class Spark {
      x: number; y: number; vx: number; vy: number; life: number; hue: number; size: number; tail: [number, number][]; maxTail: number;
      constructor(x: number, y: number) { this.x = x; this.y = y; const ang = Math.random() * Math.PI * 2; const sp = Math.random() * 1.6 + 0.2; this.vx = Math.cos(ang) * sp; this.vy = Math.sin(ang) * sp; this.life = 1; this.hue = 190 + Math.random() * 40; this.size = Math.random() * 1.6 + 0.6; this.tail = []; this.maxTail = 8; }
      step(dt: number) { this.tail.push([this.x, this.y]); if (this.tail.length > this.maxTail) this.tail.shift(); this.x += this.vx * dt * 60; this.y += this.vy * dt * 60; this.vy += 0.01; this.vx *= 0.995; this.vy *= 0.995; this.life -= 0.018 * dt * 60; return this.life > 0 && this.x > -20 && this.y > -20 && this.x < canvas!.clientWidth + 20 && this.y < canvas!.clientHeight + 20; }
      draw() { ctx!.globalCompositeOperation = 'lighter'; for (let i = 1; i < this.tail.length; i++) { const [x1, y1] = this.tail[i - 1], [x2, y2] = this.tail[i]; ctx!.strokeStyle = `hsla(${this.hue},100%,70%,${0.08 * i})`; ctx!.lineWidth = Math.max(1, this.size * (i / this.tail.length)); ctx!.beginPath(); ctx!.moveTo(x1, y1); ctx!.lineTo(x2, y2); ctx!.stroke(); } ctx!.globalCompositeOperation = 'source-over'; ctx!.fillStyle = `hsla(${this.hue},100%,70%,${Math.max(0, this.life)})`; ctx!.beginPath(); ctx!.arc(this.x, this.y, this.size * 2, 0, 6.283); ctx!.fill(); }
    }

    for (let i = 0; i < starCount; i++) stars.push(new Star());

    let mouseX = canvas!.clientWidth / 2, mouseY = canvas!.clientHeight * 0.6, mouseSeen = false, spawnTicker = 0;
    
    function burst(x: number, y: number, n = 24) { for (let i = 0; i < n; i++) if (sparks.length < maxSparks) sparks.push(new Spark(x, y)); }
    
    const hero = canvas!.parentElement;
    const handleMouseMove = (e: MouseEvent) => { const r = canvas!.getBoundingClientRect(); mouseX = e.clientX - r.left; mouseY = e.clientY - r.top; mouseSeen = true; burst(mouseX, mouseY, 2); };
    const handleClick = (e: MouseEvent) => { const r = canvas!.getBoundingClientRect(); burst(e.clientX - r.left, e.clientY - r.top, 30); };
    const handleTouchMove = (e: TouchEvent) => { const t = e.touches[0]; if (!t) return; const r = canvas!.getBoundingClientRect(); mouseX = t.clientX - r.left; mouseY = t.clientY - r.top; mouseSeen = true; burst(mouseX, mouseY, 2); };
    const handleTouchStart = (e: TouchEvent) => { const t = e.touches[0]; if (!t) return; const r = canvas!.getBoundingClientRect(); burst(t.clientX - r.left, t.clientY - r.top, 24); };
    
    hero?.addEventListener('mousemove', handleMouseMove);
    hero?.addEventListener('click', handleClick);
    hero?.addEventListener('touchmove', handleTouchMove, { passive: true });
    hero?.addEventListener('touchstart', handleTouchStart, { passive: true });

    let animationFrameId: number;
    function loop(t: number) { const dt = Math.min(0.033, (t - last) / 1000); last = t; if (!RM) { ctx!.clearRect(0, 0, canvas!.clientWidth, canvas!.clientHeight); stars.forEach(s => { s.step(dt); s.draw(); }); spawnTicker += dt; if (spawnTicker > 0.05) { spawnTicker = 0; const x = mouseSeen ? mouseX + (Math.random() - 0.5) * 60 : (Math.random() * canvas!.clientWidth); const y = mouseSeen ? mouseY + (Math.random() - 0.5) * 40 : (canvas!.clientHeight * 0.35 + Math.random() * canvas!.clientHeight * 0.4); if (Math.random() < 0.8 && sparks.length < maxSparks) sparks.push(new Spark(x, y)); } for (let i = sparks.length - 1; i >= 0; i--) { const s = sparks[i]; if (!s.step(dt)) { sparks.splice(i, 1); continue; } s.draw(); } } animationFrameId = requestAnimationFrame(loop); }
    
    function drawStatic() { ctx!.clearRect(0, 0, canvas!.clientWidth, canvas!.clientHeight); stars.forEach(s => s.draw()); for (let i = 0; i < 30; i++) { const sp = new Spark(Math.random() * canvas!.clientWidth, Math.random() * canvas!.clientHeight * 0.8); sp.life = 0.4 + Math.random() * 0.6; sp.draw(); } }

    if (!RM) {
      animationFrameId = requestAnimationFrame(loop);
    } else {
      drawStatic();
    }
    
    return () => {
      window.removeEventListener('resize', resize);
      hero?.removeEventListener('mousemove', handleMouseMove);
      hero?.removeEventListener('click', handleClick);
      hero?.removeEventListener('touchmove', handleTouchMove);
      hero?.removeEventListener('touchstart', handleTouchStart);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section
      className="relative flex min-h-[55vh] max-h-[680px] items-center justify-center overflow-hidden border-b border-border/40 bg-[radial-gradient(1200px_520px_at_50%_20%,hsl(var(--secondary))_0%,hsl(var(--background))_65%,hsl(var(--background))_100%)]"
      aria-label="Sparkling banner"
    >
      <canvas ref={canvasRef} className="absolute inset-0 block h-full w-full" aria-hidden="true"></canvas>
      <div
        className="pointer-events-none absolute inset-[-10%] bg-[radial-gradient(800px_400px_at_50%_0%,hsla(var(--primary)/0.16),transparent_60%),radial-gradient(900px_520px_at_80%_20%,hsla(var(--accent)/0.18),transparent_65%),radial-gradient(700px_460px_at_20%_30%,hsla(var(--primary)/0.14),transparent_60%)] opacity-50 blur-xl"
        aria-hidden="true"
      ></div>
      <div className="animate-hero-up group relative z-10 mx-auto max-w-4xl p-6 text-center">
        <h1 className="text-4xl font-black tracking-tight sm:text-5xl md:text-6xl" style={{ animationDelay: '0.1s' }}>
          <span className="bg-gradient-to-b from-primary to-accent bg-clip-text text-transparent drop-shadow-sm">
            Host &amp; Network Simulations
          </span>
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground sm:text-xl" style={{ animationDelay: '0.2s' }}>
          Interactive, visual learning experiences for networking, systems,
          security, and cloud technologies. Learn by doing with real-time
          simulations.
        </p>
        <div className="mt-8 flex justify-center" style={{ animationDelay: '0.3s' }}>
            <Button size="lg" asChild>
                <Link href="#explore">Start Exploring</Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
