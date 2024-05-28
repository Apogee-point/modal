import { IoIosClose } from "react-icons/io";
import { RiDeleteBin5Line } from "react-icons/ri";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { CiStickyNote } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { FaRegCalendar } from "react-icons/fa";
import profilePic from '../assets/profile.jpeg'
import { LuSendHorizonal } from "react-icons/lu";
// eslint-disable-next-line react/prop-types
const Modal = ({open,onClose}) => {
  if (!open) return null
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white flex flex-col w-96 py-6 px-8 border border-gray-500 rounded-xl">
        <div className="flex items-center justify-between">
          <IoCheckmarkDoneCircleOutline className="text-xl text-red-500 cursor-pointer" onClick={()=>alert("Saved..")} />
          <div className="flex space-x-2 items-center">
            <RiDeleteBin5Line className="text-xl text-red-500 cursor-pointer" onClick={()=>alert("Deleting...")} />
            <IoIosClose onClick={onClose} className="text-3xl text-red-500 cursor-pointer" />
          </div>
        </div>
    
        <div className="flex-1 flex justify-center border rounded-3xl border-gray-400 p-2 mt-3 w-90">
          <h1 className="text-xl font-bold text-red-500">Flower Arrangement</h1>
        </div>

        <div className="border rounded-3xl border-gray-400 p-2 mt-3 w-90">
          <div className="flex items-center justify-center">
            <FaRegCalendar className="text-gray-400 mr-2"/>
            <h1 className="text-sm font-semibold p-1">Dec 5, 2024 at 8:00-10:00 AM </h1>
          </div>
        </div>
        <form className="mb-5">
          <div className="flex flex-col space-y-5 mt-5">
            <div className="flex items-center gap-2">
              <IoPersonOutline className="text-red-500 text-xl" />
              <div id="assign_to" className="text-gray-500 italic whitespace-nowrap">Assign to : </div>
              <div className="flex items-center gap-1 border border-gray-300 rounded-3xl w-7/12">
                <div className="flex items-center mr-1 pl-3 py-1">
                  <img src={profilePic} alt="profile" className="rounded-full w-8 h-8 max-w-none"/>
                </div>
                <select className=" bg-white text-cgreen text-sm font-bold outline-none w-full">
                  <option className="text-green-500 p-2">John Doe</option>
                  <option className="text-green-500">Jane Doe</option>
                  <option className="text-green-500">James Doe</option>
                </select>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <CiStickyNote className="text-red-500 text-xl" />
              <div id="note" className="text-gray-500 italic whitespace-nowrap">Note : </div>
              <textarea className="border border-gray-300 rounded-lg p-1 w-8/12 outline-none text-gray-500 font-thin resize-none">
              </textarea>
            </div>
          </div>
        </form>
        <div className="border-t border-gray-300 my-2"></div>
        <div id="comments" className="flex flex-col rounded-lg">
          <h1 className="text-l font-bold italic text-gray-600 text-left m-2">Comments</h1>
          <div className="flex justify-center">
            <div className="flex items-center mr-1">
              <img src={profilePic} alt="profile" className="rounded-full w-8 h-8 max-w-none"/>
            </div>
            <div className="flex flex-col items-start p-1">
              <h3 className="text-sm font-semibold text-cgreen">Jane Doe</h3>
              <div className="text-xsm text-gray-700 font-light text-left leading-tight">I’ll be working on the design and will send it to you for approval.</div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="flex items-center mr-1">
              <img src={profilePic} alt="profile" className="rounded-full w-8 h-8 max-w-none"/>
            </div>
            <div className="flex flex-col items-start p-1">
              <h3 className="text-sm font-semibold text-cgreen">Jane Doe</h3>
              <div className="text-xsm text-gray-700 font-light text-left leading-tight">I’ll be working on the design and will send it to you for approval.</div>
            </div>
          </div>

        </div>
        <div className="flex items-center gap-2 my-4">
            <div className="flex items-center mr-1">
              <img src={profilePic} alt="profile" className="rounded-full w-8 h-8 max-w-none"/>
            </div>
            <div className="flex items-center border border-gray-300 rounded-4xl p-2 w-full">
              <input type="text" placeholder="Write comment ..." className="text-sm outline-none mx-2 w-5/6 py-2 text-gray-500"/>
              <LuSendHorizonal className="text-red-500 text-lg cursor-pointer"/>
            </div>
          </div>
      </div>
    </div>

  )
}

export default Modal