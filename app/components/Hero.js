"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";
import { Play, Headphones } from "lucide-react";

const HeroSection = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const noteVariants = {
    initial: { y: -20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black py-20 px-4"
    >
      {/* Animated background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f8b7e] via-[#085c54] to-black opacity-80" />
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iZyIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzMzMzMzMyIgc3RvcC1vcGFjaXR5PSIwLjEiLz48c3RvcCBvZmZzZXQ9IjUwJSIgc3RvcC1jb2xvcj0iIzMzMzMzMyIgc3RvcC1vcGFjaXR5PSIwLjA1Ii8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMzMzMzMzIiBzdG9wLW9wYWNpdHk9IjAuMSIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZykiLz48L3N2Zz4=')] opacity-30" />
        <div className="absolute inset-0 backdrop-blur-[100px]" />
      </div>

      {/* Floating musical notes */}
      {[...Array(15)].map((_, index) => (
        <motion.div
          key={index}
          className="absolute text-[#0f8b7e] opacity-20 select-none"
          initial="initial"
          animate="animate"
          variants={noteVariants}
          transition={{
            delay: index * 0.2,
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            fontSize: `${Math.random() * 20 + 14}px`,
          }}
        >
          {["♪", "♫", "♬", "♩", "♭", "♮"][Math.floor(Math.random() * 6)]}
        </motion.div>
      ))}

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="container mx-auto z-10 flex flex-col lg:flex-row items-center justify-between"
      >
        <motion.div
          variants={itemVariants}
          className="text-center lg:text-left lg:w-1/2 mb-10 lg:mb-0"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white "
          >
            Experience the Rhythm
          </motion.h2>
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#0f8b7e] to-[#085c54] font-monda"
          >
            "Jewelius"
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-xl sm:text-2xl mb-8 text-gray-300 font-light "
          >
            Dive into a world where music transcends boundaries and emotions
            flow freely.
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(15, 139, 126, 0.7)",
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-[#0f8b7e] to-[#085c54] text-white px-8 py-4 rounded-full font-bold text-lg transition duration-300 shadow-lg hover:from-[#0d7d71] hover:to-[#064c46] focus:outline-none focus:ring-2 focus:ring-[#0f8b7e] focus:ring-opacity-50 flex items-center justify-center"
              onClick={() =>
                (window.location.href =
                  "https://open.spotify.com/track/7Cxd8OiajWXua9OkCkCHly?si=939f9ffce8934b00")
              }
            >
              <Play className="mr-2" size={20} /> Listen Now
            </motion.button>
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(8, 92, 84, 0.7)",
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-[#0f8b7e] text-white px-8 py-4 rounded-full font-bold text-lg transition duration-300 shadow-lg hover:bg-[#0f8b7e]/20 focus:outline-none focus:ring-2 focus:ring-[#0f8b7e] focus:ring-opacity-50 flex items-center justify-center"
              onClick={() =>
                (window.location.href =
                  "https://open.spotify.com/artist/2u1jfuE4bckW0OzzUB7uBG")
              }
            >
              <Headphones className="mr-2" size={20} /> Explore Albums
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Vinyl record with album cover */}
        <motion.div
          variants={itemVariants}
          className="lg:w-1/2 flex justify-center lg:justify-end relative"
        >
          <div className="relative w-full max-w-md">
            <motion.div
              className="rounded-full overflow-hidden shadow-2xl relative"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 2, ease: "linear" }}
              style={{ paddingTop: "100%" }} // Keeps the div square
            >
              <Image
                src="/vinyl.png"
                alt="Vinyl Record"
                layout="fill"
                objectFit="contain"
                className="rounded-full"
              />
            </motion.div>
            <motion.div
              className="absolute top-1/2 left-1/2 w-[60%] h-[60%] rounded-full overflow-hidden shadow-inner"
              style={{
                transform: "translate(-50%, -50%)", // Ensures centering
              }}
            >
              <motion.div
                className="w-full h-full relative rounded-full"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/artist.jpg"
                  alt="Album Cover"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Animated equalizer */}
      <div className="absolute bottom-0 left-0 right-0 h-16 flex items-end justify-center space-x-1 overflow-hidden">
        {[...Array(20)].map((_, index) => (
          <motion.div
            key={index}
            className="w-2 bg-[#0f8b7e] rounded-t-full"
            animate={{
              height: [
                Math.random() * 50 + 10,
                Math.random() * 50 + 10,
                Math.random() * 50 + 10,
              ],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: index * 0.1,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
