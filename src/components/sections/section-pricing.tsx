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
import { pricings } from "@/constants/menu";
import { formatCurrency } from "@/utils/format-currency";
import { useEffect, useState } from "react";
const PricingSection = () => {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);

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
              {pricings.map((pricing, index) => (
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
                        <CardTitle>{formatCurrency(pricing.price)}</CardTitle>
                        <CardDescription className="text-center">
                          {pricing.name}
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

export default PricingSection;
