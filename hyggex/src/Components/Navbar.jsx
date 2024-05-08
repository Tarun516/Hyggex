import React from "react";


function Navbar() {
  return (
    <div className="max-w-screen flex flex-row justify-between items-center">
      <div>
        <img
          src="../src/assets/image.png"
          alt=""
          className="size-10 w-[191px] h-[39px] "
        />
      </div>

      <div className="flex flex-row items-center  gap-[40px] ">
        <ul className="flex gap-5">
          <li>Home</li>
          <li>Flashcard</li>
          <li>Contact</li>
        </ul>
        <ul>
          <li>FAQ</li>
        </ul>
        <ul>
          <li>
            <button className="text-white py-2 px-3 w-20  bg-gradient-to-t from-blue-600 to-blue-900 rounded-full">
              Login
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
