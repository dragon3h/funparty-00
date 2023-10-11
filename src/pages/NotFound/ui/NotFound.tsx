import { type FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './NotFound.module.scss';
import { useTranslation } from 'react-i18next';

interface NotFoundProps {
  className?: string
}

const NotFound: FC<NotFoundProps> = (props) => {
  const { t, } = useTranslation();

  return <div className={classNames(cls['not-found'])}>{t('404')}</div>;
};

export default NotFound;
