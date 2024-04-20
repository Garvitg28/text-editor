import React from "react";

export default function Navbar() {
  // const people = [
  //   {
  //     name: "Garvit",
  //   },
  //   {
  //     name: "Ishan",
  //   },
  //   {
  //     name: "Samarendra",
  //   },
  // ];

  return (
    <>
      <div className="flex justify-center items-center max-w-screen">
        <div className=" w-full flex flex-col">
          <div className="bg-blue-600 flex justify-between items-center p-4">
            <div  className=" text-white px-2 font-regular  text-2xl">Text Editor</div>
            <div className="flex">
              {/* {people.map((person, index) => (
                <div key={index} className="relative">
                  <div className="w-8 h-8 bg-slate-200 rounded-full flex justify-center items-centre cursor-pointer p-2 m-0.5">
                    <div className="invisible absolute bg-blue-200 text-blue-600 rounded-md py-2 px-5 bottom-full left-1/2 transform -translate-x-1/2 opacity-0 transition-opacity duration-300">
                      {person.name}
                    </div>
                  </div>
                </div>
              ))} */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
