import logo from "./logo.svg";
import styles from "./App.module.scss";
import Home from "./pages/home";
import Header from "./components/header";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export const Content = () => {
  return (
    <div className={styles.content}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
};

function App() {
  return (
    <div className={styles.main}>
      <Header />
      <Content />
    </div>
  );
}

export default App;
