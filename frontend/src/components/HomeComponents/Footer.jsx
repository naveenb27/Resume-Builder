const Footer = () => {
  return (
    <div className="bg-black py-24 flex justify-evenly items-center ">
      <div className="subscription-form flex flex-col gap-3">
        <h1 className="text-blue-500 tracking-wide font-extrabold text-3xl">
          Stay up to date
        </h1>
        <p className="text-[#ccc]">to know about our latest project</p>
        <form className="flex gap-2">
          <input
            type="email"
            placeholder="Enter your email id"
            className="rounded-md ps-2 py-1"
            required
          />
          <div className="btn">
            <button className="border-none px-3 py-1 rounded-lg bg-[#ed2c49] text-white tracking-wider">
              subscribe
            </button>
          </div>
        </form>
      </div>
      <div className="footer px-8  justify-center  flex gap-16 text-[#fff]">
        <div className="footer-1 list-none">
          <h1 className="text-[#666] font-bold tracking-wide py-2">
            WHO ARE WE?
          </h1>
          <li className="my-2 cursor-pointer hover:text-blue-400">About Us</li>
          <li className="my-2 cursor-pointer hover:text-blue-400">
            Contact Us
          </li>
          <li className="my-2 cursor-pointer hover:text-blue-400">
            Request A call back
          </li>
        </div>
        <div className="footer-2 list-none">
          <h1 className="text-[#666] font-bold tracking-wide py-2">Explore</h1>
          <li className="my-2 cursor-pointer hover:text-blue-400">LinkedIn</li>
          <li className="my-2 cursor-pointer hover:text-blue-400">Instagram</li>
          <li className="my-2 cursor-pointer hover:text-blue-400">Twitter</li>
          <li className="my-2 cursor-pointer hover:text-blue-400">Youtube</li>
        </div>
        <div className="footer-3 list-none">
          <h1 className="text-[#666] font-bold tracking-wide py-2">
            Community
          </h1>
          <li className="my-2 cursor-pointer hover:text-blue-400">
            Privacy Policy
          </li>
          <li className="my-2 cursor-pointer hover:text-blue-400">
            Guidelines
          </li>
          <li className="my-2 cursor-pointer hover:text-blue-400">
            Terms of Service
          </li>
        </div>
        <div className="footer-4 list-none">
          <h1 className="text-[#666] font-bold tracking-wide py-2 ">Pages</h1>
          <li className="my-2 cursor-pointer hover:text-blue-400">Blog</li>
          <li className="my-2 cursor-pointer  hover:text-blue-400">
            Templates
          </li>
          <li className="my-2 cursor-pointer hover:text-blue-400">
            For job seekers
          </li>
        </div>
      </div>
    </div>
  );
};

export default Footer;
