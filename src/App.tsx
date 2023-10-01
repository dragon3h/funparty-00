import { FC, Suspense, lazy, useContext, useState } from "react";
import "./styles/index.scss";
import { Link, Route, Routes } from "react-router-dom";
import { useTheme } from "./context/useTheme";
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));

const App: FC = () => {
  const {theme, switchTheme} = useTheme();

  return (
    <main className={`app ${theme}`}>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <button onClick={switchTheme}>Switch Theme</button>
      <Suspense fallback="<div>Loading...</div>">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Suspense>
    </main>
  );
};

export default App;
