import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Page from "./Page";
import { DataFile } from "../Services/DataFile";

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

      <Page data={data} />
    </div>
  );
}

export default Home;
