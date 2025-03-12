"use client";
import React, { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
const PricingSection = () => {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    // @ts-ignore
    setCount(api.scrollSnapList().length);

    const handleSelect = () => {
      // @ts-ignore
      setCurrent(api.selectedScrollSnap());
    };

    // @ts-ignore
    api.on("select", handleSelect);

    return () => {
      // @ts-ignore
      api.off("select", handleSelect);
    };
  }, [api]);

  return (
    <section
      className="mb-8 flex w-full max-w-screen-xl flex-wrap items-center justify-center gap-6 px-4 sm:gap-12 sm:px-8"
      id="pricing"
    >
      <div className="flex w-full flex-col items-center justify-start gap-8 text-center">
        <h2 className="text-2xl font-bold sm:text-3xl">Pricing</h2>

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
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem
                  key={`card-${index}`}
                  className="pl-8 md:basis-1/2 lg:basis-1/3"
                >
                  <div className="relative py-6">
                    <Card
                      className={`flex h-full flex-col justify-between border transition-all duration-300 ${
                        current === index
                          ? "z-10 scale-110 shadow-lg"
                          : "scale-100 opacity-75"
                      }`}
                    >
                      <CardHeader>
                        <CardTitle>Rp350.000,-</CardTitle>
                        <CardDescription className="text-center">
                          Reguler Class
                        </CardDescription>
                      </CardHeader>
                      <CardContent
                        className="h-[200px] bg-cover bg-center text-center"
                        style={{
                          backgroundImage: "url('/assets/img/bees-about.jpeg')",
                        }}
                      />
                      <CardFooter className="flex justify-center">
                        <a
                          href="#"
                          className="rounded-full bg-[var(--foreground)] px-4 py-2 text-sm text-[var(--background)] sm:text-base"
                        >
                          Buy Now
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

export default PricingSection;
