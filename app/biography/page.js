"use client";
import React from "react";
import { motion } from "framer-motion";

const Biography = () => {
  return (
    <div className="bg-black min-h-screen text-white py-36">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl"
      >
        <h1 className="text-4xl sm:text-5xl md:text-4xl font-bold mb-4 text-left bg-gradient-to-r from-[#0f8b7e] to-[#012421] text-transparent bg-clip-text font-monda">
          Jewelius
        </h1>
        <h2 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-20 text-left text-white">
          Biography
        </h2>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <p className="text-lg sm:text-xl leading-relaxed mb-6 text-gray-300">
            Jewelius is a rapper residing in the South Shore neighborhood of
            Chicago, Illinois. Jewelius was told he’d be successful When Pigs
            Fly by many people in his life; including an elementary school
            teacher and a high school teacher. That three-worded idiom fueled
            what would become an entire vision to riches for Jewelius.
            Everything he stands for is achieving the impossible, even the mere
            word says “I’m possible.” So his life’s work is making an animal
            known for playing in the mud and placing it in the sky with the
            constellations.
          </p>
          <p className="text-lg sm:text-xl leading-relaxed mb-6 text-gray-300">
            Jewelius released his first song “Twitchin’” in 2019, and focused on
            perfecting his craft when the entire world shut down in 2020 because
            of the pandemic. He never consistently released music until 2022
            when he began releasing a single every month. During this time he
            has significantly grown his fan base and established a buzz with an
            average of 12,000 monthly listeners on Spotify. He is known for
            having a lot of energy, clever lyrics and catchy anthem-like hooks.
            This can be heard in most of his catalog, which includes amazing
            songs such as; “I’M RICH B****!”, “Oh Gawd”, “Round-N-Round”,
            “Salsa”, “Weekend Warrior”, “Countin’ $heep (Baaandzzz)”, and “Tacos
            4 Now.” If you had the pleasure of listening to any of his songs or
            features you would find yourself ready to get live and have the best
            time of your life.
          </p>
          <p className="text-lg sm:text-xl leading-relaxed mb-6 text-gray-300">
            In 2019, Jewelius signed with Harmony Records, marking the beginning
            of a new chapter in their musical journey. Their first studio album,
            "Prismatic Soul," showcased Jewelius's ability to craft intricate
            melodies and poignant lyrics, earning critical acclaim and a devoted
            fanbase.
          </p>
          <p className="text-lg sm:text-xl leading-relaxed mb-6 text-gray-300">
            His influences include a wide array of rappers such as; Kanye West,
            Travis Scott, Eminem, Lil Uzi Vert, Wu-Tang Clan and Jay-Z. He also
            is inspired by other genres of music which help him create his own
            sound. He has listed Pink Floyd, Vicente Fernandez, Rick James,
            Prince, Selena, Pat Benatar, The Beatles and Led Zeppelin as some of
            the many music influences he has acquired over the years.
          </p>
          <p className="text-lg sm:text-xl leading-relaxed text-gray-300">
            Jewelius plans on continuing to make pigs fly for the upcoming years
            and is working on 2 EP’s he wants to release in 2023. Feel free to
            join him on his journey by following him on Spotify, Instagram and
            all other platforms.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Biography;
