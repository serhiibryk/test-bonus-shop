'use client';

import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

import { IUser } from '../types/User';
import { users } from '../data/users';

interface UserContextProps {
  user: IUser | null;
  isInitialized: boolean;
  login: (username: string) => boolean;
  logout: () => void;
  updateUser: (updatedUser: IUser) => void;
}

const UserContext = createContext<UserContextProps>({
  user: null,
  isInitialized: false,
  login: () => false,
  logout: () => {},
  updateUser: () => {},
});

const LOCAL_STORAGE_KEY = 'mock-user';

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch {
        localStorage.removeItem(LOCAL_STORAGE_KEY);
      }
    }
    setIsInitialized(true);
  }, []);

  const login = (username: string): boolean => {
    const foundUser = users.find((u) => u.username === username);
    if (foundUser) {
      setUser(foundUser);
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(foundUser));
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem(LOCAL_STORAGE_KEY);
  };

  const updateUser = (updatedUser: IUser) => {
    setUser(updatedUser);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedUser));
  };

  return (
    <UserContext.Provider value={{ user, login, logout, updateUser, isInitialized }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
