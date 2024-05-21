import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

import {
  handleRouteChangeComplete,
  handleRouteChangeStart,
} from '@/utils/routerUtils';

export const useInprogress = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    handleRouteChangeComplete();

    return () => {
      handleRouteChangeStart();
    };
  }, [pathname, searchParams]);
};
