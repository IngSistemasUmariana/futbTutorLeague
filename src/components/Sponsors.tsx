import { useState } from "react";
import { motion } from "framer-motion";

interface SponsorProps {
  imageUrl: string;
  name: string;
}

const sponsors: SponsorProps[] = [
  { imageUrl: "./furia.png", name: "Semestre 1" },
  { imageUrl: "./futboleros.png", name: "Semestre 2" },
  { imageUrl: "./atleticNetbans.png", name: "Semestre 3" },
  { imageUrl: "./404notfound.png", name: "Semestre 4" },
  { imageUrl: "./insanos.png", name: "Semestre 5" },
  { imageUrl: "./volcanicos.png", name: "Semestre 6" },
  { imageUrl: "./sportingpt.png", name: "Semestre 7" },
  { imageUrl: "./RealMakari.png", name: "Semestre 8" },
  { imageUrl: "./ingeniebrios.png", name: "Semestre 9" },
  { imageUrl: "./teachers.png", name: "Docentes" }
];

export const Sponsors = () => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section id="logos" className="w-full bg-gradient-to-r from-black via-gray-900 to-green-800 py-16 flex justify-center">
      <div className="w-full max-w-6xl">
        {/* Scrollable horizontal layout for mobile */}
        <div className="flex md:hidden overflow-x-auto gap-4 px-4">
          {sponsors.map(({ imageUrl, name }) => (
            <motion.div
              key={name}
              onClick={() => setSelected(name)}
              className={`min-w-[150px] flex-shrink-0 flex flex-col items-center p-4 rounded-xl shadow-lg cursor-pointer transition-all duration-200
                ${
                  selected === name
                    ? "bg-white/20 scale-105 shadow-2xl border border-green-400 ring-2 ring-green-400"
                    : "bg-white/10 backdrop-blur-lg hover:bg-white/15 hover:shadow-lg"
                }
              `}
              whileHover={{ scale: selected === name ? 1.08 : 1.03 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src={imageUrl}
                alt={name}
                className={`w-20 h-20 object-contain rounded-lg transition-all duration-200 ${
                  selected === name ? "brightness-150 drop-shadow-[0_0_12px_#32ff7e]" : "brightness-50"
                }`}
              />
              <span
                className={`mt-2 text-base font-bold transition-all duration-200 ${
                  selected === name ? "text-white" : "text-gray-400"
                }`}
              >
                {name}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Grid layout for medium and larger screens */}
        <div className="hidden md:grid grid-cols-3 lg:grid-cols-5 gap-6 justify-center px-4 mt-6 md:mt-0">
          {sponsors.map(({ imageUrl, name }) => (
            <motion.div
              key={name}
              onClick={() => setSelected(name)}
              className={`flex flex-col items-center p-6 rounded-xl shadow-lg cursor-pointer transition-all duration-200
                ${
                  selected === name
                    ? "bg-white/20 scale-110 shadow-2xl border border-green-400 ring-2 ring-green-400"
                    : "bg-white/10 backdrop-blur-lg hover:bg-white/15 hover:shadow-lg"
                }
              `}
              whileHover={{ scale: selected === name ? 1.12 : 1.05 }}
              whileTap={{ scale: 0.90 }}
            >
              <img
                src={imageUrl}
                alt={name}
                className={`w-24 h-24 object-contain rounded-lg transition-all duration-200 ${
                  selected === name ? "brightness-150 drop-shadow-[0_0_12px_#32ff7e]" : "brightness-50"
                }`}
              />
              <span
                className={`mt-3 text-lg font-bold transition-all duration-200 ${
                  selected === name ? "text-white" : "text-gray-400"
                }`}
              >
                {name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
