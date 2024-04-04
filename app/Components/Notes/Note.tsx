import { useCardStyle } from '@/app/Stores/Store';
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from '@nextui-org/react';
import { Note } from './Notes';

interface Props {
  note: NoteProps;
}
type NoteProps = Omit<Note, 'id'>;

const NoteCompnent: React.FC<Props> = ({ note }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const isList = useCardStyle((state) => state.isList);

  return (
    <>
      <div
        onClick={onOpen}
        className={`${
          isList ? '' : 'h-36'
        } p-3 border shadow hover:shadow-md hover:cursor-pointer text-black rounded-md`}
      >
        <h2 className="font-medium mb-3">{note.title}</h2>
        {note.description.length > 25 ? (
          <p>{note.description.slice(0, 25)}...</p>
        ) : (
          <p>{note.description}</p>
        )}
      </div>
      {/* modal */}
      <Modal
        backdrop="opaque"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        classNames={{
          backdrop: 'bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20',
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">{note.title}</ModalHeader>
              <ModalBody>
                <p className=" text-sm">{note.description}</p>
              </ModalBody>
              <ModalFooter>
                <Button size="sm" color="primary" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default NoteCompnent;
