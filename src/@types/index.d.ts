interface ISession {
  name: string;
  initialsName: string;
  isAuthenticated: boolean;
}

interface INotification {
  id: string;
  title: string;
  description: string;
  datetime: string;
  opened: boolean;
}
