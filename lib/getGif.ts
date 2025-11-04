import { GifResult } from "@/types/GifResult";
import { GifData } from "@/types/GifData";

const API_KEY = process.env.API_KEY;

export default async function getGif({search}: {search: string}): Promise<GifResult[]> {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${search}&limit=25&rating=g`;
    
    const res = await fetch(url);

    if (!res.ok) {
        throw new Error(`Response status: ${res.status}`);
    }

    const data = await res.json();

    return data.data.map((gif: GifData) => ({
        id: gif.id,
        title: gif.title,
        url: gif.images.fixed_height.url,
    }));
}