'use client';
import React, { useEffect, useRef } from 'react';


const Hero = () => {
  const iframeRef = useRef(null);
const shouldPlay=true;


  const ReactPlayer = React.lazy(() => import('react-player'));

  return (
    <section className="relative h-screen flex items-center justify-center">
      <div className="absolute top-0 left-0 w-full h-full z-0">
      {/* <iframe
            ref={iframeRef}

  className='w-full h-full'
  src="https://www.youtube.com/embed/BGJPgu4za6U?autoplay=1&controls=0&showinfo=0&rel=0&iv_load_policy=3&fs=0"
  title="Morfeus Show Reel"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowfullscreen
></iframe> */}


{/* <video
  className="w-full h-full"
  src="https://www.youtube.com/embed/BGJPgu4za6U?autoplay=1&controls=0&showinfo=0&rel=0&iv_load_policy=3&fs=0"
  title="Morfeus Show Reel"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowFullScreen
  autoPlay="autoplay"
  controls={false}
></video> */}
{/* <video width={100} height={100} loop muted autoPlay="autoplay">
  <source   src="https://www.youtube.com/embed/BGJPgu4za6U?autoplay=1&controls=0&showinfo=0&rel=0&iv_load_policy=3&fs=0" type='video/mp4'/>
</video> */}

       <React.Suspense fallback={<div>Loading...</div>}>
          <ReactPlayer
            ref={iframeRef}
            url="https://www.youtube.com/watch?v=BGJPgu4za6U"
            playing
            loop
            muted
            width="100%"
            height="100%"
            light={true}
            className="absolute top-0 left-0 object-cover"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            style={{ zIndex: -1 }}
          />
        </React.Suspense>
      </div>
     
      <div className="relative z-10 text-gray-600 text-center lg:w-2/3 w-full">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-100">
          Where Every Frame Tells a Story
        </h1>
        <p className="mb-8 leading-relaxed">
          A one-stop production company that handles everything from creating scripts to presenting the final product on screen.
        </p>
        <div className="flex justify-center">
          <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" >
            Contact Us
          </button>
          <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
            View Show Reel
          </button>
        </div>
     
      </div>
    </section>
  );
};

export default Hero;
