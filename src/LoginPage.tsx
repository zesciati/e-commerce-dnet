import { useState } from "react";
import { useNavigate } from "react-router-dom";
const LoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!username || !password) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 700));
    setLoading(false);
    navigate("/menucustomer");
  };
  return (
    <div
      style={{ fontFamily: "'DM Sans', sans-serif" }}
      className="min-h-screen bg-zinc-950 flex items-center justify-center px-6"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=DM+Mono:wght@400;500&display=swap');
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .fu-0 { animation: fadeUp 0.5s 0.0s ease both; }
        .fu-1 { animation: fadeUp 0.5s 0.1s ease both; }
        .fu-2 { animation: fadeUp 0.5s 0.2s ease both; }
        .fu-3 { animation: fadeUp 0.5s 0.3s ease both; }
        .fu-4 { animation: fadeUp 0.5s 0.4s ease both; }
      `}</style>
      <div className="w-full max-w-sm">
        {}
        <div className="fu-0 flex flex-col items-center mb-10">
          <p className="text-xs tracking-[0.3em] uppercase text-zinc-500 mb-1">
            Selamat datang
          </p>
          <h1 className="text-2xl font-semibold text-white">Masuk ke akun</h1>
        </div>
        {}
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="fu-1 flex flex-col gap-1">
            <label className="text-xs tracking-[0.15em] uppercase text-zinc-500">
              Username
            </label>
            <input
              type="text"
              placeholder="Masukkan username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-zinc-400 transition"
            />
          </div>
          <div className="fu-2 flex flex-col gap-1">
            <label className="text-xs tracking-[0.15em] uppercase text-zinc-500">
              Password
            </label>
            <input
              type="password"
              placeholder="Masukkan password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-zinc-400 transition"
            />
          </div>
          <div className="fu-3 flex items-center justify-between">
            <label className="flex items-center gap-2 cursor-pointer select-none">
              <span className="text-xs text-zinc-500">Ingat saya</span>
            </label>
            <button
              type="button"
              className="text-xs text-zinc-500 hover:text-zinc-300 transition"
            >
              Lupa password?
            </button>
          </div>
          <div className="fu-4">
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-white hover:bg-zinc-100 disabled:bg-zinc-800 disabled:text-zinc-500 text-zinc-950 font-medium text-sm py-3 rounded-xl transition mt-1"
            >
              {loading ? "Memproses..." : "Masuk"}
            </button>
          </div>
        </form>
        <p className="text-center text-xs text-zinc-700 mt-10">
          © 2025 Paket Data Internet
        </p>
      </div>
    </div>
  );
};
export default LoginPage;
