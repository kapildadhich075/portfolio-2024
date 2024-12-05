import "remixicon/fonts/remixicon.css";

function Header() {
  return (
    <div className=" fixed w-full z-10 p-24 flex items-center justify-end py-28 px-20">
      <button className=" bg-black px-4 py-2 rounded-full text-white  outline outline-white font-[anzo2] hover:bg-black/50">
        Hire me!
      </button>
      <i className="ri-menu-3-fill text-3xl ml-5 text-white"></i>
    </div>
  );
}

export default Header;
