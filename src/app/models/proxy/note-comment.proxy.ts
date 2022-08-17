import { NoteProxy } from './note.proxy';
import { UserProxy } from './user.proxy';
export interface NoteCommentProxy {
  id: number;
  comment: string;
  user: UserProxy;
}
