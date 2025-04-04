import React from "react";

function Page({ data }) {
  return (
    <div className="p-4">
      {data && (
        <>
          <img
            src={data.Poster}
            alt={`Poster for ${data.Title}`}
            class="max-w-full h-auto rounded-lg shadow-lg"
          />
          <h1 class="text-2xl font-bold mb-4">{data.Title}</h1>
        </>
      )}
    </div>
  );
}

export default Page;
