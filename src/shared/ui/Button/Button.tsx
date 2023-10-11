import { type ButtonHTMLAttributes, type FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ThemeButton {
  CLEAR = 'clear'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  themeButton?: string
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    className = '',
    themeButton = '',
    children,
    ...otherProps
  } = props;

  return (
    <button className={classNames(cls.button, {}, [className, themeButton])} {...otherProps}>
      {children}
    </button>
  );
};
