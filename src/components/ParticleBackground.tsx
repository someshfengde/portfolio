"use client";

export function ParticleBackground() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
      {/* Organic Gradient 1 */}
      <div
        className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full mix-blend-screen filter blur-[100px] opacity-20 animate-blob"
        style={{ background: "radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, rgba(0, 0, 0, 0) 70%)" }}
      />

      {/* Organic Gradient 2 */}
      <div
        className="absolute top-[20%] right-[-10%] w-[40%] h-[40%] rounded-full mix-blend-screen filter blur-[100px] opacity-20 animate-blob animation-delay-2000"
        style={{ background: "radial-gradient(circle, rgba(6, 182, 212, 0.4) 0%, rgba(0, 0, 0, 0) 70%)" }}
      />

      {/* Organic Gradient 3 */}
      <div
        className="absolute bottom-[-10%] left-[20%] w-[60%] h-[60%] rounded-full mix-blend-screen filter blur-[100px] opacity-10 animate-blob animation-delay-4000"
        style={{ background: "radial-gradient(circle, rgba(244, 114, 182, 0.3) 0%, rgba(0, 0, 0, 0) 70%)" }}
      />

      {/* Noise Texture Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />
    </div>
  );
}
