"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock } from "lucide-react";

export default function AdminLoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(false);
    setLoading(true);

    setTimeout(() => {
      if (username === "admin" && password === "password") {
        router.push("/admin/dashboard");
      } else {
        setError(true);
        setLoading(false);
      }
    }, 600);
  }

  return (
    <div className="min-h-screen bg-dark flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        {/* Brand */}
        <div className="text-center mb-10">
          <p className="font-display font-bold text-3xl text-ink mb-1">Big Fish</p>
          <p className="text-[10px] tracking-[0.3em] text-gold">ADMIN PORTAL</p>
        </div>

        {/* Card */}
        <div className="bg-[#0c0c0c] border border-white/[0.07] p-8">
          <div className="flex items-center gap-2 mb-6">
            <Lock size={13} className="text-dim" />
            <p className="text-[10px] tracking-widest text-dim">SIGN IN TO CONTINUE</p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-[9px] tracking-widest text-dim">USERNAME</label>
              <input
                type="text"
                autoComplete="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="admin"
                className="w-full bg-dark border border-white/10 text-ink text-sm px-3 py-2.5 placeholder:text-dim/40 focus:outline-none focus:border-gold/60 transition-colors"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[9px] tracking-widest text-dim">PASSWORD</label>
              <input
                type="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-dark border border-white/10 text-ink text-sm px-3 py-2.5 placeholder:text-dim/40 focus:outline-none focus:border-gold/60 transition-colors"
              />
            </div>

            {error && (
              <p className="text-[11px] text-red-400 tracking-wide">
                Incorrect username or password.
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gold text-dark text-[11px] font-bold tracking-widest py-3.5 hover:bg-gold/90 transition-colors mt-1 disabled:opacity-60"
            >
              {loading ? "SIGNING IN…" : "SIGN IN →"}
            </button>
          </form>
        </div>

        <p className="text-center text-[10px] text-dim/40 mt-6">
          Big Fish Golf · Admin Portal · Demo
        </p>
      </div>
    </div>
  );
}
