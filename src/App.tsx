import { About } from "./components/About";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Sponsors } from "./components/Sponsors";
import { MatchCard } from "./components/MatchCard";
import { motion } from "framer-motion";
import "./App.css";

function App() {
  const matches = [
  /*{
      date: 'Martes, 18 de marzo',
      time: '9:00',
      team1: { name: 'Futboleros', logo: './futboleros.png' },
      team2: { name: 'Teacher', logo: './teachers.png' },
      score1: 7,
      score2: 6,
    },
    {
      date: 'Viernes, 21 de marzo',
      time: '11:00',
      team1: { name: '404 NF', logo: './404notfound.png' },
      team2: { name: 'R Makari', logo: './RealMakari.png' },
      score1: 8,
      score2: 5,
    },
    {
      date: 'Martes, 25 de marzo',
      time: '09:30',
      team1: { name: 'Insanos', logo: './insanos.png' },
      team2: { name: 'Ingeniebrios', logo: './ingeniebrios.png' },
      score1: 5,
      score2: 2,
    },
    {
      date: 'Jueves, 27 de marzo',
      time: '10:00',
      team1: { name: 'Los Volcanicos', logo: './volcanicos.png' },
      team2: { name: 'Sporting GPT', logo: './sportingpt.png' },
      score1: 2,
      score2: 5,
    },
    {
      date: 'Jueves, 27 de marzo',
      time: '13:00',
      team1: { name: 'Atletico Netbeans', logo: './atleticNetbans.png' },
      team2: { name: 'Furia FC', logo: './furia.png' },
      score1: 2,
      score2: 2,
    },*/ 
    {
      date: "Fecha ❓",
      time: "❓",
      team1: { name: "404 NF ", logo: "./404notfound.png" },
      team2: { name: "Real Makari", logo: "./RealMakari.png" },
      score1: null,
      score2: null,
    },
    {
      date: "Fecha ❓",
      time: "❓",
      team1: { name: "Insanos FC", logo: "./insanos.png" },
      team2: { name: "Teachers FC", logo: "./teachers.png" },
      score1: null,
      score2: null,
    },
    {
      date: "Fecha ❓",
      time: "❓",
      team1: { name: "Sporting GPT", logo: "./sportingpt.png" },
      team2: { name: "Furia", logo: "./furia.png" },
      score1: null,
      score2: null,
    },
    {
      date: "Fecha ❓",
      time: "❓",
      team1: { name: "Futboleros", logo: "./futboleros.png" },
      team2: { name: "Atl Netbeans", logo: "./atleticNetbans.png" },
      score1: null,
      score2: null,
    },
  ];

  return (
    <>
      <Navbar />

<h2 className="text-yellow-400 text-4xl font-bold text-center my-4 flex items-center justify-center gap-3">
  <motion.span
    initial={{ scale: 0 }}
    animate={{ scale: 1.2 }}
    transition={{ type: "spring", stiffness: 200, damping: 10 }}
  >
    🏆
  </motion.span>
  
  <motion.span
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    whileHover={{ scale: 1.1, rotate: 3 }}
  >
    2nd Round 🎉
  </motion.span>

  <motion.span
    initial={{ scale: 0 }}
    animate={{ scale: 1.2 }}
    transition={{ type: "spring", stiffness: 200, damping: 10, delay: 0.2 }}
  >
    🏆
  </motion.span>
</h2>

      <div className="p-6 bg-black flex flex-wrap justify-center gap-4">
      
        {matches.map((match, index) => (
          <MatchCard key={index} {...match} />
        ))}
      </div>
      <Hero />
      <Sponsors />
      <About />
      <Footer />
    </>
  );
}

export default App;
