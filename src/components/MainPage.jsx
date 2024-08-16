import avatarBharat from "../assets/images/avatarBharat.jpeg";
const MainPage = () => {
  return (
    <div className=" bg-gray-800 w-[300px] p-5 rounded-md text-center ">
      <div className="flex flex-col items-center gap-3">
        <img
          src={avatarBharat}
          alt="avatar"
          className="h-28 w-28 rounded-full"
        />
        <h1 className="text-2xl font-semibold text-white">Bharat Dhiman</h1>
        <h2 className="text-xl font-semibold text-cyan-400">Haryana, India</h2>
        <p className="text-lg font-semibold text-slate-300">
          "Front-end developer"
        </p>
      </div>
      <div className="flex flex-col gap-2 my-3">
        <a
          href="https://github.com/bharat40"
          target="_blank"
          className="px-2 py-1 bg-gray-500 font-semibold text-white rounded-md hover:bg-cyan-400 active:bg-cyan-500 hover:text-black"
        >
          <button>GitHub</button>
        </a>
        <a
          href="https://www.linkedin.com/in/bharat-dhiman-b8a51a25a/"
          target="_blank"
          className="px-2 py-1 bg-gray-500 font-semibold text-white rounded-md hover:bg-cyan-400 active:bg-cyan-500 hover:text-black"
        >
          <button>LinkedIn</button>
        </a>
        <a
          href="https://x.com/BharatDhiman21"
          target="_blank"
          className="px-2 py-1 bg-gray-500 font-semibold text-white rounded-md hover:bg-cyan-400 active:bg-cyan-500 hover:text-black"
        >
          <button>Twitter</button>
        </a>
        <a
          href="https://www.instagram.com/bharat.dhiman21/"
          target="_blank"
          className="px-2 py-1 bg-gray-500 font-semibold text-white rounded-md hover:bg-cyan-400 active:bg-cyan-500 hover:text-black"
        >
          <button>Instagram</button>
        </a>
      </div>
    </div>
  );
};

export default MainPage;
