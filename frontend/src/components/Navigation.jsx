const Navigation = () => {
  return (
    <div>
      <div className="navigation-container flex justify-evenly items-center shadow-lg py-5">
        <h1 className="logo font-bold text-[#333] text-[21px]">RESUME BUILDER</h1>
        <div className="nav-lists text-[17px] flex list-none gap-14">
          <li>Home</li>
          <li>Resume Templates</li>
          <li>Looking for jobs</li>
          <li>Login</li>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
