import { FC } from "react";
import "./styles/index.scss";
import { Link } from "react-router-dom";
import { useTheme } from "app/providers/ThemeProvider/index";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "./providers/router";

const App: FC = () => {
  const { theme, switchTheme } = useTheme();

  return (
    <main
      className={classNames("app", { hovered: false, sdffdsdf: true }, [
        theme,
        "abc",
        "222",
      ])}
    >
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <button onClick={switchTheme}>Switch Theme</button>
      <AppRouter />
    </main>
  );
};

export default App;
