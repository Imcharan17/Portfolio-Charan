import React from "react";

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#050a1d]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(34,211,238,0.15),transparent_27%),radial-gradient(circle_at_85%_20%,rgba(139,92,246,0.15),transparent_25%),radial-gradient(circle_at_50%_90%,rgba(16,185,129,0.08),transparent_28%)]" />
      <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.8)_1px,transparent_1px)] [background-size:48px_48px]" />
      <div className="absolute -left-36 top-1/4 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="absolute -right-36 bottom-1/4 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl" />
    </div>
  );
}
