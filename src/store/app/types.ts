export interface Channel {
  id: string;
  name: string;
  owner_id: string;
  created_at: string;
  joined_at: string;
};

export interface AppState {
  firstTime: boolean;
  channels: Channel[] | null
};