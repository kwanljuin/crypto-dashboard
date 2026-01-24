'use client';

export const MainBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-black">
      {/* Subtle Dark Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0A0A0A]" />

      {/* Noise Overlay for texture */}
      <div className="absolute inset-0 noise-overlay opacity-[0.03]" />
    </div>
  );
};
