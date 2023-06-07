import React from "react";
import NavBar from "./components/navbar/NavBar";
import "./App.css";
import Banner from "./components/Banner/Banner";
import RowPost from "./components/RowPost/RowPost";
import { orginal, action, comedy, horror, documentary, romance } from "./urls";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost url={orginal} title="Netflix Orginals" />
      <RowPost url={action} title="Action" isSmall />
      <RowPost url={comedy} title="Comedy" isSmall />
      <RowPost url={horror} title="Horror" isSmall />
      <RowPost url={romance} title="Romance" isSmall />
      <RowPost url={documentary} title="Documentary" isSmall />
    </div>
  );
}

export default App;
