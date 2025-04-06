import React from "react";

function Page({ data }) {
  return (
    <div class="p-4 bg-black text-white mt-0">
      <h1 class="text-2xl font-bold p-3 m-5 mt-14">Trending</h1>
      <div class="flex flex-wrap gap-10 m-5">
        {data &&
          data.map((movie, index) =>
            movie.Poster && movie.Poster !== "N/A" ? (
              <div key={index} class="w-72 space-x-5 ">
                <img
                  src={movie.Poster}
                  alt={`Poster for ${movie.Title || "Movie"}`}
                  class="max-w-full h-auto rounded-lg shadow-lg hover:scale-105 transition-transform "
                />
                {movie.Title && <p class="mt-2 text-center">{movie.Title}</p>}
              </div>
            ) : null
          )}
      </div>
    </div>
  );
}

export default Page;
