import { useTranslation } from 'next-i18next';
import { useMemo } from 'react';

export const useAppRouter = () => {
  const {
    i18n: { language },
  } = useTranslation();
  const isDefault = true; // language === options?.defaultLocale;
  const currentLanguage = useMemo(() => {
    return isDefault ? '' : language;
  }, [isDefault, language]);

  const generateRouter = (route: string) => {
    const prefix = isDefault ? '' : '/';
    const router = `${prefix}${currentLanguage}/${route}`;
    return router;
  };
  return generateRouter;
};
