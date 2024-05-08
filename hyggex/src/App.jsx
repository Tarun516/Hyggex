import Navbar from "./Components/Navbar";
import { BsHouse } from "react-icons/bs";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdOutlineLightbulb } from "react-icons/md";
import { CiVolumeHigh } from "react-icons/ci";
import { RxReload } from "react-icons/rx";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdZoomOutMap } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

function App() {
  return (
    <>
      <div className="max-w-screen max-h-screen">
        <header>
          <Navbar />
        </header>

        <body>
          <div className=" mt-10 flex justify-start mx-20 items-center">
            <BsHouse className="size-4" />
            <MdKeyboardArrowRight className="size-6" />
            Flashcard
            <MdKeyboardArrowRight className="size-6" />
            Mathematics
            <MdKeyboardArrowRight className="size-6" />
            <span className="text-blue-900">Relation and Function</span>
          </div>

          <div className="mt-10 flex justify-start mx-20 text-2xl font-bold text-blue-900">
            <h1>Relation and Funtions ( Mathematics ) </h1>
          </div>

          <div className="mt-16 flex justify-center">
            <div className="flex flex-row gap-8">
              <button className="text-blue-900 font-bold">Study</button>
              <button>Quiz</button>
              <button>Test</button>
              <button>Games</button>
              <button>Others</button>
            </div>
          </div>

          <div className="flex  flex-col justify-center mt-20">
            <div className="flex  flex-col mx-[37%] bg-gradient-to-tr from-blue-600 to-blue-900  w-1/4 p-4 h-[250px] rounded-xl text-white">
              <div className="flex justify-between mx-3">
                <button>
                  <MdOutlineLightbulb className="size-6 font-bold" />
                </button>
                <button>
                  <CiVolumeHigh className="size-6 font-bold" />
                </button>
              </div>
              <div className="flex justify-center  mt-16 text-xl font-bold">
                <span>9 + 6 + 7x - 2x - 3</span>
              </div>
            </div>
            <div className="flex  items-center  mx-[37%] justify-evenly w-1/4 mt-4">
              <button>
                {" "}
                <RxReload className="size-5 font-bold text-blue-950" />
              </button>
              <div className="flex items-center gap-5">
                <button>
                  <MdKeyboardArrowLeft className="size-8 font-bold text-slate-50 bg-gradient-to-t from-blue-600 to-blue-900 rounded-full" />
                </button>
                <span className="text-blue-900">01/10</span>
                <button>
                  <MdKeyboardArrowRight className="size-8 font-bold text-slate-50 bg-gradient-to-t from-blue-600 to-blue-900 rounded-full" />
                </button>
              </div>
              <button>
                <MdZoomOutMap className="text-blue-950 size-6" />
              </button>
            </div>
          </div>

          <div className="flex justify-around items-center mt-16">
            <img src="./src/img2.png" alt="" className="w-[217px]" />
            <div className="flex flex-row justify-center items-center">
              <button>
                <FaPlus className="bg-gradient-to-t from-blue-600 to-blue-900 rounded-full text-white size-8 p-2 " />
              </button>
              <span className="text-blue-900 text-lg ">Create Flashcard</span>
            </div>
          </div>

          <div className="flex flex-col mt-16 ">
            <span className="text-transparent bg-gradient-to-t from-blue-600 to-blue-950 bg-clip-text mx-20 text-3xl font-bold">
              FAQ
            </span>
            <div className="flex flex-col justify-evenly">
              <button className="flex flex-row justify-between items-center border border-blue-500 p-2 text-lg rounded-lg w-1/2 mx-20 mt-6">
                <span>Can education flashcards be used for all ages?</span>{" "}
                <MdOutlineKeyboardArrowDown />
              </button>
              <button className="flex flex-row justify-between items-center border border-blue-500 p-2 text-lg rounded-lg w-1/2 mx-20 mt-6">
                <span>How do education flashcards work?</span>{" "}
                <MdOutlineKeyboardArrowDown />
              </button>
              <button className="flex flex-row justify-between items-center border border-blue-500 p-2 text-lg rounded-lg w-1/2 mx-20 mt-6">
                <span>
                  Can education flashcards be used for teset preparation?
                </span>{" "}
                <MdOutlineKeyboardArrowDown />
              </button>
            </div>
          </div>
        </body>
      </div>
    </>
  );
}

export default App;
