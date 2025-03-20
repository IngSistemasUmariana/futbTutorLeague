import React from 'react';

export const MatchCard = ({ date, time, team1, team2, score1, score2 }) => {
    return (
      <div className="bg-gray-900 text-white rounded-xl p-4 w-72 shrink-0 shadow-lg flex flex-col gap-4 mx-2">
        {/* Fecha y hora */}
        <div className="flex justify-between items-center border-b border-gray-700 pb-2 text-sm text-gray-400">
          <div>{date}</div>
          <div>{time} COL</div>
        </div>
  
        {/* Equipos y resultado */}
        <div className="flex items-center justify-between">
          {/* Equipo 1 */}
          <div className="flex items-center gap-2">
            <img src={team1.logo} alt={team1.name} className="w-8 h-8 rounded-full border border-gray-600" />
            <span className="text-sm font-semibold">{team1.name}</span>
          </div>
  
          {/* Resultado */}
          <div className="text-lg font-bold text-yellow-400">
            {score1 !== null && score2 !== null ? `${score1} - ${score2}` : '-'}
          </div>
  
          {/* Equipo 2 */}
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold">{team2.name}</span>
            <img src={team2.logo} alt={team2.name} className="w-8 h-8 rounded-full border border-gray-600" />
          </div>
        </div>
      </div>
    );
  };
  