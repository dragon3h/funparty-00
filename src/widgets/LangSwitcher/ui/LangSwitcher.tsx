import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import cls from './LangSwitcher.module.scss';

const LangSwitcher = () => {
  const { t, i18n } = useTranslation();

  const toggle = async () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'uk' : 'en');
  }

  return (
    <Button
    className={classNames(cls.langSwitcher, {}, [])}
    themeButton={ThemeButton.CLEAR}
    onClick={toggle}>
      {t('Lang')}
    </Button>
  );
};

export default LangSwitcher;