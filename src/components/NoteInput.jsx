import { CiStickyNote } from 'react-icons/ci';

const NoteInput = () => {
  return (
    <div className="flex items-center gap-3 mt-5">
      <CiStickyNote className="text-red-500 text-xl" />
      <div id="note" className="text-gray-500 italic whitespace-nowrap">
        Note :
      </div>
      <textarea className="border border-gray-300 rounded-lg p-1 w-8/12 outline-none text-gray-500 font-thin resize-none"></textarea>
    </div>
  );
};

export default NoteInput;