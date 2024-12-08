
import { useVisible } from '../../context/visibleContext';

const UserDetailForm = () => {
  const { visiblity, setVisiblity } = useVisible();

  return (
    visiblity && (
      <div className="container-userDetailForm bg-gradient-to-r from-blue-500 to-purple-700 shadow-2xl px-8 rounded-lg w-[380px] py-10">
        <h1 className="font-bold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-blue-100 to-purple-100 mb-4 border-b-4 border-blue-300 w-fit mx-auto">
          User Details
        </h1>
        <form className="flex flex-col gap-4">
          <div className="name-div flex flex-col gap-1">
            <label
              htmlFor="name"
              className="font-semibold tracking-wide text-lg text-white"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="rounded-lg px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
              placeholder="Enter your name"
            />
          </div>
          <div className="destination-div flex flex-col gap-1">
            <label
              htmlFor="destination"
              className="font-semibold tracking-wide text-lg text-white"
            >
              Destination
            </label>
            <input
              type="text"
              id="destination"
              className="rounded-lg px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-300"
              placeholder="Enter your destination"
            />
          </div>

          <div className="btns flex justify-between gap-4">
            <button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 shadow-md text-white font-medium py-2 rounded-lg hover:from-blue-300 hover:to-purple-300 focus:outline-none focus:ring-4 focus:ring-blue-200">
              Modify
            </button>
            <button
              onClick={() => setVisiblity(false)}
              className="w-full bg-red-500 text-white font-medium py-2 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-4 focus:ring-red-300"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    )
  );
};

export default UserDetailForm;
