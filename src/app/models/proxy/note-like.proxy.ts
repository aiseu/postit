import { NoteProxy } from './note.proxy';
import { UserProxy } from './user.proxy';
export interface NoteLikeProxy {
  id: number;
  user: UserProxy;
  note: NoteProxy;
}
