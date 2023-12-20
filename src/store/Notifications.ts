import { create } from 'zustand';

interface INotificationStore {
  notifications: INotification[];
  updateNotifications: (data: INotification[]) => void;
  clearNotifications: () => void;
  setAllRead: () => void;
  setReadById: (id: string) => void;
  removeNotificationById: (id: string) => void;
  isOpenModalNotifications: boolean;
  closeModalNotifications: () => void;
  openModalNotifications: () => void;
}

const useNotifications = create<INotificationStore>((set) => ({
  notifications: [],
  isOpenModalNotifications: false,
  updateNotifications: (data) => set({ notifications: [...data] }),
  clearNotifications: () => set({ notifications: [] }),
  setAllRead: () =>
    set((state) => {
      const notificationsTemp = state.notifications;

      notificationsTemp.map((notification) => {
        notification.opened = true;
      });

      return { notifications: notificationsTemp };
    }),
  removeNotificationById: () => {},
  setReadById: () => {},
  openModalNotifications: () => set({ isOpenModalNotifications: true }),
  closeModalNotifications: () => set({ isOpenModalNotifications: false }),
}));

export default useNotifications;
