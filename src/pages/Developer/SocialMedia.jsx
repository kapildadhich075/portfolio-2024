import React from 'react';
import { Instagram, Linkedin } from 'lucide-react';
import { InstagramEmbed } from 'react-social-media-embed';

export default function SocialFeed() {
  return (
    <div className="min-h-screen  py-12 px-4">
      {/* Header */}
      <div className="max-w-5xl mx-auto mb-12 ">
        <h1 className="text-7xl md:text-8xl font-[anzo4] mb-4">
          Social Media Feed
        </h1>

      </div>

      {/* Feed Grid */}
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Instagram Post 1 */}
          <div className="bg-white/20  overflow-hidden  transition-colors duration-300 ">
            <div className="flex items-center gap-2 p-3 border-2 border-pink-700 mb-4">
              <Instagram className="w-4 h-4 text-pink-800" />
              <span className="text-gray-400 text-sm">Instagram</span>
            </div>
            <div className="flex justify-center ">
              <InstagramEmbed
                url="https://www.instagram.com/reel/DGNHalbv46x/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" 
                width={320}
              />
            </div>
          </div>

          {/* LinkedIn Post */}
          <div className="bg-white/20  overflow-hidden transition-colors duration-300">
            <div className="flex items-center gap-2 p-3 border-2 border-blue-400 ">
              <Linkedin className="w-4 h-4 text-blue-500" />
              <span className="text-gray-400 text-sm">LinkedIn</span>
            </div>
            <div className="flex justify-center  p-4">
              <iframe 
                src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7293385478341353473?collapsed=1" 
                height="542" 
                width="100%" 
                style={{ maxWidth: '504px' }}
                frameBorder="0" 
                allowFullScreen
                title="Embedded post"
                className="rounded"
              />
            </div>
          </div>

          {/* Instagram Post 2 */}
          <div className="bg-white/20  overflow-hidden  transition-colors duration-300">
            <div className="flex items-center gap-2 p-3 border-2 border-pink-700 mb-4">
          <Instagram className="w-4 h-4 text-pink-800" />
              <span className="text-gray-400 text-sm">Instagram</span>
            </div>
            <div className="flex justify-center ">
              <InstagramEmbed 
                url="https://www.instagram.com/reel/C_3t1LVtJ5R/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" 
                width={320}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}