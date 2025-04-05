import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Page from "./Page";
import { DataFile } from "../Services/DataFile";
import logo from "../assets/logo.png";
function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await DataFile();
      setData(result);
    };
    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
      <div class="min-h-screen bg-[url('/src/assets/r.jpg')] bg-t text-white bg-cover bg-no-repeat">
        <div class=" flex justify-end h-full pt-48 pr-20">
          <img
            src={logo}
            alt="Logo"
            class="w-28 h-28 filter hue-rotate-10 animate-spin"
            style={{
              filter:
                "brightness(0) saturate(30%) invert(17%) sepia(95%) saturate(2000%) hue-rotate(0deg)",
            }}
          />
        </div>
      </div>

      <Page data={data} />
    </div>
  );
}

export default Home;
