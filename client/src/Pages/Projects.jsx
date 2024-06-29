import React from 'react'

export default function Projects() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-950 text-white">

<main className="flex flex-col items-center justify-center text-center mt-6">
        <h1 className="text-6xl font-bold mb-32">Projects</h1>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-pink-500 rounded-lg z-0"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center space-x-0 md:space-x-4 p-6 bg-gray-900 rounded-lg">

            <div className="mb-4 md:mb-0 text-left">
              <h2 className="text-2xl  mb-10">Your Journey Through the Project..</h2>
              <button className="bg-black text-white border-2 border-blue-500 px-6 py-2 rounded-full hover:bg-blue-500 hover:text-white transition duration-300  ml-8 ">Upload</button>            


              <button className="bg-purple-500 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition duration-300 ml-12">PUBLISH</button>
            </div>
            <div className="mt-4 md:mt-0">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYMOFNFKCB27oaQDAbyY5ryxXAWUhmcv1Y3uqMI5i6xn7ehqAEfs5MVfYHRcMGBOtl4S4&usqp=CAU" alt="Project" className="rounded-lg shadow-lg"/>
            </div>
          </div>
        </div>
      </main>
    </div>
  
  );
}
