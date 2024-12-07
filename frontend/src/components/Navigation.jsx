const Navigation = () => {
  return (
    <div>
      <div className="navigation-container flex justify-evenly shadow-lg py-3">
        <div className="logo">RESUME BUILDER</div>
        <div className="nav-lists flex list-none gap-14">
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
