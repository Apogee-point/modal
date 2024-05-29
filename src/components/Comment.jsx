import { RiDeleteBin5Line } from 'react-icons/ri';
import { MdDone } from 'react-icons/md';
import profilePic from '../assets/profile.jpeg';

const Comment = ({
  comment,
  index,
  updateComment,
  deleteComment,
  editingCommentDetails,
  editedComment,
  handleCommentClick,
  handleInputChange,
}) => {
  return (
    <div key={index} className="flex justify-start items-center relative">
      <div className="flex items-center mr-1">
        <img src={profilePic} alt="profile" className="rounded-full w-8 h-8 max-w-none" />
      </div>
      <div className="flex flex-col items-start p-1 pr-10">
        <h3 className="text-sm font-semibold text-cgreen">{comment.name}</h3>
        {editingCommentDetails.flag && editingCommentDetails.ind === index ? (
          <div className="flex w-full">
            <textarea
              value={editedComment}
              onChange={handleInputChange}
              className="text-xsm text-gray-700 font-light text-left leading-tight p-1 outline-none  min-w-0 w-56 resize-none"
              autoFocus
            />
            <MdDone
              className="text-red-500 text-lg cursor-pointer"
              onClick={() => updateComment(index, { name: 'Jane Doe', comment: editedComment })}
            />
          </div>
        ) : (
          <div
            className="text-xsm text-gray-700 font-light text-left leading-tight"
            onClick={handleCommentClick(index)}
          >
            {comment.comment}
          </div>
        )}
      </div>
      <div className="flex items-center gap-2 absolute right-2">
        <RiDeleteBin5Line
          className="text-red-500 text-lg cursor-pointer right-1"
          onClick={() => deleteComment(index)}
        />
      </div>
    </div>
  );
};

export default Comment;