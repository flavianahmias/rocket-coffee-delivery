import logo from "./logo.svg";
import styles from "./App.module.scss";
import Home from "./pages/home";
import Header from "./components/header";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Cart from "./pages/cart";
import FinishPage from "./pages/finish";

export const Content = () => {
  return (
    <div className={styles.content}>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="cart" element={<Cart />} />
        <Route exact path="finish" element={<FinishPage />} />
      </Routes>
    </div>
  );
};

function App() {
  return (
    <div className={styles.main}>
      <Router>
        <Header />
        <Content />
      </Router>
    </div>
  );
}

export default App;
