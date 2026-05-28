import Button from "../buttons/Button";
import useScrollReveal from "../../hooks/useScrollReveal";
import { Link } from "react-router-dom";

export default function HeroSection() {
  const { elementRef, isVisible } = useScrollReveal();

  return (
    <section className="pt-28 px-4 sm:px-6 lg:px-8">
      <div
        ref={elementRef}
        className={`max-w-7xl mx-auto rounded-3xl bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white px-6 sm:px-10 lg:px-16 py-16 sm:py-20 lg:py-28 scroll-reveal ${
          isVisible ? "scroll-reveal-visible" : ""
        }`}
      >
        <div className="max-w-4xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Financial Intelligence for Smarter Banking Decisions
          </h1>

          <p className="mt-6 max-w-2xl text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed">
            Real-time analytics on transactions, branch performance, customer behavior,
            and operational risk.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link to="/dashboard">
              <Button>Launch Dashboard</Button>
            </Link>

            <Button variant="secondary">Explore KPIs</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
