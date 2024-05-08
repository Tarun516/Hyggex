import React from "react";

function Navbar() {
  return (
    <div className="max-w-screen flex flex-row justify-between items-center mt-4 mx-10">
      <div>
        <img
          src="https://www.figma.com/file/Aj8hzPAAd25ViQ9GQGlZzI/Untitled-(Copy)?type=design&node-id=1-110&mode=design&t=uQiPyyAIc7gLn9vq-4"
          alt=""
          className="size-10 w-[191px] h-[39px] "
        />
      </div>

      <div className="flex flex-row justify-between items-center  gap-[40px] ">
        <div className="flex gap-5">
          <button>Home</button>
          <button>Flashcard</button>
          <button>Contact</button>
        </div>
        <div>
          <button>FAQ</button>
        </div>
        <div>
          <div>
            <button className="text-white py-2 px-3 w-20  bg-gradient-to-t from-blue-600 to-blue-900  rounded-full">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
