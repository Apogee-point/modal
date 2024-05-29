import Comment from './Comment';
import profilePic from '../assets/profile.jpeg';

const CommentList = ({
  comments,
  updateComment,
  deleteComment,
  editingCommentDetails,
  editedComment,
  handleCommentClick,
  handleInputChange,
}) => {
  return (
    <div id="comments" className="flex flex-col rounded-lg">
      <h1 className="text-l font-bold italic text-gray-600 text-left m-2">Comments</h1>
      <div className="flex justify-center">
        <div className="flex items-center mr-1">
          <img src={profilePic} alt="profile" className="rounded-full w-8 h-8 max-w-none" />
        </div>
        <div className="flex flex-col items-start p-1">
          <h3 className="text-sm font-semibold text-cgreen">Jane Doe</h3>
          <div className="text-xsm text-gray-700 font-light text-left leading-tight">
            {"I'll be working on the design and will send it to you for approval."}
          </div>
        </div>
      </div>

      {comments.map((comment, index) => (
        <Comment
          key={index}
          comment={comment}
          index={index}
          updateComment={updateComment}
          deleteComment={deleteComment}
          editingCommentDetails={editingCommentDetails}
          editedComment={editedComment}
          handleCommentClick={handleCommentClick}
          handleInputChange={handleInputChange}
        />
      ))}
    </div>
  );
};

export default CommentList;