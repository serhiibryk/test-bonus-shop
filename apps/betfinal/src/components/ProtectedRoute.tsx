'use client';

import { ReactNode, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';

import { useUser } from '@repo/shared/contexts/UserContext';

interface Props {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: Props) => {
  const { user } = useUser();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const isLoginPage = pathname.includes('/login');

    if (!user && !isLoginPage) {
      const lang = pathname.split('/')[1] || 'en';
      router.replace(`/${lang}/login`);
    }
  }, [user, pathname, router]);

  if (!user && !pathname.includes('/login')) {
    return null;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
