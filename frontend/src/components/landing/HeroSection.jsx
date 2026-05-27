import Button from "../buttons/Button";

export default function HeroSection() {
  return (
    <section className="pt-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto rounded-3xl bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white px-6 sm:px-10 lg:px-16 py-16 sm:py-20 lg:py-28">
        
        {/* Wrapper fade-in */}
        <div className="max-w-4xl animate-fadeIn">
          
          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl font-bold animate-fadeInUp">
            Financial Intelligence for Smarter Banking Decisions
          </h1>

          {/* Subtext */}
          <p className="mt-4 text-lg text-slate-300 max-w-2xl animate-fadeInUp [animation-delay:0.15s]">
            Real-time analytics on transactions, branch performance, customer behavior,
            and operational risk.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4 animate-fadeInUp [animation-delay:0.3s]">
            <Button>Launch Dashboard</Button>
            <Button variant="secondary">Explore KPIs</Button>
          </div>

        </div>
      </div>
    </section>
  );
}
