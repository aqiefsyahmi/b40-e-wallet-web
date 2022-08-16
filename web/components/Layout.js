import NavBar from "./NavBar";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen grid place-items-center grid-rows-[max-content_1fr] bg-[#FFF7D9] bg-2">
      <NavBar />
      {children}
    </div>
  );
};

export default Layout;
