import { FC } from "react";

import './styles/index.scss';
import { useTheme } from "app/providers/ThemeProvider/index";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "./providers/router";
import { NavBar } from "widgets/NavBar";

const App: FC = () => {
  const { theme } = useTheme();

  return (
    <main
      className={classNames('app', { hovered: false, sdffdsdf: true }, [
        theme,
        "abc",
        "222",
      ])}
    >
      <NavBar />
      <AppRouter />
    </main>
  );
};

export default App;
