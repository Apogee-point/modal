import { useState } from 'react';
import ModalHeader from './ModalHeader';
import TitleInput from './TitleInput';
import DateTimeInput from './DateTimeInput';
import AssignedPersonInput from './AssignedPersonInput';
import NoteInput from './NoteInput';
import CommentList from './CommentList';
import CommentInput from './CommentInput';

const Modal = ({ open, onClose }) => {
  const months = {
    1: 'Jan',
    2: 'Feb',
    3: 'Mar',
    4: 'Apr',
    5: 'May',
    6: 'Jun',
    7: 'Jul',
    8: 'Aug',
    9: 'Sep',
    10: 'Oct',
    11: 'Nov',
    12: 'Dec',
  }
  const [title, setTitle] = useState('');
  const [editingDate, setEditingDate] = useState(true);
  const [date, setDate] = useState(new Date().toLocaleDateString());
  const [fromTime, setFromTime] = useState(new Date().toLocaleTimeString());
  const [toTime, setToTime] = useState(new Date().toLocaleTimeString());
  const [assignTo, setAssignTo] = useState('');
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([
    { name: 'Jane Doe', comment: 'Nice job' },
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

  const convertDate = (date) => { 
    const d = new Date(date);
    return `${d.getDate()} ${months[d.getMonth() + 1]}, ${d.getFullYear()}`;
  };

  const convertTime = (time) => {
    // time is in localeTimeString format
    const t = time.split(':');
    const hour = t[0] > 12 ? t[0] - 12 : t[0];
    const min = t[1];
    return `${hour}:${min} ${t[0] > 12 ? 'PM' : 'AM'}`;
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
          convertDate={convertDate}
          convertTime={convertTime}
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