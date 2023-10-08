import { FC } from "react";

import cls from "./navbar.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import Dark from 'shared/assets/icons/dark-theme.svg';

interface NavBarProps {
  className?: string;
}

export const NavBar: FC = ({ className = "" }: NavBarProps) => {
  return (
    <nav className={classNames(cls.navbar, {}, [className])}>
       <ThemeSwitcher />
       <Dark />
      <div className={cls.links}>
        <AppLink theme={AppLinkTheme.PRIMARY} to="/" className={cls.mainLink}>Home</AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to="/about">About</AppLink>
      </div>
    </nav>
  );
};
