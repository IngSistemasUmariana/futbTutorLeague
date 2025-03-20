import { useState, useEffect } from 'react';

export const Statistics = () => {
  const topPlayers = [
    {
      role: "MVP",
      jornada: 1,
      name: "Miguel Enriquez",
      team: "Futboleros",
      img: "./player.png",
      logo: "./futboleros.png",
    },
    {
      role: "MÁXIMO GOLEADOR",
      name: "Miguel Enriquez",
      team: "Insanos FC",
      stat: "⚽  4 Goles",
      img: "./player.png",
      logo: "./futboleros.png",
    },
    {
      role: "MÁXIMO GOLEADOR",
      name: "Mauricio Lopez",
      team: "Teachers FC",
      stat: "⚽  4 Goles",
      img: "./player.png",
      logo: "./teachers.png",
    },
  ];

  const extraStats = [
    {
      title: "PARADAS",
      name: "Sebastian Carrera",
      team: "Teachers FC",
      statLabel: "🧤",
      statValue: 12,
      logo: "./teachers.png",
      img: "./arco.jpg",
    },
    {
      title: "TARJETAS",
      name: "Ninguno",
      team: "Ninguno",
      statLabel: ["🟨", "🟥"],
      statValue: [0, 0],
      logo: "./vite.svg",
      img: "./player.png",
    },
  ];

  // Dark/Light Toggle Hook
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return (
    <>
      {/* Theme Toggle Button */}
      <button
        onClick={() => setIsDark(!isDark)}
        className="fixed top-4 right-4 bg-gray-200 dark:bg-gray-800 text-black dark:text-white px-4 py-2 rounded shadow hover:scale-105 transition z-50"
      >
        {isDark ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </button>

      {/* Stats Section */}
      <div className="space-y-6 mt-16">
        {/* MVP / GOLEADOR */}
        {topPlayers.map((p, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-4 flex items-center gap-4 hover:bg-gray-100 dark:hover:bg-gray-800 transition transform hover:scale-[1.02] duration-200"
          >
            {/* Avatar */}
            <img
              src={p.img}
              alt={p.name}
              className="w-16 h-16 rounded-full object-cover border-2 border-yellow-400 hover:scale-105 transition-transform duration-200"
            />

            {/* Info */}
            <div className="flex-1 text-black dark:text-white">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold">{p.name}</span>
                  <span className="bg-yellow-400 text-black text-xs font-bold px-2 py-0.5 rounded">
                    {p.role}
                  </span>
                </div>
                <img
                  src={p.logo}
                  alt={p.team}
                  className="w-8 h-8 object-contain" // LOGO MÁS GRANDE AQUÍ
                />
              </div>

              {p.stat && (
                <div className="text-xs bg-gray-200 dark:bg-gray-800 rounded-full px-3 py-1 w-fit mt-2 text-center">
                  {p.stat}
                </div>
              )}
              {p.jornada && (
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  Jornada {p.jornada}
                </div>
              )}
            </div>
          </div>
        ))}

        {/* PARADAS / TARJETAS */}
        {extraStats.map((p, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-4 flex items-center gap-4 hover:bg-gray-100 dark:hover:bg-gray-800 transition transform hover:scale-[1.02] duration-200"
          >
            {/* Avatar */}
            <img
              src={p.img}
              alt={p.name}
              className="w-20 h-20 rounded-full object-cover border-2 border-blue-400 hover:scale-105 transition-transform duration-200"
            />

            {/* Info */}
            <div className="flex-1 text-black dark:text-white">
              <div className="flex justify-between items-center mb-1">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold">{p.name}</span>
                  <span className="bg-blue-400 text-black text-xs font-bold px-2 py-0.5 rounded">
                    {p.title}
                  </span>
                </div>
                <img
                  src={p.logo}
                  alt={p.team}
                  className="w-8 h-8 object-contain" // LOGO MÁS GRANDE AQUÍ
                />
              </div>

              {typeof p.statValue === "number" ? (
                <div className="text-xs bg-gray-200 dark:bg-gray-800 rounded-full px-3 py-1 w-fit mt-1 text-center">
                  {p.statLabel} {p.statValue}
                </div>
              ) : (
                <div className="flex gap-2 mt-1">
                  <span className="text-yellow-400 bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded-full text-xs">
                    🟨 {p.statValue[0]}
                  </span>
                  <span className="text-red-500 bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded-full text-xs">
                    🟥 {p.statValue[1]}
                  </span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
