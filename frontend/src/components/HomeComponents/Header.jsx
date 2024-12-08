import profile from '../../assets/resume-logo.png';

const HomeHeader = () => {
  return (
    <div className="home-container bg-[#f7f9fc] px-6 gap-12 pt-20 pb-28">
      <div className="relative section-1 max-w-[1140px] m-auto">
        <div className=" flex flex-col lg:flex-row justify-evenly items-center ">
          <div className="left flex flex-col gap-8 text-center lg:text-left">
            <h1 className="text-[48px] font-extrabold text-gray-800 leading-tight">
              The Professional Resume <br></br>Builder
            </h1>
            <p className="text-[21px] text-gray-600 max-w-xl mx-auto lg:mx-0">
              Generate a professional, ATS-friendly resume with customizable
              templates to help you stand out in job applications.
            </p>
            <div className="btn cursor-pointer font-bold text-[18px] bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-3 rounded-lg shadow-lg w-fit transform hover:scale-105 transition-all duration-300">
              Create My Resume
            </div>
          </div>

          <div className="right mt-8  border-4 border-solid border-blue-300 rounded-full p-6 lg:mt-0">
            <img
              className="animate-right cursor-pointer rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300"
              src={profile}
              alt="Profile Sample"
              width="300"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
