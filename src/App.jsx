// <!-- https://www.youtube.com/watch?v=fUXQXafPF1A link for learn how to set tailwind in react + vite enviorment */ -->

import { useState } from "react";
import "./index.css"; // Import Tailwind CSS first
import Header from "./components/header/index";
import Footer from "./components/footer/index";
import TabOptions from "./components/tabOptions/index";
import Delivary from "./components/Delivary/index";
import DiningOut from "./components/Dining-out/index";
import Nightlife from "./components/Nightlife/index";
import './App.css'; // Then, import your custom CSS file

function App() {
  const [currTab, setcurrTab] = useState("Dining Out");

  return (
    <>
      <div className="">
        <Header />
        <div className="tab sticky">
        <TabOptions CurrTab={currTab} SetcurrTab={setcurrTab}/>
        {getcorrecttab(currTab)}
        </div>
       
        <Footer />
      </div>
    </>
  );
}
const getcorrecttab = (tab) => {
  switch (tab) {
    case "Dining Out":
      return <DiningOut />;
      break;
    case "Delivary":
      return <Delivary />;
      break;
    case "Nightlife":
      return <Nightlife />;
      break;
    default:
      return <DiningOut />;
      break;
  }
};

export default App;
