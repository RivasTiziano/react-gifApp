import { useEffect, useState } from "react";
import { getGifs } from "./getGifs";

export const useFetchGifs = (category) => {

    const [gifs, setGifs] = useState([]);
    const [loading, isLoading] = useState(true);

    useEffect(()=>{
        getGifs(category).then(r=>setGifs(r));
        isLoading(false);
    }, []);

  return {
    gifs,
    loading
  }
}
