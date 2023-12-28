import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface ISessionStore extends ISession {
  signin: (data: ISession) => void;
  logout: () => void;
}

const useSession = create(
  persist<ISessionStore>(
    (set) => ({
      name: '',
      initialsName: '',
      isAuthenticated: false,
      logout: () => set({ isAuthenticated: false, name: '', initialsName: '' }),
      signin: (data) =>
        set({
          isAuthenticated: true,
          name: data.name,
          initialsName: data.initialsName,
        }),
    }),
    {
      name: 'user-session',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useSession;
