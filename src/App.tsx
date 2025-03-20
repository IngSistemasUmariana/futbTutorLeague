import { About } from "./components/About";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Sponsors } from "./components/Sponsors";
import { MatchCard } from "./components/MatchCard";
import "./App.css";
import { useRef } from 'react';

function App() {
  const scrollRef = useRef(null);
  const matches = [
    {
      date: 'Martes, 18 de marzo',
      time: '9:00',
      team1: { name: 'Futboleros', logo: './futboleros.png' },
      team2: { name: 'Teacher ', logo: './teachers.png' },
      score1: 7,
      score2: 6,
    },
    
    {
      date: 'Viernes, 21 de marzo',
      time: '11:00',
      team1: { name: '404 Not Found', logo: './404notfound.png' },
      team2: { name: 'Real Makari', logo: './RealMakari.png' },
      score1: null,
      score2: null,
    },
    {
      date: 'Martes, 25 de marzo',
      time: '09:30',
      team1: { name: 'Insanos', logo: './insanos.png' },
      team2: { name: 'Ingeniebrios FC', logo: './ingeniebrios.png' },
      score1: null,
      score2: null,
    },
    {
      date: 'Jueves, 27 de marzo',
      time: '10:00',
      team1: { name: 'Los Volcanicos', logo: './volcanicos.png' },
      team2: { name: 'Sporting GPT', logo: './sportingpt.png' },
      score1: null,
      score2: null,
    },
    {
      date: 'Viernes, 28 de marzo',
      time: '15:00',
      team1: { name: 'Atletico Netbeans', logo: './atleticNetbans.png' },
      team2: { name: 'Furia FC', logo: './furia.png' },
      score1: null,
      score2: null,
    },
  ];
  
  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  
  return (
    <>
    
      <Navbar />
      <div className="relative p-6 bg-black">
      {/* Flechas */}
      <button
        onClick={scrollLeft}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white rounded-full p-2 hover:bg-gray-600 z-10"
      >
        ←
      </button>

      <button
        onClick={scrollRight}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white rounded-full p-2 hover:bg-gray-600 z-10"
      >
        →
      </button>

      {/* Carrusel */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto no-scrollbar scroll-smooth"
        style={{ scrollBehavior: 'smooth' }}
      >
        {matches.map((match, index) => (
          <MatchCard key={index} {...match} />
        ))}
      </div>

      {/* Estilo para ocultar scrollbar */}
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>

      <Hero />
      <Sponsors />
      <About />
      <Footer/>
    </>
  );
}

export default App;
