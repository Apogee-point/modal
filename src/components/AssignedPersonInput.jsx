import { IoPersonOutline } from 'react-icons/io5';
import profilePic from '../assets/profile.jpeg';

const AssignedPersonInput = ({ assignTo, setAssignTo }) => {
  return (
    <div className="flex items-center gap-2 mt-5">
      <IoPersonOutline className="text-red-500 text-xl" />
      <div id="assign_to" className="text-gray-500 italic whitespace-nowrap">
        Assign to :
      </div>
      <div className="flex items-center gap-1 border border-gray-300 rounded-3xl w-7/12">
        <div className="flex items-center mr-1 pl-3 py-1">
          <img src={profilePic} alt="profile" className="rounded-full w-8 h-8 max-w-none" />
        </div>
        <select
          className=" bg-white text-cgreen text-sm font-bold outline-none w-full cursor-pointer"
          onChange={(e) => {
            setAssignTo(e.target.value);
          }}
          value={assignTo}
        >
          <option className="text-green-500 p-2">Jane Smith</option>
          <option className="text-green-500">Will Smith</option>
          <option className="text-green-500">Randy</option>
        </select>
      </div>
    </div>
  );
};

export default AssignedPersonInput;