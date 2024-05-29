
const TitleInput = ({ title, setTitle }) => {
  return (
    <div className="flex-1 flex justify-center border rounded-3xl border-gray-400 p-2 mt-3 w-90 ">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="text-xl font-bold text-red-500 outline-none text-center cursor-pointer"
      />
    </div>
  );
};

export default TitleInput;