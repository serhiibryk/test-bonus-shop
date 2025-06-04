'use client';

import { ReactNode, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useUser } from '@repo/shared/contexts/UserContext';

interface Props {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: Props) => {
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
