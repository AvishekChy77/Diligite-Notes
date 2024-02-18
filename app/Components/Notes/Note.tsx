import { useCardStyle } from "@/app/Stores/Store";
import { Note } from "./Notes";

interface Props {
  note: NoteProps;
}
type NoteProps = Omit<Note, "id">;
const NoteCompnent: React.FC<Props> = ({ note }) => {
  const isList = useCardStyle((state) => state.isList);
  return (
    <div className={`${isList ? "" : "h-36"} p-3 border rounded-md`}>
      <h2 className="font-medium">{note.title}</h2>
      <p>{note.description.slice(0, 25)}</p>
    </div>
  );
};

export default NoteCompnent;
