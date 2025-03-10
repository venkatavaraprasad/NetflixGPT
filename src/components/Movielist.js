import Moviecard from "./Moviecard";
const Movielist=({title,movies})=>{

   
    return ( 
         <div className="px-2 " >

            <h1 className="text-xs md:text-2xl text-white  font-bold w-full">{title}</h1>
            <div className="flex overflow-x-scroll no-scrollbar pt-4  mb-3">

                
                <div className="flex ">
                    {movies?.map((movie)=><Moviecard key={movie.id} poster_id={movie?.poster_path} movie_id={movie.id}/>)}
                   
                </div>
            </div>
        </div>
            

    )
    
}
export default Movielist;


