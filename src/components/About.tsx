import { Statistics } from "./Statics";
import { Leaderboard } from "./Leaderboard";


export const About = () => {
  return (
    <section id="about" className="container py-24 sm:py-32">
      <div className="bg-muted/50 border rounded-lg py-12 px-6">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Leaderboard Section */}
          <div className="lg:w-1/3 w-full">
            <h3 className="text-xl font-bold mb-4 text-center lg:text-left">CLASIFICACIÓN</h3>
            <Leaderboard />
          </div>

          {/* Statistics Section */}
          <div className="lg:w-2/3 w-full flex flex-col gap-6">
            <h3 className="text-xl font-bold text-center lg:text-left">ESTADÍSTICAS</h3>
            <Statistics />
          </div>
        </div>
      </div>
    </section>
  );
};
