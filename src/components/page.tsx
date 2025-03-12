import { FC } from "react";
import PricingSection from "./sections/section-pricing";

interface IHomeProps {}

export const Home: FC<IHomeProps> = () => {
  return (
    <div className="flex h-full min-h-[100dvh] w-full flex-col items-center justify-start gap-12 px-4 sm:px-8 md:px-12">
      {/* HERO SECTION */}
      <main
        id="home"
        className="relative mb-24 flex h-[50dvh] w-full max-w-screen-xl flex-col items-center justify-center rounded-xl bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/img/bees-hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-transparent to-[var(--background)]/20"></div>
        <div className="absolute inset-0 top-[95%] left-1/2 flex h-[140px] w-[90%] max-w-[500px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-xl bg-[var(--foreground)] p-4 shadow-lg">
          <h1 className="relative z-10 text-center text-xl font-bold text-white sm:text-2xl md:text-3xl">
            Bees Education
          </h1>
          <p className="relative z-10 text-center text-sm text-white sm:text-base">
            Learning isn&apos;t a chore, it's a lifestyle!
          </p>
          <a
            className="mt-2 rounded-full bg-[var(--background)] px-4 py-1"
            target="_blank"
            href="https://drive.google.com/file/d/1Fr2TocdkDfXmRSOvn0B7jPxfYWy7TDXA/view"
          >
            See Details
          </a>
        </div>
      </main>

      {/* ABOUT SECTION */}
      <section
        className="flex w-full max-w-screen-xl flex-wrap items-center justify-center gap-6 sm:gap-12"
        id="about"
      >
        <div
          className="h-[250px] w-full rounded-xl bg-cover bg-center sm:h-[300px] sm:w-1/2"
          style={{ backgroundImage: "url('/assets/img/bees-about.jpeg')" }}
        />
        <div className="flex w-full flex-col items-center justify-start gap-4 rounded-xl bg-[var(--foreground)] p-4 text-center text-[var(--background)] sm:w-1/2">
          <h2 className="text-2xl font-bold sm:text-3xl">About Us</h2>
          <p className="text-sm sm:text-base">
            Bees is not just a tutoring place, but a fun and exciting learning
            community! we present a flexible and interactive learning
            experience. without the limitations of a boring classroom. Learning
            a new language? Learning a new Sport? Learn it at Bees!
          </p>
        </div>
      </section>

      {/* ADVANTAGES SECTION */}
      <section
        className="flex w-full max-w-screen-xl flex-wrap items-center justify-center gap-6 sm:gap-12"
        id="advantages"
      >
        <div className="flex w-full flex-col items-center justify-start gap-4 rounded-xl bg-[var(--foreground)] p-4 py-8 text-center text-[var(--background)]">
          <h2 className="text-2xl font-bold sm:text-3xl">Advantages</h2>
          <ul>
            <li>Flexible</li>
            <li>Interactive</li>
            <li>Affordable</li>
          </ul>
        </div>
      </section>

      {/* PRICING SECTION */}
      <PricingSection />
    </div>
  );
};
