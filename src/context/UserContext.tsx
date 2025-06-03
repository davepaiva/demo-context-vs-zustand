import React, { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  name: string;
  email: string;
  preferences: {
    theme: 'light' | 'dark';
    notifications: boolean;
  };
}

interface UserContextType {
  user: User;
  updateUserName: (name: string) => void;
  updateUserEmail: (email: string) => void;
  updateTheme: (theme: 'light' | 'dark') => void;
  updateNotifications: (enabled: boolean) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User>({
    name: 'John Doe',
    email: 'john@example.com',
    preferences: {
      theme: 'light',
      notifications: true
    }
  });

  const updateUserName = (name: string) => {
    console.log('🔄 Context: Updating user name to:', name);
    setUser(prev => ({ ...prev, name }));
  };

  const updateUserEmail = (email: string) => {
    console.log('🔄 Context: Updating user email to:', email);
    setUser(prev => ({ ...prev, email }));
  };

  const updateTheme = (theme: 'light' | 'dark') => {
    console.log('🔄 Context: Updating theme to:', theme);
    setUser(prev => ({
      ...prev,
      preferences: { ...prev.preferences, theme }
    }));
  };

  const updateNotifications = (notifications: boolean) => {
    console.log('🔄 Context: Updating notifications to:', notifications);
    setUser(prev => ({
      ...prev,
      preferences: { ...prev.preferences, notifications }
    }));
  };

  return (
    <UserContext.Provider value={{
      user,
      updateUserName,
      updateUserEmail,
      updateTheme,
      updateNotifications
    }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}; 