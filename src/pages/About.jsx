import { useEffect, useState } from "react";

import { getAboutDetails } from "../contentful/contentful-data";

function About() {
  const [aboutData, setAboutData] = useState([]);
  const about = getAboutDetails();

  useEffect(() => {
    if (aboutData && aboutData.length === 0) {
      about.then((data) => {
        setAboutData(data[0]);
      });
    }
  }, [aboutData, about]);

  return (
    <div className="max-w-5xl mx-auto p-5">
      <h1 className="font-[anzo4] text-9xl">About</h1>
      <p className="font-[anzo3] text-justify py-5 text-lg">
        {aboutData.aboutDetails}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="col-span-1 md:col-span-2">
          <video
            autoPlay
            loop
            muted
            className="w-full h-[40vh] sm:h-[50vh] md:h-[60vh] object-cover relative z-10 rounded-3xl shadow-xl shadow-gray-700 mx-auto"
            src={aboutData.aboutVideos?.[0]?.video}
            alt="About"
          ></video>
        </div>
        <div className="col-span-1 flex-col gap-4 hidden md:flex">
          {aboutData.aboutVideos?.slice(1).map((video, index) => (
            <video
              key={index}
              autoPlay
              loop
              muted
              className="w-full h-[30vh] object-cover rounded-3xl shadow-xl shadow-gray-700"
              src={video.video}
              alt={`About ${index + 2}`}
            ></video>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
