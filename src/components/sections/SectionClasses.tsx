"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { classes } from "@/constants/class.const";
import { formatCurrency } from "@/utils/format-currency";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
const ClassSection = () => {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);
  const router = useRouter();

  useEffect(() => {
    if (!api) {
      return;
    }

    const handleSelect = () => {
      // @ts-expect-error typing
      setCurrent(api.selectedScrollSnap());
    };

    // @ts-expect-error typing
    api.on("select", handleSelect);

    return () => {
      // @ts-expect-error typing
      api.off("select", handleSelect);
    };
  }, [api]);

  const onClassOpen = (classId: string) => {
    router.push(`/class/${classId}`);
  };

  return (
    <section
      className="mb-8 flex w-full max-w-screen-xl flex-wrap items-center justify-center gap-6 px-4 sm:gap-12 sm:px-8"
      id="class"
    >
      <div className="flex w-full flex-col items-center justify-start gap-8 text-center">
        <h2 className="text-2xl font-bold sm:text-3xl">
          What Classes are there?
        </h2>

        <div className="w-full max-w-4xl">
          <Carousel
            className="w-full"
            // @ts-expect-error type
            setApi={setApi}
            opts={{
              align: "center",
              loop: true,
            }}
          >
            <CarouselContent>
              {classes.map((classItem, index) => (
                <CarouselItem
                  key={`card-${index}`}
                  className="pl-8 md:basis-1/2 lg:basis-1/3"
                >
                  <div className="relative py-6">
                    <Card
                      onClick={() => onClassOpen(classItem.id)}
                      className={`flex h-full cursor-pointer flex-col justify-between border transition-all duration-300 ${
                        current === index
                          ? "z-10 scale-110 shadow-lg"
                          : "scale-100 opacity-75"
                      }`}
                    >
                      <CardHeader>
                        <CardTitle className="flex flex-col items-center justify-center space-y-1 md:items-center">
                          {classItem.price.promo ? (
                            <div className="flex flex-col items-center justify-center space-y-1 md:items-center">
                              <span className="bg-red text-lg font-bold text-gray-400 line-through">
                                {formatCurrency(classItem.price.base)}
                              </span>
                              <span className="text-xl font-bold text-[var(--foreground)]">
                                {formatCurrency(classItem.price.promo)}
                              </span>
                              <span className="text-xs font-medium text-gray-500">
                                Limited time offer
                              </span>
                            </div>
                          ) : (
                            <span className="text-xl font-bold text-[var(--foreground)]">
                              {formatCurrency(classItem.price.base)}
                            </span>
                          )}
                        </CardTitle>
                        <CardDescription className="text-md text-center text-[var(--foreground)]">
                          {classItem.name}
                        </CardDescription>
                      </CardHeader>
                      <CardContent
                        className="h-[200px] bg-cover bg-center text-center"
                        style={{
                          backgroundImage: `url('${classItem.image}')`,
                        }}
                      />
                      <CardFooter className="flex justify-center">
                        <a
                          href="https://forms.gle/DBxMUiGTPJE4XKM79"
                          target="_blank"
                          className="rounded-full bg-[var(--foreground)] px-4 py-2 text-sm text-[var(--background)] sm:text-base"
                        >
                          Book Now
                        </a>
                      </CardFooter>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute top-1/2 left-0 -translate-y-1/2" />
            <CarouselNext className="absolute top-1/2 right-0 -translate-y-1/2" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ClassSection;
