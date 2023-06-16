import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface PlayerInterface {
  id?: string;
  user_id: string;
  coach_id: string;
  notes?: string;
  created_at?: any;
  updated_at?: any;

  user_player_user_idTouser?: UserInterface;
  user_player_coach_idTouser?: UserInterface;
  _count?: {};
}

export interface PlayerGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  coach_id?: string;
  notes?: string;
}
