import { create } from 'zustand';

interface ISessionStore extends ISession {
  signin: (data: ISession) => void;
  logout: () => void;
}

const useSession = create<ISessionStore>((set) => ({
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
}));

export default useSession;
