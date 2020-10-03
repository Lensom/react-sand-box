import React, { useState } from "react";
import Header from "../../components/Header";
import Main from "../../components/Main";
import Footer from "../../components/Footer";

import { Context } from "../../context";

import styles from "./styles/MainPage.module.css";

const MainPage = ({ border }) => {
  let [clicks, setClicks] = useState(0);

  return (
    <Context.Provider
      value={{
        clicks,
        inc: () => {
          setClicks(++clicks);
        },
        dec: () => {
          setClicks(--clicks);
        }
      }}
    >
      <div className={styles.mainPage}>
        <Header clicks={clicks} />
        <Main border={border} />
        <Footer />
      </div>
    </Context.Provider>
  );
};

export default MainPage;
