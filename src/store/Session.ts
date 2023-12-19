import { create } from 'zustand';

interface ISessionStore extends ISession {
  signin: (data: ISession) => void;
  logout: () => void;
}

const useSession = create<ISessionStore>((set) => ({
  name: '',
  isAuthenticated: false,
  logout: () => set({ isAuthenticated: false, name: '' }),
  signin: (data) => set({ isAuthenticated: true, name: data.name }),
}));

export default useSession;
