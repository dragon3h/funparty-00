import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import { type FC, useState } from 'react';
import { LangSwitcher } from 'widgets/LangSwitcher';

const Sidebar: FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const toggle = (): void => {
    setCollapsed(prev => !prev);
  };

  return (
        <div className={classNames(cls.sidebar, { [cls.collapsed]: collapsed, })}>
            <LangSwitcher />
            <button onClick={toggle}>Toggle</button>
            <p>Sidebar</p>
        </div>
  );
};

export default Sidebar;
