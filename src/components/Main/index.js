import React, { useState, useContext } from "react";
import styles from "./styles/Main.module.css";
import { Context } from "../../context";

const Main = ({ border }) => {
  const style = border ? styles.main : styles.noneBorder;
  let { clicks, changeClick } = useContext(Context);

  return (
    <div>
      <h1 className={style}>Main Body CodeSandbox</h1>
      <button onClick={() => changeClick("inc")}>Clik me!</button>
      <button onClick={() => changeClick("dec")}>Clik me now!</button>
      <p>{clicks} s</p>
    </div>
  );
};

export default Main;
