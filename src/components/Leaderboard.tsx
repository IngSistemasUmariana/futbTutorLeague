import { useState, useEffect } from 'react';

export const Leaderboard = () => {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });


  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes fade-in {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .animate-fade-in {
        animation: fade-in 0.5s ease forwards;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  // 📝 Nuevas estadísticas: gf = goles a favor, gc = goles en contra, pg = partidos ganados
   // 📝 Nuevas estadísticas: gf = goles a favor, gc = goles en contra, pg = partidos ganados
   const rawTeams = [
    { name: "404 Not Found", logo: "./404notfound.png", pts: 3, pj: 1, pg: 1, gf: 8, gc: 5, color: "border-green-500" },
    { name: "Insanos FC", logo: "./insanos.png", pts: 3, pj: 1, pg: 1, gf: 5, gc: 2, color: "border-green-500" },
    { name: "Sporting GPT", logo: "./sportingpt.png", pts: 3, pj: 1, pg: 1, gf: 5, gc: 2, color: "border-green-500" },
    { name: "Futboleros", logo: "./futboleros.png", pts: 3, pj: 1, pg: 1, gf: 7, gc: 6, color: "border-green-500" },
    { name: "Atletic Netbans", logo: "./atleticNetbans.png", pts: 1, pj: 1, pg: 0, gf: 2, gc: 2, color: "border-green-500" },
    { name: "Furia", logo: "./furia.png", pts: 0, pj: 1, pg: 0, gf: 2, gc: 2, color: "border-green-500" },
    { name: "Docentes FC", logo: "./teachers.png", pts: 0, pj: 1, pg: 0, gf: 6, gc: 7, color: "border-green-500" },
    { name: "Real Makari", logo: "./RealMakari.png", pts: 0, pj: 1, pg: 0, gf: 5, gc: 8, color: "border-green-500" },
    { name: "Ingeniebrios", logo: "./ingeniebrios.png", pts: 0, pj: 1, pg: 0, gf: 2, gc: 5, color: "border-red-300" },
    { name: "Volcánicos", logo: "./volcanicos.png", pts: 0, pj: 1, pg: 0, gf: 2, gc: 5, color: "border-red-300" },
  ];

  // 💻 Calculamos DG = GF - GC y ordenamos
  const sortedTeams = rawTeams
    .map(team => ({
      ...team,
      dg: team.gf - team.gc,
    }))
    .sort((a, b) => b.pts - a.pts || b.dg - a.dg)
    .map((team, index) => ({ ...team, pos: index + 1 }));

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsDark(!isDark)}
        className="fixed top-4 right-4 bg-gray-200 dark:bg-gray-800 text-black dark:text-white px-4 py-2 rounded shadow hover:scale-105 transition z-50"
      >
        {isDark ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </button>

      {/* Leaderboard */}
      <div className="bg-white dark:bg-gradient-to-br dark:from-black dark:via-gray-900 dark:to-black p-4 rounded-2xl shadow-xl text-black dark:text-white mt-16 max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-extrabold">CLASIFICACIÓN</h3>
          <span className="text-sm text-yellow-500 cursor-pointer hover:underline">Ver más</span>
        </div>

        {/* Headers */}
        <div className="grid grid-cols-10 text-xs font-bold text-gray-500 dark:text-gray-400 border-b border-gray-300 dark:border-gray-700 pb-2 mb-2">
          <span className="col-span-1">POS</span>
          <span className="col-span-4">Equipo</span>
          <span className="col-span-1 text-center">PTS</span>
          <span className="col-span-1 text-center">PJ</span>
          <span className="col-span-1 text-center">PG</span>
          <span className="col-span-1 text-center">GF</span>
          <span className="col-span-1 text-center">GC</span>
          <span className="col-span-1 text-center">DG</span>
        </div>

        {/* Teams */}
        {sortedTeams.map((team, idx) => (
          <div
            key={team.name}
            className={`grid grid-cols-10 items-center bg-gray-100 dark:bg-gray-800/30 hover:bg-gray-200 dark:hover:bg-gray-700/40 rounded-xl p-2 mb-2 transition-all border-l-4 ${team.color} animate-fade-in`}
            style={{ animationDelay: `${idx * 100}ms`, animationFillMode: 'both' }}
          >
            <span className="col-span-1 font-extrabold text-lg text-yellow-500">{team.pos}</span>
            <div className="col-span-4 flex items-center gap-2">
              <img
                src={team.logo}
                alt={team.name}
                className="w-10 h-10 rounded-full object-cover border border-gray-400"
              />
              <span className="font-medium text-sm">{team.name}</span>
            </div>
            <span className="col-span-1 text-center text-green-500 font-bold">{team.pts}</span>
            <span className="col-span-1 text-center">{team.pj}</span>
            <span className="col-span-1 text-center">{team.pg}</span>
            <span className="col-span-1 text-center">{team.gf}</span>
            <span className="col-span-1 text-center">{team.gc}</span>
            <span className="col-span-1 text-center text-blue-500">{team.dg}</span>
          </div>
        ))}
      </div>
    </>
  );
};
