import { FaRegCalendar } from 'react-icons/fa';
import { MdDone } from 'react-icons/md';

const DateTimeInput = ({
  editingDate,
  setEditingDate,
  date,
  setDate,
  fromTime,
  setFromTime,
  toTime,
  setToTime,
  convertDate,
  convertTime,
}) => {
  return (
    <div className="border rounded-3xl border-gray-400 p-2 mt-3 w-90">
      {editingDate ? (
        <div className="flex items-center gap-2">
          <input
            type="date"
            value={convertDate(date)}
            onChange={(e) => {
              setDate(e.target.value);
            }}
            className="text-sm font-semibold p-1 outline-none"
            autoFocus
          />
          <input
            type="time"
            value={fromTime}
            onChange={(e) => {
              setFromTime(e.target.value);
            }}
            className="text-sm font-semibold p-1"
          />
          <span className="text-sm font-semibold">to</span>
          <input
            type="time"
            value={toTime}
            onChange={(e) => {
              setToTime(e.target.value);
            }}
            className="text-sm font-semibold p-1"
          />
          <MdDone className="text-red-500 text-xl cursor-pointer" onClick={() => setEditingDate(false)} />
        </div>
      ) : (
        <div className="flex items-center gap-2 justify-center">
          <FaRegCalendar className="text-gray-500 text-xl" />
          <h1 className="text-sm font-semibold p-1 cursor-pointer font-roboto" onClick={() => setEditingDate(true)}>
            {convertDate(new Date(date).toLocaleDateString())} at {convertTime(fromTime)}-{convertTime(toTime)}
          </h1>
        </div>
      )}
    </div>
  );
};

export default DateTimeInput;