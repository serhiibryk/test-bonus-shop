'use client';

import { FC, ReactNode, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';

import { useUser } from '../../../shared/contexts/UserContext';

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute: FC<ProtectedRouteProps> = ({ children }) => {
  const { user, isInitialized } = useUser();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (!isInitialized) return;

    const isLoginPage = pathname.includes('/login');

    if (!user && !isLoginPage) {
      const lang = pathname.split('/')[1] || 'en';
      router.replace(`/${lang}/login`);
    }
  }, [user, pathname, router, isInitialized]);

  const isLoginPage = pathname.includes('/login');

  if (!isInitialized) return null;
  if (!user && !isLoginPage) return null;

  return <>{children}</>;
};

export default ProtectedRoute;
