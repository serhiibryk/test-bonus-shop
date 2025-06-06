'use client';

import { FC, ReactNode, useEffect, useMemo } from 'react';
import { usePathname, useRouter } from 'next/navigation';

import { useUser } from '../../../shared/contexts/UserContext';

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute: FC<ProtectedRouteProps> = ({ children }) => {
  const { user, isInitialized } = useUser();
  const pathname = usePathname();
  const router = useRouter();

  const isLoginPage = useMemo(() => pathname.includes('/login'), [pathname]);
  const lang = useMemo(() => pathname.split('/')[1] || 'en', [pathname]);

  useEffect(() => {
    if (!isInitialized) return;
    if (!user && !isLoginPage) {
      router.replace(`/${lang}/login`);
    }
  }, [isInitialized, user, isLoginPage, lang, router]);

  if (!isInitialized || (!user && !isLoginPage)) return null;

  return <>{children}</>;
};

export default ProtectedRoute;
