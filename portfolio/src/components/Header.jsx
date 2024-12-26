import "remixicon/fonts/remixicon.css";

function Header() {
  return (
    <div className="fixed w-full z-10 p-4 sm:p-8 lg:p-24 flex items-center justify-end py-4 sm:py-8 lg:py-28 px-4 sm:px-10 lg:px-20">
      <a
        href="https://drive.google.com/file/d/1SpaDQ2kX4irXEQS9SMLuf20FDl3LZYVq/view?usp=sharing"
        target="_blank"
        className="bg-black px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-full text-white outline outline-white font-[anzo2] hover:bg-black/50"
      >
        Resume!
      </a>
      <i className="ri-menu-3-fill text-2xl sm:text-3xl ml-2 sm:ml-3 lg:ml-5 text-white"></i>
    </div>
  );
}

export default Header;
