import Header from "./components/layout/Header";
import Entry from "./components/general/Entry";
import Storytex from "./components/projects/Storytex";
import Frontend from "./components/projects/Frontend";
import Backend from "./components/projects/Backend";
import OneByOne from "./components/projects/OneByOne";

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <Header />
      <Entry />

      {/* Projects Section Header */}
      <section className="relative bg-neutral-950 py-16 sm:py-20">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center gap-6 sm:gap-8 md:gap-12">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white to-white max-w-xs sm:max-w-sm md:max-w-md" />
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white whitespace-nowrap">
              Projects
            </h2>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent via-white to-white max-w-xs sm:max-w-sm md:max-w-md" />
          </div>
        </div>
      </section>


      <Storytex />
      <Frontend />
      <Backend />
      <OneByOne />
    </div>
  );
}

export default App;
