export const BG_Image="https://assets.nflxext.com/ffe/siteui/vlv3/154a9550-ce07-4e28-819c-63185dd849f8/web/IN-en-20250106-TRIFECTA-perspective_27b02e7c-f668-4639-9e82-1a5485084b2a_large.jpg"
export const User_Photo="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg";
export const API_Options= {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: "Bearer "+process.env.REACT_APP_TMDB_KEY,
    }
  };



export const API_KEY=process.env.REACT_APP_GeminiAPI_KEY;
export const searchForMovieDetails = async (movie) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
      API_Options
    );
    const json = await response.json();
    return json.results;
  };
export const header_img="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const videourl='https://api.themoviedb.org/3/movie/';
export const poster="https://image.tmdb.org/t/p/w500";
export const lan={
  English:{
      Search:"Search",
      gptplaceholder:"What you want to watch today"
  },
  Hindi:{
    Search:"खोज",
    gptplaceholder:"आज आप क्या देखना चाहते हैं",
  },
  Spanish:{
     Search:"buscar",
     gptplaceholder:"Lo que quieres ver hoy"

  },
  Telugu:{
    Search:"శోధన",
    gptplaceholder:"మీరు ఈరోజు ఏమి చూడాలనుకుంటున్నారు "

 },
}
export const supported_lan=[{
  Identifier:"English",
  name:"English"
},
{  Identifier:"Hindi",
  name:"Hindi"
},
{
      Identifier:"Spanish",
       name:"Spanish"
},
{
    Identifier:"Telugu",
     name:"Telugu"
},]