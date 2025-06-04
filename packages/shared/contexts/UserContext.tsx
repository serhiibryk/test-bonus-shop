'use client';

import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { IUser } from '../types/User';
import { users } from '../data/users';

interface UserContextProps {
  user: IUser | null;
  login: (username: string) => boolean;
  logout: () => void;
  isInitialized: boolean;
}

const UserContext = createContext<UserContextProps>({
  user: null,
  login: () => false,
  logout: () => {},
  isInitialized: false,
});

const setCookie = (name: string, value: string, days = 7) => {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${value}; path=/; expires=${expires}`;
};

const getCookie = (name: string) => {
  return document.cookie
    .split('; ')
    .find((row) => row.startsWith(`${name}=`))
    ?.split('=')[1];
};

const removeCookie = (name: string) => {
  document.cookie = `${name}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
};

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const username = getCookie('username');
    if (username) {
      const foundUser = users.find((u) => u.username === username);
      if (foundUser) {
        setUser(foundUser);
      } else {
        removeCookie('username');
      }
    }
    setIsInitialized(true);
  }, []);

  const login = (username: string): boolean => {
    const foundUser = users.find((u) => u.username === username);
    if (foundUser) {
      setUser(foundUser);
      setCookie('username', username);
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    removeCookie('username');
  };

  return (
    <UserContext.Provider value={{ user, login, logout, isInitialized }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
