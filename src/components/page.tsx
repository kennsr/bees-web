import { FC } from "react";

interface IHomeProps {}

export const Home: FC<IHomeProps> = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-start">
      <main
        id="home"
        className="relative flex h-[50dvh] w-full flex-col items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/img/bees-hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>{" "}
        {/* Optional overlay for readability */}
        <h1 className="relative z-10 text-3xl font-bold text-white">
          Bees Education
        </h1>
        <p className="relative z-10 text-white">
          Learning ain't a chore, it's a lifestyle!
        </p>
      </main>
      <section
        className="flex flex-col items-center justify-start p-4"
        id="about"
      >
        <h2 className="text-3xl font-bold">About Us</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat
          distinctio id accusamus accusantium, qui veniam porro consectetur, et
          molestias pariatur voluptatum hic ipsa mollitia explicabo neque
          ratione aliquam expedita autem earum dolores dicta? Dolorem obcaecati
          deserunt quae hic quibusdam a placeat repudiandae alias nostrum minima
          harum recusandae eaque, aliquid dolores!
        </p>
      </section>
    </div>
  );
};
