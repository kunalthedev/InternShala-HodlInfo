import React, { useState} from "react";
import Counter from "../midbar/Counter";
import Nav from "../Nav/Nav";
import "./app.css";
import banner from "../../img/banner.png";
import Footer from "../footer/Footer";
import TableData from "../main/TableData";
import { GlobalContext } from "../../Context/GlobalContext";
const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <GlobalContext.Provider value={{ darkMode, setDarkMode }}>
      <div className={darkMode ? "app " : "app app-light"}>
        <Nav />
        <Counter />
        <TableData />

        <div className="banner">
          <img src={banner} alt="banner" />
        </div>
        <div className="line"></div>
        <Footer />
      </div>
    </GlobalContext.Provider>
  );
};

export default App;
