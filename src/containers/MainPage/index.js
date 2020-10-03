import React from "react";
import Header from "../../components/Header";
import Main from "../../components/Main";
import Footer from "../../components/Footer";

import styles from "./styles/MainPage.module.css";

const MainPage = () => (
  <div className={styles.mainPage}>
    <Header />
    <Main />
    <Footer />
  </div>
);

export default MainPage;
