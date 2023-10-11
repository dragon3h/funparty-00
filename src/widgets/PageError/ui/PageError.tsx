import { type FC } from 'react';
import { useTranslation } from 'react-i18next';

const PageError: FC = () => {
  const { t, } = useTranslation();

  const refresh = (): void => {
    location.reload();
  };

  return (
    <div>
      <p>{t('error')}</p>
      <button onClick={refresh}>
        {t('refresh-page')}
      </button>
    </div>
  );
};

export default PageError;
