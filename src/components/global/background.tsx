"use client";
import { FC, useEffect, useState } from "react";
import { motion } from "framer-motion";

interface IBackgroundProps {}

export const Background: FC<IBackgroundProps> = (props) => {
  const [hexagons, setHexagons] = useState<
    Array<{ id: number; x: number; y: number; size: number; delay: number }>
  >([]);
  const [bees, setBees] = useState<
    Array<{ id: number; x: number; y: number; delay: number }>
  >([]);

  useEffect(() => {
    // Create hexagons
    const newHexagons = [];
    const hexSize = 60;
    const cols = Math.ceil(window.innerWidth / (hexSize * 1.5)) + 1;
    const rows = Math.ceil(window.innerHeight / (hexSize * 0.866)) + 1;

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        // Offset every other row
        const offset = row % 2 === 0 ? 0 : hexSize * 0.75;

        newHexagons.push({
          id: row * cols + col,
          x: col * hexSize * 1.5 + offset,
          y: row * hexSize * 0.866,
          size: hexSize * (0.8 + Math.random() * 0.4), // Size variation
          delay: Math.random() * 2, // Random delay for animation
        });
      }
    }
    setHexagons(newHexagons);

    // Create bees
    const newBees = [];
    for (let i = 0; i < 8; i++) {
      newBees.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        delay: Math.random() * 5,
      });
    }
    setBees(newBees);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 w-full overflow-hidden">
      {/* Hexagon grid (honeycomb) */}
      {hexagons.map((hexagon) => (
        <motion.div
          key={hexagon.id}
          className="absolute"
          style={{ left: hexagon.x, top: hexagon.y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{
            duration: 1.5,
            delay: hexagon.delay,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 5 + Math.random() * 5,
          }}
        >
          <motion.div
            className="border border-amber-400/40 bg-amber-300/30"
            style={{
              width: hexagon.size,
              height: hexagon.size * 0.866,
              clipPath:
                "polygon(0% 50%, 25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%)",
            }}
            whileHover={{ backgroundColor: "rgba(245, 158, 11, 0.5)" }}
          />
        </motion.div>
      ))}

      {/* Bees */}
      {bees.map((bee) => (
        <motion.div
          key={bee.id}
          className="absolute h-6 w-6"
          initial={{ x: bee.x, y: bee.y }}
          animate={{
            x: [bee.x, bee.x + 200, bee.x - 100, bee.x + 150, bee.x],
            y: [bee.y, bee.y - 100, bee.y + 200, bee.y - 150, bee.y],
          }}
          transition={{
            duration: 20,
            delay: bee.delay,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
            times: [0, 0.25, 0.5, 0.75, 1],
          }}
        >
          <motion.div
            className="relative flex h-6 w-6 items-center justify-center rounded-full bg-amber-400"
            animate={{
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 0.2,
              repeat: Infinity,
              repeatType: "loop",
            }}
          >
            {/* Bee stripes */}
            <div className="absolute top-1 h-1 w-6 bg-black" />
            <div className="absolute top-3 h-1 w-6 bg-black" />
            <div className="absolute top-5 h-1 w-4 rounded-full bg-black" />

            {/* Wings */}
            <motion.div
              className="absolute -top-2 -left-1 h-4 w-3 rotate-45 rounded-full bg-white/50"
              animate={{
                rotateX: [0, 45, 0],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 0.1,
                repeat: Infinity,
                repeatType: "loop",
              }}
            />
            <motion.div
              className="absolute -top-2 -right-1 h-4 w-3 -rotate-45 rounded-full bg-white/50"
              animate={{
                rotateX: [0, 45, 0],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 0.1,
                repeat: Infinity,
                repeatType: "loop",
              }}
            />
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};
