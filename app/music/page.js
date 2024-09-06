"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import Loader from "../components/Loader";

const MusicPage = () => {
  const [tracks, setTracks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSpotifyToken = async () => {
      const clientId = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
      const clientSecret = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET;
      const tokenUrl = "https://accounts.spotify.com/api/token";

      const headers = {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${btoa(`${clientId}:${clientSecret}`)}`,
      };

      const data = "grant_type=client_credentials";

      try {
        const response = await axios.post(tokenUrl, data, { headers });
        return response.data.access_token;
      } catch (error) {
        console.error("Error fetching Spotify token", error);
        return null;
      }
    };

    const fetchLatestTracks = async () => {
      const token = await fetchSpotifyToken();
      if (!token) return;
      try {
        const playlistId = "7isT5TKqRZb1GD4xfZ8MgY"; // Assume the first playlist is the one you want
        const playlistTracksUrl = `https://api.spotify.com/v1/playlists/${playlistId}/tracks`;

        const tracksResponse = await axios.get(playlistTracksUrl, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = tracksResponse.data;

        setTracks(data.items);
      } catch (error) {
        console.error("Error fetching Spotify tracks", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLatestTracks();
  }, []);

  if (loading) {
    return (
      <div className="bg-black min-h-screen py-16 flex justify-center items-center">
        <div className="text-white text-center">
          <Loader />
          <p className="mt-4">Loading tracks...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black min-h-screen text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl m-9 sm:text-5xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#0f8b7e] to-[#085c54] font-monda">
            My Music Collection
          </h1>
          <p className="text-lg sm:text-xl text-gray-300">
            Discover your favorite tracks and explore the best of my musical
            journey.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {tracks.length > 0 &&
            tracks.map((track, index) => (
              <motion.div
                key={index}
                className="relative bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <a
                  href={track.track.external_urls.spotify}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <img
                    src={track.track.album.images[0].url}
                    alt={track.track.name}
                    className="w-full h-64 object-cover transition-transform transform hover:scale-110"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-4 flex flex-col justify-end transition-transform transform ">
                    <p className="font-semibold text-lg transition-transform transform ">
                      {track.track.name}
                    </p>
                    <p className="text-sm">
                      {track.track.artists
                        .map((artist) => artist.name)
                        .join(", ")}
                    </p>
                  </div>
                </a>
              </motion.div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MusicPage;
