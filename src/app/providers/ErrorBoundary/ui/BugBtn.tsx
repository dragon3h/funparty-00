import { useState, type FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const BugBtn: FC = () => {
  const { t, } = useTranslation();
  const [error, setError] = useState(false);

  const toggle = (): void => {
    setError(true);
  };

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);

  return (
    <button onClick={toggle}>
      {t('toggle')}
    </button>
  );
};

export default BugBtn;
