import { GifItem } from "./GifItem";
import { useFetchGifs } from "./useFetchGifs";

export const GifGrid = ( {category} ) => {

  const {gifs, loading} = useFetchGifs(category);

  return (
    <>
        {loading && <h3>loading...</h3>}
        <h3>{ category }</h3>
        <div className="card-grid">
          { gifs.map((gifs)=><GifItem key={gifs.id} {...gifs}/>) }
        </div>
    </>
  )
}