import { create } from 'zustand';

interface User {
  name: string;
  email: string;
  preferences: {
    theme: 'light' | 'dark';
    notifications: boolean;
  };
}

interface UserStore {
  user: User;
  updateUserName: (name: string) => void;
  updateUserEmail: (email: string) => void;
  updateTheme: (theme: 'light' | 'dark') => void;
  updateNotifications: (enabled: boolean) => void;
}

export const useUserStore = create<UserStore>((set) => ({
  user: {
    name: 'John Doe',
    email: 'john@example.com',
    preferences: {
      theme: 'light',
      notifications: true
    }
  },
  updateUserName: (name: string) => {
    console.log('🔄 Zustand: Updating user name to:', name);
    set((state) => ({
      user: { ...state.user, name }
    }));
  },
  updateUserEmail: (email: string) => {
    console.log('🔄 Zustand: Updating user email to:', email);
    set((state) => ({
      user: { ...state.user, email }
    }));
  },
  updateTheme: (theme: 'light' | 'dark') => {
    console.log('🔄 Zustand: Updating theme to:', theme);
    set((state) => ({
      user: {
        ...state.user,
        preferences: { ...state.user.preferences, theme }
      }
    }));
  },
  updateNotifications: (notifications: boolean) => {
    console.log('🔄 Zustand: Updating notifications to:', notifications);
    set((state) => ({
      user: {
        ...state.user,
        preferences: { ...state.user.preferences, notifications }
      }
    }));
  }
})); 