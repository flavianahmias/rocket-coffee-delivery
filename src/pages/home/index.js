import React from "react";
import Header from "../../components/header";
import styles from "./styles.module.scss";

export const Content = () => {
  return <div className={styles.content}>content</div>;
};

function Home() {
  return (
    <div className={styles.main}>
      <Header />
      <Content />
    </div>
  );
}

export default Home;
