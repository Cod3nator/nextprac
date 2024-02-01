

const clientId = process.env.NEXT_PUBLIC_UNSPLASH_CLIENT_ID;
const UNSPLASH_ROOT = 'https://api.unsplash.com';

export async function getImages(){
    const response = await fetch(`${UNSPLASH_ROOT}/photos?client_id=${clientId}&per_page=4`);
        const data = await response.json();
        console.log(data+"teams page");
        return data;
}
