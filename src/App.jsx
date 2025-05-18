import React, { StrictMode, useRef } from 'react';
import "./style.css";

const App = () => {
    const videoSectionRef = useRef(null);
    const iframeRef = useRef(null);
  
    const handleScrollToVideo = () => {
      if (videoSectionRef.current) {
        videoSectionRef.current.scrollIntoView({ behavior: "smooth" });
  
        const iframe = iframeRef.current;
        if (iframe) {
          const baseSrc = "https://www.youtube.com/embed/GX9TnnqDWkY";
          iframe.src = `${baseSrc}?autoplay=1&mute=1&rel=0`; // add autoplay & mute
        }
      }
    };

    return (
        <StrictMode>
    <div className="bg-base-100 text-base-content">
      {/* Top Section */}
      <div className="min-h-screen flex items-center justify-center p-6">
        <div className="rounded-xl shadow-xl p-10 max-w-md text-center bg-primary text-primary-content">
          <h1 className="text-5xl font-extrabold mb-4 animate-bounce">
            🎉 كل سنه و انتي 🎉
          </h1>
          <p className="text-lg font-semibold mb-8 text-secondary-content">
            دي اخر حاجه عند 
            عشان انا تعبت
          </p>

          <button
            className="btn btn-secondary btn-lg animate-pulse"
            onClick={handleScrollToVideo}
          >
            Let's Party! 🎈
          </button>

          <div className="mt-6 text-3xl">🎂🎉🎈🎁🎊🎉🥳🎂</div>
        </div>
      </div>

      {/* YouTube Video Section */}
      <div
        ref={videoSectionRef}
        className="min-h-screen flex justify-center items-center py-20 bg-base-200"
      >
        <div className="w-full max-w-3xl aspect-video rounded-lg shadow-lg overflow-hidden">
          <iframe
            ref={iframeRef}
            width="720"
            height="1280"
            title="YouTube video player"
            className="w-full h-full"
            src=""
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            frameBorder="0"
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        </div>
      </div>
    </div>
        </StrictMode>
    );
};


export default App;
