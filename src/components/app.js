import React, { useState } from "react";
import '../styles/app.css';
import Cards from "./Cards";
import Header from "./Header";
import Loading from "./Loading";
import Player from "./Player";

function App() {

  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false)
  }, 2000);

  return (
    <>
      <Header />
      {loading ? <Loading /> : <Cards />}
      <Player />
    </>
  );
}

export default App;