/* eslint-disable react/prop-types */

import { IoIosClose } from 'react-icons/io';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { IoCheckmarkDoneCircleOutline } from 'react-icons/io5';

const ModalHeader = ({ onClose }) => {
  return (
    <div className="flex items-center justify-between">
      <IoCheckmarkDoneCircleOutline className="text-xl text-red-500 cursor-pointer" onClick={() => alert('Saved..')} />
      <div className="flex space-x-2 items-center">
        <RiDeleteBin5Line className="text-xl text-red-500 cursor-pointer" onClick={() => alert('Deleting...')} />
        <IoIosClose onClick={onClose} className="text-3xl text-red-500 cursor-pointer" />
      </div>
    </div>
  );
};

export default ModalHeader;