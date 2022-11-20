import { NoteCommentProxy } from './note-comment.proxy';
import { UserProxy } from './user.proxy';
export interface NoteProxy{
  id?: number;
  title: string;
  annotation: string;
  user: UserProxy;
  comments: NoteCommentProxy[];
  color: string;
  isPublic: boolean;
  hasLiked: boolean;
}
