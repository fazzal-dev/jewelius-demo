import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./components/Hero";
import SpotifyPlayer from "./components/SpotifyPlayer";
import InstagramFeed from "./components/InstagramFeed";
import YouTubeEmbed from "./components/YouTubeEmbed";
import BiographySnippet from "./components/BiographySnippet";
import MerchStore from "./components/MerchStore";
import ImageCarousel from "./components/ImageCarousel";
import EmailSubscriptionForm from "./components/EmailSubscriptionForm";
import AnnouncementBoard from "./components/AnnouncementBoard";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <HeroSection />
        <SpotifyPlayer />
        {/* <InstagramFeed /> */}
        {/* <YouTubeEmbed /> */}
        {/* <BiographySnippet /> */}
        {/* <MerchStore /> */}
        {/* <ImageCarousel /> */}
        {/* <EmailSubscriptionForm /> */}
        {/* <AnnouncementBoard /> */}
      </main>
    </div>
  );
}
