"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const InstagramFeed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Here you would fetch Instagram posts from your backend
    // This is just placeholder data
    setPosts([
      { id: 1, imageUrl: "/images/insta1.jpg", caption: "Latest gig" },
      { id: 2, imageUrl: "/images/insta2.jpg", caption: "New single out now" },
      { id: 3, imageUrl: "/images/insta3.jpg", caption: "Behind the scenes" },
    ]);
  }, []);

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Instagram Feed</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <Image
                src={post.imageUrl}
                alt={post.caption}
                width={400}
                height={400}
                className="w-full h-64 object-cover"
              />
              <p className="p-4 text-sm">{post.caption}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
