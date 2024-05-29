import { LuSendHorizonal } from 'react-icons/lu';
import profilePic from '../assets/profile.jpeg';

const CommentInput = ({ comment, setComment, addComment }) => {
  return (
    <div className="flex items-center gap-2 my-4">
      <div className="flex items-center mr-1">
        <img src={profilePic} alt="profile" className="rounded-full w-8 h-8 max-w-none" />
      </div>
      <div className="flex items-center border border-gray-300 rounded-4xl p-2 w-full">
        <input
          type="text"
          placeholder="Write comment ..."
          className="text-sm outline-none mx-2 w-5/6 py-2 text-gray-500"
          onChange={(e) => setComment(e.target.value)}
          value={comment}
        />
        <LuSendHorizonal className="text-red-500 text-lg cursor-pointer" onClick={addComment} />
      </div>
    </div>
  );
};

export default CommentInput;