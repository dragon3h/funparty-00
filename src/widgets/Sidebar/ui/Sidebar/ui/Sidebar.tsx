import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import { useState } from 'react';
import { LangSwitcher } from 'widgets/LangSwitcher';

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const toggle = () => {
    setCollapsed(prev => !prev);
  };

  return (
        <div className={classNames(cls.sidebar, { [cls.collapsed]: collapsed })}>
            <LangSwitcher />
            <button onClick={toggle}>Toggle</button>
            <p>Sidebar</p>
        </div>
  );
};

export default Sidebar;
