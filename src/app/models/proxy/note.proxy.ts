import { UserProxy } from './user.proxy';
export interface NoteProxy{
  id: number;
  title: string;
  annotation: string;
  user: UserProxy;
  color: string;
  isPublic: boolean;
}
