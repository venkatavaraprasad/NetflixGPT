
import { useSelector } from 'react-redux';
import Usegetbackgroundvideo from './hooks/Usegetbackgroundvideo';


const Videobackground = ({movie_id}) => {
    const trailervideo=useSelector(store=>store.movies?.trailervideo);
    
    
    Usegetbackgroundvideo(movie_id);
  return (
    <div className=''>
       <iframe  className="w-screen aspect-video "src={"https://www.youtube.com/embed/"+trailervideo?.key+"?&autoplay=1&mute=1"}
         title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
         referrerPolicy="strict-origin-when-cross-origin" ></iframe>
    </div>
  )
}

export default Videobackground;
