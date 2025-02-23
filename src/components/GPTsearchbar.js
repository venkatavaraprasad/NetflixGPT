import React, { useRef, useState } from "react";
import {  lan } from "./Constants";
import { useDispatch, useSelector } from "react-redux";
import genAI from "./Geminii";
import { addgptMovies } from "./utilies/GPTslice";
import Shimmer from "./Shimmer";
import GPTmoviesuggestion from "./GPTmoviesuggestion";
import { searchForMovieDetails } from "./Constants";

const GPTsearchbar = () => {
  const dispatch = useDispatch();
  const searchtext = useRef(null);
  const lang = useSelector((store) => store.Language?.lang);
  const [loading, setLoading] = useState(false);

  const handlegptsearch = async () => {
    setLoading(true); 
    const userQuery = searchtext.current?.value || "";
    const gptquery = `Act as a movie recommendation system. Suggest some movies for the query: ${userQuery}. Only give me names of 5 movies comma-separated, like the example result given ahead. Example Result: RRR,KGF,DEVARA,SALAAR,PUSHPA. if the user gives  movie zoner as  null then recommend lastest movies `;

    try {
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const result = await model.generateContent(gptquery);
      const GPTMovies = result.response.text().split(",");

      const Moviedata = GPTMovies.map((movie) => searchForMovieDetails(movie));
      const tmdbResults = await Promise.all(Moviedata);
      console.log("Iam in GPTSearch")
      console.log(tmdbResults);
      dispatch(addgptMovies({ Movienames: GPTMovies, Movieresults: tmdbResults }));
    } catch (error) {
      console.error("Error fetching GPT results:", error);
    } finally {
      setLoading(false); 
    }
  };



  return (
    <div className="pt-[10%] flex flex-col items-center">
      <form
        className="bg-black grid grid-cols-12 w-1/2 rounded-md"
        onSubmit={(e) => {
          e.preventDefault();
          handlegptsearch();
        }}
      >
        <input
          ref={searchtext}
          type="text"
          className="p-3 m-2 col-span-9 rounded-md"
          placeholder={lan[lang]?.gptplaceholder || "Search for movies..."}
        />
        <button
          type="submit"
          className="m-2 py-3 px-4 bg-red-700 col-span-3 text-white rounded-md"
        >
          {lan[lang]?.Search || "Search"}
        </button>
      </form>

       {loading ? <Shimmer /> :<GPTmoviesuggestion />}
    </div>
  );
};

export default GPTsearchbar;
