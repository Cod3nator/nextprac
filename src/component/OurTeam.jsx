/* eslint-disable jsx-a11y/alt-text */
// 'use client'
// import React, { useState, useEffect } from 'react';

// import { getImages } from '../api/team';

import Image from 'next/image';

import  imagesArray from '@/api/images.js'; 
import { fetchImages } from '@/api/unsplash.js';

const clientId = process.env.NEXT_PUBLIC_UNSPLASH_CLIENT_ID;
const UNSPLASH_ROOT = 'https://api.unsplash.com';


// const response = await fetch(`${UNSPLASH_ROOT}/photos?client_id=${clientId}&per_page=5`);
// export async function getStaticProps() {
//   const response = await fetch(`https://api.unsplash.com/photos?client_id=jmrA_S3kFBB4mSRnHtgRCM0Hasm7nvr7NZHD-QOZKIU&per_page=5`);
//          const  teamMembers = await response.json();
    
//   return {
//     props: {
//       teamMembers,
//     },
//   };
// }
// export async function getStaticProps() {
//   try {
//     const response = await fetch(`https://api.unsplash.com/photos?client_id=jmrA_S3kFBB4mSRnHtgRCM0Hasm7nvr7NZHD-QOZKIU&per_page=5`);
//     const teamMembers = await response.json();

//     console.log('Fetched team members:', teamMembers);

//     return {
//       props: {
//         teamMembers,
//       },
//     };
//   } catch (error) {
//     console.error('Error fetching team members:', error);
//     return {
//       props: {
//         teamMembers: [],
//       },
//     };
//   }
// }


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

// export async function getStaticProps() {
//   try {
//     const teamMembers = await fetchImages();
//     console.log(teamMembers + " team members");
//     return {
//       props: {
//         teamMembers,
//       },
//     };
//   } catch (error) {
//     console.error('Error fetching team members:', error);
//     return {
//       props: {
//         teamMembers: [], // or handle the error accordingly
//       },
//     };
//   }
// }


export default OurTeam;






  // fetchImages()
  // .then(images => {
  //   console.log(images + " in the team comp");
  // })
  // .catch(error => {
  //   console.error('Error fetching images:', error);
  // });

  // const [teamMembers, setTeamMembers] = useState([]);
  // useEffect(() => {
  //   const fetchTeamMembers = async () => {
  //     try {
  //       const response = await fetch(`${UNSPLASH_ROOT}/photos?client_id=${clientId}&per_page=4`);
  //       const data = await response.json();
  //       setTeamMembers(data);
  //     } catch (error) {
  //       console.error('Error fetching team members:', error);
  //     }
  //   };

  //   fetchTeamMembers();
  // }, []); 
//  console.log(teamMembers);