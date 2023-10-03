import { FC, Suspense, lazy, useContext, useState } from "react";
import "./styles/index.scss";
import { Link, Route, Routes } from "react-router-dom";
import { useTheme } from "app/providers/ThemeProvider/index";
import { classNames } from "shared/lib/classNames/classNames";
const Home = lazy(() => import("pages/HomePage/index"));
const About = lazy(() => import("pages/AboutPage/index"));

const App: FC = () => {
  const {theme, switchTheme} = useTheme();

  return (
    <main className={classNames('app', {hovered: false, sdffdsdf: true}, [theme, 'abc', '222'])}>
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
