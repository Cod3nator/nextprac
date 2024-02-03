

import Image from 'next/image';

import  imagesArray from '@/api/images.js'; 
import { fetchImages } from '@/api/unsplash.js';

const clientId = process.env.NEXT_PUBLIC_UNSPLASH_CLIENT_ID;
const UNSPLASH_ROOT = 'https://api.unsplash.com';



const teamMembers=fetchImages();

const OurTeam = () => {



  console.log(teamMembers+" team");

  return (
    <section className="text-gray-600 body-font" id='team'>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-2xl font-medium title-font mb-4 text-gray-900">OUR TEAM</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table.
            Franzen you probably havent heard of them.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {imagesArray.map((member, index) => (
            <div key={index} className="p-4 lg:w-1/4 md:w-1/2">
              <div className="h-full flex flex-col items-center text-center">
              <Image 
                alt='us'
                src={member}
                height={150}
                width={150}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};



export default OurTeam;


