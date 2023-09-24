import { FC, Suspense, lazy } from "react";
import "./styles/index.scss";
import { Link, Route, Routes } from "react-router-dom";
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));

const App: FC = () => {
  return (
    <main className="app dark">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
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
