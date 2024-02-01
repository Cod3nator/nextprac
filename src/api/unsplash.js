
const clientId = process.env.NEXT_PUBLIC_UNSPLASH_CLIENT_ID;
const UNSPLASH_ROOT = 'https://api.unsplash.com';

 
let dataGot=null;
  export  const fetchImages = async () => {
      try {
        const response = await fetch(`${UNSPLASH_ROOT}/photos?client_id=${clientId}&per_page=5`);
         const data = await response.json();
          return data;
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };


