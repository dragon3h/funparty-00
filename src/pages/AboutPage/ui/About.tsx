import { type FC } from 'react';
import { useTranslation } from 'react-i18next';

const About: FC = () => {
  const { t, } = useTranslation();

  return (
    <div>
      <h1>{t('About')} {t('Page')}</h1>
    </div>
  );
};

export default About;
