import { FC } from "react";
interface IHomeProps {}

export const Home: FC<IHomeProps> = (props) => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-start">
      <main id="home">
        <h1 className="text-3xl font-bold">Bees Education</h1>
     <p>Learning ain't a chore, it's a lifestyle!</p>
      </main>
    </div>
  );
};
