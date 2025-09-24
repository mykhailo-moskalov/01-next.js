import { Note } from "@/lib/api";

type Props = {
  item: Note;
};

const NoteItem = ({ item }: Props) => {
  return (
    <li>
      <h3>{item.title}</h3>
      <p>{item.content}</p>
    </li>
  );
};

export default NoteItem;
