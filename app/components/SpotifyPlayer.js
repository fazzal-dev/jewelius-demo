"use client";
import { useState, useEffect } from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import Loader from "./Loader";

const SpotifyPlayer = () => {
  const [tracks, setTracks] = useState([]);
  const [loading, setLoading] = useState(true); // State for loading
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const CustomPrevArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute top-1/2 left-4 z-10 transform -translate-y-1/2 bg-gradient-to-r from-[#0f8b7e] to-[#085c54] text-white p-2 rounded-full shadow-lg hover:from-[#085c54] hover:to-[#0f8b7e] transition-all duration-300"
    >
      <ChevronLeft size={24} />
    </button>
  );

  const CustomNextArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute top-1/2 right-4 z-10 transform -translate-y-1/2 bg-gradient-to-r from-[#0f8b7e] to-[#085c54] text-white p-2 rounded-full shadow-lg hover:from-[#085c54] hover:to-[#0f8b7e] transition-all duration-300"
    >
      <ChevronRight size={24} />
    </button>
  );

  const handleTrackClick = (track) => {
    setCurrentTrack(track);
    setIsPlaying(true);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const fetchSpotifyToken = async () => {
      const clientId = "ed3c5a597ed44fde8920876590143fc0";
      const clientSecret = "da60ddc235a84d0198d466e3e37ea0fa";
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

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: (
      <button className="slick-next absolute top-1/2 right-0 transform -translate-y-1/2 bg-[#0f8b7e] text-white p-2 rounded-full shadow-lg hover:bg-[#085c54] transition-colors duration-300">
        <ChevronRight size={24} />
      </button>
    ),
    prevArrow: (
      <button className="slick-prev absolute top-1/2 right-0 transform -translate-y-1/2 bg-[#0f8b7e] text-white p-2 rounded-full shadow-lg hover:bg-[#085c54] transition-colors duration-300">
        <ChevronLeft size={24} />
      </button>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
    ],
  };

  if (loading) {
    return (
      <div className="bg-black py-16 flex justify-center items-center">
        <div className="text-white text-center">
          <Loader />
          <p className="mt-4">Loading tracks...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black py-16 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0f8b7e] to-[#085c54] mb-12 text-center z-10 relative"
        >
          Immerse in My Musical Universe
        </motion.h2>

        <div className="mb-16 z-0">
          <iframe
            src="https://open.spotify.com/embed/artist/2u1jfuE4bckW0OzzUB7uBG?utm_source=generator&theme=0"
            width="100%"
            height="352"
            frameBorder="0"
            allowFullScreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="rounded-lg shadow-2xl"
          ></iframe>
        </div>

        <motion.h3
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl font-bold text-white mb-8 text-center z-10 relative"
        >
          Discover My Top Tracks
        </motion.h3>

        <div className="relative px-12">
          <Slider
            {...settings}
            prevArrow={<CustomPrevArrow />}
            nextArrow={<CustomNextArrow />}
          >
            {tracks.map((track, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-4"
              >
                <div
                  className="relative group cursor-pointer"
                  onClick={() => handleTrackClick(track.track)}
                >
                  <img
                    src={track.track.album.images[0].url}
                    alt={track.track.name}
                    className="w-full h-64 object-cover rounded-lg shadow-xl group-hover:opacity-50 transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Play size={48} className="text-white" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0  text-white p-4 rounded-b-lg">
                    <p className="font-semibold text-lg truncate">
                      {track.track.name}
                    </p>
                    <p className="text-sm text-gray-300 truncate">
                      {track.track.artists
                        .map((artist) => artist.name)
                        .join(", ")}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </Slider>
        </div>

        <AnimatePresence>
          {currentTrack && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5 }}
              className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-[#0f8b7e] to-[#085c54] text-white p-4 flex items-center justify-between"
            >
              <div className="flex items-center">
                <img
                  src={currentTrack.album.images[0].url}
                  alt={currentTrack.name}
                  className="w-12 h-12 rounded-md mr-4"
                />
                <div>
                  <p className="font-semibold">{currentTrack.name}</p>
                  <p className="text-sm">
                    {currentTrack.artists
                      .map((artist) => artist.name)
                      .join(", ")}
                  </p>
                </div>
              </div>
              <button
                onClick={togglePlayPause}
                className="bg-white text-[#0f8b7e] rounded-full p-2 hover:bg-gray-200 transition-colors duration-300"
              >
                {isPlaying ? <Pause size={24} /> : <Play size={24} />}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SpotifyPlayer;
