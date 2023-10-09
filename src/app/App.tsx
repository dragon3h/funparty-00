import { type FC, Suspense } from 'react';

import './styles/index.scss';
import { useTheme } from 'app/providers/ThemeProvider/index';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from './providers/router';
import { NavBar } from 'widgets/NavBar';
import { Sidebar } from 'widgets/Sidebar/ui/Sidebar';

const App: FC = () => {
  const { theme } = useTheme();

  return (
    <main
      className={classNames('app', { hovered: false, sdffdsdf: true }, [
        theme,
        'abc',
        '222'
      ])}
    >
      <Suspense fallback="">
        <NavBar />
        <div className="page-content">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </main>
  );
};

export default App;
