import React, { useContext } from "react";
import styles from "./styles/Main.module.css";
import { Context } from "../../context";

const Main = ({ border }) => {
  const style = border ? styles.main : styles.noneBorder;
  let { clicks, inc, dec } = useContext(Context);

  return (
    <div>
      <h1 className={style}>Main Body CodeSandbox</h1>
      <button onClick={() => inc()}>Clik me!</button>
      <button onClick={() => dec()}>Clik me now!</button>
      <p>{clicks} s</p>
    </div>
  );
};

export default Main;
