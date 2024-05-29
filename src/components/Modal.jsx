import { useState } from 'react';
import ModalHeader from './ModalHeader';
import TitleInput from './TitleInput';
import DateTimeInput from './DateTimeInput';
import AssignedPersonInput from './AssignedPersonInput';
import NoteInput from './NoteInput';
import CommentList from './CommentList';
import CommentInput from './CommentInput';

const Modal = ({ open, onClose }) => {
  const [title, setTitle] = useState('');
  const [editingDate, setEditingDate] = useState(true);
  const [date, setDate] = useState(new Date().toLocaleDateString());
  const [fromTime, setFromTime] = useState(new Date().toLocaleTimeString());
  const [toTime, setToTime] = useState(new Date().toLocaleTimeString());
  const [assignTo, setAssignTo] = useState('');
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([
    { name: 'Jane Doe', comment: 'I\'ll be working on the design and will send it to you for approval.' },
  ]);
  const [editedComment, setEditedComment] = useState('');
  const [editingCommentDetails, setEditingCommentDetails] = useState({});

  const addComment = () => {
    if (comment.trim() === '') return;
    setComments([...comments, { name: 'Jane Doe', comment }]);
    setComment('');
  };

  const updateComment = (ind, comm) => {
    if (comm.comment.trim() === '') return;
    setComments(comments.map((c, i) => (i === ind ? comm : c)));
    setEditingCommentDetails({});
  };

  const deleteComment = (ind) => {
    setComments(comments.filter((c, i) => i !== ind));
  };

  const handleCommentClick = (index) => () => {
    setEditingCommentDetails({ flag: true, ind: index });
    setEditedComment(comments[index].comment);
  };

  const handleInputChange = (e) => {
    setEditedComment(e.target.value);
  };

  if (!open) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white flex flex-col py-6 px-8 border border-gray-500 rounded-xl w-96">
        <ModalHeader onClose={onClose} />
        <TitleInput title={title} setTitle={setTitle} />
        <DateTimeInput
          editingDate={editingDate}
          setEditingDate={setEditingDate}
          date={date}
          setDate={setDate}
          fromTime={fromTime}
          setFromTime={setFromTime}
          toTime={toTime}
          setToTime={setToTime}
        />
        <AssignedPersonInput assignTo={assignTo} setAssignTo={setAssignTo} />
        <NoteInput />
        <CommentList
          comments={comments}
          updateComment={updateComment}
          deleteComment={deleteComment}
          editingCommentDetails={editingCommentDetails}
          editedComment={editedComment}
          handleCommentClick={handleCommentClick}
          handleInputChange={handleInputChange}
        />
        <CommentInput comment={comment} setComment={setComment} addComment={addComment} />
      </div>
    </div>
  );
};

export default Modal;